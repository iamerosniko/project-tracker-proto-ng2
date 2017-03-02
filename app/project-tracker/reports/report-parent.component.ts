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
import { Detail } from '../details/detail';
@Component({
    moduleId: module.id,
    templateUrl:`incident-parent.component.html`
})

export class ReportParentComponent implements OnInit{
    project : Project = new Project('','','','','',false,false);
    detailList : Detail[];
    projectID : string ='';
    viewpage : number = 0;
    isNew : boolean = false;
    selectedDetail : Detail = new Detail('','','','','','','',null,null,null,null,'awaiting',false,true,false,'',0,'Incident');
        
    constructor(
        public reportService : ReportService,
        private projectService : ProjectService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    refreshList(): void {
        this.reportService.getIncidents(this.projectID).then(detail => this.detailList = detail);
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
