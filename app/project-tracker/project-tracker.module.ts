import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
//Components
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectParentComponent } from './projects/project-parent.component';
//Details
import { DetailListComponent } from './details/detail-list.component';
import { DetailEditComponent } from './details/detail-edit.component';
import { DetailParentComponent } from './details/detail-parent.component';
//service
import { ProjectService } from './projects/project.service';
import { DetailService } from './details/detail.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProjectDataService }  from './projects/project-data.service';
import { DatepickerModule } from 'angular2-material-datepicker'
import { ProjectTrackerRouting } from './project-tracker.routing';

import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DatepickerModule,
        InMemoryWebApiModule.forRoot(ProjectDataService),
        ProjectTrackerRouting
        
    ],
    declarations: [
        ProjectListComponent,
        ProjectEditComponent,
        ProjectParentComponent,
        DetailListComponent,
        DetailEditComponent,
        DetailParentComponent
    ],
    providers: [
        ProjectService,DetailService
    ]
})

export class ProjectTrackerModule {}