(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header\">\n    <div class=\"title\"><a href=\"index.html\">Metronomix</a></div>\n  </div>\n  \n  <div class=\"menu\">\n    <div class=\"menu-item\"><a routerLink=\"/main\" routerLinkActive=\"active\">Main</a></div><!--\n    --><div class=\"menu-item\"><a routerLink=\"/tutorials\" routerLinkActive=\"active\">Tutorials</a></div><!--\n    --><div class=\"menu-item\"><a routerLink=\"/links\" routerLinkActive=\"active\">Links</a></div>\n  </div>\n  \n  <div class=\"content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MetronomixDocs';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tutorials-page/tutorials-page.component */ "./src/app/tutorials-page/tutorials-page.component.ts");
/* harmony import */ var _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./links-page/links-page.component */ "./src/app/links-page/links-page.component.ts");
/* harmony import */ var _tests_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tests/test.component */ "./src/app/tests/test.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_5__["TutorialsPageComponent"],
                _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_5__["TutorialExportVstiComponent"],
                _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_5__["TutorialRecordGuitarComponent"],
                _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_5__["TutorialRecordAndroidComponent"],
                _tests_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"],
                _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_6__["LinksPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["routes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/links-page/links-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/links-page/links-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"links-content\">\r\n  <div class=\"title\"><a href=\"/links\">Links</a></div>\r\n  \r\n  <div class=\"link-category\">\r\n    <div class=\"category-title\">Commercial virtual instruments and drum samples:</div>\r\n    <div class=\"link\">- <a href=\"https://www.toontrack.com/product/ezdrummer-2\" target=\"_blank\">EZdrummer</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.toontrack.com/product/superior-drummer-3\" target=\"_blank\">Superior Drummer</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.xlnaudio.com/products/addictive_drums_2\" target=\"_blank\">Addictive Drums</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.arturia.com/spark/overview\" target=\"_blank\">Arturia Spark</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.fxpansion.com/products/bfd3\" target=\"_blank\">FXpansion BFD3</a></div>\r\n    <div class=\"link\">- <a href=\"https://stevenslatedrums.com/\" target=\"_blank\">Steven Slate Drums</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.meldaproduction.com/MDrummer\" target=\"_blank\">MDrummer</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.iwantthatsound.com\" target=\"_blank\">That Sound</a></div>\r\n    <div class=\"link\">- <a href=\"http://www.drumagog.com/store\" target=\"_blank\">Drumagog</a></div>\r\n    <div class=\"link\">- <a href=\"http://www.platinumsamples.com/accent/oceanwaydrums.php\" target=\"_blank\">Platinum Samples</a></div>\r\n  </div>\r\n  <div class=\"link-category\">\r\n    <div class=\"category-title\">Free virtual instruments and drum samples:</div>\r\n    <div class=\"link\">- <a href=\"https://www.powerdrumkit.com/download76187.php\" target=\"_blank\">MT Power Drum Kit</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.drumdrops.com/drum-samples/60s-Rogers-Pop-Kit/bronze\" target=\"_blank\">60s Rogers Pop Kit</a></div>\r\n    <div class=\"link\">- <a href=\"http://www.bulldawgsound.com/drums/sample_lib.html\" target=\"_blank\">Big Daddy's Drum Sample Libraries</a></div>\r\n    <div class=\"link\">- <a href=\"https://rekkerd.org/nsa-custom-series-drumkit-free-acoustic-drumkit-samples-by-dean-aka-nekro\" target=\"_blank\">NSA Custom Series Drumkit</a></div>\r\n    <div class=\"link\">- <a href=\"http://sennheiser.us/drummica.html\" target=\"_blank\">Sennheiser DrumMic'a!</a> (Select DrumMic'a! > Info & Downloads from the menu)</div>\r\n    <div class=\"link\">- <a href=\"https://rytmenpinne.wordpress.com/sounds-and-such/salamander-drumkit\" target=\"_blank\">Salamander drumkit</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.drumgizmo.org/wiki/doku.php?id=kits\" target=\"_blank\">DrumGizmo</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.indiedrums.com/2015/10/10/slingerland-kit\" target=\"_blank\">Slingerland Drum Samples</a></div>\r\n  </div>\r\n  <div class=\"link-category\">\r\n    <div class=\"category-title\">Digital audio workstations:</div>\r\n    <div class=\"link\">- <a href=\"https://www.ableton.com/en\" target=\"_blank\">Ableton Live</a></div>\r\n    <div class=\"link\">- <a href=\"https://new.steinberg.net/cubase\" target=\"_blank\">Cubase</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.image-line.com/flstudio\" target=\"_blank\">FL Studio</a></div>\r\n    <div class=\"link\">- <a href=\"https://www.avid.com/pro-tools\" target=\"_blank\">Pro Tools</a></div>\r\n    <div class=\"link\">- <a href=\"http://reaper.fm\" target=\"_blank\">REAPER</a></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/links-page/links-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/links-page/links-page.component.ts ***!
  \****************************************************/
/*! exports provided: LinksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageComponent", function() { return LinksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LinksPageComponent = /** @class */ (function () {
    function LinksPageComponent() {
    }
    LinksPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./links-page.component.html */ "./src/app/links-page/links-page.component.html"),
        })
    ], LinksPageComponent);
    return LinksPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bd-decor\"></div>\r\n<div class=\"info\">\r\n  <p><b>Metronomix</b> is a metronome-like application with a variety of adjustable pieces allowing to construct beat patterns you need.</p>\r\n  <p>It features a multichannel sequencer grid and sample editor that lets you select an audio sample for each channel and edit its properties.</p>\r\n  <p>Handy volume control, tempo presets and playback counters are there for comfortable usage of the application.</p>\r\n</div>\r\n<div class=\"bd-decor\"></div>\r\n\r\n<div class=\"main-images\">\r\n  <div class=\"image-block\">\r\n    <a href=\"assets/img/main-view.png\" target=\"_blank\"><img src=\"assets/img/main-view.png\"></a>\r\n    <div class=\"image-desc\">Main View</div>\r\n  </div>\r\n  <div class=\"image-block\">\r\n    <a href=\"assets/img/sound-editor.png\" target=\"_blank\"><img src=\"assets/img/sound-editor.png\"></a>\r\n    <div class=\"image-desc\">Sound Editor</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modules\">\r\n  <div class=\"main-view\">\r\n    <div class=\"module-title\">Main View:</div>\r\n    <ul>\r\n      <li>tempo can be changed with buttons, using tempo presets or by tapping the tempo text. Holding tempo buttons will change tempo faster</li>\r\n      <li>playback timer shows time from the beginning of the current playback until it's stopped. By clicking it it's possible to continue timer for the next playbacks</li>\r\n      <li>global timer starts when the first playback starts. Click the timer to reset it</li>\r\n      <li>loop bar counter shows active bar within the loop</li>\r\n      <li>global bar counter shows total number of bars played during the current playback</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"sound-editor\">\r\n    <div class=\"module-title\">Sound Editor:</div>\r\n    <ul>\r\n      <li>the view allows to create bars and change sequence for each bar, as well as time signature and triplet mode</li>\r\n      <li>the screen shows one bar at a time and allows to navigate between bars with arrows</li>\r\n      <li>in the navigation section, the upper number tells the current bar number, and the lower one is for total bars</li>\r\n      <li>copy button copies active bar sequence to the clipboard, the sequence can be pasted with the paste button</li>\r\n      <li>long pressing the clear button allows to clear all bars</li>\r\n      <li>add bar button creates a new bar next to the active one and also duplicates its contents</li>\r\n      <li>long pressing the remove bar button allows to remove all bars</li>\r\n      <li>presets button open a popup with presets for sequence <b>Patterns</b> and <b>Kits</b></li>\r\n      <li>intro bar button allows to set first 1-2 bars as one time bars, so the loop will return to the bar next to the intro bars</li>\r\n      <li>tempo change button affects the global tempo, not for each bar</li>\r\n      <li>by swiping the sequencer grid left/right it's possible to navigate the next/previous bar</li>\r\n      <li>clicking on a channel label opens <b>Sample Editor</b> for that channel</li>\r\n      <li>in presets popup clicking on a <b>Pattern</b> preset will load it to the active bar, to fully load a pattern replacing active set of bars use Load item in the preset submenu</li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"sample-editor\">\r\n    <div class=\"module-title\">Sample Editor:</div>\r\n    <ul>\r\n      <li>this view allows to change audio sample for the current channel and adjust its properties</li>\r\n      <li>arrows below the sample path load adjacent samples in the same folder</li>\r\n      <li>group property is used to have multiple channels in the same logical group, they will act as one instrument, so the next sequencer cells will stop the previous sound for the channels of the same group (e.g. used for guitar samples on different channels, or for hihat open/close variations)</li>\r\n      <li>navigation between channels is performed with arrows or swiping left/right on the empty area below the channel properties</li>\r\n      <li>to remove audio sample for a channel long press the sample selector</li>\r\n      <li>clicking on sample property label ('Gain', 'Group') will reset the corresponding value to 0</li>\r\n      <li>sample selection dialog shows folders and WAV files, it has handy scrollbar which can be clicked and dragged for faster navigation. If you cannot focus the scrollbar at the first touch just drag the finger to its boundaries without releasing it and the scrollbar will be captured. Clicking on a WAV file will play it, to load a file to the active channel use the arrow-down button at the right</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"features\">\r\n  <div class=\"section-title\">Features</div>\r\n  <ul>\r\n    <li>configurable tempo using +/- buttons, tempo presets and \"tap tempo\"</li>\r\n    <li>configurable visibility of UI elements (like volume control, tempo presets grid)</li>\r\n    <li>time counters for active playback and total app time</li>\r\n    <li>beats/bars counters</li>\r\n    <li>beats visualization</li>\r\n    <li>audio spectrum visualization during playback</li>\r\n    <li>buttons for adding/removing/editing bars and navigating between them</li>\r\n    <li>patterns and audio kits presets</li>\r\n    <li>configurable time signature and triplet support</li>\r\n    <li>intro bars option</li>\r\n    <li>sample editor allowing to select audio file, preview it and switch to previous/next file in the same folder</li>\r\n    <li>solo/mute channel, adjust sample gain and group</li>\r\n    <li>support for <b>WAV</b> format <b>8/16/24</b> bits, mono and stereo</li>\r\n    <li>unlimited tempo range</li>\r\n    <li>unlimited bars number</li>\r\n    <li><b>16 steps</b> in sequencer (each cell corresponding to 1/16th note for 4/4 time signature)</li>\r\n    <li>20 audio channels</li>\r\n    <li>intro bars</li>\r\n  </ul>\r\n</div>\r\n\r\n<div class=\"notes\">\r\n  <div class=\"section-title\">Notes</div>\r\n  <ul>\r\n    <li>all sequencer steps correspond to 1/16th notes by default</li>\r\n    <li>12/8 measure has 1/8th notes for each step</li>\r\n    <li>in triplet mode, measures x/4 use 1/8th triplet notes for each step, measures x/8 use 1/16th triplet notes</li>\r\n    <li>if spectrum visualization isn't smooth or affects the audio playback it can be disabled in Settings</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
        })
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tutorials-page/tutorials-page.component */ "./src/app/tutorials-page/tutorials-page.component.ts");
/* harmony import */ var _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links-page/links-page.component */ "./src/app/links-page/links-page.component.ts");



