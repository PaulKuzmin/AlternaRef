import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TnvedSource } from "../../providers/tnvedsource";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [TnvedSource]
})
export class HomePage {

    nodes: Array<any> = [];
    history: Array<any> = [];
    loaderIndicator: any;
    currentId: any = 0;
    isShowFooter: boolean = false;
    isShowCodeData: boolean = false;
    codeData: any;

    constructor(
        public navParams: NavParams,
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public tnvedSource: TnvedSource
    ) {
        console.log(navParams.get('userParams'));
        this.loadNode(0);
    }

    nodeOnClick(node: any) {
        this.history.push(this.currentId);                

        if (node.has_childs == 0) {
            this.currentId = 'c_' + node.kod;
            this.loadCode(node.kod)
        } else {
            this.currentId = node.idx;
            this.loadNode(node.idx);            
        }
    }

    goTop() {
        this.history = [];
        //this.loadNode(0);     
        this.navCtrl.push(HomePage, {
            userParams: "value 1"
        })
        
    }

    goBack() {
        let previd = this.history.pop();
        let id = previd && previd || 0;

        if (id && (<string>id).startsWith("c_")) {
            this.loadCode((<string>id).replace("c_",""));
        } else {
            this.loadNode(id);
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
                this.isShowCodeData = true;
                this.loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                this.loaderIndicator.dismiss();
            });
    }

    loadNode(id: number) {
        this.loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        this.loaderIndicator.present();
        this.isShowFooter = (id != 0);

        if (id == 0) {
            this.history = [];
        }

        this.tnvedSource.getNode(id).then(
            data => {
                //console.log(data);
                this.nodes = data.nodes;                
                this.isShowCodeData = false;
                this.loaderIndicator.dismiss();
            },
            error => {
                console.error(error);
                this.isShowCodeData = false;
                this.loaderIndicator.dismiss();
            });
    }
}
