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
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/my-account/my-account.component */ "./src/app/components/pages/my-account/my-account.component.ts");
/* harmony import */ var _shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth-guard.guard */ "./src/app/shared/auth-guard.guard.ts");









const routes = [
    { path: '', component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { animationState: 'Home' } },
    {
        path: 'about',
        component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        data: { animationState: 'About' }
    },
    {
        path: 'contact',
        component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
        data: { animationState: 'Contact' }
    },
    {
        path: 'my-account',
        component: _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"],
        data: { animationState: 'About' },
        canActivate: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuardGuard"]]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
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
/* harmony import */ var _shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animations */ "./src/app/shared/animations.ts");
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");








function AppComponent_app_login_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clMod", function AppComponent_app_login_7_Template_app_login_clMod_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closeModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'TSP';
        this.shouldModalOpen = false;
    }
    ngOnInit() { }
    openModalFunction(event) {
        this.shouldModalOpen = event;
    }
    closeModal(event) {
        this.shouldModalOpen = event;
    }
    prepareRoute(outlet) {
        return (outlet &&
            outlet.activatedRouteData &&
            outlet.activatedRouteData['animationState']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], inputs: { openModal: "openModal" }, decls: 8, vars: 2, consts: [[3, "openModal"], ["outlet", "outlet"], [3, "clMod", 4, "ngIf"], [3, "clMod"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openModal", function AppComponent_Template_app_navbar_openModal_1_listener($event) { return ctx.openModalFunction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_login_7_Template, 1, 0, "app-login", 2);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);
    } }, directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]], styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-color: #512da8;\n}\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 black;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #f0f2f5;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UseUJBQUE7QURRRjtBQ0xBO0VBQ0UsMkJBQUE7QURRRjtBQ0xBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBRFFGO0FDTEE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QURPRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIGFwcC1sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyZGE4O1xufVxuXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgYmxhY2s7XG59XG5cbm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xufVxuXG5hcHAtbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyMDtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIkBpbXBvcnQgJy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxMmRhODtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgZ2V0Q29sb3IoYm94LXNoYWRvdy1jb2xvcik7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcclxufVxyXG5cclxuYXBwLWxvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAyMDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"], data: { animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
            }]
    }], function () { return []; }, { openModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ "./src/app/components/layout/navbar/navbar.component.ts");
/* harmony import */ var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home/home.component */ "./src/app/components/pages/home/home.component.ts");
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/about/about.component */ "./src/app/components/pages/about/about.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/material/material.module */ "./src/app/modules/material/material.module.ts");
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ "./src/app/components/pages/contact/contact.component.ts");
/* harmony import */ var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/login/login.component */ "./src/app/components/pages/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/reviews/review-element/review-element.component */ "./src/app/components/reviews/review-element/review-element.component.ts");
/* harmony import */ var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/my-account/my-account.component */ "./src/app/components/pages/my-account/my-account.component.ts");
/* harmony import */ var _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/companies/companies.component */ "./src/app/components/pages/companies/companies.component.ts");















// <Firebase Imports>



