webpackJsonp(["dashboard.module"],{

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard1_dashboard1_component__ = __webpack_require__("./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard2_dashboard2_component__ = __webpack_require__("./src/app/dashboard/dashboard2/dashboard2.component.ts");
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
                path: 'dashboard1',
                component: __WEBPACK_IMPORTED_MODULE_2__dashboard1_dashboard1_component__["a" /* Dashboard1Component */],
                data: {
                    title: 'Dashboard 1'
                }
            },
            {
                path: 'dashboard2',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard2_dashboard2_component__["a" /* Dashboard2Component */],
                data: {
                    title: 'Dashboard 2'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__ = __webpack_require__("./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_chartist__ = __webpack_require__("./node_modules/ng-chartist/dist/ng-chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_directives_match_height_directive__ = __webpack_require__("./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard1_dashboard1_component__ = __webpack_require__("./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard2_dashboard2_component__ = __webpack_require__("./src/app/dashboard/dashboard2/dashboard2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng_chartist__["ChartistModule"],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_directives_match_height_directive__["a" /* MatchHeightModule */]
            ],
            exports: [],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__dashboard1_dashboard1_component__["a" /* Dashboard1Component */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard2_dashboard2_component__["a" /* Dashboard2Component */]
            ],
            providers: [],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Statistics cards Starts-->\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-blackberry\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">$2156</h3>\r\n\t\t\t\t\t\t\t<span>Total Tax</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-pie-chart font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-ibiza-sunset\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">$1567</h3>\r\n\t\t\t\t\t\t\t<span>Total Cost</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-bulb font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-green-tea\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">$4566</h3>\r\n\t\t\t\t\t\t\t<span>Total Sales</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-graph font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n\t\t<div class=\"card gradient-pomegranate\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block pt-2 pb-0\">\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-body white text-left\">\r\n\t\t\t\t\t\t\t<h3 class=\"font-large-1 mb-0\">$8695</h3>\r\n\t\t\t\t\t\t\t<span>Total Earning</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right white text-right\">\r\n\t\t\t\t\t\t\t<i class=\"icon-wallet font-large-1\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartshadow mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"WidgetlineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Statistics cards Ends-->\r\n\r\n<!--Line with Area Chart 1 Starts-->\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">PRODUCTS SALES</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"chart-info mb-3 ml-3\">\r\n\t\t\t\t\t\t<span class=\"gradient-blackberry d-inline-block rounded-circle mr-1\" style=\"width:15px; height:15px;\"></span> Sales\r\n\t\t\t\t\t\t<span class=\"gradient-mint d-inline-block rounded-circle mr-1 ml-2\" style=\"width:15px; height:15px;\"></span> Visits\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"line-area\" class=\"height-350 lineArea\">\r\n\t\t\t\t\t\t<x-chartist [data]=\"lineArea.data\" [type]=\"lineArea.type\" [options]=\"lineArea.options\"\r\n\t\t\t\t\t\t [responsiveOptions]=\"lineArea.responsiveOptions\" [events]=\"lineArea.events\">\r\n\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!--Line with Area Chart 1 Ends-->\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-4 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Statistics</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t<p class=\"font-medium-2 text-muted text-center pb-2\">Last 6 Months Sales</p>\r\n\t\t\t\t<div id=\"Stack-bar-chart\" class=\"height-300 Stackbarchart mb-2\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"Stackbarchart.data\" [type]=\"Stackbarchart.type\" [options]=\"Stackbarchart.options\"\r\n\t\t\t\t\t [responsiveOptions]=\"Stackbarchart.responsiveOptions\" [events]=\"Stackbarchart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-8 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Shopping Cart</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<table class=\"table table-responsive-sm text-center\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>Image</th>\r\n\t\t\t\t\t\t\t<th>Product</th>\r\n\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t<th>Status</th>\r\n\t\t\t\t\t\t\t<th>Amount</th>\r\n\t\t\t\t\t\t\t<th>Delete</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/01.png\" alt=\"Generic placeholder image\" /></td>\r\n\t\t\t\t\t\t\t<td>Ferrero Rocher</td>\r\n\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-round btn-primary\">Active</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>$19.94</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"danger\" data-original-title=\"\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ft-x\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/07.png\" alt=\"Generic placeholder image\" /></td>\r\n\t\t\t\t\t\t\t<td>Headphones</td>\r\n\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-round btn-danger\">Disabled</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>$99.00</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"danger\" data-original-title=\"\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ft-x\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/11.png\" alt=\"Generic placeholder image\" /></td>\r\n\t\t\t\t\t\t\t<td>Camera</td>\r\n\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-round btn-info\">Paused</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>$299.00</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"danger\" data-original-title=\"\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ft-x\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td><img class=\"media-object round-media height-50\" src=\"assets/img/elements/14.png\" alt=\"Generic placeholder image\" /></td>\r\n\t\t\t\t\t\t\t<td>Beer</td>\r\n\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-round btn-success\">Active</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>$24.51</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<a class=\"danger\" data-original-title=\"\" title=\"\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"ft-x\"></i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-8 col-lg-12 col-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title mb-0\">Visit & Sales Statistics</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"chart-info mb-2\">\r\n\t\t\t\t\t\t<span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n\t\t\t\t\t\t<span class=\"text-uppercase\"><i class=\"fa fa-circle deep-purple font-small-2 mr-1\"></i> Visits</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"line-area2\" class=\"height-400 lineArea2\">\r\n\t\t\t\t\t\t<x-chartist class=\"\" [data]=\"lineArea2.data\" [type]=\"lineArea2.type\" [options]=\"lineArea2.options\"\r\n\t\t\t\t\t\t [responsiveOptions]=\"lineArea2.responsiveOptions\" [events]=\"lineArea2.events\">\r\n\r\n\t\t\t\t\t\t</x-chartist>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12 col-12\">\r\n\t\t<div class=\"card gradient-blackberry\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<h4 class=\"card-title white\">Statistics</h4>\r\n\t\t\t\t\t<div class=\"p-2 text-center\">\r\n\t\t\t\t\t\t<a class=\"white font-medium-1\">Month</a>\r\n\t\t\t\t\t\t<a class=\"btn btn-raised btn-round bg-white mx-3 px-3\">Week</a>\r\n\t\t\t\t\t\t<a class=\"white font-medium-1\">Day</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"my-3 text-center white\">\r\n\t\t\t\t\t\t<a class=\"font-large-2 d-block mb-1\">$ 78.89 <span class=\"ft-arrow-up font-large-2\"></span></a>\r\n\t\t\t\t\t\t<span class=\"font-medium-1\">Week2   +15.44</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"lineChart\" class=\"height-250 lineChart lineChartShadow\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"lineChart.data\" [type]=\"lineChart.type\" [options]=\"lineChart.options\"\r\n\t\t\t\t\t [responsiveOptions]=\"lineChart.responsiveOptions\" [events]=\"lineChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\" matchHeight =\"card\">\r\n\t<div class=\"col-xl-4 col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Statistics</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t<p class=\"font-medium-2 text-muted text-center\">Hobbies</p>\r\n\t\t\t\t<div id=\"bar-chart\" class=\"height-250 BarChartShadow BarChart\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"BarChart.data\" [type]=\"BarChart.type\" [options]=\"BarChart.options\"\r\n\t\t\t\t\t [responsiveOptions]=\"BarChart.responsiveOptions\" [events]=\"BarChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col text-center\">\r\n\t\t\t\t\t\t\t<span class=\"gradient-pomegranate d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n\t\t\t\t\t\t\t<span class=\"font-large-1 d-block mb-2\">48</span>\r\n\t\t\t\t\t\t\t<span>Sport</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col text-center\">\r\n\t\t\t\t\t\t\t<span class=\"gradient-green-tea d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n\t\t\t\t\t\t\t<span class=\"font-large-1 d-block mb-2\">9</span>\r\n\t\t\t\t\t\t\t<span>Music</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col text-center\">\r\n\t\t\t\t\t\t\t<span class=\"gradient-blackberry d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n\t\t\t\t\t\t\t<span class=\"font-large-1 d-block mb-2\">26</span>\r\n\t\t\t\t\t\t\t<span>Travel</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col text-center\">\r\n\t\t\t\t\t\t\t<span class=\"gradient-ibiza-sunset d-block rounded-circle mx-auto mb-2\" style=\"width:10px; height:10px;\"></span>\r\n\t\t\t\t\t\t\t<span class=\"font-large-1 d-block mb-2\">17</span>\r\n\t\t\t\t\t\t\t<span>News</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title mb-0\">User List</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-1 mt-1 mb-0\">Jessica Rice</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">UX Designer</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customcheckbox1\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox1\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-1 mt-1 mb-0\">Jacob Rios</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">HTML Developer</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox2\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox2\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-1 mt-1 mb-0\">Russell Delgado</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">Database Designer</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox3\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox3\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-1 mt-1 mb-0\">Sara McDonald</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">Team Leader</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" checked id=\"customcheckbox4\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox4\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"media mb-1\">\r\n\t\t\t\t\t\t<a> \r\n\t\t\t\t\t\t\t\t<img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"font-medium-1 mt-1 mb-0\">Janet Lucas</h4>\r\n\t\t\t\t\t\t\t<p class=\"text-muted font-small-3\">Project Manger</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-1\">\r\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customcheckbox5\">\r\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customcheckbox5\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"action-buttons mt-2 text-center\">\r\n\t\t\t\t\t\t<a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">Add New</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-4 col-lg-12\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"card-header\">\r\n\t\t\t\t<h4 class=\"card-title\">Project Stats</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t<p class=\"font-medium-2 text-muted text-center\">Project Tasks</p>\r\n\t\t\t\t<div id=\"donut-dashboard-chart\" class=\"height-250 donut\">\r\n\t\t\t\t\t<x-chartist class=\"\" [data]=\"DonutChart.data\" [type]=\"DonutChart.type\" [options]=\"DonutChart.options\" [responsiveOptions]=\"DonutChart.responsiveOptions\"\r\n\t\t\t\t\t [events]=\"DonutChart.events\">\r\n\t\t\t\t\t</x-chartist>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t<div class=\"row mb-3\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">23% - Started</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 23%;\" aria-valuenow=\"23\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">14% - In Progress</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-amber\" role=\"progressbar\" style=\"width: 14%;\" aria-valuenow=\"14\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mb-2\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">35% - Remaining</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-deep-purple bg-lighten-1\" role=\"progressbar\" style=\"width: 35%;\" aria-valuenow=\"35\" aria-valuemin=\"0\"\r\n\t\t\t\t\t\t\t\t aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<span class=\"mb-1 text-muted d-block\">28% - Done</span>\r\n\t\t\t\t\t\t\t<div class=\"progress\" style=\"height: 5px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"progress-bar bg-blue\" role=\"progressbar\" style=\"width: 28%;\" aria-valuenow=\"28\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var data = __webpack_require__("./src/app/shared/data/chartist.json");
var Dashboard1Component = /** @class */ (function () {
    function Dashboard1Component() {
        // Line area chart configuration Starts
        this.lineArea = {
            type: 'Line',
            data: data['lineAreaDashboard'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(146, 254, 157, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient1',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
            },
        };
        // Line area chart configuration Ends
        // Stacked Bar chart configuration Starts
        this.Stackbarchart = {
            type: 'Bar',
            data: data['Stackbarchart'],
            options: {
                stackBars: true,
                fullWidth: true,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                chartPadding: 30
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        });
                    }
                }
            },
        };
        // Stacked Bar chart configuration Ends
        // Line area chart 2 configuration Starts
        this.lineArea2 = {
            type: 'Line',
            data: data['lineArea2'],
            options: {
                showArea: true,
                fullWidth: true,
                lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].none(),
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                }
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient3',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.3,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line area chart 2 configuration Ends
        // Line chart configuration Starts
        this.lineChart = {
            type: 'Line', data: data['LineDashboard'],
            options: {
                axisX: {
                    showGrid: false
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    low: 0,
                    high: 100,
                    offset: 0,
                },
                fullWidth: true,
                offset: 0,
            },
            events: {
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart = {
            type: 'Pie',
            data: data['donutDashboard'],
            options: {
                donut: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = data['donutDashboard'].series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        //  Bar chart configuration Starts
        this.BarChart = {
            type: 'Bar', data: data['DashboardBar'], options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                low: 0,
                high: 60,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient4',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(238, 9, 121,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 106, 0, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient5',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 75, 145,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(120, 204, 55, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient7',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(155, 60, 183,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(255, 57, 111, 1)'
                    });
                },
                draw: function (data) {
                    var barHorizontalCenter, barVerticalCenter, label, value;
                    if (data.type === 'bar') {
                        data.element.attr({
                            y1: 195,
                            x1: data.x1 + 0.001
                        });
                    }
                }
            },
        };
        // Bar chart configuration Ends
        // line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true,
            },
        };
        // Line chart configuration Ends
    }
    Dashboard1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard1',
            template: __webpack_require__("./src/app/dashboard/dashboard1/dashboard1.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard1/dashboard1.component.scss")]
        })
    ], Dashboard1Component);
    return Dashboard1Component;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-primary\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body white text-left\">\r\n                            <h3 class=\"font-large-1 mb-0\">$15,678</h3>\r\n                            <span>Total Cost</span>\r\n                        </div>\r\n                        <div class=\"media-right white text-right\">\r\n                            <i class=\"icon-bulb font-large-1\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-line-chart\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n                        [events]=\"WidgetlineChart.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-warning\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body white text-left\">\r\n                            <h3 class=\"font-large-1 mb-0\">$2156</h3>\r\n                            <span>Total Tax</span>\r\n                        </div>\r\n                        <div class=\"media-right white text-right\">\r\n                            <i class=\"icon-pie-chart font-large-1\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n                        [events]=\"WidgetlineChart.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-success\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body white text-left\">\r\n                            <h3 class=\"font-large-1 mb-0\">$45,668</h3>\r\n                            <span>Total Sales</span>\r\n                        </div>\r\n                        <div class=\"media-right white text-right\">\r\n                            <i class=\"icon-graph font-large-1\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n                        [events]=\"WidgetlineChart.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 col-12\">\r\n        <div class=\"card bg-danger\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block pt-2 pb-0\">\r\n                    <div class=\"media\">\r\n                        <div class=\"media-body white text-left\">\r\n                            <h3 class=\"font-large-1 mb-0\">$32,454</h3>\r\n                            <span>Total Earning</span>\r\n                        </div>\r\n                        <div class=\"media-right white text-right\">\r\n                            <i class=\"icon-wallet font-large-1\"></i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div id=\"Widget-line-chart2\" class=\"height-75 WidgetlineChart WidgetlineChartShadow mb-3\">\r\n                    <x-chartist class=\"\" [data]=\"WidgetlineChart.data\" [type]=\"WidgetlineChart.type\" [options]=\"WidgetlineChart.options\" [responsiveOptions]=\"WidgetlineChart.responsiveOptions\"\r\n                        [events]=\"WidgetlineChart.events\">\r\n                    </x-chartist>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" matchHeight =\"card\">\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"card-title mb-0\">Discover People</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-2 mb-0\">Jessica Rice</h4>\r\n                        </div>\r\n                        <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-danger height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-2 mb-0\">Jacob Rios</h4>\r\n                        </div>\r\n                        <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-success height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-2 mb-0\">Russell Diaz</h4>\r\n                        </div>\r\n                        <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-warning height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-2 mb-0\">Sara Bell</h4>\r\n                        </div>\r\n                        <a class=\"d-flex ml-3 btn btn-raised btn-round gradient-blackberry py-2 width-150 justify-content-center white\">Following</a>\r\n                    </div>\r\n                    <div class=\"media mb-3\">\r\n                        <img alt=\"96x96\" class=\"media-object d-flex mr-3 align-self-center bg-info height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                        <div class=\"media-body\">\r\n                            <h4 class=\"font-medium-1 mt-2 mb-0\">Janet Lucas</h4>\r\n                        </div>\r\n                        <a class=\"d-flex ml-3 btn btn-raised btn-round btn-outline-grey py-2 width-150 justify-content-center\">Follow</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"card-title mb-0\">Sales Analysis</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-3\">\r\n                        <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n                        <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n                        <span class=\"text-uppercase\"><i class=\"fa fa-circle danger font-small-2 mr-1\"></i> clicks</span>\r\n                    </div>\r\n                    <div id=\"line-chart1\" class=\"height-350 lineChart1 lineChart1Shadow\">\r\n                        <x-chartist class=\"\" [data]=\"lineChart1.data\" [type]=\"lineChart1.type\" [options]=\"lineChart1.options\"\r\n                            [responsiveOptions]=\"lineChart1.responsiveOptions\" [events]=\"lineChart1.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" matchHeight =\"card\">\r\n    <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header text-center pb-0\">\r\n                <span class=\"font-medium-2 primary\">Steps</span>\r\n                <h3 class=\"font-large-2 mt-1\">3261</h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div id=\"donut-chart1\" class=\"height-250 donut1\">\r\n                    <x-chartist [data]=\"DonutChart1.data\" [type]=\"DonutChart1.type\" [options]=\"DonutChart1.options\" [responsiveOptions]=\"DonutChart1.responsiveOptions\"\r\n                        [events]=\"DonutChart1.events\">\r\n                    </x-chartist>\r\n                </div>\r\n                <div class=\"card-block text-center\">\r\n                    <span class=\"font-large-1 d-block mb-1\">5000</span>\r\n                    <span class=\"primary font-medium-1\">Steps Today's Target</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header text-center pb-0\">\r\n                <span class=\"font-medium-2 warning\">Distance</span>\r\n                <h3 class=\"font-large-2 mt-1\">7.6\r\n                    <span class=\"font-medium-1 grey darken-1 text-bold-400\">miles</span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div id=\"donut-chart2\" class=\"height-250 donut2\">\r\n                    <x-chartist [data]=\"DonutChart2.data\" [type]=\"DonutChart2.type\" [options]=\"DonutChart2.options\" [responsiveOptions]=\"DonutChart2.responsiveOptions\"\r\n                        [events]=\"DonutChart2.events\">\r\n                    </x-chartist>\r\n                </div>\r\n                <div class=\"card-block text-center\">\r\n                    <span class=\"font-large-1 d-block mb-1\">10</span>\r\n                    <span class=\"warning font-medium-1\">Miles Today's Target</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-4 col-md-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header text-center pb-0\">\r\n                <span class=\"font-medium-2 danger\">Calories</span>\r\n                <h3 class=\"font-large-2 mt-1\">4,025\r\n                    <span class=\"font-medium-1 grey darken-1 text-bold-400\">kcal</span>\r\n                </h3>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div id=\"donut-chart3\" class=\"height-250 donut3\">\r\n                    <x-chartist [data]=\"DonutChart3.data\" [type]=\"DonutChart3.type\" [options]=\"DonutChart3.options\" [responsiveOptions]=\"DonutChart3.responsiveOptions\"\r\n                        [events]=\"DonutChart3.events\">\r\n                    </x-chartist>\r\n                </div>\r\n                <div class=\"card-block text-center\">\r\n                    <span class=\"font-large-1 d-block mb-1\">5000</span>\r\n                    <span class=\"danger font-medium-1\">kcla Today's Target</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" matchHeight =\"card\">\r\n    <div class=\"col-xl-6 col-lg-12 col-sm-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-img\">\r\n                    <img class=\"card-img-top img-fluid height-300\" src=\"assets/img/photos/weather-1.jpg\" alt=\"Card image cap\">\r\n                    <h4 class=\"card-title\">Sunny</h4>\r\n                    <a class=\"btn btn-floating halfway-fab bg-primary\"><i class=\"ft-plus\"></i></a>\r\n                </div>\r\n                <div class=\"card-block mt-2\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Mon</span>\r\n                            <i class=\"wi wi-day-sunny display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">13&deg;</span>\r\n                        </div>\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Tue</span>\r\n                            <i class=\"wi wi-day-cloudy display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">12&deg;</span>\r\n                        </div>\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Wed</span>\r\n                            <i class=\"wi wi-day-cloudy-gusts display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">10&deg;</span>\r\n                        </div>\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Thu</span>\r\n                            <i class=\"wi wi-day-cloudy-windy display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">12&deg;</span>\r\n                        </div>\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Fri</span>\r\n                            <i class=\"wi wi-day-fog display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">9&deg;</span>\r\n                        </div>\r\n                        <div class=\"col-2 text-center\">\r\n                            <span class=\"display-block\">Sat</span>\r\n                            <i class=\"wi wi-day-lightning display-block warning font-large-1 my-3\"></i>\r\n                            <span class=\"display-block\">6&deg;</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-xl-6 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <h4 class=\"card-title\">Statistics</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n                        <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n                    </div>\r\n                    <div id=\"line-chart2\" class=\"height-350 lineChart2 lineChart2Shadow\">\r\n                        <x-chartist class=\"\" [data]=\"lineChart2.data\" [type]=\"lineChart2.type\" [options]=\"lineChart2.options\"\r\n                            [responsiveOptions]=\"lineChart2.responsiveOptions\" [events]=\"lineChart2.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row mb-3\" matchHeight =\"card\">\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"row d-flex mb-3 py-2\">\r\n                        <div class=\"col align-self-center text-center\"><i class=\"icon-graph font-large-2 blue-grey lighten-2\"></i></div>\r\n                        <div class=\"col align-self-center\"><img alt=\"96x96\" class=\"bg-danger width-150 rounded-circle img-fluid\" src=\"assets/img/portrait/small/avatar-s-11.png\"></div>\r\n                        <div class=\"col align-self-center text-center\"><i class=\"icon-envelope font-large-2 blue-grey lighten-2\"></i></div>\r\n                    </div>\r\n                    <h3 class=\"font-large-1 text-center\">Kevin Sullivan</h3>\r\n                    <span class=\"font-medium-1 grey d-block text-center\">UX Designer</span>\r\n                    <div class=\"row mt-4 mb-3\">\r\n                        <div class=\"col-xl-7 col-8 \">\r\n                            <div id=\"Widget-line-chart1\" class=\"height-75 WidgetlineChart1 WidgetlineChart1Shadow px-2\">\r\n                                <x-chartist class=\"\" [data]=\"WidgetlineChart1.data\" [type]=\"WidgetlineChart1.type\" [options]=\"WidgetlineChart1.options\" [responsiveOptions]=\"WidgetlineChart1.responsiveOptions\"\r\n                                    [events]=\"WidgetlineChart1.events\">\r\n                                </x-chartist>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-5 col-4\">\r\n                            <span class=\"font-large-1\"><i class=\"fa fa-caret-up font-large-2 success\"></i> 27 %</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-img\">\r\n                    <ngb-carousel>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/img/photos/17.jpg\" alt=\"Random first slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>First slide label</h3>\r\n                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/img/photos/13.jpg\" alt=\"Random second slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>Second slide label</h3>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n                            </div>\r\n                        </ng-template>\r\n                        <ng-template ngbSlide>\r\n                            <img src=\"assets/img/photos/12.jpg\" alt=\"Random third slide\">\r\n                            <div class=\"carousel-caption\">\r\n                                <h3>Third slide label</h3>\r\n                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ngb-carousel>\r\n                    <a class=\"btn btn-floating halfway-fab btn-large gradient-blackberry\"><i class=\"ft-plus\"></i></a>\r\n                </div>\r\n                <div class=\"card-block mt-3\">\r\n                    <h4 class=\"card-title\">Card title</h4>\r\n                    <p class=\"card-text\">Sweet halvah dragée jelly-o halvah carrot cake oat cake. Donut jujubes jelly chocolate cake.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"card-title\">Earnings</h4>\r\n                <span class=\"grey\">Mon 18 - Sun 21</span>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"earning-details mb-4\">\r\n                    <h3 class=\"font-large-2 mb-1\">$4295.36 <i class=\"ft-arrow-up font-large-2 teal accent-3\"></i></h3>\r\n                    <span class=\"font-medium-1 grey d-block\">Total Earnings</span>\r\n                </div>\r\n                    <div id=\"Widget-line-chart2\" class=\"height-100 WidgetlineChart2 WidgetlineChart2Shadow\">\r\n                        <x-chartist class=\"\" [data]=\"WidgetlineChart2.data\" [type]=\"WidgetlineChart2.type\" [options]=\"WidgetlineChart2.options\" [responsiveOptions]=\"WidgetlineChart2.responsiveOptions\"\r\n                            [events]=\"WidgetlineChart2.events\">\r\n                        </x-chartist>\r\n                    </div>\r\n                    <div class=\"action-buttons mt-4 mb-1 text-center\">\r\n                        <a class=\"btn btn-raised gradient-blackberry py-2 px-4 white mr-2\">View Full</a>\r\n                        <a class=\"btn btn-raised btn-outline-grey py-2 px-3\">Print</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" matchHeight =\"card\">\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n        <div class=\"card card-inverse bg-primary text-center\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-img overlap\">\r\n                    <img src=\"assets/img/elements/11.png\" alt=\"element 06\" width=\"190\" class=\"mb-1\">\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">New Arrival</h4>\r\n                    <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n        <div class=\"card card-inverse bg-danger text-center\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-img overlap\">\r\n                    <img src=\"assets/img/elements/14.png\" alt=\"element 03\" width=\"170\">\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Brand Minute</h4>\r\n                    <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 col-md-4 col-sm-12 mb-2\">\r\n        <div class=\"card card-inverse bg-warning text-center\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-img overlap\">\r\n                    <img src=\"assets/img/elements/07.png\" alt=\"element 07\" width=\"225\">\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Brand Minute</h4>\r\n                    <p class=\"card-text\">Donut toffee candy brownie soufflé macaroon.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" matchHeight =\"card\">\r\n    <div class=\"col-xl-8 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header pb-0\">\r\n                <h4 class=\"card-title\">Sales Per Visit</h4>\r\n            </div>\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <div class=\"chart-info mb-2\">\r\n                        <span class=\"text-uppercase mr-3\"><i class=\"fa fa-circle primary font-small-2 mr-1\"></i> Sales</span>\r\n                        <span class=\"text-uppercase\"><i class=\"fa fa-circle warning font-small-2 mr-1\"></i> Visits</span>\r\n                    </div>\r\n                    <div id=\"line-area-chart\" class=\"height-300 lineAreaChart mb-1\">\r\n                        <x-chartist class=\"\" [data]=\"lineAreaChart.data\" [type]=\"lineAreaChart.type\" [options]=\"lineAreaChart.options\"\r\n                            [responsiveOptions]=\"lineAreaChart.responsiveOptions\" [events]=\"lineAreaChart.events\">\r\n\r\n                        </x-chartist>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">DAILY DIET</h4>\r\n                    <p class=\"card-text\">Some quick example text to build on the card.</p>\r\n                </div>\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\">\r\n                        <span class=\"badge bg-primary float-right\">4</span> Protein Milk\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <span class=\"badge bg-info float-right\">2</span> oz Water\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <span class=\"badge bg-warning float-right\">6</span> Vegetable Juice\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <span class=\"badge bg-success float-right\">1</span> Sugar Free Jello-O\r\n                    </li>\r\n                    <li class=\"list-group-item\">\r\n                        <span class=\"badge bg-danger float-right\">3</span> Protein Meal\r\n                    </li>\r\n                </ul>\r\n                <div class=\"card-block\">\r\n                    <a class=\"card-link success\">Card link</a>\r\n                    <a class=\"card-link success\">Another link</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.scss":
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChartShadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except for the spread property */ }\n\n:host /deep/ .WidgetlineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart1 .ct-line {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard2#widgradient\") !important; }\n\n:host /deep/ .WidgetlineChart1Shadow {\n  -webkit-filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart2 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart2 .ct-line {\n  stroke: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard2#widgradient1\") !important; }\n\n:host /deep/ .WidgetlineChart2 .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 5px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut1 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #009DA0; }\n\n:host /deep/ .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut1 .ct-done .ct-slice-donut {\n  stroke: #009DA0; }\n\n:host /deep/ .donut2 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF8D60; }\n\n:host /deep/ .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut2 .ct-done .ct-slice-donut {\n  stroke: #FF8D60; }\n\n:host /deep/ .donut3 .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 60px;\n  fill: #FF586B; }\n\n:host /deep/ .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #eee; }\n\n:host /deep/ .donut3 .ct-done .ct-slice-donut {\n  stroke: #FF586A; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-area {\n  fill: url(\"https://cfphpflex.github.io/angular5-pixinvent/dashboard/dashboard2#gradient\") !important; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-area {\n  fill: #ff8d60;\n  fill-opacity: 0.1; }\n\n:host /deep/ .lineAreaChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineAreaChart .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineAreaChart .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineAreaChart .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart2 .ct-series-b .ct-point-circle {\n  stroke: #ff8d60; }\n\n:host /deep/ .lineChart2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineChart2 .ct-line {\n  fill: none;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart2Shadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .lineChart1 .ct-line {\n  fill: none;\n  stroke-width: 3px; }\n\n:host /deep/ .lineChart1 .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .lineChart1Shadow {\n  -webkit-filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var data = __webpack_require__("./src/app/shared/data/chartist.json");
var Dashboard2Component = /** @class */ (function () {
    function Dashboard2Component() {
        // Line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['WidgetlineChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChart1 = {
            type: 'Line', data: data['WidgetlineChart3'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true,
                chartPadding: { top: 0, right: 0, bottom: 10, left: 0 }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'widgradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChart2 = {
            type: 'Line', data: data['WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'widgradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255,1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(17,228,183, 1)'
                    });
                },
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart1 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 0,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue9c9';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart2 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 90,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue9e7';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart3 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 270,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue964';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
            type: 'Line',
            data: data['lineArea3'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(38, 198, 218, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Line chart configuration Starts
        this.lineChart2 = {
            type: 'Line', data: data['line2'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.lineChart1 = {
            type: 'Line', data: data['line1'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
    }
    Dashboard2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard2',
            template: __webpack_require__("./src/app/dashboard/dashboard2/dashboard2.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard2/dashboard2.component.scss")]
        })
    ], Dashboard2Component);
    return Dashboard2Component;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map