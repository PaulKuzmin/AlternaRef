import { Injectable } from '@angular/core';
import { DataSource } from "./datasource";
import { Http } from '@angular/http';

@Injectable()
export class TnvedSource extends DataSource {
    readonly path = 'widget/tnved/';

    constructor(public http: Http) {
        super(http);
    }

    getNode(id: number): Promise<any> {
        return this.getCurrent(this.path + 'node/' + id);
    }

    getCode(code: string): Promise<any> {
        return this.getCurrent(this.path + 'code/' + code);
    }
}
