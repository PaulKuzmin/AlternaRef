import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { RequestPage } from '../../pages/request/request';

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
        public navParams: NavParams,
        public alertCtrl: AlertController
    ) {
        this.data = this.navParams.get("data");

        for (let key in this.data.calculation.currencies) {
            this.currencies.push(this.data.calculation.currencies[key]);
        }
    }

    ionViewDidLoad() {
        
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
        if (this.data && this.data.hasOwnProperty("chosen") && this.data.chosen) {
            console.log(this.data.chosen);

            let engines = {
                f: 'бензиновый',
                d: 'дизельный',
                h: 'гибридный',
                e: 'электрический'
            }

            let vehicles = {
                car: 'ЛЕГКОВОЙ',
                cargo: 'ГРУЗОВОЙ',
                bus: 'АВТОБУС',
                bike: 'МОТОЦИКЛ/МОПЕД',
                tractor: 'ТЯГАЧ',
                crane: 'АВТОКРАН',
                quadrocicle: 'КВАДРОЦИКЛ',
                concretemixer: 'БЕТОНОМЕШАЛКА',
                driving: 'АВТОБУРОВАЯ',
                evacuator: 'ЭВАКУАТОР',
                concretepump: 'БЕТОНОНАСОС',
                snowmobile: 'СНЕГОХОД',
                caravan: 'АВТОПРИЦЕП',
                house: 'ДОМ-АВТОПРИЦЕП',
                waterbike: 'ВОДНЫЙ МОТОЦИКЛ',
                boat: 'КАТЕР (ЯХТА,ЛОДКА)'
            }

            message = 'Здравствуйте! Рассчитайте, пожалуйста:' +
                ' тип авто: ' + vehicles[this.data.chosen.vehicle] + 
                '; дата выпуска: ' + this.data.chosen.month + '.' + this.data.chosen.year +
                '; двигатель: ' + engines[this.data.chosen.engine];

            if (this.data.chosen.weight) {
                message += '; полный вес, кг: ' + this.data.chosen.weight;
            }

            if (this.data.chosen.seats) {
                message += '; количество мест: ' + this.data.chosen.seats;
            }

            if (this.data.chosen.bag) {
                message += '; объем баг.отделения, куб.см.: ' + this.data.chosen.bag;
            }

            if (this.data.chosen.capacity) {
                message += '; объем двигателя, куб.см.: ' + this.data.chosen.capacity;
            }

            if (this.data.chosen.power) {
                message += '; мощность, л.с.: ' + this.data.chosen.power;
            }

            if (this.data.chosen.cost) {
                message += '; стоимость, дол.США: ' + this.data.chosen.cost;
            }

            console.log(message);
        }
        this.navCtrl.push(RequestPage, {message: message});
    }
}
