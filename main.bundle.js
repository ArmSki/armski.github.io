webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_page_events_page_component__ = __webpack_require__("../../../../../src/app/events-page/events-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tours_page_tours_page_component__ = __webpack_require__("../../../../../src/app/tours-page/tours-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_page_gallery_page_component__ = __webpack_require__("../../../../../src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videos_page_videos_page_component__ = __webpack_require__("../../../../../src/app/videos-page/videos-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_page_blog_page_component__ = __webpack_require__("../../../../../src/app/blog-page/blog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__armenia_page_armenia_page_component__ = __webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_2__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_4__events_page_events_page_component__["a" /* EventsPageComponent */] },
    { path: 'tours', component: __WEBPACK_IMPORTED_MODULE_5__tours_page_tours_page_component__["a" /* ToursPageComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_6__gallery_page_gallery_page_component__["a" /* GalleryPageComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_7__videos_page_videos_page_component__["a" /* VideosPageComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_8__blog_page_blog_page_component__["a" /* BlogPageComponent */] },
    { path: 'armenia', component: __WEBPACK_IMPORTED_MODULE_9__armenia_page_armenia_page_component__["a" /* ArmeniaPageComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_10__contact_us_contact_us_component__["a" /* ContactUsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    background-color: white;\r\n    height: 1200px;\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  /* animaion of nav bar color changing */\r\n  \r\n  .Anime{\r\n    background-color: transparent;\r\n  \r\n    -webkit-animation-name: example;\r\n    animation-name: example;\r\n    animation-duration: 0.1s;\r\n    -webkit-animation-duration: 0.1s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n  }\r\n  \r\n  @keyframes example {\r\n      10% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.1)),to(rgba(132, 176, 215, 0.1)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.1),rgba(132, 176, 215, 0.1));}\r\n      20% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.2)),to(rgba(132, 176, 215, 0.2)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.2),rgba(132, 176, 215, 0.2));}\r\n      30% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.3)),to(rgba(132, 176, 215, 0.3)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.3),rgba(132, 176, 215, 0.3));}\r\n      40% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.4)),to(rgba(132, 176, 215, 0.4)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.4),rgba(132, 176, 215, 0.4));}\r\n      50% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.5)),to(rgba(132, 176, 215, 0.5)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.5),rgba(132, 176, 215, 0.5));}\r\n      60% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.6)),to(rgba(132, 176, 215, 0.6)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.6),rgba(132, 176, 215, 0.6));}\r\n      70% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.7)),to(rgba(132, 176, 215, 0.7)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.7),rgba(132, 176, 215, 0.7));}\r\n      80% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.8)),to(rgba(132, 176, 215, 0.8)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.8),rgba(132, 176, 215, 0.8));}\r\n      90% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.9)),to(rgba(132, 176, 215, 0.9)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.9),rgba(132, 176, 215, 0.9));}\r\n      100% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 1)),to(rgba(132, 176, 215, 1)));background: linear-gradient(to bottom,rgba(124, 171, 218, 1),rgba(132, 176, 215, 1));}\r\n    }\r\n  \r\n  @-webkit-keyframes example {\r\n    10% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.1)),to(rgba(51, 119, 162, 0.1)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.1),rgba(51, 119, 162, 0.1));}\r\n    20% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.2)),to(rgba(51, 119, 162, 0.2)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.2),rgba(51, 119, 162, 0.2));}\r\n    30% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.3)),to(rgba(51, 119, 162, 0.3)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.3),rgba(51, 119, 162, 0.3));}\r\n    40% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.4)),to(rgba(51, 119, 162, 0.4)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.4),rgba(51, 119, 162, 0.4));}\r\n    50% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.5)),to(rgba(51, 119, 162, 0.5)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.5),rgba(51, 119, 162, 0.5));}\r\n    60% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.6)),to(rgba(51, 119, 162, 0.6)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.6),rgba(51, 119, 162, 0.6));}\r\n    70% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.7)),to(rgba(51, 119, 162, 0.7)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.7),rgba(51, 119, 162, 0.7));}\r\n    80% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.8)),to(rgba(51, 119, 162, 0.8)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.8),rgba(51, 119, 162, 0.8));}\r\n    90% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.9)),to(rgba(51, 119, 162, 0.9)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.9),rgba(51, 119, 162, 0.9));}\r\n    100% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 1)),to(rgba(51, 119, 162, 1)));background: linear-gradient(to bottom,rgba(26, 102, 149, 1),rgba(51, 119, 162, 1));}\r\n  }\r\n  \r\n  nav {\r\n    width: 100%;\r\n    background: transparent;\r\n  }\r\n  \r\n  nav ul {\r\n    width: 80%;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n  }\r\n  \r\n  nav ul li {\r\n    list-style: none;\r\n    display: inline-block;\r\n  }\r\n  \r\n  nav ul li a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    font-style: italic;\r\n    line-height: normal;\r\n  }\r\n  \r\n  nav ul li a:hover {\r\n    color: rgb(51, 67, 75);\r\n  }\r\n  \r\n  /* background change */\r\n  \r\n  *{\r\n    padding: 0px;\r\n    margin:0px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n  }\r\n  \r\n  .navbar{\r\n    width: 100%;\r\n    padding: 20px;\r\n    position: fixed;\r\n    top: 0px;\r\n    text-align: right;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n  }\r\n  \r\n  .navbar ul li{\r\n    list-style-type: none;\r\n    padding: 5px 10px;\r\n    color: white;\r\n    font-size: 24px;\r\n    font-family: sans-serif;\r\n    cursor: pointer;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n  }\r\n  \r\n  .mainWpaper {\r\n    display: block;\r\n    width: 100%;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    left: 100px;\r\n  }\r\n  \r\n  .logo {\r\n      text-align: left !important;\r\n      left: 100px;\r\n  }\r\n  \r\n  .active {\r\n  color: rgb(51, 67, 75) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width: 100%;\" class=\"container\">\n    <div class=\"header\">\n        <nav [ngClass]=\"{'Anime': onWindowScroll()}\" class=\"navbar\" id=\"nav\">\n        <div class=\"logo\">\n            <a href=\"#\">\n            <img style=\"max-height: 40px;\" src=\"../../assets/logo.png\" alt=\"\">\n            </a>\n        </div>\n        <ul>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\"\n                >Home</a></li>\n            <li><a \n                 routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/armenia'\"\n                >Armenia</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/tours'\"\n               >Tours</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/gallery'\"\n                >Gallery</a></li>\n            <li><a \n                 routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/videos'\"\n                >Videos</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/events'\"\n                >Events</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/blog'\"\n                >Blog</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/about-us'\"\n                >About Us</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/contact-us'\"\n                >Contact Us</a></li>\n        </ul>\n        </nav>\n  </div>\n  <div class=\"mainWpaper\">\n      <img class=\"mainWpaper\" src=\"../../assets/img0.png\" alt=\"\">\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-xs-10 col-xs-offset-1\">\n          <router-outlet></router-outlet>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.onWindowScroll = function () {
        return document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_about_us_component__ = __webpack_require__("../../../../../src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_page_events_page_component__ = __webpack_require__("../../../../../src/app/events-page/events-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tours_page_tours_page_component__ = __webpack_require__("../../../../../src/app/tours-page/tours-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_page_gallery_page_component__ = __webpack_require__("../../../../../src/app/gallery-page/gallery-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__videos_page_videos_page_component__ = __webpack_require__("../../../../../src/app/videos-page/videos-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blog_page_blog_page_component__ = __webpack_require__("../../../../../src/app/blog-page/blog-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__armenia_page_armenia_page_component__ = __webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__events_page_events_page_component__["a" /* EventsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_7__tours_page_tours_page_component__["a" /* ToursPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_page_gallery_page_component__["a" /* GalleryPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__videos_page_videos_page_component__["a" /* VideosPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__blog_page_blog_page_component__["a" /* BlogPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__armenia_page_armenia_page_component__["a" /* ArmeniaPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__["a" /* ContactUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/armenia-page/armenia-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/armenia-page/armenia-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  armenia-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/armenia-page/armenia-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArmeniaPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPageComponent = /** @class */ (function () {
    function ArmeniaPageComponent() {
    }
    ArmeniaPageComponent.prototype.ngOnInit = function () {
    };
    ArmeniaPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-armenia-page',
            template: __webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPageComponent);
    return ArmeniaPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog-page/blog-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-page/blog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blog-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/blog-page/blog-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPageComponent = /** @class */ (function () {
    function BlogPageComponent() {
    }
    BlogPageComponent.prototype.ngOnInit = function () {
    };
    BlogPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog-page',
            template: __webpack_require__("../../../../../src/app/blog-page/blog-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/blog-page/blog-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPageComponent);
    return BlogPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/events-page/events-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-page/events-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  events-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/events-page/events-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsPageComponent = /** @class */ (function () {
    function EventsPageComponent() {
    }
    EventsPageComponent.prototype.ngOnInit = function () {
    };
    EventsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events-page',
            template: __webpack_require__("../../../../../src/app/events-page/events-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events-page/events-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsPageComponent);
    return EventsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery-page/gallery-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery-page/gallery-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gallery-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/gallery-page/gallery-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
    };
    GalleryPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery-page',
            template: __webpack_require__("../../../../../src/app/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery-page/gallery-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .aboutUs {\r\n    display: inline-block;\r\n    width: 50%;\r\n    text-align: justify;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 18px;\r\n  }\r\n  \r\n  .weatherD {\r\n    width: 50%;\r\n    float: right;\r\n  }\r\n  \r\n  .weatherU {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  \r\n  .aboutFix {\r\n    display: inline-block;\r\n  }\r\n  \r\n  div div ul li {\r\n    display: inline-block;\r\n    width: 22%;\r\n  }\r\n  \r\n  div div ul li a {\r\n    width: 100%;\r\n  }\r\n  \r\n  div div ul li a img {\r\n    width: 100%;\r\n  }\r\n  \r\n  * {\r\n  \r\n    outline: 0.01px black solid;\r\n  }\r\n  \r\n  /* <---------------------- activity-----------------------> */\r\n  \r\n  .activity {\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background-color: azure;\r\n    height: 100px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n  <div class=\"aboutFix aboutUs\">\n      <h2>About US</h2>\n      <p>The Association of Mountain Skiers has been established in 2016.\n        Its purpose is to boost the development of mountain skiing culture in Armenia.\n        The Association seeks to promote and ensure a large influx of people into the mountains of Armenia.\n        The Association's mission is to gather ski lovers,\n        professionals and experts around it to find ways to improve this type of sport in Armenia.\n        The founding members of the Association are Hovhannes Martirosyan as director and\n        Tigran Simonyan as deputy director. Association aims to develop skiing in Armenia,\n        particularly through festivals and competitions. </p>\n  </div>\n  <div class=\"aboutFix weatherD\">\n    <ul class=\"weatherU\">\n      <li><a href=\"#\"><img src=\"../../assets/winter.jpg\" alt=\"Winter\"></a></li>\n      <li><a href=\"#\"><img src=\"../../assets/summer.png\" alt=\"Summer\"></a></li>\n      <li><a href=\"#\"><img src=\"../../assets/spring.png\" alt=\"Spring\"></a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tours-page/tours-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tours-page/tours-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tours-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tours-page/tours-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToursPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPageComponent = /** @class */ (function () {
    function ToursPageComponent() {
    }
    ToursPageComponent.prototype.ngOnInit = function () {
    };
    ToursPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tours-page',
            template: __webpack_require__("../../../../../src/app/tours-page/tours-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tours-page/tours-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPageComponent);
    return ToursPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  videos-page works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/videos-page/videos-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosPageComponent = /** @class */ (function () {
    function VideosPageComponent() {
    }
    VideosPageComponent.prototype.ngOnInit = function () {
    };
    VideosPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-videos-page',
            template: __webpack_require__("../../../../../src/app/videos-page/videos-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/videos-page/videos-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosPageComponent);
    return VideosPageComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map