webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h1 class=\"header__title\">{{title}}</h1>\r\n  <nav class=\"header__nav nav\">\r\n    <a md-button routerLink=\"/upload\" routerLinkActive=\"active\" class=\"nav__btn\">Upload</a>\r\n    <a md-button routerLink=\"/dj-controller\" routerLinkActive=\"active\" class=\"nav__btn\">Dj-controller</a>\r\n  </nav>\r\n</header>\r\n<main class=\"main\">\r\n  <router-outlet ></router-outlet>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  background-color: #673ab7;\n  color: #f3f3f3;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px; }\n  @media (max-width: 767px) {\n    .header {\n      height: auto; } }\n  .header__title {\n    font-size: 24px; }\n  .header__nav {\n    -ms-flex-preferred-size: 300px;\n        flex-basis: 300px; }\n\n.main {\n  height: calc(100% - 60px); }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%; }\n  .nav__btn {\n    margin: 5px;\n    text-transform: uppercase;\n    font-weight: bold;\n    height: 100%;\n    border-radius: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .nav__btn.active {\n    color: #212121;\n    background-color: #ffd740; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Music is life';
        this.router.navigate(['/upload']);
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__uploader_uploader_component__ = __webpack_require__("../../../../../src/app/uploader/uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dj_controller_dj_controller_component__ = __webpack_require__("../../../../../src/app/dj-controller/dj-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dj_controller_player_player_component__ = __webpack_require__("../../../../../src/app/dj-controller/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_route_guard_service__ = __webpack_require__("../../../../../src/app/services/route-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__uploader_uploader_component__["a" /* UploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dj_controller_dj_controller_component__["a" /* DjControllerComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dj_controller_player_player_component__["a" /* PlayerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdSliderModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdIconModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_playlists_service__["a" /* PlaylistsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_route_guard_service__["a" /* RouteGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploader_uploader_component__ = __webpack_require__("../../../../../src/app/uploader/uploader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dj_controller_dj_controller_component__ = __webpack_require__("../../../../../src/app/dj-controller/dj-controller.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_route_guard_service__ = __webpack_require__("../../../../../src/app/services/route-guard.service.ts");



const ROUTES = [
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_0__uploader_uploader_component__["a" /* UploaderComponent */] },
    { path: 'dj-controller', component: __WEBPACK_IMPORTED_MODULE_1__dj_controller_dj_controller_component__["a" /* DjControllerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_route_guard_service__["a" /* RouteGuard */]] },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = ROUTES;

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dj-controller/dj-controller.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-player #playerA [title]=\"'Playlist A'\" [list]=\"listA\" [mainVolume]=\"mainVolume\"></app-player>\n\n<section class=\"main-ctrl\">\n  <button (click)=\"playerA.start(); playerB.start();\" md-fab><md-icon>play_arrow</md-icon></button>\n  <md-slider min=\"0\" max=\"100\" step=\"1\" [(ngModel)]=\"mainVolume\" thumbLabel tickInterval=\"1\"></md-slider>\n  <button (click)=\"playerA.pause(); playerB.pause();\" md-fab><md-icon>pause</md-icon></button>\n</section>\n\n<app-player #playerB [title]=\"'Playlist B'\" [list]=\"listB\" [mainVolume]=\"mainVolume\"></app-player>\n"

/***/ }),

/***/ "../../../../../src/app/dj-controller/dj-controller.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.main-ctrl {\n  -ms-flex-preferred-size: 150px;\n      flex-basis: 150px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 20px 10px;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (max-width: 992px) {\n    .main-ctrl {\n      -ms-flex-preferred-size: 100%;\n          flex-basis: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dj-controller/dj-controller.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjControllerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DjControllerComponent = class DjControllerComponent {
    constructor(playlistsService) {
        this.playlistsService = playlistsService;
        this.mainVolume = 100;
        this.listA = this.playlistsService.listA;
        this.listB = this.playlistsService.listB;
    }
};
DjControllerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dj-controller',
        template: __webpack_require__("../../../../../src/app/dj-controller/dj-controller.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dj-controller/dj-controller.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_playlists_service__["a" /* PlaylistsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_playlists_service__["a" /* PlaylistsService */]) === "function" && _a || Object])
], DjControllerComponent);

var _a;
//# sourceMappingURL=dj-controller.component.js.map

/***/ }),

