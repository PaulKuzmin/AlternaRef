import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CalcPage } from '../calc/calc';
import { AutoCalcPage } from '../autocalc/autocalc';
import { RoisPage } from '../rois/rois';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
      tab1Root: any = HomePage;
      tab2Root: any = CalcPage;
      tab3Root: any = AutoCalcPage;
      tab4Root: any = RoisPage;

      constructor() {}
}
