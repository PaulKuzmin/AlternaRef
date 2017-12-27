import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestPage } from '../../pages/request/request';

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
        let message = '';
        if (this.data && this.data.hasOwnProperty('chosen') && this.data.chosen) {
            message = 'Здравствуйте! Рассчитайте, пожалуйста: ' + this.data.chosen.code;

            if (this.data.chosen.direction == 'E') {
                message += '; направление перемещения: экспорт';
            } else {
                message += '; направление перемещения: импорт';
            }

            if (this.data.chosen.country && this.data.chosen.country != '000') {
                message += '; код страны: ' + this.data.chosen.country;
            }

            message += '; стоимость, дол.США: ' + this.data.chosen.param_cost;
        }

        this.navCtrl.push(RequestPage, { message: message });
    }
}
