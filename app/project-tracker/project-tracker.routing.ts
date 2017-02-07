import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectTrackerComponent } from './project-tracker.component';
const projectTrackerRoutes: Routes = [
    //paths
    { path : 'project-tracker', component: ProjectTrackerComponent },
    { path : 'project-list', component : ProjectListComponent }

];

 @NgModule ({
     imports: [ RouterModule.forRoot(projectTrackerRoutes, {useHash:true}) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}