// </Firebase Imports>







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"],
        _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"],
        _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                    _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"],
                    _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"],
                    _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
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
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A9 The Submarine Team | 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 0;\n  background-color: #949494;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBRTdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FEUUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xuICBjb2xvcjogYmxhY2s7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4od2hpdGUsIDQyJSk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = ["hamTop"];
const _c1 = ["hamBot"];
const _c2 = ["navBrand"];
const _c3 = ["overlay"];
const _c4 = ["subLogo"];
const _c5 = function () { return ["/"]; };
const _c6 = function () { return ["/my-account"]; };
const _c7 = function () { return ["/about"]; };
const _c8 = function () { return ["/contact"]; };
class NavbarComponent {
    constructor(formBuilder, auth) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.openModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginForm = this.formBuilder.group({
            email: '',
            password: 'password'
        });
    }
    ngOnInit() { }
    onSubmit(loginData) {
        this.auth.signIn(loginData.email, loginData.password);
        this.loginForm.reset();
    }
    toggleOverlay() {
        this.subLogo.nativeElement.classList.toggle('v-none');
        this.navBrand.nativeElement.classList.toggle('brand-fixed');
        this.hamTop.nativeElement.classList.toggle('open');
        this.hamBot.nativeElement.classList.toggle('open');
        this.overlay.nativeElement.classList.toggle('h-100');
    }
    triggerModal() {
        this.openModal.emit(true);
    }
    checkMyAccount() {
        this.auth.authStateTrack().then(response => {
            if (response) {
                this.toggleOverlay();
            }
            else {
                this.triggerModal();
                this.toggleOverlay();
            }
        });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamTop = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamBot = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navBrand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subLogo = _t.first);
    } }, outputs: { openModal: "openModal" }, decls: 27, vars: 10, consts: [[1, "navbar", "d-flex"], [1, "navbar-brand", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo", "d-none", "d-lg-block"], ["id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay"], ["overlay", ""], [1, "overlay-content"], [1, "overlay-link", 3, "routerLink", "click"], [1, "fa", "fa-home", "mr-2"], [1, "fa", "fa-user", "mr-2"], [1, "fa", "fa-question", "mr-2"], [1, "fa", "fa-phone", "mr-2"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.toggleOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_11_listener() { return ctx.triggerModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() { return ctx.toggleOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() { return ctx.checkMyAccount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() { return ctx.toggleOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() { return ctx.toggleOverlay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c8));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nnav[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.75);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\nform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n  width: 150px;\n}\n.brand-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  margin-top: 1rem;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 0;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: black;\n  overflow: hidden;\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 300px;\n  margin: 30px auto 0 auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  position: relative;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 2px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: whitesmoke;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  cursor: pointer;\n}\n.v-none[_ngcontent-%COMP%] {\n  margin-left: calc(950%);\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBRTdCQTtFQUNFLFdBQUE7QURRRjtBQ05BO0VBQ0Usc0RBQUE7QURTRjtBQ05BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEU0Y7QUNSRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEVUo7QUNSRTtFQUNFLFFBQUE7QURVSjtBQ1JFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QURVSjtBQ1BFOztFQUVFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRFNKO0FDUEU7RUFDRSx5QkFBQTtBRFNKO0FDSkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FET0o7QUNIQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QURNRjtBQ0pBO0VBQ0UsY0FBQTtBRE9GO0FDTEE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FEUUY7QUNOQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QURTRjtBQ05BO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEU0Y7QUNQRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBRFNKO0FDTEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRE9KO0FDTEU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QURPSjtBQ0xFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRE9KO0FDTEU7O0VBRUUsY0FBQTtBRE9KO0FDSkU7RUFDRTtJQUNFLGVBQUE7RURNSjtBQUNGO0FDRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURLRjtBQ0ZBO0VBQ0UsdUJBQUE7QURLRjtBQ0ZBOztFQUVFLGlCQUFBO0FES0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzVweDtcbn1cblxubmF2IHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS50b3Age1xuICB0b3A6IDE4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuZm9ybSBidXR0b24uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5icmFuZC1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4jc3ViLXRvLWhvbWUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC40NXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmhvdmVyLFxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5vdmVybGF5IC5vdmVybGF5LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4jZmEtZmEtdXNlciB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52LW5vbmUge1xuICBtYXJnaW4tbGVmdDogY2FsYyg5NTAlKTtcbn1cblxuI2VtYWlsLWxvZ2luLWlucHV0LFxuI2VtYWlsLWxvZ2luLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmltZy1sb2dvIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5uYXYge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogNzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLmhhbWJ1cmdlci1saW5lIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcCB7XHJcbiAgICB0b3A6IDE4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxyXG4gIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0b3A6IDQ4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBidXR0b24uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJhbmQtZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuI3N1Yi10by1ob21lIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuI3N1Yi10by1ob21lOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjQ1cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWxpbms6aG92ZXIsXHJcbiAgLm92ZXJsYXktbGluazpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLm92ZXJsYXktbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNmYS1mYS11c2VyIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnYtbm9uZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoOTUwJSk7XHJcbn1cclxuXHJcbiNlbWFpbC1sb2dpbi1pbnB1dCxcclxuI2VtYWlsLWxvZ2luLWlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, { hamTop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hamTop', { static: false }]
        }], hamBot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['hamBot', { static: false }]
        }], navBrand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['navBrand', { static: false }]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['overlay', { static: false }]
        }], subLogo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['subLogo', { static: false }]
        }], openModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AboutComponent_section_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.teamMemberTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.teamMemberText);
} }
class AboutComponent {
    constructor() {
        this.showInfo = false;
    }
    ngOnInit() { }
    toggleInfo() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 30, vars: 1, consts: [[1, "about-page"], [1, "intro-section"], [1, "title", "page-title"], [1, "title"], [1, "team-section", "pt-0"], [1, "row", "upper"], [1, "member-img-container", "col-6", "col-lg-3"], ["src", "/assets/submarine.png", "alt", "Djajko", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Vane", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Babu6o", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Ivana", 1, "img-fluid", 3, "click"], [1, "row", "lower"], ["src", "/assets/submarine.png", "alt", "Blagio", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Jovica", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Matej", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Damjan", 1, "img-fluid", 3, "click"], ["class", "rendered-bio", 4, "ngIf"], [1, "rendered-bio"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Submarine Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are a group of students at the SEDC academy. This project is our effort to dive into the secrets companies may keep. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " There are very few ways of finding out how it's like to actually work at a company. We aim to rectify that problem by providing a platform where users can share their stories, anonymously. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The Submarine Project Team Members:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_13_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_15_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_17_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_19_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_22_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_24_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_26_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_28_listener() { return ctx.toggleInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AboutComponent_section_29_Template, 5, 2, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.about-page[_ngcontent-%COMP%] {\n  background: #fafafa;\n  background: linear-gradient(180deg, #fafafa 0%, rgba(0, 0, 0, 0.3) 100%);\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem;\n  margin-bottom: 0;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.team-section[_ngcontent-%COMP%] {\n  padding: 2rem 5rem;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%] {\n  margin: 2rem;\n  padding: 2rem;\n  position: relative;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 3px 0;\n  margin: auto;\n  width: 150px;\n  transition: 0.4s;\n  transform: scale(1);\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  transform: scale(1.1);\n}\nsection.team-section[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  top: -10%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\nsection.team-section[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  bottom: -20%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsbUJBQUE7RUFDQSx3RUFBQTtBRFFGO0FDSEU7RUFDRSxhQUFBO0FES0o7QUNKSTtFQUNFLGtCQUFBO0FETU47QUNKSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FETU47QUNKSTtFQUNFLG1CQUFBO0FETU47QUNGQTtFQUNFLGtCQUFBO0FES0Y7QUNIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURLSjtBQ0pJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURNTjtBQ0xNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURPUjtBQ0pNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRE1SO0FDREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBREdKO0FDQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBREVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDAsIDAsIDAsIDAuMykgMTAwJSk7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUucGFnZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3cge1xuICBtYXJnaW46IDJyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93IC5tZW1iZXItaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93IC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdyAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIC51cHBlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiAubG93ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3R0b206IC0yMCU7XG4gIGxlZnQ6IDIxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5hYm91dC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgcmdiYSgyNTAsIDI1MCwgMjUwLCAxKSAwJSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAxMDAlXHJcbiAgKTtcclxuICAuaW50cm8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLnBhZ2UtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5zZWN0aW9uLnRlYW0tc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG5cclxuICBzZWN0aW9uLnJvdyB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1lbWJlci1pbWctY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3hTaGFkb3dDb2xvcik7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWctZmx1aWQ6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXBwZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgbGVmdDogMjElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLmxvd2VyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogLTIwJTtcclxuICAgIGxlZnQ6IDIxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/companies/companies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/companies/companies.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CompaniesComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) { return new (t || CompaniesComponent)(); };
CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesComponent, selectors: [["app-companies"]], decls: 2, vars: 0, template: function CompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "companies works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                templateUrl: './companies.component.html',
                styleUrls: ['./companies.component.scss']
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





class ContactComponent {
    constructor(toastrService) {
        this.toastrService = toastrService;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        const contactName = '';
        const contactEmail = '';
        const contactMessage = '';
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactMessage, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onSubmitContactForm() {
        this.contactForm.reset();
        this.toastrService.info('Feature coming soon!');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 24, vars: 2, consts: [[1, "contact-page-wrapper"], [1, "main-contact"], [1, "contact-form"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "required", "", "placeholder", "FULL NAME"], ["formControlName", "email", "type", "email", "required", "", "placeholder", "EMAIL ADDRESS"], ["name", "message", "required", "", "cols", "30", "rows", "5", "formControlName", "message", "placeholder", "MESSAGE"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], [1, "contact-address"], [1, "content"], [1, "fa", "fa-map-marker", "mr-2"], [1, "fa", "fa-envelope", "mr-2"], [1, "fa", "fa-volume-control-phone", "mr-2"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send Us A Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmitContactForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Reach us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " 512 Main St, West Yarmouth, MA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " submarine@mail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " (666) 678-4590");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  padding: 8% 0;\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: #343a40;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.btn.btn-dark[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: #666666;\n  background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #dddddd;\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsYUFBQTtBRFFGO0FDTEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1QkFBQTtBRFFGO0FDTEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRFFGO0FDTEE7RUFDRSxlQUFBO0FEUUY7QUNMQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FEUUY7QUNMQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEUUY7QUNMQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRFFGO0FDTEE7O0VBRUUscUNBQUE7RUFDQSxxQkFBQTtBRFFGO0FDTEE7RUFFRSxlQUFBO0FEUUY7QUNWQTtFQUVFLGVBQUE7QURRRjtBQ1ZBO0VBRUUsZUFBQTtBRFFGO0FDVkE7O0VBRUUsZUFBQTtBRFFGO0FDTEE7RUFDRSxZQUFBO0FEUUY7QUNMQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7QURRRjtBQ0RBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QURJRjtBQ0RBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FESUY7QUNEQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRElGO0FDREE7RUFDRTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RURJRjs7RUNEQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VESUY7O0VDREE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURJRjs7RUNEQTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFRElGOztFQ0RBO0lBQ0UsYUFBQTtFRElGOztFQ0RBO0lBQ0UsY0FBQTtFRElGO0FBQ0Y7QUNEQTs7RUFFRSxxQkFBQTtBREdGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi5jb250YWN0LXBhZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmc6IDglIDA7XG59XG5cbi5tYWluLWNvbnRhY3Qge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA2NSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhY3QtZm9ybSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDVweCAwIDE3cHggMDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnRuLmJ0bi1kYXJrIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM2NjY2NjYgMCUsICMzNDNhNDAgNDIlKTtcbn1cblxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jb250ZW50IHAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLWNvbnRhY3Qge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiB1bnNldDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XG4gICAgZmxvYXQ6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudCBwIHtcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgfVxufVxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5jb250YWN0LXBhZ2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZzogOCUgMDtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZhIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiA1cHggMCAxN3B4IDA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDpmb2N1cyxcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1kYXJrIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTYzZGVnLFxyXG4gICAgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKSAwJSxcclxuICAgIHJnYmEoNTIsIDU4LCA2NCwgMSkgNDIlXHJcbiAgKTtcclxufVxyXG5cclxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCBoMSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbi1jb250YWN0IHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgaDEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHAge1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reviews/review-element/review-element.component */ "./src/app/components/reviews/review-element/review-element.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");










function HomeComponent_app_review_element_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-review-element", 12);
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reviewElement", review_r2);
} }
function HomeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You need to create an account first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_16_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSubmit(ctx_r3.authForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign Up ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.authForm);
} }
class HomeComponent {
    constructor(toastr, formBuilder, auth) {
        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.listOfReviews = [];
        this.loggedIn = false;
        this.authForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
        this.listOfReviews = [
            {
                companyName: 'Telekom',
                imagePath: '/assets/submarine.png',
                CompanyRating: 2,
                reviewId: '1',
                textExcerpt: 'lorem ipsum ke se farbam rozov',
                timeStamp: '15 minutes ago',
                userName: '69420'
            },
            {
                companyName: 'Endava',
                imagePath: '/assets/submarine.png',
                CompanyRating: 2,
                reviewId: '1',
                textExcerpt: 'Bojana i pizza, untold love story',
                timeStamp: '5 minutes ago',
                userName: '69420'
            },
            {
                companyName: 'Telekom',
                imagePath: '/assets/submarine.png',
                CompanyRating: 2,
                reviewId: '1',
                textExcerpt: 'lorem ipsum ke se farbam rozov',
                timeStamp: '15 minutes ago',
                userName: '69420'
            },
            {
                companyName: 'Telekom',
                imagePath: '/assets/submarine.png',
                CompanyRating: 2,
                reviewId: '1',
                textExcerpt: 'lorem ipsum ke se farbam rozov',
                timeStamp: '15 minutes ago',
                userName: '69420'
            },
            {
                companyName: 'Telekom',
                imagePath: '/assets/submarine.png',
                CompanyRating: 2,
                reviewId: '1',
                textExcerpt: 'lorem ipsum ke se farbam rozov',
                timeStamp: '15 minutes ago',
                userName: '69420'
            }
        ];
    }
    checkIfLoggedIn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loggedIn = yield this.auth.authStateTrack();
        });
    }
    onSubmit(authData) {
        this.auth.signUp(authData.email, authData.password);
        this.authForm.reset();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 17, vars: 2, consts: [[1, "filter-options", "py-3", "d-flex", "justify-content-center", "w-100"], ["name", "options", "id", "filter-options", 1, "form-control", "bg-light"], ["value", "City"], ["value", "Country"], ["value", "Rating"], [1, "btn", "filter-btn"], [1, "d-flex", "justify-content-between"], [1, "main-section", "w-100", "w-lg-75", "mr-3"], [1, "py-5"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "account-controls", "d-none", "d-lg-block"], ["class", "account-wrapper", 4, "ngIf"], [1, "my-3", 3, "reviewElement"], [1, "account-wrapper"], [1, "avatar-wrapper"], ["src", "/assets/submarine.png", "alt", "User Avatar", 1, "img-fluid", "mt-5"], [1, "dropdown-divider", "mx-3"], [1, "text-center", "my-3"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["type", "submit", "id", "signup-btn-home", 1, "btn", "btn-dark", "mx-auto", "d-block"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Latest Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_app_review_element_14_Template, 1, 1, "app-review-element", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "aside", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeComponent_div_16_Template, 19, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_6__["ReviewElementComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], styles: [".flex-column-center[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: black;\n  position: relative;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 20%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: black;\n}\naside[_ngcontent-%COMP%] {\n  margin: 3rem 3rem 0 0;\n  padding: 3rem;\n  padding-top: 0;\n  box-shadow: 0 0 5px 0 #333333;\n  width: 25%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\naside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: auto;\n}\naside[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\naside[_ngcontent-%COMP%]   h4.text-center[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filter-options[_ngcontent-%COMP%] {\n  background: #f6f3f3;\n  box-shadow: 0 0 3px 0 black;\n}\n.filter-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 10px;\n}\n.filter-options[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #212121;\n  color: #ffffff;\n}\n#signin-btn-home[_ngcontent-%COMP%], #signup-btn-home[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\napp-review-element[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsZ0JBQUE7QURRRjtBQ0xFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FET0o7QUNKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBRE1KO0FDRkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FES0Y7QUNIRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBREtKO0FDRkk7RUFDRSxZQUFBO0FESU47QUNERTtFQUNFLGVBQUE7QURHSjtBQ0NBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBREVGO0FDREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBREdKO0FDQ0E7O0VBRUUsaUJBQUE7QURFRjtBQ0NBO0VBQ0UsVUFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBhc2lkZSwgLm1haW4tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4ubWFpbi1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLXNlY3Rpb24gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1zZWN0aW9uIGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5hc2lkZSB7XG4gIG1hcmdpbjogM3JlbSAzcmVtIDAgMDtcbiAgcGFkZGluZzogM3JlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCAjMzMzMzMzO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuYXNpZGUgLmltZy1mbHVpZCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbmFzaWRlIC5idG4tZ3JvdXAgLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbn1cbmFzaWRlIGg0LnRleHQtY2VudGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmlsdGVyLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjZmM2YzO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgYmxhY2s7XG59XG4uZmlsdGVyLW9wdGlvbnMgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZpbHRlci1vcHRpb25zIC5idG4ge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jc2lnbmluLWJ0bi1ob21lLFxuI3NpZ251cC1idG4taG9tZSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5hcHAtcmV2aWV3LWVsZW1lbnQge1xuICB3aWR0aDogODAlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGdldEZvbnRTaXplKGgxKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG5hc2lkZSB7XHJcbiAgbWFyZ2luOiAzcmVtIDNyZW0gMCAwO1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwICMzMzMzMzM7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICAuaW1nLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuYnRuLWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGg0LnRleHQtY2VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9ucyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0NiwgMjQzLCAyNDMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4jc2lnbmluLWJ0bi1ob21lLFxyXG4jc2lnbnVwLWJ0bi1ob21lIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuYXBwLXJldmlldy1lbGVtZW50IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/pages/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pages/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["logiRegi"];
function LoginComponent_main_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onRegisterFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onLoginFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot your password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Welcome Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.triggerLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Log in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Don't have an account yet?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.triggerRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_i_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r17.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.registerForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r17.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r17.loginForm.valid);
} }
const _c1 = function () { return ["/my-account"]; };
function LoginComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Log Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class LoginComponent {
    constructor(auth, toastrService, router) {
        this.auth = auth;
        this.toastrService = toastrService;
        this.router = router;
        this.clMod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.auth
            .authStateTrack()
            .then(response => {
            this.isLoggedIn = response;
        }, errRes => {
            this.toastrService.error(errRes.message, 'Error.');
        })
            .catch(errorRes => {
            this.toastrService.error(errorRes.message, 'Error.');
        });
        this.initLoginForm();
        this.initRegisterForm();
        this.router.events.subscribe(eventChange => {
            if (eventChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.closeModal();
            }
        });
    }
    initRegisterForm() {
        const eMail = '';
        const passWord = '';
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](eMail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passWord, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onRegisterFormSubmit() {
        this.auth
            .signUp(this.registerForm.value.registerEmail, this.registerForm.value.registerPassword)
            .catch(error => {
            this.toastrService.error(error.message, 'An error has occurred.');
        });
        this.closeModal();
    }
    initLoginForm() {
        const userName = '';
        const eMail = '';
        const passWord = '';
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            registerUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](userName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            registerEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](eMail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            registerPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passWord, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onLoginFormSubmit() {
        this.auth
            .signIn(this.loginForm.value.email, this.loginForm.value.password)
            .then(response => {
            this.toastrService.success('You have been logged in.', 'Success!');
        })
            .catch(error => {
            this.toastrService.error(error.message, 'An error has occurred.');
        });
        this.closeModal();
    }
    triggerLogin() {
        this.logiRegi.nativeElement.classList.remove('panel-active');
    }
    triggerRegister() {
        this.logiRegi.nativeElement.classList.add('panel-active');
    }
    logOut() {
        this.auth.signOut();
        this.clMod.emit(false);
    }
    closeModal() {
        this.clMod.emit(false);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.logiRegi = _t.first);
    } }, outputs: { clMod: "clMod" }, decls: 2, vars: 2, consts: [["class", "henlo", 4, "ngIf"], [4, "ngIf"], [1, "henlo"], ["id", "logiRegiContainer", 1, "login-register"], ["logiRegi", ""], [1, "form-container", "register-container"], [3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "registerUserName", "required", "", "placeholder", "Username"], ["type", "email", "formControlName", "registerEmail", "required", "", "placeholder", "Email"], ["formControlName", "registerPassword", "type", "password", "required", "", "id", "passwordInput", "placeholder", "Password"], [1, "btn", "btn-dark", 3, "disabled"], [1, "form-container", "login-container"], ["type", "email", "formControlName", "email", "required", "", "placeholder", "Email"], ["type", "password", "formControlName", "password", "required", "", "placeholder", "Password"], ["href", "#"], [1, "overlay-container"], [1, "overlay-wrapper"], [1, "overlay-panel", "overlay-login"], ["id", "login", 1, "ghost", 3, "click"], [1, "overlay-panel", "overlay-register"], ["id", "register", 1, "ghost", 3, "click"], [1, "fa", "fa-times", 3, "click"], [1, "card"], [1, "card-header"], [1, "fa", "fa-times", "white-icon", 3, "click"], [1, "card-body"], [1, "btn", "btn-dark", "mr-2", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_main_0_Template, 35, 4, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_section_1_Template, 9, 2, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".flex-column-center[_ngcontent-%COMP%], .logged-in-controls[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: white;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: white;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343a40e0;\n  background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n  color: white;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: #fff;\n    background: #343a40e0;\n    background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: #1c1c1d;\n  font-size: 36px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-times.white-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logged-in-controls[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: #2d3436;\n  width: 250px;\n  height: 250px;\n  box-shadow: inset 0 0 5px 0 black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEUUY7QUNMQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEUUY7QUNMQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBRFFGO0FDTEE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURPRjtBQ0pBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FET0Y7QUNKQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7QURPRjtBQ0pBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FET0Y7QUNKQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QURPRjtBQ0pBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FET0Y7QUNKQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRE9GO0FDSkE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FET0Y7QUNKQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FET0Y7QUNKQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0REFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FER0Y7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBREVGO0FDQ0E7RUFDRSxRQUFBO0VBQ0Esd0JBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0NBO0VBQ0UsNEJBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBREVGO0FDQ0E7RUFDRSwwQkFBQTtBREVGO0FDQ0E7RUFDRSx3QkFBQTtBREVGO0FDQ0E7RUFDRSwwQkFBQTtBREVGO0FDQ0E7RUFDRTtJQUNFLFNBQUE7RURFRjs7RUNDQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VERUY7O0VDQ0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFREVGOztFQ0NBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VERUY7O0VDQ0E7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RURFRjs7RUNDQTtJQUNFLG1CQUFBO0VERUY7O0VDQ0E7SUFDRSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFREVGOztFQ0NBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSw0REFBQTtJQUtBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtJQUNBLHNDQUFBO0VERkY7O0VDS0E7SUFDRSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RURIRjs7RUNNQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFREhGOztFQ01BO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VESEY7O0VDTUE7SUFDRSxTQUFBO0lBQ0Esd0JBQUE7RURIRjs7RUNNQTtJQUNFLDJCQUFBO0VESEY7O0VDTUE7SUFDRSwyQkFBQTtFREhGOztFQ01BO0lBQ0UsNEJBQUE7RURIRjs7RUNNQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RURIRjs7RUNNQTtJQUNFLDBCQUFBO0VESEY7O0VDTUE7SUFDRSx3QkFBQTtFREhGOztFQ01BO0lBQ0UsMEJBQUE7RURIRjtBQUNGO0FDTUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREpGO0FDTUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURIRjtBQ0lFO0VBQ0UsZ0JBQUE7QURGSjtBQ01BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBREhGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5sb2dnZWQtaW4tY29udHJvbHMsIC5vdmVybGF5LXBhbmVsLCAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4ubG9naW4tcmVnaXN0ZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyIGEge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVubG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNzUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwZTA7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbi5naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzY2NjY2NiAwJSwgIzM0M2E0MCA0MiUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxlZnQ6IC0xMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ub3ZlcmxheS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ub3ZlcmxheS1yZWdpc3RlciB7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LWxvZ2luIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA1O1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICNsb2dpblJlZ2lzdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuaGVubG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3RlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm92ZXJsYXktd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNjY2NjY2IDAlLCAjMzQzYTQwIDQyJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIHRvcDogLTEwMCU7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm92ZXJsYXktcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJvdHRvbTogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAub3ZlcmxheS1yZWdpc3RlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5vdmVybGF5LWxvZ2luIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICB9XG59XG4uZmEuZmEtdGltZXMge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWMxYzFkO1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2FyZC1oZWFkZXIgLmZhLmZhLXRpbWVzLndoaXRlLWljb24ge1xuICBwb3NpdGlvbjogc3RhdGljO1xufVxuXG4ubG9nZ2VkLWluLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCBibGFjaztcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5oZW5sbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0ODBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjYTQ4OTc4NWU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MGUwO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEycHggNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuYnV0dG9uLmdob3N0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNjNkZWcsXHJcbiAgICByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpIDAlLFxyXG4gICAgcmdiYSg1MiwgNTgsIDY0LCAxKSA0MiVcclxuICApO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LWxvZ2luIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgI2xvZ2luUmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlbmxvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTYzZGVnLFxyXG4gICAgICByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpIDAlLFxyXG4gICAgICByZ2JhKDUyLCA1OCwgNjQsIDEpIDQyJVxyXG4gICAgKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgYm90dG9tOiB1bnNldDtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbG9naW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmEuZmEtdGltZXMge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIlO1xyXG4gIHRvcDogMiU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjMWMxYzFkO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAuZmEuZmEtdGltZXMud2hpdGUtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2dlZC1pbi1jb250cm9scyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgZ2V0Q29sb3IoYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { logiRegi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['logiRegi']
        }], clMod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/pages/my-account/my-account.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/my-account/my-account.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/review.service */ "./src/app/shared/review.service.ts");
/* harmony import */ var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/company.service */ "./src/app/shared/company.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");














function MyAccountComponent_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r7.name, " ");
} }
class MyAccountComponent {
    constructor(reviewService, companyService, authService, toastr) {
        this.reviewService = reviewService;
        this.companyService = companyService;
        this.authService = authService;
        this.toastr = toastr;
        this.companies = [];
    }
    ngOnInit() {
        this.companyService.getCompanies().subscribe(data => {
            data.map(e => {
                this.companies.push(e.payload.doc.data());
            });
        });
        this.initInputForm();
    }
    create() {
        const review = this.inputForm.value;
        this.inputForm.reset();
        review.timeStamp = new Date();
        this.companies.forEach(c => {
            if (c.name === review.companyName) {
                review.imagePath = c.logo;
            }
        });
        this.authService.getUsername().subscribe(e => {
            review.userName = e.email;
            this.reviewService
                .postReview(review)
                .then(response => {
                this.toastr.success('Review submitted.', 'Success!');
            })
                .catch(errorRes => {
                this.toastr.error(errorRes.message, 'An Error occurred.');
            });
        });
    }
    initInputForm() {
        const companyName = '';
        const rating = '';
        const textExcerpt = '';
        this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](companyName),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            textExcerpt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](textExcerpt, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
}
MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) { return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyAccountComponent, selectors: [["app-my-account"]], decls: 18, vars: 3, consts: [[1, "container"], [1, "d-flex", "flex-column", 3, "formGroup"], [1, "mt-4"], ["formControlName", "companyName"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["matInput", "", "type", "text", "formControlName", "rating"], ["matInput", "", "formControlName", "textExcerpt", "cols", "30", "rows", "10"], ["mat-raised-button", "", 3, "disabled", "click"], [3, "value"]], template: function MyAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyAccountComponent_mat_option_6_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Write Something...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_16_listener() { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.inputForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-account',
                templateUrl: './my-account.component.html',
                styleUrls: ['./my-account.component.scss']
            }]
    }], function () { return [{ type: _shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"] }, { type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/reviews/review-element/review-element.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/reviews/review-element/review-element.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReviewElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewElementComponent", function() { return ReviewElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




const _c0 = function () { return ["/companies/:id"]; };
class ReviewElementComponent {
    constructor() { }
    ngOnInit() { }
}
ReviewElementComponent.ɵfac = function ReviewElementComponent_Factory(t) { return new (t || ReviewElementComponent)(); };
ReviewElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewElementComponent, selectors: [["app-review-element"]], inputs: { reviewElement: "reviewElement" }, decls: 26, vars: 8, consts: [[1, "review-container", "d-flex"], [1, "card-aside"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center", "my-2", "font-italic"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], [1, "card-title", 3, "routerLink"], [1, "font-italic", "mb-0", "mt-2", "text-white"], [1, "stars-container", "mt-2"], [1, "fa", "fa-star", "mr-1"], [1, "fa", "fa-star"], [1, "card-body", "d-flex", "justify-content-between"], [1, "supporting-flex"], [1, "card-text"], ["mat-raised-button", "", "color", "primary", 1, "see-more-btn"], [1, "votes-container"], ["type", "button", "id", "upVote", 1, "btn", "fa", "fa-arrow-up"], ["type", "button", "id", "downVote", 1, "btn", "fa", "fa-arrow-down"]], template: function ReviewElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.reviewElement.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.reviewElement.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewElement.timeStamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewElement.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" by: ", ctx.reviewElement.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewElement.textExcerpt);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-container[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-2.font-italic[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n.card[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n}\n.card-header[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 10px 0 #00000066;\n  background-color: #673ab7;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  color: #ffffff;\n  transition: 0.4s;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  text-decoration: none;\n  color: #ffccbc;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-star[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ffccbc;\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   .votes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUU3QkE7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7QURRRjtBQ0hJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURNTjtBQ0hFO0VBQ0UseUJBQUE7QURLSjtBQ0RBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QURJRjtBQ0RBO0VBQ0Usc0NBQUE7RUFFQSx5QkFBQTtBREdGO0FDRkU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRElKO0FDRkU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRElKO0FDREU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBREdKO0FDRUU7RUFDRSxZQUFBO0FEQ0o7QUNFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FEQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvcmV2aWV3LWVsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi5yZXZpZXctY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1hc2lkZSAuaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNhcmQtYXNpZGUgcC50ZXh0LWNlbnRlci5teS0yLmZvbnQtaXRhbGljIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmNhcmQge1xuICBmbGV4OiAxO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDAgIzAwMDAwMDY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmY2NiYztcbn1cbi5jYXJkLWhlYWRlciAuZmEuZmEtc3RhciB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmNjYmM7XG59XG5cbi5jYXJkLWJvZHkgYnV0dG9uLnNlZS1tb3JlLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJkLWJvZHkgLnZvdGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLnJldmlldy1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1hc2lkZSB7XHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgcC50ZXh0LWNlbnRlci5teS0yLmZvbnQtaXRhbGljIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMCAjMDAwMDAwNjY7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmNTI1MjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICB9XHJcbiAgLmNhcmQtdGl0bGU6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZjY2JjO1xyXG4gIH1cclxuXHJcbiAgLmZhLmZhLXN0YXIge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgY29sb3I6ICNmZmNjYmM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBidXR0b24uc2VlLW1vcmUtYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC52b3Rlcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review-element',
                templateUrl: './review-element.component.html',
                styleUrls: ['./review-element.component.scss']
            }]
    }], function () { return []; }, { reviewElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        ],
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
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]] });
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
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
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
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]] }); })();
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
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
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
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/animations.ts":
/*!**************************************!*\
  !*** ./src/app/shared/animations.ts ***!
  \**************************************/
