webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TnvedSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datasource__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TnvedSource = (function (_super) {
    __extends(TnvedSource, _super);
    function TnvedSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/tnved/';
        return _this;
    }
    TnvedSource.prototype.getNode = function (id) {
        return this.getCurrent(this.path + 'node/' + id);
    };
    TnvedSource.prototype.getCode = function (code) {
        return this.getCurrent(this.path + 'code/' + code);
    };
    TnvedSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], TnvedSource);
    return TnvedSource;
}(__WEBPACK_IMPORTED_MODULE_1__datasource__["a" /* DataSource */]));

//# sourceMappingURL=tnvedsource.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TnvCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tnvedsource__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_examples_examples__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calc_calc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TnvCodePage = (function () {
    function TnvCodePage(navCtrl, navParams, loadingCtrl, tnvedSource, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.tnvedSource = tnvedSource;
        this.redAlert = redAlert;
        this.codeData = [];
        this.code = this.navParams.get("code");
    }
    TnvCodePage.prototype.ionViewDidLoad = function () {
        if (this.code) {
            this.loadCode(this.code);
        }
    };
    TnvCodePage.prototype.loadCode = function (code) {
        var _this = this;
        this.loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        this.loaderIndicator.present();
        this.tnvedSource.getCode(code).then(function (data) {
            //console.log(data);
            _this.codeData = data;
            _this.loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            _this.loaderIndicator.dismiss();
        });
    };
    TnvCodePage.prototype.examplesClick = function () {
        var searchCode = this.code;
        if (searchCode.indexOf('_') > 8) {
            searchCode = searchCode.substr(0, searchCode.indexOf('_'));
        }
        //console.log(searchCode);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_examples_examples__["a" /* ExamplesPage */], {
            text: searchCode
        });
    };
    TnvCodePage.prototype.calcClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_calc_calc__["a" /* CalcPage */], {
            code: this.code
        });
    };
    TnvCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tnvcode',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\tnvcode\tnvcode.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{codeData?.code}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid class="alt-title">\n\n        <ion-row>\n\n            <ion-col col-12><h5>{{codeData?.name}}</h5></ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <rate [data]="codeData?.data?.import_tax"></rate>\n\n    <rate [data]="codeData?.data?.export_tax"></rate>\n\n    <rate [data]="codeData?.data?.vat"></rate>\n\n    <rate [data]="codeData?.data?.excise"></rate>\n\n    <rate [data]="codeData?.data?.special"></rate>\n\n    <rate [data]="codeData?.data?.ensuring"></rate>\n\n\n\n    <ion-grid class="alt-title" [hidden]="!codeData?.data?.documents">\n\n        <ion-row>\n\n            <ion-col col-12>Документы и особенности</ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <document [data]="codeData?.data?.documents?.restrictions"></document>\n\n    <document [data]="codeData?.data?.documents?.license"></document>\n\n    <document [data]="codeData?.data?.documents?.certificates"></document>\n\n    <document [data]="codeData?.data?.documents?.others"></document>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n\n        <ion-row>\n\n            <ion-col>\n\n                <button ion-button full icon-left (click)="examplesClick()">\n\n                    <ion-icon name="paper"></ion-icon>\n\n                    <div>Примеры</div>\n\n                </button>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button full icon-left (click)="calcClick()">\n\n                    <ion-icon name="cube"></ion-icon>\n\n                    <div>Рассчитать</div>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\tnvcode\tnvcode.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tnvedsource__["a" /* TnvedSource */],
            __WEBPACK_IMPORTED_MODULE_5__components_redalert__["a" /* RedAlert */]])
    ], TnvCodePage);
    return TnvCodePage;
}());

//# sourceMappingURL=tnvcode.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_examplessource__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tnvcode_tnvcode__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calc_calc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ExamplesPage = (function () {
    function ExamplesPage(navCtrl, navParams, examplesSource, loadingCtrl, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.examplesSource = examplesSource;
        this.loadingCtrl = loadingCtrl;
        this.redAlert = redAlert;
        this.searchTerm = '';
        this.searching = false;
        this.isShowHint = true;
        this.isShowNotFound = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        var text = this.navParams.get("text");
        if (text) {
            this.searchTerm = text;
        }
    }
    ExamplesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(3000).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    ExamplesPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    ExamplesPage.prototype.setFilteredItems = function () {
        var _this = this;
        if (this.searchTerm.length > 0) {
            var loaderIndicator_1 = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator_1.present();
            this.examplesSource.getList(this.searchTerm).then(function (data) {
                //console.log(data);
                _this.isShowHint = false;
                if (!data.success || data.data.data.length == 0) {
                    _this.isShowNotFound = true;
                    _this.items = null;
                    loaderIndicator_1.dismiss();
                    return;
                }
                _this.items = data.data.data;
                loaderIndicator_1.dismiss();
            }, function (error) {
                _this.redAlert.show(_this.navCtrl, error);
                loaderIndicator_1.dismiss();
            });
        }
        else {
            this.isShowHint = true;
            this.items = null;
            this.isShowNotFound = false;
        }
    };
    ExamplesPage.prototype.tnvedClick = function (code) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_tnvcode_tnvcode__["a" /* TnvCodePage */], {
            code: code
        });
    };
    ExamplesPage.prototype.calcClick = function (code) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_calc_calc__["a" /* CalcPage */], {
            code: code
        });
    };
    ExamplesPage.prototype.goClick = function () {
        this.navCtrl.parent.select(0);
    };
    ExamplesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-examples',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\examples\examples.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Примеры декларирования</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n        <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()" placeholder="Описание или код..."></ion-searchbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngIf="isShowHint">\n\n        <ion-card-content center text-center>\n\n            <p>Не знаете код ТН ВЭД товара?</p>\n\n            <p>Подберите его по наименованию или описанию товара.</p>\n\n            <p>Или наоборот - найдите описание товара по его коду ТН ВЭД</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="isShowNotFound">\n\n        <ion-card-content center text-center>\n\n            <p>По вашему запросу ничего не найдено!</p>\n\n            <p>Воспользуйтесь справочником</p>\n\n            <button ion-button (click)="goClick()">ТН ВЭД</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-list>\n\n        <ion-card *ngFor="let item of items">\n\n            <ion-card-content-collapsable [data]="item"></ion-card-content-collapsable>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <button ion-button full icon-left small (click)="tnvedClick(item.code)">\n\n                        <ion-icon name="list"></ion-icon>\n\n                        <div>ТНВЭД</div>\n\n                    </button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button full icon-left small (click)="calcClick(item.code)">\n\n                        <ion-icon name="cube"></ion-icon>\n\n                        <div>Рассчитать</div>\n\n                    </button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\examples\examples.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_examplessource__["a" /* ExamplesSource */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__components_redalert__["a" /* RedAlert */]])
    ], ExamplesPage);
    return ExamplesPage;
}());

