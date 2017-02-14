import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { Project } from  './project';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl: 'project-edit.component.html',
    selector: 'project-edit'
})

export class ProjectEditComponent{
    isNew : boolean = false;
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
    ){
        
    }
    
    refreshList(): void{
        
    }

    onSubmit(): void {
        
        setTimeout(
            () => {
                this.router.navigate(['/project-tracker'])
            }, 
            2000
        );
    }
}