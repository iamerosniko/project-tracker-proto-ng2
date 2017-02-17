import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';

export class ProjectDataService implements InMemoryDbService {
  createDb() {
    let projects = [
        { 
            pt_project_id: UUID.UUID(),
            pt_project_name: "sample 1",
            pt_project_desc: "desc",
            pt_project_tech: "MS Access FrontEnd + Backend",
            pt_project_owner: "eros niko"
        },
        {
            pt_project_id: UUID.UUID(),
            pt_project_name: "sample 2",
            pt_project_desc: "desc",
            pt_project_tech: "MS Access FrontEnd + Backend",
            pt_project_owner: "eros niko"
        }
    ];
    return {projects};
  }
}