//# sourceMappingURL=examples.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calc_calc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocalc_autocalc__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rois_rois__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_examples__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__calc_calc__["a" /* CalcPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__autocalc_autocalc__["a" /* AutoCalcPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__rois_rois__["a" /* RoisPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__examples_examples__["a" /* ExamplesPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab2Root" tabTitle="Товары" tabIcon="cube"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Авто" tabIcon="car"></ion-tab>\n\n    <ion-tab [root]="tab5Root" tabTitle="Примеры" tabIcon="paper"></ion-tab>\n\n    <ion-tab [root]="tab1Root" tabTitle="ТН ВЭД" tabIcon="list"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="РОИС" tabIcon="bulb"></ion-tab>\n\n</ion-tabs> \n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tnvedsource__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tnvcode_tnvcode__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navParams, navCtrl, loadingCtrl, tnvedSource, redAlert) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tnvedSource = tnvedSource;
        this.redAlert = redAlert;
        this.nodes = [];
        this.isShowFooter = false;
        this.id = 0;
        this.id = navParams.get('id') && navParams.get('id') || 0;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadNode(this.id);
    };
    HomePage.prototype.nodeOnClick = function (node) {
        if (node.has_childs == 0) {
            var code = node.kod;
            if (node.kodplus) {
                code += '_' + node.kodplus;
            }
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tnvcode_tnvcode__["a" /* TnvCodePage */], {
                code: code
            });
        }
        else {
            this.navCtrl.push(HomePage_1, {
                id: node.idx
            });
        }
    };
    /*
    goTop() {
        this.loadNode(0);
    }
    */
    HomePage.prototype.loadNode = function (id) {
        var _this = this;
        this.loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        this.loaderIndicator.present();
        this.isShowFooter = (id != 0);
        this.tnvedSource.getNode(id).then(function (data) {
            //console.log(data);
            _this.nodes = data.nodes;
            _this.loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            _this.loaderIndicator.dismiss();
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>ТН ВЭД</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-card *ngFor="let node of nodes" (click)="nodeOnClick(node)">\n\n            <ion-card-header>\n\n\n\n                <ion-row justify-content-around>\n\n                    <ion-col col-11>\n\n                        <span item-left>{{node.kod}} {{node.kodplus}}</span>\n\n                    </ion-col>\n\n                    <ion-col col-1>\n\n                        <span item-right><ion-icon name="arrow-forward"></ion-icon></span>\n\n                    </ion-col>\n\n                </ion-row>\n\n                    \n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                {{node.name}}\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<!--\n\n<ion-footer [hidden]="!isShowFooter">\n\n    <ion-toolbar>\n\n        <ion-row>\n\n            <ion-col>\n\n            </ion-col>\n\n            <ion-col>\n\n                <button ion-button full outline icon-left (click)="goTop()">\n\n                    <ion-icon name="md-arrow-up"></ion-icon>\n\n                    <div>В начало</div>\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n-->\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_tnvedsource__["a" /* TnvedSource */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tnvedsource__["a" /* TnvedSource */],
            __WEBPACK_IMPORTED_MODULE_4__components_redalert__["a" /* RedAlert */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamplesSource = (function (_super) {
    __extends(ExamplesSource, _super);
    function ExamplesSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/calculator/examples/';
        return _this;
    }
    ExamplesSource.prototype.getList = function (text) {
        return this.getCurrent(this.path + text);
    };
    ExamplesSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ExamplesSource);
    return ExamplesSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=examplessource.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalcSource = (function (_super) {
    __extends(CalcSource, _super);
    function CalcSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/calculator/';
        return _this;
    }
    CalcSource.prototype.getParams = function (code, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "params/" + code + '?' + params.toString());
    };
    CalcSource.prototype.getStats = function (code) {
        return this.getCurrent(this.path + "statsprice/" + code);
    };
    CalcSource.prototype.getCalc = function (code, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "result/" + code + '?' + params.toString());
    };
    CalcSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], CalcSource);
    return CalcSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=calcsource.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_request_request__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalcResultPage = (function () {
    function CalcResultPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.currencies = [];
        this.calcCurrs = "rubles";
        this.data = this.navParams.get("data");
        for (var key in this.data.calculation.currencies) {
            this.currencies.push(this.data.calculation.currencies[key]);
        }
    }
    CalcResultPage.prototype.ionViewDidLoad = function () {
        //console.log(this.currencies);
    };
    CalcResultPage.prototype.showRateHint = function (taxName, rate) {
        var alert = this.alertCtrl.create({
            title: taxName,
            subTitle: 'Ставка: ' + rate,
            buttons: ['OK']
        });
        alert.present();
    };
    CalcResultPage.prototype.requestClick = function () {
        var message = '';
        if (this.data && this.data.hasOwnProperty('chosen') && this.data.chosen) {
            message = 'Здравствуйте! Рассчитайте, пожалуйста: ' + this.data.chosen.code;
            if (this.data.chosen.direction == 'E') {
                message += '; направление перемещения: экспорт';
            }
            else {
                message += '; направление перемещения: импорт';
            }
            if (this.data.chosen.country && this.data.chosen.country != '000') {
                message += '; код страны: ' + this.data.chosen.country;
            }
            message += '; стоимость, дол.США: ' + this.data.chosen.param_cost;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_request_request__["a" /* RequestPage */], { message: message });
    };
    CalcResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calcresult',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\calcresult\calcresult.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Расчет {{data?.chosen?.code}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-segment [(ngModel)]="calcCurrs">\n\n        <ion-segment-button value="rubles">\n\n            В рублях\n\n        </ion-segment-button>\n\n        <ion-segment-button value="dollars">\n\n            В дол.США\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="calcCurrs">\n\n        <ion-card>\n\n            <ion-card-header>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Итого\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'rubles\'">\n\n                            {{data.calculation.payments_summa_rub | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'dollars\'">\n\n                            {{data.calculation.payments_summa_usd | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-grid>\n\n                    <ion-row *ngFor="let p of data.calculation.payments">\n\n                        <ion-col col-7 class="alt-rate-name">\n\n                            {{p.name}} <span class="alt-rate-hint" (click)="showRateHint(p.name,p.rate)">&nbsp;?&nbsp;</span>\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'rubles\'">\n\n                            {{p.summa_rub | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'dollars\'">\n\n                            {{p.summa_usd | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <accordion title="Курсы валют" [hidden]="!currencies">\n\n        <ion-grid>\n\n            <ion-row *ngFor="let c of currencies">\n\n                <ion-col>\n\n                    {{c.name}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    {{c.value | number:\'2.4-4\'}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </accordion>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div id="challengeID">\n\n                <p>Дорого?</p>\n\n                <p>Отправьте запрос и получите индивидуальный расчет!</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n\n        <button block ion-button icon-left (click)="requestClick()">\n\n            <ion-icon name="send"></ion-icon>\n\n            Отправить запрос\n\n        </button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\calcresult\calcresult.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CalcResultPage);
    return CalcResultPage;
}());

//# sourceMappingURL=calcresult.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailSource = (function (_super) {
    __extends(MailSource, _super);
    function MailSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/mailto';
        return _this;
    }
    MailSource.prototype.sendRequest = function (query_params) {
        return this.postCurrent(this.path, query_params);
    };
    MailSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], MailSource);
    return MailSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=mailsource.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autocalcsource__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_autocalcresult_autocalcresult__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AutoCalcPage = (function () {
    function AutoCalcPage(navCtrl, navParams, loadingCtrl, autoCalcSource, alertCtrl, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.autoCalcSource = autoCalcSource;
        this.alertCtrl = alertCtrl;
        this.redAlert = redAlert;
        this.months = [
            { id: 1, name: "Январь" },
            { id: 2, name: "Февраль" },
            { id: 3, name: "Март" },
            { id: 4, name: "Апрель" },
            { id: 5, name: "Май" },
            { id: 6, name: "Июнь" },
            { id: 7, name: "Июль" },
            { id: 8, name: "Август" },
            { id: 9, name: "Сентябрь" },
            { id: 10, name: "Октябрь" },
            { id: 11, name: "Ноябрь" },
            { id: 12, name: "Декабрь" },
        ];
        this.years = [];
        this.chosenParams = {
            vehicle: "car",
            month: 1,
            year: 2017,
            cost: ""
        };
        this.chosenParams.year = new Date().getFullYear();
        for (var i = this.chosenParams.year; i > (this.chosenParams.year - 10); i--) {
            this.years.push(i);
        }
    }
    AutoCalcPage.prototype.ionViewDidLoad = function () {
        this.getParams();
    };
    AutoCalcPage.prototype.getParams = function () {
        var _this = this;
        var loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.autoCalcSource.getParams(this.chosenParams.vehicle, this.chosenParams).then(function (data) {
            //console.log(data);
            _this.calcParams = data.data;
            for (var i = 0; i < _this.calcParams.calc_params.length; i++) {
                if (!_this.chosenParams[_this.calcParams.calc_params[i].code]) {
                    if (_this.calcParams.calc_params[i].code == "engine") {
                        _this.chosenParams[_this.calcParams.calc_params[i].code] = "f";
                    }
                    else {
                        _this.chosenParams[_this.calcParams.calc_params[i].code] = "";
                    }
                }
            }
            //console.log(this.chosenParams);
            loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            loaderIndicator.dismiss();
        });
    };
    AutoCalcPage.prototype.calcClick = function () {
        var _this = this;
        var loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.autoCalcSource.getCalc(this.chosenParams.vehicle, this.chosenParams).then(function (data) {
            //console.log(data);
            if (data.success) {
                if ((data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success") && data.data.calculation.F.success) ||
                    (data.data.calculation.U.hasOwnProperty("success") && data.data.calculation.U.success)) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_autocalcresult_autocalcresult__["a" /* AutoCalcResultPage */], {
                        data: data.data
                    });
                }
                else {
                    var msg = '';
                    if (data.data.calculation.hasOwnProperty("F") && data.data.calculation.F.hasOwnProperty("success")) {
                        for (var i = 0; i < data.data.calculation.F.messages.length; i++) {
                            msg += data.data.calculation.F.messages[i].message + '<br>';
                        }
                    }
                    if (data.data.calculation.U.hasOwnProperty("success")) {
                        for (var i = 0; i < data.data.calculation.U.messages.length; i++) {
                            msg += data.data.calculation.U.messages[i].message + '<br>';
                        }
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Ошибка',
                        subTitle: msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }
            else {
            }
            loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            loaderIndicator.dismiss();
        });
    };
    AutoCalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocalc',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\autocalc\autocalc.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Калькулятор авто</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <ion-item>\n\n            <ion-label stacked>Тип авто</ion-label>\n\n            <ion-select class="max-width" [(ngModel)]="chosenParams.vehicle" cancelText="Отмена" interface="alert" (ionChange)="getParams()">\n\n                <ion-option value="car">ЛЕГКОВОЙ</ion-option>\n\n                <ion-option value="cargo">ГРУЗОВОЙ</ion-option>\n\n                <ion-option value="bus">АВТОБУС</ion-option>\n\n                <!--\n\n                <ion-option value="bike">МОТОЦИКЛ/МОПЕД</ion-option>\n\n                <ion-option value="tractor">ТЯГАЧ</ion-option>\n\n                <ion-option value="crane">АВТОКРАН</ion-option>\n\n                <ion-option value="quadrocicle">КВАДРОЦИКЛ</ion-option>\n\n                <ion-option value="concretemixer">БЕТОНОМЕШАЛКА</ion-option>\n\n                <ion-option value="driving">АВТОБУРОВАЯ</ion-option>\n\n                <ion-option value="evacuator">ЭВАКУАТОР</ion-option>\n\n                <ion-option value="concretepump">БЕТОНОНАСОС</ion-option>\n\n                <ion-option value="snowmobile">СНЕГОХОД</ion-option>\n\n                <ion-option value="caravan">АВТОПРИЦЕП</ion-option>\n\n                <ion-option value="house">ДОМ-АВТОПРИЦЕП</ion-option>\n\n                <ion-option value="waterbike">ВОДНЫЙ МОТОЦИКЛ</ion-option>\n\n                <ion-option value="boat">КАТЕР (ЯХТА,ЛОДКА)</ion-option>\n\n                -->\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Месяц выпуска</ion-label>\n\n            <ion-select class="max-width" [(ngModel)]="chosenParams.month" cancelText="Отмена" interface="alert">\n\n                <ion-option *ngFor="let m of months" [value]="m.id">{{m.name}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Год выпуска</ion-label>\n\n            <ion-select class="max-width" [(ngModel)]="chosenParams.year" cancelText="Отмена" interface="alert">\n\n                <ion-option *ngFor="let y of years" [value]="y">{{y}}</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Стоимость</ion-label>\n\n            <ion-input [(ngModel)]="chosenParams.cost" placeholder="дол. США" min="0"></ion-input>\n\n        </ion-item>\n\n        <ion-item *ngFor="let p of calcParams?.calc_params">\n\n            <ion-label stacked>{{p.name}}<!--<span *ngIf="p.dimension">, {{p.dimension}}</span>--></ion-label>\n\n            <ion-select class="max-width" *ngIf="p.code==\'engine\'" [(ngModel)]="chosenParams[p.code]" cancelText="Отмена" interface="alert">\n\n                <ion-option *ngFor="let e of calcParams?.calc_engines" [value]="e.id">{{e.name}}</ion-option>\n\n            </ion-select>\n\n            <ion-input *ngIf="p.code!=\'engine\'" [(ngModel)]="chosenParams[p.code]" [placeholder]="p.dimension" min="0"></ion-input>\n\n        </ion-item>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n\n        <button block ion-button icon-left (click)="calcClick()">\n\n            <ion-icon name="calculator"></ion-icon>\n\n            Рассчитать\n\n        </button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\autocalc\autocalc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_autocalcsource__["a" /* AutoCalcSource */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__components_redalert__["a" /* RedAlert */]])
    ], AutoCalcPage);
    return AutoCalcPage;
}());

