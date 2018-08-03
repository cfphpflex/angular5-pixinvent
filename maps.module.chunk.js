webpackJsonp(["maps.module"],{

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Fullscreen Map Starts-->\r\n<section id=\"fullscreenMap\" class=\"mb-3\">\r\n    <div class=\"row\">\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;\r\n        background-color: rgb(229, 227, 223);\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n</section>\r\n<!--Fullscreen Map Ends-->"

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FullScreenMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-full-screen-map',
            template: __webpack_require__("./src/app/maps/full-screen-map/full-screen-map.component.html"),
            styles: [__webpack_require__("./src/app/maps/full-screen-map/full-screen-map.component.scss")]
        })
    ], FullScreenMapComponent);
    return FullScreenMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Basic google map starts-->\r\n<section id=\"map\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Google Map</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block mt-2\">\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic google map ends-->"

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__("./src/app/maps/google-map/google-map.component.html"),
            styles: [__webpack_require__("./src/app/maps/google-map/google-map.component.scss")],
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_screen_map_full_screen_map_component__ = __webpack_require__("./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_map_google_map_component__ = __webpack_require__("./src/app/maps/google-map/google-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: __WEBPACK_IMPORTED_MODULE_2__full_screen_map_full_screen_map_component__["a" /* FullScreenMapComponent */],
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: __WEBPACK_IMPORTED_MODULE_3__google_map_google_map_component__["a" /* GoogleMapComponent */],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maps_routing_module__ = __webpack_require__("./src/app/maps/maps-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__full_screen_map_full_screen_map_component__ = __webpack_require__("./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__google_map_google_map_component__ = __webpack_require__("./src/app/maps/google-map/google-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__maps_routing_module__["a" /* MapsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__full_screen_map_full_screen_map_component__["a" /* FullScreenMapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__google_map_google_map_component__["a" /* GoogleMapComponent */]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ })

});
//# sourceMappingURL=maps.module.chunk.js.map