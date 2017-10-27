import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalcPage } from '../pages/calc/calc';
import { AutoCalcPage } from '../pages/autocalc/autocalc';
import { HomePage } from '../pages/home/home';
import { RoisPage } from '../pages/rois/rois';
import { TabsPage } from '../pages/tabs/tabs';
import { TnvCodePage } from "../pages/tnvcode/tnvcode";
import { DataSource } from '../providers/datasource';
import { TnvedSource } from '../providers/tnvedsource';

@NgModule({
  declarations: [
    MyApp,
    CalcPage,
    AutoCalcPage,
    HomePage,
    RoisPage,
    TabsPage,
    TnvCodePage
  ],
  imports: [
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
    TnvCodePage
  ],
  providers: [DataSource, TnvedSource, {provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
