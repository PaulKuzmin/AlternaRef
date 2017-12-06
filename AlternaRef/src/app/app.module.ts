import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalcPage } from '../pages/calc/calc';
import { AutoCalcPage } from '../pages/autocalc/autocalc';
import { HomePage } from '../pages/home/home';
import { RoisPage } from '../pages/rois/rois';
import { TabsPage } from '../pages/tabs/tabs';
import { TnvCodePage } from "../pages/tnvcode/tnvcode";
import { ExamplesPage } from "../pages/examples/examples";
import { CalcResultPage } from "../pages/calcresult/calcresult";
import { AutoCalcResultPage } from "../pages/autocalcresult/autocalcresult";
import { DataSource } from '../providers/datasource';
import { TnvedSource } from '../providers/tnvedsource';
import { OisSource } from '../providers/oissource';
import { ExamplesSource } from '../providers/examplessource';
import { CalcSource } from '../providers/calcsource';
import { AutoCalcSource } from '../providers/autocalcsource';
import { RequestPage } from "../pages/request/request";
import { AboutPage } from "../pages/about/about";
import { MailSource } from '../providers/mailsource';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AccordionComponent } from "../components/accordion/accordion";
import { RateComponent } from "../components/rate/rate";
import { DocumentComponent } from "../components/document/document";
import { IonCardContentCollapsableComponent } from "../components/ion-card-content-collapsable/ion-card-content-collapsable";

@NgModule({
  declarations: [
    MyApp,
    CalcPage,
    AutoCalcPage,
    HomePage,
    RoisPage,
    TabsPage,
    TnvCodePage,
    ExamplesPage,
    CalcResultPage,
    AutoCalcResultPage,
    RequestPage,
    AboutPage,
    AccordionComponent,
    RateComponent,
    DocumentComponent,
    IonCardContentCollapsableComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalcPage,
    AutoCalcPage,
    HomePage,
    RoisPage,
    TabsPage,
    TnvCodePage,
    ExamplesPage,
    CalcResultPage,
    AutoCalcResultPage,
    RequestPage,
    AboutPage
  ],
  providers: [
      StatusBar,
      SplashScreen,
      DataSource,
      TnvedSource,
      OisSource,
      ExamplesSource,
      CalcSource,
      AutoCalcSource,
      MailSource,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