var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main'
    },
    {
        path: 'main',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_0__["MainPageComponent"]
    },
    {
        path: 'tutorials',
        component: _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_1__["TutorialsPageComponent"]
    },
    {
        path: 'tutorials/how_to_export_drum_vsti',
        component: _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_1__["TutorialExportVstiComponent"]
    },
    {
        path: 'tutorials/how_to_record_guitar',
        component: _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_1__["TutorialRecordGuitarComponent"]
    },
    {
        path: 'tutorials/how_to_record_android',
        component: _tutorials_page_tutorials_page_component__WEBPACK_IMPORTED_MODULE_1__["TutorialRecordAndroidComponent"]
    },
    {
        path: 'links',
        component: _links_page_links_page_component__WEBPACK_IMPORTED_MODULE_2__["LinksPageComponent"]
    },
];


/***/ }),

/***/ "./src/app/tests/test.component.html":
/*!*******************************************!*\
  !*** ./src/app/tests/test.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Tests</div>"

/***/ }),

/***/ "./src/app/tests/test.component.ts":
/*!*****************************************!*\
  !*** ./src/app/tests/test.component.ts ***!
  \*****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/tests/test.component.html"),
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/tutorials-page/tutorial-export-drum-vsti.html":
/*!***************************************************************!*\
  !*** ./src/app/tutorials-page/tutorial-export-drum-vsti.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"tutorial-content\">\r\n  <div class=\"title\"><a href=\"/tutorials/how_to_export_drum_vsti\">How To Export Samples from a Virtual DrumKit VST Plugin</a></div>\r\n\r\n  <p>This tutorial will use <a href=\"https://www.toontrack.com/product/ezdrummer-2\" target=\"_blank\"><b>EZdrummer</b></a> virtual instrument to show how to get audio samples and use them in the application.</p>\r\n  <p>The instrument comes as a VSTi plugin supported by many <a href=\"https://en.wikipedia.org/wiki/Digital_audio_workstation\" target=\"_blank\"><b>DAWs</b></a> (Digital Audio Workstation). One of them is <a href=\"http://reaper.fm\" target=\"_blank\"><b>REAPER</b></a> which is used here.</p>\r\n  <p>So when the <b>EZdrummer</b> is installed the DAW should find the plugin and you'll be able to create an instrument track and use <b>MIDI items</b> or virtual keyboard to play it.</p>\r\n  <br>\r\n\r\n  <div class=\"main-steps\">\r\n    <div class=\"steps-title\">Here are the steps to follow:</div>\r\n    \r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>1.</b> In REAPER create a <b>new track (Ctrl+T)</b>, click the <b>FX button</b> and find <i>\"EZdrummer\"</i> under the <b>VSTi</b> category, add it and wait until it loads.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/01_reaper_track.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/01_reaper_track.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>2.</b> Create <b>MIDI items</b>, each for one of the drumkit pieces. For this drag mouse pointer with <b>Ctrl</b> on the track.</div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>3.</b> Select each item and give it a name in the <b>properties (F2)</b> (e.g. kick, snare, hihat).</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/02_item_naming.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/02_item_naming.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>4.</b> Double click each item to open <b>MIDI editor</b>, on the left panel with piano keyboard find corresponding keys for your drum pieces, then drag the mouse in the note area to create a MIDI note for that piece. Adjust sample velocity at the bottom area by dragging the vertical bar.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/03_midi_editor.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/03_midi_editor.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>5.</b> Close the MIDI editor and select all MIDI items in the main window by dragging over the items with the <b>right mouse button</b>.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/04_selected_items.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/04_selected_items.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>6.</b> Select menu <b>File &gt; Render</b> and adjust settings to export samples. Click <b>Render</b> and check the output directory.</div>\r\n      <div class=\"sublist\">\r\n        <div class=\"sublist-item\"><b>Source:</b> Selected media items</div>\r\n        <div class=\"sublist-item\"><b>Tail:</b> off</div>\r\n        <div class=\"sublist-item\"><b>File name:</b> $item</div>\r\n        <div class=\"sublist-item\"><b>Channels:</b> Mono</div>\r\n        <div class=\"sublist-item\"><b>Output format:</b> WAV</div>\r\n        <div class=\"sublist-item\"><b>WAV bit depth:</b> 16 bit PCM</div>\r\n      </div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/05_render_settings.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/05_render_settings.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\"><div class=\"step-text\"><b>7.</b> Copy the exported WAV files to your <b>device storage</b>, open the application and enter the <b>Sound Editor</b> view. Click the <b>Presets</b> button, <b>Kits</b>, select <i>\".Empty Kit\"</i>.</div></div>\r\n    <div class=\"tutorial-step\"><div class=\"step-text\"><b>8.</b> Click on the first label <i>\"KD\"</i>, then on the sample selector, navigate to your copied sample for Kick and load it with the button at the right. Repeat this step for other channels.</div></div>\r\n    <div class=\"tutorial-step\"><div class=\"step-text\"><b>9.</b> Check your kit with some sequencer pattern and save it in the <b>Presets</b> menu.</div></div>\r\n  </div>\r\n\r\n  <p>These are the basic steps for sample exporting. You may change audio settings in the EZdrummer plugin window (like kit type, specific instrument sample for each kit piece, change volume in the Mixer tab). Also you can modify exported WAV audio files in the same DAW or in an audio editor software (like <a href=\"https://www.audacityteam.org\" target=\"_blank\"><b>Audacity</b></a>).</p>\r\n  <br>\r\n\r\n  <div class=\"add-steps\">\r\n    <div class=\"steps-title\">For example, in <b>REAPER</b>, to edit audio before exporting it:</div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\">- copy your MIDI items and from the context menu select <b>'Apply track FX to items as new take (mono output)'</b></div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/06_copied_items_context.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/06_copied_items_context.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\">- you'll get a new take in the audio format for which you could apply other effects, change volume, etc. independently of other sounds</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_drum_vsti/07_fx_applied.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_drum_vsti/07_fx_applied.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\">- e.g. to change volume open the item <b>properties (F2)</b> and adjust it with the <b>Volume/pan</b> slider</div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\">- or drag an audio item to a new track and adjust its volume/effects separately</div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\">- then just select all such audio items (not MIDI) and Render them the same way as described above</div>\r\n    </div>\r\n  </div>\r\n  \r\n  <br>\r\n  <p>The same technique may be used for other virtual instruments, like bass guitar (<b>MODO BASS</b>) or piano (<b>EZkeys</b>, <b>Addictive Keys</b>). See the <a routerLink=\"/links\"><b>Links</b></a> section for more information.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tutorials-page/tutorial-record-android.html":
/*!*************************************************************!*\
  !*** ./src/app/tutorials-page/tutorial-record-android.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"tutorial-content\">\r\n  <div class=\"title\"><a href=\"/tutorials/how_to_record_android\">How To Record, Edit and Use Audio Samples within Android</a></div>\r\n\r\n  <p>There are some Android applications that allow to record sound from the built-in Android mic and then trim a part of the recording and save it as a <b>WAV</b> file. This could be used as a quick way to create an additional sample to use in an audio loop (a background melody on acoustic guitar, a vocal part or some percussion sounds).</p>\r\n  <br>\r\n  <div>\r\n    Free apps I found for this task are:\r\n    <div class=\"apps-list\">\r\n      <div class=\"app-item\">– <a href=\"https://play.google.com/store/apps/details?id=com.pamsys.lexisaudioeditor\" target=\"_blank\">Lexis Audio Editor</a></div>\r\n      <div class=\"app-item\">– <a href=\"https://play.google.com/store/apps/details?id=com.nchsoftware.pocketwavepad_free\" target=\"_blank\">WavePad Audio Editor</a></div>\r\n      <div class=\"app-item\">– <a href=\"https://play.google.com/store/apps/details?id=io.sbaud.wavstudio\" target=\"_blank\">WaveEditor for Android</a></div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"main-steps\">\r\n    <div class=\"steps-title\">Examples of usage of these applications:</div>\r\n    \r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>1.</b> In <b>Lexis Audio Editor</b> press <i>\"Rec a new file\"</i>, record audio, press <i>Stop</i>, then select a portion of the recording and use <i>Trim</i> from the menu. Use <i>Normalize</i> effect to maximize the audio volume. Then <i>Save</i> it as a <b>.wav</b> file.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_android_record/01_lexis_editor.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_android_record/01.png\" width=\"600\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>2.</b> With <b>WavePad Audio Editor</b> the process is similar, you can zoom the view, select a region with one finger, trim and normalize it, then export with <b>File &gt; Save As</b>. In the save dialog select <b>WAV/PCM, 44.1 kHz, 16bits</b>. The resulting file will be saved to the folder <i>\"/sdcard/nchsoftware/wavepad\"</i>.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_android_record/02_wavepad_editor.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_android_record/02.png\" width=\"600\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>3.</b> In <b>WaveEditor for Android</b> you record an audio and select it from the main page list (<i>Recents</i>) to edit it. Select a region to export with the tools from the toolbar, apply the <i>Normalize</i> effect and go to the <b>File &gt; Export &gt; Selection</b> menu (seems it doesn't have Trim tool). Then select an export location, <b>WAV</b> format, <b>16-bit PCM</b>, sample rate <b>44100</b> and <b>Mono</b> channel.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_android_record/03_wave_editor.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_android_record/03.png\" width=\"600\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div>If you find other handy apps for the inline recording/editing put your suggestions in the <a href=\"https://github.com/mortalis13/Metronomix/issues\" target=\"_blank\">issues</a> section or send me an email.</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tutorials-page/tutorial-record-guitar.html":
/*!************************************************************!*\
  !*** ./src/app/tutorials-page/tutorial-record-guitar.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"tutorial-content\">\r\n  <div class=\"title\"><a href=\"/tutorials/how_to_record_guitar\">How To Record and Export Guitar Riffs Audio with a DAW</a></div>\r\n\r\n  <p>In this tutorial I will use the <a href=\"http://reaper.fm\" target=\"_blank\">REAPER</a>&nbsp;<a href=\"https://en.wikipedia.org/wiki/Digital_audio_workstation\" target=\"_blank\">DAW</a> (Digital Audio Workstation) to record an electric guitar and use the resulting WAV audio files with the application.</p>\r\n  <br>\r\n\r\n  <div class=\"main-steps\">\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>1.</b> In REAPER create a <b>new track (Ctrl+T)</b>, arm it for recording (red button), select audio input (USB connected guitar amplifier in this case) and check the audio signal.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/01_new_recording_track.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_guitar_record/01.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>2.</b> Record some riffs, the image shows recording of single chords E5, F5, G5, A5 in 120 bpm with internal metronome on, each 1 bar long which corresponds to 2 seconds for each sample.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/02_recorded_chords.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_guitar_record/02.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>3.</b> Split the recording to items (with cursor at the start/end of each bar press <b>S to split</b>). Remove empty parts and assign names for the rest of items from their <b>properties (F2)</b>. Then select all items by dragging the right mouse button over them.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/03_splitted_items.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_guitar_record/03.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>4.</b> Select menu <b>File &gt; Render</b> and adjust settings to export samples. Click <b>Render</b> and check the output directory.</div>\r\n      <div class=\"sublist\">\r\n        <div class=\"sublist-item\"><b>Source:</b> Selected media items</div>\r\n        <div class=\"sublist-item\"><b>Tail:</b> off</div>\r\n        <div class=\"sublist-item\"><b>File name:</b> $item</div>\r\n        <div class=\"sublist-item\"><b>Channels:</b> Mono</div>\r\n        <div class=\"sublist-item\"><b>Output format:</b> WAV</div>\r\n        <div class=\"sublist-item\"><b>WAV bit depth:</b> 16 bit PCM</div>\r\n      </div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/04_render_options.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_guitar_record/04.png\"></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>7.</b> Copy the exported WAV files to your <b>device storage</b>, open the application and enter the <b>Sound Editor</b> view.</div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>8.</b> Click on the label of an empty channel, then on the sample selector, navigate to your copied sample and load it with the button at the right. Assign <b>group 1</b> to the channel. Repeat this step for other samples/channels.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/05_sample_selector_dialog.png\" class=\"image-link\" target=\"_blank\"><div class=\"image\"><img src=\"assets/img/tutorial_guitar_record/05.png\" width=\"400\"></div></a>\r\n        <br>\r\n        <a href=\"assets/img/tutorial_guitar_record/06_channel_settings.png\" class=\"image-link\" target=\"_blank\"><div class=\"image\"><img src=\"assets/img/tutorial_guitar_record/06.png\" width=\"400\"></div></a>\r\n      </div>\r\n    </div>\r\n    <div class=\"tutorial-step\">\r\n      <div class=\"step-text\"><b>9.</b> Each new channel belongs to the group 1 so they act as one instrument, any enabled sequencer step stops the previous steps within the same group, so the guitar chords don't interfere.</div>\r\n      <div class=\"step-images\">\r\n        <a href=\"assets/img/tutorial_guitar_record/07_test_sequence.png\" class=\"image-link\" target=\"_blank\"><img src=\"assets/img/tutorial_guitar_record/07.png\" width=\"400\"></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <br>\r\n  <p>This method can be used to record other live instruments, like bass guitar, piano or to record an audio loop with duration of 1-2 bars, though it will only work if you use the same tempo during the recording and the playback in the application.</p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tutorials-page/tutorials-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tutorials-page/tutorials-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tutorials\">\r\n  <div class=\"tutorial-link\">1. <a routerLink=\"/tutorials/how_to_export_drum_vsti\">How To Export Samples from a Virtual DrumKit VST Plugin</a></div>\r\n  <div class=\"tutorial-link\">2. <a routerLink=\"/tutorials/how_to_record_guitar\">How To Record and Export Guitar Riffs Audio with a DAW</a></div>\r\n  <div class=\"tutorial-link\">3. <a routerLink=\"/tutorials/how_to_record_android\">How To Record, Edit and Use Audio Samples within Android</a></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tutorials-page/tutorials-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tutorials-page/tutorials-page.component.ts ***!
  \************************************************************/
