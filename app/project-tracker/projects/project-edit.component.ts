import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { Project } from  './project';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl: 'project-edit.component.html',
    selector: 'project-edit'
})

export class ProjectEditComponent implements OnInit{
    model = new Project(0, '', '');
    submitted = false;
    technology = [
        '.NET Technology',
        'MS Access FrontEnd + MS SQL Server Backend',
        'MS Access FrontEnd + Backend'
    ];

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.projectService.getProject(+params['id'])) //the + value will convert id to number type
            .subscribe(project => this.model = project);
    }

    onSubmit(): void {
        this.submitted = true;
        this.projectService.putProject(this.model);

        setTimeout(
            () => {
                this.router.navigate(['/project-list'])
            }, 
            2000
        );
    }
}