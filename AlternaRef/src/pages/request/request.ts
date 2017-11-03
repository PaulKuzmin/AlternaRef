import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
        public navParams: NavParams
    ) {

    }

    ionViewDidLoad() {

    }

    sendClick() {

    }
}
