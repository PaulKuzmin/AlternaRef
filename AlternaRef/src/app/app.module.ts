import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { RoisPage } from '../pages/rois/rois';
import { TabsPage } from '../pages/tabs/tabs';
import { DataSource } from '../providers/datasource';
import { TnvedSource } from '../providers/tnvedsource';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RoisPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    RoisPage,
    TabsPage
  ],
  providers: [DataSource, TnvedSource, {provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
