import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { DetailService } from './detail.service';
import { ProjectService } from '../projects/project.service';
import { Detail } from './detail';
import { Project } from '../projects/project';
import { UUID } from 'angular2-uuid';

@Component({
    moduleId: module.id,
    templateUrl:`incident-parent.component.html`
})

export class IncidentParentComponent implements OnInit{
    tag='Incidents';
    project : Project = new Project('','','','','',false,false);
    detailList : Detail[];
    projectID : string ='';
    viewpage : number = 0;
    isNew : boolean = false;
    selectedDetail : Detail = new Detail('','','','','','','',null,null,null,null,'awaiting',false,true,false,'',0,'Incident');
    actualdaterequired: number = 0;   
    constructor(
        public detailService : DetailService,
        private projectService : ProjectService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    refreshList(): void {
        this.detailService.getIncidentItems(this.projectID).then(detail => this.detailList = detail);
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
        this.isNew ? this.detailService.postDetail(this.selectedDetail) : this.detailService.putDetail(this.selectedDetail);
        this.isNew=false;
    }

    updateStatus(): void {
        if (this.selectedDetail.pt_detail_progress==0){
            this.selectedDetail.pt_detail_status="Awaiting";
            this.actualdaterequired=0;
        }
        else if(this.selectedDetail.pt_detail_progress<100){
            this.selectedDetail.pt_detail_status="On Going";
            this.actualdaterequired=1;
        }
        else{
            this.selectedDetail.pt_detail_status="Completed";
            this.actualdaterequired=2;
        }
    }

    deleteRecord(detail:Detail): void{
        if (confirm("Are you sure you want to delete?")) {
            detail.pt_detail_deleted=true;
            this.detailService.putDetail(detail).then(any=>{
                this.refreshList();
            });
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
