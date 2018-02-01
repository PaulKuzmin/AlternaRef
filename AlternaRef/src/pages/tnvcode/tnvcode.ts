import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TnvedSource } from "../../providers/tnvedsource";
import { ExamplesPage } from "../../pages/examples/examples";
import { CalcPage } from "../../pages/calc/calc";
import { RedAlert } from "../../components/redalert";

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
        public tnvedSource: TnvedSource,
        public redAlert: RedAlert
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
                //console.log(data);
                this.codeData = data;
                this.loaderIndicator.dismiss();
            },
            error => {
                this.redAlert.show(this.navCtrl, error);
                this.loaderIndicator.dismiss();
            });
    }

    examplesClick() {
        let searchCode = this.code;
        if (searchCode.indexOf('_') > 8) {
            searchCode = searchCode.substr(0, searchCode.indexOf('_'));
        }
        //console.log(searchCode);
        this.navCtrl.push(ExamplesPage, {
            text: searchCode
        });
    }

    calcClick() {
        this.navCtrl.push(CalcPage, {
            code: this.code
        });
    }
}
