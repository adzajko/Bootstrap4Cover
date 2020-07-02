(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/portfolio/portfolio.component */ "./src/app/components/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/not-found/not-found.component */ "./src/app/components/pages/not-found/not-found.component.ts");









const routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'contact', component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'portfolio', component: _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"] },
    { path: '**', component: _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");










function AppComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_i_4_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
} }
function AppComponent_app_loader_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
} }
class AppComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.title = 'Antonij Djajkoski';
        this.displayTop = 0;
        this.outgoingRequest = false;
        this.notificationIncoming = false;
        this.scrollEvent = (event) => {
            this.displayTop = event.currentTarget.pageYOffset;
        };
    }
    ngOnInit() {
        window.addEventListener('scroll', this.scrollEvent, true);
        // Init AOS
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            once: true,
            delay: 0,
            duration: 1000
        });
        // Shared Service Subjects
        this.sharedService.requestStatus.subscribe(res => {
            if (res === true) {
                this.outgoingRequest = true;
            }
            else {
                this.outgoingRequest = false;
            }
        });
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [["class", "fas fa-chevron-up", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "fas", "fa-chevron-up", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_i_4_Template, 1, 1, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_loader_7_Template, 1, 0, "app-loader", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayTop > 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outgoingRequest);
    } }, directives: [_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_8__["LoaderComponent"]], styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nfooter[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  footer[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n}\nmain[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n  position: fixed;\n  cursor: pointer;\n  bottom: 10%;\n  right: 75px;\n  font-size: 46px;\n  color: #d32f2f;\n  z-index: 10;\n}\n@media only screen and (max-width: 600px) {\n  main[_ngcontent-%COMP%]   i.fas[_ngcontent-%COMP%] {\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBTkY7SUFPSSxzQkFBQTtFQ0dGO0FBQ0Y7QUREQSwwQkFBQTtBQUVBLHNCQUFBO0FBb0NBLHlCQUFBO0FDdERBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUF1QkY7QURBRTtFQ3pCRjtJQUlJLFVBQUE7RUF5QkY7QUFDRjtBQXZCQTtFQUNFLGtCQUFBO0FBMEJGO0FBekJFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTJCSjtBRHZCRTtFQ1hBO0lBU0ksV0FBQTtFQTZCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xyXG4gIH1cclxufVxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgRU5EKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmhlcm8tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xuZm9vdGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGZvb3RlciB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWFpbiBpLmZhcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IDc1cHg7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgY29sb3I6ICNkMzJmMmY7XG4gIHotaW5kZXg6IDEwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBtYWluIGkuZmFzIHtcbiAgICByaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/portfolio/portfolio.component */ "./src/app/components/pages/portfolio/portfolio.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/not-found/not-found.component */ "./src/app/components/pages/not-found/not-found.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
        _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
        _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    _components_pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
                    _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                    _components_pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"],
                    _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 1, consts: [[1, "footer-section"], [1, "upper-footer"], ["href", "https://github.com/adzajko", "target", "_blank"], [1, "fab", "fa-github"], ["href", "https://www.linkedin.com/in/antonij-djajkoski/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://twitter.com/Dzajkoo", "target", "_blank"], [1, "fab", "fa-twitter"], [1, "divider"], [1, "lower-footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 Antonij Djajkoski | ", ctx.currentYear, "");
    } }, styles: [".flex-column-center[_ngcontent-%COMP%], section.footer-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nsection.footer-section[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1rem;\n  box-shadow: 2px -2px 5px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 25px;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%], section.footer-section[_ngcontent-%COMP%]   .lower-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-right: 1rem;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%]   .fa-github[_ngcontent-%COMP%] {\n  color: #24292e;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%]   .fa-linkedin[_ngcontent-%COMP%] {\n  color: #0077b5;\n}\nsection.footer-section[_ngcontent-%COMP%]   .upper-footer[_ngcontent-%COMP%]   .fa-twitter[_ngcontent-%COMP%] {\n  color: #1da1f2;\n}\nsection.footer-section[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 3px;\n  margin: auto;\n  background-color: #24292e;\n}\nsection.footer-section[_ngcontent-%COMP%]   .lower-footer[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7QURBRTtFQU5GO0lBT0ksc0JBQUE7RUNHRjtBQUNGO0FEREEsMEJBQUE7QUFFQSxzQkFBQTtBQW9DQSx5QkFBQTtBQ3REQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUF1QkY7QUFyQkU7O0VBRUUsYUFBQTtBQXVCSjtBQXJCRTtFQUNFLGtCQUFBO0FBdUJKO0FBdEJJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBd0JOO0FBdEJJO0VBQ0UsY0FBQTtBQXdCTjtBQXJCSTtFQUNFLGNBQUE7QUF1Qk47QUFwQkk7RUFDRSxjQUFBO0FBc0JOO0FBbkJFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFxQko7QUFuQkU7RUFDRSxlQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcclxuICB9XHJcbn1cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIEVORCovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zIEVORCovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgc2VjdGlvbi5mb290ZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyby1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIC5oZXJvLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gIH1cbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIEVORCovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgRU5EKi9cbnNlY3Rpb24uZm9vdGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNoYWRvdzogMnB4IC0ycHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5zZWN0aW9uLmZvb3Rlci1zZWN0aW9uIC51cHBlci1mb290ZXIsXG5zZWN0aW9uLmZvb3Rlci1zZWN0aW9uIC5sb3dlci1mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuc2VjdGlvbi5mb290ZXItc2VjdGlvbiAudXBwZXItZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi5mb290ZXItc2VjdGlvbiAudXBwZXItZm9vdGVyIGEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbnNlY3Rpb24uZm9vdGVyLXNlY3Rpb24gLnVwcGVyLWZvb3RlciAuZmEtZ2l0aHViIHtcbiAgY29sb3I6ICMyNDI5MmU7XG59XG5zZWN0aW9uLmZvb3Rlci1zZWN0aW9uIC51cHBlci1mb290ZXIgLmZhLWxpbmtlZGluIHtcbiAgY29sb3I6ICMwMDc3YjU7XG59XG5zZWN0aW9uLmZvb3Rlci1zZWN0aW9uIC51cHBlci1mb290ZXIgLmZhLXR3aXR0ZXIge1xuICBjb2xvcjogIzFkYTFmMjtcbn1cbnNlY3Rpb24uZm9vdGVyLXNlY3Rpb24gLmRpdmlkZXIge1xuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDNweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuc2VjdGlvbi5mb290ZXItc2VjdGlvbiAubG93ZXItZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() { }
    ngOnInit() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand", "h2", "font-italic"], ["src", "/assets/images/logo.png", "alt", "Djajko", 1, "img-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", "router-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", "router-link", 3, "routerLinkActiveOptions"], ["routerLink", "/portfolio", "routerLinkActive", "active", 1, "nav-link", "router-link", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "router-link", 3, "routerLinkActiveOptions"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nnav[_ngcontent-%COMP%] {\n  background-color: rgba(36, 41, 46, 0.9);\n}\n.router-link[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  color: #f5f5f5;\n  text-decoration: none;\n  display: block;\n  font-size: 26px;\n  margin-right: 2rem;\n  position: relative;\n}\n@media only screen and (max-width: 600px) {\n  .router-link[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n.router-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 0%;\n  height: 3px;\n  background-color: #f5f5f5;\n  transition: 0.4s;\n}\n.router-link[_ngcontent-%COMP%]:hover::before {\n  transition: 0.4s;\n  width: 100%;\n}\n.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3px;\n  background-color: #f5f5f5;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7QURBRTtFQU5GO0lBT0ksc0JBQUE7RUNHRjtBQUNGO0FEREEsMEJBQUE7QUFFQSxzQkFBQTtBQW9DQSx5QkFBQTtBQ3ZDQTtFQUNFLHVDQUFBO0FBUUY7QUFMQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUUY7QURkRTtFQ0RGO0lBU0ksbUJBQUE7RUFVRjtBQUNGO0FBUkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVdGO0FBUkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFXRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgfVxyXG59XHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAuaGVyby1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zIEVORCovXG5uYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM2LCA0MSwgNDYsIDAuOSk7XG59XG5cbi5yb3V0ZXItbGluayB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogI2Y1ZjVmNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJvdXRlci1saW5rIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG5cbi5yb3V0ZXItbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5yb3V0ZXItbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 6, vars: 0, consts: [[1, "animation-container"], [1, "lds-ring"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".flex-column-center[_ngcontent-%COMP%], .animation-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\n.animation-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 11;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.lds-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 200px;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  margin: 8px;\n  border: 8px solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBTkY7SUFPSSxzQkFBQTtFQ0dGO0FBQ0Y7QUREQSwwQkFBQTtBQUVBLHNCQUFBO0FBb0NBLHlCQUFBO0FDdERBO0VBRUUsb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFzQkY7QUFuQkE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFzQkY7QUFwQkE7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtFQUNBLHNEQUFBO0FBdUJGO0FBckJBO0VBQ0UsdUJBQUE7QUF3QkY7QUF0QkE7RUFDRSxzQkFBQTtBQXlCRjtBQXZCQTtFQUNFLHVCQUFBO0FBMEJGO0FBeEJBO0VBQ0U7SUFDRSx1QkFBQTtFQTJCRjtFQXpCQTtJQUNFLHlCQUFBO0VBMkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgfVxyXG59XHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5hbmltYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmhlcm8tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xuLmFuaW1hdGlvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHotaW5kZXg6IDExO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmxkcy1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLmxkcy1yaW5nIGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogOHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbn1cblxuLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuXG4ubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/about/about.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AboutComponent {
    constructor() { }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 47, vars: 0, consts: [[1, "subsection"], ["data-aos", "fade-up", 1, "section-left"], [1, "h1", "pb-4", "mb-5"], [1, "p"], ["data-aos", "fade-up", 1, "section-right"], [1, "h2", "pb-4", "mb-5"], [1, "h6"], ["data-aos", "fade-up", 1, "quick-links"], ["mat-raised-button", "", "routerLink", "/portfolio", 1, "mb-2"], ["mat-raised-button", "", "routerLink", "/contact", "color", "accent"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Some paragraph about how I'm motivated to succeed, what my hobbies are etc etc... (Remember to change this!) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Currently studying at the Faculty for Computer Science in Skopje, North Macedonia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I am quite new to the software engineering world, having only a year worth's of experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Design:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Adobe Xd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " HTML, CSS ( Bootstrap, Materialize), Preprocessors (SCSS, SASS), JavaScript (jQuery, Angular, React) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " PHP (Laravel, OctoberCMS), Java (Spring, Spring Boot), NodeJS (Express.js) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Databases:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MongoDB, Maria, MySQL, PostGreSQL, Firebase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tooling:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Maven, Swagger, Git, Atlassian Package, NPM, Bash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cloud:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "AWS S3, AWS RDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Maybe check out some of my work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Portfolio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "... or contact me for more info?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Contact Me! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".flex-column-center[_ngcontent-%COMP%], .quick-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  margin: 100px 0;\n}\n.subsection[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.section-left[_ngcontent-%COMP%], .section-right[_ngcontent-%COMP%], .quick-links[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 2rem;\n  border-radius: 15px;\n}\n.section-left[_ngcontent-%COMP%], .quick-links[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.section-left[_ngcontent-%COMP%] {\n  margin-right: auto;\n  margin-left: 10rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .section-left[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 100px auto 0 auto;\n  }\n}\n.section-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  position: relative;\n  text-align: center;\n  padding-bottom: 10px;\n}\n.section-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #24292e;\n}\n.section-right[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  color: whitesmoke;\n  margin: 100px 10rem 100px auto;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .section-right[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 100px auto;\n  }\n}\n.section-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n  position: relative;\n  text-align: center;\n  padding-bottom: 10px;\n}\n.section-right[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.quick-links[_ngcontent-%COMP%] {\n  margin: auto;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .quick-links[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 100px auto 0 auto;\n  }\n}\n.quick-links[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n.quick-links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQ0Y7QURBRTtFQU5GO0lBT0ksc0JBQUE7RUNHRjtBQUNGO0FEREEsMEJBQUE7QUFFQSxzQkFBQTtBQW9DQSx5QkFBQTtBQ3REQTtFQUNFLGVBQUE7QUF1QkY7QUFwQkE7RUFDRSxvQkFBQTtBQXVCRjtBQXBCQTs7O0VBR0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXVCRjtBQXBCQTs7RUFFRSw0QkFBQTtBQXVCRjtBQXBCQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUF1QkY7QURyQkU7RUNKRjtJQUlJLFVBQUE7SUFDQSx5QkFBQTtFQXlCRjtBQUNGO0FBeEJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTBCSjtBQXhCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTBCSjtBQXRCQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQXlCRjtBRGhERTtFQ29CRjtJQUtJLFVBQUE7SUFDQSxrQkFBQTtFQTJCRjtBQUNGO0FBMUJFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQTRCSjtBQXpCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQTJCSjtBQXZCQTtFQUNFLFlBQUE7QUEwQkY7QUR6RUU7RUM4Q0Y7SUFJSSxVQUFBO0lBQ0EseUJBQUE7RUEyQkY7QUFDRjtBQTFCRTtFQUNFLFlBQUE7QUE0Qko7QUExQkU7RUFDRSxZQUFBO0FBNEJKO0FBeEJBO0VBQ0UsbUJBQUE7QUEyQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xyXG4gIH1cclxufVxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgRU5EKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCAucXVpY2stbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAuaGVyby1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zIEVORCovXG5zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMDBweCAwO1xufVxuXG4uc3Vic2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uc2VjdGlvbi1sZWZ0LFxuLnNlY3Rpb24tcmlnaHQsXG4ucXVpY2stbGlua3Mge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uc2VjdGlvbi1sZWZ0LFxuLnF1aWNrLWxpbmtzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnNlY3Rpb24tbGVmdCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zZWN0aW9uLWxlZnQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcbiAgfVxufVxuLnNlY3Rpb24tbGVmdCBoMSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLWxlZnQgaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xufVxuXG4uc2VjdGlvbi1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW46IDEwMHB4IDEwcmVtIDEwMHB4IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNlY3Rpb24tcmlnaHQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB9XG59XG4uc2VjdGlvbi1yaWdodCBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5zZWN0aW9uLXJpZ2h0IGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnF1aWNrLWxpbmtzIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5xdWljay1saW5rcyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMCBhdXRvO1xuICB9XG59XG4ucXVpY2stbGlua3MgaDYge1xuICBtYXJnaW46IDE1cHg7XG59XG4ucXVpY2stbGlua3MgYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubWItMiB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/contact/contact.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











class ContactComponent {
    constructor(sharedService, toastr) {
        this.sharedService = sharedService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.initForm();
        emailjs_com__WEBPACK_IMPORTED_MODULE_2__["init"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].userID, this.contactForm.value.email);
    }
    initForm() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmit() {
        this.sharedService.emitNewRequestStatus(true);
        emailjs_com__WEBPACK_IMPORTED_MODULE_2__["send"]('outlook', 'portfolio_page', this.contactForm.value)
            .then(res => {
            this.sharedService.emitNewRequestStatus(false);
            this.toastr.success('Your message has been sent!', 'Thank you!');
            this.contactForm.reset();
        })
            .catch(err => {
            this.sharedService.emitNewRequestStatus(false);
            this.toastr.error(err.message, 'Oops! An error occurred..');
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 22, vars: 2, consts: [[1, "contact-section"], ["data-aos", "fade-up", 1, "titles"], ["data-aos", "fade-right", 1, "h1"], ["data-aos", "fade-right", 1, "p"], ["data-aos", "fade-up", 3, "formGroup", "ngSubmit"], ["data-aos", "fade-up"], ["type", "text", "matInput", "", "required", "", "formControlName", "name"], ["type", "email", "matInput", "", "required", "", "formControlName", "email"], ["rows", "5", "matInput", "", "required", "", "formControlName", "message"], ["type", "submit", "mat-raised-button", "", "color", "accent", 3, "disabled"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Have an idea you want implemented? Or just a plain old business inquiry? Drop a line below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".flex-column-center[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\n.titles[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 10rem;\n  margin-top: 100px;\n  padding: 2rem;\n  border-radius: 25px;\n  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.6);\n  background-color: white;\n  overflow-x: hidden;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .titles[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 100px auto 0 auto;\n  }\n}\n.titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .titles[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px;\n}\nform[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 2rem;\n  border-radius: 25px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);\n  margin: 100px 10rem 100px auto;\n  background-color: #24292e;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  form[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: 100px auto;\n  }\n}\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\nform[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 1rem 0;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsbURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQUU7RUFORjtJQU9JLHNCQUFBO0VDR0Y7QUFDRjtBRERBLDBCQUFBO0FBRUEsc0JBQUE7QUFvQ0EseUJBQUE7QUN0REE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXVCRjtBRE5FO0VDekJGO0lBVUksVUFBQTtJQUNBLHlCQUFBO0VBeUJGO0FBQ0Y7QUF4QkU7O0VBRUUsWUFBQTtBQTBCSjtBQXRCQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBS0EseUJBQUE7QUFxQkY7QUR6QkU7RUNORjtJQU9JLFVBQUE7SUFDQSxrQkFBQTtFQTRCRjtBQUNGO0FBekJFO0VBQ0UsWUFBQTtBQTJCSjtBQXpCRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBMkJKO0FBekJFO0VBQ0UsWUFBQTtBQTJCSjtBQXhCQTs7RUFFRSxpQkFBQTtBQTJCRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyby1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xyXG4gIH1cclxufVxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgRU5EKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmhlcm8tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xuLnRpdGxlcyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50aXRsZXMge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcbiAgfVxufVxuLnRpdGxlcyBoMSxcbi50aXRsZXMgcCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIG1hcmdpbjogMTAwcHggMTByZW0gMTAwcHggYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBmb3JtIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMTAwcHggYXV0bztcbiAgfVxufVxuZm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cbmZvcm0gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class HomeComponent {
    constructor() { }
    ngOnInit() { }
    downloadCV() {
        window.open('/assets/CV/CV-Antonij-Djajkoski.pdf');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "home-section"], ["data-aos", "fade-up", 1, "headings-section"], [1, "h1", "mb-5", "pb-4"], [1, "h6"], [1, "p"], ["mat-raised-button", "", 3, "click"], ["data-aos", "fade", 1, "personal-container"], ["data-aos", "fade-down", 1, "h2", "text-center", "mb-5", "pb-4"], [1, "iframe-img-container"], ["data-aos", "fade-right", 1, "iframe-container"], ["src", "https://open.spotify.com/embed/playlist/37i9dQZF1Epk309bc2nkAx", "width", "300", "height", "380", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media"], ["data-aos", "fade-down", "data-aos-duration", "1000", 1, "img-container"], ["src", "/assets/images/dzajko.jpg", "alt", "Antonij Djajkoski", 1, "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Antonij Djajkoski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Technology enthusiast. Will consume all gummy bears in the vicinity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.downloadCV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Personal Stuff? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".flex-column-center[_ngcontent-%COMP%], .iframe-container[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nsection.home-section[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 100px 0 250px 0;\n  overflow-x: hidden;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section.home-section[_ngcontent-%COMP%] {\n    margin: 100px 0;\n  }\n}\n.headings-section[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 70%;\n  margin-right: auto;\n  margin-left: 5rem;\n  text-align: center;\n  border-radius: 25px;\n  padding: 15px;\n  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.3);\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .headings-section[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n}\n.headings-section[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.headings-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.headings-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: #24292e;\n}\n.headings-section[_ngcontent-%COMP%]   h6.h6[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.img-container[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  box-shadow: -3px 3px 5px 0 rgba(0, 0, 0, 0.3);\n  width: 400px;\n}\n@media only screen and (max-width: 600px) {\n  .img-container[_ngcontent-%COMP%] {\n    width: 200px;\n    margin: 2rem auto 0 auto;\n  }\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 400px;\n  border-radius: 50%;\n}\n@media only screen and (max-width: 600px) {\n  .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n}\n.personal-container[_ngcontent-%COMP%] {\n  margin: 100px 10rem 0 10rem;\n  border-radius: 15px;\n  padding: 2rem;\n  background-color: #24292e;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .personal-container[_ngcontent-%COMP%] {\n    margin: 100px auto 0 auto;\n    width: 90%;\n  }\n}\n.personal-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  position: relative;\n}\n.personal-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.iframe-img-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .iframe-img-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREVBO0VBQ0UsbURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ0NGO0FEQUU7RUFORjtJQU9JLHNCQUFBO0VDR0Y7QUFDRjtBRERBLDBCQUFBO0FBRUEsc0JBQUE7QUFvQ0EseUJBQUE7QUN0REE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUF1QkY7QURERTtFQ3pCRjtJQUtJLGVBQUE7RUF5QkY7QUFDRjtBQXRCQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFLQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0FBcUJGO0FEakJFO0VDaEJGO0lBTUksVUFBQTtJQUNBLFlBQUE7RUErQkY7QUFDRjtBQTFCRTtFQUNFLFlBQUE7QUE0Qko7QUExQkU7RUFDRSxrQkFBQTtBQTRCSjtBQTFCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQTRCSjtBQTFCRTtFQUNFLGNBQUE7QUE0Qko7QUF6QkE7RUFDRSxrQkFBQTtFQUNBLDZDQUFBO0VBRUEsWUFBQTtBQTJCRjtBRHBERTtFQ3FCRjtJQU1JLFlBQUE7SUFDQSx3QkFBQTtFQTZCRjtBQUNGO0FBNUJFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBOEJKO0FEOURFO0VDOEJBO0lBSUksWUFBQTtFQWdDSjtBQUNGO0FBMUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUE2Qko7QUF6QkE7RUFDRSwyQkFBQTtFQUtBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBd0JGO0FEMUVFO0VDMENGO0lBR0kseUJBQUE7SUFDQSxVQUFBO0VBaUNGO0FBQ0Y7QUE3QkU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBK0JKO0FBN0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBK0JKO0FBM0JBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBOEJGO0FEbEdFO0VDa0VGO0lBSUksY0FBQTtFQWdDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgfVxyXG59XHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5pZnJhbWUtY29udGFpbmVyLCAuaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyby1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIC5oZXJvLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XG4gIH1cbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIEVORCovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgRU5EKi9cbnNlY3Rpb24uaG9tZS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwMHB4IDAgMjUwcHggMDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHNlY3Rpb24uaG9tZS1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDEwMHB4IDA7XG4gIH1cbn1cblxuLmhlYWRpbmdzLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGVhZGluZ3Mtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbn1cbi5oZWFkaW5ncy1zZWN0aW9uIGJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5oZWFkaW5ncy1zZWN0aW9uIGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRpbmdzLXNlY3Rpb24gaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG4uaGVhZGluZ3Mtc2VjdGlvbiBoNi5oNiB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogLTNweCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB3aWR0aDogNDAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAycmVtIGF1dG8gMCBhdXRvO1xuICB9XG59XG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltZy1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cblxuLmlmcmFtZS1jb250YWluZXIgaWZyYW1lIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5wZXJzb25hbC1jb250YWluZXIge1xuICBtYXJnaW46IDEwMHB4IDEwcmVtIDAgMTByZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnBlcnNvbmFsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMDBweCBhdXRvIDAgYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4ucGVyc29uYWwtY29udGFpbmVyIGgyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wZXJzb25hbC1jb250YWluZXIgaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5pZnJhbWUtaW1nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pZnJhbWUtaW1nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/not-found/not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/"]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 8, vars: 2, consts: [["data-aos", "fade-up"], ["mat-raised-button", "", 3, "routerLink"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sorry, whatever you were looking for is not here...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 50vh;\n}\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  border-radius: 25px;\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.8);\n  width: 50%;\n  padding: 2rem;\n  margin: 100px auto;\n}\nsection[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBTkY7SUFPSSxzQkFBQTtFQ0dGO0FBQ0Y7QUREQSwwQkFBQTtBQUVBLHNCQUFBO0FBb0NBLHlCQUFBO0FDdERBO0VBQ0UsZ0JBQUE7QUF1QkY7QUF0QkU7RUFFRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBdUJKO0FBdEJJO0VBQ0UsWUFBQTtBQXdCTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhlcm8tYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcclxuICB9XHJcbn1cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIEVORCovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zIEVORCovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgc2VjdGlvbiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlcm8tYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21haW4tYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE5MjBweCkge1xuICAuaGVyby1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMHZ3O1xuICB9XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zIEVORCovXG5zZWN0aW9uIHtcbiAgbWluLWhlaWdodDogNTB2aDtcbn1cbnNlY3Rpb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xufVxuc2VjdGlvbiBkaXYgYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/portfolio/portfolio.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/portfolio/portfolio.component.ts ***!
  \*******************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 28, vars: 0, consts: [[1, "portfolio-section"], ["data-aos", "fade-up", 1, "project", "project-one", "prvo-child"], [1, "h2", "pb-4", "mb-5"], [1, "img-container", "bg-dark", "prvo-dete"], ["src", "http://ouidiscofilms.com/storage/app/media/oui.svg", "alt", "Oui Disco Films", 1, "img-fluid"], [1, "project-description", "p"], ["href", "http://ouidiscofilms.com/", "target", "_blank", "mat-raised-button", "", 1, "td-none"], ["data-aos", "fade-up", 1, "project", "project-two"], [1, "img-container", "bg-light"], ["src", "http://thesubmarineproject.s3-website.eu-central-1.amazonaws.com/assets/submarine.png", "alt", "The Submarine Project", 1, "png-img", "img-fluid"], ["href", "http://thesubmarineproject.s3-website.eu-central-1.amazonaws.com/", "mat-raised-button", "", "color", "accent", "target", "_blank"], ["data-aos", "fade-up", 1, "project", "project-one"], [1, "img-container", "bg-dark"], ["src", "https://www.onlygfx.com/wp-content/uploads/2018/04/coming-soon-stamp-1.png", "alt", "Ascension", 1, "png-img", "img-fluid"], ["mat-raised-button", ""]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Oui Disco Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " My very first page! Oui Disco Films is a film producing company from Perth, Australia, and their site was developed using OctoberCMS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The Submarine Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The Submarine Project is a joint effort from me and some of my friends aimed at uncovering the daily lives for employees in their respective companies. The project was created using Angular as the UI's main power source, with Google's Firebase currently substituting for a backend until our custom Node.JS backend is implemented. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Check it out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ascension - COMING SOON!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Ascension is imagined as an interactive web experience using React.js and Three.js. It tells the story of Ayrenn, a character whose story has been 10 years in the making. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Keep an eye out!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: [".flex-column-center[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.hero-background[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/main-bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n@media only screen and (min-width: 1920px) {\n  .hero-background[_ngcontent-%COMP%] {\n    background-size: 100vw;\n  }\n}\n\n\n\nsection.portfolio-section[_ngcontent-%COMP%] {\n  margin: 100px 10rem 100px 10rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section.portfolio-section[_ngcontent-%COMP%] {\n    margin: 100px 0;\n  }\n}\n.project[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 15px;\n  padding: 2rem;\n  width: 70%;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .project[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.project[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .project[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: auto;\n}\n.project.project-one[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.project.project-one[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  background-color: #24292e;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .project.project-one[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n  }\n}\n.project.project-two[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  color: whitesmoke;\n  margin: 100px 0 100px auto;\n}\n.project.project-two[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  background-color: whitesmoke;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .project.project-two[_ngcontent-%COMP%] {\n    margin: 200px 1rem 150px auto;\n  }\n}\n.img-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15%;\n  right: 10%;\n  border-radius: 50%;\n  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.6);\n  width: 150px;\n  height: 150px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .img-container[_ngcontent-%COMP%] {\n    top: -30%;\n    right: 1%;\n  }\n}\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n}\n.img-container[_ngcontent-%COMP%]   .png-img[_ngcontent-%COMP%] {\n  width: 110px;\n  height: auto;\n}\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: #24292e;\n  top: -20%;\n  right: 2%;\n}\n@media only screen and (max-width: 600px) {\n  .bg-dark[_ngcontent-%COMP%] {\n    top: -25%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .bg-dark.prvo-dete[_ngcontent-%COMP%] {\n    top: -32%;\n  }\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  right: 2%;\n}\n@media only screen and (max-width: 600px) {\n  .bg-light[_ngcontent-%COMP%] {\n    top: -20%;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  position: relative;\n}\nh2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n@media only screen and (max-width: 600px) {\n  .prvo-child[_ngcontent-%COMP%] {\n    margin-top: 150px;\n  }\n}\n.td-none[_ngcontent-%COMP%]:hover {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9faW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURFQTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUNDRjtBREFFO0VBTkY7SUFPSSxzQkFBQTtFQ0dGO0FBQ0Y7QUREQSwwQkFBQTtBQUVBLHNCQUFBO0FBb0NBLHlCQUFBO0FDdERBO0VBQ0UsK0JBQUE7QUF1QkY7QURDRTtFQ3pCRjtJQUdJLGVBQUE7RUF5QkY7QUFDRjtBQXRCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQXlCRjtBRFhFO0VDbEJGO0lBTUksVUFBQTtFQTJCRjtBQUNGO0FBMUJFOztFQUVFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQTRCSjtBQXhCQTtFQUNFLDRCQUFBO0FBMkJGO0FBMUJFO0VBQ0UseUJBQUE7QUE0Qko7QUQ3QkU7RUNGRjtJQU1JLGlCQUFBO0VBNkJGO0FBQ0Y7QUExQkE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBSUEsMEJBQUE7QUEwQkY7QUE3QkU7RUFDRSw0QkFBQTtBQStCSjtBRDNDRTtFQ1FGO0lBUUksNkJBQUE7RUErQkY7QUFDRjtBQTVCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUErQkY7QUQxREU7RUNvQkY7SUFVSSxTQUFBO0lBQ0EsU0FBQTtFQWdDRjtBQUNGO0FBL0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFpQ0o7QUEvQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQWlDSjtBQTdCQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFnQ0Y7QURuRkU7RUNnREY7SUFLSSxTQUFBO0VBa0NGO0FBQ0Y7QUR4RkU7RUN5REY7SUFFSSxTQUFBO0VBa0NGO0FBQ0Y7QUEvQkE7RUFDRSw0QkFBQTtFQUNBLFNBQUE7QUFrQ0Y7QURuR0U7RUMrREY7SUFJSSxTQUFBO0VBb0NGO0FBQ0Y7QUFqQ0E7RUFDRSxrQkFBQTtBQW9DRjtBQWpDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFvQ0Y7QURySEU7RUNvRkY7SUFFSSxpQkFBQTtFQW9DRjtBQUNGO0FBakNBO0VBQ0UsaUJBQUE7QUFvQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFpbi1iZy5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwdnc7XHJcbiAgfVxyXG59XHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBFTkQqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZXJvLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tYWluLWJnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmhlcm8tYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDB2dztcbiAgfVxufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgRU5EKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKiBSZXNwb25zaXZlIE1peGlucyBFTkQqL1xuc2VjdGlvbi5wb3J0Zm9saW8tc2VjdGlvbiB7XG4gIG1hcmdpbjogMTAwcHggMTByZW0gMTAwcHggMTByZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbi5wb3J0Zm9saW8tc2VjdGlvbiB7XG4gICAgbWFyZ2luOiAxMDBweCAwO1xuICB9XG59XG5cbi5wcm9qZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAycmVtO1xuICB3aWR0aDogNzAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9qZWN0IHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4ucHJvamVjdCBidXR0b24sXG4ucHJvamVjdCBhIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucHJvamVjdC5wcm9qZWN0LW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4ucHJvamVjdC5wcm9qZWN0LW9uZSBoMjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjkyZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJvamVjdC5wcm9qZWN0LW9uZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIH1cbn1cblxuLnByb2plY3QucHJvamVjdC10d28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyOTJlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgbWFyZ2luOiAxMDBweCAwIDEwMHB4IGF1dG87XG59XG4ucHJvamVjdC5wcm9qZWN0LXR3byBoMjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJvamVjdC5wcm9qZWN0LXR3byB7XG4gICAgbWFyZ2luOiAyMDBweCAxcmVtIDE1MHB4IGF1dG87XG4gIH1cbn1cblxuLmltZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1JTtcbiAgcmlnaHQ6IDEwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5pbWctY29udGFpbmVyIHtcbiAgICB0b3A6IC0zMCU7XG4gICAgcmlnaHQ6IDElO1xuICB9XG59XG4uaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTEwcHg7XG59XG4uaW1nLWNvbnRhaW5lciAucG5nLWltZyB7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYmctZGFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gIHRvcDogLTIwJTtcbiAgcmlnaHQ6IDIlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYmctZGFyayB7XG4gICAgdG9wOiAtMjUlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJnLWRhcmsucHJ2by1kZXRlIHtcbiAgICB0b3A6IC0zMiU7XG4gIH1cbn1cblxuLmJnLWxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgcmlnaHQ6IDIlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYmctbGlnaHQge1xuICAgIHRvcDogLTIwJTtcbiAgfVxufVxuXG5oMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBydm8tY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xuICB9XG59XG5cbi50ZC1ub25lOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");




























class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]
                ],
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class SharedService {
    constructor() {
        this.requestStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    emitNewRequestStatus(value) {
        this.requestStatus.next(value);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    userID: 'user_Afw9jNkzRTcnXixfwLj7x',
    accessToken: 'fc87776b7e45f5d45a6aa8eab28e70ad'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WorkSpace\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map