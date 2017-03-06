import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UUID } from 'angular2-uuid';
//Folder : Projects
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project';
//Folder : Details
import { DetailService } from '../details/detail.service';
import { Detail } from '../details/detail';
//followupitems
import { FuiService } from '../followupitems/fui.service';
import { Fui } from '../followupitems/fui';
@Component({
    moduleId: module.id,
    templateUrl:`report-parent.component.html`
})

export class ReportParentComponent implements OnInit{
    currentProjectName = '';
    projects : Project[]=null;
    taskList : Detail[]=null;
    completedList : Detail[]=null;
    incidentList : Detail[]=null;
    onholdList : Detail[]=null;
    fuiList : Fui[]=null;

    ctr : number = 0;
    projectLength : number=0;

    constructor(
        public detailService : DetailService,
        private projectService : ProjectService,
        private fuiService:FuiService
    ){ }

    getAllProjects() : void{
            
        this.projectService.getProjects()
        .then(projects =>{ 
            this.projects = projects,
            this.projectLength=this.projects.length,
            this.projectLength > 0 ? this.getAllDetails(this.projects[this.ctr]) : null;
         });
    }

    changePage(con:boolean):void{
        this.ctr = con ? this.ctr+1 : this.ctr-1;
        this.getAllDetails(this.projects[this.ctr]);
    }

    getAllDetails(project: Project) : void {
        this.detailService.getTaskItems(project.pt_project_id).then(tasks => this.taskList = tasks);
        this.detailService.getIncidentItems(project.pt_project_id).then(incidents => this.incidentList = incidents);
        this.detailService.getCompletedItems(project.pt_project_id).then(complete => this.completedList=complete);
        this.detailService.getOnHoldItems(project.pt_project_id).then(onhold => this.onholdList=onhold);
        this.fuiService.getFuis().then(fui => this.fuiList = fui);
        this.currentProjectName=project.pt_project_name;
        
    }

    tabChange():void{
        this.ctr=0;
        this.getAllDetails(this.projects[this.ctr]);
    }

    ngOnInit(){
        this.getAllProjects();
    }
}
