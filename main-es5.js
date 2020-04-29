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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
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
    /* harmony import */


    var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/my-account/my-account.component */
    "./src/app/components/pages/my-account/my-account.component.ts");
    /* harmony import */


    var _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/admin-panel/admin-panel.component */
    "./src/app/components/pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/auth-guard.guard */
    "./src/app/shared/auth-guard.guard.ts");
    /* harmony import */


    var _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/pages/companies/companies.component */
    "./src/app/components/pages/companies/companies.component.ts");

    var routes = [{
      path: '',
      component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      data: {
        animationState: 'Home'
      }
    }, {
      path: 'about',
      component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
      data: {
        animationState: 'About'
      }
    }, {
      path: 'contact',
      component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"],
      data: {
        animationState: 'Contact'
      }
    }, {
      path: 'my-account',
      component: _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__["MyAccountComponent"],
      data: {
        animationState: 'About'
      },
      canActivate: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]]
    }, {
      path: 'admin',
      component: _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__["AdminPanelComponent"],
      data: {
        animationState: 'Contact'
      },
      canActivate: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuardGuard"]]
    }, {
      path: 'companies',
      component: _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_8__["CompaniesComponent"],
      data: {
        animationState: 'Contact'
      }
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
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


    var _shared_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/animations */
    "./src/app/shared/animations.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/layout/navbar/navbar.component */
    "./src/app/components/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/http-loader/http-loader.component */
    "./src/app/shared/http-loader/http-loader.component.ts");

    function AppComponent_app_login_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clMod", function AppComponent_app_login_7_Template_app_login_clMod_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.closeModal($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_app_http_loader_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-loader");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.title = 'TSP';
        this.pendingHttpRequest = false;
        this.shouldModalOpen = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.auth.triggerLoadingScreen.subscribe(function (response) {
            _this.pendingHttpRequest = response;
          });
        }
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
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      inputs: {
        openModal: "openModal"
      },
      decls: 9,
      vars: 3,
      consts: [[3, "openModal"], ["outlet", "outlet"], [3, "clMod", 4, "ngIf"], [4, "ngIf"], [3, "clMod"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_login_7_Template, 1, 0, "app-login", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_http_loader_8_Template, 1, 0, "app-http-loader", 3);
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendingHttpRequest);
        }
      },
      directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_8__["HttpLoaderComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\nheader[_ngcontent-%COMP%] {\n  background-color: #512da8;\n}\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 black;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #f0f2f5;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUFFQSxzQkFBQTtBQTRCQSx5QkFBQTtBRXhHQTtFQUNFLHlCQUFBO0FEdURGO0FDcERBO0VBQ0UsMkJBQUE7QUR1REY7QUNwREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FEdURGO0FDcERBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0FEc0RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgYXBwLWxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTJkYTg7XG59XG5cbmZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBibGFjaztcbn1cblxubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG59XG5cbmFwcC1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyZGE4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG59XHJcblxyXG5hcHAtbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"],
      data: {
        animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"]]
        }]
      }], function () {
        return [{
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
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


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");
    /* harmony import */


    var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/pages/my-account/my-account.component */
    "./src/app/components/pages/my-account/my-account.component.ts");
    /* harmony import */


    var _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/pages/companies/companies.component */
    "./src/app/components/pages/companies/companies.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/pages/admin-panel/admin-panel.component */
    "./src/app/components/pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shared/http-loader/http-loader.component */
    "./src/app/shared/http-loader/http-loader.component.ts"); // <Firebase Imports>
    // </Firebase Imports>


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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"], _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_30__["HttpLoaderComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"], _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_30__["HttpLoaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 0;\n  background-color: #2d3436;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FBRUEsc0JBQUE7QUE0QkEseUJBQUE7QUV4R0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUR1REYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXhcIjtcclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4iXX0= */"]
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


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      return ["/my-account"];
    };

    var _c7 = function _c7() {
      return ["/companies"];
    };

    var _c8 = function _c8() {
      return ["/about"];
    };

    var _c9 = function _c9() {
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
      }, {
        key: "checkMyAccount",
        value: function checkMyAccount() {
          var _this2 = this;

          this.auth.authStateTrack().then(function (response) {
            if (response.logged) {
              _this2.toggleOverlay();
            } else {
              _this2.triggerModal();

              _this2.toggleOverlay();
            }
          });
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
      decls: 30,
      vars: 12,
      consts: [["color", "warn", 1, "navbar", "d-flex"], [1, "navbar-brand", "mt-sm-2", "mt-lg-0", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo"], ["id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay"], ["overlay", ""], [1, "overlay-content"], [1, "overlay-link", 3, "routerLink", "click"], [1, "fa", "fa-home", "mr-2"], [1, "fa", "fa-user", "mr-2"], [1, "fa", "fa-building-o", "mr-2"], [1, "fa", "fa-question", "mr-2"], [1, "fa", "fa-phone", "mr-2"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

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
            return ctx.checkMyAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "My Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_21_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_24_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c9));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\nform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n  width: 150px;\n}\n.brand-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  margin-top: 1rem;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 0;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: black;\n  overflow: hidden;\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 300px;\n  margin: 30px auto 0 auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  position: relative;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 2px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: whitesmoke;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  cursor: pointer;\n}\n.v-none[_ngcontent-%COMP%] {\n  margin-left: calc(950%);\n}\n@media only screen and (max-width: 600px) {\n  .v-none[_ngcontent-%COMP%] {\n    margin-left: 10.3rem;\n  }\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FBRUEsc0JBQUE7QUE0QkEseUJBQUE7QUV4R0E7RUFDRSxXQUFBO0FEdURGO0FDbERBO0VBQ0UsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FEcURGO0FDbkRBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEc0RGO0FDckRFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUR1REo7QUNyREU7RUFDRSxRQUFBO0FEdURKO0FDckRFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QUR1REo7QUNwREU7O0VBRUUseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FEc0RKO0FDcERFO0VBQ0UseUJBQUE7QURzREo7QUNqREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEb0RKO0FDaERBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtBRG1ERjtBQ2pEQTtFQUNFLGNBQUE7QURvREY7QUNsREE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FEcURGO0FDbkRBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBRHNERjtBQ25EQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRHNERjtBQ3BERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBRHNESjtBQ2xERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEb0RKO0FDbERFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0FEb0RKO0FDbERFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRG9ESjtBQ2xERTs7RUFFRSxjQUFBO0FEb0RKO0FDakRFO0VBQ0U7SUFDRSxlQUFBO0VEbURKO0FBQ0Y7QUMvQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURrREY7QUMvQ0E7RUFDRSx1QkFBQTtBRGtERjtBRHRHRTtFRW1ERjtJQUdJLG9CQUFBO0VEb0RGO0FBQ0Y7QUNoREE7O0VBRUUsaUJBQUE7QURtREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzVweDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS50b3Age1xuICB0b3A6IDE4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuZm9ybSBidXR0b24uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5icmFuZC1maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4jc3ViLXRvLWhvbWUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyNSU7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC40NXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmhvdmVyLFxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpmb2N1cyB7XG4gIGNvbG9yOiAjZjFmMWYxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5vdmVybGF5IC5vdmVybGF5LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4jZmEtZmEtdXNlciB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi52LW5vbmUge1xuICBtYXJnaW4tbGVmdDogY2FsYyg5NTAlKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnYtbm9uZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwLjNyZW07XG4gIH1cbn1cblxuI2VtYWlsLWxvZ2luLWlucHV0LFxuI2VtYWlsLWxvZ2luLWlucHV0IHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmltZy1sb2dvIHtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG4vLyBtYXQtdG9vbGJhciB7XHJcbi8vICAgYm94LXNoYWRvdzogb3V0bGluZSAwcHggMHB4IDUwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbi8vIH1cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogNzVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLmhhbWJ1cmdlci1saW5lIHtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcCB7XHJcbiAgICB0b3A6IDE4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxyXG4gIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0b3A6IDQ4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5mb3JtIHtcclxuICBidXR0b24uYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJhbmQtZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgbWF4LXdpZHRoOiA1MCU7XHJcbn1cclxuI3N1Yi10by1ob21lIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuI3N1Yi10by1ob21lOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG5cclxuICAub3ZlcmxheS1jb250ZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjUlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbGluayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjQ1cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3Zlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWxpbms6aG92ZXIsXHJcbiAgLm92ZXJsYXktbGluazpmb2N1cyB7XHJcbiAgICBjb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLm92ZXJsYXktbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNmYS1mYS11c2VyIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnYtbm9uZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoOTUwJSk7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMC4zcmVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiNlbWFpbC1sb2dpbi1pbnB1dCxcclxuI2VtYWlsLWxvZ2luLWlucHV0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4iXX0= */"]
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
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.teamMemberTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.teamMemberText);
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
      consts: [[1, "about-page"], [1, "intro-section"], [1, "title", "page-title"], [1, "title"], [1, "team-section", "pt-0"], [1, "row-upper"], [1, "member-img-container"], ["src", "/assets/submarine.png", "alt", "Djajko", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Vane", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Babu6o", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Ivana", 1, "img-fluid", 3, "click"], [1, "row-lower"], ["src", "/assets/submarine.png", "alt", "Blagio", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Jovica", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Matej", 1, "img-fluid", 3, "click"], ["src", "/assets/submarine.png", "alt", "Damjan", 1, "img-fluid", 3, "click"], ["class", "rendered-bio", 4, "ngIf"], [1, "rendered-bio"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.about-page[_ngcontent-%COMP%] {\n  background: #fafafa;\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  color: whitesmoke;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem;\n  margin-bottom: 0;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.team-section[_ngcontent-%COMP%] {\n  padding: 2rem 5rem;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 2rem;\n  padding: 2rem;\n  position: relative;\n}\n@media only screen and (max-width: 600px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n    padding: 1rem 0;\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n    padding: 1rem 0;\n    flex-wrap: nowrap;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n    padding: 1rem 0;\n    flex-wrap: wrap;\n  }\n}\nsection.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    margin-right: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    margin-right: 1rem;\n  }\n}\nsection.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 3px 0;\n  margin: auto;\n  width: 150px;\n  transition: 0.4s;\n  transform: scale(1);\n}\n@media only screen and (max-width: 600px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 125px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  section.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%], section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\nsection.team-section[_ngcontent-%COMP%]   section.row-upper[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]:hover, section.team-section[_ngcontent-%COMP%]   section.row-lower[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  transform: scale(1.1);\n}\nsection.team-section[_ngcontent-%COMP%]   .row-upper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  top: -10%;\n  background-color: whitesmoke;\n}\nsection.team-section[_ngcontent-%COMP%]   .row-lower[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  bottom: -10%;\n  background-color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUFFQSxzQkFBQTtBQTRCQSx5QkFBQTtBRXhHQTtFQUNFLG1CQUFBO0VBQ0EscURBQUE7RUFDQSxpQkFBQTtBRHVERjtBQ3RERTtFQUNFLGFBQUE7QUR3REo7QUN2REk7RUFDRSxrQkFBQTtBRHlETjtBQ3ZESTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEeUROO0FDdkRJO0VBQ0UsbUJBQUE7QUR5RE47QUNyREE7RUFDRSxrQkFBQTtBRHdERjtBQ3RERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQWdCQSxrQkFBQTtBRHlDSjtBREhFO0VFekRBO0lBS0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VEMkRKO0FBQ0Y7QURMRTtFRTlEQTtJQVVJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUQ2REo7QUFDRjtBRFBFO0VFbkVBO0lBZUksY0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VEK0RKO0FBQ0Y7QUM3REk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRCtETjtBRDVCRTtFRXJDRTtJQUlJLG1CQUFBO0VEaUVOO0FBQ0Y7QUQ1QkU7RUUxQ0U7SUFRSSxtQkFBQTtJQUNBLGtCQUFBO0VEa0VOO0FBQ0Y7QUQ3QkU7RUUvQ0U7SUFZSSxtQkFBQTtJQUNBLGtCQUFBO0VEb0VOO0FBQ0Y7QUNuRU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRHFFUjtBRHRERTtFRXRCSTtJQVNJLFlBQUE7RUR1RVI7QUFDRjtBRHRERTtFRTNCSTtJQVlJLFlBQUE7RUR5RVI7QUFDRjtBRHRERTtFRWhDSTtJQWVJLFlBQUE7RUQyRVI7QUFDRjtBQ3hFTTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUQwRVI7QUNyRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtBRHVFSjtBQ3BFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FEc0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KXtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLmFib3V0LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUucGFnZS10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3ctdXBwZXIsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAycmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LXVwcGVyLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LXVwcGVyLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3ctdXBwZXIsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIHtcbiAgICBtYXJnaW46IDFyZW0gMDtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy11cHBlciAubWVtYmVyLWltZy1jb250YWluZXIsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIC5tZW1iZXItaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3ctdXBwZXIgLm1lbWJlci1pbWctY29udGFpbmVyLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciAubWVtYmVyLWltZy1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy11cHBlciAubWVtYmVyLWltZy1jb250YWluZXIsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIC5tZW1iZXItaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy11cHBlciAubWVtYmVyLWltZy1jb250YWluZXIsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIC5tZW1iZXItaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LXVwcGVyIC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDE1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy11cHBlciAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZCwgc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3ctbG93ZXIgLm1lbWJlci1pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LXVwcGVyIC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZCB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3ctdXBwZXIgLm1lbWJlci1pbWctY29udGFpbmVyIC5pbWctZmx1aWQsIHNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LWxvd2VyIC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93LXVwcGVyIC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkOmhvdmVyLCBzZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdy1sb3dlciAubWVtYmVyLWltZy1jb250YWluZXIgLmltZy1mbHVpZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIC5yb3ctdXBwZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xuICB0b3A6IC0xMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiAucm93LWxvd2VyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYm90dG9tOiAtMTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleFwiO1xyXG5cclxuLmFib3V0LXBhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAuaW50cm8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLnBhZ2UtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5zZWN0aW9uLnRlYW0tc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG5cclxuICBzZWN0aW9uLnJvdy11cHBlciwgc2VjdGlvbi5yb3ctbG93ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1lbWJlci1pbWctY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAwIGdldENvbG9yKGJveFNoYWRvd0NvbG9yKTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW1nLWZsdWlkOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJvdy11cHBlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIC5yb3ctbG93ZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogLTEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
  "./src/app/components/pages/admin-panel/admin-panel.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/pages/admin-panel/admin-panel.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppComponentsPagesAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");

    var AdminPanelComponent = /*#__PURE__*/function () {
      function AdminPanelComponent(reviewService) {
        _classCallCheck(this, AdminPanelComponent);

        this.reviewService = reviewService;
        this.chart = [];
      }

      _createClass(AdminPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminPanelComponent;
    }();

    AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) {
      return new (t || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]));
    };

    AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminPanelComponent,
      selectors: [["app-admin-panel"]],
      decls: 5,
      vars: 0,
      consts: [[1, "parent"], [1, "admin-metrics"], [1, "admin-user-management"], [1, "admin-review-management"], [1, "admin-company-management"]],
      template: function AdminPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n\n.admin-metrics[_ngcontent-%COMP%] {\n  grid-area: 1/1/5/15;\n}\n\n.admin-user-management[_ngcontent-%COMP%] {\n  grid-area: 6/1/14/5;\n}\n\n.admin-review-management[_ngcontent-%COMP%] {\n  grid-area: 6/6/14/10;\n}\n\n.admin-company-management[_ngcontent-%COMP%] {\n  grid-area: 6/11/14/15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGFkbWluLXBhbmVsXFxhZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gIGdyaWQtcm93LWdhcDogMHB4O1xyXG59XHJcblxyXG4uYWRtaW4tbWV0cmljcyB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAxNTtcclxufVxyXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcclxuICBncmlkLWFyZWE6IDYgLyAxIC8gMTQgLyA1O1xyXG59XHJcbi5hZG1pbi1yZXZpZXctbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gNiAvIDE0IC8gMTA7XHJcbn1cclxuLmFkbWluLWNvbXBhbnktbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gMTEgLyAxNCAvIDE1O1xyXG59XHJcbiIsIi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbn1cblxuLmFkbWluLW1ldHJpY3Mge1xuICBncmlkLWFyZWE6IDEvMS81LzE1O1xufVxuXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzEvMTQvNTtcbn1cblxuLmFkbWluLXJldmlldy1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzYvMTQvMTA7XG59XG5cbi5hZG1pbi1jb21wYW55LW1hbmFnZW1lbnQge1xuICBncmlkLWFyZWE6IDYvMTEvMTQvMTU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-panel',
          templateUrl: './admin-panel.component.html',
          styleUrls: ['./admin-panel.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/companies/companies.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/pages/companies/companies.component.ts ***!
    \*******************************************************************/

  /*! exports provided: CompaniesComponent */

  /***/
  function srcAppComponentsPagesCompaniesCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function () {
      return CompaniesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CompaniesComponent = /*#__PURE__*/function () {
      function CompaniesComponent() {
        _classCallCheck(this, CompaniesComponent);
      }

      _createClass(CompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompaniesComponent;
    }();

    CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
      return new (t || CompaniesComponent)();
    };

    CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompaniesComponent,
      selectors: [["app-companies"]],
      decls: 2,
      vars: 0,
      template: function CompaniesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "companies works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-companies',
          templateUrl: './companies.component.html',
          styleUrls: ['./companies.component.scss']
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
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/contact.service */
    "./src/app/shared/contact.service.ts");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(toastrService, contactService, authService) {
        _classCallCheck(this, ContactComponent);

        this.toastrService = toastrService;
        this.contactService = contactService;
        this.authService = authService;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var contactName = '';
          var contactEmail = '';
          var contactMessage = '';
          this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactEmail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](contactMessage, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onSubmitContactForm",
        value: function onSubmitContactForm() {
          this.authService.showHTTPLoader(true);
          var newComment = this.contactForm.value;
          this.contactForm.reset();
          this.post(newComment);
        }
      }, {
        key: "post",
        value: function post(comment) {
          var _this3 = this;

          this.contactService.postComment(comment).then(function (response) {
            _this3.authService.showHTTPLoader(false);

            _this3.toastrService.success('Thank You!');
          })["catch"](function (errorRes) {
            _this3.authService.showHTTPLoader(false);

            _this3.toastrService.error(errorRes.message, 'Error.');
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 24,
      vars: 2,
      consts: [[1, "contact-page-wrapper"], [1, "main-contact"], [1, "contact-form"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "required", "", "placeholder", "FULL NAME"], ["formControlName", "email", "type", "email", "required", "", "placeholder", "EMAIL ADDRESS"], ["name", "message", "required", "", "cols", "30", "rows", "5", "formControlName", "message", "placeholder", "MESSAGE"], ["type", "submit", 1, "btn", "btn-dark", "submit-btn", 3, "disabled"], [1, "contact-address"], [1, "content"], [1, "fa", "fa-map-marker", "mr-2"], [1, "fa", "fa-envelope", "mr-2"], [1, "fa", "fa-volume-control-phone", "mr-2"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Send Us A Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmitContactForm();
          });

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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  padding: 8% 0;\n  min-height: 100vh;\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: #343a40;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.btn.btn-dark[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: linear-gradient(163deg, #444a50 0%, #343a40 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #dddddd;\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    width: 150px;\n    display: block;\n    margin: 0 auto 1rem auto;\n  }\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUFFQSxzQkFBQTtBQTRCQSx5QkFBQTtBRXhHQTtFQUNFLHFEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FEdURGO0FDcERBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsdUJBQUE7QUR1REY7QUNwREE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBRHVERjtBQ3BEQTtFQUNFLGVBQUE7QUR1REY7QUNwREE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRHVERjtBQ3BEQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEdURGO0FDcERBOztFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEdURGO0FDcERBOztFQUVFLHFDQUFBO0VBQ0EscUJBQUE7QUR1REY7QUNwREE7RUFFRSxlQUFBO0FEdURGO0FDekRBO0VBRUUsZUFBQTtBRHVERjtBQ3pEQTtFQUVFLGVBQUE7QUR1REY7QUN6REE7O0VBRUUsZUFBQTtBRHVERjtBQ3BEQTtFQUNFLFlBQUE7QUR1REY7QUNwREE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSw0REFBQTtBRHNERjtBQ25EQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FEc0RGO0FDbkRBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0FEc0RGO0FDbkRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FEc0RGO0FDbkRBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VEc0RGOztFQ25EQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VEc0RGOztFQ25EQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFRHNERjs7RUNuREE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RURzREY7O0VDbkRBO0lBQ0UsYUFBQTtFRHNERjs7RUNuREE7SUFDRSxjQUFBO0VEc0RGOztFQ25EQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0lBQ0Esd0JBQUE7RURzREY7QUFDRjtBQ25EQTs7RUFFRSxxQkFBQTtBRHFERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uY29udGFjdC1wYWdlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbiAgcGFkZGluZzogOCUgMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5tYWluLWNvbnRhY3Qge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XG4gIHdpZHRoOiA2NSU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmEge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSB7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbnRhY3QtZm9ybSBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDVweCAwIDE3cHggMDtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYnRuLmJ0bi1kYXJrIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAzNSU7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM0NDRhNTAgMCUsICMzNDNhNDAgNDIlKTtcbn1cblxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG59XG5cbi5jb250ZW50IHAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tYWluLWNvbnRhY3Qge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsb2F0OiB1bnNldDtcbiAgfVxuXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XG4gICAgZmxvYXQ6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmNvbnRlbnQgaDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGVudCBwIHtcbiAgICBwYWRkaW5nOiB1bnNldDtcbiAgfVxuXG4gIC5zdWJtaXQtYnRuIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xuICB9XG59XG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmNvbnRhY3QtcGFnZS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBwYWRkaW5nOiA4JSAwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWN0IHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmEge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiAjMzQzYTQwO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQsXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDVweCAwIDE3cHggMDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZGQyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OmZvY3VzLFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjYTQ4OTc4NWU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLWRhcmsge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICgjMmQzNDM2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNDQ0YTUwIDAlLCAjMzQzYTQwIDQyJSk7XHJcbn1cclxuXHJcbi5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgaDEge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQgcCB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm1haW4tY29udGFjdCB7XHJcbiAgICBoZWlnaHQ6IHVuc2V0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XHJcbiAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMjNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IGgxIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCBwIHtcclxuICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"]
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
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: _shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
        }, {
          type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function HomeComponent_app_review_element_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-review-element", 40);
      }

      if (rf & 2) {
        var review_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reviewElement", review_r2);
      }
    }

    function HomeComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You need to create an account first. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_103_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.onSubmit(ctx_r3.authForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Sign Up ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.authForm);
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(toastr, formBuilder, auth, reviewService) {
        _classCallCheck(this, HomeComponent);

        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.reviewService = reviewService;
        this.loggedIn = false;
        this.authForm = this.formBuilder.group({
          email: '',
          password: ''
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.auth.showHTTPLoader(true);
          this.reviewService.getReviews().subscribe(function (data) {
            _this4.auth.showHTTPLoader(false);

            _this4.reviewList = data.map(function (e) {
              return e.payload.doc.data();
            });
            _this4.reviewList = _this4.reviewList.sort(function (f, s) {
              return s.timeStamp - f.timeStamp;
            });

            _this4.render(_this4.reviewList);
          }, function (errorRes) {
            _this4.toastr.error(errorRes.message, 'Error.');

            _this4.auth.showHTTPLoader(false);
          });
        }
      }, {
        key: "checkIfLoggedIn",
        value: function checkIfLoggedIn() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.auth.authStateTrack();

                  case 2:
                    this.loggedIn = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(authData) {
          this.auth.signUp(authData.email, authData.password);
          this.authForm.reset();
        }
      }, {
        key: "render",
        value: function render(revs) {
          revs.map(function (item) {
            item.timeStamp = item.timeStamp.toDate();
            item.timeStamp = moment__WEBPACK_IMPORTED_MODULE_2__(item.timeStamp).format('Do MMMM YY');
          });
          this.listOfReviews = revs;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 104,
      vars: 4,
      consts: [[1, "filter-options", "py-3", "d-flex", "justify-content-center", "w-100", "bg-light"], ["name", "options", "id", "filter-options", 1, "form-control", "bg-light"], ["value", "City"], ["value", "Country"], ["value", "Rating"], [1, "btn", "filter-btn"], [1, "d-flex", "justify-content-between", "dark-bg"], [1, "main-section", "w-100", "mr-sm-0", "mr-lg-3"], [1, "hero-companies", "my-5"], [1, "featured-companies-h"], [1, "card", "dark-bg"], [1, "card-header"], [3, "routerLink"], [1, "card-body"], [1, "card-aside"], [1, "img-fluid"], ["src", "/assets/submarine.png", "alt", "Hero Company Title"], [1, "company-info"], [1, "icon-toolbar", "d-sm-block", "d-xl-flex", "py-2", "mb-3"], [1, "company-info-item"], ["aria-hidden", "true", 1, "fa", "fa-industry"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], [1, "card-text", "text-white", "mt-2"], ["href", "#", "mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "w-50", "td-none"], [1, "top-reviewed-companies", "mt-6"], [1, "text-center", "text-white", "my-5", "underlineBefore", "p-2"], [1, "reviewed-companies-container"], [1, "card", "mr-3", "dark-bg"], ["src", "/assets/submarine.png", "alt", "BestReviewedCompany"], [1, "reviewed-body"], [1, "icon-bundle"], [1, "fa", "fa-map-marker", "mr-2"], [1, "ml-2"], [1, "fa", "fa-star", "mr-2"], ["href", "#", "mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "td-none"], [1, "text-center", "text-white", "mt-5", "mb-3", "underlineBefore", "p-2"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "account-controls", "d-none", "d-lg-block"], ["class", "account-wrapper", 4, "ngIf"], [1, "my-3", 3, "reviewElement"], [1, "account-wrapper"], [1, "avatar-wrapper"], ["src", "/assets/submarine.png", "alt", "User Avatar", 1, "img-fluid", "mt-5"], [1, "dropdown-divider", "mx-3"], [1, "text-center", "my-3"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "formControlName", "email"], ["type", "password", "matInput", "", "formControlName", "password"], ["type", "submit", "id", "signup-btn-home", 1, "btn", "btn-dark", "mx-auto", "d-block"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Featured Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Hero Company");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Technology ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Vidoe Smilevski Bato 95 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "+389 77 500 000 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus error odit adipisci, commodi modi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Top Reviewed Companies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Company name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Company name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Company name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h3", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, HomeComponent_app_review_element_101_Template, 1, 1, "app-review-element", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "aside", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, HomeComponent_div_103_Template, 19, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_10__["ReviewElementComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 2px solid #2c3e50;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: whitesmoke;\n  position: relative;\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 54px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 66px;\n  }\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n@media only screen and (max-width: 600px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-right: none;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .main-section[_ngcontent-%COMP%] {\n    border-right: 2px solid #2c3e50;\n  }\n}\n.hero-companies[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.hero-companies[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 175px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 2rem;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 5px;\n  }\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n}\n.top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n@media only screen and (max-width: 600px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  display: block;\n  margin: auto;\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: whitesmoke;\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\naside[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n  background-color: #2c3e50;\n  margin: 3rem 3rem 0 0;\n  padding: 3rem;\n  padding-top: 0;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 25%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\naside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: auto;\n}\naside[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\naside[_ngcontent-%COMP%]   h4.text-center[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filter-options[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 5px 0 black;\n}\n.filter-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 10px;\n}\n.filter-options[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #212121;\n  color: #ffffff;\n}\n#signin-btn-home[_ngcontent-%COMP%], #signup-btn-home[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\napp-review-element[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 80%;\n}\n@media only screen and (max-width: 600px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.dark-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n.fa[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n@media only screen and (max-width: 600px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 600px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUFFQSxzQkFBQTtBQTRCQSx5QkFBQTtBRXhHQTtFQUNFLGdCQUFBO0VBdUNBLCtCQUFBO0FEaUJGO0FDckRFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUR1REo7QURlRTtFRTNFQTtJQU9JLGVBQUE7RUR5REo7QUFDRjtBRGVFO0VFaEZBO0lBVUksZUFBQTtFRDJESjtBQUNGO0FEZUU7RUVyRkE7SUFjSSxlQUFBO0VENERKO0FBQ0Y7QURlRTtFRTFGQTtJQWtCSSxlQUFBO0VENkRKO0FBQ0Y7QURlRTtFRS9GQTtJQXNCSSxlQUFBO0VEOERKO0FBQ0Y7QUMzREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUQ2REo7QURuQkU7RUUvRUY7SUEwQ0ksa0JBQUE7RUQ0REY7QUFDRjtBRG5CRTtFRXBGRjtJQThDSSxrQkFBQTtFRDZERjtBQUNGO0FEbkJFO0VFekZGO0lBa0RJLGtCQUFBO0VEOERGO0FBQ0Y7QURuQkU7RUU5RkY7SUFxREksK0JBQUE7RURnRUY7QUFDRjtBQzdEQTtFQUNFLFVBQUE7QURnRUY7QUMvREU7RUFDRSxtQkFBQTtBRGlFSjtBQy9ERTtFQUNFLDRDQUFBO0FEaUVKO0FDaEVJO0VBQ0UseUJBQUE7QURrRU47QUNqRU07RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRG1FUjtBQy9ESTtFQUNFLGFBQUE7QURpRU47QUQ1REU7RUVORTtJQUdJLGNBQUE7RURtRU47QUFDRjtBRGxERTtFRXJCRTtJQU1JLGNBQUE7RURxRU47QUFDRjtBQ2xFVTtFQUNFLFlBQUE7QURvRVo7QUR6RUU7RUVJUTtJQUdJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFRHNFWjtBQUNGO0FEM0VFO0VFRFE7SUFRSSxZQUFBO0VEd0VaO0FBQ0Y7QUR0RUU7RUVYUTtJQVdJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFRDBFWjtBQUNGO0FEeEVFO0VFaEJRO0lBZ0JJLFlBQUE7RUQ0RVo7QUFDRjtBQ3hFTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBRDBFUjtBRHJHRTtFRXlCSTtJQUlJLGlCQUFBO0VENEVSO0FBQ0Y7QURyR0U7RUVvQkk7SUFPSSxpQkFBQTtFRDhFUjtBQUNGO0FEckdFO0VFZUk7SUFXSSxpQkFBQTtFRCtFUjtBQUNGO0FEckdFO0VFVUk7SUFlSSxpQkFBQTtFRGdGUjtBQUNGO0FEckdFO0VFS0k7SUFtQkksaUJBQUE7RURpRlI7QUFDRjtBQzlFWTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRGdGZDtBRGxJRTtFRWdEVTtJQUlFLGVBQUE7RURrRlo7QUFDRjtBRHZJRTtFRStDUTtJQVNJLG1CQUFBO0VEbUZaO0FBQ0Y7QUR2SUU7RUUwQ1E7SUFZSSxtQkFBQTtFRHFGWjtBQUNGO0FEdklFO0VFcUNRO0lBZUksbUJBQUE7RUR1Rlo7QUFDRjtBRGxJRTtFRTZDWTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFRHdGZDtFQ3RGWTtJQUNFLGlCQUFBO0VEd0ZkO0FBQ0Y7QUM5RUU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FEaUZKO0FEcEtFO0VFaUZBO0lBSUksZUFBQTtFRG1GSjtBQUNGO0FEMUpFO0VFa0VBO0lBT0ksZUFBQTtFRHFGSjtBQUNGO0FDakZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEb0ZGO0FEbkxFO0VFNkZGO0lBSUksY0FBQTtFRHNGRjtBQUNGO0FEbkxFO0VFd0ZGO0lBUUksY0FBQTtFRHVGRjtBQUNGO0FEbkxFO0VFbUZGO0lBWUksY0FBQTtFRHdGRjtBQUNGO0FEbkxFO0VFOEVGO0lBZ0JJLGNBQUE7RUR5RkY7QUFDRjtBQ3ZGRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUR5Rko7QUQ1TUU7RUVnSEE7SUFLSSxpQkFBQTtFRDJGSjtBQUNGO0FENU1FO0VFMkdBO0lBUUksaUJBQUE7RUQ2Rko7QUFDRjtBRDVNRTtFRXNHQTtJQVdJLGlCQUFBO0VEK0ZKO0FBQ0Y7QUQ1TUU7RUVpR0E7SUFjSSxpQkFBQTtFRGlHSjtBQUNGO0FDaEdJO0VBQ0UseUJBQUE7QURrR047QUNqR007RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURtR1I7QUR6T0U7RUVrSUk7SUFNSSxlQUFBO0VEcUdSO0FBQ0Y7QUQxTkU7RUU4R0k7SUFTSSxlQUFBO0VEdUdSO0FBQ0Y7QUNuR0k7RUFDRSxhQUFBO0FEcUdOO0FEbE9FO0VFNEhFO0lBR0ksY0FBQTtFRHVHTjtBQUNGO0FDcEdVO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEc0daO0FEdFBFO0VFNklRO0lBS0ksWUFBQTtFRHdHWjtBQUNGO0FDbEdJO0VBQ0UsT0FBQTtBRG9HTjtBRHBQRTtFRStJRTtJQUdJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RURzR047QUFDRjtBRGhSRTtFRTJLSTtJQUVJLGFBQUE7SUFDQSx1QkFBQTtFRHVHUjtBQUNGO0FEalJFO0VFc0tJO0lBTUksYUFBQTtJQUNBLHVCQUFBO0VEeUdSO0FBQ0Y7QUQ3UUU7RUU0Skk7SUFVSSxhQUFBO0lBQ0EsdUJBQUE7RUQyR1I7QUFDRjtBRHhSRTtFRWlLSTtJQWNJLGFBQUE7SUFDQSx1QkFBQTtFRDZHUjtBQUNGO0FDNUdRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEOEdWO0FEeFNFO0VFdUxNO0lBS0ksa0JBQUE7RURnSFY7QUFDRjtBRHhTRTtFRWtMTTtJQVFJLGtCQUFBO0VEa0hWO0FBQ0Y7QUR4U0U7RUU2S007SUFXSSxrQkFBQTtFRG9IVjtBQUNGO0FEeFNFO0VFd0tNO0lBY0ksZUFBQTtFRHNIVjtBQUNGO0FDL0dBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBRGtIRjtBQ2hIRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRGtISjtBQy9HSTtFQUNFLFlBQUE7QURpSE47QUM5R0U7RUFDRSxlQUFBO0FEZ0hKO0FDNUdBO0VBQ0UsaUNBQUE7QUQrR0Y7QUM5R0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QURnSEo7QUM5R0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FEZ0hKO0FDNUdBOztFQUVFLGlCQUFBO0FEK0dGO0FDNUdBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUQrR0Y7QUQ5V0U7RUU2UEY7SUFJSSxVQUFBO0VEaUhGO0FBQ0Y7QUQ5V0U7RUV3UEY7SUFRSSxVQUFBO0VEa0hGO0FBQ0Y7QUQ5V0U7RUVtUEY7SUFZSSxVQUFBO0VEbUhGO0FBQ0Y7QUNoSEE7RUFDRSxxREFBQTtBRG1IRjtBQ2hIQTtFQUNFLGtCQUFBO0FEbUhGO0FEcllFO0VFaVJGO0lBR0ksZUFBQTtFRHFIRjtBQUNGO0FEcllFO0VFNFFGO0lBTUksZUFBQTtFRHVIRjtBQUNGO0FEcllFO0VFdVFGO0lBVUksZUFBQTtFRHdIRjtBQUNGO0FEcllFO0VFa1FGO0lBY0ksZUFBQTtFRHlIRjtBQUNGO0FEcllFO0VFNlBGO0lBa0JJLGVBQUE7RUQwSEY7QUFDRjtBQ3ZIQTtFQUNFLFVBQUE7QUQwSEY7QURsYUU7RUV1U0Y7SUFHSSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7RUQ0SEY7QUFDRjtBRGxhRTtFRWtTRjtJQU1JLFVBQUE7RUQ4SEY7QUFDRjtBRGxhRTtFRTZSRjtJQVNJLFVBQUE7RURnSUY7QUFDRjtBRGxhRTtFRXdSRjtJQVlJLFVBQUE7RURrSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgYXNpZGUsIC5tYWluLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlLCAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYSwgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSwgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIGE6OmJlZm9yZSwgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSwgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIGE6aG92ZXI6OmJlZm9yZSwgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4ubWFpbi1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzJjM2U1MDtcbn1cbi5tYWluLXNlY3Rpb24gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA2NnB4O1xuICB9XG59XG4ubWFpbi1zZWN0aW9uIGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLXNlY3Rpb24ge1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyYzNlNTA7XG4gIH1cbn1cblxuLmhlcm8tY29tcGFuaWVzIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5oZXJvLWNvbXBhbmllcyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQge1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDE3NXB4O1xuICB9XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2LCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2LCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0gaDYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbi50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIGgzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIGgzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnRvcC1yZXZpZXdlZC1jb21wYW5pZXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuXG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSB7XG4gIGZsZXg6IDE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuXG5hc2lkZSB7XG4gIGNvbG9yOiAjZWNmMGYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDNyZW0gM3JlbSAwIDA7XG4gIHBhZGRpbmc6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbmFzaWRlIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5hc2lkZSAuYnRuLWdyb3VwIC5idG4ge1xuICBtYXJnaW46IDEwcHg7XG59XG5hc2lkZSBoNC50ZXh0LWNlbnRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZpbHRlci1vcHRpb25zIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIGJsYWNrO1xufVxuLmZpbHRlci1vcHRpb25zIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5maWx0ZXItb3B0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3NpZ25pbi1idG4taG9tZSxcbiNzaWdudXAtYnRuLWhvbWUge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuYXBwLXJldmlldy1lbGVtZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLmZhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbi5kLWJsb2NrLm14LWF1dG8ubXQtNS50ZC1ub25lIHtcbiAgd2lkdGg6IDc1JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kLWJsb2NrLm14LWF1dG8ubXQtNS50ZC1ub25lIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ubWFpbi1zZWN0aW9uIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBnZXRGb250U2l6ZShoMSk7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDY2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyYzNlNTA7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyYzNlNTA7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVyby1jb21wYW5pZXMge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIEBleHRlbmQgLmFuaW1hdGVkQmVmb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYXNpZGUge1xyXG4gICAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY29tcGFueS1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAuY29tcGFueS1pbmZvLWl0ZW0ge1xyXG4gICAgICAgICAgICBoNiwgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIHtcclxuICBoMyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGlue1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAZXh0ZW5kIC5hbmltYXRlZEJlZm9yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtYm9keSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1hc2lkZSB7XHJcbiAgICAgICAgLmltZy1mbHVpZCB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmV2aWV3ZWQtYm9keSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi1idW5kbGUge1xyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hc2lkZSB7XHJcbiAgY29sb3I6ICNlY2YwZjE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcclxuICBtYXJnaW46IDNyZW0gM3JlbSAwIDA7XHJcbiAgcGFkZGluZzogM3JlbTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIC5pbWctZmx1aWQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIC5idG4tZ3JvdXAge1xyXG4gICAgLmJ0biB7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaDQudGV4dC1jZW50ZXIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1vcHRpb25zIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgZ2V0Q29sb3IoYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuI3NpZ25pbi1idG4taG9tZSxcclxuI3NpZ251cC1idG4taG9tZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbmFwcC1yZXZpZXctZWxlbWVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGFyay1iZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW57XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"]
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["logiRegi"];

    function LoginComponent_main_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.onRegisterFormSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.onLoginFormSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot your password?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Log in ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Welcome Back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_26_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.triggerLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Log in ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Don't have an account yet?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.triggerRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_i_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.registerForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.registerForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r20.loginForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r20.loginForm.valid);
      }
    }

    var _c1 = function _c1() {
      return ["/my-account"];
    };

    function LoginComponent_section_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account controls");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Log Out ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(auth, toastrService, router) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.toastrService = toastrService;
        this.router = router;
        this.clMod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoggedIn = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.auth.authStateTrack().then(function (response) {
            _this5.isLoggedIn = response.logged;
          }, function (errRes) {
            _this5.toastrService.error(errRes.message, 'Error.');
          })["catch"](function (errorRes) {
            _this5.toastrService.error(errorRes.message, 'Error.');
          });
          this.initLoginForm();
          this.initRegisterForm();
          this.router.events.subscribe(function (eventChange) {
            if (eventChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this5.closeModal();
            }
          });
        }
      }, {
        key: "initRegisterForm",
        value: function initRegisterForm() {
          var eMail = '';
          var passWord = '';
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            registerEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](eMail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            registerPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passWord, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onRegisterFormSubmit",
        value: function onRegisterFormSubmit() {
          var _this6 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signUp(this.registerForm.value.registerEmail, this.registerForm.value.registerPassword).then(function (response) {
            _this6.closeModal();

            _this6.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this6.auth.showHTTPLoader(false);

            _this6.toastrService.error(error.message, 'An error has occurred.');
          });
        }
      }, {
        key: "initLoginForm",
        value: function initLoginForm() {
          var eMail = '';
          var passWord = '';
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](eMail, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](passWord, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          });
        }
      }, {
        key: "onLoginFormSubmit",
        value: function onLoginFormSubmit() {
          var _this7 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password).then(function (response) {
            _this7.toastrService.success('You have been logged in.', 'Success!');

            _this7.closeModal();

            _this7.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this7.toastrService.error(error.message, 'An error has occurred.');

            _this7.auth.showHTTPLoader(false);
          });
        }
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
        key: "logOut",
        value: function logOut() {
          this.auth.signOut();
          this.clMod.emit(false);
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
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
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
      decls: 2,
      vars: 2,
      consts: [["class", "henlo", 4, "ngIf"], [4, "ngIf"], [1, "henlo"], ["id", "logiRegiContainer", 1, "login-register"], ["logiRegi", ""], [1, "form-container", "register-container"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "registerEmail", "required", "", "placeholder", "Email"], ["formControlName", "registerPassword", "type", "password", "required", "", "id", "passwordInput", "placeholder", "Password"], [1, "btn", "btn-dark", 3, "disabled"], [1, "form-container", "login-container"], ["type", "email", "formControlName", "email", "required", "", "placeholder", "Email"], ["type", "password", "formControlName", "password", "required", "", "placeholder", "Password"], ["href", "#"], [1, "overlay-container"], [1, "overlay-wrapper"], [1, "overlay-panel", "overlay-login"], ["id", "login", 1, "ghost", 3, "click"], [1, "overlay-panel", "overlay-register"], ["id", "register", 1, "ghost", 3, "click"], [1, "fa", "fa-times", 3, "click"], [1, "card"], [1, "card-header"], [1, "acc-header"], [1, "fa", "fa-times", "white-icon", 3, "click"], [1, "card-body"], [1, "btn", "btn-dark", "mr-2", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_main_0_Template, 34, 4, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_section_1_Template, 11, 2, "section", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .logged-in-controls[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: white;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n#register[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n#login[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343a40e0;\n  background: linear-gradient(163deg, #2d3436, #2c3e50);\n  color: white;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: #fff;\n    background: #343a40e0;\n    background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: #1c1c1d;\n  font-size: 36px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .acc-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-times.white-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logged-in-controls[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: #2d3436;\n  width: 250px;\n  height: 250px;\n  box-shadow: inset 0 0 5px 0 black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUFFQSxzQkFBQTtBQTRCQSx5QkFBQTtBRXhHQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRHVERjtBQ3BEQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEdURGO0FDcERBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FEdURGO0FDcERBO0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEc0RGO0FDbkRBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FEc0RGO0FDbkRBO0VBQ0UscUNBQUE7RUFDQSxxQkFBQTtBRHNERjtBQ25EQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBRHNERjtBQzlDQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7QURpREY7QUM5Q0E7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FEaURGO0FDOUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FEaURGO0FDOUNBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEaURGO0FDOUNBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRGlERjtBQzlDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FEaURGO0FDOUNBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QURpREY7QUM5Q0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QURnREY7QUM3Q0E7RUFDRSxRQUFBO0VBQ0Esd0JBQUE7QURnREY7QUM3Q0E7RUFDRSwyQkFBQTtBRGdERjtBQzdDQTtFQUNFLDJCQUFBO0FEZ0RGO0FDN0NBO0VBQ0UsNEJBQUE7QURnREY7QUM3Q0E7RUFDRSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEZ0RGO0FDN0NBO0VBQ0UsMEJBQUE7QURnREY7QUM3Q0E7RUFDRSx3QkFBQTtBRGdERjtBQzdDQTtFQUNFLDBCQUFBO0FEZ0RGO0FDN0NBO0VBQ0U7SUFDRSxTQUFBO0VEZ0RGOztFQzdDQTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VEZ0RGOztFQzdDQTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VEZ0RGOztFQzdDQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFRGdERjs7RUM3Q0E7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7RURnREY7O0VDN0NBO0lBQ0UsbUJBQUE7RURnREY7O0VDN0NBO0lBQ0Usa0JBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esc0NBQUE7RURnREY7O0VDN0NBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EscUJBQUE7SUFDQSw0REFBQTtJQUtBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtJQUNBLHNDQUFBO0VENENGOztFQ3pDQTtJQUNFLGtCQUFBO0lBRUEsa0JBQUE7SUFDQSxPQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxzQ0FBQTtFRDJDRjs7RUN4Q0E7SUFDRSxVQUFBO0lBQ0EsVUFBQTtJQUNBLDRCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUQyQ0Y7O0VDeENBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VEMkNGOztFQ3hDQTtJQUNFLFNBQUE7SUFDQSx3QkFBQTtFRDJDRjs7RUN4Q0E7SUFDRSwyQkFBQTtFRDJDRjs7RUN4Q0E7SUFDRSwyQkFBQTtFRDJDRjs7RUN4Q0E7SUFDRSw0QkFBQTtFRDJDRjs7RUN4Q0E7SUFDRSx3QkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VEMkNGOztFQ3hDQTtJQUNFLDBCQUFBO0VEMkNGOztFQ3hDQTtJQUNFLHdCQUFBO0VEMkNGOztFQ3hDQTtJQUNFLDBCQUFBO0VEMkNGO0FBQ0Y7QUN4Q0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRDBDRjtBQ3hDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRDJDRjtBQzFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUQ0Q0o7QUMxQ0U7RUFDRSxnQkFBQTtBRDRDSjtBQ3hDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUQyQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLmxvZ2dlZC1pbi1jb250cm9scywgLm92ZXJsYXktcGFuZWwsIC5mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5sb2dpbi1yZWdpc3RlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubG9naW4tcmVnaXN0ZXIgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5oZW5sbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xufVxuXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5sb2dpbi1yZWdpc3RlciBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHggNDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuI3JlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbiNsb2dpbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLm92ZXJsYXktbG9naW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2xvZ2luUmVnaXN0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5oZW5sbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAub3ZlcmxheS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM2NjY2NjYgMCUsICMzNDNhNDAgNDIlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgdG9wOiAtMTAwJTtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAub3ZlcmxheS1wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm90dG9tOiB1bnNldDtcbiAgICB3aWR0aDogdW5zZXQ7XG4gIH1cblxuICAubG9naW4tY29udGFpbmVyIHtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLm92ZXJsYXktbG9naW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIH1cbn1cbi5mYS5mYS10aW1lcyB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG4gIHRvcDogMiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxYzFjMWQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJkLWhlYWRlciAuYWNjLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5jYXJkLWhlYWRlciAuZmEuZmEtdGltZXMud2hpdGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5sb2dnZWQtaW4tY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIGJsYWNrO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5sb2dpbi1yZWdpc3RlciBoMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgYSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmhlbmxvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNzUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3RlciBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwZTA7XHJcbiAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTJweCA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4vLyBidXR0b24uZ2hvc3Qge1xyXG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbi8vIH1cclxuXHJcbiNyZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXktcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICNsb2dpblJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5oZW5sbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE2M2RlZyxcclxuICAgICAgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKSAwJSxcclxuICAgICAgcmdiYSg1MiwgNTgsIDY0LCAxKSA0MiVcclxuICAgICk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIGJvdHRvbTogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxvZ2luIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLmZhLXRpbWVzIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICB0b3A6IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzFjMWMxZDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLmFjYy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgfVxyXG4gIC5mYS5mYS10aW1lcy53aGl0ZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nZ2VkLWluLWNvbnRyb2xzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuIl19 */"]
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
        return [{
          type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
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
  "./src/app/components/pages/my-account/my-account.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/pages/my-account/my-account.component.ts ***!
    \*********************************************************************/

  /*! exports provided: MyAccountComponent */

  /***/
  function srcAppComponentsPagesMyAccountMyAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function () {
      return MyAccountComponent;
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


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/company.service */
    "./src/app/shared/company.service.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function MyAccountComponent_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r8.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", company_r8.name, " ");
      }
    }

    function MyAccountComponent_mat_option_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", company_r9.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r9.name);
      }
    }

    var MyAccountComponent = /*#__PURE__*/function () {
      function MyAccountComponent(reviewService, companyService, authService, toastr) {
        _classCallCheck(this, MyAccountComponent);

        this.reviewService = reviewService;
        this.companyService = companyService;
        this.authService = authService;
        this.toastr = toastr;
        this.companies = [];
      }

      _createClass(MyAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.authService.showHTTPLoader(true);
          this.companyService.getCompanies().subscribe(function (data) {
            _this8.authService.showHTTPLoader(false);

            data.map(function (e) {
              _this8.companies.push(e.payload.doc.data());
            });
          }, function (errorRes) {
            _this8.authService.showHTTPLoader(false);

            _this8.toastr.error(errorRes, 'Error.');
          });
          this.initForms();
        }
      }, {
        key: "create",
        value: function create() {
          var _this9 = this;

          this.authService.showHTTPLoader(true);
          var review = this.inputForm.value;
          this.inputForm.reset();
          review.timeStamp = new Date();
          this.companies.forEach(function (c) {
            if (c.name === review.companyName) {
              review.imagePath = c.logo;
            }
          });
          this.authService.getUsername().subscribe(function (e) {
            review.userName = e.email;

            _this9.reviewService.postReview(review).then(function (response) {
              _this9.authService.showHTTPLoader(false);

              _this9.toastr.success('Review submitted.', 'Success!');
            })["catch"](function (errorRes) {
              _this9.authService.showHTTPLoader(false);

              _this9.toastr.error(errorRes.message, 'An Error occurred.');
            });
          });
        }
      }, {
        key: "initForms",
        value: function initForms() {
          // Review Input Form
          var companyName = '';
          var rating = '';
          var textExcerpt = '';
          this.inputForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](companyName),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](rating, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            textExcerpt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](textExcerpt, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
          }); // Account Changes Form

          var linkedInAccount = '';
          var changeEmailInput = '';
          var oldPassword = '';
          var newPassword = '';
          var companyAddedNotification = '';
          var myCompanyNotifications = '';
          var multipleCompanies = '';
          this.accountChangesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            linkedInAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](linkedInAccount),
            changeEmailInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](changeEmailInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](oldPassword),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](newPassword),
            companyAddedNotification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](companyAddedNotification),
            myCompanyNotifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](myCompanyNotifications),
            multipleCompanies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](multipleCompanies)
          });
        }
      }]);

      return MyAccountComponent;
    }();

    MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
      return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAccountComponent,
      selectors: [["app-my-account"]],
      decls: 61,
      vars: 5,
      consts: [[1, "body", "parent"], [1, "d-flex", "flex-column", "container", "div1", 3, "formGroup"], [1, "mt-4"], ["formControlName", "companyName"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["matInput", "", "type", "number", "formControlName", "rating"], ["matInput", "", "formControlName", "textExcerpt", "cols", "30", "rows", "10"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "d-flex", "flex-column", "container", "div2", 3, "formGroup"], ["matInput", "", "formControlName", "linkedInAccount"], ["mat-raised-button", "", "color", "accent"], ["matInput", "", "formControlName", "changeEmailInput"], ["matInput", "", "formControlName", "oldPassword"], ["matInput", "", "formControlName", "newPassword"], ["formControlName", "multipleCompanies", "multiple", ""], ["formControlName", "myCompanyNotifications"], ["formControlName", "companyAddedNotification"], ["mat-raised-button", "", "color", "warn", 1, "mt-4"], [1, "d-flex", "flex-column", "container", "div3"], [1, "parent"], [1, "div1"], [1, "div2"], [1, "div3"], [3, "value"]],
      template: function MyAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_16_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Submit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Linkedin Acocunt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Connect!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Change Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MyAccountComponent_mat_option_48_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-checkbox", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Notify me when a company is reviewed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Notify me when a company is added");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Forgot Password! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.inputForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountChangesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
      styles: [".parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/2/5/4;\n}\n\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/5/5/7;\n}\n\n.div3[_ngcontent-%COMP%] {\n  grid-area: 5/3/7/6;\n}\n\n.body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n  color: #ecf0f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcbXktYWNjb3VudFxcbXktYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QUREQTtFQUNFLHFEQUFBO0FDSUY7O0FEREE7Ozs7RUFJRSxjQUFBO0FDSUY7O0FEREE7O0VBRUUsY0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICBncmlkLXJvdy1nYXA6IDBweDtcclxufVxyXG5cclxuLmRpdjEge1xyXG4gIGdyaWQtYXJlYTogMSAvIDIgLyA1IC8gNDtcclxufVxyXG4uZGl2MiB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIDUgLyA3O1xyXG59XHJcbi5kaXYzIHtcclxuICBncmlkLWFyZWE6IDUgLyAzIC8gNyAvIDY7XHJcbn1cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSxcclxubWF0LWNoZWNrYm94IHtcclxuICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsXHJcbmlucHV0OmZvY3VzIHtcclxuICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG4iLCIucGFyZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xufVxuXG4uZGl2MSB7XG4gIGdyaWQtYXJlYTogMS8yLzUvNDtcbn1cblxuLmRpdjIge1xuICBncmlkLWFyZWE6IDEvNS81Lzc7XG59XG5cbi5kaXYzIHtcbiAgZ3JpZC1hcmVhOiA1LzMvNy82O1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhLFxubWF0LWNoZWNrYm94IHtcbiAgY29sb3I6ICNlY2YwZjE7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogI2VjZjBmMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-account',
          templateUrl: './my-account.component.html',
          styleUrls: ['./my-account.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }, {
          type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ReviewElementComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fill_r33 = ctx.fill;
        var index_r34 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r33 === 100)("bad", index_r34 < 3);
      }
    }

    var _c0 = function _c0() {
      return ["/companies/:id"];
    };

    var ReviewElementComponent = /*#__PURE__*/function () {
      function ReviewElementComponent(config) {
        _classCallCheck(this, ReviewElementComponent);

        config.readonly = true;
      }

      _createClass(ReviewElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentRate = this.reviewElement.rating;
        }
      }]);

      return ReviewElementComponent;
    }();

    ReviewElementComponent.ɵfac = function ReviewElementComponent_Factory(t) {
      return new (t || ReviewElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]));
    };

    ReviewElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewElementComponent,
      selectors: [["app-review-element"]],
      inputs: {
        reviewElement: "reviewElement"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])],
      decls: 21,
      vars: 8,
      consts: [[1, "review-container"], [1, "card-aside"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center", "my-sm-0", "my-md-2", "font-italic"], [1, "card"], [1, "card-header"], [1, "card-title", 3, "routerLink"], [3, "rate", "rateChange"], [1, "card-body", "d-flex", "justify-content-between"], [1, "supporting-flex"], [1, "card-text"], ["mat-raised-button", "", "color", "primary", 1, "see-more-btn"], [1, "votes-container"], ["type", "button", "id", "upVote", 1, "btn", "fa", "fa-arrow-up"], ["type", "button", "id", "downVote", 1, "btn", "fa", "fa-arrow-down"], [1, "star"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-rating", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ReviewElementComponent_Template_ngb_rating_rateChange_10_listener($event) {
            return ctx.currentRate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReviewElementComponent_ng_template_11_Template, 2, 4, "ng-template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "button", 15);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewElement.textExcerpt);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.review-container[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 5px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 100%;\n  border: 1px solid #2c3e50;\n  position: relative;\n}\n@media only screen and (max-width: 600px) {\n  .review-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card-aside[_ngcontent-%COMP%] {\n  background-color: #dfe6e9;\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 100px;\n    display: block;\n    margin: auto;\n    padding: 5px;\n    height: 75px;\n  }\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, #444a50 0%, #2c3e50 80%);\n  flex: 1;\n  border: 0;\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #2c3e50;\n}\n@media only screen and (max-width: 600px) {\n  .card-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  text-decoration: none;\n}\n.card-body[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   .votes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUN0QkY7QUR5QkE7RUFDRSxxQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBQUVBLHNCQUFBO0FBNEJBLHlCQUFBO0FFeEdBO0VBQ0UsYUFBQTtFQUlBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QURvREY7QURtQkU7RUUvRUY7SUFHSSxjQUFBO0VENkRGO0FBQ0Y7QUN0REE7RUFDRSx5QkFBQTtBRHlERjtBQ3ZESTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEeUROO0FETUU7RUVqRUU7SUFJSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFRDJETjtBQUNGO0FDeERFO0VBQ0UseUJBQUE7QUQwREo7QURORTtFRXJEQTtJQUdJLGdCQUFBO0VENERKO0FBQ0Y7QUN4REE7RUFDRSw0REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUQyREY7QUN4REE7RUFDRSw2QkFBQTtBRDJERjtBQ3hEQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUtBLG1CQUFBO0FEdURGO0FENUJFO0VFbENGO0lBSUksY0FBQTtFRDhERjtBQUNGO0FDM0RFO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBRDZESjtBQ3hEQTtFQUlFLGlCQUFBO0FEd0RGO0FDM0RFO0VBQ0UsWUFBQTtBRDZESjtBQzFERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FENERKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLnJldmlldy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3gtc2hhZG93OiA1cHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzNlNTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldmlldy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5jYXJkLWFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcbn1cbi5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgfVxufVxuLmNhcmQtYXNpZGUgcC50ZXh0LWNlbnRlci5teS1tZC0yLm15LXNtLTAuZm9udC1pdGFsaWMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1hc2lkZSBwLnRleHQtY2VudGVyLm15LW1kLTIubXktc20tMC5mb250LWl0YWxpYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM0NDRhNTAgMCUsICMyYzNlNTAgODAlKTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmNhcmQtYm9keSBidXR0b24uc2VlLW1vcmUtYnRuIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLmNhcmQtYm9keSAudm90ZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ucmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGJveC1zaGFkb3c6IDVweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzNlNTA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2FyZC1hc2lkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcclxuICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwLnRleHQtY2VudGVyLm15LW1kLTIubXktc20tMC5mb250LWl0YWxpYyB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNDQ0YTUwIDAlLCAjMmMzZTUwIDgwJSk7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIEBleHRlbmQgLmFuaW1hdGVkQmVmb3JlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgYnV0dG9uLnNlZS1tb3JlLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC52b3Rlcy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxufVxyXG4iXX0= */", ".star[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled[_ngcontent-%COMP%] {\n        color: #1e90ff;\n      }\n      .bad[_ngcontent-%COMP%] {\n        color: #deb0b0;\n      }\n      .filled.bad[_ngcontent-%COMP%] {\n        color: #ff1e1e;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review-element',
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]],
          templateUrl: './review-element.component.html',
          styleUrls: ['./review-element.component.scss'],
          styles: ["\n      .star {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled {\n        color: #1e90ff;\n      }\n      .bad {\n        color: #deb0b0;\n      }\n      .filled.bad {\n        color: #ff1e1e;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]
        }];
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
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");

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
      imports: [[_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]],
        exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]],
          exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/animations.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/animations.ts ***!
    \**************************************/

  /*! exports provided: routeTransitionAnimations */

  /***/
  function srcAppSharedAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routeTransitionAnimations", function () {
      return routeTransitionAnimations;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Contact => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Home => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Contact', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('About => Home', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])])]);
    /***/
  },

  /***/
  "./src/app/shared/auth-guard.guard.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/auth-guard.guard.ts ***!
    \********************************************/

  /*! exports provided: AuthGuardGuard */

  /***/
  function srcAppSharedAuthGuardGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function () {
      return AuthGuardGuard;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AuthGuardGuard = /*#__PURE__*/function () {
      function AuthGuardGuard(router, authService, toastr) {
        _classCallCheck(this, AuthGuardGuard);

        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
      }

      _createClass(AuthGuardGuard, [{
        key: "canActivate",
        value: function canActivate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var state;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.authService.authStateTrack();

                  case 2:
                    state = _context2.sent;

                    if (!state.logged) {
                      _context2.next = 12;
                      break;
                    }

                    if (!state.verified) {
                      _context2.next = 8;
                      break;
                    }

                    return _context2.abrupt("return", true);

                  case 8:
                    this.toastr.error('You must verify your account before continuing!');
                    return _context2.abrupt("return", false);

                  case 10:
                    _context2.next = 14;
                    break;

                  case 12:
                    this.toastr.error('You are not logged in!');
                    return _context2.abrupt("return", false);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AuthGuardGuard;
    }();

    AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) {
      return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuardGuard,
      factory: AuthGuardGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, router, toastr) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
        this.toastr = toastr;
        this.publishEmail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.triggerLoadingScreen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.afAuth.onAuthStateChanged(function (user) {
          if (user) {
            console.log('Logged In!');
          } else {
            console.log('Logged Out!');
          }
        });
      } // User Management Methods (Sign In / Sign Out / Sign Up)


      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.signInWithEmailAndPassword(email, password);

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    this.router.navigate(['/']);
                    this.toastr.success('User signed out!');

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "signUp",
        value: function signUp(email, password) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.afAuth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    this.sendConfirmationEmail();
                    this.toastr.success('User created!');

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        } // async authStateTrack() {
        //   let result: any;
        //   await this.afAuth.onAuthStateChanged((user) => {
        //     if (user) {
        //       result = true;
        //     } else {
        //       result = false;
        //     }
        //   });
        //   return result;
        // }

      }, {
        key: "authStateTrack",
        value: function authStateTrack() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var result;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.afAuth.onAuthStateChanged(function (user) {
                      if (user) {
                        if (user.emailVerified) {
                          result = {
                            logged: true,
                            verified: true
                          };
                        } else {
                          result = {
                            logged: true,
                            verified: false
                          };
                        }
                      } else {
                        result = {
                          logged: false,
                          verified: false
                        };
                      }
                    });

                  case 2:
                    return _context6.abrupt("return", result);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "sendConfirmationEmail",
        value: function sendConfirmationEmail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.afAuth.currentUser;

                  case 2:
                    _context7.sent.sendEmailVerification();

                    this.router.navigate(['/']);

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        } // Get the User

      }, {
        key: "getUsername",
        value: function getUsername() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.currentUser);
        }
      }, {
        key: "showHTTPLoader",
        value: function showHTTPLoader(value) {
          this.triggerLoadingScreen.next(value);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
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
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/company.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/company.service.ts ***!
    \*******************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppSharedCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var CompanyService = /*#__PURE__*/function () {
      function CompanyService(firestore) {
        _classCallCheck(this, CompanyService);

        this.firestore = firestore;
      }

      _createClass(CompanyService, [{
        key: "getCompanies",
        value: function getCompanies() {
          return this.firestore.collection('companies').snapshotChanges();
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ɵfac = function CompanyService_Factory(t) {
      return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CompanyService,
      factory: CompanyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/contact.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/contact.service.ts ***!
    \*******************************************/

  /*! exports provided: ContactService */

  /***/
  function srcAppSharedContactServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactService", function () {
      return ContactService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ContactService = /*#__PURE__*/function () {
      function ContactService(firestore) {
        _classCallCheck(this, ContactService);

        this.firestore = firestore;
      }

      _createClass(ContactService, [{
        key: "postComment",
        value: function postComment(comment) {
          return this.firestore.collection('comments').add(comment);
        }
      }]);

      return ContactService;
    }();

    ContactService.ɵfac = function ContactService_Factory(t) {
      return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContactService,
      factory: ContactService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/http-loader/http-loader.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/http-loader/http-loader.component.ts ***!
    \*************************************************************/

  /*! exports provided: HttpLoaderComponent */

  /***/
  function srcAppSharedHttpLoaderHttpLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderComponent", function () {
      return HttpLoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HttpLoaderComponent = /*#__PURE__*/function () {
      function HttpLoaderComponent() {
        _classCallCheck(this, HttpLoaderComponent);
      }

      _createClass(HttpLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HttpLoaderComponent;
    }();

    HttpLoaderComponent.ɵfac = function HttpLoaderComponent_Factory(t) {
      return new (t || HttpLoaderComponent)();
    };

    HttpLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HttpLoaderComponent,
      selectors: [["app-http-loader"]],
      decls: 2,
      vars: 0,
      consts: [[1, "loader-wrapper"], [1, "lds-dual-ring"]],
      template: function HttpLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".flex-column-center[_ngcontent-%COMP%], .loader-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1001;\n}\n.lds-dual-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  height: 250px;\n}\n.lds-dual-ring[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: 250px;\n  height: 250px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL2h0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaHR0cC1sb2FkZXIvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXHNoYXJlZFxcaHR0cC1sb2FkZXJcXGh0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FBRUEsc0JBQUE7QUE0QkEseUJBQUE7QUV6R0E7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBRHdERjtBQ3BEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUR1REY7QUNyREE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7QUR3REY7QUN0REE7RUFDRTtJQUNFLHVCQUFBO0VEeURGO0VDdkRBO0lBQ0UseUJBQUE7RUR5REY7QUFDRjtBQy9EQTtFQUNFO0lBQ0UsdUJBQUE7RUR5REY7RUN2REE7SUFDRSx5QkFBQTtFRHlERjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL2h0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCl7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpe1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLmxvYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5sb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5sZHMtZHVhbC1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5sZHMtZHVhbC1yaW5nOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IGxkcy1kdWFsLXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDE7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG59XHJcblxyXG4ubGRzLWR1YWwtcmluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi5sZHMtZHVhbC1yaW5nOmFmdGVyIHtcclxuICBjb250ZW50OiAnICc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQ7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWR1YWwtcmluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-http-loader',
          templateUrl: './http-loader.component.html',
          styleUrls: ['./http-loader.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/review.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/review.service.ts ***!
    \******************************************/

  /*! exports provided: ReviewService */

  /***/
  function srcAppSharedReviewServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewService", function () {
      return ReviewService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ReviewService = /*#__PURE__*/function () {
      function ReviewService(firestore) {
        _classCallCheck(this, ReviewService);

        this.firestore = firestore;
      }

      _createClass(ReviewService, [{
        key: "getReviews",
        value: function getReviews() {
          return this.firestore.collection('reviews').snapshotChanges();
        }
      }, {
        key: "postReview",
        value: function postReview(review) {
          return this.firestore.collection('reviews').add(review);
        }
      }, {
        key: "updatePolicy",
        value: function updatePolicy(review) {}
      }, {
        key: "deleteReview",
        value: function deleteReview(reviewId) {
          this.firestore.doc('reviews/' + reviewId)["delete"]();
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ɵfac = function ReviewService_Factory(t) {
      return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]));
    };

    ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ReviewService,
      factory: ReviewService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]
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