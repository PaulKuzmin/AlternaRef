import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataSource {
    //readonly endpoint = 'https://alterna.ltd/';
    readonly endpoint = '/api/';

    constructor(public http: Http) {
        
    }

    getCurrent(url: string): Promise<any> {
        let requestUrl = this.endpoint + url + '?json=true';
        console.log(requestUrl);
        return this.http.get(requestUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(res: Response | any) {
        console.error('Entering handleError');
        console.dir(res);
        return Promise.reject(res.message || res);
    }
}