//# sourceMappingURL=autocalc.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCalcSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoCalcSource = (function (_super) {
    __extends(AutoCalcSource, _super);
    function AutoCalcSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/calcauto/';
        return _this;
    }
    AutoCalcSource.prototype.getParams = function (vehicle, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "params/" + vehicle + '?' + params.toString());
    };
    AutoCalcSource.prototype.getCalc = function (vehicle, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        for (var key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        return this.getCurrent(this.path + "result/" + vehicle + '?' + params.toString());
    };
    AutoCalcSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AutoCalcSource);
    return AutoCalcSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=autocalcsource.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCalcResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_request_request__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutoCalcResultPage = (function () {
    function AutoCalcResultPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.currencies = [];
        this.calcCurrs = "rubles";
        this.data = this.navParams.get("data");
        for (var key in this.data.calculation.currencies) {
            this.currencies.push(this.data.calculation.currencies[key]);
        }
    }
    AutoCalcResultPage.prototype.ionViewDidLoad = function () {
    };
    AutoCalcResultPage.prototype.showRateHint = function (taxName, rate) {
        var alert = this.alertCtrl.create({
            title: taxName,
            subTitle: 'Ставка: ' + rate,
            buttons: ['OK']
        });
        alert.present();
    };
    AutoCalcResultPage.prototype.requestClick = function () {
        var message = '';
        if (this.data && this.data.hasOwnProperty("chosen") && this.data.chosen) {
            //console.log(this.data.chosen);
            var engines = {
                f: 'бензиновый',
                d: 'дизельный',
                h: 'гибридный',
                e: 'электрический'
            };
            var vehicles = {
                car: 'ЛЕГКОВОЙ',
                cargo: 'ГРУЗОВОЙ',
                bus: 'АВТОБУС',
                bike: 'МОТОЦИКЛ/МОПЕД',
                tractor: 'ТЯГАЧ',
                crane: 'АВТОКРАН',
                quadrocicle: 'КВАДРОЦИКЛ',
                concretemixer: 'БЕТОНОМЕШАЛКА',
                driving: 'АВТОБУРОВАЯ',
                evacuator: 'ЭВАКУАТОР',
                concretepump: 'БЕТОНОНАСОС',
                snowmobile: 'СНЕГОХОД',
                caravan: 'АВТОПРИЦЕП',
                house: 'ДОМ-АВТОПРИЦЕП',
                waterbike: 'ВОДНЫЙ МОТОЦИКЛ',
                boat: 'КАТЕР (ЯХТА,ЛОДКА)'
            };
            message = 'Здравствуйте! Рассчитайте, пожалуйста:' +
                ' тип авто: ' + vehicles[this.data.chosen.vehicle] +
                '; дата выпуска: ' + this.data.chosen.month + '.' + this.data.chosen.year +
                '; двигатель: ' + engines[this.data.chosen.engine];
            if (this.data.chosen.weight) {
                message += '; полный вес, кг: ' + this.data.chosen.weight;
            }
            if (this.data.chosen.seats) {
                message += '; количество мест: ' + this.data.chosen.seats;
            }
            if (this.data.chosen.bag) {
                message += '; объем баг.отделения, куб.см.: ' + this.data.chosen.bag;
            }
            if (this.data.chosen.capacity) {
                message += '; объем двигателя, куб.см.: ' + this.data.chosen.capacity;
            }
            if (this.data.chosen.power) {
                message += '; мощность, л.с.: ' + this.data.chosen.power;
            }
            if (this.data.chosen.cost) {
                message += '; стоимость, дол.США: ' + this.data.chosen.cost;
            }
            //console.log(message);
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_request_request__["a" /* RequestPage */], { message: message });
    };
    AutoCalcResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-autocalcresult',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\autocalcresult\autocalcresult.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Результат расчета</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-segment [(ngModel)]="calcCurrs">\n\n        <ion-segment-button value="rubles">\n\n            В рублях\n\n        </ion-segment-button>\n\n        <ion-segment-button value="dollars">\n\n            В дол.США\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n\n\n    <div [ngSwitch]="calcCurrs">\n\n        <ion-card *ngIf="data?.calculation?.F?.success">\n\n            <ion-card-header>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Физ.лицо, итого\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'rubles\'">\n\n                            {{data.calculation.F.payments_summa_rub | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'dollars\'">\n\n                            {{data.calculation.F.payments_summa_usd | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-grid>\n\n                    <ion-row *ngFor="let p of data.calculation.F.payments">\n\n                        <ion-col col-7 class="alt-rate-name">\n\n                            {{p.name}} <span class="alt-rate-hint" (click)="showRateHint(p.name,p.rate)">&nbsp;?&nbsp;</span>\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'rubles\'">\n\n                            {{p.summa_rub | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'dollars\'">\n\n                            {{p.summa_usd | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-content>\n\n        </ion-card>\n\n\n\n        <ion-card *ngIf="data?.calculation?.U?.success">\n\n            <ion-card-header>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Юр.лицо, итого\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'rubles\'">\n\n                            {{data.calculation.U.payments_summa_rub | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col text-right *ngSwitchCase="\'dollars\'">\n\n                            {{data.calculation.U.payments_summa_usd | number:\'3.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                <ion-grid>\n\n                    <ion-row *ngFor="let p of data.calculation.U.payments">\n\n                        <ion-col col-7 class="alt-rate-name">\n\n                            {{p.name}} <span class="alt-rate-hint" (click)="showRateHint(p.name,p.rate)">&nbsp;?&nbsp;</span>\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'rubles\'">\n\n                            {{p.summa_rub | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                        <ion-col col-5 text-right *ngSwitchCase="\'dollars\'">\n\n                            {{p.summa_usd | number:\'2.2-2\'}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n\n\n    <accordion title="Курсы валют" [hidden]="!currencies">\n\n        <ion-grid>\n\n            <ion-row *ngFor="let c of currencies">\n\n                <ion-col>\n\n                    {{c.name}}\n\n                </ion-col>\n\n                <ion-col text-right>\n\n                    {{c.value | number:\'2.4-4\'}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </accordion>\n\n\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <div id="challengeID">\n\n                <p>Дорого?</p>\n\n                <p>Отправьте запрос и получите индивидуальный расчет!</p>\n\n            </div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n\n        <button block ion-button icon-left (click)="requestClick()">\n\n            <ion-icon name="send"></ion-icon>\n\n            Отправить запрос\n\n        </button>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\autocalcresult\autocalcresult.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AutoCalcResultPage);
    return AutoCalcResultPage;
}());

