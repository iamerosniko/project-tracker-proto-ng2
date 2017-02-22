"use strict";
var Detail = (function () {
    function Detail(pt_detail_id, //primary key
        pt_project_id, //foreign key
        pt_detail_priority, pt_detail_task, pt_detail_assignee, pt_detail_description, pt_detail_deliverable, pt_detail_eststart, pt_detail_estend, pt_detail_actstart, pt_detail_actend, pt_detail_staus, pt_detail_deleted, pt_detail_show) {
        this.pt_detail_id = pt_detail_id;
        this.pt_project_id = pt_project_id;
        this.pt_detail_priority = pt_detail_priority;
        this.pt_detail_task = pt_detail_task;
        this.pt_detail_assignee = pt_detail_assignee;
        this.pt_detail_description = pt_detail_description;
        this.pt_detail_deliverable = pt_detail_deliverable;
        this.pt_detail_eststart = pt_detail_eststart;
        this.pt_detail_estend = pt_detail_estend;
        this.pt_detail_actstart = pt_detail_actstart;
        this.pt_detail_actend = pt_detail_actend;
        this.pt_detail_staus = pt_detail_staus;
        this.pt_detail_deleted = pt_detail_deleted;
        this.pt_detail_show = pt_detail_show;
    }
    return Detail;
}());
exports.Detail = Detail;