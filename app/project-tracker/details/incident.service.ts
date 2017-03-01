import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Detail } from './detail';

@Injectable()
export class IncidentService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private detailsUrl = 'api/incidents';  // testing

    constructor(private http: Http){}
    
    postIncident(newDetail: Detail): Promise<Detail> {
        return this.http
            .post(this.detailsUrl, JSON.stringify(newDetail), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            .catch(this.handleError);
    }

    getIncidents(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getIncident(id: string): Promise<Detail> {
        const url = `${this.detailsUrl}/GetDetail/?detailID=${id}`;

        return this.http
                .get(url,{headers: this.headers})
                .toPromise()
                .then(response => response.json())  // testing
                //.then(response => response.json())  // live
                .catch(this.handleError);

    }

    putIncident(detail: Detail): Promise<Detail> {
        const url = `${this.detailsUrl}/${detail.pt_project_id}`;
        return this.http
            .put(url, JSON.stringify(detail), {headers: this.headers})
            .toPromise()
            .then(() => detail)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
