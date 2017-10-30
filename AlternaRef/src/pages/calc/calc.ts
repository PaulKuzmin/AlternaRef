import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TnvedSource } from "../../providers/tnvedsource";

@Component({
    selector: 'page-calc',
    templateUrl: 'calc.html'
})
export class CalcPage {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public tnvedSource: TnvedSource
    ) {

    }

    ionViewDidLoad() {

    }
}
