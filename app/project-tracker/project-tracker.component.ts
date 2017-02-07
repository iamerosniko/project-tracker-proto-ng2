import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    template:`
    <div class="panel-body">
        
        <a class="btn btn-primary btn-sm" routerLink="/project-edit">New Project</a>
        
        
        <router-outlet></router-outlet>
        <project-list></project-list>
    </div>
    `
})

export class ProjectTrackerComponent{}