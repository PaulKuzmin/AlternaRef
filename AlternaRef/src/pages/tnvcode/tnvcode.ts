import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-tnvcode',
    templateUrl: 'tnvcode.html'
})
export class TnvCodePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad tnvcodePage');
    }

}