//# sourceMappingURL=autocalcresult.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_oissource__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RoisPage = (function () {
    function RoisPage(navCtrl, navParams, oisSource, loadingCtrl, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.oisSource = oisSource;
        this.loadingCtrl = loadingCtrl;
        this.redAlert = redAlert;
        this.searchTerm = '';
        this.searching = false;
        this.isShowHint = true;
        this.isShowNotFound = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
    }
    RoisPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(3000).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    RoisPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    RoisPage.prototype.setFilteredItems = function () {
        var _this = this;
        //console.log(this.isShowHint);
        if (this.searchTerm.length > 0) {
            var loaderIndicator_1 = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator_1.present();
            this.oisSource.getList(this.searchTerm).then(function (data) {
                if (data.ois_list.length > 0) {
                    _this.items = data.ois_list;
                    _this.labels = data.ois_description;
                    _this.isShowHint = false;
                    _this.isShowNotFound = false;
                }
                else {
                    _this.items = null;
                    _this.labels = null;
                    _this.isShowHint = false;
                    _this.isShowNotFound = true;
                }
                loaderIndicator_1.dismiss();
            }, function (error) {
                _this.redAlert.show(_this.navCtrl, error);
                loaderIndicator_1.dismiss();
            });
        }
        else {
            this.items = null;
            this.labels = null;
            this.isShowHint = true;
            this.isShowNotFound = false;
        }
    };
    RoisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rois',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\rois\rois.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Реестр объектов интеллектуальной собственности</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar>\n\n        <ion-searchbar [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()" placeholder="Наименование..."></ion-searchbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n\n\n    <ion-card *ngIf="isShowHint">\n\n        <ion-card-content center text-center>\n\n            <p>Проверьте, находится ли торговая марка вашего товара в реестре объектов интеллектуальной собственности</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="isShowNotFound">\n\n        <ion-card-content center text-center>\n\n            <p>По вашему запросу ничего не найдено!</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-list>\n\n        <ion-card *ngFor="let item of items">\n\n            <ion-card-header>\n\n                {{labels.regnom}}\n\n            </ion-card-header>\n\n            <ion-card-content>\n\n                {{item.regnom}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.g31_12">\n\n                {{labels.g31_12}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.g31_12">\n\n                {{item.g31_12}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.note">\n\n                {{labels.note}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.note">\n\n                {{item.note}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.document">\n\n                {{labels.document}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.document">\n\n                {{item.document}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.name">\n\n                {{labels.name}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.name">\n\n                {{item.name}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.namet">\n\n                {{labels.namet}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.namet">\n\n                {{item.namet}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.agent">\n\n                {{labels.agent}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.agent">\n\n                {{item.agent}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.mktu">\n\n                {{labels.mktu}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.mktu">\n\n                {{item.mktu}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.dateend">\n\n                {{labels.dateend}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.dateend">\n\n                {{item.dateend}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.comm">\n\n                {{labels.comm}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.comm">\n\n                {{item.comm}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.letter">\n\n                {{labels.letter}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.letter">\n\n                {{item.letter}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-header *ngIf="item.g33">\n\n                {{labels.g33}}\n\n            </ion-card-header>\n\n            <ion-card-content *ngIf="item.g33">\n\n                {{item.g33}}\n\n            </ion-card-content>\n\n\n\n            <ion-card-content *ngIf="item.image">\n\n                <div class="rois-image" [style.background-image]="\'url(https://alterna.ltd/img/ois/\'+item.image+\')\'"></div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\rois\rois.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_oissource__["a" /* OisSource */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__components_redalert__["a" /* RedAlert */]])
    ], RoisPage);
    return RoisPage;
}());

