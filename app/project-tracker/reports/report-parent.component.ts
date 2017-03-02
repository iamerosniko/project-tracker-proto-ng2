import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UUID } from 'angular2-uuid';
//Folder : project
import { ReportService } from './report.service';
//Folder : Projects
import { ProjectService } from '../projects/project.service';
import { Project } from '../projects/project';
//Folder : Details
import { DetailService } from '../details/detail.service';
import { IncidentService } from '../details/incident.service'; 
import { Detail } from '../details/detail';

@Component({
    moduleId: module.id,
    templateUrl:`report-parent.component.html`
})

export class ReportParentComponent implements OnInit{
    
    projects : Project[]=null;
    taskList : Detail[]=null;
    completedList : Detail[]=null;
    incidentList : Detail[]=null;
    onholdList : Detail[]=null;

    ctr : number = 0;
    projectLength : number=0;

    constructor(
        public reportService : ReportService,
        public detailService : DetailService,
        public incidentService : IncidentService,
        private projectService : ProjectService,
    ){ }

    getAllProjects() : void{
        this.projectService.getProjects().then(projects => this.projects = projects);       
        setTimeout(
            () => {
                this.projectLength=this.projects.length;
                //alert("count : "+this.projectLength);
                if(this.projectLength>0){
                    this.getAllDetails(this.projects[this.ctr]);
                }
            }, 
            1000
        );     
    }

    getAllDetails(project: Project) : void {
        this.detailService.getDetails(project.pt_project_id).then(tasks => this.taskList = tasks);
        this.incidentService.getIncidents(project.pt_project_id).then(incidents => this.incidentList = incidents);
    }

    ngOnInit(){
        this.getAllProjects();
    }
}
