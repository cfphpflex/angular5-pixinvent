webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/calendar.module": [
		"./src/app/calendar/calendar.module.ts",
		"common",
		"calendar.module"
	],
	"./cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"common",
		"cards.module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"common",
		"charts.module"
	],
	"./chat-ngrx/chat-ngrx.module": [
		"./src/app/chat-ngrx/chat-ngrx.module.ts",
		"common",
		"chat-ngrx.module"
	],
	"./chat/chat.module": [
		"./src/app/chat/chat.module.ts",
		"common",
		"chat.module"
	],
	"./color-palette/color-palette.module": [
		"./src/app/color-palette/color-palette.module.ts",
		"color-palette.module"
	],
	"./components/ui-components.module": [
		"./src/app/components/ui-components.module.ts",
		"common",
		"ui-components.module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"common",
		"dashboard.module"
	],
	"./data-tables/data-tables.module": [
		"./src/app/data-tables/data-tables.module.ts",
		"common",
		"data-tables.module"
	],
	"./forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"common",
		"forms.module"
	],
	"./inbox/inbox.module": [
		"./src/app/inbox/inbox.module.ts",
		"common",
		"inbox.module"
	],
	"./maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./ngx-wizard/ngx-wizard.module": [
		"./src/app/forms/ngx-wizard/ngx-wizard.module.ts",
		"common"
	],
	"./pages/content-pages/content-pages.module": [
		"./src/app/pages/content-pages/content-pages.module.ts",
		"content-pages.module"
	],
	"./pages/full-pages/full-pages.module": [
		"./src/app/pages/full-pages/full-pages.module.ts",
		"common",
		"full-pages.module"
	],
	"./player/player.module": [
		"./src/app/player/player.module.ts",
		"common",
		"player.module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"common",
		"tables.module"
	],
	"./taskboard-ngrx/taskboard-ngrx.module": [
		"./src/app/taskboard-ngrx/taskboard-ngrx.module.ts",
		"common",
		"taskboard-ngrx.module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"common",
		"taskboard.module"
	],
	"./ui-kit/ui-kit.module": [
		"./src/app/ui-kit/ui-kit.module.ts",
		"common",
		"ui-kit.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layouts_full_full_layout_component__ = __webpack_require__("./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_content_content_layout_component__ = __webpack_require__("./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_routes_full_layout_routes__ = __webpack_require__("./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_routes_content_layout_routes__ = __webpack_require__("./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";


// import { HORIZONTAL_ROUTES } from "./shared/routes/horizontal-layout.routes";

var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard/dashboard1',
        pathMatch: 'full',
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__layouts_full_full_layout_component__["a" /* FullLayoutComponent */], data: { title: 'full Views' }, children: __WEBPACK_IMPORTED_MODULE_4__shared_routes_full_layout_routes__["a" /* Full_ROUTES */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__layouts_content_content_layout_component__["a" /* ContentLayoutComponent */], data: { title: 'content Views' }, children: __WEBPACK_IMPORTED_MODULE_5__shared_routes_content_layout_routes__["a" /* CONTENT_ROUTES */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_auth_auth_guard_service__["a" /* AuthGuard */]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    //Set toastr container ref configuration for toastr positioning on screen
    function AppComponent(toastr, vRef) {
        this.toastr = toastr;
        this.toastr.setRootViewContainerRef(vRef);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_content_content_layout_component__ = __webpack_require__("./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_full_full_layout_component__ = __webpack_require__("./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_toastr_custom_option__ = __webpack_require__("./src/app/shared/toastr/custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_auth_auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_auth_auth_guard_service__ = __webpack_require__("./src/app/shared/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";



function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_full_full_layout_component__["a" /* FullLayoutComponent */],
                // HorizontalLayoutComponent,
                __WEBPACK_IMPORTED_MODULE_12__layouts_content_content_layout_component__["a" /* ContentLayoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["b" /* StoreModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
                })
            ],
            providers: [
                //Toastr and auth providers
                { provide: __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_14__shared_toastr_custom_option__["a" /* CustomOption */] },
                __WEBPACK_IMPORTED_MODULE_15__shared_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_auth_auth_guard_service__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__("./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <app-navbar></app-navbar>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <div class=\"content-wrapper\">\r\n                <div class=\"container-fluid\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n    <app-notification-sidebar></app-notification-sidebar>\r\n    <app-customizer></app-customizer>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        //customizer events
        this.elementRef.nativeElement.querySelector('#cz-compact-menu')
            .addEventListener('click', this.onClick.bind(this));
        this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
            .addEventListener('click', this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__("./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/full/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Theme customizer Starts-->\r\n<div class=\"customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block open\">\r\n\t<a class=\"customizer-close\">\r\n\t\t<i class=\"ft-x font-medium-3\"></i>\r\n\t</a>\r\n\t<a class=\"customizer-toggle bg-danger\" id=\"customizer-toggle-icon\">\r\n\t\t<i class=\"ft-settings font-medium-4 fa fa-spin white align-middle\"></i>\r\n\t</a>\r\n\t<div class=\"customizer-content p-3 ps-container ps-theme-dark\" data-ps-id=\"df6a5ce4-a175-9172-4402-dabd98fc9c0a\">\r\n\t\t<h4 class=\"text-uppercase mb-0 text-bold-400\">Theme Customizer</h4>\r\n\t\t<p>Customize &amp; Preview in Real Time</p>\r\n\t\t<hr>\r\n\r\n\t\t<!--Sidebar Options Starts-->\r\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Sidebar Color Options</h6>\r\n\t\t<div class=\"cz-bg-color\">\r\n\t\t\t<div class=\"row p-1\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-pomegranate d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"pomegranate\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-king-yna d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"king-yna\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-ibiza-sunset d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"ibiza-sunset\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-flickr d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"flickr\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-purple-bliss d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"purple-bliss\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-man-of-steel d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"man-of-steel\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"gradient-purple-love d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"purple-love\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row p-1\">\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-black d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"black\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-grey d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"white\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-primary d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"primary\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-success d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"success\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-warning d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"warning\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-info d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"info\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t<span class=\"bg-danger d-block rounded-circle\" style=\"width:20px; height:20px;\" data-bg-color=\"danger\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Sidebar Options Ends-->\r\n\t\t<hr>\r\n\r\n\t\t<!--Sidebar BG Image Starts-->\r\n\t\t<h6 class=\"text-center text-bold-500 mb-3 text-uppercase\">Sidebar Bg Image</h6>\r\n\t\t<div class=\"cz-bg-image row\">\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/01.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/02.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/03.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/04.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/05.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col mb-3\">\r\n\t\t\t\t<img src=\"assets/img/sidebar-bg/06.jpg\" class=\"rounded\" width=\"90\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Sidebar BG Image Ends-->\r\n\t\t<hr>\r\n\r\n\t\t<!--Sidebar BG Image Toggle Starts-->\r\n\t\t<div class=\"togglebutton\">\r\n\t\t\t<div class=\"switch\">\r\n\t\t\t\t<span>Sidebar Bg Image</span>\r\n\t\t\t\t<div class=\"float-right\">\r\n\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input cz-bg-image-display\" checked id=\"sidebar-bg-img\">\r\n\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"sidebar-bg-img\"></label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Sidebar BG Image Toggle Ends-->\r\n\t\t<hr>\r\n\r\n\t\t<!--Compact Menu Starts-->\r\n\t\t<div class=\"togglebutton\">\r\n\t\t\t<div class=\"switch\">\r\n\t\t\t\t<span>Compact Menu</span>\r\n\t\t\t\t<div class=\"float-right\">\r\n\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input cz-compact-menu\" id=\"cz-compact-menu\">\r\n\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"cz-compact-menu\"></label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--Compact Menu Ends-->\r\n\t\t<hr>\r\n\r\n\t\t<!--Sidebar Width Starts-->\r\n\t\t<div>\r\n\t\t\t<label for=\"cz-sidebar-width\">Sidebar Width</label>\r\n\t\t\t<select id=\"cz-sidebar-width\" class=\"custom-select cz-sidebar-width float-right\">\r\n\t\t\t\t<option value=\"small\">Small</option>\r\n\t\t\t\t<option value=\"medium\" selected>Medium</option>\r\n\t\t\t\t<option value=\"large\">Large</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t\t<!--Sidebar Width Ends-->\r\n\t</div>\r\n</div>\r\n<!--Theme customizer Ends-->"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    -webkit-box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n            box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected {\n      border: 3px solid #314fe5; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__("./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__("./src/app/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <p class=\"copyright text-center\">\r\n                Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent\">PIXINVENT</a>, All rights reserved.          \r\n        </p>\r\n        \r\n    </div>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/horizontal-navbar/horizontal-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light gradient-blackberry\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header clearfix\">\r\n            <div class=\"logo float-left mt-1\">\r\n                <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n                    <div class=\"logo-img\">\r\n                        <img src=\"assets/img/logo.png\" />\r\n                    </div>\r\n                    <span class=\"text align-middle\">APEX</span>\r\n                </a>\r\n            </div>\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <form class=\"navbar-form navbar-right mt-1 ml-5\" role=\"search\">\r\n                <div class=\"position-relative has-icon-right\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                    <div class=\"form-control-position\">\r\n                        <i class=\"ft-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 white\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\r\n                            <i class=\"ft-flag font-medium-3 white\"></i>\r\n                            <p class=\"d-none\">Language</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang\">                           \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\r\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\r\n                                <span>English</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\r\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\r\n                                <span>Spanish</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\r\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\r\n                                <span>Portuguese</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\r\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\r\n                                <span>German</span>\r\n                            </a>                            \r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\r\n                            <i class=\"ft-bell font-medium-3 white\"></i>\r\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\r\n                            <p class=\"d-none\">Notifications</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\r\n                            <div class=\"noti-list\">\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3\">\r\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\r\n                                    </span>\r\n                                </a>\r\n                            </div>\r\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 white\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">                           \r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\r\n                                <i class=\"ft-mail mr-2\"></i>\r\n                                <span>My Inbox</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\r\n                                <i class=\"ft-settings mr-2\"></i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\">\r\n                            <i class=\"ft-align-left font-medium-3 white\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./src/app/shared/horizontal-navbar/horizontal-navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/horizontal-navbar/horizontal-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HorizontalNavbarComponent = /** @class */ (function () {
    function HorizontalNavbarComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    HorizontalNavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    HorizontalNavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    };
    HorizontalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-horizontal-navbar',
            template: __webpack_require__("./src/app/shared/horizontal-navbar/horizontal-navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/horizontal-navbar/horizontal-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], HorizontalNavbarComponent);
    return HorizontalNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <form class=\"navbar-form navbar-right mt-1\" role=\"search\">\r\n                <div class=\"position-relative has-icon-right\">\r\n                    <input type=\"text\" class=\"form-control round\" placeholder=\"Search\">\r\n                    <div class=\"form-control-position\">\r\n                        <i class=\"ft-search\"></i>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\r\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Language</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang\">                           \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\r\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\r\n                                <span>English</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\r\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\r\n                                <span>Spanish</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\r\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\r\n                                <span>Portuguese</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\r\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\r\n                                <span>German</span>\r\n                            </a>                            \r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic2\" ngbDropdownToggle>\r\n                            <i class=\"ft-bell font-medium-3 blue-grey darken-4\"></i>\r\n                            <span class=\"notification badge badge-pill badge-danger\">4</span>\r\n                            <p class=\"d-none\">Notifications</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\" class=\"notification-dropdown\">\r\n                            <div class=\"noti-list\">\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell info float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 info\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in, et!</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell warning float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 warning\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametitaque in </span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3 border-bottom border-bottom-blue-grey border-bottom-lighten-4\">\r\n                                    <i class=\"ft-bell danger float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 danger\">New Order Received</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametest?</span>\r\n                                    </span>\r\n                                </a>\r\n                                <a class=\"dropdown-item noti-container py-3\">\r\n                                    <i class=\"ft-bell success float-left d-block font-large-1 mt-1 mr-2\"></i>\r\n                                    <span class=\"noti-wrapper\">\r\n                                        <span class=\"noti-title line-height-1 d-block text-bold-400 success\">New User Registered</span>\r\n                                        <span class=\"noti-text\">Lorem ipsum dolor sit ametnatus aut.</span>\r\n                                    </span>\r\n                                </a>\r\n                            </div>\r\n                            <a class=\"noti-footer primary text-center d-block border-top border-top-blue-grey border-top-lighten-4 text-bold-400 py-1\">Read All Notifications</a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">                           \r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" routerLink=\"/inbox\">\r\n                                <i class=\"ft-mail mr-2\"></i>\r\n                                <span>My Inbox</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1\" href=\"javascript:;\">\r\n                                <i class=\"ft-settings mr-2\"></i>\r\n                                <span>Settings</span>\r\n                            </a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span>Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\">\r\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\r\n  <a class=\"notification-sidebar-close\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT ACTIVITY</h6>\r\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                    <li class=\"timeline-line\"></li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new equipments for zonal office.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA will be on 15th August 2015.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400\">RECENT CHAT</h6>\r\n                <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-1.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-2.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-15.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-19.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-13.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-22.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-20.png\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications1\">\r\n                            <label class=\"custom-control-label\" for=\"notifications1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity1\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications2\">\r\n                            <label class=\"custom-control-label\" for=\"notifications2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity2\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-emails\">\r\n                            <label class=\"custom-control-label\" for=\"show-emails\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-stats\">\r\n                            <label class=\"custom-control-label\" for=\"show-stats\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->\r\n"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  -webkit-transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    -webkit-box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1);\n            box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent() {
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
        // notification-sidebar JS File
        $.getScript('./assets/js/notification-sidebar.js');
    };
    NotificationSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__("./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        })
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarsModule'
    },
    {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsNg2Module'
    },
    {
        path: 'forms',
        loadChildren: './forms/forms.module#FormModule'
    },
    {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },
    {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },
    {
        path: 'datatables',
        loadChildren: './data-tables/data-tables.module#DataTablesModule'
    },
    {
        path: 'uikit',
        loadChildren: './ui-kit/ui-kit.module#UIKitModule'
    },
    {
        path: 'components',
        loadChildren: './components/ui-components.module#UIComponentsModule'
    },
    {
        path: 'pages',
        loadChildren: './pages/full-pages/full-pages.module#FullPagesModule'
    },
    {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsModule'
    },
    {
        path: 'colorpalettes',
        loadChildren: './color-palette/color-palette.module#ColorPaletteModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'chat-ngrx',
        loadChildren: './chat-ngrx/chat-ngrx.module#ChatNGRXModule'
    },
    {
        path: 'inbox',
        loadChildren: './inbox/inbox.module#InboxModule'
    },
    {
        path: 'taskboard',
        loadChildren: './taskboard/taskboard.module#TaskboardModule'
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: './taskboard-ngrx/taskboard-ngrx.module#TaskboardNGRXModule'
    },
    {
        path: 'player',
        loadChildren: './player/player.module#PlayerModule'
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__horizontal_navbar_horizontal_navbar_component__ = __webpack_require__("./src/app/shared/horizontal-navbar/horizontal-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__("./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__customizer_customizer_component__ = __webpack_require__("./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notification_sidebar_notification_sidebar_component__ = __webpack_require__("./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__directives_toggle_fullscreen_directive__ = __webpack_require__("./src/app/shared/directives/toggle-fullscreen.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { HorizontalMenuComponent } from "./horizontal-menu/horizontal-menu.component";



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
                // HorizontalMenuComponent,
                __WEBPACK_IMPORTED_MODULE_9__customizer_customizer_component__["a" /* CustomizerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notification_sidebar_notification_sidebar_component__["a" /* NotificationSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
                // HorizontalMenuComponent,
                __WEBPACK_IMPORTED_MODULE_9__customizer_customizer_component__["a" /* CustomizerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__notification_sidebar_notification_sidebar_component__["a" /* NotificationSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__directives_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/inbox', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/player', title: 'Player', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/lists', title: 'List', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/buttons', title: 'Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/inputgroups', title: 'Input Groups', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/datepicker', title: 'Datepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/timepicker', title: 'Timepicker', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/editor', title: 'Editor', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tags', title: 'Input Tags', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/switch', title: 'Switch', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Group', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-grid', title: 'Input Grid', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Layouts', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/basic', title: 'Basic Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/horizontal', title: 'Horizontal Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/hidden-labels', title: 'Hidden Labels', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/form-actions', title: 'Form Actions', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/bordered', title: 'Bordered Forms', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/striped-rows', title: 'Striped Rows', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/forms/validation', title: 'Validation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/wizard', title: 'Wizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/ngx', title: 'NGX Wizard', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/tables/regular', title: 'Regular', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/extended', title: 'Extended', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/smart', title: 'Smart Tables', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Data Tables', icon: 'ft-layout', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/datatables/basic', title: 'Basic', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/editing', title: 'Editing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/filter', title: 'Filter', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/fullscreen', title: 'Fullscreen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/paging', title: 'Paging', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/pinning', title: 'Pinning', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/selection', title: 'Selection', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/datatables/sorting', title: 'Sorting', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/cards/basic', title: 'Basic Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cards/advanced', title: 'Advanced Cards', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google', title: 'Google Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Full Screen Map', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'ChartJs', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartist', title: 'Chartist', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/ngx', title: 'NGX Chart', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/pages/forgotpassword', title: 'Forgot Password', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/verticaltimeline', title: 'Vertical Timeline', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/login', title: 'Login', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/register', title: 'Register', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/lockscreen', title: 'Lock Screen', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"assets/img/logo.png\" />\r\n            </div>\r\n            <span class=\"text align-middle\">APEX</span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\">\r\n            <!-- First level menu -->\r\n             <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\r\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__("./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, translate) {
        this.router = router;
        this.route = route;
        this.translate = translate;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    //NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/toastr/custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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


//Toastr global configuration option
var CustomOption = /** @class */ (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can pass any options to override defaults
        _this.dismiss = 'auto';
        _this.toastLife = 3000;
        return _this;
    }
    CustomOption = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], CustomOption);
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map