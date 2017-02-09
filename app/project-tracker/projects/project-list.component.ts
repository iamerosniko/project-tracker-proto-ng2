import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from './project.service';
import { Project } from './project'

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent implements OnInit{
    project: Project[];

    constructor(
        private router: Router,
        private projectService: ProjectService
    ) {}

    getProjects(): void {
        this.projectService.getProjects().then(project => this.project = project);
    }

    ngOnInit(): void {
        this.getProjects();
    }

    onSelect(project: Project) {
        this.router.navigate(['/project', project.id]);
    }
}