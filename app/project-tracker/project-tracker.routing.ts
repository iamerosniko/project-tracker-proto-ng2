import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
//Projects
import { ProjectParentComponent } from './projects/project-parent.component';
//Details
import { DetailParentComponent } from './details/detail-parent.component';
import { IncidentParentComponent } from './details/incident-parent.component';

const projectTrackerRoutes: Routes = [
    //paths
    { path : 'project-tracker', component: ProjectParentComponent },
    { path : 'tasks/:id', component: DetailParentComponent},
    { path : 'incidents/:id', component: IncidentParentComponent},
];

 @NgModule ({
     imports: [ RouterModule.forChild(projectTrackerRoutes) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}