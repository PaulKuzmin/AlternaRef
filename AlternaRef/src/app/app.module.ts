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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    RequestPage
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
    RequestPage
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
      { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
