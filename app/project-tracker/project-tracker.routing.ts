import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
//Projects
import { ProjectListComponent } from './projects/project-list.component';
import { ProjectEditComponent } from './projects/project-edit.component';
import { ProjectParentComponent } from './projects/project-parent.component';
//Details
import { DetailListComponent } from './detail/detail-list.component';
import { DetailEditComponent } from './detail/detail-edit.component';
import { DetailParentComponent } from './detail/detail-parent.component';

const projectTrackerRoutes: Routes = [
    //paths
    { path : 'project-tracker', component: ProjectParentComponent },
    { path : 'project/:id', component: DetailListComponent},
];

 @NgModule ({
     imports: [ RouterModule.forChild(projectTrackerRoutes) ],
     exports: [ RouterModule ]
 })

export class ProjectTrackerRouting {}