import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { IncidentService } from './incident.service';
import { ProjectService } from '../projects/project.service';
import { Detail } from './detail';
import { Project } from '../projects/project';
import { UUID } from 'angular2-uuid';

@Component({
    moduleId: module.id,
    templateUrl:`incident-parent.component.html`
})

export class IncidentParentComponent implements OnInit{
    project : Project = new Project('','','','','',false,false);
    detailList : Detail[];
    projectID : string ='';
    viewpage : number = 0;
    isNew : boolean = false;
    selectedDetail : Detail = new Detail('','','','','','','',null,null,null,null,'awaiting',false,true,false,'',0,'Incident');
        
    constructor(
        public incidentService : IncidentService,
        private projectService : ProjectService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    refreshList(): void {
        this.incidentService.getIncidents(this.projectID).then(detail => this.detailList = detail);
    }

    getProjectDetail(): void{
        this.projectService.getProject(this.projectID).then(project => this.project = project);
    }

    newRecord(): void{
        this.isNew=true;
        this.viewpage=1;
        this.selectedDetail=new Detail(UUID.UUID(),this.projectID,'','','','','',null,null,null,null,'awaiting',false,true,false,'',0,'Incident');
    }
    
    saveRecord(): void{
        this.isNew ? this.incidentService.postIncident(this.selectedDetail) : this.incidentService.putIncident(this.selectedDetail);
        this.isNew=false;
    }

    deleteRecord(detail:Detail): void{
        if (confirm("Are you sure you want to delete?")) {
            detail.pt_detail_deleted=true;
            this.incidentService.putIncident(detail);
            setTimeout(
                () => {
                    this.refreshList();
                }, 
                750
            );
        }
    }
    getselectedDetailID(){
        this.route.params.subscribe(params => {
            this.projectID = params['id'];});    
    }

    ngOnInit(){
        this.getselectedDetailID();
        this.refreshList();
    }
}