/***/ "../../../../../src/app/dj-controller/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"player\">\n  <h2 class=\"player__title\">\n    {{title}}\n  </h2>\n  <ul class=\"player__song-list song-list\">\n    <li class=\"song-list__song\"\n        *ngFor=\"let song of list; let i = index\"\n        (click)=\"playTrack(i)\"\n        [class.active-song]=\"i === activeIndex\">\n\n      <span>{{i + 1}}. </span>\n      <span>{{song.file.name}}</span>\n    </li>\n  </ul>\n  <md-slider *ngIf=\"song\" min=\"0\" [max]=\"song.duration\"\n              step=\"1\" [value]=\"curTime\" \n              (change)=\"onTimeChange($event)\"\n              class=\"player__seek\"\n              color=\"primary\"></md-slider>\n\n  <div class=\"player__ctrl\" *ngIf=\"song\">\n    <button  (click)=\"replay()\" md-mini-fab><md-icon>replay</md-icon></button>\n    <button (click)=\"playTrack(activeIndex - 1)\" md-mini-fab><md-icon>skip_previous</md-icon></button>\n    <button *ngIf=\"song.paused\" (click)=\"start()\" md-fab><md-icon>play_arrow</md-icon></button>\n    <button *ngIf=\"!song.paused\" (click)=\"pause()\" md-fab><md-icon>pause</md-icon></button>\n    <button (click)=\"playTrack(activeIndex + 1)\" md-mini-fab><md-icon>skip_next</md-icon></button>\n    <md-slider min=\"0\" max=\"100\" step=\"1\" [value]=\"songVolume\" (change)=\"onVolumeChange($event)\" thumbLabel tickInterval=\"1\"></md-slider>\n    <div class=\"speed-ctrl\">\n      <span class=\"speed-ctrl__btn material-icons\" (click)=\"setSpeed(true)\">keyboard_arrow_up</span>\n      <span class=\"speed-ctrl__value\">{{speed | number : '1.1-2'}}</span>\n      <span class=\"speed-ctrl__btn material-icons\" (click)=\"setSpeed(false)\">keyboard_arrow_down</span>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dj-controller/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100%;\n  -ms-flex-preferred-size: 40%;\n      flex-basis: 40%;\n  margin: 10px 5px; }\n  @media (max-width: 992px) {\n    :host {\n      -ms-flex-preferred-size: 90%;\n          flex-basis: 90%; } }\n\n.player {\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 0;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .player__title {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 12px;\n    margin: 0;\n    text-align: center;\n    font-size: 20px;\n    color: #212121; }\n  .player__song-list {\n    padding-left: 20px; }\n  .player__seek {\n    margin-top: auto; }\n  .player__ctrl {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 5px 10px 5px;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n\n.song-list {\n  list-style: none;\n  padding: 0; }\n  .song-list__song {\n    padding: 10px 15px;\n    cursor: pointer; }\n    .song-list__song:hover {\n      background-color: #F06292;\n      color: white; }\n\n.speed-ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .speed-ctrl__value {\n    margin: 3px 0; }\n  .speed-ctrl__btn {\n    border-radius: 50%;\n    background-color: #ffd740;\n    cursor: pointer; }\n\n.active-song {\n  color: white;\n  background-color: #F06292; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dj-controller/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PlayerComponent = class PlayerComponent {
    constructor() {
        this.activeIndex = 0;
        this.songVolume = 100;
        this.curTime = 0;
        this.speed = 1.0;
    }
    ngOnInit() {
        if (this.list.length) {
            this.initAudio(this.activeIndex);
        }
    }
    ngOnChanges(changes) {
        if (changes.mainVolume) {
            this.onMainVolumeChange(changes.mainVolume.currentValue);
        }
    }
    ngOnDestroy() {
        this.pause();
    }
    initAudio(index) {
        this.song = new Audio(this.list[index].url);
        this.song.addEventListener('timeupdate', () => {
            this.curTime = parseInt(this.song.currentTime, 10);
        });
        this.song.addEventListener('ended', () => {
            this.playTrack(this.activeIndex + 1);
        });
    }
    start() {
        if (this.song) {
            this.song.play();
        }
    }
    replay() {
        this.song.currentTime = 0;
    }
    stop() {
        this.pause();
        this.song.currentTime = 0;
    }
    pause() {
        if (this.song) {
            this.song.pause();
        }
    }
    setSpeed(up) {
        if (this.speed < 3 && up) {
            this.speed += 0.1;
            this.song.playbackRate += 0.1;
        }
        if (this.speed > 0.6 && !up) {
            this.speed -= 0.1;
            this.song.playbackRate -= 0.1;
        }
    }
    playTrack(index) {
        if (index >= 0 && index < this.list.length) {
            this.activeIndex = index;
            this.stop();
            this.initAudio(index);
            this.start();
        }
        else {
            this.stop();
        }
    }
    onVolumeChange(e) {
        const fraction = e.value / 100;
        this.songVolume = e.value;
        this.song.volume = fraction * this.mainVolume / 100;
    }
    onMainVolumeChange(value) {
        if (this.song) {
            this.song.volume = value / 100 * this.songVolume / 100;
        }
    }
    onTimeChange(e) {
        this.song.currentTime = e.value;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Array)
], PlayerComponent.prototype, "list", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], PlayerComponent.prototype, "mainVolume", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], PlayerComponent.prototype, "title", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/dj-controller/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dj-controller/player/player.component.scss")]
    })
], PlayerComponent);

//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/playlists.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PlaylistsService = class PlaylistsService {
    constructor() {
        this.playlistA = [];
        this.playlistB = [];
    }
    get listA() {
        return this.clone('A');
    }
    get listB() {
        return this.clone('B');
    }
    addSong(file, listMark) {
        this['playlist' + listMark].push({
            file: file,
            url: window.URL.createObjectURL(file)
        });
    }
    deleteSong(index, listMark) {
        window.URL.revokeObjectURL(this['playlist' + listMark][index].url);
        this['playlist' + listMark].splice(index, 1);
    }
    clone(listMark) {
        return this['playlist' + listMark].slice();
    }
};
PlaylistsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PlaylistsService);

