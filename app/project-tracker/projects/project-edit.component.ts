import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';

import { ProjectTrackerComponent } from './project-tracker.component'

@Component({
    moduleId: module.id,
    templateUrl: 'project-edit.component.html',
    selector: 'project-edit'
})

export class ProjectEditComponent{
    @Input() mainProject:ProjectTrackerComponent;
    isNew : boolean = false;
    submitted = false;

    technology = [
        '.NET Technology',
        'MS Access FrontEnd + MS SQL Server Backend',
        'MS Access FrontEnd + Backend'
    ];
    
    backtoList(): void {
        this.mainProject.viewpage=0;
        this.mainProject.refreshList();
    }

    onSubmit(): void {
        this.mainProject.saveRecord();
        setTimeout(
            () => {
                this.backtoList();
            }, 
            2000
        );
    }
    get diagnostic() { return JSON.stringify(this.mainProject.selectedProject); }
}