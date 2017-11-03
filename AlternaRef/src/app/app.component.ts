import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { RequestPage } from '../pages/request/request';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage = TabsPage;

    // pages for menu
    pages: Array<{ title: string, component: any }>;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen
    ) {
        platform.ready().then(() => {
          // Okay, so the platform is ready and our plugins are available.
          // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
          });

        this.pages = [
            { title: 'Запрос', component: RequestPage }
        ];
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);

        //or
        //this.navCtrl.push(page.component, {});
    }
}
