import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MailSource } from "../../providers/mailsource";
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RedAlert } from "../../components/redalert";

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
        public mailSource: MailSource,
        public alertCtrl: AlertController,
        public redAlert: RedAlert
    ) {
        this.chosenParams.message = this.navParams.get("message");
        if (!this.chosenParams.message) {
            this.chosenParams.message = '';
        }
    }

    ionViewDidLoad() {

    }

    validateEmail(email: string) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    showAlert(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    }

    sendClick() {
        if (this.chosenParams.name.trim().length == 0) {
            this.showAlert('Имя', 'Представьтесь, пожалуйста');
            return;
        }

        if (this.chosenParams.email.trim().length == 0 || !this.validateEmail(this.chosenParams.email)) {
            this.showAlert('Email', 'Введите ваш Email, пожалуйста');
            return;
        }

        if (this.chosenParams.message.trim().length == 0) {
            this.showAlert('Сообщение', 'Введите текст сообщения, пожалуйста');
            return;
        }

        let loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.mailSource.sendRequest(this.chosenParams).then(
            data => {
                //console.log(data);
                if (data.success) {
                    this.chosenParams.name = "";
                    this.chosenParams.phone = "";
                    this.chosenParams.email = "";
                    this.chosenParams.message = "";
                } else {
                    let alert = this.alertCtrl.create({
                        title: 'Ошибка',
                        subTitle: data.data,
                        buttons: ['OK']
                    });
                    alert.present();
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
