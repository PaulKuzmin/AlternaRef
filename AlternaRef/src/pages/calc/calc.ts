import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CalcSource } from "../../providers/calcsource";
import { FormControl } from '@angular/forms';

@Component({
    selector: 'page-calc',
    templateUrl: 'calc.html'
})
export class CalcPage {

    searchTerm: string = '';
    searchControl: FormControl;
    searching: any = false;
    params: any;
    country: string = "000";
    countrySelectOptions: any = {
        title: 'Выберите страну',
        enableBackdropDismiss: true
    };
    direction: string = "I";
    param_cost: number = 0;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public calcSource: CalcSource
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

    setFilteredItems() {
        if (this.searchTerm.length > 0) {
            let loaderIndicator = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator.present();
            this.calcSource.getParams(this.searchTerm).then(
                data => {
                    console.log(data);
                    this.params = data;
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
}
