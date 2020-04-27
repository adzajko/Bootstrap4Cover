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


    var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/layout/navbar/navbar.component */
    "./src/app/components/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");

    function AppComponent_app_login_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clMod", function AppComponent_app_login_7_Template_app_login_clMod_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.closeModal($event);
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
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
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
      decls: 8,
      vars: 2,
      consts: [[3, "openModal"], ["outlet", "outlet"], [3, "clMod", 4, "ngIf"], [3, "clMod"]],
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
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);
        }
      },
      directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\nheader[_ngcontent-%COMP%] {\n  background-color: #512da8;\n}\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 black;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #f0f2f5;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUUxRUE7RUFDRSx5QkFBQTtBRHFERjtBQ2xEQTtFQUNFLDJCQUFBO0FEcURGO0FDbERBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBRHFERjtBQ2xEQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtBRG9ERiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBhcHAtbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTJkYTg7XG59XG5cbmZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBibGFjaztcbn1cblxubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XG59XG5cbmFwcC1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDIwO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyZGE4O1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xyXG59XHJcblxyXG5hcHAtbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"],
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
    "./src/app/components/pages/admin-panel/admin-panel.component.ts"); // <Firebase Imports>
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
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"], _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _modules_material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_27__["LayoutModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_19__["ReviewElementComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_20__["MyAccountComponent"], _components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_21__["CompaniesComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_29__["AdminPanelComponent"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 0;\n  background-color: #2d3436;\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFMUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FEcURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXhcIjtcclxuXHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzQzNjtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4iXX0= */"]
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
          var _this = this;

          this.auth.authStateTrack().then(function (response) {
            if (response.logged) {
              _this.toggleOverlay();
            } else {
              _this.triggerModal();

              _this.toggleOverlay();
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
      consts: [["color", "warn", 1, "navbar", "d-flex"], [1, "navbar-brand", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo", "d-none", "d-lg-block"], ["id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay"], ["overlay", ""], [1, "overlay-content"], [1, "overlay-link", 3, "routerLink", "click"], [1, "fa", "fa-home", "mr-2"], [1, "fa", "fa-user", "mr-2"], [1, "fa", "fa-building-o", "mr-2"], [1, "fa", "fa-question", "mr-2"], [1, "fa", "fa-phone", "mr-2"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\nform[_ngcontent-%COMP%]   button.btn[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n  width: 150px;\n}\n.brand-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  margin-top: 1rem;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 0;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background-color: black;\n  overflow: hidden;\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 25%;\n  width: 300px;\n  margin: 30px auto 0 auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px;\n  position: relative;\n  text-decoration: none;\n  font-size: 36px;\n  color: #818181;\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0;\n  height: 2px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  background-color: whitesmoke;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  cursor: pointer;\n}\n.v-none[_ngcontent-%COMP%] {\n  margin-left: calc(950%);\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHFCQUFBO0FDdEJGO0FEeUJBLDJCQUFBO0FFMUVBO0VBQ0UsV0FBQTtBRHFERjtBQ2hEQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtBRG1ERjtBQ2pEQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRG9ERjtBQ25ERTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEcURKO0FDbkRFO0VBQ0UsUUFBQTtBRHFESjtBQ25ERTtFQUNFLFdBQUE7RUFDQSxRQUFBO0FEcURKO0FDbERFOztFQUVFLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBRG9ESjtBQ2xERTtFQUNFLHlCQUFBO0FEb0RKO0FDL0NFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRGtESjtBQzlDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsZ0JBQUE7QURpREY7QUMvQ0E7RUFDRSxjQUFBO0FEa0RGO0FDaERBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBRG1ERjtBQ2pEQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QURvREY7QUNqREE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURvREY7QUNsREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QURvREo7QUNoREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRGtESjtBQ2hERTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0QkFBQTtBRGtESjtBQ2hERTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURrREo7QUNoREU7O0VBRUUsY0FBQTtBRGtESjtBQy9DRTtFQUNFO0lBQ0UsZUFBQTtFRGlESjtBQUNGO0FDN0NBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEZ0RGO0FDN0NBO0VBQ0UsdUJBQUE7QURnREY7QUM3Q0E7O0VBRUUsaUJBQUE7QURnREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAxKSxcclxuICAnbGlnaHRZZWxsb3dHcmFkaWVudCc6IHJnYmEoMjM5LCAyMTQsIDE3MiwgMSksXHJcbiAgJ2RhcmtNYXJvb25HcmFkaWVudCc6IHJnYmEoNjcsIDM3LCA1MiwgMSksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnd2hpdGVHcmV5JzogI2ZhZmFmYVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5vdmVybGF5IC5vdmVybGF5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgei1pbmRleDogMTA7XG4gIHdpZHRoOiA3NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZSB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcCB7XG4gIHRvcDogMTglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNDglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUudG9wLm9wZW4sXG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogNDglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG5mb3JtIGJ1dHRvbi5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmJyYW5kLWZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbiNzdWItdG8taG9tZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbiNzdWItdG8taG9tZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm92ZXJsYXkge1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI1JTtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjQ1cztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IGVhc2UgMC41cztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6aG92ZXIsXG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmZvY3VzIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLm92ZXJsYXkgLm92ZXJsYXktbGluayB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbiNmYS1mYS11c2VyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnYtbm9uZSB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDk1MCUpO1xufVxuXG4jZW1haWwtbG9naW4taW5wdXQsXG4jZW1haWwtbG9naW4taW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4uaW1nLWxvZ28ge1xyXG4gIHdpZHRoOiA3NXB4O1xyXG59XHJcbi8vIG1hdC10b29sYmFyIHtcclxuLy8gICBib3gtc2hhZG93OiBvdXRsaW5lIDBweCAwcHggNTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuLy8gfVxyXG5tYXQtdG9vbGJhciB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUudG9wIHtcclxuICAgIHRvcDogMTglO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgfVxyXG5cclxuICAuaGFtYnVyZ2VyLWxpbmUudG9wLm9wZW4sXHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGJ1dHRvbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZC1maXhlZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4jc3ViLXRvLWhvbWUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcblxyXG4gIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyNSU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XHJcbiAgICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1saW5rIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICM4MTgxODE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuNDVzO1xyXG4gIH1cclxuICAub3ZlcmxheS1saW5rOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAub3ZlcmxheS1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3ZlcixcclxuICAub3ZlcmxheS1saW5rOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAub3ZlcmxheS1saW5rIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2ZhLWZhLXVzZXIge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udi1ub25lIHtcclxuICBtYXJnaW4tbGVmdDogY2FsYyg5NTAlKTtcclxufVxyXG5cclxuI2VtYWlsLWxvZ2luLWlucHV0LFxyXG4jZW1haWwtbG9naW4taW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbiJdfQ== */"]
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.about-page[_ngcontent-%COMP%] {\n  background: #fafafa;\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  color: whitesmoke;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem;\n  margin-bottom: 0;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nsection.team-section[_ngcontent-%COMP%] {\n  padding: 2rem 5rem;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%] {\n  margin: 2rem;\n  padding: 2rem;\n  position: relative;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%] {\n  margin: auto;\n  display: flex;\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  cursor: pointer;\n  box-shadow: 0 0 3px 0;\n  margin: auto;\n  width: 150px;\n  transition: 0.4s;\n  transform: scale(1);\n}\nsection.team-section[_ngcontent-%COMP%]   section.row[_ngcontent-%COMP%]   .member-img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  transform: scale(1.1);\n}\nsection.team-section[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  top: -10%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\nsection.team-section[_ngcontent-%COMP%]   .lower[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  max-width: 750px;\n  width: 100%;\n  height: 1px;\n  bottom: -20%;\n  left: 21%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUUxRUE7RUFDRSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsaUJBQUE7QURxREY7QUNwREU7RUFDRSxhQUFBO0FEc0RKO0FDckRJO0VBQ0Usa0JBQUE7QUR1RE47QUNyREk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHVETjtBQ3JESTtFQUNFLG1CQUFBO0FEdUROO0FDbkRBO0VBQ0Usa0JBQUE7QURzREY7QUNwREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEc0RKO0FDckRJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUR1RE47QUN0RE07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRHdEUjtBQ3JETTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUR1RFI7QUNsREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtBRG9ESjtBQ2pERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FEbURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4uYWJvdXQtcGFnZSB7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIHtcbiAgcGFkZGluZzogM3JlbTtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuc2VjdGlvbi50ZWFtLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAycmVtIDVyZW07XG59XG5zZWN0aW9uLnRlYW0tc2VjdGlvbiBzZWN0aW9uLnJvdyB7XG4gIG1hcmdpbjogMnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3cgLm1lbWJlci1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gc2VjdGlvbi5yb3cgLm1lbWJlci1pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxNTBweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIHNlY3Rpb24ucm93IC5tZW1iZXItaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuc2VjdGlvbi50ZWFtLXNlY3Rpb24gLnVwcGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1heC13aWR0aDogNzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgdG9wOiAtMTAlO1xuICBsZWZ0OiAyMSU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbnNlY3Rpb24udGVhbS1zZWN0aW9uIC5sb3dlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvdHRvbTogLTIwJTtcbiAgbGVmdDogMjElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG59IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4XCI7XHJcblxyXG4uYWJvdXQtcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIC5pbnRyby1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDJyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAudGl0bGUucGFnZS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbnNlY3Rpb24udGVhbS1zZWN0aW9uIHtcclxuICBwYWRkaW5nOiAycmVtIDVyZW07XHJcblxyXG4gIHNlY3Rpb24ucm93IHtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAubWVtYmVyLWltZy1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAwIGdldENvbG9yKGJveFNoYWRvd0NvbG9yKTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltZy1mbHVpZDpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC51cHBlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGxlZnQ6IDIxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gIC5sb3dlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvdHRvbTogLTIwJTtcclxuICAgIGxlZnQ6IDIxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuIl19 */"]
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

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(toastrService, contactService) {
        _classCallCheck(this, ContactComponent);

        this.toastrService = toastrService;
        this.contactService = contactService;
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
          this.toastrService.success('Thank You!');
          var newComment = this.contactForm.value;
          this.contactForm.reset();
          this.post(newComment);
        }
      }, {
        key: "post",
        value: function post(comment) {
          this.contactService.postComment(comment);
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 24,
      vars: 2,
      consts: [[1, "contact-page-wrapper"], [1, "main-contact"], [1, "contact-form"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "required", "", "placeholder", "FULL NAME"], ["formControlName", "email", "type", "email", "required", "", "placeholder", "EMAIL ADDRESS"], ["name", "message", "required", "", "cols", "30", "rows", "5", "formControlName", "message", "placeholder", "MESSAGE"], ["type", "submit", 1, "btn", "btn-dark", 3, "disabled"], [1, "contact-address"], [1, "content"], [1, "fa", "fa-map-marker", "mr-2"], [1, "fa", "fa-envelope", "mr-2"], [1, "fa", "fa-volume-control-phone", "mr-2"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  padding: 8% 0;\n  min-height: 100vh;\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: #343a40;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.btn.btn-dark[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: linear-gradient(163deg, #444a50 0%, #343a40 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #dddddd;\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUUxRUE7RUFDRSxxREFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBRHFERjtBQ2xEQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnREFBQTtFQUNBLHVCQUFBO0FEcURGO0FDbERBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QURxREY7QUNsREE7RUFDRSxlQUFBO0FEcURGO0FDbERBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QURxREY7QUNsREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRHFERjtBQ2xEQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRHFERjtBQ2xEQTs7RUFFRSxxQ0FBQTtFQUNBLHFCQUFBO0FEcURGO0FDbERBO0VBRUUsZUFBQTtBRHFERjtBQ3ZEQTtFQUVFLGVBQUE7QURxREY7QUN2REE7RUFFRSxlQUFBO0FEcURGO0FDdkRBOztFQUVFLGVBQUE7QURxREY7QUNsREE7RUFDRSxZQUFBO0FEcURGO0FDbERBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBRUEsNERBQUE7QURvREY7QUNqREE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBRG9ERjtBQ2pEQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBRG9ERjtBQ2pEQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRG9ERjtBQ2pEQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFRG9ERjs7RUNqREE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFRG9ERjs7RUNqREE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURvREY7O0VDakRBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEb0RGOztFQ2pEQTtJQUNFLGFBQUE7RURvREY7O0VDakRBO0lBQ0UsY0FBQTtFRG9ERjtBQUNGO0FDakRBOztFQUVFLHFCQUFBO0FEbURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDEpLFxyXG4gICdsaWdodFllbGxvd0dyYWRpZW50JzogcmdiYSgyMzksIDIxNCwgMTcyLCAxKSxcclxuICAnZGFya01hcm9vbkdyYWRpZW50JzogcmdiYSg2NywgMzcsIDUyLCAxKSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICd3aGl0ZUdyZXknOiAjZmFmYWZhXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLmNvbnRhY3QtcGFnZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG4gIHBhZGRpbmc6IDglIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4ubWFpbi1jb250YWN0IHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICB3aWR0aDogNjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0ge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb250YWN0LWZvcm0gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMCAxN3B4IDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OmZvY3VzLFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi5idG4tZGFyayB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNDQ0YTUwIDAlLCAjMzQzYTQwIDQyJSk7XG59XG5cbi5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xuICBjb2xvcjogI2RkZGRkZDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uY29udGVudCBwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1jb250YWN0IHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogdW5zZXQ7XG4gIH1cblxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xuICAgIGZsb2F0OiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50IGgxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQgcCB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gIH1cbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4uY29udGFjdC1wYWdlLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG4gIHBhZGRpbmc6IDglIDA7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3Qge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0ge1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICMzNDNhNDA7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCxcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG1hcmdpbjogNXB4IDAgMTdweCAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6Zm9jdXMsXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJ0bi5idG4tZGFyayB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgLy8gYmFja2dyb3VuZDogKCMyZDM0MzYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM0NDRhNTAgMCUsICMzNDNhNDAgNDIlKTtcclxufVxyXG5cclxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCBoMSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbi1jb250YWN0IHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgaDEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHAge1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWQsXHJcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"]
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-review-element", 41);
      }

      if (rf & 2) {
        var review_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("reviewElement", review_r2);
      }
    }

    function HomeComponent_div_103_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You need to create an account first. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeComponent_div_103_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r3.onSubmit(ctx_r3.authForm.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 51);

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
          var _this2 = this;

          this.reviewService.getReviews().subscribe(function (data) {
            _this2.reviewList = data.map(function (e) {
              return e.payload.doc.data();
            });
            _this2.reviewList = _this2.reviewList.sort(function (f, s) {
              return s.timeStamp - f.timeStamp;
            });

            _this2.render(_this2.reviewList);
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
      consts: [[1, "filter-options", "py-3", "d-flex", "justify-content-center", "w-100", "bg-light"], ["name", "options", "id", "filter-options", 1, "form-control", "bg-light"], ["value", "City"], ["value", "Country"], ["value", "Rating"], [1, "btn", "filter-btn"], [1, "d-flex", "justify-content-between", "dark-bg"], [1, "main-section", "w-100", "mr-3"], [1, "hero-companies", "my-5"], [1, "featured-companies-h"], [1, "card", "dark-bg"], [1, "card-header"], [3, "routerLink"], [1, "card-body", "d-flex"], [1, "card-aside"], [1, "img-fluid"], ["src", "/assets/submarine.png", "alt", "Hero Company Title"], [1, "company-info"], [1, "icon-toolbar", "d-flex", "py-2", "mb-3"], [1, "company-info-item"], ["aria-hidden", "true", 1, "fa", "fa-industry", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-phone-square", "mr-2"], [1, "card-text", "text-white", "mt-2"], ["href", "#", "mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "w-50", "td-none"], [1, "top-reviewed-companies", "mt-6"], [1, "text-center", "text-white", "my-5", "underlineBefore", "p-2"], [1, "reviewed-companies-container", "d-flex"], [1, "card", "mr-3", "dark-bg"], [1, "card-body"], ["src", "/assets/submarine.png", "alt", "BestReviewedCompany"], [1, "reviewed-body"], [1, "icon-bundle"], [1, "fa", "fa-map-marker", "mr-2"], [1, "ml-2"], [1, "fa", "fa-star", "mr-2"], ["href", "#", "mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "td-none"], [1, "text-center", "text-white", "mt-5", "mb-3", "underlineBefore", "p-2"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "account-controls", "d-none", "d-lg-block"], ["class", "account-wrapper", 4, "ngIf"], [1, "my-3", 3, "reviewElement"], [1, "account-wrapper"], [1, "avatar-wrapper"], ["src", "/assets/submarine.png", "alt", "User Avatar", 1, "img-fluid", "mt-5"], [1, "dropdown-divider", "mx-3"], [1, "text-center", "my-3"], [1, "d-flex", "justify-content-center"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "formControlName", "email"], ["type", "password", "matInput", "", "formControlName", "password"], ["type", "submit", "id", "signup-btn-home", 1, "btn", "btn-dark", "mx-auto", "d-block"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 36);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 36);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Average: 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "See More");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h3", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, HomeComponent_app_review_element_101_Template, 1, 1, "app-review-element", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "aside", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, HomeComponent_div_103_Template, 19, 1, "div", 40);

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
      styles: [".flex-column-center[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-right: 2px solid #2c3e50;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: whitesmoke;\n  position: relative;\n  padding: 10px;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0%;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.hero-companies[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.hero-companies[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 2rem;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 20px;\n}\n.top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n.reviewed-companies-container[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: whitesmoke;\n}\naside[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n  background-color: #2c3e50;\n  margin: 3rem 3rem 0 0;\n  padding: 3rem;\n  padding-top: 0;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 25%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\naside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  display: block;\n  margin: auto;\n}\naside[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 10px;\n}\naside[_ngcontent-%COMP%]   h4.text-center[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.filter-options[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 5px 0 black;\n}\n.filter-options[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-right: 10px;\n}\n.filter-options[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: #212121;\n  color: #ffffff;\n}\n#signin-btn-home[_ngcontent-%COMP%], #signup-btn-home[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\napp-review-element[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.dark-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUUxRUE7RUFDRSxnQkFBQTtFQXFCQSwrQkFBQTtBRGlDRjtBQ25ERTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FEcURKO0FDbERFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FEb0RKO0FDOUNBO0VBQ0UsVUFBQTtBRGlERjtBQ2hERTtFQUNFLG1CQUFBO0FEa0RKO0FDaERFO0VBQ0UsNENBQUE7QURrREo7QUNqREk7RUFDRSx5QkFBQTtBRG1ETjtBQ2xETTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FEb0RSO0FDN0NVO0VBQ0UsWUFBQTtBRCtDWjtBQzNDTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBRDZDUjtBQzNDVTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUQ2Q1o7QUNwQ0U7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FEdUNKO0FDbkNBO0VBQ0UsOEJBQUE7QURzQ0Y7QUNyQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0FEdUNKO0FDdENJO0VBQ0UseUJBQUE7QUR3Q047QUN2Q007RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUR5Q1I7QUNyQ0k7RUFDRSxhQUFBO0FEdUNOO0FDcENVO0VBQ0UsWUFBQTtBRHNDWjtBQ2pDSTtFQUNFLE9BQUE7QURtQ047QUNqQ1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURtQ1Y7QUM1QkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FEK0JGO0FDN0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEK0JKO0FDNUJJO0VBQ0UsWUFBQTtBRDhCTjtBQzNCRTtFQUNFLGVBQUE7QUQ2Qko7QUN6QkE7RUFDRSxpQ0FBQTtBRDRCRjtBQzNCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRDZCSjtBQzNCRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUQ2Qko7QUN6QkE7O0VBRUUsaUJBQUE7QUQ0QkY7QUN6QkE7RUFDRSxVQUFBO0FENEJGO0FDekJBO0VBQ0UscURBQUE7QUQ0QkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBhc2lkZSwgLm1haW4tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUsIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhLCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtaGVhZGVyIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlLCAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYTo6YmVmb3JlLCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtaGVhZGVyIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlLCAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYTpob3Zlcjo6YmVmb3JlLCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtaGVhZGVyIGE6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4ubWFpbi1zZWN0aW9uIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzJjM2U1MDtcbn1cbi5tYWluLXNlY3Rpb24gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluLXNlY3Rpb24gaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uaGVyby1jb21wYW5pZXMge1xuICB3aWR0aDogODAlO1xufVxuLmhlcm8tY29tcGFuaWVzIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtaGVhZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2LFxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSBpIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRvcC1yZXZpZXdlZC1jb21wYW5pZXMgaDMge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDtcbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSB7XG4gIGZsZXg6IDE7XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5hc2lkZSB7XG4gIGNvbG9yOiAjZWNmMGYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xuICBtYXJnaW46IDNyZW0gM3JlbSAwIDA7XG4gIHBhZGRpbmc6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cbmFzaWRlIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5hc2lkZSAuYnRuLWdyb3VwIC5idG4ge1xuICBtYXJnaW46IDEwcHg7XG59XG5hc2lkZSBoNC50ZXh0LWNlbnRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZpbHRlci1vcHRpb25zIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIGJsYWNrO1xufVxuLmZpbHRlci1vcHRpb25zIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5maWx0ZXItb3B0aW9ucyAuYnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI3NpZ25pbi1idG4taG9tZSxcbiNzaWdudXAtYnRuLWhvbWUge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuYXBwLXJldmlldy1lbGVtZW50IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ubWFpbi1zZWN0aW9uIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBnZXRGb250U2l6ZShoMSk7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoMTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwJTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcblxyXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICMyYzNlNTA7XHJcbn1cclxuXHJcbi5oZXJvLWNvbXBhbmllcyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgQGV4dGVuZCAuYW5pbWF0ZWRCZWZvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAuY2FyZC1hc2lkZSB7XHJcbiAgICAgICAgLmltZy1mbHVpZCB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb21wYW55LWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgIC5pY29uLXRvb2xiYXIge1xyXG4gICAgICAgICAgLmNvbXBhbnktaW5mby1pdGVtIGg2LFxyXG4gICAgICAgICAgLmNvbXBhbnktaW5mby1pdGVtIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRvcC1yZXZpZXdlZC1jb21wYW5pZXMge1xyXG4gIGgzIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIEBleHRlbmQgLmFuaW1hdGVkQmVmb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLmNhcmQtYXNpZGUge1xyXG4gICAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJldmlld2VkLWJvZHkge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICAuaWNvbi1idW5kbGUge1xyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICBjb2xvcjogI2VjZjBmMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xyXG4gIG1hcmdpbjogM3JlbSAzcmVtIDAgMDtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLmJ0bi1ncm91cCB7XHJcbiAgICAuYnRuIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBoNC50ZXh0LWNlbnRlciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLW9wdGlvbnMge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4jc2lnbmluLWJ0bi1ob21lLFxyXG4jc2lnbnVwLWJ0bi1ob21lIHtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuYXBwLXJldmlldy1lbGVtZW50IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uZGFyay1iZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuIl19 */"]
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
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.onRegisterFormSubmit();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.onLoginFormSubmit();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.triggerLogin();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.triggerRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_i_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r19.registerForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.registerForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r19.loginForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r19.loginForm.valid);
      }
    }

    var _c1 = function _c1() {
      return ["/my-account"];
    };

    function LoginComponent_section_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Account controls");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_i_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "My Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.logOut();
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
          var _this3 = this;

          this.auth.authStateTrack().then(function (response) {
            _this3.isLoggedIn = response.logged;
          }, function (errRes) {
            _this3.toastrService.error(errRes.message, 'Error.');
          })["catch"](function (errorRes) {
            _this3.toastrService.error(errorRes.message, 'Error.');
          });
          this.initLoginForm();
          this.initRegisterForm();
          this.router.events.subscribe(function (eventChange) {
            if (eventChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this3.closeModal();
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
          var _this4 = this;

          this.auth.signUp(this.registerForm.value.registerEmail, this.registerForm.value.registerPassword)["catch"](function (error) {
            _this4.toastrService.error(error.message, 'An error has occurred.');
          });
          this.closeModal();
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
          var _this5 = this;

          this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password).then(function (response) {
            _this5.toastrService.success('You have been logged in.', 'Success!');
          })["catch"](function (error) {
            _this5.toastrService.error(error.message, 'An error has occurred.');
          });
          this.closeModal();
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .logged-in-controls[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: white;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n#register[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n#login[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343a40e0;\n  background: linear-gradient(163deg, #2d3436, #2c3e50);\n  color: white;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: #fff;\n    background: #343a40e0;\n    background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: #1c1c1d;\n  font-size: 36px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .acc-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-times.white-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logged-in-controls[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: #2d3436;\n  width: 250px;\n  height: 250px;\n  box-shadow: inset 0 0 5px 0 black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcd29ya3NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR5QkEsMkJBQUE7QUUxRUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QURxREY7QUNsREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRHFERjtBQ2xEQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBRHFERjtBQ2xEQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRG9ERjtBQ2pEQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRG9ERjtBQ2pEQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7QURvREY7QUNqREE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QURvREY7QUM1Q0E7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FEK0NGO0FDNUNBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtBRCtDRjtBQzVDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBRCtDRjtBQzVDQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRCtDRjtBQzVDQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUQrQ0Y7QUM1Q0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBRCtDRjtBQzVDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FEK0NGO0FDNUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FEOENGO0FDM0NBO0VBQ0UsUUFBQTtFQUNBLHdCQUFBO0FEOENGO0FDM0NBO0VBQ0UsMkJBQUE7QUQ4Q0Y7QUMzQ0E7RUFDRSwyQkFBQTtBRDhDRjtBQzNDQTtFQUNFLDRCQUFBO0FEOENGO0FDM0NBO0VBQ0UsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRDhDRjtBQzNDQTtFQUNFLDBCQUFBO0FEOENGO0FDM0NBO0VBQ0Usd0JBQUE7QUQ4Q0Y7QUMzQ0E7RUFDRSwwQkFBQTtBRDhDRjtBQzNDQTtFQUNFO0lBQ0UsU0FBQTtFRDhDRjs7RUMzQ0E7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFRDhDRjs7RUMzQ0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFRDhDRjs7RUMzQ0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7RUQ4Q0Y7O0VDM0NBO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VEOENGOztFQzNDQTtJQUNFLG1CQUFBO0VEOENGOztFQzNDQTtJQUNFLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLHNDQUFBO0VEOENGOztFQzNDQTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsNERBQUE7SUFLQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxzQ0FBQTtFRDBDRjs7RUN2Q0E7SUFDRSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RUR5Q0Y7O0VDdENBO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSw0QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VEeUNGOztFQ3RDQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFRHlDRjs7RUN0Q0E7SUFDRSxTQUFBO0lBQ0Esd0JBQUE7RUR5Q0Y7O0VDdENBO0lBQ0UsMkJBQUE7RUR5Q0Y7O0VDdENBO0lBQ0UsMkJBQUE7RUR5Q0Y7O0VDdENBO0lBQ0UsNEJBQUE7RUR5Q0Y7O0VDdENBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFRHlDRjs7RUN0Q0E7SUFDRSwwQkFBQTtFRHlDRjs7RUN0Q0E7SUFDRSx3QkFBQTtFRHlDRjs7RUN0Q0E7SUFDRSwwQkFBQTtFRHlDRjtBQUNGO0FDdENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUR3Q0Y7QUN0Q0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUR5Q0Y7QUN4Q0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEMENKO0FDeENFO0VBQ0UsZ0JBQUE7QUQwQ0o7QUN0Q0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FEeUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCAubG9nZ2VkLWluLWNvbnRyb2xzLCAub3ZlcmxheS1wYW5lbCwgLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi5sb2dpbi1yZWdpc3RlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubG9naW4tcmVnaXN0ZXIgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5oZW5sbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA3NTBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xufVxuXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uZm9ybS1jb250YWluZXIgaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbi5sb2dpbi1yZWdpc3RlciBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHggNDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuI3JlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbiNsb2dpbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5yZWdpc3Rlci1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogLTEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLm92ZXJsYXktbG9naW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgI2xvZ2luUmVnaXN0ZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5oZW5sbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gIH1cblxuICAuZm9ybS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAub3ZlcmxheS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM2NjY2NjYgMCUsICMzNDNhNDAgNDIlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgdG9wOiAtMTAwJTtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAub3ZlcmxheS1wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgYm90dG9tOiB1bnNldDtcbiAgICB3aWR0aDogdW5zZXQ7XG4gIH1cblxuICAubG9naW4tY29udGFpbmVyIHtcbiAgICBsZWZ0OiB1bnNldDtcbiAgICB3aWR0aDogdW5zZXQ7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIC5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLm92ZXJsYXktbG9naW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDU7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gIH1cbn1cbi5mYS5mYS10aW1lcyB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMiU7XG4gIHRvcDogMiU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxYzFjMWQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJkLWhlYWRlciAuYWNjLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5jYXJkLWhlYWRlciAuZmEuZmEtdGltZXMud2hpdGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5sb2dnZWQtaW4tY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIGJsYWNrO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5sb2dpbi1yZWdpc3RlciBoMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgYSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLmhlbmxvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogNzUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4ICNhNDg5Nzg1ZTtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3RlciBidXR0b24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzQzYTQwZTA7XHJcbiAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTJweCA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4vLyBidXR0b24uZ2hvc3Qge1xyXG4vLyAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbi8vIH1cclxuXHJcbiNyZWdpc3RlciB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXktcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICNsb2dpblJlZ2lzdGVyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5oZW5sbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3RlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE2M2RlZyxcclxuICAgICAgcmdiYSgxMDIsIDEwMiwgMTAyLCAxKSAwJSxcclxuICAgICAgcmdiYSg1MiwgNTgsIDY0LCAxKSA0MiVcclxuICAgICk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwJTtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIGJvdHRvbTogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxvZ2luIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1sb2dpbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLmZhLmZhLXRpbWVzIHtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICB0b3A6IDIlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzFjMWMxZDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLmFjYy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgfVxyXG4gIC5mYS5mYS10aW1lcy53aGl0ZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nZ2VkLWluLWNvbnRyb2xzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuIl19 */"]
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
          var _this6 = this;

          this.companyService.getCompanies().subscribe(function (data) {
            data.map(function (e) {
              _this6.companies.push(e.payload.doc.data());
            });
          });
          this.initForms();
        }
      }, {
        key: "create",
        value: function create() {
          var _this7 = this;

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

            _this7.reviewService.postReview(review).then(function (response) {
              _this7.toastr.success('Review submitted.', 'Success!');
            })["catch"](function (errorRes) {
              _this7.toastr.error(errorRes.message, 'An Error occurred.');
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
        var fill_r32 = ctx.fill;
        var index_r33 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r32 === 100)("bad", index_r33 < 3);
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
      consts: [[1, "review-container", "d-flex"], [1, "card-aside"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center", "my-2", "font-italic"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between"], [1, "card-title", 3, "routerLink"], [3, "rate", "rateChange"], [1, "card-body", "d-flex", "justify-content-between"], [1, "supporting-flex"], [1, "card-text"], ["mat-raised-button", "", "color", "primary", 1, "see-more-btn"], [1, "votes-container"], ["type", "button", "id", "upVote", 1, "btn", "fa", "fa-arrow-up"], ["type", "button", "id", "downVote", 1, "btn", "fa", "fa-arrow-down"], [1, "star"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.review-container[_ngcontent-%COMP%] {\n  box-shadow: 5px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 100%;\n  border: 1px solid #2c3e50;\n}\n.card-aside[_ngcontent-%COMP%] {\n  background-color: #dfe6e9;\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-2.font-italic[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n.card[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, #444a50 0%, #2c3e50 80%);\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  text-decoration: none;\n}\n.card-body[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, #444a50 0%, #2c3e50 80%);\n  color: whitesmoke;\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   .votes-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFx3b3Jrc3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXHdvcmtzcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR5QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3RCRjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGdCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usa0JBQUE7QUN0QkY7QUR5QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUN0QkY7QUR5QkE7RUFDRSxxQkFBQTtBQ3RCRjtBRHlCQSwyQkFBQTtBRTFFQTtFQUNFLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FEcURGO0FDbERBO0VBQ0UseUJBQUE7QURxREY7QUNuREk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRHFETjtBQ2xERTtFQUNFLHlCQUFBO0FEb0RKO0FDaERBO0VBQ0UsT0FBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtBRG1ERjtBQ2hEQTtFQUNFLDZCQUFBO0FEbURGO0FDaERBO0VBRUUsNERBQUE7QURrREY7QUNqREU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FEbURKO0FDOUNBO0VBSUUsNERBQUE7RUFDQSxpQkFBQTtBRDhDRjtBQ2xERTtFQUNFLFlBQUE7QURvREo7QUNoREU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBRGtESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXctZWxlbWVudC9yZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMSksXHJcbiAgJ2xpZ2h0WWVsbG93R3JhZGllbnQnOiByZ2JhKDIzOSwgMjE0LCAxNzIsIDEpLFxyXG4gICdkYXJrTWFyb29uR3JhZGllbnQnOiByZ2JhKDY3LCAzNywgNTIsIDEpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ3doaXRlR3JleSc6ICNmYWZhZmFcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSwgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSwgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSwgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLnJldmlldy1jb250YWluZXIge1xuICBib3gtc2hhZG93OiA1cHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzNlNTA7XG59XG5cbi5jYXJkLWFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcbn1cbi5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FyZC1hc2lkZSBwLnRleHQtY2VudGVyLm15LTIuZm9udC1pdGFsaWMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uY2FyZCB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNDQ0YTUwIDAlLCAjMmMzZTUwIDgwJSk7XG59XG4uY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzQ0NGE1MCAwJSwgIzJjM2U1MCA4MCUpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5jYXJkLWJvZHkgYnV0dG9uLnNlZS1tb3JlLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJkLWJvZHkgLnZvdGVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLnJldmlldy1jb250YWluZXIge1xyXG4gIGJveC1zaGFkb3c6IDVweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYzNlNTA7XHJcbn1cclxuXHJcbi5jYXJkLWFzaWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNmU5O1xyXG4gIC5pbWctY29udGFpbmVyIHtcclxuICAgIC5pbWctZmx1aWQge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHAudGV4dC1jZW50ZXIubXktMi5mb250LWl0YWxpYyB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM0NDRhNTAgMCUsICMyYzNlNTAgODAlKTtcclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBAZXh0ZW5kIC5hbmltYXRlZEJlZm9yZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJ1dHRvbi5zZWUtbW9yZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjNDQ0YTUwIDAlLCAjMmMzZTUwIDgwJSk7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgLnZvdGVzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".star[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled[_ngcontent-%COMP%] {\n        color: #1e90ff;\n      }\n      .bad[_ngcontent-%COMP%] {\n        color: #deb0b0;\n      }\n      .filled.bad[_ngcontent-%COMP%] {\n        color: #ff1e1e;\n      }"]
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
                    this.toastr.info('User signed out!');

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
                    this.toastr.info('User created!');

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