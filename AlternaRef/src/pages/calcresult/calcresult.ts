import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
        public navParams: NavParams,
        public alertCtrl: AlertController
    ) {
        this.data = this.navParams.get("data");

        for (let key in this.data.calculation.currencies) {
            this.currencies.push(this.data.calculation.currencies[key]);
        }
    }

    ionViewDidLoad() {
        //console.log(this.currencies);
    }

    showRateHint(taxName, rate) {
        let alert = this.alertCtrl.create({
            title: taxName,
            subTitle: 'Ставка: ' + rate,
            buttons: ['OK']
        });
        alert.present();
    }

    requestClick() {

    }
}
