import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { CarDetailComponent } from './car-detail.component';
//import { CarFormComponent } from './car-form.component';
//import { CarsListComponent } from './cars-list.component';
//import { CarEditComponent } from './car-edit.component';
import { ProjectListComponent } from './project-list.component';
const projectTrackerRoutes: Routes = [
    //{path: 'cars', component: CarsListComponent},
    //{path: 'car/create', component: CarFormComponent},
    //{path: 'car/:id', component: CarDetailComponent},
    //{path: 'caredit/:id', component: CarEditComponent}
    { path : 'project-tracker', component: ProjectListComponent }
];

 @NgModule ({
     imports: [ RouterModule.forChild(projectTrackerRoutes) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}