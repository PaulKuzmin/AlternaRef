import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class ContactSource extends DataSource {
    readonly path = 'widget/contacts';

    constructor(public http: Http) {
        super(http);
    }

    get() {
        return this.getCurrent(this.path);
    }
}