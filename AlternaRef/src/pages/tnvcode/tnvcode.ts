import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TnvedSource } from "../../providers/tnvedsource";

@Component({
    selector: 'page-tnvcode',
    templateUrl: 'tnvcode.html'
})
export class TnvCodePage {

    loaderIndicator: any;
    codeData: Array<any> = [];
    code: string;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public tnvedSource: TnvedSource
    ) {
        this.code = this.navParams.get("code");
    }

    ionViewDidLoad() {
        if (this.code) {
            this.loadCode(this.code);
        }
    }

    loadCode(code: string) {
        this.loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        this.loaderIndicator.present();
        this.tnvedSource.getCode(code).then(
            data => {
                console.log(data);
                this.codeData = data;
                this.loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                this.loaderIndicator.dismiss();
            });
    }

}