//# sourceMappingURL=rois.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OisSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OisSource = (function (_super) {
    __extends(OisSource, _super);
    function OisSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/ois/list/';
        return _this;
    }
    OisSource.prototype.getList = function (text) {
        return this.getCurrent(this.path + text);
    };
    OisSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], OisSource);
    return OisSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=oissource.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contactsource__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, navParams, loadingCtrl, contactSource, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.contactSource = contactSource;
        this.redAlert = redAlert;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.getContacts();
    };
    AboutPage.prototype.getContacts = function () {
        var _this = this;
        var loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.contactSource.get().then(function (data) {
            if (data.success) {
                //console.log(data);
                if (data.data.length > 0) {
                    _this.all = data.data;
                }
            }
            loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            loaderIndicator.dismiss();
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>О компании</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <ion-card>\n\n        <div class="contacts-logo"></div>\n\n        <ion-card-content>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="call"></ion-icon> Телефоны: \n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <a href="tel: +74959090513">\n\n                            +7 (495) 909-05-13\n\n                        </a>\n\n                    </ion-col>\n\n                    <ion-col col-12>\n\n                        <a href="tel: +74232650983">\n\n                            +7 (423) 265-09-83\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="mail"></ion-icon> Email:\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <a href="mailto:alternadv@gmail.com">\n\n                            alternadv@gmail.com\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="globe"></ion-icon> Web:\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        <a href="https://alterna.ltd/">\n\n                            https://alterna.ltd/\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <p>\n\n                Транспортно-логистическая компания «Альтерна» - таможенный представитель с многолетним успешным опытом работы в сфере ВЭД. \n\n                Мы занимаемся таможенным оформлением и доставкой грузов любой категории из всех стран Азии (Китай, Корея, Япония и т.д.) в Россию.\n\n            </p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-card *ngFor="let a of all">\n\n        <ion-card-title>\n\n            {{a.short_name}}\n\n        </ion-card-title>\n\n        <ion-card-content>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="navigate"></ion-icon> Адрес:\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-12>\n\n                        {{a.address}}\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="call"></ion-icon> Телефоны:\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngFor="let p of a.contacts.phones1">\n\n                    <ion-col col-12>\n\n                        <a href="tel: +74959090513">\n\n                            {{p}}\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngFor="let p of a.contacts.phones2">\n\n                    <ion-col col-12>\n\n                        <a href="tel: +74959090513">\n\n                            {{p}}\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <ion-grid>\n\n                <ion-row>\n\n                    <ion-col col-12 class="alt-label">\n\n                        <ion-icon name="mail"></ion-icon> Email:\n\n                    </ion-col>\n\n                </ion-row>\n\n                <ion-row *ngFor="let e of a.contacts.emails">\n\n                    <ion-col col-12>\n\n                        <a href="mailto:{{e}}">\n\n                            {{e}}\n\n                        </a>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contactsource__["a" /* ContactSource */],
            __WEBPACK_IMPORTED_MODULE_3__components_redalert__["a" /* RedAlert */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasource__ = __webpack_require__(28);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactSource = (function (_super) {
    __extends(ContactSource, _super);
    function ContactSource(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.path = 'widget/contacts';
        return _this;
    }
    ContactSource.prototype.get = function () {
        return this.getCurrent(this.path);
    };
    ContactSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ContactSource);
    return ContactSource;
}(__WEBPACK_IMPORTED_MODULE_2__datasource__["a" /* DataSource */]));

//# sourceMappingURL=contactsource.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(242);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedAlert = (function () {
    function RedAlert(alertCtrl) {
        this.alertCtrl = alertCtrl;
    }
    RedAlert.prototype.showConnectionErrorAlert = function (navCtrl) {
        var alert = this.alertCtrl.create({
            title: 'Нет соединения с сервером',
            message: 'Проверьте, пожалуйста, подключение к интернету!',
            buttons: [
                {
                    text: 'Повторить',
                    handler: function (data) {
                        navCtrl.setRoot(navCtrl.getActive().component);
                    }
                }
            ]
        });
        alert.present();
    };
    RedAlert.prototype.showServerErrorAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Ошибка',
            message: 'Произошла ошибка при получении данных. Приносим свои извинения!',
            buttons: ['ОК']
        });
        alert.present();
    };
    RedAlert.prototype.show = function (navCtrl, response) {
        console.error(response);
        if (response && response.status == 0) {
            this.showConnectionErrorAlert(navCtrl);
        }
        else {
            this.showServerErrorAlert();
        }
    };
    RedAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RedAlert);
    return RedAlert;
}());

