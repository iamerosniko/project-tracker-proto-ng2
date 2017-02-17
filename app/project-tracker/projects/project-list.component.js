"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var project_parent_component_1 = require('./project-parent.component');
var ProjectListComponent = (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.newProject = function () {
        this.mainProject.newRecord();
    };
    ProjectListComponent.prototype.deleteProject = function (projectid) {
        this.mainProject.deleteRecord(projectid);
        this.mainProject.refreshList();
    };
    ProjectListComponent.prototype.onSelect = function (project) {
        this.mainProject.isNew = false;
        this.mainProject.viewpage = 1;
        this.mainProject.selectedProject = project;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_parent_component_1.ProjectParentComponent)
    ], ProjectListComponent.prototype, "mainProject", void 0);
    ProjectListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'project-list.component.html',
            selector: 'project-list'
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());
exports.ProjectListComponent = ProjectListComponent;
