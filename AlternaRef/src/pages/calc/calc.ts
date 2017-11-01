import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CalcSource } from "../../providers/calcsource";
import { FormControl } from '@angular/forms';
import { CalcResultPage } from "../../pages/calcresult/calcresult";

@Component({
    selector: 'page-calc',
    templateUrl: 'calc.html'
})
export class CalcPage {

    searchTerm: string = '3822000000';
    searchControl: FormControl;
    searching: any = false;
    params: any;
    specialParams: any;
    calcParams: any;
    countrySelectOptions: any = {
        title: 'Выберите страну',
        enableBackdropDismiss: true
    };
    isShowCalc: boolean = false;

    chosenParams: any = {
        direction: "I",
        param_cost: 1000,
        country: "000"
    };

    statsPrice: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public calcSource: CalcSource,
        public alertCtrl: AlertController
    ) {
        this.searchControl = new FormControl();

        let code = this.navParams.get("code");
        if (code) {
            this.searchTerm = code;
        }
    }

    ionViewDidLoad() {
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(1000).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }

    onSearchInput() {
        this.searching = true;
    }

    getStatsPrice(code: string) {
        this.calcSource.getStats(code).then(
            data => {
                console.log(data);
                this.statsPrice = data.data.statsprice;
            },
            error => {
                console.error(error);
            });
    }

    setFilteredItems() {
        this.isShowCalc = false;
        if (this.searchTerm.length > 0) {
            let loaderIndicator = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator.present();
            this.calcSource.getParams(this.searchTerm, this.chosenParams).then(
                data => {
                    console.log(data);
                    this.params = data;

                    // special
                    this.specialParams = [];
                    for (var i = 0; i < data.data.calc_special.length; i++) {
                        var f = this.specialParams.find(x => x.type == 'special_' + data.data.calc_special[i].type);
                        if (f) {
                            f.data.push({
                                id: data.data.calc_special[i].id,
                                name: data.data.calc_special[i].name
                            });
                        } else {
                            this.specialParams.push({
                                type: 'special_' + data.data.calc_special[i].type,
                                type_name: data.data.calc_special[i].type_name,
                                data: [{
                                    id: data.data.calc_special[i].id,
                                    name: data.data.calc_special[i].name
                                }]
                            });

                            if (!this.chosenParams['special_' + data.data.calc_special[i].type]) {
                                this.chosenParams['special_' + data.data.calc_special[i].type] = "";
                            }
                        }
                    }
                    //console.log(this.specialParams);

                    // calcParams
                    this.calcParams = [];
                    for (let key in data.data.calc_params) {
                        data.data.calc_params[key].code = 'param_' + data.data.calc_params[key].code;
                        this.calcParams.push(data.data.calc_params[key]);
                        if (!this.chosenParams[data.data.calc_params[key].code]) {
                            this.chosenParams[data.data.calc_params[key].code] = 0;
                        }
                    }
                    //console.log(this.calcParams);
                    //console.log(this.chosenParams);

                    this.isShowCalc = true;

                    this.getStatsPrice(data.data.tnved_code);

                    loaderIndicator.dismiss();
                },
                error => {
                    console.error(error);
                    loaderIndicator.dismiss();
                });
        }
    }

    tnvedClick() {
        this.navCtrl.parent.select(0);
    }

    examplesClick() {
        this.navCtrl.parent.select(3);
    }

    calcClick() {
        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.calcSource.getCalc(this.searchTerm, this.chosenParams).then(
            data => {
                console.log(data);
                if (data.success) {
                    if (data.data.calculation.success) {
                        this.navCtrl.push(CalcResultPage, {
                            data: data.data
                        });
                    } else {
                        let msg = '';
                        for (var i = 0; i < data.data.calculation.messages.length; i++) {
                            msg += data.data.calculation.messages[i].message + "\r\n";
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
