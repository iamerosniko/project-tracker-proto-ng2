import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
    moduleId: module.id,
    templateUrl:`project-tracker.component.html`
})

export class ProjectTrackerComponent implements OnInit{
    projectList : Project[];
    viewpage : number = 0;
    isNew : boolean = false;
    selectedProject : Project = new Project(0,'','','','');
    constructor(
        public projectService: ProjectService
    ){ }

    refreshList(): void {
        this.projectService.getProjects().then(project => this.projectList = project );
    }

    newRecord(): void{
        this.selectedProject=new Project(0,'','','','');
        this.isNew=true;
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew ? this.projectService.postProject(this.selectedProject) : this.projectService.putProject(this.selectedProject);
    }

    ngOnInit(){
        this.refreshList();
    }
}
