import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MailSource } from "../../providers/mailsource";
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-request',
    templateUrl: 'request.html'
})
export class RequestPage {

    chosenParams = {
        name: "",
        phone: "",
        email: "",
        message: ""
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public mailSource: MailSource
    ) {

    }

    ionViewDidLoad() {

    }

    sendClick() {
        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.mailSource.sendRequest(this.chosenParams).then(
            data => {
                console.log(data);
                loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                loaderIndicator.dismiss();
            }
        );
    }
}
