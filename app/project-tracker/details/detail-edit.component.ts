import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { DetailParentComponent } from './detail-parent.component';

@Component({
    moduleId: module.id,
    templateUrl: 'detail-edit.component.html',
    selector: 'detail-edit'
})

export class DetailEditComponent{
    @Input() mainDetail:DetailParentComponent;
    submitted = false;
    showProgress = false;
    actualdaterequired: number = 0;
    tempVal:number;
    //date: DateModel;
    //options: DatePickerOptions;
    constructor() {
        //this.options = new DatePickerOptions();
    }
    priority = [
        'High','Medium','Low'
    ];

    entrytype = [
        'Task','Incident'
    ];
    
    backtoList(): void {
        this.mainDetail.viewpage=0;
        this.mainDetail.refreshList();
    }

    onSubmit(): void {
        this.showProgress=false;
        this.submitted = true;
        this.mainDetail.saveRecord();
        setTimeout(
            () => {
                this.submitted=false;
                this.backtoList();
            }, 
            2000
        );
    }

    getProgressColor(): string{
        return this.mainDetail.selectedDetail.pt_detail_progress == 0 ? 'black' : 'white';
    }

    updateStatus(): void {
        if (this.mainDetail.selectedDetail.pt_detail_progress==0){
            this.mainDetail.selectedDetail.pt_detail_status="Awaiting";
            this.actualdaterequired=0;
        }
        else if(this.mainDetail.selectedDetail.pt_detail_progress<100){
            this.mainDetail.selectedDetail.pt_detail_status="On Going";
            this.actualdaterequired=1;
        }
        else{
            this.mainDetail.selectedDetail.pt_detail_status="Completed";
            this.actualdaterequired=2;
        }
    }

    editProgress(): void {
        this.tempVal=this.mainDetail.selectedDetail.pt_detail_progress;
        this.showProgress=!this.showProgress;
    }

    applyProgress(): void{
        this.mainDetail.selectedDetail.pt_detail_progress=this.tempVal;
        this.editProgress();
        this.updateStatus();
    }

    get diagnostic() { return JSON.stringify(this.mainDetail.selectedDetail); }
}