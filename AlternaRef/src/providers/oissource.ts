import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class OisSource extends DataSource {
    readonly path = 'widget/ois/list/';

    constructor(public http: Http) {
        super(http);
    }

    getList(text: string) {
        return this.getCurrent(this.path + text);
    }
}
