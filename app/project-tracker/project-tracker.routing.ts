import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectTrackerComponent } from './project-tracker.component';
const projectTrackerRoutes: Routes = [
    //paths
    { path : 'project-tracker', component: ProjectTrackerComponent },
];

 @NgModule ({
     imports: [ RouterModule.forChild(projectTrackerRoutes) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}