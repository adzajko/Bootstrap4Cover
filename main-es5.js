function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/pages/home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/about/about.component */
    "./src/app/components/pages/about/about.component.ts");
    /* harmony import */


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'about',
      component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'contact',
      component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/layout/navbar/navbar.component */
    "./src/app/components/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");

    function AppComponent_app_login_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clMod", function AppComponent_app_login_6_Template_app_login_clMod_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.closeModal($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'TSP';
        this.shouldModalOpen = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openModalFunction",
        value: function openModalFunction(event) {
          this.shouldModalOpen = event;
        }
      }, {
        key: "closeModal",
        value: function closeModal(event) {
          this.shouldModalOpen = event;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      inputs: {
        openModal: "openModal"
      },
      decls: 7,
      vars: 1,
      consts: [[3, "openModal"], [3, "clMod", 4, "ngIf"], [3, "clMod"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-navbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("openModal", function AppComponent_Template_app_navbar_openModal_1_listener($event) {
            return ctx.openModalFunction($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_login_6_Template, 1, 0, "app-login", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);
        }
      },
      directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-color: #512da8;\n}\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 black;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f0f2f5;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UseUJBQUE7QURRRjtBQ0xBO0VBQ0UsMkJBQUE7QURRRjtBQ0xBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBRFFGO0FDTEE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QURPRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIGFwcC1sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyZGE4O1xufVxuXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgYmxhY2s7XG59XG5cbm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjJmNTtcbn1cblxuYXBwLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMjA7XG4gIGhlaWdodDogMTAwJTtcbn0iLCJAaW1wb3J0ICcuLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTJkYTg7XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG59XHJcblxyXG5hcHAtbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, {
        openModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/layout/navbar/navbar.component */
    "./src/app/components/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/home/home.component */
    "./src/app/components/pages/home/home.component.ts");
    /* harmony import */


    var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/about/about.component */
    "./src/app/components/pages/about/about.component.ts");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/material/material.module */
    "./src/app/modules/material/material.module.ts");
    /* harmony import */


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_18__["ReviewElementComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_18__["ReviewElementComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 2,
      vars: 0,
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA9 The Submarine Team | 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 0;\n  background-color: #949494;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBRTdCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FEUUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ5NDk0O1xuICBjb2xvcjogYmxhY2s7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4od2hpdGUsIDQyJSk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layout/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsLayoutNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["hamTop"];
    var _c1 = ["hamBot"];
    var _c2 = ["navBrand"];
    var _c3 = ["overlay"];
    var _c4 = ["subLogo"];

    var _c5 = function _c5() {
      return ["/"];
    };

    var _c6 = function _c6() {
      return ["/account"];
    };

    var _c7 = function _c7() {
      return ["/about"];
    };

    var _c8 = function _c8() {
      return ["/contact"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(formBuilder, auth) {
        _classCallCheck(this, NavbarComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.openModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loginForm = this.formBuilder.group({
          email: '',
          password: 'password'
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(loginData) {
          this.auth.signIn(loginData.email, loginData.password);
          this.loginForm.reset();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          this.auth.signOut();
        }
      }, {
        key: "toggleOverlay",
        value: function toggleOverlay() {
          this.subLogo.nativeElement.classList.toggle('v-none');
          this.navBrand.nativeElement.classList.toggle('brand-fixed');
          this.hamTop.nativeElement.classList.toggle('open');
          this.hamBot.nativeElement.classList.toggle('open');
          this.overlay.nativeElement.classList.toggle('h-100');
        }
      }, {
        key: "triggerModal",
        value: function triggerModal() {
          this.openModal.emit(true);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      viewQuery: function NavbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamTop = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamBot = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navBrand = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subLogo = _t.first);
        }
      },
      outputs: {
        openModal: "openModal"
      },
      decls: 27,
      vars: 10,
      consts: [[1, "navbar", "d-flex"], [1, "navbar-brand", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo", "d-none", "d-lg-block"], ["id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay"], ["overlay", ""], [1, "overlay-content"], [1, "overlay-link", 3, "routerLink", "click"], [1, "fa", "fa-home", "mr-2"], [1, "fa", "fa-user", "mr-2"], [1, "fa", "fa-question", "mr-2"], [1, "fa", "fa-phone", "mr-2"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_11_listener() {
            return ctx.triggerModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_18_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nnav[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 50px 0px rgba(0, 0, 0, 0.75);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\nform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n  width: 150px;\n}\n.brand-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  margin-top: 1rem;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 0;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: black;\n  overflow: hidden;\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 300px;\n  margin: 30px auto 0 auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  position: relative;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 2px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: whitesmoke;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  cursor: pointer;\n}\n.v-none[_ngcontent-%COMP%] {\n  margin-left: calc(950%);\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBRTdCQTtFQUNFLFdBQUE7QURRRjtBQ05BO0VBQ0Usc0RBQUE7QURTRjtBQ05BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEU0Y7QUNSRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEVUo7QUNSRTtFQUNFLFFBQUE7QURVSjtBQ1JFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QURVSjtBQ1BFOztFQUVFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRFNKO0FDUEU7RUFDRSx5QkFBQTtBRFNKO0FDSkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FET0o7QUNIQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QURNRjtBQ0pBO0VBQ0UsY0FBQTtBRE9GO0FDTEE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FEUUY7QUNOQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QURTRjtBQ05BO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEU0Y7QUNQRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBRFNKO0FDTEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRE9KO0FDTEU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7QURPSjtBQ0xFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRE9KO0FDTEU7O0VBRUUsY0FBQTtBRE9KO0FDSkU7RUFDRTtJQUNFLGVBQUE7RURNSjtBQUNGO0FDRkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURLRjtBQ0ZBO0VBQ0UsdUJBQUE7QURLRjtBQ0ZBOztFQUVFLGlCQUFBO0FES0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzVweDtcbn1cblxubmF2IHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS50b3Age1xuICB0b3A6IDE4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuZm9ybSBidXR0b24uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5icmFuZC1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4jc3ViLXRvLWhvbWUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC40NXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmhvdmVyLFxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5vdmVybGF5IC5vdmVybGF5LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4jZmEtZmEtdXNlciB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52LW5vbmUge1xuICBtYXJnaW4tbGVmdDogY2FsYyg5NTAlKTtcbn1cblxuI2VtYWlsLWxvZ2luLWlucHV0LFxuI2VtYWlsLWxvZ2luLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmltZy1sb2dvIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5uYXYge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogNzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLmhhbWJ1cmdlci1saW5lIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcCB7XHJcbiAgICB0b3A6IDE4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxyXG4gIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0b3A6IDQ4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBidXR0b24uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJhbmQtZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuI3N1Yi10by1ob21lIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuI3N1Yi10by1ob21lOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjQ1cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWxpbms6aG92ZXIsXHJcbiAgLm92ZXJsYXktbGluazpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLm92ZXJsYXktbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNmYS1mYS11c2VyIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnYtbm9uZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoOTUwJSk7XHJcbn1cclxuXHJcbiNlbWFpbC1sb2dpbi1pbnB1dCxcclxuI2VtYWlsLWxvZ2luLWlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        hamTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hamTop', {
            "static": false
          }]
        }],
        hamBot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hamBot', {
            "static": false
          }]
        }],
        navBrand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['navBrand', {
            "static": false
          }]
        }],
        overlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['overlay', {
            "static": false
          }]
        }],
        subLogo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['subLogo', {
            "static": false
          }]
        }],
        openModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/about/about.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/about/about.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_section_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.teamMemberTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.teamMemberText);
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.showInfo = false;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleInfo",
        value: function toggleInfo() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 30,
      vars: 1,
      consts: [[1, "about-page"], [1, "intro-section"], [1, "title", "page-title"], [1, "title"], [1, "team-section", "pt-0"], [1, "row", "upper"], [1, "member-img-container", "col-6", "col-lg-3"], ["src", "/assets/submarine.png", "alt", "Djajko", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Vane", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Babu6o", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Ivana", 1, "img-fluid", 3, "click"], [1, "row", "lower"], ["src", "/assets/submarine.png", "alt", "Blagio", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Jovica", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Matej", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Damjan", 1, "img-fluid", 3, "click"], ["class", "rendered-bio", 4, "ngIf"], [1, "rendered-bio"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_13_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_15_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_17_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_19_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_22_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_24_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_26_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_img_click_28_listener() {
            return ctx.toggleInfo();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AboutComponent_section_29_Template, 5, 2, "section", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInfo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.about-page[_ngcontent-%COMP%] {\n  background: #fafafa;\n  background: linear-gradient(180deg, #fafafa 0%, rgba(0, 0, 0, 0.3) 100%);\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem;\n  margin-bottom: 0;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.team-section[_ngcontent-%COMP%] {\n  padding: 2rem 5rem;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%] {\n  margin: 2rem;\n  padding: 2rem;\n  position: relative;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 3px 0;\n  margin: auto;\n  width: 150px;\n  transition: 0.4s;\n  transform: scale(1);\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  transform: scale(1.1);\n}\nsection.team-section[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  top: -10%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\nsection.team-section[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  bottom: -20%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsbUJBQUE7RUFDQSx3RUFBQTtBRFFGO0FDSEU7RUFDRSxhQUFBO0FES0o7QUNKSTtFQUNFLGtCQUFBO0FETU47QUNKSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FETU47QUNKSTtFQUNFLG1CQUFBO0FETU47QUNGQTtFQUNFLGtCQUFBO0FES0Y7QUNIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURLSjtBQ0pJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURNTjtBQ0xNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURPUjtBQ0pNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBRE1SO0FDREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBREdKO0FDQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBREVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDAsIDAsIDAsIDAuMykgMTAwJSk7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUucGFnZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3cge1xuICBtYXJnaW46IDJyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93IC5tZW1iZXItaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93IC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTUwcHg7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdyAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIC51cHBlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiAubG93ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICBib3R0b206IC0yMCU7XG4gIGxlZnQ6IDIxJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5hYm91dC1wYWdlIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgcmdiYSgyNTAsIDI1MCwgMjUwLCAxKSAwJSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSAxMDAlXHJcbiAgKTtcclxuICAuaW50cm8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLnBhZ2UtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5zZWN0aW9uLnRlYW0tc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG5cclxuICBzZWN0aW9uLnJvdyB7XHJcbiAgICBtYXJnaW46IDJyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1lbWJlci1pbWctY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3hTaGFkb3dDb2xvcik7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWctZmx1aWQ6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudXBwZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1heC13aWR0aDogNzUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgbGVmdDogMjElO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLmxvd2VyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogLTIwJTtcclxuICAgIGxlZnQ6IDIxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/contact/contact.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/pages/contact/contact.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 24,
      vars: 0,
      consts: [[1, "contact-page-wrapper"], [1, "main-contact"], [1, "contact-form"], ["action", ""], ["type", "text", "required", "", "placeholder", "FULL NAME"], ["type", "email", "required", "", "placeholder", "EMAIL ADDRESS"], ["name", "message", "required", "", "cols", "30", "rows", "5", "placeholder", "MESSAGE"], [1, "contact-form-btn"], [1, "contact-address"], [1, "content"], [1, "fa", "fa-map-marker", "mr-2"], [1, "fa", "fa-envelope", "mr-2"], [1, "fa", "fa-volume-control-phone", "mr-2"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send Us A Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");

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
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  padding: 8% 0;\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: #343a40;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.contact-form-btn[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 10px 40px;\n  margin-bottom: 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: #666666;\n  background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #dddddd;\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsYUFBQTtBRFFGO0FDTEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1QkFBQTtBRFFGO0FDTEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRFFGO0FDTEE7RUFDRSxlQUFBO0FEUUY7QUNMQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FEUUY7QUNMQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEUUY7QUNMQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRFFGO0FDTEE7O0VBRUUscUNBQUE7RUFDQSxxQkFBQTtBRFFGO0FDTEE7RUFFRSxlQUFBO0FEUUY7QUNWQTtFQUVFLGVBQUE7QURRRjtBQ1ZBO0VBRUUsZUFBQTtBRFFGO0FDVkE7O0VBRUUsZUFBQTtBRFFGO0FDTEE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBRFFGO0FDTEE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0FEUUY7QUNEQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FESUY7QUNEQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBRElGO0FDREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QURJRjtBQ0RBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VESUY7O0VDREE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFRElGOztFQ0RBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VESUY7O0VDREE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RURJRjs7RUNEQTtJQUNFLGFBQUE7RURJRjs7RUNEQTtJQUNFLGNBQUE7RURJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi5jb250YWN0LXBhZ2Utd3JhcHBlciB7XG4gIHBhZGRpbmc6IDglIDA7XG59XG5cbi5tYWluLWNvbnRhY3Qge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA2NSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhY3QtZm9ybSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDVweCAwIDE3cHggMDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29udGFjdC1mb3JtLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MGUwO1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xufVxuXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM2NjY2NjYgMCUsICMzNDNhNDAgNDIlKTtcbn1cblxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jb250ZW50IHAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLWNvbnRhY3Qge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiB1bnNldDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XG4gICAgZmxvYXQ6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudCBwIHtcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5jb250YWN0LXBhZ2Utd3JhcHBlciB7XHJcbiAgcGFkZGluZzogOCUgMDtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZhIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiA1cHggMCAxN3B4IDA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDpmb2N1cyxcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtLWJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDBlMDtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMDIsIDEwMiwgMTAyKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNjNkZWcsXHJcbiAgICByZ2JhKDEwMiwgMTAyLCAxMDIsIDEpIDAlLFxyXG4gICAgcmdiYSg1MiwgNTgsIDY0LCAxKSA0MiVcclxuICApO1xyXG59XHJcblxyXG4uY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IGgxIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHAge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluLWNvbnRhY3Qge1xyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCBoMSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgcCB7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/home/home.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/pages/home/home.component.ts ***!
    \*********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");

    function HomeComponent_app_review_element_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-review-element", 21);
      }

      if (rf & 2) {
        var review_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviewElement", review_r1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(toastr, formBuilder, auth) {
        _classCallCheck(this, HomeComponent);

        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.listOfReviews = [];
        this.authForm = this.formBuilder.group({
          email: '',
          password: ''
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listOfReviews = [{
            companyName: 'Telekom',
            imagePath: '/assets/submarine.png',
            numberOfStars: 2,
            textExcerpt: 'lorem ipsum ke se farbam rozov',
            timeStamp: '15 minutes ago',
            userName: '69420'
          }, {
            companyName: 'Endava',
            imagePath: '/assets/submarine.png',
            numberOfStars: 2,
            textExcerpt: 'Bojana i pizza, untold love story',
            timeStamp: '5 minutes ago',
            userName: '69420'
          }, {
            companyName: 'Telekom',
            imagePath: '/assets/submarine.png',
            numberOfStars: 2,
            textExcerpt: 'lorem ipsum ke se farbam rozov',
            timeStamp: '15 minutes ago',
            userName: '69420'
          }, {
            companyName: 'Telekom',
            imagePath: '/assets/submarine.png',
            numberOfStars: 2,
            textExcerpt: 'lorem ipsum ke se farbam rozov',
            timeStamp: '15 minutes ago',
            userName: '69420'
          }, {
            companyName: 'Telekom',
            imagePath: '/assets/submarine.png',
            numberOfStars: 2,
            textExcerpt: 'lorem ipsum ke se farbam rozov',
            timeStamp: '15 minutes ago',
            userName: '69420'
          }];
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(authData) {
          this.auth.signUp(authData.email, authData.password);
          this.authForm.reset();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 35,
      vars: 2,
      consts: [[1, "filter-options", "py-3", "d-flex", "justify-content-center", "w-100"], ["name", "options", "id", "filter-options", 1, "form-control", "bg-light"], ["value", "City"], ["value", "Country"], ["value", "Rating"], [1, "btn", "filter-btn"], [1, "d-flex", "justify-content-between"], [1, "main-section", "w-100", "w-lg-75", "mr-3"], [1, "py-5"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "account-controls", "d-none", "d-lg-block"], [1, "account-wrapper"], [1, "avatar-wrapper"], ["src", "/assets/submarine.png", "alt", "User Avatar", 1, "img-fluid", "mt-5"], [1, "dropdown-divider", "mx-3"], [1, "text-center", "my-3"], [1, "btn-group", "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Email", "formControlName", "email"], ["type", "password", "matInput", "", "placeholder", "Password", "formControlName", "password"], ["mat-raised-button", "", "color", "accent", "id", "signup-btn-home"], [1, "my-3", 3, "reviewElement"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Latest Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_app_review_element_14_Template, 1, 1, "app-review-element", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aside", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " You need to create an account first. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_23_listener() {
            return ctx.onSubmit(ctx.authForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Sign Up ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_8__["ReviewElementComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: black;\n  position: relative;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 20%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: black;\n}\naside[_ngcontent-%COMP%] {\n  margin: 3rem 3rem 0 0;\n  padding: 3rem;\n  padding-top: 0;\n  box-shadow: 0 0 5px 0 #333333;\n  width: 25%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\naside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: auto;\n}\naside[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\naside[_ngcontent-%COMP%]   h4.text-center[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filter-options[_ngcontent-%COMP%] {\n  background: #f6f3f3;\n  box-shadow: 0 0 3px 0 black;\n}\n.filter-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 10px;\n}\n.filter-options[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #212121;\n  color: #ffffff;\n}\n#signin-btn-home[_ngcontent-%COMP%], #signup-btn-home[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\napp-review-element[_ngcontent-%COMP%] {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsZ0JBQUE7QURRRjtBQ0xFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FET0o7QUNKRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBRE1KO0FDRkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FES0Y7QUNIRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBREtKO0FDRkk7RUFDRSxZQUFBO0FESU47QUNERTtFQUNFLGVBQUE7QURHSjtBQ0NBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBREVGO0FDREU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0RFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBREdKO0FDQ0E7O0VBRUUsaUJBQUE7QURFRjtBQ0NBO0VBQ0UsVUFBQTtBREVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBhc2lkZSwgLm1haW4tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4ubWFpbi1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLXNlY3Rpb24gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1zZWN0aW9uIGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjAlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5hc2lkZSB7XG4gIG1hcmdpbjogM3JlbSAzcmVtIDAgMDtcbiAgcGFkZGluZzogM3JlbTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCAjMzMzMzMzO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuYXNpZGUgLmltZy1mbHVpZCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbmFzaWRlIC5idG4tZ3JvdXAgLmJ0biB7XG4gIG1hcmdpbjogMTBweDtcbn1cbmFzaWRlIGg0LnRleHQtY2VudGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uZmlsdGVyLW9wdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjZjZmM2YzO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgYmxhY2s7XG59XG4uZmlsdGVyLW9wdGlvbnMgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZpbHRlci1vcHRpb25zIC5idG4ge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4jc2lnbmluLWJ0bi1ob21lLFxuI3NpZ251cC1idG4taG9tZSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5hcHAtcmV2aWV3LWVsZW1lbnQge1xuICB3aWR0aDogODAlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGdldEZvbnRTaXplKGgxKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG5hc2lkZSB7XHJcbiAgbWFyZ2luOiAzcmVtIDNyZW0gMCAwO1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwICMzMzMzMzM7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICAuaW1nLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuYnRuLWdyb3VwIHtcclxuICAgIC5idG4ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGg0LnRleHQtY2VudGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItb3B0aW9ucyB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0NiwgMjQzLCAyNDMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4jc2lnbmluLWJ0bi1ob21lLFxyXG4jc2lnbnVwLWJ0bi1ob21lIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuYXBwLXJldmlldy1lbGVtZW50IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/pages/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = ["logiRegi"];

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.clMod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "triggerLogin",
        value: function triggerLogin() {
          this.logiRegi.nativeElement.classList.remove('panel-active');
        }
      }, {
        key: "triggerRegister",
        value: function triggerRegister() {
          this.logiRegi.nativeElement.classList.add('panel-active');
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.clMod.emit(false);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.logiRegi = _t.first);
        }
      },
      outputs: {
        clMod: "clMod"
      },
      decls: 35,
      vars: 0,
      consts: [[1, "henlo"], ["id", "logiRegiContainer", 1, "login-register"], ["logiRegi", ""], [1, "form-container", "register-container"], ["action", "#"], ["type", "text", "required", "", "placeholder", "Username"], ["type", "email", "required", "", "placeholder", "Email"], ["type", "password", "required", "", "id", "passwordInput", "placeholder", "Password"], [1, "form-container", "login-container"], ["type", "password", "required", "", "placeholder", "Password"], ["href", "#"], [1, "overlay-container"], [1, "overlay-wrapper"], [1, "overlay-panel", "overlay-login"], ["id", "login", 1, "ghost", 3, "click"], [1, "overlay-panel", "overlay-register"], ["id", "register", 1, "ghost", 3, "click"], [1, "fa", "fa-times", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Forgot your password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Welcome Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
            return ctx.triggerLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Log in ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Don't have an account yet?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            return ctx.triggerRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_i_click_34_listener() {
            return ctx.closeModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: white;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: white;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343a40e0;\n  background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n  color: white;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: #fff;\n    background: #343a40e0;\n    background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: #1c1c1d;\n  font-size: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFN0JBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEUUY7QUNMQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEUUY7QUNMQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBRFFGO0FDTEE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURPRjtBQ0pBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FET0Y7QUNKQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7QURPRjtBQ0pBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FET0Y7QUNKQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QURPRjtBQ0pBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FET0Y7QUNKQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRE9GO0FDSkE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FET0Y7QUNKQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FET0Y7QUNKQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw0REFBQTtFQUtBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FER0Y7QUNBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBREVGO0FDQ0E7RUFDRSxRQUFBO0VBQ0Esd0JBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7QURFRjtBQ0NBO0VBQ0UsNEJBQUE7QURFRjtBQ0NBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBREVGO0FDQ0E7RUFDRSwwQkFBQTtBREVGO0FDQ0E7RUFDRSx3QkFBQTtBREVGO0FDQ0E7RUFDRSwwQkFBQTtBREVGO0FDQ0E7RUFDRTtJQUNFLFNBQUE7RURFRjs7RUNDQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VERUY7O0VDQ0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFREVGOztFQ0NBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VERUY7O0VDQ0E7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RURFRjs7RUNDQTtJQUNFLG1CQUFBO0VERUY7O0VDQ0E7SUFDRSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFREVGOztFQ0NBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSw0REFBQTtJQUtBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtJQUNBLHNDQUFBO0VERkY7O0VDS0E7SUFDRSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RURIRjs7RUNNQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFREhGOztFQ01BO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VESEY7O0VDTUE7SUFDRSxTQUFBO0lBQ0Esd0JBQUE7RURIRjs7RUNNQTtJQUNFLDJCQUFBO0VESEY7O0VDTUE7SUFDRSwyQkFBQTtFREhGOztFQ01BO0lBQ0UsNEJBQUE7RURIRjs7RUNNQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RURIRjs7RUNNQTtJQUNFLDBCQUFBO0VESEY7O0VDTUE7SUFDRSx3QkFBQTtFREhGOztFQ01BO0lBQ0UsMEJBQUE7RURIRjtBQUNGO0FDTUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREpGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5vdmVybGF5LXBhbmVsLCAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4ubG9naW4tcmVnaXN0ZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyIGEge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVubG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNzUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwZTA7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XG59XG5cbmJ1dHRvbi5naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzY2NjY2NiAwJSwgIzM0M2E0MCA0MiUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGxlZnQ6IC0xMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ub3ZlcmxheS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ub3ZlcmxheS1yZWdpc3RlciB7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5vdmVybGF5LWxvZ2luIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA1O1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICNsb2dpblJlZ2lzdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuaGVubG8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3RlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIgaW5wdXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm92ZXJsYXktd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNjY2NjY2IDAlLCAjMzQzYTQwIDQyJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIHRvcDogLTEwMCU7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm92ZXJsYXktcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJvdHRvbTogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAub3ZlcmxheS1yZWdpc3RlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5vdmVybGF5LWxvZ2luIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICB9XG59XG4uZmEuZmEtdGltZXMge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMWMxYzFkO1xuICBmb250LXNpemU6IDM2cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3RlciBhIHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uaGVubG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA3NTBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDgwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZGQyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIGJ1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDBlMDtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMnB4IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA4MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbmJ1dHRvbi5naG9zdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5vdmVybGF5LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTYzZGVnLFxyXG4gICAgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKSAwJSxcclxuICAgIHJnYmEoNTIsIDU4LCA2NCwgMSkgNDIlXHJcbiAgKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXktcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICNsb2dpblJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5oZW5sbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE2M2RlZyxcclxuICAgICAgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKSAwJSxcclxuICAgICAgcmdiYSg1MiwgNTgsIDY0LCAxKSA0MiVcclxuICAgICk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIGJvdHRvbTogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxvZ2luIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLmZhLXRpbWVzIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICB0b3A6IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzFjMWMxZDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, {
        logiRegi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['logiRegi']
        }],
        clMod: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/reviews/review-element/review-element.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/reviews/review-element/review-element.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ReviewElementComponent */

  /***/
  function srcAppComponentsReviewsReviewElementReviewElementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewElementComponent", function () {
      return ReviewElementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0() {
      return ["/companies/:id"];
    };

    var ReviewElementComponent = /*#__PURE__*/function () {
      function ReviewElementComponent() {
        _classCallCheck(this, ReviewElementComponent);
      }

      _createClass(ReviewElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReviewElementComponent;
    }();

    ReviewElementComponent.ɵfac = function ReviewElementComponent_Factory(t) {
      return new (t || ReviewElementComponent)();
    };

    ReviewElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewElementComponent,
      selectors: [["app-review-element"]],
      inputs: {
        reviewElement: "reviewElement"
      },
      decls: 26,
      vars: 8,
      consts: [[1, "review-container", "d-flex"], [1, "card-aside"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center", "my-2", "font-italic"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], [1, "card-title", 3, "routerLink"], [1, "font-italic", "mb-0", "mt-2", "text-white"], [1, "stars-container", "mt-2"], [1, "fa", "fa-star", "mr-1"], [1, "fa", "fa-star"], [1, "card-body", "d-flex", "justify-content-between"], [1, "supporting-flex"], [1, "card-text"], ["mat-raised-button", "", "color", "primary", 1, "see-more-btn"], [1, "votes-container"], ["type", "button", "id", "upVote", 1, "btn", "fa", "fa-arrow-up"], ["type", "button", "id", "downVote", 1, "btn", "fa", "fa-arrow-down"]],
      template: function ReviewElementComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
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
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.review-container[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 100%;\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-2.font-italic[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n.card[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-header[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 10px 0 #00000066;\n  background-color: #673ab7;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  color: #ffffff;\n  transition: 0.4s;\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  text-decoration: none;\n  color: #ffccbc;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-star[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ffccbc;\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   .votes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUU3QkE7RUFDRSw0Q0FBQTtFQUNBLFdBQUE7QURRRjtBQ0hJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QURNTjtBQ0hFO0VBQ0UseUJBQUE7QURLSjtBQ0RBO0VBQ0UsT0FBQTtBRElGO0FDREE7RUFDRSxzQ0FBQTtFQUVBLHlCQUFBO0FER0Y7QUNGRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FESUo7QUNGRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FESUo7QUNERTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FER0o7QUNFRTtFQUNFLFlBQUE7QURDSjtBQ0VFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QURBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXctZWxlbWVudC9yZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLnJldmlldy1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FyZC1hc2lkZSBwLnRleHQtY2VudGVyLm15LTIuZm9udC1pdGFsaWMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uY2FyZCB7XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IDAgIzAwMDAwMDY2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmY2NiYztcbn1cbi5jYXJkLWhlYWRlciAuZmEuZmEtc3RhciB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6ICNmZmNjYmM7XG59XG5cbi5jYXJkLWJvZHkgYnV0dG9uLnNlZS1tb3JlLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJkLWJvZHkgLnZvdGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLnJldmlldy1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1hc2lkZSB7XHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgcC50ZXh0LWNlbnRlci5teS0yLmZvbnQtaXRhbGljIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAwICMwMDAwMDA2NjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIH1cclxuICAuY2FyZC10aXRsZTpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmNjYmM7XHJcbiAgfVxyXG5cclxuICAuZmEuZmEtc3RhciB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBjb2xvcjogI2ZmY2NiYztcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJ1dHRvbi5zZWUtbW9yZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgLnZvdGVzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review-element',
          templateUrl: './review-element.component.html',
          styleUrls: ['./review-element.component.scss']
        }]
      }], function () {
        return [];
      }, {
        reviewElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/material/material.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/material/material.module.ts ***!
    \*****************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppModulesMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]],
        exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]],
          exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/auth.service.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/auth.service.ts ***!
    \****************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, router) {
        var _this = this;

        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
        this.afAuth.authState.subscribe(function (user) {
          if (user) {
            _this.user = user;
            localStorage.setItem('user', JSON.stringify(_this.user));
          } else {
            localStorage.setItem('user', null);
          }
        });
        this.afAuth.onAuthStateChanged(function (user) {
          if (user) {
            console.log('Logged In!');
          } else {
            console.log('Logged Out!');
          }
        });
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afAuth.signInWithEmailAndPassword(email, password);

                  case 2:
                    result = _context.sent;
                    console.log(result);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    localStorage.removeItem('user');

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var result;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    result = _context3.sent;
                    console.log(result);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "authStateTrack",
        value: function authStateTrack() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.onAuthStateChanged(function (user) {
                      if (user) {
                        console.log('Logged In!');
                      } else {
                        console.log('Logged Out!');
                      }
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\workspace\Seavus\submarine-team.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map