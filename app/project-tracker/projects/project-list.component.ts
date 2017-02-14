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

export class ProjectListComponent implements OnInit{
    projectList : Project[];
    @Input() mainProject:ProjectTrackerComponent;
    constructor(
        //private router: Router,
        private projectService:ProjectService,
        
    ) {}

    getProjects(): void {
        this.projectService.getProjects().then(project => this.mainProject.projectList=project );
    }

    newProject(): void {
    }

    ngOnInit(): void {
        this.getProjects();
    }

    deleteProject(projectid: number){
        this.projectService.deleteProject(projectid)
        this.getProjects();
    }

    onSelect(project: Project) {
        this.mainProject.viewpage=1;
    }
}