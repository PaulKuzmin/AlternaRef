import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ContactSource } from "../../providers/contactsource";
import { RedAlert } from "../../components/redalert";

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    all: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public contactSource: ContactSource,
        public redAlert: RedAlert
    ) { }

    ionViewDidLoad() {
        this.getContacts();
    }

    getContacts() {
        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.contactSource.get().then(
            data => {
                if (data.success) {
                    //console.log(data);
                    if (data.data.length > 0) {
                        this.all = data.data;
                    }
                }
                loaderIndicator.dismiss();
            },
            error => {
                this.redAlert.show(this.navCtrl, error);
                loaderIndicator.dismiss();
            }
        );
    }
}
