import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class RedAlert {
    constructor(
        public alertCtrl: AlertController
    ) {

    }

    showConnectionErrorAlert(navCtrl: any) {
        let alert = this.alertCtrl.create({
            title: 'Нет соединения с сервером',
            message: 'Проверьте, пожалуйста, подключение к интернету!',
            buttons: [
                {
                    text: 'Повторить',
                    handler: data => {
                        navCtrl.setRoot(navCtrl.getActive().component);
                    }
                }
            ]
        });
        alert.present();
    }

    showServerErrorAlert() {
        let alert = this.alertCtrl.create({
            title: 'Ошибка',
            message: 'Произошла ошибка при получении данных. Приносим свои извинения!',
            buttons: ['ОК']
        });
        alert.present();
    }

    show(navCtrl: any, response: any) {
        console.error(response);
        if (response && response.status == 0) {
            this.showConnectionErrorAlert(navCtrl);
        } else {
            this.showServerErrorAlert();
        }
    }
}
