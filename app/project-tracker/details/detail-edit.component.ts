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
    //date: DateModel;
    //options: DatePickerOptions;
    constructor() {
        //this.options = new DatePickerOptions();
    }
    priority = [
        'High','Medium','Low'
    ];

    detailStatus = [
        'Awaiting','In Progress','Completed','On Hold'
    ];
    
    backtoList(): void {
        this.mainDetail.viewpage=0;
        this.mainDetail.refreshList();
    }

    onSubmit(): void {
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
    
    get diagnostic() { return JSON.stringify(this.mainDetail.selectedDetail); }
}