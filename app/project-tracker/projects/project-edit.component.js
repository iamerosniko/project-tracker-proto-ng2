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
var router_1 = require('@angular/router');
var project_tracker_component_1 = require('./project-tracker.component');
var ProjectEditComponent = (function () {
    function ProjectEditComponent(route, router) {
        this.route = route;
        this.router = router;
        this.isNew = false;
        this.submitted = false;
        this.technology = [
            '.NET Technology',
            'MS Access FrontEnd + MS SQL Server Backend',
            'MS Access FrontEnd + Backend'
        ];
    }
    ProjectEditComponent.prototype.backtoList = function () {
        this.mainProject.viewpage = 0;
        this.mainProject.refreshList();
    };
    ProjectEditComponent.prototype.onSubmit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/project-tracker']);
        }, 2000);
    };
    Object.defineProperty(ProjectEditComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.mainProject.selectedProject); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_tracker_component_1.ProjectTrackerComponent)
    ], ProjectEditComponent.prototype, "mainProject", void 0);
    ProjectEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'project-edit.component.html',
            selector: 'project-edit'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());
exports.ProjectEditComponent = ProjectEditComponent;
