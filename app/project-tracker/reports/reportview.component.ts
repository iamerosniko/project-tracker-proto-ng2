import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Detail } from '../details/detail';

@Component({
    moduleId: module.id,
    templateUrl: 'reportview.component.html',
    selector: 'report-view'
})

export class ReportViewComponent {
    @Input() details:Detail;
}