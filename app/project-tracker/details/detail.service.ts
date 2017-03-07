import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Detail } from './detail';

@Injectable()
export class DetailService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private detailsUrl = 'api/details';  // testing
    //private carsUrl = 'http://localhost:3000/api/ng2_cars';  // live

    constructor(private http: Http){}
    
    postDetail(newDetail: Detail): Promise<Detail> {
        return this.http
            .post(this.detailsUrl, JSON.stringify(newDetail), {headers: this.headers})
            .toPromise()
            .then(res => res.json())  // testing
            .catch(this.handleError);
    }

    getCompletedItems(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/GetCompletedItems/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }
    
    getOnHoldItems(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/GetOnholdItems/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getIncidentItems(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/GetIncidentItems/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                //.then(response => response.json())  // live
                .catch(this.handleError);
    }

    getTaskItems(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/GetTaskItems/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                .catch(this.handleError);
    }

    getDetails(id: string): Promise<Detail[]> {
        const url = `${this.detailsUrl}/?projectID=${id}`;
        return this.http
                .get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json()) //testing
                .catch(this.handleError);
    }

    getDetail(id: string): Promise<Detail> {
        const url = `${this.detailsUrl}/GetDetail/?detailID=${id}`;

        return this.http
                .get(url,{headers: this.headers})
                .toPromise()
                .then(response => response.json())  // testing
                .catch(this.handleError);

    }

    putDetail(detail: Detail): Promise<Detail> {
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
