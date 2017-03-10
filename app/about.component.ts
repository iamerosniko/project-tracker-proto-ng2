import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'about.component.html'
})

export class AboutComponent {
       
mydate:Date=new Date(2017,1,5);

public timelineChartOptions:any =  {
    chartType: 'Timeline',
    dataTable: [
      ['Name', 'From', 'To'],
      [ 'Adams',      new Date(2019, 2, 4),  new Date(2019, 2, 20) ],
      [ 'Jefferson',  this.mydate,  new Date(2017, 2, 4) ]
    ]
 }

}