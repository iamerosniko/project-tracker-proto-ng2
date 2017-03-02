import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UUID } from 'angular2-uuid';
import { Detail } from '../details/detail';

@Injectable()
export class ReportService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private detailsUrl = 'api/reports';  // testing

    constructor(private http: Http){}

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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
