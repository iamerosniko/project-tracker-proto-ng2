import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Fui } from './fui';

@Injectable()
export class FuiService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private fuiUrl = 'api/fui';  // testing

    constructor(private http: Http){}
    
    postFui(newFui: Fui): Promise<Fui> {
        return this.http
            .post(this.fuiUrl, JSON.stringify(newFui), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            //.then(res => res.json())  // live
            .catch(this.handleError);
    }


    getFuis(): Promise<Fui[]> {
        return this.http
                .get(this.fuiUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getFui(id: string): Promise<Fui> {
        const url = `${this.fuiUrl}/?projectID=${id}`;
        return this.http
                .get(url)
                .toPromise()
                .then(response => response.json())  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
                 
    }

    putFui(project: Fui): Promise<Fui> {
        const url = `${this.fuiUrl}/${project.pt_project_id}`;
        return this.http
            .put(url, JSON.stringify(project), {headers: this.headers})
            .toPromise()
            .then(() => project)
            .catch(this.handleError);
    }

    deleteFui(id: string): Promise<void> {
        const url = `${this.fuiUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
