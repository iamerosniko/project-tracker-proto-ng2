import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Project } from '../projects/project';

@Injectable()
export class DetailService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private detailsUrl = 'api/details';  // testing
    //private carsUrl = 'http://localhost:3000/api/ng2_cars';  // live

    constructor(private http: Http){}
    
    postDetail(newProject: Project): Promise<Project> {
        return this.http
            .post(this.detailsUrl, JSON.stringify(newProject), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            .catch(this.handleError);
    }


    getDetails(): Promise<Project[]> {
        return this.http
                .get(this.detailsUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json().data as Project[]) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getDetail(id: string): Promise<Project> {
        const url = `${this.detailsUrl}/${id}`;

        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json().data as Project)  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    putDetail(project: Project): Promise<Project> {
        const url = `${this.detailsUrl}/${project.pt_project_id}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