/*! exports provided: routeTransitionAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function() { return routeTransitionAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Contact => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Contact', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true })
        ])
    ])
]);


/***/ }),

/***/ "./src/app/shared/auth-guard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/auth-guard.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");





class AuthGuardGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (yield this.authService.authStateTrack()) {
                console.log('MOZES DA VLEZES ANGELU!');
                return true;
            }
            else {
                console.log('ZASTANI ZAD MENE SATANO!');
                this.router.navigate(['/']);
                return false;
            }
        });
    }
}
AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) { return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardGuard, factory: AuthGuardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");







class AuthService {
    constructor(afAuth, router, toastr) {
        this.afAuth = afAuth;
        this.router = router;
        this.toastr = toastr;
        this.publishEmail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.afAuth.onAuthStateChanged(user => {
            if (user) {
                console.log('Logged In!');
            }
            else {
                console.log('Logged Out!');
            }
        });
    }
    // User Management Methods (Sign In / Sign Out / Sign Up)
    signIn(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signInWithEmailAndPassword(email, password);
        });
    }
    signOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            this.router.navigate(['/']);
            this.toastr.info('User signed out!');
        });
    }
    signUp(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.afAuth.createUserWithEmailAndPassword(email, password);
            this.toastr.info('User created!');
        });
    }
    authStateTrack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            yield this.afAuth.onAuthStateChanged(user => {
                if (user) {
                    result = true;
                }
                else {
                    result = false;
                }
            });
            return result;
        });
    }
    // Get the User
    getUsername() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.currentUser);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/company.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/company.service.ts ***!
  \*******************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class CompanyService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getCompanies() {
        return this.firestore.collection('companies').snapshotChanges();
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/review.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/review.service.ts ***!
  \******************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ReviewService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getReviews() {
        return this.firestore.collection('reviews').snapshotChanges();
    }
    postReview(review) {
        return this.firestore.collection('reviews').add(review);
    }
    updatePolicy(review) { }
    deleteReview(reviewId) {
        this.firestore.doc('reviews/' + reviewId).delete();
    }
}
ReviewService.ɵfac = function ReviewService_Factory(t) { return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewService, factory: ReviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


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
    firebase: {
        apiKey: 'AIzaSyDiElbCxqoqxJZkU78e-q2WUfX4AzfN9O8',
        authDomain: 'thesubmarineproject-2c414.firebaseapp.com',
        databaseURL: 'https://thesubmarineproject-2c414.firebaseio.com/',
        projectId: 'thesubmarineproject-2c414',
        storageBucket: 'thesubmarineproject-2c414.appspot.com',
        messagingSenderId: '995263639995',
        appId: '1:995263639995:web:c47c7f1fb2c3ae6a98d49e',
        measurementId: 'G-T3S9QJ4QT5'
    }
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

module.exports = __webpack_require__(/*! D:\workspace\Seavus\submarine-team.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map