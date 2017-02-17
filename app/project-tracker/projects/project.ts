export class Project {
    constructor (
        public pt_project_id: string,
        public pt_project_name: string,
        public pt_project_desc: string,
        public pt_project_tech: string,
        public pt_project_owner: string,
        public pt_project_deleted: Boolean,
        public pt_project_show: boolean
    ){}
}