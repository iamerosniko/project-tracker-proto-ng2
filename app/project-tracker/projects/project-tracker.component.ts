import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl:`project-tracker.component.html`
})

export class ProjectTrackerComponent{
    projectList : Project[];
    viewpage : number = 0;
    selectedProject : Project = new Project(0,'','','','');
    constructor(
        public projectService: ProjectService
    ){ }
}