//# sourceMappingURL=redalert.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_calc_calc__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_autocalc_autocalc__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_rois_rois__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tnvcode_tnvcode__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_examples_examples__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calcresult_calcresult__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_autocalcresult_autocalcresult__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_datasource__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_tnvedsource__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_oissource__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_examplessource__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_calcsource__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_autocalcsource__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_request_request__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_about_about__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_mailsource__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_contactsource__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_accordion_accordion__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_rate_rate__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_document_document__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_ion_card_content_collapsable_ion_card_content_collapsable__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_calc_calc__["a" /* CalcPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_autocalc_autocalc__["a" /* AutoCalcPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rois_rois__["a" /* RoisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tnvcode_tnvcode__["a" /* TnvCodePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calcresult_calcresult__["a" /* CalcResultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_autocalcresult_autocalcresult__["a" /* AutoCalcResultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_26__components_accordion_accordion__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_rate_rate__["a" /* RateComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_document_document__["a" /* DocumentComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_ion_card_content_collapsable_ion_card_content_collapsable__["a" /* IonCardContentCollapsableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_calc_calc__["a" /* CalcPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_autocalc_autocalc__["a" /* AutoCalcPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_rois_rois__["a" /* RoisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tnvcode_tnvcode__["a" /* TnvCodePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_examples_examples__["a" /* ExamplesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_calcresult_calcresult__["a" /* CalcResultPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_autocalcresult_autocalcresult__["a" /* AutoCalcResultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_request_request__["a" /* RequestPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_about_about__["a" /* AboutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_datasource__["a" /* DataSource */],
                __WEBPACK_IMPORTED_MODULE_15__providers_tnvedsource__["a" /* TnvedSource */],
                __WEBPACK_IMPORTED_MODULE_16__providers_oissource__["a" /* OisSource */],
                __WEBPACK_IMPORTED_MODULE_17__providers_examplessource__["a" /* ExamplesSource */],
                __WEBPACK_IMPORTED_MODULE_18__providers_calcsource__["a" /* CalcSource */],
                __WEBPACK_IMPORTED_MODULE_19__providers_autocalcsource__["a" /* AutoCalcSource */],
                __WEBPACK_IMPORTED_MODULE_22__providers_mailsource__["a" /* MailSource */],
                __WEBPACK_IMPORTED_MODULE_23__providers_contactsource__["a" /* ContactSource */],
                __WEBPACK_IMPORTED_MODULE_30__components_redalert__["a" /* RedAlert */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataSource = (function () {
    //readonly endpoint = '/api/';
    function DataSource(http) {
        this.http = http;
        this.endpoint = 'https://alterna.ltd/';
    }
    DataSource.prototype.getCurrent = function (url) {
        var requestUrl = this.endpoint + url;
        if (requestUrl.indexOf("?") > -1) {
            requestUrl += '&json=true';
        }
        else {
            requestUrl += '?json=true';
        }
        //console.log(requestUrl);
        return this.http.get(requestUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DataSource.prototype.postCurrent = function (url, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var requestUrl = this.endpoint + url;
        if (requestUrl.indexOf("?") > -1) {
            requestUrl += '&json=true';
        }
        else {
            requestUrl += '?json=true';
        }
        var params = new URLSearchParams();
        for (var key in query_params) {
            if (query_params[key] !== "") {
                params.set(key, query_params[key]);
            }
        }
        //console.log(requestUrl);
        //console.log(query_params);
        return this.http.post(requestUrl, query_params)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DataSource.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataSource.prototype.handleError = function (res) {
        console.error('Entering handleError');
        console.dir(res);
        return Promise.reject(res.message || res);
    };
    DataSource = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataSource);
    return DataSource;
}());

//# sourceMappingURL=datasource.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_request_request__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Отправить запрос', component: __WEBPACK_IMPORTED_MODULE_5__pages_request_request__["a" /* RequestPage */] },
            { title: 'О компании', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] }
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
        //this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n\n        <ion-toolbar>\n\n            <ion-title>Меню</ion-title>\n\n        </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                {{p.title}}\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 *
 * Author https://github.com/samarthagarwal/ionic-accordion-component
 */
var AccordionComponent = (function () {
    function AccordionComponent(renderer) {
        this.renderer = renderer;
        this.accordionExapanded = false;
        this.icon = "add";
    }
    AccordionComponent.prototype.ngOnInit = function () {
        //console.log(this.cardContent.nativeElement);
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 300ms, padding 500ms");
        // closed
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 4px 8px 4px");
    };
    AccordionComponent.prototype.toggleAccordion = function () {
        if (this.accordionExapanded) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100%");
        }
        this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 4px 8px 4px");
        this.accordionExapanded = !this.accordionExapanded;
        this.icon = this.icon == "add" ? "remove" : "add";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], AccordionComponent.prototype, "cardContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], AccordionComponent.prototype, "title", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'accordion',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\components\accordion\accordion.html"*/'<ion-card>\n\n    <ion-card-header (click)="toggleAccordion()">        \n\n        <ion-row justify-content-around>\n\n            <ion-col col-11>\n\n                <span item-left>{{ title }}</span>\n\n            </ion-col>\n\n            <ion-col col-1>\n\n                <span item-right><ion-icon [name]="icon"></ion-icon></span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card-header>\n\n    <ion-card-content #cc>\n\n        <ng-content></ng-content>\n\n    </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\components\accordion\accordion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], AccordionComponent);
    return AccordionComponent;
}());

//# sourceMappingURL=accordion.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateComponent = (function () {
    function RateComponent(renderer) {
        this.renderer = renderer;
    }
    RateComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], RateComponent.prototype, "data", void 0);
    RateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'rate',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\components\rate\rate.html"*/'<ion-card [hidden]="!data">\n\n    <ion-card-header>\n\n        {{data?.name}}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n        <ion-grid *ngFor="let row of data?.data">\n\n            <ion-row>\n\n                <ion-col col-12 class="alt-rate">\n\n                    <b>{{row.rate_string}}</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <span *ngIf="!row.description">Базовая ставка</span>\n\n                    {{row.description}}\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card-content>\n\n</ion-card>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\components\rate\rate.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], RateComponent);
    return RateComponent;
}());

