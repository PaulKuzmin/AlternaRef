import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TnvedSource } from "../../providers/tnvedsource";
import { TnvCodePage } from "../tnvcode/tnvcode";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TnvedSource]
})
export class HomePage {

    nodes: Array<any> = [];
    loaderIndicator: any;
    isShowFooter: boolean = false;
    id: number = 0;

    constructor(
        public navParams: NavParams,
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public tnvedSource: TnvedSource
    ) {
        this.id = navParams.get('id') && navParams.get('id') || 0;        
    }

    ionViewDidLoad() {
        this.loadNode(this.id);
    }

    nodeOnClick(node: any) {
        if (node.has_childs == 0) {

            let code = node.kod;
            if (node.kodplus) {
                code += '_' + node.kodplus;
            }

            this.navCtrl.push(TnvCodePage, {
                code: code
            });
        } else {
            this.navCtrl.push(HomePage, {
                id: node.idx
            });
        }
    }

    /*
    goTop() {
        this.loadNode(0);
    }
    */

    loadNode(id: number) {
        this.loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        this.loaderIndicator.present();
        this.isShowFooter = (id != 0);

        this.tnvedSource.getNode(id).then(
            data => {
                //console.log(data);
                this.nodes = data.nodes;
                this.loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                this.loaderIndicator.dismiss();
            });
    }
}