/*! exports provided: TutorialsPageComponent, TutorialExportVstiComponent, TutorialRecordGuitarComponent, TutorialRecordAndroidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsPageComponent", function() { return TutorialsPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialExportVstiComponent", function() { return TutorialExportVstiComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialRecordGuitarComponent", function() { return TutorialRecordGuitarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialRecordAndroidComponent", function() { return TutorialRecordAndroidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TutorialsPageComponent = /** @class */ (function () {
    function TutorialsPageComponent() {
    }
    TutorialsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tutorials-page.component.html */ "./src/app/tutorials-page/tutorials-page.component.html"),
        })
    ], TutorialsPageComponent);
    return TutorialsPageComponent;
}());

var TutorialExportVstiComponent = /** @class */ (function () {
    function TutorialExportVstiComponent() {
    }
    TutorialExportVstiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tutorial-export-drum-vsti.html */ "./src/app/tutorials-page/tutorial-export-drum-vsti.html"),
        })
    ], TutorialExportVstiComponent);
    return TutorialExportVstiComponent;
}());

var TutorialRecordGuitarComponent = /** @class */ (function () {
    function TutorialRecordGuitarComponent() {
    }
    TutorialRecordGuitarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tutorial-record-guitar.html */ "./src/app/tutorials-page/tutorial-record-guitar.html"),
        })
    ], TutorialRecordGuitarComponent);
    return TutorialRecordGuitarComponent;
}());

var TutorialRecordAndroidComponent = /** @class */ (function () {
    function TutorialRecordAndroidComponent() {
    }
    TutorialRecordAndroidComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tutorial-record-android.html */ "./src/app/tutorials-page/tutorial-record-android.html"),
        })
    ], TutorialRecordAndroidComponent);
    return TutorialRecordAndroidComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Documents\8-projects\web\angular\MetronomixDocs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map