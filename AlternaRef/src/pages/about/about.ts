import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ContactSource } from "../../providers/contactsource";

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
        public contactSource: ContactSource
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
                    console.log(data);
                    if (data.data.length > 0) {
                        this.all = data.data;
                    }
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
