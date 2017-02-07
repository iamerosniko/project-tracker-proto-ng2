import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
//Components
import { ProjectListComponent } from './project-list.component'
//import { CarDetailComponent } from './car-detail.component';
//import { CarFormComponent } from './car-form.component';
//import { CarsListComponent } from './cars-list.component';
//import { CarEditComponent } from './car-edit.component';

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
        ProjectListComponent
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