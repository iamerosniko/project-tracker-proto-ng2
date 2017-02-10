import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from './project.service';
import { ProjectEditComponent } from './project-edit.component';
import { Project } from './project'

@Component({
    moduleId: module.id,
    templateUrl: 'project-list.component.html',
    selector: 'project-list'
})

export class ProjectListComponent implements OnInit{
    projects: Project[];

    constructor(
        private router: Router,
        private projectService: ProjectService
    ) {}

    getProjects(): void {
        this.projectService.getProjects().then(project => this.projects = project);
    }

    ngOnInit(): void {
        this.getProjects();
    }

    onSelect(project: Project) {
        this.router.navigate(['/projects', project.id]);
    }
}