import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { ProjectParentComponent } from './project-parent.component';
import { Project } from './project'

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent{
    @Input() mainProject:ProjectParentComponent;

    newProject(): void {
        this.mainProject.newRecord();
    }

    deleteProject(project: Project){
        this.mainProject.deleteRecord(project);
        this.mainProject.refreshList();
    }

    onSelect(project: Project) {
        this.mainProject.isNew=false;
        this.mainProject.viewpage=1;
        this.mainProject.selectedProject=project;
    }

    gotoDetailSelect(project: Project){
        this.mainProject.gotoDetail(project);
    }
}