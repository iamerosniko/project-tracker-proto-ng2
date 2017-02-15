import  { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectTrackerComponent } from './project-tracker.component';
import { ProjectService } from './project.service';
import { ProjectEditComponent } from './project-edit.component';
import { Project } from './project'

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent{
    @Input() mainProject:ProjectTrackerComponent;

    newProject(): void {
        this.mainProject.newRecord();
    }

    deleteProject(projectid: number){
        this.mainProject.deleteRecord(projectid);
        this.mainProject.refreshList();
    }

    onSelect(project: Project) {
        this.mainProject.viewpage=1;
        this.mainProject.selectedProject=project;
    }
}