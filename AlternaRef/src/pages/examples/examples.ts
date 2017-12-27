import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExamplesSource } from "../../providers/examplessource";
import { FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { TnvCodePage } from "../../pages/tnvcode/tnvcode";
import { CalcPage } from "../../pages/calc/calc";

@Component({
    selector: 'page-examples',
    templateUrl: 'examples.html'
})
export class ExamplesPage {

    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    searching: any = false;

    isShowHint: boolean = true;
    isShowNotFound: boolean = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public examplesSource: ExamplesSource,
        public loadingCtrl: LoadingController
    ) {
        this.searchControl = new FormControl();

        let text = this.navParams.get("text");
        if (text) {
            this.searchTerm = text;
        }

        //this.navCtrl.parent.select(3);
    }

    ionViewDidLoad() {
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
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
            this.examplesSource.getList(this.searchTerm).then(
                data => {
                    console.log(data);
                    this.isShowHint = false;
                    if (!data.success || data.data.data.length == 0) {
                        this.isShowNotFound = true;
                        this.items = null;
                        loaderIndicator.dismiss();
                        return;
                    }

                    this.items = data.data.data;
                    loaderIndicator.dismiss();
                },
                error => {
                    console.error(error);
                    loaderIndicator.dismiss();
                });
        } else {
            this.isShowHint = true;
            this.items = null;
            this.isShowNotFound = false;
        }

        //console.log(this.isShowHint);
    }

    tnvedClick(code: string) {
        this.navCtrl.push(TnvCodePage, {
            code: code
        });
    }

    calcClick(code: string) {
        this.navCtrl.push(CalcPage, {
            code: code
        });
    }

    goClick() {
        this.navCtrl.parent.select(0);
    }
}
