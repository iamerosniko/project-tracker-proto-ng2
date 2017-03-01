import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { ProgressbarModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

//Components
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectParentComponent } from './projects/project-parent.component';
//Details
import { DetailListComponent } from './details/detail-list.component';
import { DetailEditComponent } from './details/detail-edit.component';
import { DetailParentComponent } from './details/detail-parent.component';
import { IncidentParentComponent } from './details/incident-parent.component';
//service
import { ProjectService } from './projects/project.service';
import { DetailService } from './details/detail.service';
import { IncidentService } from './details/incident.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { ProjectDataService }  from './projects/project-data.service';
import { ProjectTrackerRouting } from './project-tracker.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        TabsModule.forRoot(),
        ProgressbarModule.forRoot(),
        // InMemoryWebApiModule.forRoot(ProjectDataService),
        Ng2DatetimePickerModule,
        ProjectTrackerRouting
        
    ],
    declarations: [
        ProjectListComponent,
        ProjectEditComponent,
        ProjectParentComponent,
        IncidentParentComponent,
        DetailListComponent,
        DetailEditComponent,
        DetailParentComponent
    ],
    providers: [
        ProjectService,DetailService,IncidentService
    ]
})

export class ProjectTrackerModule {}