import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Fui } from '../followupitems/fui';

@Component({
    moduleId: module.id,
    templateUrl: 'reportfui.component.html',
    selector: 'report-fui'
})

export class ReportFuiComponent {
    @Input() fuiList:Fui;
}