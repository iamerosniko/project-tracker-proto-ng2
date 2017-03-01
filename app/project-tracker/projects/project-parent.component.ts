import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './project';
import { ProjectService } from './project.service';
import { UUID } from 'angular2-uuid';
@Component({
    moduleId: module.id,
    templateUrl:`project-parent.component.html`
})

export class ProjectParentComponent implements OnInit{
    projectList : Project[];
    viewpage : number = 0;
    isNew : boolean = false;
    selectedProject : Project = new Project('','','','','',false,true);
    constructor(
        private router: Router,
        public projectService: ProjectService
    ){ }

    refreshList(): void {
        this.projectService.getProjects().then(project => this.projectList = project );
    }

    newRecord(): void{
        this.selectedProject=new Project( UUID.UUID(),'','','','',false,true);
        this.isNew=true; 
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew ? this.projectService.postProject(this.selectedProject) : this.projectService.putProject(this.selectedProject);
        this.isNew=false;
    }

    deleteRecord(project:Project): void{
        if (confirm("Are you sure you want to delete?")) {
            project.pt_project_deleted=true;
            this.projectService.putProject(project);
            setTimeout(
                () => {
                    this.refreshList();
                }, 
                750
            );
        }
    }
    
    gotoDetail(project:Project){
        this.router.navigate(['/tasks', project.pt_project_id]);
    }

    gotoIncident(project:Project){
        this.router.navigate(['/incidents', project.pt_project_id]);
    }

    ngOnInit(){
        this.refreshList();
    }
}
