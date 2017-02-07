import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    template:`
    <div class="panel-body">
        <ul class="nav nav-tabs">
            <li role="presentation"><a routerLink="/project-list">New Project</a></li>
        </ul>
        <router-outlet></router-outlet>
        <project-list></project-list>
    </div>
    `
})

export class ProjectTrackerComponent{}