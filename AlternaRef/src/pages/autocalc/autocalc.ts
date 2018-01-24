import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AutoCalcSource } from "../../providers/autocalcsource";
import { AutoCalcResultPage } from "../../pages/autocalcresult/autocalcresult";

@Component({
    selector: 'page-autocalc',
    templateUrl: 'autocalc.html'
})
export class AutoCalcPage {

    months = [
        { id: 1, name: "Январь" },
        { id: 2, name: "Февраль" },
        { id: 3, name: "Март" },
        { id: 4, name: "Апрель" },
        { id: 5, name: "Май" },
        { id: 6, name: "Июнь" },
        { id: 7, name: "Июль" },
        { id: 8, name: "Август" },
        { id: 9, name: "Сентябрь" },
        { id: 10, name: "Октябрь" },
        { id: 11, name: "Ноябрь" },
        { id: 12, name: "Декабрь" },
    ];
    years = [];
    calcParams: any;
    chosenParams: any = {
        vehicle: "car",
        month: 1,
        year: 2017,
        cost: ""
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public autoCalcSource: AutoCalcSource,
        public alertCtrl: AlertController
    ) {
        this.chosenParams.year = new Date().getFullYear();
        for (var i = this.chosenParams.year; i > (this.chosenParams.year - 10); i--) {
            this.years.push(i);
        }
    }

    ionViewDidLoad() {
        this.getParams();
    }

    getParams() {
        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.autoCalcSource.getParams(this.chosenParams.vehicle, this.chosenParams).then(
            data => {
                console.log(data);
                this.calcParams = data.data;
                for (var i = 0; i < this.calcParams.calc_params.length; i++) {
                    if (!this.chosenParams[this.calcParams.calc_params[i].code]) {
                        if (this.calcParams.calc_params[i].code == "engine") {
                            this.chosenParams[this.calcParams.calc_params[i].code] = "f";
                        } else {
                            this.chosenParams[this.calcParams.calc_params[i].code] = "";
                        }
                    }
                }
                //console.log(this.chosenParams);
                loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                loaderIndicator.dismiss();
            }
        );
    }

    calcClick() {
        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.autoCalcSource.getCalc(this.chosenParams.vehicle, this.chosenParams).then(
            data => {
                console.log(data);
                if (data.success) {
                    if ((data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success") && data.data.calculation.F.success) ||
                        (data.data.calculation.U.hasOwnProperty("success") && data.data.calculation.U.success)) {
                        this.navCtrl.push(AutoCalcResultPage, {
                            data: data.data
                        });
                    } else {
                        let msg = '';
                        if (data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success")) {
                            for (var i = 0; i < data.data.calculation.F.messages.length; i++) {
                                msg += data.data.calculation.F.messages[i].message + '<br>';
                            }
                        }

                        if (data.data.calculation.U.hasOwnProperty("success")) {
                            for (var i = 0; i < data.data.calculation.U.messages.length; i++) {
                                msg += data.data.calculation.U.messages[i].message + '<br>';
                            }
                        }

                        let alert = this.alertCtrl.create({
                            title: 'Ошибка',
                            subTitle: msg,
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                } else {

                }
                loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                loaderIndicator.dismiss();
            }
        );
    }
}
