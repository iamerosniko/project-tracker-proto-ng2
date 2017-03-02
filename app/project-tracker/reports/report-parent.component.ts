import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { UUID } from 'angular2-uuid';
import { ActivatedRoute,  Params, Router } from '@angular/router';
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
    templateUrl:`incident-parent.component.html`
})

export class ReportParentComponent implements OnInit{
    projects : Project[];

    taskList : Detail[];
    completedList : Detail[];
    incidentList : Detail[];
    onholdList : Detail[];

    projectID : string ='';
    ctr : number = 0;
    projectLength : number = 0;

    constructor(
        public reportService : ReportService,
        public detailService : DetailService,
        public incidentService : IncidentService,
        private projectService : ProjectService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    refreshList(): void {
        //this.reportService.getIncidents(this.projectID).then(detail => this.detailList = detail);
    }

    ngOnInit(){
        //getAllProjects
        //getAllDetails(project[ctr])
    }
}
