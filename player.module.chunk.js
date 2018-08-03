webpackJsonp(["player.module"],{

/***/ "./src/app/player/player-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_component__ = __webpack_require__("./src/app/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__player_component__["a" /* PlayerComponent */],
        data: {
            title: 'Player'
        },
    }
];
var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">Players</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Player Starts -->\n<section id=\"players\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4>Video Player</h4>\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12\">\n          <vg-player>\n            <vg-overlay-play></vg-overlay-play>\n            <vg-buffering></vg-buffering>\n\n            <vg-scrub-bar>\n              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n              <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n            </vg-scrub-bar>\n\n            <vg-controls>\n              <vg-play-pause></vg-play-pause>\n              <vg-playback-button></vg-playback-button>\n\n              <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n              <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n              <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n              <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n              <vg-track-selector></vg-track-selector>\n              <vg-mute></vg-mute>\n              <vg-volume></vg-volume>\n\n              <vg-fullscreen></vg-fullscreen>\n            </vg-controls>\n\n            <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\n              <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n              <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\n              <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\n\n              <track kind=\"subtitles\" label=\"English\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot.vtt\" srclang=\"en\" default>\n              <track kind=\"subtitles\" label=\"Español\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt\" srclang=\"es\">\n            </video>\n          </vg-player>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4>Audio Player</h4>\n    </div>\n    <div class=\"card-block\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12\">\n          <vg-player>\n            <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls style=\"width: 100%\">\n              <source src=\"http://static.videogular.com/assets/audios/videogular.mp3\" type=\"audio/mp3\">\n            </audio>\n          </vg-player>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Player Ends -->"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
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

var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-player',
            template: __webpack_require__("./src/app/player/player.component.html"),
            styles: [__webpack_require__("./src/app/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/player/player.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core__ = __webpack_require__("./node_modules/videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_controls__ = __webpack_require__("./node_modules/videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__ = __webpack_require__("./node_modules/videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__ = __webpack_require__("./node_modules/videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_routing_module__ = __webpack_require__("./src/app/player/player-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_component__ = __webpack_require__("./src/app/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__player_routing_module__["a" /* PlayerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_3_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_4_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_5_videogular2_buffering__["VgBufferingModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__player_component__["a" /* PlayerComponent */]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ })

});
//# sourceMappingURL=player.module.chunk.js.map