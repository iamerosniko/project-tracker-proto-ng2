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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_bootstrap_1 = require('ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var ng2_bootstrap_3 = require('ng2-bootstrap');
var ng2_google_charts_1 = require('ng2-google-charts');
//Components
var project_edit_component_1 = require('./projects/project-edit.component');
var project_list_component_1 = require('./projects/project-list.component');
var project_parent_component_1 = require('./projects/project-parent.component');
//Details
var detail_list_component_1 = require('./details/detail-list.component');
var detail_edit_component_1 = require('./details/detail-edit.component');
var detail_parent_component_1 = require('./details/detail-parent.component');
var incident_parent_component_1 = require('./details/incident-parent.component');
//reports
var report_parent_component_1 = require('./reports/report-parent.component');
var reportview_component_1 = require('./reports/reportview.component');
var reportfui_component_1 = require('./reports/reportfui.component');
//followupitems
var fui_edit_component_1 = require('./followupitems/fui-edit.component');
var fui_list_component_1 = require('./followupitems/fui-list.component');
var fui_parent_component_1 = require('./followupitems/fui-parent.component');
//service
var project_service_1 = require('./projects/project.service');
var detail_service_1 = require('./details/detail.service');
var fui_service_1 = require('./followupitems/fui.service');
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { ProjectDataService }  from './projects/project-data.service';
var project_tracker_routing_1 = require('./project-tracker.routing');
var ProjectTrackerModule = (function () {
    function ProjectTrackerModule() {
    }
    ProjectTrackerModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                ng2_bootstrap_2.TabsModule.forRoot(),
                ng2_bootstrap_1.ProgressbarModule.forRoot(),
                ng2_bootstrap_3.TooltipModule.forRoot(),
                ng2_google_charts_1.Ng2GoogleChartsModule,
                // InMemoryWebApiModule.forRoot(ProjectDataService),
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                project_tracker_routing_1.ProjectTrackerRouting
            ],
            declarations: [
                project_list_component_1.ProjectListComponent,
                project_edit_component_1.ProjectEditComponent,
                project_parent_component_1.ProjectParentComponent,
                incident_parent_component_1.IncidentParentComponent,
                detail_list_component_1.DetailListComponent,
                detail_edit_component_1.DetailEditComponent,
                detail_parent_component_1.DetailParentComponent,
                report_parent_component_1.ReportParentComponent,
                reportview_component_1.ReportViewComponent,
                reportfui_component_1.ReportFuiComponent,
                fui_edit_component_1.FuiEditComponent,
                fui_list_component_1.FuiListComponent,
                fui_parent_component_1.FuiParentComponent
            ],
            providers: [
                project_service_1.ProjectService,
                detail_service_1.DetailService,
                fui_service_1.FuiService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectTrackerModule);
    return ProjectTrackerModule;
}());
exports.ProjectTrackerModule = ProjectTrackerModule;
