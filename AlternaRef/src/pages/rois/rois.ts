import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OisSource } from "../../providers/oissource";
import { FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'page-rois',
    templateUrl: 'rois.html'
})
export class RoisPage {

    searchTerm: string = '';
    searchControl: FormControl;
    items: any;
    labels: any;
    searching: any = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public oisSource: OisSource,
        public loadingCtrl: LoadingController
    ) {
        this.searchControl = new FormControl();
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
            this.oisSource.getList(this.searchTerm).then(
                data => {
                    console.log(data);
                    this.items = data.ois_list;
                    this.labels = data.ois_description;
                    loaderIndicator.dismiss();
                },
                error => {
                    console.error(error);
                    loaderIndicator.dismiss();
                });
        }
    }
}
