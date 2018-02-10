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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/font/font.txt"), "");

// module
exports.push([module.i, "* { font-family: 'Lora' !important }\r\n\r\nbody, html {\r\n  height: 100%;\r\n  margin: 0;\r\n  font-family: \"Lora\", Open Sans, Just Another Hand, sans-serif;\r\n  color: #777;\r\n}\r\n\r\n.bgimg-1, .bgimg-2, .bgimg-3 {\r\n  position: relative;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\n#title {\r\n  text-align: center;\r\n  font-size: 600%;\r\n  font-weight: bold;\r\n  float: none;\r\n  margin: auto;\r\n  margin-top: -5%;\r\n}\r\n\r\n\r\n#instagram {\r\n  transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n}\r\n.icon-link {\r\n  text-decoration: none;\r\n}\r\na svg:hover #instagram {\r\n  -webkit-transform: scale(1.20);\r\n          transform: scale(1.20);\r\n  text-decoration: none;\r\n  fill: #787380;\r\n}\r\n#linkedin{\r\n  transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n}\r\na svg:hover #linkedin {\r\n  -webkit-transform: scale(1.20);\r\n          transform: scale(1.20);\r\n  text-decoration: none;\r\n  fill: #787380;\r\n}\r\n\r\n#twitter{\r\n  transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n}\r\na svg:hover #twitter {\r\n  -webkit-transform: scale(1.20);\r\n          transform: scale(1.20);\r\n  text-decoration: none;\r\n  fill: #787380;\r\n}\r\n\r\n#github{\r\n  transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n}\r\na svg:hover #github {\r\n  -webkit-transform: scale(1.20);\r\n          transform: scale(1.20);\r\n  text-decoration: none;\r\n  fill: #787380;\r\n}\r\n\r\n#mail{\r\n  transition: all 0.3s;\r\n  -webkit-transform-origin: 50% 50%;\r\n          transform-origin: 50% 50%;\r\n}\r\na svg:hover #mail {\r\n  -webkit-transform: scale(1.20);\r\n          transform: scale(1.20);\r\n  text-decoration: none;\r\n  fill: #787380;\r\n}\r\n.caption {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.bgimg-1 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/img_parallax.png")) + ");\r\n  min-height: 100%;\r\n}\r\n\r\n.bgimg-2 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/nobody.jpg")) + ");\r\n  min-height: 70%;\r\n}\r\n\r\n.bgimg-3 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/media.jpg")) + ");\r\n  min-height: 75%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-1\">\r\n  <div class=\"caption\">\r\n    <h1 id=\"title\"> Mohamed Bengezi <br>\r\n\r\n\r\n      <a href=\"https://www.linkedin.com/in/mohamed-bengezi/\" class=\"icon-link\" id=\"linkedin\" target=\"_blank\">\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\" width=\"28\">\r\n<path id=\"LinkedIn\" fill=\"white\" d=\"M18.82,15.09v3.61h-2.09v-3.37c0-0.85-0.3-1.42-1.06-1.42c-0.58,0-0.92,0.39-1.07,0.77\r\n  c-0.06,0.13-0.07,0.32-0.07,0.51v3.52h-2.09c0,0,0.03-5.71,0-6.3h2.09v0.89c0,0.01-0.01,0.01-0.01,0.02h0.01V13.3\r\n  c0.28-0.43,0.77-1.04,1.89-1.04C17.79,12.25,18.82,13.16,18.82,15.09z M9.18,18.7h2.09v-6.3H9.18V18.7z M10.24,9.36\r\n  c-0.72,0-1.19,0.47-1.19,1.09c0,0.61,0.45,1.09,1.16,1.09h0.01c0.73,0,1.18-0.48,1.18-1.09C11.39,9.84,10.95,9.36,10.24,9.36z\r\n   M28,14c0,7.73-6.27,14-14,14S0,21.73,0,14S6.27,0,14,0S28,6.27,28,14z M20.93,8.02c0-0.55-0.46-1-1.02-1H8.09\r\n  c-0.57,0-1.02,0.45-1.02,1v11.96c0,0.55,0.46,1,1.02,1h11.82c0.57,0,1.02-0.45,1.02-1V8.02z\"></path>\r\n</svg>\r\n      </a>\r\n\r\n\r\n\r\n      <a href=\"https://twitter.com/moe_bengezi\" class=\"icon-link\" target=\"_blank\" id=\"twitter\">\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\" width=\"28\">\r\n<path id=\"Twitter\" fill=\"white\" d=\"M14,0C6.27,0,0,6.27,0,14s6.27,14,14,14s14-6.27,14-14S21.73,0,14,0z M20.69,10.57\r\n  c0.01,0.15,0.01,0.3,0.01,0.45c0,4.56-3.47,9.82-9.82,9.82c-1.95,0-3.76-0.57-5.29-1.55c0.27,0.03,0.54,0.05,0.82,0.05\r\n  c1.62,0,3.11-0.55,4.29-1.48c-1.51-0.03-2.79-1.03-3.23-2.4c0.21,0.04,0.43,0.06,0.65,0.06c0.31,0,0.62-0.04,0.91-0.12\r\n  c-1.58-0.32-2.77-1.71-2.77-3.39c0-0.01,0-0.03,0-0.04c0.47,0.26,1,0.41,1.56,0.43c-0.93-0.62-1.54-1.68-1.54-2.87\r\n  c0-0.63,0.17-1.23,0.47-1.74c1.7,2.09,4.25,3.46,7.12,3.61c-0.06-0.25-0.09-0.52-0.09-0.79c0-1.91,1.55-3.45,3.45-3.45\r\n  c0.99,0,1.89,0.42,2.52,1.09c0.79-0.15,1.53-0.44,2.19-0.84c-0.26,0.81-0.81,1.48-1.52,1.91c0.7-0.08,1.36-0.27,1.98-0.54\r\n  C21.95,9.47,21.37,10.08,20.69,10.57z\"></path>\r\n</svg>\r\n      </a>\r\n\r\n\r\n\r\n      <a href=\"http://instagram.com/moe_bengezi\" class=\"icon-link\" target=\"_blank\" id=\"instagram\">\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\" width=\"28\">\r\n<path id=\"Instagram\" fill=\"white\" d=\"M9.89,7.35h0.49v3.05H9.89V7.35z M7.35,8.26v2.15h0.49V7.44C7.55,7.58,7.35,7.89,7.35,8.26z\r\n   M18.22,10.3h1.36c0.51,0,0.92-0.41,0.92-0.92V8.38c0-0.51-0.41-0.92-0.92-0.92h-1.36c-0.51,0-0.92,0.41-0.92,0.92v0.99\r\n  C17.31,9.87,17.72,10.3,18.22,10.3z M8.2,7.35h0.49v3.05H8.2V7.35z M9.05,7.35h0.49v3.05H9.05V7.35z M14-0.01\r\n  C6.26-0.01-0.01,6.27-0.01,14S6.26,28.01,14,28.01S28.01,21.73,28.01,14S21.74-0.01,14-0.01z M6.63,7.93c0-0.71,0.58-1.3,1.3-1.3\r\n  h12.14c0.71,0,1.3,0.59,1.3,1.3v3.05h-4.56c-0.64-0.85-1.66-1.39-2.81-1.39s-2.16,0.55-2.81,1.39H6.63V7.93z M17.09,13.1\r\n  c0,1.7-1.39,3.09-3.09,3.09s-3.09-1.39-3.09-3.09s1.39-3.09,3.09-3.09C15.7,10.01,17.09,11.39,17.09,13.1z M21.37,20.07\r\n  c0,0.71-0.59,1.3-1.3,1.3H7.93c-0.71,0-1.3-0.59-1.3-1.3V11.5h4.24c-0.25,0.48-0.39,1.02-0.39,1.6c0,1.94,1.58,3.52,3.52,3.52\r\n  s3.52-1.58,3.52-3.52c0-0.57-0.14-1.12-0.39-1.6h4.24L21.37,20.07L21.37,20.07z M14,10.58c1.39,0,2.52,1.13,2.52,2.52\r\n  s-1.13,2.52-2.52,2.52s-2.52-1.13-2.52-2.52S12.61,10.58,14,10.58z\"></path>\r\n</svg>\r\n      </a>\r\n\r\n\r\n\r\n      <a href=\"https://github.com/MohamedBengezi\" class=\"icon-link\" id=\"github\" target=\"_blank\" >\r\n        <svg class=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\" width=\"28\">\r\n<path id=\"GitHub\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"white\" d=\"M14.01,0C6.27,0-0.01,6.28-0.01,14.02\r\n  c0,6.19,4.02,11.45,9.59,13.3c0.7,0.13,0.96-0.3,0.96-0.68c0-0.33-0.01-1.21-0.02-2.38c-3.9,0.85-4.72-1.88-4.72-1.88\r\n  c-0.64-1.62-1.56-2.05-1.56-2.05c-1.27-0.87,0.1-0.85,0.1-0.85c1.41,0.1,2.15,1.44,2.15,1.44c1.25,2.14,3.28,1.52,4.08,1.16\r\n  c0.13-0.91,0.49-1.52,0.89-1.87c-3.11-0.35-6.38-1.56-6.38-6.93c0-1.53,0.55-2.78,1.44-3.76C6.37,9.17,5.89,7.74,6.65,5.81\r\n  c0,0,1.18-0.38,3.85,1.44c1.12-0.31,2.32-0.47,3.51-0.47c1.19,0.01,2.39,0.16,3.51,0.47c2.68-1.81,3.85-1.44,3.85-1.44\r\n  c0.76,1.93,0.28,3.35,0.14,3.71c0.9,0.98,1.44,2.23,1.44,3.76c0,5.38-3.28,6.57-6.4,6.92c0.5,0.43,0.95,1.29,0.95,2.6\r\n  c0,1.87-0.02,3.39-0.02,3.84c0,0.37,0.25,0.81,0.96,0.67c5.56-1.86,9.58-7.11,9.58-13.3C28.03,6.28,21.75,0,14.01,0z\"></path>\r\n</svg>\r\n      </a>\r\n\r\n\r\n      <a href=\"mailto:bengezimohamed@gmail.com\" class=\"icon-link\" target=\"_blank\" id=\"mail\">\r\n        <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"28px\" height=\"28px\" viewBox=\"0 0 28 28\" enable-background=\"new 0 0 28 28\" xml:space=\"preserve\">\r\n<path id=\"mail\" fill=\"white\" d=\"M28,14c0,7.73-6.27,14-14,14S0,21.73,0,14S6.27,0,14,0S28,6.27,28,14z M20.93,8.02\r\n\tc0-0.55-0.46-1-1.02-1H8.09c-0.57,0-1.02,0.45-1.02,1v11.96c0,0.55,0.46,1,1.02,1h11.82c0.57,0,1.02-0.45,1.02-1V8.02z\r\n\t M8.098,14.148V9.71H14h5.902l-0.012,4.426l-0.012,4.427l-5.891,0.012l-5.891,0.012v-4.439H8.098z M17.397,16.333l-1.933-1.932\r\n\tl-0.538,0.533c-0.556,0.55-0.74,0.68-0.959,0.677c-0.189-0.002-0.268-0.06-0.885-0.647l-0.562-0.535l-1.914,1.879\r\n\tc-1.053,1.034-1.914,1.897-1.914,1.92s2.323,0.039,5.319,0.039h5.319L17.397,16.333z M10.351,12.215l-1.933-1.933v3.866v3.866\r\n\tl1.933-1.934l1.933-1.933L10.351,12.215z M19.581,14.145c0-2.116-0.017-3.84-0.036-3.832c-0.021,0.008-0.889,0.876-1.931,1.928\r\n\tl-1.894,1.913l1.919,1.919c1.055,1.056,1.924,1.919,1.93,1.919C19.576,17.991,19.581,16.261,19.581,14.145z M16.704,12.673\r\n\tl2.59-2.619l-2.647-0.012c-1.455-0.007-3.846-0.007-5.312,0L8.67,10.054l2.607,2.621c2.076,2.085,2.631,2.621,2.722,2.62\r\n\tC14.089,15.293,14.671,14.729,16.704,12.673z\"></path>\r\n</svg>\r\n      </a></h1>\r\n  </div>\r\n\r\n  <div class=\"social-media-links\">\r\n\r\n\r\n  </div>\r\n</div>\r\n<app-servers></app-servers>\r\n"

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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_servers_component__ = __webpack_require__("../../../../../src/app/welcome/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_page_resume_page_component__ = __webpack_require__("../../../../../src/app/resume-page/resume-page.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__welcome_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__resume_page_resume_page_component__["a" /* ResumePageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body, html {\r\n  height: 100%;\r\n  margin: 0;\r\n  font-family: \"Lora\", Open Sans, Just Another Hand, sans-serif;\r\n  color: #777;\r\n}\r\n\r\n.bgimg-1, .bgimg-2, .bgimg-3 {\r\n  position: relative;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n\r\np:not(#bio) {\r\n  color: white;\r\n}\r\n\r\n.bgimg-3 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/media.jpg")) + ");\r\n  min-height: 75%;\r\n}\r\n\r\n.Timetable{\r\n  text-align: center;\r\n  float: none;\r\n}\r\n\r\n.caption {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n/* Turn off parallax scrolling for tablets and phones */\r\n@media only screen and (max-device-width: 1024px) {\r\n  .bgimg-1, .bgimg-2, .bgimg-3 {\r\n    background-attachment: scroll;\r\n  }\r\n}\r\n\r\n.projectGit{\r\n  color: white;\r\n  font-size: 36px;\r\n}\r\n\r\n.projectGit:hover {\r\n  color:darkgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"color: white;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;\">\n  <h3 style=\"text-align:center;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Timetable Generator</font></font></h3>\n  <div class=\"Timetable\" style=\"text-align:center;\">\n    <p>\n      A timetable generator for McMaster Students that takes course codes as input, and generates a set of schedules for the user to choose from. Check it out:<br><br>\n      <a href=\"https://timetable-generator.firebaseapp.com/\" target=\"_blank\" class=\"projectGit\" style=\"text-decoration:none; position: static; height: auto; width: auto; margin: auto;\">\n        <i class=\"fa fa-link\" aria-hidden=\"true\"></i></a> | <a href=\"https://github.com/MohamedBengezi/TimetableGenerator\" target=\"_blank\" class=\"projectGit\" style=\"position: static; height: auto; width: auto; margin: auto;\">\n      <i class=\"fa fa-github-alt\" aria-hidden=\"true\" alt=\"Github\" style=\"display: inline-block;\"></i>\n    </a>\n\n    </p>\n  </div>\n\n</div>\n\n\n<div class=\"bgimg-3\">\n  <div class=\"caption\">\n    <span class=\"border\" style=\"background-color:transparent;font-size:25px;color:white;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><b>RefreshMe</b></font></font></span>\n    <p class=\"RefreshMe\">\n      RefreshMe is an application that searches through a social media database <br>\n      in order to find the trendiest and most talked about topics. Interested? Click the icon below. <br>\n      <a href=\"https://github.com/MohamedBengezi/RefreshMe\" target=\"_blank\" class=\"projectGit\" style=\"position: static; height: auto; width: auto; margin: auto;\">\n        <i class=\"fa fa-github-alt\" aria-hidden=\"true\" alt=\"Github\" style=\"display: inline-block;\"></i>\n      </a>\n\n\n    </p>\n\n\n  </div>\n</div>\n\n\n<div style=\"color: white;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;\">\n  <h3 style=\"text-align:center;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Beanzy</font></font></h3>\n  <div style=\"text-align:center;\">\n    <p  class=\"Beanzy\">\n      Have you ever seen someone that grabs your interest, but dont\n      know if they'll be interested in you? Maybe they're taken, or just not looking for anything at the moment. Whatever the case may be, Beanzy, an android app, solves your problems!\n      If interested, keep up-to-date using the link below!<br>\n      <a href=\"https://github.com/MohamedBengezi/Beanzy\" target=\"_blank\" class=\"projectGit\" style=\"position: static; height: auto; width: auto; margin: auto;\">\n        <i class=\"fa fa-github-alt\" aria-hidden=\"true\" alt=\"Github\" style=\"display: inline-block;\"></i>\n      </a>\n    </p>\n\n  </div>\n</div>\n<app-resume-page></app-resume-page>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
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

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/resume-page/resume-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bgimg-1, .bgimg-2, .bgimg-3 {\r\n  position: relative;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bgimg-1 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/img_parallax.png")) + ");\r\n  min-height: 100%;\r\n}\r\n\r\n.caption {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n.projectGit{\r\n  color: white;\r\n  font-size: 36px;\r\n}\r\n\r\n.projectGit:hover {\r\n  color:darkgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume-page/resume-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bgimg-1\">\n  <div class=\"caption\">\n        <span class=\"border\">\n            <font style=\"vertical-align: inherit;\">\n                <font style=\"vertical-align: inherit;\">\n                    <a href=\"../../assets/Resume.pdf\" class=\"projectGit\" style=\"position: static;text-align:center; text-decoration:none; font-size:56px;height: auto; width: auto; margin: auto;\">\n                        <i class=\"fa fa-file-pdf-o\" aria-hidden=\"true\" ></i>\n                    </a><br />Resume\n                </font>\n            </font>\n        </span>\n    <div style=\"margin-top:16%;\">Copyright (c) 2017 Mohamed Bengezi</div>\n\n  </div>\n\n</div>\n<div id=\"goog-gt-tt\" class=\"skiptranslate\" dir=\"ltr\"><div style=\"padding: 8px;\"><div><div class=\"logo\"><img src=\"https://www.gstatic.com/images/branding/product/1x/translate_24dp.png\" width=\"20\" height=\"20\" alt=\"Google Translate\"></div></div></div><div class=\"top\" style=\"padding: 8px; float: left; width: 100%;\"><h1 class=\"title gray\">Original text</h1></div><div class=\"middle\" style=\"padding: 8px;\"><div class=\"original-text\"></div></div><div class=\"bottom\" style=\"padding: 8px;\"><div class=\"activity-links\"><span class=\"activity-link\">Contribute a better translation</span><span class=\"activity-link\"></span></div><div class=\"started-activity-container\"><hr style=\"color: #CCC; background-color: #CCC; height: 1px; border: none;\"><div class=\"activity-root\"></div></div></div><div class=\"status-message\" style=\"display: none;\"></div></div>\n\n\n<div class=\"goog-te-spinner-pos\"><div class=\"goog-te-spinner-animation\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"goog-te-spinner\" width=\"96px\" height=\"96px\" viewBox=\"0 0 66 66\"><circle class=\"goog-te-spinner-path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle></svg></div></div>\n"

/***/ }),

/***/ "../../../../../src/app/resume-page/resume-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumePageComponent; });
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

var ResumePageComponent = (function () {
    function ResumePageComponent() {
    }
    ResumePageComponent.prototype.ngOnInit = function () {
    };
    ResumePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-resume-page',
            template: __webpack_require__("../../../../../src/app/resume-page/resume-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/resume-page/resume-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumePageComponent);
    return ResumePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/servers.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bgimg-2 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/nobody.jpg")) + ");\r\n  min-height: 70%;\r\n  text-align: center;\r\n  position: relative;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bgimg-1, .bgimg-2, .bgimg-3 {\r\n  position: relative;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\nh2:not(#subTitle, #welcome){\r\n  font-weight: normal;\r\n  text-align:center;\r\n  border-bottom: 1px solid #33ccff;\r\n}\r\n#subTitle {\r\n  font-weight: normal;\r\n  text-align: center;\r\n}\r\n\r\n.caption {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"biography\" style=\"color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;\">\n  <h3 style=\"text-align:center;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Welcome</font></font></h3>\n  <p id=\"bio\"> Welcome to my personal website. I'm an aspiring Software Engineer with a strong background in business & management. I specialize\n    in Java programming, as well as web development. I work with frameworks such as Angular and Node.js. This site, along with others, were developed\n    using one or more of these frameworks. I'm also fluent in Python, SQL,\n    and can use Hadoop HDFS proficiently. Please feel free to check out some of my projects, and contact me with any questions!\n  </p>\n</div>\n\n<div class=\"bgimg-2\">\n  <div class=\"caption\" id=\"project\">\n    <span class=\"border\" style=\"background-color:transparent;font-size:25px;color: #f7f7f7;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Projects</font></font></span>\n  </div>\n</div>\n<app-projects></app-projects>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
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

var ServersComponent = (function () {
    function ServersComponent() {
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-servers',
            template: __webpack_require__("../../../../../src/app/welcome/servers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/img_parallax.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img_parallax.db72ad503b82bff98e6e.png";

/***/ }),

/***/ "../../../../../src/assets/images/media.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media.79c412bc21ecf6e7e14c.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/nobody.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "nobody.4fd914cefb4865b068a3.jpg";

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/assets/font/font.txt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lora Regular'), local('Lora-Regular'), url(http://fonts.gstatic.com/s/lora/v12/Ukd0sOIY4JZgcODPuj2G3Q.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lora Regular'), local('Lora-Regular'), url(http://fonts.gstatic.com/s/lora/v12/GsNxiN0oIzsS201cnUag6w.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lora Regular'), local('Lora-Regular'), url(http://fonts.gstatic.com/s/lora/v12/ie2Ux11tIT0C_JTksRPlKA.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lora Regular'), local('Lora-Regular'), url(http://fonts.gstatic.com/s/lora/v12/I0dEfRgGNE90_hXZq7bjyw.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Lora Regular'), local('Lora-Regular'), url(http://fonts.gstatic.com/s/lora/v12/4vqKRIwnQQGUQQh-PnvdMA.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lora Bold'), local('Lora-Bold'), url(http://fonts.gstatic.com/s/lora/v12/sNXgpEOJ2Tz7WJSozSN6D_Y6323mHUZFJMgTvxaG2iE.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lora Bold'), local('Lora-Bold'), url(http://fonts.gstatic.com/s/lora/v12/VZ-5ejr2fpt5l1RKkVxPr_Y6323mHUZFJMgTvxaG2iE.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lora Bold'), local('Lora-Bold'), url(http://fonts.gstatic.com/s/lora/v12/gBru_9ER68jWAtTarLXr3_Y6323mHUZFJMgTvxaG2iE.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lora Bold'), local('Lora-Bold'), url(http://fonts.gstatic.com/s/lora/v12/BYKAuswRIqh69412sen31PY6323mHUZFJMgTvxaG2iE.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Lora';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Lora Bold'), local('Lora-Bold'), url(http://fonts.gstatic.com/s/lora/v12/P18Nsu9EiYldSvHIj_0e5w.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTa-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTZX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTRWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTaaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTf8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTT0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: local('Open Sans Light'), local('OpenSans-Light'), url(http://fonts.gstatic.com/s/opensans/v15/DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/K88pR3goAWT7BTt32Z01mxJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/RjgO7rYTmqiVp7vzi-Q5URJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/LWCjsQkB6EMdfHrEVqA1KRJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/xozscpT2726on7jbcb_pAhJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/59ZRklaO5bWGqF5A9baEERJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/u-WUoqrET9fUeobQW7jkRRJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(http://fonts.gstatic.com/s/opensans/v15/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSq-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSpX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNShWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSqaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSv8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSj0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(http://fonts.gstatic.com/s/opensans/v15/MTP_ySUJH_bn48VBG8sNSugdm0LZdjqr5-oayXSOefg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzK-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzJX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzBWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzKaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzP8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzD0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(http://fonts.gstatic.com/s/opensans/v15/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}\r\n/* cyrillic-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hq-j2U0lmluP9RWlSytm3ho.woff2) format('woff2');\r\n  unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\r\n}\r\n/* cyrillic */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hpX5f-9o1vgP2EXwfjgl7AY.woff2) format('woff2');\r\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\r\n}\r\n/* greek-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hhWV49_lSm1NYrwo-zkhivY.woff2) format('woff2');\r\n  unicode-range: U+1F00-1FFF;\r\n}\r\n/* greek */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hqaRobkAwv3vxw3jMhVENGA.woff2) format('woff2');\r\n  unicode-range: U+0370-03FF;\r\n}\r\n/* vietnamese */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hv8zf_FOSsgRmwsS7Aa9k2w.woff2) format('woff2');\r\n  unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\r\n}\r\n/* latin-ext */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hj0LW-43aMEzIO6XUTLjad8.woff2) format('woff2');\r\n  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\r\n}\r\n/* latin */\r\n@font-face {\r\n  font-family: 'Open Sans';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'), url(http://fonts.gstatic.com/s/opensans/v15/EInbV5DfGHOiMmvb1Xr-hugdm0LZdjqr5-oayXSOefg.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\r\n}", ""]);

// exports


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map