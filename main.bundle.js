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
exports.push([module.i, ".aboutUs {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: justify;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 18px;\r\n}\r\n\r\n.cont {\r\n    width: 95%;\r\n    margin: 25px 2.5%;\r\n    padding: 10px;\r\n}\r\n\r\n.about {\r\n    width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"about\">\n    <div class=\"aboutFix aboutUs\">\n        <p>Armenian ski mountaineer’s association has been established in 2016,\n          although he has been working as a club for more than 10 years․\n          The Association seeks to promote and ensure a large influx of people into the mountains of Armenia.\n          The Association's mission is to gather ski lovers, professionals and experts around it to find\n          ways to improve this type of sport in Armenia. The founding member of the Association is\n          Hovhannes Martirosyan. The Armenian ski mountaineers’ association (ASMA) is a unique,\n          skillful association, which successfully participated in different state projects implemented by the\n          State Tourism Committee of the Ministry of Economic Development and Investments of the\n          Republic of Armenia. <br/><br/>\n          \n          The implemented projects concern the development of the ski touring in Armenia and \n          mong them is GPS trails development. <br/><br/>\n          \n          The Ministry of Sport and Youth Affairs of RA, represented by Hrachya Rostomyan, the Minister of the Sport and Youth Affairs of RA, warrants the Armenian ski mountaineers’ association (ASMA), as the only institution of ski mountaineers in Armenia, to become a full member of the International Ski Mountaineering Federation (ISMF). <br/><br/>\n          The Ministry of Sport and Youth Affairs of RA appreciates the commitment of the ASMA, that developed the ski touring in Armenia. <br/><br/>\n          The Ministry of Sport and Youth Affairs of RA confirms that the Armenia ski mountaineers’ association (ASMA) is the only institution of ski mountaineers authorized to develop GPS trails in Armenia.\n        </p>\n    </div>\n  </div>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
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
exports.push([module.i, "body {\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* animaion of nav bar color changing */\r\n\r\n@keyframes example {\r\n  10% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.1)),to(rgba(132, 176, 215, 0.1)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.1),rgba(132, 176, 215, 0.1));}\r\n  20% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.2)),to(rgba(132, 176, 215, 0.2)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.2),rgba(132, 176, 215, 0.2));}\r\n  30% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.3)),to(rgba(132, 176, 215, 0.3)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.3),rgba(132, 176, 215, 0.3));}\r\n  40% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.4)),to(rgba(132, 176, 215, 0.4)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.4),rgba(132, 176, 215, 0.4));}\r\n  50% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.5)),to(rgba(132, 176, 215, 0.5)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.5),rgba(132, 176, 215, 0.5));}\r\n  60% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.6)),to(rgba(132, 176, 215, 0.6)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.6),rgba(132, 176, 215, 0.6));}\r\n  70% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.7)),to(rgba(132, 176, 215, 0.7)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.7),rgba(132, 176, 215, 0.7));}\r\n  80% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.8)),to(rgba(132, 176, 215, 0.8)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.8),rgba(132, 176, 215, 0.8));}\r\n  90% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 0.9)),to(rgba(132, 176, 215, 0.9)));background: linear-gradient(to bottom,rgba(124, 171, 218, 0.9),rgba(132, 176, 215, 0.9));}\r\n  100% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 1)),to(rgba(132, 176, 215, 1)));background: linear-gradient(to bottom,rgba(124, 171, 218, 1),rgba(132, 176, 215, 1));}\r\n}\r\n\r\n@-webkit-keyframes example {\r\n  10% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.1)),to(rgba(51, 119, 162, 0.1)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.1),rgba(51, 119, 162, 0.1));}\r\n  20% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.2)),to(rgba(51, 119, 162, 0.2)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.2),rgba(51, 119, 162, 0.2));}\r\n  30% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.3)),to(rgba(51, 119, 162, 0.3)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.3),rgba(51, 119, 162, 0.3));}\r\n  40% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.4)),to(rgba(51, 119, 162, 0.4)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.4),rgba(51, 119, 162, 0.4));}\r\n  50% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.5)),to(rgba(51, 119, 162, 0.5)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.5),rgba(51, 119, 162, 0.5));}\r\n  60% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.6)),to(rgba(51, 119, 162, 0.6)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.6),rgba(51, 119, 162, 0.6));}\r\n  70% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.7)),to(rgba(51, 119, 162, 0.7)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.7),rgba(51, 119, 162, 0.7));}\r\n  80% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.8)),to(rgba(51, 119, 162, 0.8)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.8),rgba(51, 119, 162, 0.8));}\r\n  90% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 0.9)),to(rgba(51, 119, 162, 0.9)));background: linear-gradient(to bottom,rgba(26, 102, 149, 0.9),rgba(51, 119, 162, 0.9));}\r\n  100% {background: -webkit-gradient(linear,left top, left bottom,from(rgba(26, 102, 149, 1)),to(rgba(51, 119, 162, 1)));background: linear-gradient(to bottom,rgba(26, 102, 149, 1),rgba(51, 119, 162, 1));}\r\n}\r\n\r\n/* Navigation bar */\r\n\r\nnav {\r\n  position: fixed;\r\n  width: 100%;\r\n  background: transparent;\r\n  width: 100%;\r\n  padding: 20px;\r\n  top: 0px;\r\n  text-align: right;\r\n}\r\n\r\nnav ul li {\r\n  list-style: none;\r\n}\r\n\r\nnav ul li a {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-family: Raleway,sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  font-style: italic;\r\n  line-height: normal;\r\n}\r\n\r\nnav ul li a:hover {\r\n  color: rgb(51, 67, 75);\r\n}\r\n\r\n.navbar ul li{\r\n  list-style-type: none;\r\n  padding: 5px 10px;\r\n  color: white;\r\n  font-size: 24px;\r\n  font-family: sans-serif;\r\n  cursor: pointer;\r\n  -webkit-transition: .5s;\r\n  transition: .5s;\r\n}\r\n\r\n.mainWpaper {\r\n  display: block;\r\n  width: 100%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.logo {\r\n  text-align: left !important;\r\n  left: 100px;\r\n}\r\n\r\n.logo.mobile {\r\n  width: 100px;\r\n  float: left;\r\n}\r\n\r\n.active {\r\n  color: rgb(51, 67, 75) !important;\r\n  display: block;\r\n}\r\n\r\n.header {\r\n  z-index: 100000 !important;\r\n}\r\n\r\n/* Responsive navBar------------------------------------------------------- */\r\n\r\n.Anime{\r\n  position: fixed;\r\n  -webkit-animation-name: example;\r\n  animation-name: example;\r\n  animation-duration: 0.1s;\r\n  -webkit-animation-duration: 0.1s;\r\n  animation-fill-mode: forwards;\r\n  -webkit-animation-fill-mode: forwards;\r\n}\r\n\r\n@media only screen and ( min-width: 699px) {\r\n  \r\n\r\n  nav ul {\r\n    width: 80%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  nav ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .desktop.hide {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and ( max-width: 698px) {\r\n  .mobile.hide {\r\n    display: none;\r\n  }\r\n\r\n  .logo.mobile.show {\r\n    display: block;\r\n    width: 100px;\r\n    float: left;\r\n  }\r\n\r\n  nav ul {\r\n    background: -webkit-gradient(linear,left top, left bottom,from(rgba(124, 171, 218, 1)),to(rgba(132, 176, 215, 1)));\r\n    background: linear-gradient(to bottom,rgba(124, 171, 218, 1),rgba(132, 176, 215, 1));\r\n    width: 100%;\r\n    margin: 0px;\r\n    padding: 0;\r\n  }\r\n\r\n  nav ul li {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n\r\n  header {\r\n    margin: 0px;\r\n    padding: 0px;\r\n  }\r\n\r\n  nav {\r\n    padding: 0px;\r\n    margin: 0px;\r\n    top: 60px;\r\n  }\r\n\r\n  .Anime{\r\n    background-color: transparent;\r\n    position: fixed;\r\n  \r\n    -webkit-animation-name: example;\r\n    animation-name: example;\r\n    animation-duration: 0.1s;\r\n    -webkit-animation-duration: 0.1s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n  }\r\n}\r\n\r\n.but {\r\n  position: fixed;\r\n  text-align: right;\r\n  border-radius: 0px;\r\n  border: 0px;\r\n  padding: 15px;\r\n  width: 100%;\r\n  height: 60px;\r\n  font-size: 26px;\r\n  color: white;\r\n  background: transparent;\r\n  outline: none !important;\r\n}\r\n\r\nbutton, nav {\r\n  z-index: 100000;\r\n}\r\n\r\n.show {\r\n  display: block !important;\r\n}\r\n\r\nbutton.but {\r\n  margin: 0px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n\n<header class=\"header\">\n    <button [ngClass]=\"{'Anime': onWindowScroll() || !menuShow()}\" class=\"but desktop hide\" (click)=\"openMainMenu()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></button>\n    <nav [ngClass]=\"{'Anime': onWindowScroll()}\" class=\"navbar\" id=\"nav\">\n        <div class=\"logo mobile hide\">\n            <a href=\"http://armski.am\">\n            <img style=\"max-height: 40px;\" src=\"../../assets/logo.png\" alt=\"\">\n            </a>\n        </div>\n        <ul [ngClass]=\"{'show': !menuShow()}\" class=\"mobile hide\">\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\"\n                >Home</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/armenia'\"\n                >Armenia</a></li>\n            <!-- <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/tours'\"\n                >Tours</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/gallery'\"\n                >Gallery</a></li> -->\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/videos'\"\n                >Videos</a></li>\n            <!-- <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/events'\"\n                >Events</a></li> -->\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/blog'\"\n                >Blog</a></li>\n            <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/about-us'\"\n                >About Us</a></li>\n            <!-- <li><a \n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/contact-us'\"\n                >Contact Us</a></li> -->\n        </ul>\n    </nav>\n</header>\n<div class=\"mainWpaper\">\n    <img class=\"mainWpaper\" src=\"../../assets/img0.png\" alt=\"\">\n</div>\n\n<main>\n    <router-outlet></router-outlet>\n</main>\n\n<footer>\n    <app-footer></app-footer>\n</footer>\n"

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
        this.menuOpened = true;
        // this.defaulValue = this.defaulValue + 1;
        // return this.defaulValue % 2 === 0 ? true : false;
    }
    AppComponent.prototype.onWindowScroll = function () {
        return document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? true : false;
    };
    AppComponent.prototype.openMainMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    AppComponent.prototype.menuShow = function () {
        return this.menuOpened;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__infinite_carousel_infinite_carousel_component__ = __webpack_require__("../../../../../src/app/infinite-carousel/infinite-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng_select__ = __webpack_require__("../../../../ng-select/ng-select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ui_carousel__ = __webpack_require__("../../../../ui-carousel/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ui_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ui_carousel__);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__infinite_carousel_infinite_carousel_component__["a" /* InfiniteCarouselComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_16_ui_carousel__["UICarouselModule"],
                __WEBPACK_IMPORTED_MODULE_15_ng_select__["a" /* SelectModule */]
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
exports.push([module.i, "@media only screen and (min-width: 899px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        -webkit-transition: 0.3s;\r\n        transition: 0.3s;\r\n        width: 90%;\r\n        position: relative;\r\n        margin: 25px 5%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        padding: 5px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 30%;\r\n        display: block;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        padding: 0 10px;\r\n        float: right;\r\n        width: 70% !important;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 898px) {\r\n\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-family: Raleway,sans-serif;\r\n  color: #424242;\r\n}\r\n\r\na:hover {\r\n    color: #9c9c9c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/armenia-page/armenia-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/01.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>North Summit of Mount Aragats</b></h4></a>\n      <p> The North Summit of Mount Aragats is in the Aragatsotn province of Armenia.\n        It is the highest summit (4,090m) of Aragats. The Mountain has a huge crater,\n        with a 400m depth and 3km diameter, and the ruins of its decayed walls form the four summits of Mount Aragats.\n        The crater is open from the southeast and is in harmony with its’ surroundings.\n        Geghadzor is the nearest residence, and is where the ski trail begins.\n        If you have decided to take this trail, we recommend booking accommodation for\n        an overnight stay in one of the guest houses in the village.\n        You can also ask for a car (Jeep or Vilis) from the farmers and start the ski trail\n        early in the morning. Usually, the trail on the North Summit of Aragats\n        takes 8-10 hours (climbing up and down). You need to take a car (Jeep) and begin the trail with an \n        expectation of a light, long descent, soft snow and marvelous sights.\n        The territory is mostly covered with an abundance of powdered snow. </p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/02.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>East Summit of Mount Aragats</b></h4></a>\n      <p>To start skiing on the slopes of the East Summit of Mount Aragats, you need to set off to the Aragatsotn province. The nearest settlement is the village of Aragats (1,970m): this is where the skiing begins. The piste runs over a series of small hills that overlook deep gorges on the right hand side and stretch up to ‘merge’ into the Eastern Summit. When following this ski run, you will have reached the surroundings of the Aragats Summit. The Eastern Summit is the third highest peak of Mount Aragats. </p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/03.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Byurakan</b></h4></a>\n      <p>The South Summit of Mount Aragats is in the Aragatsotn province of Armenia. It is the lowest summit (3,887. 8m) of Aragats. We recommend taking the trail in spring (March, April, May) as the difficulties of reaching the South Summit of Aragats are less during this time of the year. You should get to the Physics Institute (the ‘Aragats’ Scientific Station) on the slopes of Aragats by car, and then start walking uphill using the marked trail. The snow is partially melted at this time of the year, so you can see Stone Lake (Kari Lich), one of the crystal-clear mountain lakes of Armenia.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/04.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>West Summit of Mount Aragats</b></h4></a>\n      <p> West Summit of Mount AragatsTo get to the west summit of the Mount Aragats ski trail, you should first reach Geghadzor village, in the province of Aragatsotn. In case of any adverse weather, we do not recommend this trail, because of the possible difficulties of traveling through the high mountains. It is only possible to bypass these obstacles in clear weather, the ski trail is rather complicated and possibly dangerous. You should climb up to the vicinity of the west summit (3,650m) using the marked trail. The trail is long, with no stops, and the area is usually covered with snow powder. The West Summit is the second highest summit (3,995.3m) of Mount Aragats.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/05.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Bujakan Mountain</b></h4></a>\n      <p>This ski trail is located in the Bujakan mountains, 5.5km northwest of the village of Bujakan, in Kotayk province. The journey will start as a walk down a marked trail, from the Surb Astvatsatsin Church in Yeghipatrush village, of Aragatsotn province. Numerous skiers visiting Armenia have traversed this trail and were very pleased with the quality of the snow.Heading for Bujakan Mountain from Yerevan or vice versa, you can visit: The Surb Astvatsatsin Church (Holy Mother of God Church) in Yeghipatrush village The Church was constructed between the 10th and 13th centuries. There are several khachkars (cross-stones) from the 7th -8th centuries found near the church. During construction, tombs from the 3-2nd millennium BC, were found and opened, near the village of Yeghipatrush, on both sides of the gorge.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/06.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Hatis</b></h4></a>\n      <p>Hatis is a volcanic massif in the Kotayk province of Armenia.  The mountain has a conical structure indented with numerous gorges, which can be seen in winter as well. There are a lot of rocky formations in the higher spots of the Mountain. The ski trail begins in the village of Hatis, on the northern slopes of the mountain. You can enjoy the ski trail at Mount Hatis from January to April. The climate is mild here due to the geographical location of the trail. Most of the winter is sunny, and the sky is blue. Yerevan is 30km away from the trail. Please, check the weather conditions before attempting the ski trail. The best time for skiing downhill is midday, as the snow is frozen during morning and evening hours.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/07.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>North Summit of Mount Ara</b></h4></a>\n      <p>Mount Ara, with its sliced, steep, timbered slopes, is located on the borders of the Kotayk and Aragatsotn provinces, 33km north of Yerevan. Besides housing a skiing, biking and hiking trail, the Mountain is also a launching place for paragliding pilots. The ski trail begins on the north of the mountain, at the edge of a summer resort. The road leading to the summer resort may be covered with heavy snow in January and February. In this case, you should start skiing from Yernjatap village to reach the resort, which will add 2km to the route.The snow is mostly solid here, but the surface is always melted a few centimeters, which is very favorable for skiing. The road runs through pine and oak forests, which make for a beautiful combination in the winter. From the top of Mount Ara, you can view the four highest mountains of Armenia: Aragats, Azhdahak, Teghenis 1, and Hatis. You can return using the same trail.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/08.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>South North Summit of Mount Ara</b></h4></a>\n      <p>Mount Ara is located on the borders of the Kotayk and Aragatsotn provinces. The mountain is 2,577m high and 40km away from Yerevan. The mountain takes its name after Ara the Beautiful (Ara Geghetsik), an Armenian mythological God and king. The Mountain is also a jump off point for paragliding pilots. The ski trail begins at a red apple orchard. This is considered a traditional trail, as it is used by both skiers and paragliding pilots. In winter, Mt. Ara is a great tourist destination, as the weather here is clear and sunny, and the snow is soft and silky.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/09.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>South – West Summit of the Mount Teghenis</b></h4></a>\n      <p>Teghenis 1 Mountain is located on the border of the Aragatsotn and Kotayk provinces. To start skiing on the slopes of the mountain, you need to set off to Shoghakn village, which is covered by 1-2 meters of snow in January and February. The skiing trail begins at the edge of the village and leads up to the nearby hill. The slopes of Mount Teghenis 1 are covered with birches, firs, and Siberian pine trees. From the top of the Mountain, you can admire the beautiful mountains of the Armenian plateau: the Pambak Mountain in the north, Mount Ara in the south, the Geghama Mountains in the east, Aragats in the West, and Ararat in the southwest. An aeration center operates on the top of Mount Teghenis 1, and is inhabited throughout the year.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/10.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Mount Teghenis from the East – Aghveran National Park</b></h4></a>\n      <p>The trail is covered with soft snow, it is safe and will fill you with pleasant feelings. Our team has traversed this trail several times during the winter, and we suggest several trails from the different sides of this mountain. All of them are perfect, with stunning natural views from the top.The pagan temple of Garni is situated in the village of Garni, in Kotayk province, on the right bank of the Azat River. The temple was founded by Patriarch Hayk’s great grandson, Gegham, and was named Garni in honor of his grandson. Garni was also known as the Temple of the Sun, as it was dedicated to the God of the Sun, Mihr. King Trdat the First, on a high triangular cape in 76 BC, constructed the fortress as a Hellenistic building. Garni fortress was damaged several times over the centuries. However, the kings of Armenia reconstructed the fortress using it as a house, a place for military exercises and an Episcopal residence.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/11.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Silk Road - Orbelian's Caravanserai - Vardenyats Mountain Pass</b></h4></a>\n      <p>This trail is found in the province of Gegharkunik, on the Vardenyats Mountain Pass road. From this trail one can see the ravishingly beautiful winter scenes of Armenia’s highlands. The highest point of the Mountain Pass is 2,410m. One can reach Orbelian’s Caravanserai (2,040m) by car, then descending down the bend, one will reach the start of the ski trail, because skiing up would take much longer. The trail begins at a height of 2,300m, enjoy the quality snow while descending down to the marked trail. While skiing you will be able to see the white peaks of Armenian mountains and the image of Mount Ararat in the distance.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/12.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Vorotan Mountain Pass</b></h4></a>\n      <p>This ski trail is found in the south of Armenia, in the Vayots Dzor province, near the territory known as 'Zanger' ( Bells), in Syunik. The trail begins at the Vorotan Mountain pass (2,344m). The peculiarity of the trail is that the ascent up the mountain is shorter than the descent. The 8km long trail is situated between the villages of Saravan and Gorayk. There are no mountain peaks along the way, just skiing in the Vorotan Mountains with its’ wonderful views.</p>\n    </div>\n  </div>\n</div>"

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

var ArmeniaPageComponent = /** @class */ (function () {
    function ArmeniaPageComponent() {
        this.armeniaPageItems = [
            {
                name: 'North Summit of Mount Aragats',
                description: ''
            }
        ];
    }
    ArmeniaPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-armenia-page',
            template: __webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/armenia-page/armenia-page.component.css")]
        })
    ], ArmeniaPageComponent);
    return ArmeniaPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/blog-page/blog-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 899px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        -webkit-transition: 0.3s;\r\n        transition: 0.3s;\r\n        width: 80%;\r\n        position: relative;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        margin: 15px 10%;\r\n        padding: 10px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 45%;\r\n        display: block;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        float: right;\r\n        padding: 0 10px;\r\n        width: 55% !important;\r\n        -webkit-box-sizing: border-box;\r\n                box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 898px) {\r\n\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-family: Raleway,sans-serif;\r\n    color: #424242;\r\n}\r\n\r\na:hover {\r\n    color: #9c9c9c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog-page/blog-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/01.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Armenian Currency and Prices</b></h4></a>\n      <p>Whether you are a tourist or in a long or short business trip, it is always useful to have some preliminary idea about the currency of the host country before you visit. In order to understand how much you can spend on products or services in Armenia, or what is the cash value of...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/02.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Walking Route in Yerevan</b></h4></a>\n      <p>First time in Armenia? Wish to explore the city and don’t know where to start? Here is your cheat sheet! Grigor Lusavorich church You can start your tour from Grigor Lusavorich church, which is located in Yervand Kochar street. The church was built by Catholicos Vazgen the...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/03.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>World’s Oldest Shoe Found in Armenia</b></h4></a>\n      <p>One more time in a history world’s attention was driven into the small mountainous country located in Eastern Europe. The reason was the ancient shoe found in one of the villages of Armenia. The shoe, which was found in September 2008 in Areni village, dates back to...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/04.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>7 of the Unique Armenian Traditions</b></h4></a>\n      <p>1.  February 13 – Trndez Trndez is a holiday with pagan origin and was originally dedicated to Mihr or Tyr, the gods of fire and knowledge, respectively. It was connected with sun/fire worship in ancient pre-Christian Armenia, symbolizing the coming of the spring and...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/05.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>4 Wineries of Armenia</b></h4></a>\n      <p>Armenia is a small, landlocked country, located at the southern end of the Eurasian Caucasus. Since Noah’s times the inhabitants of Armenia cultivated wineyards and squizzed the most possible from the land and the fruitage. Among all other achievements Armenians pride...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/06.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>7 most Beautiful Monasteries in Armenia</b></h4></a>\n      <p>Armenia is a home to a complex culture and some of the world’s greatest religious shrines. While planning your trip to Armenia, you will definitely think of including some of the heritages of Armenia’s culture, the bright examples of which are our world famous...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/07.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a href=\"\"><h4><b>Annual Festivals in Armenia</b></h4></a>\n      <p>During last few years Armenia has developed a strategy of outlining its cultural or traditional events and food peculiarities through festivals. Each year a new unique festival is added to the list of existing ones causing creativity and innovations. The interest among locals and...</p>\n    </div>\n  </div>\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-events-page',
            template: __webpack_require__("../../../../../src/app/events-page/events-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/events-page/events-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsPageComponent);
    return EventsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clear {\r\n    clear: both;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    display: block;\r\n}\r\n\r\np.footer-gd {\r\n    color: #908F8F;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}\r\n\r\n.footer-gd a {\r\n    color: #908F8F;\r\n}\r\n\r\n.footer-gd a:hover {\r\n    color: #b6aeae;\r\n    text-decoration: none;\r\n}\r\n\r\n.copy-right-grids {\r\n    padding-left: 2%;\r\n    background: #211E1E;\r\n}\r\n\r\n.footer-grids {\r\n    padding: 2.5em 2.5em;\r\n}\r\n\r\n@media only screen and (min-width: 699px) {\r\n    .footer.one {\r\n        margin: 35px 4%;\r\n        width: 15%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n    }\r\n\r\n    .member {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .member div {\r\n        margin-bottom: 15px;\r\n        max-width: 150px; \r\n    }\r\n\r\n    .member div a img {\r\n        width: 100%;\r\n    }\r\n\r\n    \r\n    .partners div {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .partners div .descrip {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n    .footer.two {\r\n        width: 43%;\r\n        margin: 35px 0%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer.three {\r\n        width: 26%;\r\n        margin: 4%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer.three div {\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .copy-left {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 698px) {\r\n    .footer.one {\r\n        width: 96%;\r\n        margin: 2% !important;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .footer.one div ul li {\r\n        width: 100%;\r\n        text-align: center\r\n    }\r\n\r\n    .footer.one div {\r\n        width: 100%;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n\r\n    .member {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n    }\r\n\r\n    .member div {\r\n        margin-bottom: 15px;\r\n        max-width: 150px; \r\n    }\r\n\r\n    .member div a img {\r\n        width: 100%;\r\n    }\r\n    \r\n    .partners div {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: row;\r\n                flex-direction: row;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .partners div .descrip {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n    .footer.two {\r\n        margin: 2%;\r\n        width: 96%;\r\n    }\r\n\r\n    .footer.three {\r\n        margin: 2%;\r\n        width: 96%;\r\n    }\r\n\r\n    .copy-left {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer .member h3, .footer .partners h3, .footer h3 {\r\n        font-weight: bold;\r\n    }\r\n\r\n    p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n.footer-grids {\r\n    background: #282828;\r\n    padding: 3em 3em;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer h3 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    margin-bottom: 32px;\r\n    font-family: 'Viga', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.17em;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.footer.one p {\r\n    color: #908F8F;\r\n    line-height: 2em;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.one ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n    width: 200px;\r\n}\r\n\r\n.footer.one ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer.one ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n}\r\n\r\n.footer.one ul li a {\r\n    color: #908F8F;\r\n    display: block;\r\n}\r\n\r\n.footer.one ul li {\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n}\r\n\r\n.footer.three .connected ul, .footer.three div ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer.three .connected ul li, .footer.three div ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n}\r\n\r\nli {\r\n    display: list-item;\r\n    text-align: -webkit-match-parent;\r\n}\r\n\r\n.footer.three .connected ul li a.fb {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAg8AMzqHnO+dAAAAuUlEQVQ4y+2RMQrCQBBFX0SsDEh6wc42jXiLtLYi6DGsvYcgNhaCpZ2VTc4QbBVEsNSMhXE3wdkQQax8zQ5/5g9/WFARX2ayk7M8GdpOXR3vsaKdEzq2rCnjDeaF8QKKgQldnGiR+qZK2XMANpQhsbwYV4sUmCquZrDcS2+QgAiAppEiCYGUtXfRsk/FxUCP5I7nVb1B4WND/uOWtAAY4WfKgiNwY1u6QxJzbPiFSH/DzwxJ9l45vTcffTVVVKKjuc0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDItMTVUMDA6NTE6NTgrMDE6MDAXV4lxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAyLTE1VDAwOjUxOjU4KzAxOjAwZgoxzQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=) no-repeat 0px 4px;\r\n    padding: 10px 0 12px 52px;\r\n    margin: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.three .connected ul li a.yt {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAg8BAAZdWpwdAAABn0lEQVQ4y42SMWhTURSGv9eWgiGWVDt1yZtEVCSD6CBCqAgKNhQcpIMoKiI46CB0ECcXlyJUFBHbTpViQSy4FbFj7SCCuoiDcSiGElDUJsRXPwfbviT44vuXC/f837n3nv/ClnzlC/C570knz9hwwB9eSwv0WvG+dXe4zwmvGHjIkoNeTEZuGTkDvvWla571tosWrTd7ulqIObp5Zg97OM8chX81bQUawC+ydCGy7f/Axs021t9pgRqQI8dXIjJkOs1ptzoCLltx3aKX1C/WkoGclw3Bfkc9AHZ7xLz7mz1BnAIH6UnoFLEcNJo79znuqp206rh9MTBlGk3FQNXrhoaGHt0qhz5uA6oxoJ+cBGd9s1kFH7Uf0ZxDnr1AgRUu8JFRVoAnFCjzjRPs5GZScB94SjWY5TtQpMQ9ZvjMDR5sGpIGCTBInSV6yVFjrdPXaNU6Fd5xKhlo/3JZjjHNriQgw08e+nd3kmkOc5JF7rDQ+oYyefodIUuJ1xynTtZzDLHAabZzlSXuAuU4h7FUSY/FQOCw80aJ1sh5hw0A/gD6LmbrlywxMgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMTowMDowNiswMTowMEyL4rEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDE6MDA6MDYrMDE6MDA91loNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 4px;\r\n    padding: 10px 0 12px 52px;\r\n    margin: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.three .connected ul li a {\r\n    color: #908F8F;\r\n    display: block;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.footer.three .connected ul li, .footer.three ul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.footer.three .connected ul li a.fb:hover {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAeFBMVEUAAAAAdusAbfAAbfEAbfAAbe8Ab/EAbfAAbu8AgP8AbfAAbfEAbu8AbfAAbfAAbfAAbPAAbfAAbfAAbfAAbvAAcO8AcfEAbfAAbfEAbe8AZu4AbPAAbvEAbPIAbvEAbfAAbvAAbfAAc/IAbfAAbfAAbe0AbfAAAACeoLBGAAAAJnRSTlMADYjD72A14oAG2Gyj/caoNM5l4DMwEux+Xg9XWCiQ8qWMFMDzHKlSpd0AAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4gIPAC8Zw4zDsgAAAHJJREFUKM9jYEAARiZmFjU1NVYGNMDGrgYGHGjinFxq2CW41XBI8IAEefn4+QXQJARBEkIMmEAYJCGCS0IUTVCMlZVVHCQhwcoqKYUkIaGGBKSRJDiQJWQokpCVk5OTBwkqyMkpKhHj3OEkoQwUV1GFcwHdCxldE3pcsAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMDo0NzoyNSswMTowMLDVTi8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDA6NDc6MjUrMDE6MDDBiPaTAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 4px;\r\n}\r\n\r\n.footer.three .connected ul li a.yt:hover {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABXFBMVEUAAADYACfYACfXACjXACjZACbYACfZACbYACfYACfVACvYACfYACfYACfVACvWACnZACbZACb/AADaACXYACfYACfZACbYACfYACfYACfYACfYACfYACfXACjYACfYACfXACjYACfYACe/AEDYACfYACfXACjYACfZACbZACbfACDXACjZACbYACfdACLaACXYACfZACbYACfYACfZACbXACjZACbYACfYACfSAC3XACjYACf/AADZACbWACnZACbbACTXACjYACfYACfYACfXACjZACbZACbYACfYACfYACfYACfYACfXACjYACfYACfYACfZACbZACbYACfXACjZACbYACfYACfYACfYACfYACfYACfYACfbACTXACjYACfXACjMADPZACbbACTXACj/AADYACfaACXYACfYACfXACjYACfYACfYACfYACfYACfXACjYACfYACcAAADVDib6AAAAcnRSTlMAyb201V36FPRwBumW+BIskmsBN04aZIP8pdO/9l+IwEAuVQT9IaGPKFAQIKCYDzCwhoTKSmbo92gRWTQDPR88Do3rnu10Q6bgnajQnMjYtmLbWOVGL/BIfJB9dZUqYHs6CngjmgKbPtnkWqLyl9F3TbG3UEgIAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+ICDwECCxHdgiIAAAEZSURBVCjPY2AAAUYmBmYWBiyAlY2dgxObBBc3Dy8fv4CgkLCIqBiKjLiEJIOUtIysnLwCL4qEYpGSsoqqmjqGhEaRplaRto4uNgk9oAQPNgmuIn0DQyNjEwwJBmNuFQXTIjNzFAktC20GSytrBhtbO0Vkb9grIAF7Lqiwg6NTEQpwcnQASzgXYQBnsISLq7a2thuIr+0OlXABSxR5eDJ4eYP4DD4wLRCJIl8GP/+AwKBghpBQj7BwvghkiUgtIMFgGBUdE+vIjimhoxsXn2CUiFUiKTmIFUXCASphZGEujiyRYhOQ6sdgK5zmrWGYDpXwKMrQzDSzMMjKjMtmzSnKlc0r8gBL5GP6PB8sIVRQKIEsKlFYIMTAAACGa2e8EMpbjwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMTowMjoxMSswMTowMEFzDJwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDE6MDI6MTErMDE6MDAwLrQgAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 4px;\r\n}\r\n\r\n.footer.three .connected ul li a:hover, .copy-right ul li a:hover, .footer.three ul li a:hover {\r\n    color: #2e99ff;\r\n}\r\n\r\n.footer.three .contactUs ul li:nth-child(1) {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAg8BDywBeUkEAAABAElEQVQ4y42Tu2oCQRhGvzGLINilsUmXTlsv6KNtm2ew9QUCIqS0ECystrITuzRpAlEDWYR4Ujiz7q6bmf2m++ecuY9UGTp0VDf0SABI6GWVh//xIV+4HBhJvABvIXzHDoAjYzbAjx9f0KTJAoATH0AawCUpU6gUCqMbYmJMTkn9+BSAaU75ZRLCy8qRcQi/V0aSGHjwsnJgKLZevKxsxRKYe/CbMgeWIqIreXGrSHSJ3MZjQomvZMMa/eAj7heF2qkS1mrZtr7vjCqEi7Evh0u9GWot6Rwkz0XhNSgUCSJmpPbEV1l15X4DM3dlJic96kmS9G32tvKstiTp3Xw66g8LTtFRAyY8HQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMToxNTo0NCswMTowMHj56eYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDE6MTU6NDQrMDE6MDAJpFFaAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n}\r\n\r\n.footer.three .contactUs ul li:nth-child(2) {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAg8BGBQs+HUMAAAAiElEQVQ4y+2UQQqDMBBFX2rpGbyE6Log9AI9bS8gCK413kZIfhctMrHJBYpvEfjDPDKbGTCol1eUJcqrtz0uEWZaAF5MwJ0nAIvrSkJkYCPlxsNdyCOp/qnVks0lt8gpnMIfC9dDHhUACEAF+7tzXNFPjjTA+v1fdkXTkXx2inwVkjMTFPJn5g11hEXGaHG0jQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMToyNDoyMCswMTowMDz5yU0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDE6MjQ6MjArMDE6MDBNpHHxAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n}\r\n\r\n.footer.three .contactUs ul li a {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiAg8BGQ1RiOyNAAABS0lEQVQ4y92SIUtDURiGn43huGIYGESLs6htdQgrFjHPKoILZrMgawaDv8GhIKJgGgpDBgv+BsOaoGLYcEGuu+Mx6K53BsWoTzvfed/znfc7B/4+KR9+6bBv3lNHuXXfXa+/VE/N20+T4Yod9hJndDljnFdOeEpU99jhikwamOeGOpv0P7aajDHHHauxoc8mdW6YhzQAkzQIWaEDwBQv1GnTZQGADiuENJiEoQGyHFNiiTZQJGCWde54BtosUeKY7DB0kpoztlQd+KJqyxlrSQlfJtF0wqN4deSEzVHBqGHgliUXrapaddGSWw6SkpTGg4vYoMsZIWWmgXvOybJGjkMyQ1E6loeUibggIMclAQGX5Ai4IKJM+PnS7/RctjLaPHHRisv2khk6Ft32O7Yt2hkaHi18xPyOqgUfFSMLHvwoVz2wYPT77/0PeANGlpnM0gEM0gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wMi0xNVQwMToyNToxMyswMTowMGxcvw0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDItMTVUMDE6MjU6MTMrMDE6MDAdAQexAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n    display: block;\r\n    color: #908F8F;\r\n}\r\n\r\n.footer.three .contactUs ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    color: #908F8F;\r\n    font-size: 14px;\r\n    line-height: 2.5em;\r\n}\r\n\r\ndiv ul li {\r\n    width: 100%;\r\n    left: 0px;\r\n}\r\n\r\n.footer h3 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv.partners ul li a:hover, div.partners ul li a h6:hover {\r\n    color: rgb(66, 129, 180);\r\n}\r\n\r\np {\r\n    color: #908F8F;\r\n    font-family: Tahoma, Verdana, sans-serif;\r\n    font-size: 14px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-grids\">\n  <!-- footer ONE __________________________________________________ -->\n  <div class=\"footer one\">\n    <div class=\"member\">\n        <h3>We Are Members In</h3>\n        <div><a class=\"ismf\" href=\"http://www.ismf-ski.org/\" target=\"_blank\">\n          <img src=\"../../assets/partners-logo/ismf-logo1.png\" alt=\"International Ski Mountaineering Federation\">\n        </a></div>\n        <div><a class=\"alpE\" href=\"https://www.alpenverein-edelweiss.at/\" target=\"_blank\">\n          <img src=\"../../assets/partners-logo/LogoAlpenvereinEdelweiss-2.png\" alt=\"Alpenverein Edelweiss\">\n        </a></div>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n   <!-- footer TWO __________________________________________________ -->\n  <div class=\"footer two\">\n      <div class=\"partners\">\n          <h3>Our Partners</h3>\n          <div>\n            <div class=\"logo\"><a href=\"\"><img src=\"../../assets/partners-logo/gerb.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>STATE TOURISM COMMITTEE Ministry of Economic Development and Investments Republic of Armenia</p></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a href=\"http://www.minsportyouth.am/en/\" target=\"_blank\"><img src=\"../../assets/partners-logo/gerb.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>Ministry of Sport and Youth Affairs of the Republic of Armenia</p></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a href=\"https://www.biss-reisen.de\" target=\"_blank\"><img src=\"../../assets/partners-logo/bissaktiverisen-logo1.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>Biss Aktiv Reisen</p></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a href=\"http://mountainbikereisen.ch/\" target=\"_blank\"><img src=\"../../assets/partners-logo/mountainbikereisen.ch1.jpg\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>Mountain Bike Reisen</p></div>\n          </div>\n      </div>\n  </div>\n  <!-- footer THREE __________________________________________________ -->\n  <div class=\"footer three\">\n    <div class=\"contactUs\">\n        <h3>Contact Information</h3>\n        <ul>\n          <li>Armenia, Yerevan <br/> Street\tV. Hambardzumyan 7/29</li>\n          <li>(+374) 95 777 760  </li>\n          <li><a href=\"mailto:info@armski.am\">info@armski.am</a> </li>\n        </ul>\n    </div>\n    <div class=\"connected\">\n        <h3>Keep Connected</h3>\n        <ul>\n          <li><a class=\"fb\" href=\"https://www.facebook.com/ASMA4095/\" target=\"_blank\"><i></i>Follow us on Facebook</a></li>\n          <li><a class=\"yt\" href=\"https://www.youtube.com/channel/UCJsuy0JNUTlST9GIX8oUyjA/featured?view_as=subscriber\" target=\"_blank\"><i></i>Subscribe us on YouTube</a></li>\n        </ul>\n    </div>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n\n<div class=\"copy-right-grids\">\n  <div class=\"copy-left\">\n    <p class=\"footer-gd\">© 2018 ASMA. All Rights Reserved | Design by <a href=\"https://github.com/mashot7/\" target=\"_blank\">MAshot7</a></p>\n  </div>\n  <div class=\"clear\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
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

module.exports = "<!-- <ng2-image-gallery [images]=\"myImages\" [asText]=\"'content'\" [asThumbnail]=\"'mythumb'\"></ng2-image-gallery> -->"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "\r\n@media only screen and (min-width: 899px) {\r\n  .aboutFix {\r\n    display: inline-block;\r\n  }\r\n\r\n  .carouselAbout {\r\n    float: right;\r\n    margin-left: 5%;\r\n    width: 45%;\r\n  }\r\n\r\n  .aboutUs {\r\n    display: inline-block;\r\n    width: 50%;\r\n    text-align: justify;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .cont {\r\n    width: 90%;\r\n    margin: 0 5%;\r\n  }\r\n  \r\n  .about {\r\n    width: 100%;\r\n    margin: 15px 0;\r\n    padding: 0px;\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 898px) {\r\n  .carouselAbout {\r\n    width: 100%;\r\n  }\r\n\r\n  .aboutUs {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: justify;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .cont {\r\n    width: 95%;\r\n    margin: 0 2.5%;\r\n  }\r\n  \r\n  .about {\r\n    width: 100%;\r\n    margin: 15px 0;\r\n    padding: 0px;\r\n    display: inline-block;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"about\">\n    <div class=\"aboutFix aboutUs\">\n        <h2>About US</h2>\n        <p> &emsp;Armenian ski mountaineer’s association has been established in 2016,\n          although he has been working as a club for more than 10 years․\n          The Association seeks to promote and ensure a large influx of people into the mountains of Armenia.\n          The Association's mission is to gather ski lovers, professionals and experts around it to find\n          ways to improve this type of sport in Armenia. The founding member of the Association is\n          Hovhannes Martirosyan. The Armenian ski mountaineers’ association (ASMA) is a unique,\n          skillful association, which successfully participated in different state projects implemented by the\n          State Tourism Committee of the Ministry of Economic Development and Investments of the\n          Republic of Armenia. <br/>\n          &emsp;The implemented projects concern the development of the ski touring in Armenia and \n          mong them is GPS trails development.\n           </p>\n    </div>\n    <div class=\"carouselAbout\">\n      <app-infinite-carousel></app-infinite-carousel>\n    </div>\n  </div>\n</div>\n"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/infinite-carousel/infinite-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    background-color: transparent;\n}\n\n:host{\n    display: block;\n    width: 100%;\n}\n\nui-carousel {\n    display: block;\n    margin: 0 auto;\n}\n\nui-carousel-item div img {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/infinite-carousel/infinite-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<ui-carousel style=\"z-index: 101;\" [infinite]=\"true\" [speed]=\"800\" width=\"100%\" height=\"350px\" [dots]=\"false\">\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item01.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item02.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item03.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item04.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item05.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item06.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item07.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item08.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item09.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item10.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item11.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item12.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item13.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item14.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n    <ui-carousel-item>\n        <div>\n            <img src=\"../../assets/images/carousel/item15.jpg\" alt=\"\">\n        </div>\n    </ui-carousel-item>\n</ui-carousel>\n"

/***/ }),

/***/ "../../../../../src/app/infinite-carousel/infinite-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteCarouselComponent; });
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

var InfiniteCarouselComponent = /** @class */ (function () {
    function InfiniteCarouselComponent() {
    }
    InfiniteCarouselComponent.prototype.ngOnInit = function () { };
    InfiniteCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-infinite-carousel',
            template: __webpack_require__("../../../../../src/app/infinite-carousel/infinite-carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/infinite-carousel/infinite-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfiniteCarouselComponent);
    return InfiniteCarouselComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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