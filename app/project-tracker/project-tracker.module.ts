import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';
//Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
//Components
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectTrackerComponent } from './project-tracker.component';
//import { CarService } from './car.service';

import { ProjectTrackerRouting } from './project-tracker.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService),
        ProjectTrackerRouting
    ],
    declarations: [
        ProjectListComponent,
        ProjectEditComponent,
        ProjectTrackerComponent
        //CarDetailComponent,
        //CarFormComponent,
        //CarsListComponent,
        //CarEditComponent
    ],
    providers: [
        //CarService
    ]
})

export class ProjectTrackerModule {}