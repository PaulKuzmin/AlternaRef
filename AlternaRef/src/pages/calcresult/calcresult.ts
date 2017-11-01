import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-calcresult',
    templateUrl: 'calcresult.html'
})
export class CalcResultPage {
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
        console.log(this.currencies);
    }

    onChangeCalcCurrs() {
        console.log(this.calcCurrs);
    }

    requestClick() {

    }
}