//# sourceMappingURL=rate.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentComponent = (function () {
    function DocumentComponent(renderer) {
        this.renderer = renderer;
    }
    DocumentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], DocumentComponent.prototype, "data", void 0);
    DocumentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'document',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\components\document\document.html"*/'<accordion [title]="data?.name" [hidden]="!data">\n\n    <ion-grid>\n\n        <ion-row *ngFor="let row of data?.data">\n\n            <ion-col col-12>\n\n                <span *ngIf="row.direction==\'I\'"><b>Импорт</b> - </span>\n\n                <span *ngIf="row.direction==\'E\'"><b>Экспорт</b> - </span>\n\n                <span *ngIf="row.document">{{row.document}} </span>\n\n                {{row.description}}\n\n                <span *ngIf="row.authority || row.authority_license">\n\n                    //\n\n                    <b> Орган:</b>\n\n                    <span *ngIf="row.authority"> {{row.authority}}</span>\n\n                    <span *ngIf="row.authority_license"> {{row.authority_license}}</span>\n\n                </span>\n\n                <span *ngIf="row.order"> //<b> Основание: </b>{{row.order}}</span>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</accordion>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\components\document\document.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], DocumentComponent);
    return DocumentComponent;
}());

//# sourceMappingURL=document.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonCardContentCollapsableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IonCardContentCollapsableComponent = (function () {
    function IonCardContentCollapsableComponent(renderer) {
        this.renderer = renderer;
        this.isCollapsed = true;
        this.icon = "expand";
    }
    IonCardContentCollapsableComponent.prototype.ngOnInit = function () {
        this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 100ms");
        this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100px");
        //this.renderer.setElementStyle(this.cardContent.nativeElement, "overflow", "hidden");
    };
    IonCardContentCollapsableComponent.prototype.toggleContent = function () {
        if (this.isCollapsed) {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100%");
            this.icon = "crop";
        }
        else {
            this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "100px");
            this.icon = "expand";
        }
        this.isCollapsed = !this.isCollapsed;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('data'),
        __metadata("design:type", Object)
    ], IonCardContentCollapsableComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("cc"),
        __metadata("design:type", Object)
    ], IonCardContentCollapsableComponent.prototype, "cardContent", void 0);
    IonCardContentCollapsableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-card-content-collapsable',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\components\ion-card-content-collapsable\ion-card-content-collapsable.html"*/'<ion-card-header (click)="toggleContent()">\n\n    <ion-row justify-content-around>\n\n        <ion-col col-11>\n\n            <span item-left>{{data.code}}</span>\n\n        </ion-col>\n\n        <ion-col col-1>\n\n            <span item-right><ion-icon [name]="icon"></ion-icon></span>\n\n        </ion-col>\n\n    </ion-row>    \n\n</ion-card-header>\n\n<ion-card-content [innerHtml]="data.name" #cc (click)="toggleContent()"></ion-card-content>'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\components\ion-card-content-collapsable\ion-card-content-collapsable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], IonCardContentCollapsableComponent);
    return IonCardContentCollapsableComponent;
}());

//# sourceMappingURL=ion-card-content-collapsable.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_calcsource__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calcresult_calcresult__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CalcPage = (function () {
    function CalcPage(navCtrl, navParams, loadingCtrl, calcSource, alertCtrl, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.calcSource = calcSource;
        this.alertCtrl = alertCtrl;
        this.redAlert = redAlert;
        this.searchTerm = ''; //'2402209000';
        this.searching = false;
        this.countrySelectOptions = {
            title: 'Выберите страну',
            enableBackdropDismiss: true
        };
        this.isShowCalc = false;
        this.isShowHint = false;
        this.chosenParams = {
            direction: "I",
            param_cost: null,
            country: "000"
        };
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]();
        var code = this.navParams.get("code");
        if (code) {
            this.searchTerm = code;
        }
    }
    CalcPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isShowHint = !this.searchTerm.trim();
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(3000).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    CalcPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    CalcPage.prototype.getStatsPrice = function (code) {
        var _this = this;
        this.statsPrice = null;
        this.calcSource.getStats(code).then(function (data) {
            if (!data.success || data.data.statsprice.maximum == "0.00") {
                return;
            }
            _this.statsPrice = data.data.statsprice;
        }, function (error) {
            console.error(error);
        });
    };
    CalcPage.prototype.setFilteredItems = function () {
        var _this = this;
        this.isShowCalc = false;
        if (this.searchTerm.length > 0) {
            var loaderIndicator_1 = this.loadingCtrl.create({
                content: "Загрузка..."
            });
            loaderIndicator_1.present();
            this.calcSource.getParams(this.searchTerm.replace(' ', '_'), this.chosenParams).then(function (data) {
                _this.params = data;
                //console.log(this.params);
                if (!data.success || data.data.calc_info.length == 0) {
                    _this.isShowHint = true;
                    loaderIndicator_1.dismiss();
                    return;
                }
                // special
                _this.specialParams = [];
                for (var i = 0; i < data.data.calc_special.length; i++) {
                    var f = _this.specialParams.find(function (x) { return x.type == 'special_' + data.data.calc_special[i].type; });
                    if (f) {
                        f.data.push({
                            id: data.data.calc_special[i].id,
                            name: data.data.calc_special[i].name
                        });
                    }
                    else {
                        _this.specialParams.push({
                            type: 'special_' + data.data.calc_special[i].type,
                            type_name: data.data.calc_special[i].type_name,
                            data: [{
                                    id: data.data.calc_special[i].id,
                                    name: data.data.calc_special[i].name
                                }]
                        });
                        if (!_this.chosenParams['special_' + data.data.calc_special[i].type]) {
                            _this.chosenParams['special_' + data.data.calc_special[i].type] = "";
                        }
                    }
                }
                //console.log(this.specialParams);
                // calcParams
                _this.calcParams = [];
                for (var key in data.data.calc_params) {
                    data.data.calc_params[key].code = 'param_' + data.data.calc_params[key].code;
                    _this.calcParams.push(data.data.calc_params[key]);
                    if (!_this.chosenParams[data.data.calc_params[key].code]) {
                        _this.chosenParams[data.data.calc_params[key].code] = null;
                    }
                }
                //console.log(this.calcParams);
                //console.log(this.chosenParams);
                _this.isShowHint = false;
                _this.isShowCalc = true;
                _this.getStatsPrice(data.data.tnved_code);
                loaderIndicator_1.dismiss();
            }, function (error) {
                _this.redAlert.show(_this.navCtrl, error);
                loaderIndicator_1.dismiss();
            });
        }
        else {
            this.isShowHint = true;
        }
    };
    CalcPage.prototype.tnvedClick = function () {
        this.navCtrl.parent.select(3);
    };
    CalcPage.prototype.examplesClick = function () {
        this.navCtrl.parent.select(2);
    };
    CalcPage.prototype.calcClick = function () {
        var _this = this;
        var loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.calcSource.getCalc(this.searchTerm, this.chosenParams).then(function (data) {
            //console.log(data);
            if (data.success) {
                if (data.data.calculation.success) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_calcresult_calcresult__["a" /* CalcResultPage */], {
                        data: data.data
                    });
                }
                else {
                    var msg = '';
                    for (var i = 0; i < data.data.calculation.messages.length; i++) {
                        msg += data.data.calculation.messages[i].message + "\r\n";
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Ошибка',
                        subTitle: msg,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }
            else {
            }
            loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            loaderIndicator.dismiss();
        });
    };
    CalcPage.prototype.checkFocus = function () {
        var countriesLoader = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        countriesLoader.present();
        setTimeout(function () {
            countriesLoader.dismiss();
        }, 500);
    };
    CalcPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calc',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\calc\calc.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Калькулятор товаров</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar id="searchToolbarID">\n\n        <ion-searchbar type="tel" [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()" placeholder="Введите код ТН ВЭД..."></ion-searchbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card *ngIf="isShowHint">\n\n        <ion-card-content center text-center>\n\n            <p>Не нашли или не знаете код?</p>\n\n            <p>Воспользуйтесь справочником:</p>\n\n            <button ion-button (click)="tnvedClick()">ТН ВЭД</button>\n\n            <p>или подберите код, используя </p>\n\n            <button ion-button (click)="examplesClick()">примеры декларирования</button>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card *ngIf="isShowHint">\n\n        <ion-card-content center text-center>\n\n            <p>Справочник ТН ВЭД поможет вам точно подобрать код ТН ВЭД, а также получить дополнительную информацию по товару. В частности, в справочнике вы быстро найдете сведения о размерах ставок импортных и экспортных пошлины, акцизов, НДС и других платежей.</p>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <div *ngIf="isShowCalc" style="padding-bottom: 50px;">\n\n        \n\n        <ion-grid class="alt-title">\n\n            <ion-row>\n\n                <ion-col col-12><h5>{{params?.data?.calc_info?.name}}</h5></ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-card>\n\n            <ion-item>\n\n                <ion-label stacked>Направление перемещения</ion-label>\n\n                <ion-select class="max-width" [(ngModel)]="chosenParams.direction" cancelText="Отмена" interface="action-sheet" (ionChange)="setFilteredItems()">\n\n                    <ion-option value="I">Импорт</ion-option>\n\n                    <ion-option value="E">Экспорт</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Страна</ion-label>\n\n                <ion-select class="max-width" [(ngModel)]="chosenParams.country" interface="alert" cancelText="Отмена" [selectOptions]="countrySelectOptions" (ionChange)="setFilteredItems()" (ionFocus)="checkFocus()">\n\n                    <ion-option *ngFor="let c of params?.data?.countries" [value]="c.code">{{c.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Стоимость</ion-label>\n\n                <ion-input [(ngModel)]="chosenParams.param_cost" type="tel" min="0" placeholder="дол. США"></ion-input>\n\n            </ion-item>\n\n            <!--variable-->\n\n            <ion-item *ngFor="let p of calcParams">\n\n                <ion-label stacked>{{p.name}}</ion-label>\n\n                <ion-input [(ngModel)]="chosenParams[p.code]" type="tel" min="0" placeholder="{{p.dimension}}"></ion-input>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <ion-grid class="alt-title" *ngIf="specialParams">\n\n            <ion-row>\n\n                <ion-col col-12>Особые условия</ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-card>\n\n            <!--special-->\n\n            <ion-item *ngFor="let sp of specialParams">\n\n                <ion-label stacked>{{sp.type_name}}</ion-label>\n\n                <ion-select class="max-width" [(ngModel)]="chosenParams[sp.type]" cancelText="Отмена" interface="action-sheet" (ionChange)="setFilteredItems()">\n\n                    <ion-option *ngFor="let spd of sp?.data" [value]="spd.id">{{spd.name}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-card>\n\n\n\n        <ion-grid class="alt-title" *ngIf="statsPrice">\n\n            <ion-row>\n\n                <ion-col col-12>Среднеконтрактные цены, $/кг</ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <ion-card *ngIf="statsPrice">\n\n            <ion-card-content>\n\n                <ion-grid>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Минимум\n\n                        </ion-col>\n\n                        <ion-col text-right>\n\n                            {{statsPrice?.minimum}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Средняя\n\n                        </ion-col>\n\n                        <ion-col text-right>\n\n                            {{statsPrice?.average}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                    <ion-row>\n\n                        <ion-col>\n\n                            Максимум\n\n                        </ion-col>\n\n                        <ion-col text-right>\n\n                            {{statsPrice?.maximum}}\n\n                        </ion-col>\n\n                    </ion-row>\n\n                </ion-grid>\n\n                <p class="alt-hint">* Данные за полгода</p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar *ngIf="isShowCalc">\n\n        <button block ion-button icon-left (click)="calcClick()">\n\n            <ion-icon name="calculator"></ion-icon>\n\n            Рассчитать\n\n        </button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\calc\calc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_calcsource__["a" /* CalcSource */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__components_redalert__["a" /* RedAlert */]])
    ], CalcPage);
    return CalcPage;
}());

