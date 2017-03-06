import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../details/detail';
import { ReportParentComponent } from './report-parent.component';

@Component({
    moduleId: module.id,
    templateUrl: 'reportview.component.html',
    selector: 'report-view'
})

export class ReportViewComponent {
    @Input() details:Detail;
    @Input() parent:ReportParentComponent;
    
    getProgressColor(progress:number): string{
        return progress == 0 ? 'black' : 'white';
    }
}