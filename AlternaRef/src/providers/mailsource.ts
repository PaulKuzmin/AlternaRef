import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class MailSource extends DataSource {
    readonly path = 'widget/mailto';

    constructor(public http: Http) {
        super(http);
    }

    sendRequest(query_params) {
        return this.postCurrent(this.path, query_params);
    }
}