//# sourceMappingURL=playlists.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/route-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let RouteGuard = class RouteGuard {
    constructor(playlistsService, router) {
        this.playlistsService = playlistsService;
        this.router = router;
    }
    canActivate(route) {
        if (this.playlistsService.listA.length || this.playlistsService.listB.length) {
            return true;
        }
        else {
            this.router.navigate(['./upload']);
            return false;
        }
    }
};
RouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__playlists_service__["a" /* PlaylistsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlists_service__["a" /* PlaylistsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RouteGuard);

var _a, _b;
//# sourceMappingURL=route-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/uploader/uploader.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"playlist\">\n  <h2 class=\"playlist__title\">\n    Playlist A\n  </h2>\n  <form class=\"files-form\">\n    <label for=\"fileA\" class=\"files-form__label\">\n      <i class=\"material-icons\">file_upload</i>\n      Choose files\n    </label>\n    <input class=\"files-form__input\" id=\"fileA\" name=\"fileA\" type=\"file\" (change)=\"onChange($event, 'A')\" multiple accept=\"audio/*\" />\n  </form>\n  <ol>\n    <li *ngFor=\"let song of listA; let i = index\" class=\"file\">\n     <span class=\"file__name\">{{song.file.name}}</span>\n      <span class=\"file__del-btn material-icons\" (click)=\"deleteSong(i, 'A')\">close</span>\n    </li>\n  </ol>\n</section>\n\n<section class=\"playlist\">\n  <h2 class=\"playlist__title\">\n    Playlist B\n  </h2>\n  <form class=\"files-form\">\n    <label for=\"fileB\" class=\"files-form__label\">\n      <i class=\"material-icons\">file_upload</i>\n      Choose files\n    </label>\n    <input class=\"files-form__input\" id=\"fileB\" name=\"fileB\" type=\"file\" (change)=\"onChange($event, 'B')\" multiple accept=\"audio/*\" />\n  </form>\n  <ol>\n    <li *ngFor=\"let song of listB; let i = index\" class=\"file\">\n      <span class=\"file__name\">{{song.file.name}}</span>\n      <span class=\"file__del-btn material-icons\" (click)=\"deleteSong(i, 'B')\">close</span>\n    </li>\n  </ol>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/uploader/uploader.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.playlist {\n  -ms-flex-preferred-size: 45%;\n      flex-basis: 45%;\n  min-width: 300px;\n  box-sizing: border-box;\n  margin: 10px;\n  padding: 12px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .playlist__title {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 12px;\n    margin: 0;\n    text-align: center;\n    font-size: 20px;\n    color: #212121; }\n\n.files-form {\n  text-align: center;\n  margin: 10px 0; }\n  .files-form__input {\n    width: 0.1px;\n    height: 0.1px;\n    opacity: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: -1; }\n    .files-form__input:focus {\n      outline: 1px dotted white;\n      outline: -webkit-focus-ring-color auto 5px; }\n  .files-form__label {\n    display: inline-block;\n    cursor: pointer;\n    padding: 0px 10px;\n    color: #f2f2f2;\n    background-color: #F06292;\n    line-height: 36px;\n    font-size: 14px;\n    border-radius: 4px; }\n    .files-form__label:hover, .files-form__label:focus {\n      background-color: #E91E63; }\n    .files-form__label i {\n      vertical-align: middle;\n      margin-right: 5px;\n      margin-left: 10px; }\n\n.file {\n  padding: 5px 0; }\n  .file__del-btn {\n    font-size: 20px;\n    vertical-align: sub;\n    cursor: pointer;\n    border-radius: 50%; }\n    .file__del-btn:hover, .file__del-btn:focus {\n      background-color: #E0E0E0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/uploader/uploader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_playlists_service__ = __webpack_require__("../../../../../src/app/services/playlists.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let UploaderComponent = class UploaderComponent {
    constructor(playlistsService) {
        this.playlistsService = playlistsService;
        this.listA = [];
        this.listB = [];
    }
    ngOnInit() {
        this.listA = this.playlistsService.listA;
        this.listB = this.playlistsService.listB;
    }
    onChange(event, mark) {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(event.target.files, (file) => {
            if (file.type.indexOf('audio') !== -1) {
                this.playlistsService.addSong(file, mark);
            }
        });
        this['list' + mark] = this.playlistsService['list' + mark];
    }
    deleteSong(i, mark) {
        this.playlistsService.deleteSong(i, mark);
        this['list' + mark] = this.playlistsService['list' + mark];
    }
};
UploaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-uploader',
        template: __webpack_require__("../../../../../src/app/uploader/uploader.component.html"),
        styles: [__webpack_require__("../../../../../src/app/uploader/uploader.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_playlists_service__["a" /* PlaylistsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_playlists_service__["a" /* PlaylistsService */]) === "function" && _a || Object])
], UploaderComponent);

var _a;
//# sourceMappingURL=uploader.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map