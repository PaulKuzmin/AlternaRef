import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class CalcSource extends DataSource {
    readonly path = 'widget/calculator/';

    constructor(public http: Http) {
        super(http);
    }

    getParams(code: string) {
        return this.getCurrent(this.path + "params/" + code);
    }
}