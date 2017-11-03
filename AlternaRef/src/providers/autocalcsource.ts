import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { DataSource } from "./datasource";

@Injectable()
export class AutoCalcSource extends DataSource {
    readonly path = 'widget/calcauto/';

    constructor(public http: Http) {
        super(http);
    }

    getParams(vehicle: string, query_params = {}) {
        let params = new URLSearchParams();
        for (let key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "params/" + vehicle + '?' + params.toString());
    }

    getCalc(vehicle: string, query_params = {}) {
        let params = new URLSearchParams();
        for (let key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "result/" + vehicle + '?' + params.toString());
    }
}