//# sourceMappingURL=calc.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mailsource__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_redalert__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RequestPage = (function () {
    function RequestPage(navCtrl, navParams, loadingCtrl, mailSource, alertCtrl, redAlert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.mailSource = mailSource;
        this.alertCtrl = alertCtrl;
        this.redAlert = redAlert;
        this.chosenParams = {
            name: "",
            phone: "",
            email: "",
            message: ""
        };
        this.chosenParams.message = this.navParams.get("message");
        if (!this.chosenParams.message) {
            this.chosenParams.message = '';
        }
    }
    RequestPage.prototype.ionViewDidLoad = function () {
    };
    RequestPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    RequestPage.prototype.showAlert = function (title, text) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    RequestPage.prototype.sendClick = function () {
        var _this = this;
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
        var loaderIndicator = this.loadingCtrl.create({
            content: "Загрузка..."
        });
        loaderIndicator.present();
        this.mailSource.sendRequest(this.chosenParams).then(function (data) {
            //console.log(data);
            if (data.success) {
                _this.chosenParams.name = "";
                _this.chosenParams.phone = "";
                _this.chosenParams.email = "";
                _this.chosenParams.message = "";
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Ошибка',
                    subTitle: data.data,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            loaderIndicator.dismiss();
        }, function (error) {
            _this.redAlert.show(_this.navCtrl, error);
            loaderIndicator.dismiss();
        });
    };
    RequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"C:\Workplace\AlternaRef\AlternaRef\src\pages\request\request.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Запрос</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n            <ion-item>\n\n                <ion-label stacked>Имя</ion-label>\n\n                <ion-input [(ngModel)]="chosenParams.name" type="email" placeholder="Иван Иванов" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Телефон</ion-label>\n\n                <ion-input [(ngModel)]="chosenParams.phone" type="tel" placeholder="89876543210" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Email</ion-label>\n\n                <ion-input [(ngModel)]="chosenParams.email" type="text" placeholder="mail@mail.mail" required></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>Сообщение</ion-label>\n\n                <ion-textarea [(ngModel)]="chosenParams.message" rows="8"  placeholder="Текст запроса" required></ion-textarea>\n\n            </ion-item>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n\n\n<ion-footer no-border>\n\n    <ion-toolbar>\n\n        <button block ion-button icon-left (click)="sendClick()">\n\n            <ion-icon name="send"></ion-icon>\n\n            Отправить\n\n        </button>\n\n    </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Workplace\AlternaRef\AlternaRef\src\pages\request\request.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_mailsource__["a" /* MailSource */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__components_redalert__["a" /* RedAlert */]])
    ], RequestPage);
    return RequestPage;
}());

//# sourceMappingURL=request.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map