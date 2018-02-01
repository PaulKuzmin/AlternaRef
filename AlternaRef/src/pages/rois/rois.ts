import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OisSource } from "../../providers/oissource";
import { FormControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { RedAlert } from "../../components/redalert";

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

    isShowHint: boolean = true;
    isShowNotFound: boolean = false;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public oisSource: OisSource,
        public loadingCtrl: LoadingController,
        public redAlert: RedAlert
    ) {
        this.searchControl = new FormControl();
    }

    ionViewDidLoad() {
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(3000).subscribe(search => {
            this.searching = false;
            this.setFilteredItems();
        });
    }

    onSearchInput() {
        this.searching = true;
    }

    setFilteredItems() {
        //console.log(this.isShowHint);
        if (this.searchTerm.length > 0) {
            let loaderIndicator = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator.present();
            this.oisSource.getList(this.searchTerm).then(
                data => {
                    if (data.ois_list.length > 0) {
                        this.items = data.ois_list;
                        this.labels = data.ois_description;
                        this.isShowHint = false;
                        this.isShowNotFound = false;
                    } else {
                        this.items = null;
                        this.labels = null;
                        this.isShowHint = false;
                        this.isShowNotFound = true;
                    }

                    loaderIndicator.dismiss();
                },
                error => {
                    this.redAlert.show(this.navCtrl, error);
                    loaderIndicator.dismiss();
                });
        } else {
            this.items = null;
            this.labels = null;
            this.isShowHint = true;
            this.isShowNotFound = false;
        }
    }
}
