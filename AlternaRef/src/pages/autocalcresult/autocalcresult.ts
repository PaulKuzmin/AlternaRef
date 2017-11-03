import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-autocalcresult',
    templateUrl: 'autocalcresult.html'
})
export class AutoCalcResultPage {
    data: any;
    currencies: any = [];
    calcCurrs: any = "rubles";

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.data = this.navParams.get("data");

        for (let key in this.data.calculation.currencies) {
            this.currencies.push(this.data.calculation.currencies[key]);
        }
    }

    ionViewDidLoad() {
        
    }

    requestClick() {

    }
}
