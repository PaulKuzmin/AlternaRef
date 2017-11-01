import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class CalcSource extends DataSource {
    readonly path = 'widget/calculator/';

    constructor(public http: Http) {
        super(http);
    }

    getParams(code: string, query_params = {}) {
        let params = new URLSearchParams();
        for (let key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "params/" + code + '?' + params.toString());
    }

    getStats(code: string) {
        return this.getCurrent(this.path + "statsprice/" + code);
    }

    getCalc(code: string, query_params = {}) {
        let params = new URLSearchParams();
        for (let key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "result/" + code + '?' + params.toString());
    }
}