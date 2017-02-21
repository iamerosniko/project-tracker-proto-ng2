import { Component, OnInit } from '@angular/core';
import { Detail } from './detail';
import { DetailService } from './detail.service';
import { UUID } from 'angular2-uuid';
@Component({
    moduleId: module.id,
    templateUrl:`project-parent.component.html`
})

export class ProjectParentComponent implements OnInit{
    detailList : Detail[];
    viewpage : number = 0;
    isNew : boolean = false;
    selectedDetail : Detail = new Detail('','','','','','','',
        new Date(),new Date(),new Date(),new Date(),'',false,true);
    constructor(
        public detailService: DetailService
    ){ }

    refreshList(): void {
        this.detailService.getDetails().then(detail => this.detailList = detail );
    }

    newRecord(): void{
        this.selectedDetail=new Detail('','','','','','','',
        new Date(),new Date(),new Date(),new Date(),'',false,true);
        this.isNew=true;
        this.viewpage=1;
    }
    
    saveRecord(): void{
        this.isNew ? this.detailService.postDetail(this.selectedDetail) : this.detailService.putDetail(this.selectedDetail);
        this.isNew=false;
    }

    deleteRecord(detail:Detail): void{
        if (confirm("Are you sure you want to delete?")) {
            detail.pt_detail_deleted=true;
            this.detailService.putDetail(detail);
            setTimeout(
                () => {
                    this.refreshList();
                }, 
                750
            );
        }
    }

    ngOnInit(){
        this.refreshList();
    }
}
