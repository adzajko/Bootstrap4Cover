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


    var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/pages/my-account/my-account.component */
    "./src/app/components/pages/my-account/my-account.component.ts");
    /* harmony import */


    var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/pages/about/about.component */
    "./src/app/components/pages/about/about.component.ts");
    /* harmony import */


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");
    /* harmony import */


    var _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/pages/admin-panel/admin-panel.component */
    "./src/app/components/pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/pages/terms-of-service/terms-of-service.component */
    "./src/app/components/pages/terms-of-service/terms-of-service.component.ts");
    /* harmony import */


    var _shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/auth-guard.guard */
    "./src/app/shared/auth-guard.guard.ts");
    /* harmony import */


    var _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pages/four-oh-four/four-oh-four.component */
    "./src/app/components/pages/four-oh-four/four-oh-four.component.ts");

    var routes = [{
      path: '',
      component: _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
      data: {
        animationState: 'Home'
      }
    }, {
      path: 'about',
      component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
      data: {
        animationState: 'About'
      }
    }, {
      path: 'contact',
      component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
      data: {
        animationState: 'Contact'
      }
    }, {
      path: 'my-account',
      component: _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"],
      canActivate: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardGuard"]],
      data: {
        animationState: 'MyAccount'
      }
    }, {
      path: 'admin-panel',
      component: _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__["AdminPanelComponent"],
      data: {
        animationState: 'Admin'
      },
      canActivate: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardGuard"]]
    }, {
      path: 'terms-of-service',
      component: _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_7__["TermsOfServiceComponent"],
      data: {
        animationState: 'TermsOfService'
      }
    }, {
      path: '**',
      component: _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_9__["FourOhFourComponent"],
      data: {
        animationState: 'NotFound'
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
      providers: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'top'
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
            scrollPositionRestoration: 'top'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          providers: [_shared_auth_guard_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuardGuard"]]
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _theme_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./theme/theme.service */
    "./src/app/theme/theme.service.ts");
    /* harmony import */


    var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/layout/navbar/navbar.component */
    "./src/app/components/layout/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pages/landing-page/landing-page.component */
    "./src/app/components/pages/landing-page/landing-page.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/http-loader/http-loader.component */
    "./src/app/shared/http-loader/http-loader.component.ts");

    function AppComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.scrollToTop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
      }
    }

    function AppComponent_app_landing_page_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing-page");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
      }
    }

    function AppComponent_app_login_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login", 8);
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined)("isLoggedIn", ctx_r18.passLoggedStateInfo);
      }
    }

    function AppComponent_app_http_loader_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-loader");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth, translateService, sharedService, themeService) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.themeService = themeService;
        this.title = 'TSP';
        this.pendingHttpRequest = false;
        this.displayTop = 0;
        this.shouldModalOpen = false;

        this.scrollEvent = function (event) {
          _this.displayTop = event.srcElement.scrollTop;
        };
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          window.addEventListener('scroll', this.scrollEvent, true);
          this.themeService.setActiveTheme(this.themeService.getLocalStorageTheme());
          this.subscription = this.sharedService.publishLoginModalState.subscribe(function (response) {
            _this2.shouldModalOpen = response;
          });
          this.auth.afAuth.user.subscribe(function (res) {
            if (res) {
              _this2.passLoggedStateInfo = true;
            } else {
              _this2.passLoggedStateInfo = false;
            }
          });
          this.auth.triggerLoadingScreen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).subscribe(function (response) {
            _this2.pendingHttpRequest = response;
          });
          this.translateService.setDefaultLang('English');

          if (!localStorage.language) {
            localStorage.setItem('language', 'English');
          }

          this.translateService.use(localStorage.language);
        }
      }, {
        key: "prepareRoute",
        value: function prepareRoute(outlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animationState;
        }
      }, {
        key: "checkIfFirstTimeUser",
        value: function checkIfFirstTimeUser() {
          if (!localStorage.getItem('firstTime')) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop() {
          document.body.scrollTop = 0;
        }
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          this.scrollToTop();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
          window.removeEventListener('scroll', this.scrollEvent, true);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 5,
      consts: [["main", ""], [3, "activate"], ["outlet", "outlet"], ["id", "back-to-top", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "isLoggedIn", 4, "ngIf"], ["id", "back-to-top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-circle-up"], [3, "isLoggedIn"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "router-outlet", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_4_listener($event) {
            return ctx.onActivate($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_landing_page_9_Template, 1, 1, "app-landing-page", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_app_login_10_Template, 1, 2, "app-login", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_app_http_loader_11_Template, 1, 0, "app-http-loader", 4);
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayTop > 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkIfFirstTimeUser());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendingHttpRequest);
        }
      },
      directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_14__["HttpLoaderComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 var(--shadows);\n  position: relative;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: var(--font-color);\n  position: relative;\n  z-index: 0;\n}\n#back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 16%;\n  right: 8%;\n}\n#back-to-top[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\n  transition: 0.4s ease;\n  cursor: pointer;\n  color: var(--font-color);\n  font-size: 45px;\n}\n#back-to-top[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]:hover {\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: backToTop;\n          animation-name: backToTop;\n  -webkit-animation-duration: 0.8s;\n          animation-duration: 0.8s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n}\n@-webkit-keyframes backToTop {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-12px);\n  }\n}\n@keyframes backToTop {\n  from {\n    transform: translateY(0);\n  }\n  to {\n    transform: translateY(-12px);\n  }\n}\nheader[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: var(--shadowsOpacified);\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FEd0VGO0FDckVBO0VBQ0UsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRHdFRjtBQ3RFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBRHlFRjtBQ3hFRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBRDBFSjtBQ3hFRTtFQUNFLGlDQUFBO1VBQUEseUJBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBRDBFSjtBQ3RFQTtFQUNFO0lBQ0Usd0JBQUE7RUR5RUY7RUN2RUE7SUFDRSw0QkFBQTtFRHlFRjtBQUNGO0FDL0VBO0VBQ0U7SUFDRSx3QkFBQTtFRHlFRjtFQ3ZFQTtJQUNFLDRCQUFBO0VEeUVGO0FBQ0Y7QUN0RUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FEd0VGO0FDckVBO0VBQ0UseUNBQUE7RUFFQSxXQUFBO0FEdUVGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ2JsdWVIZWFkZXInOiAjMmMzZTUwLFxyXG4gICd3aGl0ZUdyZXknOiB3aGl0ZXNtb2tlXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgYXBwLWxvZ2luIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQsIGFwcC1sb2dpbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0tc2hhZG93cyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubWFpbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNiYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxNiU7XG4gIHJpZ2h0OiA4JTtcbn1cbiNiYWNrLXRvLXRvcCBpLmZhIHtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuI2JhY2stdG8tdG9wIGkuZmE6aG92ZXIge1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tbmFtZTogYmFja1RvVG9wO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuOHM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYmFja1RvVG9wIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICB9XG59XG5oZWFkZXIge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hcHAtbG9naW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3dzT3BhY2lmaWVkKTtcbiAgei1pbmRleDogMjA7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuZm9vdGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0tc2hhZG93cyk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcbiNiYWNrLXRvLXRvcCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTYlO1xyXG4gIHJpZ2h0OiA4JTtcclxuICBpLmZhIHtcclxuICAgIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcbiAgaS5mYTpob3ZlciB7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJhY2tUb1RvcDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFja1RvVG9wIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KTtcclxuICB9XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYXBwLWxvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3dzT3BhY2lmaWVkKTtcclxuICBAZXh0ZW5kIC5maXhlZC1mdWxsLWhlaWdodDtcclxuICB6LWluZGV4OiAyMDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuIl19 */"],
      data: {
        animation: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"], Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('enterAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 1
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
          opacity: 0
        }))])])]
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
          animations: [_shared_animations__WEBPACK_IMPORTED_MODULE_1__["routeTransitionAnimations"], Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('enterAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 1
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
            opacity: 0
          }))])])]
        }]
      }], function () {
        return [{
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _theme_theme_service__WEBPACK_IMPORTED_MODULE_7__["ThemeService"]
        }];
      }, null);
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


    var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/pages/contact/contact.component */
    "./src/app/components/pages/contact/contact.component.ts");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/pages/my-account/my-account.component */
    "./src/app/components/pages/my-account/my-account.component.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/pages/admin-panel/admin-panel.component */
    "./src/app/components/pages/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/http-loader/http-loader.component */
    "./src/app/shared/http-loader/http-loader.component.ts");
    /* harmony import */


    var _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/pages/terms-of-service/terms-of-service.component */
    "./src/app/components/pages/terms-of-service/terms-of-service.component.ts");
    /* harmony import */


    var _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/pages/four-oh-four/four-oh-four.component */
    "./src/app/components/pages/four-oh-four/four-oh-four.component.ts");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./modules/company/company.module */
    "./src/app/modules/company/company.module.ts");
    /* harmony import */


    var _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./modules/review/review.module */
    "./src/app/modules/review/review.module.ts");
    /* harmony import */


    var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./modules/shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/pages/landing-page/landing-page.component */
    "./src/app/components/pages/landing-page/landing-page.component.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js"); // <Firebase Imports>
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
      imports: [[_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__["MyAccountComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_20__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_21__["HttpLoaderComponent"], _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_22__["TermsOfServiceComponent"], _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_23__["FourOhFourComponent"], _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_28__["LandingPageComponent"]],
        imports: [_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__["MyAccountComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_20__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_21__["HttpLoaderComponent"], _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_22__["TermsOfServiceComponent"], _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_23__["FourOhFourComponent"], _components_pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_28__["LandingPageComponent"]],
          imports: [_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]],
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["/terms-of-service"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

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
      decls: 12,
      vars: 10,
      consts: [[1, "footer-elements"], [1, "quick-links", "pb-1"], [1, "animatedBefore", 3, "routerLink"], [1, "text-white"], [1, "divider"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA9 The Submarine Team | 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "FOOTER.SERVICE_TERMS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "FOOTER.ABOUT"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.footer-elements[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n.footer-elements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  padding-bottom: 10px;\n  margin-bottom: 0;\n  color: var(--font-color);\n}\n.footer-elements[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  height: 0.5px;\n  background-color: var(--font-color);\n}\n.footer-elements[_ngcontent-%COMP%]   span.text-white[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 10px;\n}\n.footer-elements[_ngcontent-%COMP%]   span.text-white[_ngcontent-%COMP%]::before {\n  content: \"\";\n  bottom: 10%;\n  position: absolute;\n  height: 25px;\n  width: 1px;\n  background-color: var(--font-color);\n}\n.footer-elements[_ngcontent-%COMP%]   .quick-links[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n.footer-elements[_ngcontent-%COMP%]   .quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxRUFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaElBO0VBQ0Usa0NBQUE7QUR3RUY7QUN2RUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUR5RUo7QUN2RUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQ0FBQTtBRHlFSjtBQ3ZFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBRHlFSjtBQ3RFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0FEd0VKO0FDckVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUR1RUo7QUN0RUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRHdFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLmZvb3Rlci1lbGVtZW50cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4uZm9vdGVyLWVsZW1lbnRzIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4uZm9vdGVyLWVsZW1lbnRzIC5kaXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5mb290ZXItZWxlbWVudHMgc3Bhbi50ZXh0LXdoaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uZm9vdGVyLWVsZW1lbnRzIHNwYW4udGV4dC13aGl0ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm90dG9tOiAxMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5mb290ZXItZWxlbWVudHMgLnF1aWNrLWxpbmtzIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZvb3Rlci1lbGVtZW50cyAucXVpY2stbGlua3MgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5mb290ZXItZWxlbWVudHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAwLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICBzcGFuLnRleHQtd2hpdGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuXHJcbiAgc3Bhbi50ZXh0LXdoaXRlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIC5xdWljay1saW5rcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGEge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/theme/theme.service */
    "./src/app/theme/theme.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");

    var _c0 = ["hamTop"];
    var _c1 = ["hamBot"];
    var _c2 = ["navBrand"];
    var _c3 = ["overlay"];

    var _c4 = function _c4() {
      return ["/my-account"];
    };

    var _c5 = function _c5() {
      return {
        exact: true
      };
    };

    function NavbarComponent_a_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_27_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.checkMyAccount();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "HEADER.MY_ACCOUNT"));
      }
    }

    var _c6 = function _c6() {
      return ["/"];
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
      function NavbarComponent(formBuilder, auth, translateService, afAuth, sharedService, themeService) {
        _classCallCheck(this, NavbarComponent);

        this.formBuilder = formBuilder;
        this.auth = auth;
        this.translateService = translateService;
        this.afAuth = afAuth;
        this.sharedService = sharedService;
        this.themeService = themeService;
        this.activeTheme = false;
        this.activeUser = false;
        this.isActiveLangMK = false;
        this.loginForm = this.formBuilder.group({
          email: '',
          password: 'password'
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.themeService.emitCurrentActiveTheme.subscribe(function (res) {
            if (res === 'dark') {
              _this3.activeTheme = false;
            } else {
              _this3.activeTheme = true;
            }
          });
          this.afAuth.user.subscribe(function (res) {
            if (res) {
              _this3.activeUser = true;
            } else {
              _this3.activeUser = false;
            }
          });
          this.val = localStorage.getItem('language');
          this.translateService.addLangs(['English', 'Macedonian']);
          this.translateService.setDefaultLang('English');
          var browserLang = this.translateService.getBrowserLang();
          this.translateService.use(browserLang.match(/English|Macedonian/) ? browserLang : 'English');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(loginData) {
          this.auth.signIn(loginData.email, loginData.password);
          this.loginForm.reset();
        }
      }, {
        key: "toggleOverlay",
        value: function toggleOverlay() {
          this.hamTop.nativeElement.classList.toggle('open');
          this.hamBot.nativeElement.classList.toggle('open');
          this.overlay.nativeElement.classList.toggle('sidebar-width');
          this.overlay.nativeElement.classList.toggle('d-block');
        }
      }, {
        key: "closeOverlay",
        value: function closeOverlay() {
          this.hamTop.nativeElement.classList.remove('open');
          this.hamBot.nativeElement.classList.remove('open');
          this.overlay.nativeElement.classList.remove('sidebar-width');
        }
      }, {
        key: "triggerModal",
        value: function triggerModal() {
          this.sharedService.emitLoginModalState(true);
        }
      }, {
        key: "checkMyAccount",
        value: function checkMyAccount() {
          if (this.activeUser) {
            this.toggleOverlay();
          } else {
            this.triggerModal();
            this.toggleOverlay();
          }
        }
      }, {
        key: "changeLanguage",
        value: function changeLanguage(value) {
          localStorage.setItem('language', value);
          this.translateService.use(value);

          if (value === 'English') {
            this.isActiveLangMK = false;
          } else {
            this.isActiveLangMK = true;
          }
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          if (this.themeService.isDarkTheme()) {
            this.themeService.setLightTheme();
          } else {
            this.themeService.setDarkTheme();
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]));
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
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamTop = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hamBot = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navBrand = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlay = _t.first);
        }
      },
      decls: 41,
      vars: 36,
      consts: [[1, "navbar", "d-flex"], [1, "navbar-brand", "mt-2", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo"], ["routerLinkActive", "active", "id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], [1, "d-flex"], [1, "mr-4"], ["name", "languages", "id", "langSelect", 1, "custom-select", 2, "cursor", "pointer", 3, "value", "change"], ["langSelectEl", ""], ["value", "English", 2, "cursor", "pointer"], ["value", "Macedonian", 2, "cursor", "pointer"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay", 3, "exclude", "clickOutsideEvents", "clickOutside"], ["overlay", ""], [1, "overlay-content"], ["routerLinkActive", "active", 1, "overlay-link", 3, "routerLinkActiveOptions", "routerLink", "click"], [1, "fa", "fa-home", "mr-4"], ["routerLinkActive", "active", "class", "overlay-link", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], [1, "fa", "fa-th-large", "mr-4"], [1, "fa", "fa-info-circle", "mr-4"], [1, "fa", "fa-envelope", "mr-4"], [1, "themeToggle", 3, "ngClass", "ngModel", "ngModelChange", "change"], ["routerLinkActive", "active", 1, "overlay-link", 3, "routerLink", "routerLinkActiveOptions", "click"], [1, "fa", "fa-user", "mr-4"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NavbarComponent_Template_select_change_13_listener($event) {
            return ctx.changeLanguage($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "EN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041C\u041A\u0414");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_19_listener() {
            return ctx.triggerModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavbarComponent_Template_div_clickOutside_20_listener() {
            return ctx.closeOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_a_27_Template, 4, 7, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_28_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_32_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_36_listener() {
            return ctx.toggleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slide-toggle", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_mat_slide_toggle_ngModelChange_40_listener($event) {
            return ctx.activeTheme = $event;
          })("change", function NavbarComponent_Template_mat_slide_toggle_change_40_listener() {
            return ctx.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", ".navbar-brand")("clickOutsideEvents", "click, touchstart, scroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 19, "HEADER.HOME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 21, "HEADER.COMPANIES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 23, "HEADER.ABOUT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 25, "HEADER.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isActiveLangMK ? "" : "themeToggleMKD")("ngModel", ctx.activeTheme);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n\n.flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 0px 20px 0px var(--shadowsOpacified);\n  background-color: var(--primary);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: var(--font-color);\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n#selectLang[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background: linear-gradient(180deg, var(--gradient-one) 0%, var(--gradient-two) 100%);\n  overflow: hidden;\n  transition: 0.4s;\n  box-shadow: 0 0 3px 0 var(--shadows);\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10%;\n  width: 300px;\n  margin: 15px auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: 100%;\n  padding: 10px;\n  position: relative;\n  text-decoration: none;\n  font-size: 26px;\n  color: var(--font-color);\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  transition: 0.5s;\n  content: \"\";\n  width: 0;\n  height: 100%;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  bottom: 0;\n  border-radius: 7px;\n  background-color: var(--gradient-one-faded);\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 90%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 5px;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: var(--font-color);\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  height: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: var(--font-color);\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--font-color) !important;\n  position: relative !important;\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 90%;\n  height: 100%;\n  background-color: var(--gradient-one-faded);\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 5px;\n  height: 100%;\n  background-color: var(--font-color);\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--font-color);\n  cursor: pointer;\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.sidebar-width[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  width: 90%;\n}\n@media only screen and (max-width: 600px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 43%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    width: 30%;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 27%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 21%;\n  }\n}\n#langSelect[_ngcontent-%COMP%] {\n  background-color: var(--accent);\n  color: var(--font-color);\n  border: none;\n  border-radius: 25px;\n}\n.themeToggle[_ngcontent-%COMP%] {\n  left: 42%;\n  position: absolute;\n  bottom: 40px;\n  color: var(--font-color);\n}\n.themeToggle[_ngcontent-%COMP%]::before, .themeToggle[_ngcontent-%COMP%]::after {\n  font-size: 20px;\n  position: absolute;\n  bottom: 0;\n}\n.themeToggle[_ngcontent-%COMP%]::before {\n  content: \"Dark\";\n  left: 5rem;\n  opacity: var(--opacity1);\n}\n.themeToggle[_ngcontent-%COMP%]::after {\n  content: \"Light\";\n  right: 5rem;\n  opacity: var(--opacity2);\n}\n.themeToggleMKD[_ngcontent-%COMP%]::before {\n  content: \"\u0422\u0435\u043C\u043D\u0430\";\n}\n.themeToggleMKD[_ngcontent-%COMP%]::after {\n  content: \"\u0421\u0432\u0435\u0442\u043B\u0430\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ3NCaEIsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURwQkY7QUN1QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBRHBCRjtBQ3VCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FEcEJGO0FDdUJBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRHBCRjtBQ3VCQTtFQUNFLGdCQUFBO0FEcEJGO0FDdUJBO0VBQ0UsaUJBQUE7QURwQkY7QUN1QkE7RUFDRSxrQkFBQTtBRHBCRjtBQ3VCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBRHBCRjtBQ3NCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRG5CRjtBQ3NCQTtFQUNFLHFCQUFBO0FEbkJGO0FDc0JBO0VBQ0UscUVBQUE7QURuQkY7QUNzQkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBQ2hJQTtFQUNFLFdBQUE7QUZ5RUY7QUV2RUE7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvREFBQTtFQUNBLGdDQUFBO0FGMEVGO0FFeEVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FGMkVGO0FFMUVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUY0RUo7QUUxRUU7RUFDRSxRQUFBO0FGNEVKO0FFMUVFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7QUY0RUo7QUV6RUU7O0VBRUUseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FGMkVKO0FFekVFO0VBQ0UseUJBQUE7QUYyRUo7QUV2RUE7RUFDRSw2QkFBQTtBRjBFRjtBRXZFQTtFQUNFLGNBQUE7QUYwRUY7QUV4RUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FGMkVGO0FFekVBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBRjRFRjtBRXpFQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLHFGQUFBO0VBS0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FGd0VGO0FFdEVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FGd0VKO0FFcEVFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUZzRUo7QUVwRUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBRnNFSjtBRXBFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUZzRUo7QUVuRUU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsbUNBQUE7QUZxRUo7QUVuRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FGcUVKO0FFbkVFOztFQUVFLHdCQUFBO0VBQ0EsZ0JBQUE7QUZxRUo7QUVuRUU7RUFDRSxtQ0FBQTtFQUNBLDZCQUFBO0FGcUVKO0FFbEVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FGb0VKO0FFbEVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FGb0VKO0FFakVFO0VBQ0U7SUFDRSxlQUFBO0VGbUVKO0FBQ0Y7QUUvREE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FGa0VGO0FFL0RBOztFQUVFLGlCQUFBO0FGa0VGO0FFL0RBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FGa0VGO0FDbkpFO0VDK0VGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFRm9FRjtBQUNGO0FDL0lFO0VDcUVGO0lBUUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUZzRUY7QUFDRjtBQ2pKRTtFQ2dFRjtJQWFJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VGd0VGO0FBQ0Y7QUNuSkU7RUMyREY7SUFrQkksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUYwRUY7QUFDRjtBQ3JKRTtFQ3NERjtJQXVCSSxVQUFBO0VGNEVGO0FBQ0Y7QUNySkU7RUNpREY7SUEwQkksVUFBQTtFRjhFRjtBQUNGO0FFM0VBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRjhFRjtBRTNFQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBRjhFRjtBRTNFQTs7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FGOEVGO0FFM0VBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBRjhFRjtBRTVFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FGK0VGO0FFNUVBO0VBQ0UsZ0JBQUE7QUYrRUY7QUU1RUE7RUFDRSxpQkFBQTtBRitFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5vdmVybGF5IC5vdmVybGF5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uaW1nLWxvZ28ge1xuICB3aWR0aDogNzVweDtcbn1cblxubWF0LXRvb2xiYXIge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMHB4IHZhcigtLXNoYWRvd3NPcGFjaWZpZWQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDc1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcCB7XG4gIHRvcDogMTglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHRvcDogNDglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUudG9wLm9wZW4sXG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgd2lkdGg6IDUwcHg7XG4gIHRvcDogNDglO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4jc2VsZWN0TGFuZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuXG4jc3ViLXRvLWhvbWUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5vdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWdyYWRpZW50LW9uZSkgMCUsIHZhcigtLWdyYWRpZW50LXR3bykgMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCB2YXIoLS1zaGFkb3dzKTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluayB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjQ1cztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmFkaWVudC1vbmUtZmFkZWQpO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDkwJTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluazo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpob3Zlcixcbi5vdmVybGF5IC5vdmVybGF5LWxpbms6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG4ub3ZlcmxheSAuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuLm92ZXJsYXkgLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JhZGllbnQtb25lLWZhZGVkKTtcbn1cbi5vdmVybGF5IC5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5vdmVybGF5IC5vdmVybGF5LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4jZmEtZmEtdXNlciB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNlbWFpbC1sb2dpbi1pbnB1dCxcbiNlbWFpbC1sb2dpbi1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uc2lkZWJhci13aWR0aCB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHdpZHRoOiA5MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaWRlYmFyLXdpZHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyLXdpZHRoIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNpZGViYXItd2lkdGgge1xuICAgIHdpZHRoOiA0MyU7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnNpZGViYXItd2lkdGgge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5zaWRlYmFyLXdpZHRoIHtcbiAgICB3aWR0aDogMjclO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuc2lkZWJhci13aWR0aCB7XG4gICAgd2lkdGg6IDIxJTtcbiAgfVxufVxuXG4jbGFuZ1NlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4udGhlbWVUb2dnbGUge1xuICBsZWZ0OiA0MiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi50aGVtZVRvZ2dsZTo6YmVmb3JlLFxuLnRoZW1lVG9nZ2xlOjphZnRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG5cbi50aGVtZVRvZ2dsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJEYXJrXCI7XG4gIGxlZnQ6IDVyZW07XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHkxKTtcbn1cblxuLnRoZW1lVG9nZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiTGlnaHRcIjtcbiAgcmlnaHQ6IDVyZW07XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHkyKTtcbn1cblxuLnRoZW1lVG9nZ2xlTUtEOjpiZWZvcmUge1xuICBjb250ZW50OiBcItCi0LXQvNC90LBcIjtcbn1cblxuLnRoZW1lVG9nZ2xlTUtEOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi0KHQstC10YLQu9CwXCI7XG59IiwiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ2JsdWVIZWFkZXInOiAjMmMzZTUwLFxyXG4gICd3aGl0ZUdyZXknOiB3aGl0ZXNtb2tlXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5pbWctbG9nbyB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCB2YXIoLS1zaGFkb3dzT3BhY2lmaWVkKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC40cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcCB7XHJcbiAgICB0b3A6IDE4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuXHJcbiAgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxyXG4gIC5oYW1idXJnZXItbGluZS5ib3R0b20ub3BlbiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0b3A6IDQ4JTtcclxuICB9XHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4jc2VsZWN0TGFuZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxufVxyXG4jc3ViLXRvLWhvbWUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4jc3ViLXRvLWhvbWU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDE4MGRlZyxcclxuICAgIHZhcigtLWdyYWRpZW50LW9uZSkgMCUsXHJcbiAgICB2YXIoLS1ncmFkaWVudC10d28pIDEwMCVcclxuICApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0tc2hhZG93cyk7XHJcblxyXG4gIC5vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0bztcclxuICAgIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxpbmsge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC40NXM7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWxpbms6OmJlZm9yZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYWRpZW50LW9uZS1mYWRlZCk7XHJcbiAgfVxyXG4gIC5vdmVybGF5LWxpbms6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuNXM7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1saW5rOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICAub3ZlcmxheS1saW5rOmhvdmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3ZlcixcclxuICAub3ZlcmxheS1saW5rOmZvY3VzIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JhZGllbnQtb25lLWZhZGVkKTtcclxuICB9XHJcbiAgLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLm92ZXJsYXktbGluayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNmYS1mYS11c2VyIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2VtYWlsLWxvZ2luLWlucHV0LFxyXG4jZW1haWwtbG9naW4taW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci13aWR0aCB7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB3aWR0aDogOTAlO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgd2lkdGg6IDI3JTtcclxuICB9XHJcbiAgQGluY2x1ZGUgRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICB3aWR0aDogMjElO1xyXG4gIH1cclxufVxyXG5cclxuI2xhbmdTZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG4udGhlbWVUb2dnbGUge1xyXG4gIGxlZnQ6IDQyJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLnRoZW1lVG9nZ2xlOjpiZWZvcmUsXHJcbi50aGVtZVRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4udGhlbWVUb2dnbGU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ0RhcmsnO1xyXG4gIGxlZnQ6IDVyZW07XHJcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eTEpO1xyXG59XHJcbi50aGVtZVRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdMaWdodCc7XHJcbiAgcmlnaHQ6IDVyZW07XHJcbiAgb3BhY2l0eTogdmFyKC0tb3BhY2l0eTIpO1xyXG59XHJcblxyXG4udGhlbWVUb2dnbGVNS0Q6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ9Ci0LXQvNC90LAnO1xyXG59XHJcblxyXG4udGhlbWVUb2dnbGVNS0Q6OmFmdGVyIHtcclxuICBjb250ZW50OiAn0KHQstC10YLQu9CwJztcclxufVxyXG4iXX0= */"]
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
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: src_app_theme_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 13,
      vars: 9,
      consts: [[1, "about-page", "mt-75"], [1, "intro-section"], [1, "title", "page-title"], [1, "img-container"], ["src", "/assets/submarine_text.png", "alt", "The Submarine Project Logo", 1, "img-fluid"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "The Submarine Team"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "ABOUTPAGE.INTRO_TEAM"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "ABOUTPAGE.INTRO_ABOUT"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.about-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--font-color);\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n  color: var(--font-color);\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .about-page[_ngcontent-%COMP%] {\n    padding-top: 25px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 2rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  position: relative;\n  padding: 1rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 72px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 50vh;\n  border-radius: 25px;\n  background-image: url(\"https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80\");\n  background-position: top;\n  background-attachment: fixed;\n  background-blend-mode: saturation;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: inset 0 0 5px 0 var(--shadows);\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUVBQUE7RUFJQSx3QkFBQTtBRHFFRjtBRHVCRTtFRW5HRjtJQUtJLGlCQUFBO0VEMkVGO0FBQ0Y7QUN6RUU7RUFDRSxhQUFBO0FEMkVKO0FDMUVJO0VBQ0Usa0JBQUE7QUQ0RU47QUMxRUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUQ0RU47QUMxRUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRDRFTjtBREdFO0VFbEZFO0lBTUksZUFBQTtFRDZFTjtBQUNGO0FEUEU7RUU3RUU7SUFTSSxlQUFBO0VEK0VOO0FBQ0Y7QURrQkU7RUUzR0U7SUFZSSxlQUFBO0VEaUZOO0FBQ0Y7QUMvRUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0pBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7QURpRk47QUMvRU07RUFDRSxVQUFBO0FEaUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC5pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUsIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUsIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5hYm91dC1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWZvbnQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYWJvdXQtcGFnZSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gIH1cbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIHtcbiAgcGFkZGluZzogM3JlbTtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAycmVtO1xufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlLnBhZ2UtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAuYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAudGl0bGUucGFnZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICB9XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAuaW1nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGhlaWdodDogNTB2aDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzAwNTM5Njk2MDAtY2FlZDI1OTZkMjQyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMjY3JnE9ODBcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBzYXR1cmF0aW9uO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgdmFyKC0tc2hhZG93cyk7XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiAuaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDUwJTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4uYWJvdXQtcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG4gIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAuaW50cm8tc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICB9XHJcbiAgICAudGl0bGUucGFnZS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgQGV4dGVuZCAudW5kZXJsaW5lQmVmb3JlO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMDA1Mzk2OTYwMC1jYWVkMjU5NmQyNDI/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEyNjcmcT04MCcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2F0dXJhdGlvbjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIHZhcigtLXNoYWRvd3MpO1xyXG4gICAgICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
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
      styles: [".parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n\n.admin-metrics[_ngcontent-%COMP%] {\n  grid-area: 1/1/5/15;\n}\n\n.admin-user-management[_ngcontent-%COMP%] {\n  grid-area: 6/1/14/5;\n}\n\n.admin-review-management[_ngcontent-%COMP%] {\n  grid-area: 6/6/14/10;\n}\n\n.admin-company-management[_ngcontent-%COMP%] {\n  grid-area: 6/11/14/15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGFkbWluLXBhbmVsXFxhZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gIGdyaWQtcm93LWdhcDogMHB4O1xyXG59XHJcblxyXG4uYWRtaW4tbWV0cmljcyB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAxNTtcclxufVxyXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcclxuICBncmlkLWFyZWE6IDYgLyAxIC8gMTQgLyA1O1xyXG59XHJcbi5hZG1pbi1yZXZpZXctbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gNiAvIDE0IC8gMTA7XHJcbn1cclxuLmFkbWluLWNvbXBhbnktbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gMTEgLyAxNCAvIDE1O1xyXG59XHJcbiIsIi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbn1cblxuLmFkbWluLW1ldHJpY3Mge1xuICBncmlkLWFyZWE6IDEvMS81LzE1O1xufVxuXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzEvMTQvNTtcbn1cblxuLmFkbWluLXJldmlldy1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzYvMTQvMTA7XG59XG5cbi5hZG1pbi1jb21wYW55LW1hbmFnZW1lbnQge1xuICBncmlkLWFyZWE6IDYvMTEvMTQvMTU7XG59Il19 */"]
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
    /* harmony import */


    var _shared_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/company.service */
    "./src/app/shared/company.service.ts");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/component-list-item/component-list-item.component */
    "./src/app/shared/component-list-item/component-list-item.component.ts");

    function CompaniesComponent_app_component_list_item_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-component-list-item", 4);
      }

      if (rf & 2) {
        var component_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ComponentListItem", component_r61);
      }
    }

    var CompaniesComponent = /*#__PURE__*/function () {
      function CompaniesComponent(companyService, auth, translate, toastr) {
        _classCallCheck(this, CompaniesComponent);

        this.companyService = companyService;
        this.auth = auth;
        this.translate = translate;
        this.toastr = toastr;
        this.companyList = [];
      }

      _createClass(CompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.auth.showHTTPLoader(true);
          this.companyService.getCompanies().subscribe(function (item) {
            _this4.auth.showHTTPLoader(false);

            item.forEach(function (element) {
              _this4.companyList.push(element.payload.doc.data());
            });
            _this4.companyList = _this4.companyList.filter(function (v, i, a) {
              return a.findIndex(function (t) {
                return t.name === v.name;
              }) === i;
            });
          }, function (errorRes) {
            _this4.auth.showHTTPLoader(false);

            _this4.translate.get('TOASTR').subscribe(function (res) {
              _this4.toastr.error(errorRes.message, res.ERROR_TITLE);
            });
          });
        }
      }]);

      return CompaniesComponent;
    }();

    CompaniesComponent.ɵfac = function CompaniesComponent_Factory(t) {
      return new (t || CompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    CompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompaniesComponent,
      selectors: [["app-companies"]],
      decls: 6,
      vars: 4,
      consts: [[1, "gradient-background", "mt-75", "company-page"], [1, "underlineBefore", "text-center"], [1, "companies-wrapper", "container", "pb-5"], ["class", "mt-6 mx-auto", 3, "ComponentListItem", 4, "ngFor", "ngForOf"], [1, "mt-6", "mx-auto", 3, "ComponentListItem"]],
      template: function CompaniesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CompaniesComponent_app_component_list_item_5_Template, 1, 1, "app-component-list-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "COMPANIES_PAGE.TITLE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companyList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_6__["ComponentListItemComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .company-page[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.company-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  color: var(--font-color);\n}\n.company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  justify-content: space-around;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%]   app-component-list-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcY29tcGFuaWVzXFxjb21wYW5pZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFFRSxpQkFBQTtFQUNBLHdCQUFBO0FEdUVGO0FDdEVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUR3RUo7QURtQkU7RUUvRkE7SUFPSSxlQUFBO0VEeUVKO0FBQ0Y7QURTRTtFRTFGQTtJQVVJLGVBQUE7RUQyRUo7QUFDRjtBQ3pFRTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FEMkVKO0FESUU7RUVsRkE7SUFLSSxjQUFBO0VENkVKO0FBQ0Y7QUM1RUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDhFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSwgLmNvbXBhbnktcGFnZSBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlLCAuY29tcGFueS1wYWdlIGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kLCAuY29tcGFueS1wYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5jb21wYW55LXBhZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuLmNvbXBhbnktcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luOiAwIDJyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbXBhbnktcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb21wYW55LXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuLmNvbXBhbnktcGFnZSAuY29tcGFuaWVzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29tcGFueS1wYWdlIC5jb21wYW5pZXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb21wYW55LXBhZ2UgLmNvbXBhbmllcy13cmFwcGVyIGFwcC1jb21wb25lbnQtbGlzdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzLy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5jb21wYW55LXBhZ2Uge1xyXG4gIEBleHRlbmQgLmdyYWRpZW50LWJhY2tncm91bmQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogZ2V0Rm9udFNpemUoaDEpO1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgIEBleHRlbmQgLnVuZGVybGluZUJlZm9yZTtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jb21wYW5pZXMtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMzAlIDMwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgYXBwLWNvbXBvbmVudC1saXN0LWl0ZW0ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
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
        return [{
          type: _shared_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]
        }, {
          type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/companies/company-full-page/company-full-page.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/pages/companies/company-full-page/company-full-page.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CompanyFullPageComponent */

  /***/
  function srcAppComponentsPagesCompaniesCompanyFullPageCompanyFullPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyFullPageComponent", function () {
      return CompanyFullPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/company.service */
    "./src/app/shared/company.service.ts");
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


    var src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CompanyFullPageComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyFullPageComponent_button_18_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36);

          return ctx_r54.loadReviews(_r52);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMPANY_FULL.SEE_REVIEWS"), " ");
      }
    }

    function CompanyFullPageComponent_button_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompanyFullPageComponent_button_19_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.loadReviews();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "COMPANY_FULL.HIDE_REVIEWS"), " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/reviews", a1];
    };

    function CompanyFullPageComponent_div_37_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r59.timeStamp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r59.rating, " / 10");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r59.textExcerpt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, element_r59.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, "HOMEPAGE.SEE_MORE_BTN"));
      }
    }

    function CompanyFullPageComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompanyFullPageComponent_div_37_div_1_Template, 13, 9, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.reviews);
      }
    }

    var CompanyFullPageComponent = /*#__PURE__*/function () {
      function CompanyFullPageComponent(companyService, router, auth, toastr, reviewService) {
        _classCallCheck(this, CompanyFullPageComponent);

        this.companyService = companyService;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.reviewService = reviewService;
        this.currentCompany = {};
        this.currentCompanyName = '';
        this.reviews = [];
        this.canLoadReviews = false;
        this.disableLoadReviewsButton = false;
        this.currentCompanyName = router.url.slice(11);
      }

      _createClass(CompanyFullPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.auth.showHTTPLoader(true);
          this.companyService.getCompanyByName(this.currentCompanyName).subscribe(function (res) {
            _this5.auth.showHTTPLoader(false);

            if (res.length < 1) {
              _this5.router.navigate(['/404']);

              return;
            }

            res.forEach(function (element) {
              _this5.currentCompany = element.payload.doc.data();
            });
          }, function (errorRes) {
            _this5.auth.showHTTPLoader(false);

            _this5.toastr.error(errorRes.message);
          });
        }
      }, {
        key: "loadReviews",
        value: function loadReviews(el) {
          var _this6 = this;

          if (!this.disableLoadReviewsButton) {
            this.auth.showHTTPLoader(true);
            this.reviewService.getReviewsForCompany(this.currentCompanyName).subscribe(function (res) {
              _this6.canLoadReviews = true;
              _this6.disableLoadReviewsButton = true;

              _this6.auth.showHTTPLoader(false);

              _this6.scrollIntoView(el);

              res.forEach(function (element) {
                var ele = element.payload.doc.data();

                _this6.reviews.push({
                  id: element.payload.doc.id,
                  companyName: ele.companyName,
                  imagePath: ele.imagePath,
                  rating: ele.rating,
                  textExcerpt: ele.textExcerpt,
                  timeStamp: _this6.reviewService.formatDate(ele.timeStamp),
                  userName: ele.userName
                });
              });
            }, function (err) {
              _this6.auth.showHTTPLoader(false);

              _this6.toastr.error(err.message);
            });
          } else {
            this.reviews = [];
            this.disableLoadReviewsButton = false;
          }
        }
      }, {
        key: "scrollIntoView",
        value: function scrollIntoView(el) {
          el.scrollIntoView(true);
        }
      }]);

      return CompanyFullPageComponent;
    }();

    CompanyFullPageComponent.ɵfac = function CompanyFullPageComponent_Factory(t) {
      return new (t || CompanyFullPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"]));
    };

    CompanyFullPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyFullPageComponent,
      selectors: [["app-company-full-page"]],
      decls: 38,
      vars: 24,
      consts: [[1, "gradient-background", "mt-75"], [1, "main-container", "container", "mt-5"], [1, "main-body", "container"], [1, "company-header"], [1, "company-info", "my-5", "d-flex", "justify-content-between"], [1, "fa", "fa-briefcase", "mr-2"], [1, "fa", "fa-map-marker", "mr-2"], [1, "company-body"], ["class", "d-block mx-auto w-50 mt-5", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "main-aside", "container"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "fa", "fa-star", "mr-2"], [1, "fa", "fa-users", "mr-2"], ["href", "#", 1, "btn", "btn-danger", "d-block", "mx-auto"], [1, "fa", "fa-link", "mr-2"], [1, "reviews-container", "container"], ["revContainer", ""], [4, "ngIf"], ["mat-raised-button", "", 1, "d-block", "mx-auto", "w-50", "mt-5", 3, "click"], ["class", " card review-element", 4, "ngFor", "ngForOf"], [1, "card", "review-element"], [1, "card-header", "d-flex", "justify-content-between"], [1, "fa", "fa-star"], [1, "card-body"], [1, "mt-2", "mb-5"], ["mat-raised-button", "", "color", "warn", 1, "d-block", "mx-auto", 3, "routerLink"]],
      template: function CompanyFullPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta quae voluptate temporibus impedit maiores esse aliquam culpa quisquam voluptates magni! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CompanyFullPageComponent_button_18_Template, 3, 3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CompanyFullPageComponent_button_19_Template, 3, 3, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CompanyFullPageComponent_div_37_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCompany == null ? null : ctx.currentCompany.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 14, "COMPANY_FULL.INDUSTRY"), ": ", ctx.currentCompany == null ? null : ctx.currentCompany.technology, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "COMPANY_FULL.LOCATION"), ": ", ctx.currentCompany == null ? null : ctx.currentCompany.location, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableLoadReviewsButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disableLoadReviewsButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentCompany == null ? null : ctx.currentCompany.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.currentCompany == null ? null : ctx.currentCompany.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "COMPANY_FULL.AVRG"), " : ", ctx.currentCompany == null ? null : ctx.currentCompany.averageReview, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 20, "COMPANY_FULL.EMPLOYEES"), ": 50 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 22, "COMPANY_FULL.WEBSITE"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canLoadReviews);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .main-aside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  padding-bottom: 15px;\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\nsection[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 52px;\n  padding-bottom: 10px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.main-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .main-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.company-info[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 25px;\n}\n.main-aside[_ngcontent-%COMP%] {\n  border: 1px solid var(--font-color);\n  margin-left: 5rem;\n  border-radius: 15px;\n  box-shadow: inset 0 0 3px 0 var(--font-color);\n}\n.main-aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .main-aside[_ngcontent-%COMP%] {\n    margin: 3rem 0 1rem 0;\n  }\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .main-aside[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.reviews-container[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  padding-top: 2rem;\n  border-top: 3px solid var(--font-color);\n}\n.reviews-container[_ngcontent-%COMP%]   .review-element[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, var(--tertiary) 0%, var(--primary) 100%);\n  padding: 1rem;\n  box-shadow: 0 0 5px 0 var(--shadows);\n  border-radius: 5px;\n  margin-bottom: 2rem;\n  width: 50%;\n  overflow: hidden;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .reviews-container[_ngcontent-%COMP%]   .review-element[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.reviews-container[_ngcontent-%COMP%]   .review-element[_ngcontent-%COMP%]   a.d-block.mx-auto[_ngcontent-%COMP%] {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvY29tcGFueS1mdWxsLXBhZ2UvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW55LWZ1bGwtcGFnZS9jb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvY29tcGFueS1mdWxsLXBhZ2UvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxjb21wYW5pZXNcXGNvbXBhbnktZnVsbC1wYWdlXFxjb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUVBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUR3RUY7QUN2RUU7O0VBRUUsd0JBQUE7QUR5RUo7QUN2RUU7RUFDRSxTQUFBO0FEeUVKO0FDdkVFOztFQUVFLGVBQUE7QUR5RUo7QURjRTtFRXpGQTs7SUFJSSxlQUFBO0VENEVKO0FBQ0Y7QUMxRUU7RUFDRSxlQUFBO0FENEVKO0FES0U7RUVsRkE7SUFHSSxlQUFBO0VEOEVKO0FBQ0Y7QUMzRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBRDZFSjtBRExFO0VFM0VBO0lBS0ksZUFBQTtFRCtFSjtBQUNGO0FDM0VBO0VBQ0UsYUFBQTtBRDhFRjtBRGRFO0VFakVGO0lBR0ksY0FBQTtFRGdGRjtBQUNGO0FDN0VBO0VBQ0UsWUFBQTtBRGdGRjtBQzdFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QURnRkY7QUM3RUE7RUFLRSxtQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBRDRFRjtBQ25GRTtFQUNFLGNBQUE7QURxRko7QUR0Q0U7RUVqREY7SUFVSSxxQkFBQTtFRGlGRjtBQUNGO0FEM0NFO0VFckNBO0lBRUksbUJBQUE7RURrRko7QUFDRjtBQzlFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtBRGlGRjtBQy9FRTtFQUNFLDRFQUFBO0VBS0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRDZFSjtBRC9ERTtFRXpCQTtJQWFJLFdBQUE7RUQrRUo7QUFDRjtBQzlFSTtFQUNFLFlBQUE7QURnRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW55LWZ1bGwtcGFnZS9jb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5tYWluLWFzaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbnNlY3Rpb24gcCxcbnNlY3Rpb24gaDEge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5zZWN0aW9uIHAge1xuICBtYXJnaW46IDA7XG59XG5zZWN0aW9uIHAsXG5zZWN0aW9uIGEge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiBwLFxuc2VjdGlvbiBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbnNlY3Rpb24gaS5mYSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uIGkuZmEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuc2VjdGlvbiBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBzZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5jb21wYW55LWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4ubWFpbi1hc2lkZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBtYXJnaW4tbGVmdDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAwIHZhcigtLWZvbnQtY29sb3IpO1xufVxuLm1haW4tYXNpZGUgcCB7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLWFzaWRlIHtcbiAgICBtYXJnaW46IDNyZW0gMCAxcmVtIDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1hc2lkZSBhLmJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuXG4ucmV2aWV3cy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xufVxuLnJldmlld3MtY29udGFpbmVyIC5yZXZpZXctZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsIHZhcigtLXRlcnRpYXJ5KSAwJSwgdmFyKC0tcHJpbWFyeSkgMTAwJSk7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCB2YXIoLS1zaGFkb3dzKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdzLWNvbnRhaW5lciAucmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucmV2aWV3cy1jb250YWluZXIgLnJldmlldy1lbGVtZW50IGEuZC1ibG9jay5teC1hdXRvIHtcbiAgd2lkdGg6IDE1MHB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbnNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIHAsXHJcbiAgaDEge1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgcCxcclxuICBhIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGkuZmEge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uY29tcGFueS1pbmZvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5tYWluLWFzaWRlIHtcclxuICBwIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gIH1cclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgbWFyZ2luLWxlZnQ6IDVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IDAgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICBtYXJnaW46IDNyZW0gMCAxcmVtIDA7XHJcbiAgfVxyXG4gIGEuYnRuIHtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJldmlld3MtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuXHJcbiAgLnJldmlldy1lbGVtZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgMTYzZGVnLFxyXG4gICAgICB2YXIoLS10ZXJ0aWFyeSkgMCUsXHJcbiAgICAgIHZhcigtLXByaW1hcnkpIDEwMCVcclxuICAgICk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHZhcigtLXNoYWRvd3MpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgYS5kLWJsb2NrLm14LWF1dG8ge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyFullPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-company-full-page',
          templateUrl: './company-full-page.component.html',
          styleUrls: ['./company-full-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_5__["ReviewService"]
        }];
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

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
          var _this7 = this;

          this.contactService.postComment(comment).then(function (response) {
            _this7.authService.showHTTPLoader(false);

            _this7.toastrService.success('Thank You!');
          })["catch"](function (errorRes) {
            _this7.authService.showHTTPLoader(false);

            _this7.toastrService.error(errorRes.message, 'Error.');
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
      decls: 30,
      vars: 20,
      consts: [[1, "contact-page-wrapper", "mt-75"], [1, "main-contact"], [1, "contact-form"], [3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "required", "", 3, "placeholder"], ["formControlName", "email", "type", "email", "required", "", 3, "placeholder"], ["name", "message", "required", "", "cols", "30", "rows", "5", "formControlName", "message", 2, "resize", "none", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-dark", "submit-btn", 3, "disabled"], [1, "contact-address"], [1, "content"], [1, "fa", "fa-map-marker", "mr-2"], [1, "fa", "fa-envelope", "mr-2"], [1, "fa", "fa-volume-control-phone", "mr-2"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmitContactForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 512 Main St, West Yarmouth, MA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " submarine@mail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " (666) 678-4590");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, "CONTACT_PAGE.SEND_MESSAGE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "CONTACT_PAGE.FULL_NAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "CONTACT_PAGE.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "CONTACT_PAGE.MESSAGE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 16, "CONTACT_PAGE.SEND_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 18, "CONTACT_PAGE.REACH_US"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n  padding: 8% 0;\n  min-height: 100vh;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .contact-page-wrapper[_ngcontent-%COMP%] {\n    padding: 75px 1rem 15px 1rem;\n  }\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px var(--shadows);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: var(--gradient-two);\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid var(--outlines);\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px var(--tertiary);\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.btn.btn-dark[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: linear-gradient(163deg, var(--tertiary) 0%, var(--gradient-two) 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    width: 150px;\n    display: block;\n    margin: 0 auto 1rem auto;\n  }\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid var(--warn);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxxRUFBQTtFQUNBLGFBQUE7RUFJQSxpQkFBQTtBRHFFRjtBRHdCRTtFRW5HRjtJQUlJLDRCQUFBO0VEMkVGO0FBQ0Y7QUN2RUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FEMEVGO0FDdkVBO0VBQ0UsZUFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FEMEVGO0FDdkVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FEMEVGO0FDdkVBOztFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FEMEVGO0FDdkVBOztFQUVFLDJDQUFBO0VBQ0EscUJBQUE7QUQwRUY7QUN2RUE7RUFFRSxlQUFBO0FEMEVGO0FDNUVBO0VBRUUsZUFBQTtBRDBFRjtBQzVFQTtFQUVFLGVBQUE7QUQwRUY7QUM1RUE7O0VBRUUsZUFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFlBQUE7QUQwRUY7QUN2RUE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSxnRkFBQTtBRHlFRjtBQ2xFQTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBRHFFRjtBQ2xFQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBRHFFRjtBQ2xFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBRHFFRjtBQ2xFQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtFRHFFRjs7RUNsRUE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFRHFFRjs7RUNsRUE7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RURxRUY7O0VDbEVBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEcUVGOztFQ2xFQTtJQUNFLGFBQUE7RURxRUY7O0VDbEVBO0lBQ0UsY0FBQTtFRHFFRjs7RUNsRUE7SUFDRSxZQUFBO0lBQ0EsY0FBQTtJQUNBLHdCQUFBO0VEcUVGO0FBQ0Y7QUNsRUE7O0VBRUUsNkJBQUE7QURvRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uY29udGFjdC1wYWdlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG4gIHBhZGRpbmc6IDglIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWN0LXBhZ2Utd3JhcHBlciB7XG4gICAgcGFkZGluZzogNzVweCAxcmVtIDE1cHggMXJlbTtcbiAgfVxufVxuXG4ubWFpbi1jb250YWN0IHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tc2hhZG93cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xuICB3aWR0aDogNjUlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZhIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0ge1xuICB3aWR0aDogODUlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb250YWN0LWZvcm0gaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWdyYWRpZW50LXR3byk7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiA1cHggMCAxN3B4IDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vdXRsaW5lcyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OmZvY3VzLFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IHZhcigtLXRlcnRpYXJ5KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJ0bi5idG4tZGFyayB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCB2YXIoLS10ZXJ0aWFyeSkgMCUsIHZhcigtLWdyYWRpZW50LXR3bykgNDIlKTtcbn1cblxuLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uY29udGVudCBwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1jb250YWN0IHtcbiAgICBoZWlnaHQ6IHVuc2V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG5cbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogdW5zZXQ7XG4gIH1cblxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xuICAgIGZsb2F0OiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyM3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5jb250ZW50IGgxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRlbnQgcCB7XG4gICAgcGFkZGluZzogdW5zZXQ7XG4gIH1cblxuICAuc3VibWl0LWJ0biB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcbiAgfVxufVxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2Fybik7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmNvbnRhY3QtcGFnZS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbiAgcGFkZGluZzogOCUgMDtcclxuICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgIHBhZGRpbmc6IDc1cHggMXJlbSAxNXB4IDFyZW07XHJcbiAgfVxyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWN0IHtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1zaGFkb3dzKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcclxuICB3aWR0aDogNjUlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmEge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBoMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ncmFkaWVudC10d28pO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQsXHJcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW46IDVweCAwIDE3cHggMDtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3V0bGluZXMpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OmZvY3VzLFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCB2YXIoLS10ZXJ0aWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5idG4uYnRuLWRhcmsge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICgjMmQzNDM2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAxNjNkZWcsXHJcbiAgICB2YXIoLS10ZXJ0aWFyeSkgMCUsXHJcbiAgICB2YXIoLS1ncmFkaWVudC10d28pIDQyJVxyXG4gICk7XHJcbn1cclxuXHJcbi5jb250YWN0LWFkZHJlc3MgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uY29udGVudCBoMSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uY29udGVudCBwIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubWFpbi1jb250YWN0IHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcclxuICAgIGZsb2F0OiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgaDEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHAge1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW0gYXV0bztcclxuICB9XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13YXJuKTtcclxufVxyXG4iXX0= */"]
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
  "./src/app/components/pages/four-oh-four/four-oh-four.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/pages/four-oh-four/four-oh-four.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FourOhFourComponent */

  /***/
  function srcAppComponentsPagesFourOhFourFourOhFourComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FourOhFourComponent", function () {
      return FourOhFourComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var FourOhFourComponent = /*#__PURE__*/function () {
      function FourOhFourComponent() {
        _classCallCheck(this, FourOhFourComponent);
      }

      _createClass(FourOhFourComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FourOhFourComponent;
    }();

    FourOhFourComponent.ɵfac = function FourOhFourComponent_Factory(t) {
      return new (t || FourOhFourComponent)();
    };

    FourOhFourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FourOhFourComponent,
      selectors: [["app-four-oh-four"]],
      decls: 9,
      vars: 8,
      consts: [["mat-raised-button", "", "color", "accent", 1, "d-block", "mx-auto", "mt-3", 3, "routerLink"]],
      template: function FourOhFourComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "404.CONTENT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "404.BTN"));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9mb3VyLW9oLWZvdXIvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2ZvdXItb2gtZm91ci9mb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZm91ci1vaC1mb3VyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcZm91ci1vaC1mb3VyXFxmb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVqSUE7RUFDRSxxRUFBQTtFQUVBLGlCQUFBO0FEd0VGO0FDdkVFO0VBQ0UsZUFBQTtBRHlFSjtBQ3ZFRTs7RUFFRSx3QkFBQTtBRHlFSjtBQ3ZFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZm91ci1vaC1mb3VyL2ZvdXItb2gtZm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG5zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbnNlY3Rpb24gaDEge1xuICBmb250LXNpemU6IDcycHg7XG59XG5zZWN0aW9uIGgxLFxuc2VjdGlvbiBoNiB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbnNlY3Rpb24gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDE1MHB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4Jztcclxuc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgfVxyXG4gIGgxLFxyXG4gIGg2IHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FourOhFourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-four-oh-four',
          templateUrl: './four-oh-four.component.html',
          styleUrls: ['./four-oh-four.component.scss']
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


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/company.service */
    "./src/app/shared/company.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/components/reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");

    var _c0 = function _c0(a1) {
      return ["/companies", a1];
    };

    function HomeComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "+389 77 500 000 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.technology, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.location, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 9, "HOMEPAGE.DESCRIPTION"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx_r0.featuredCompany == null ? null : ctx_r0.featuredCompany.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 11, "HOMEPAGE.SEE_MORE_BTN"));
      }
    }

    function HomeComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, company_r3 == null ? null : company_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r3 == null ? null : company_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r3 == null ? null : company_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", company_r3 == null ? null : company_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", company_r3 == null ? null : company_r3.location, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, "HOMEPAGE.AVERAGE"), ": ", company_r3 == null ? null : company_r3.averageReview, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, company_r3 == null ? null : company_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "HOMEPAGE.SEE_MORE_BTN"));
      }
    }

    function HomeComponent_app_review_element_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-review-element", 33);
      }

      if (rf & 2) {
        var review_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviewElement", review_r4);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(toastr, formBuilder, auth, reviewService, translateService, companiesService, afAuth) {
        _classCallCheck(this, HomeComponent);

        this.toastr = toastr;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.reviewService = reviewService;
        this.translateService = translateService;
        this.companiesService = companiesService;
        this.afAuth = afAuth;
        this.listOfReviews = [];
        this.loggedIn = false;
        this.topThreeCompanies = [];
        this.authForm = this.formBuilder.group({
          email: '',
          password: ''
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.auth.showHTTPLoader(true);
          this.companiesService.getFeaturedCompany().subscribe(function (res) {
            res.forEach(function (element) {
              _this8.auth.showHTTPLoader(false);

              _this8.featuredCompany = element.payload.doc.data();
            }, function (catchErr) {
              _this8.auth.showHTTPLoader(false);

              _this8.toastr.error(catchErr.message);
            });
          });
          this.companiesService.getTopThreeCompanies().subscribe(function (res) {
            res.forEach(function (element) {
              _this8.topThreeCompanies.push(element.payload.doc.data());
            });

            _this8.auth.showHTTPLoader(false);
          }, function (catchErr) {
            _this8.auth.showHTTPLoader(false);

            _this8.toastr.error(catchErr.message);
          });
          this.reviewService.getReviews().subscribe(function (data) {
            _this8.auth.showHTTPLoader(false);

            _this8.reviewList = data.map(function (e) {
              return {
                data: e.payload.doc.data(),
                id: e.payload.doc.id
              };
            });
            _this8.listOfReviews = _this8.reviewList;
          }, function (errorRes) {
            _this8.toastr.error(errorRes.message, 'Error.');

            _this8.auth.showHTTPLoader(false);
          });
        }
      }, {
        key: "checkIfLoggedIn",
        value: function checkIfLoggedIn() {
          var _this9 = this;

          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              _this9.loggedIn = true;
            } else {
              _this9.loggedIn = false;
            }
          });
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
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 18,
      vars: 16,
      consts: [[1, "d-flex", "justify-content-between", "dark-bg", "mt-75"], [1, "main-section", "w-100"], [1, "hero-companies", "my-5"], [1, "featured-companies-h"], ["class", "card dark-bg", 4, "ngIf"], [1, "top-reviewed-companies", "mt-6"], [1, "text-center", "my-5", "underlineBefore", "p-2"], [1, "reviewed-companies-container"], ["class", "card mr-3 dark-bg", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-5", "mb-3", "underlineBefore", "p-2", "reviews"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "card", "dark-bg"], [1, "card-header"], [3, "routerLink"], [1, "card-body"], [1, "card-aside"], [1, "img-fluid"], [3, "src", "alt"], [1, "company-info"], [1, "icon-toolbar", "d-sm-block", "d-xl-flex", "justify-content-center", "py-2", "mb-3"], [1, "company-info-item"], ["aria-hidden", "true", 1, "fa", "fa-industry"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], [1, "card-text", "mt-2", "text-sm-start", "text-xl-center"], ["mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "w-50", "td-none", 3, "routerLink"], [1, "card", "mr-3", "dark-bg"], [1, "reviewed-body"], [1, "icon-bundle"], [1, "fa", "fa-map-marker", "mr-2"], [1, "ml-2"], [1, "fa", "fa-star", "mr-2"], ["mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "td-none", 3, "routerLink"], [1, "my-3", 3, "reviewElement"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 28, 17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 20, 17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_app_review_element_17_Template, 1, 1, "app-review-element", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "HOMEPAGE.FEATURED_TITLE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featuredCompany);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "HOMEPAGE.TOP_REVIEWED"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 10, ctx.topThreeCompanies, 0, 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, "HOMEPAGE.REVIEWS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_11__["ReviewElementComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["SlicePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: var(--font-color);\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 54px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 66px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.hero-companies[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 var(--shadows);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 32px;\n  color: var(--font-color);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 175px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 2rem;\n  color: var(--font-color);\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  font-size: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 5px;\n  }\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n}\n.top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  color: var(--font-color);\n}\n@media only screen and (max-width: 600px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 var(--shadows);\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: var(--font-color);\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  display: block;\n  margin: auto;\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: var(--font-color);\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n.reviews[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\napp-review-element[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 70%;\n}\n@media only screen and (max-width: 600px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.dark-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n.fa[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n@media only screen and (max-width: 600px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 600px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxnQkFBQTtBRHdFRjtBQ3JFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0VBQ0EsYUFBQTtBRHNFSjtBRGVFO0VFMUZBO0lBT0ksZUFBQTtFRHdFSjtBQUNGO0FEb0JFO0VFcEdBO0lBVUksZUFBQTtFRDBFSjtBQUNGO0FEb0JFO0VFekdBO0lBY0ksZUFBQTtFRDJFSjtBQUNGO0FEb0JFO0VFOUdBO0lBa0JJLGVBQUE7RUQ0RUo7QUFDRjtBRG9CRTtFRW5IQTtJQXNCSSxlQUFBO0VENkVKO0FBQ0Y7QUN6RUE7RUFDRSxVQUFBO0FENEVGO0FDM0VFO0VBQ0UsbUJBQUE7QUQ2RUo7QUMzRUU7RUFDRSx3Q0FBQTtBRDZFSjtBQzVFSTtFQUNFLGdDQUFBO0FEOEVOO0FDN0VNO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUQrRVI7QUMzRUk7RUFDRSxhQUFBO0FENkVOO0FEL0JFO0VFL0NFO0lBR0ksY0FBQTtFRCtFTjtBQUNGO0FEaEJFO0VFbkVFO0lBTUksY0FBQTtFRGlGTjtBQUNGO0FDOUVVO0VBQ0UsWUFBQTtBRGdGWjtBRDVDRTtFRXJDUTtJQUdJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFRGtGWjtBQUNGO0FEekNFO0VFL0NRO0lBUUksWUFBQTtFRG9GWjtBQUNGO0FEcENFO0VFekRRO0lBV0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VEc0ZaO0FBQ0Y7QUR0Q0U7RUU5RFE7SUFnQkksWUFBQTtFRHdGWjtBQUNGO0FDcEZNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QURzRlI7QUR6RUU7RUVoQkk7SUFLSSxpQkFBQTtFRHdGUjtBQUNGO0FEcEVFO0VFMUJJO0lBUUksaUJBQUE7RUQwRlI7QUFDRjtBRHBFRTtFRS9CSTtJQVlJLGlCQUFBO0VEMkZSO0FBQ0Y7QURwRUU7RUVwQ0k7SUFnQkksaUJBQUE7RUQ0RlI7QUFDRjtBRHBFRTtFRXpDSTtJQW9CSSxpQkFBQTtFRDZGUjtBQUNGO0FDMUZZOztFQUVFLHdCQUFBO0VBQ0EsZUFBQTtBRDRGZDtBRHZHRTtFRVFVOztJQUtJLGVBQUE7RUQrRmQ7QUFDRjtBRDdHRTtFRU9RO0lBVUksbUJBQUE7RURnR1o7QUFDRjtBRHhHRTtFRUhRO0lBYUksbUJBQUE7RURrR1o7QUFDRjtBRHhHRTtFRVJRO0lBZ0JJLG1CQUFBO0VEb0daO0FBQ0Y7QURuR0U7RUVDWTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFRHFHZDtFQ25HWTtJQUNFLGlCQUFBO0VEcUdkO0FBQ0Y7QUMzRkU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUQ4Rko7QUQzSUU7RUUwQ0E7SUFLSSxlQUFBO0VEZ0dKO0FBQ0Y7QUQ1SEU7RUVzQkE7SUFRSSxlQUFBO0VEa0dKO0FBQ0Y7QUM5RkE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QURpR0Y7QUQxSkU7RUV1REY7SUFJSSxjQUFBO0VEbUdGO0FBQ0Y7QURySkU7RUU2Q0Y7SUFRSSxjQUFBO0VEb0dGO0FBQ0Y7QURySkU7RUV3Q0Y7SUFZSSxjQUFBO0VEcUdGO0FBQ0Y7QURySkU7RUVtQ0Y7SUFnQkksY0FBQTtFRHNHRjtBQUNGO0FDcEdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtBRHNHSjtBRG5MRTtFRTBFQTtJQUtJLGlCQUFBO0VEd0dKO0FBQ0Y7QUQ5S0U7RUVnRUE7SUFRSSxpQkFBQTtFRDBHSjtBQUNGO0FEOUtFO0VFMkRBO0lBV0ksaUJBQUE7RUQ0R0o7QUFDRjtBRDlLRTtFRXNEQTtJQWNJLGlCQUFBO0VEOEdKO0FBQ0Y7QUM3R0k7RUFDRSxnQ0FBQTtBRCtHTjtBQzlHTTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBRGdIUjtBRGhORTtFRTRGSTtJQU1JLGVBQUE7RURrSFI7QUFDRjtBRDVMRTtFRW1FSTtJQVNJLGVBQUE7RURvSFI7QUFDRjtBQ2hISTtFQUNFLGFBQUE7QURrSE47QURwTUU7RUVpRkU7SUFHSSxjQUFBO0VEb0hOO0FBQ0Y7QUNqSFU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QURtSFo7QUR4TkU7RUVrR1E7SUFLSSxZQUFBO0VEcUhaO0FBQ0Y7QUNoSEk7RUFDRSxPQUFBO0FEa0hOO0FEdE5FO0VFbUdFO0lBR0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFRG9ITjtBQUNGO0FEdlBFO0VFb0lJO0lBRUksYUFBQTtJQUNBLHVCQUFBO0VEcUhSO0FBQ0Y7QURuUEU7RUUwSEk7SUFNSSxhQUFBO0lBQ0EsdUJBQUE7RUR1SFI7QUFDRjtBRC9PRTtFRWdISTtJQVVJLGFBQUE7SUFDQSx1QkFBQTtFRHlIUjtBQUNGO0FEMVBFO0VFcUhJO0lBY0ksYUFBQTtJQUNBLHVCQUFBO0VEMkhSO0FBQ0Y7QUMxSFE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUQ0SFY7QUQxUUU7RUUySU07SUFLSSxrQkFBQTtFRDhIVjtBQUNGO0FEMVFFO0VFc0lNO0lBUUksa0JBQUE7RURnSVY7QUFDRjtBRDFRRTtFRWlJTTtJQVdJLGtCQUFBO0VEa0lWO0FBQ0Y7QUQxUUU7RUU0SE07SUFjSSxlQUFBO0VEb0lWO0FBQ0Y7QUM3SEE7RUFDRSx3QkFBQTtBRGdJRjtBQzdIQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FEZ0lGO0FEalRFO0VFK0tGO0lBSUksVUFBQTtFRGtJRjtBQUNGO0FENVNFO0VFcUtGO0lBUUksVUFBQTtFRG1JRjtBQUNGO0FENVNFO0VFZ0tGO0lBWUksVUFBQTtFRG9JRjtBQUNGO0FDaklBO0VBQ0UscUVBQUE7QURvSUY7QUNqSUE7RUFDRSxrQkFBQTtBRG9JRjtBRHhVRTtFRW1NRjtJQUdJLGVBQUE7RURzSUY7QUFDRjtBRG5VRTtFRXlMRjtJQU1JLGVBQUE7RUR3SUY7QUFDRjtBRG5VRTtFRW9MRjtJQVVJLGVBQUE7RUR5SUY7QUFDRjtBRG5VRTtFRStLRjtJQWNJLGVBQUE7RUQwSUY7QUFDRjtBRG5VRTtFRTBLRjtJQWtCSSxlQUFBO0VEMklGO0FBQ0Y7QUN4SUE7RUFDRSxVQUFBO0FEMklGO0FEcldFO0VFeU5GO0lBR0ksMEJBQUE7SUFBQSx1QkFBQTtJQUFBLGtCQUFBO0VENklGO0FBQ0Y7QURoV0U7RUUrTUY7SUFNSSxVQUFBO0VEK0lGO0FBQ0Y7QURoV0U7RUUwTUY7SUFTSSxVQUFBO0VEaUpGO0FBQ0Y7QURoV0U7RUVxTUY7SUFZSSxVQUFBO0VEbUpGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5tYWluLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlLCAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYSwgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhOjpiZWZvcmUsIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIgYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlLCAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYTpob3Zlcjo6YmVmb3JlLCAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtaGVhZGVyIGE6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlLCAubWFpbi1zZWN0aW9uIGgxIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUsIC5tYWluLXNlY3Rpb24gaDE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLm1haW4tc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1zZWN0aW9uIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogMTBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA1NHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLXNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA2NnB4O1xuICB9XG59XG5cbi5oZXJvLWNvbXBhbmllcyB7XG4gIHdpZHRoOiA4MCU7XG59XG4uaGVyby1jb21wYW5pZXMgaDEge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMCB2YXIoLS1zaGFkb3dzKTtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICAgIHdpZHRoOiAxNzVweDtcbiAgfVxufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2LFxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSBpIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0gaDYsXG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0gaDYge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG59XG5cbi50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIGgzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRvcC1yZXZpZXdlZC1jb21wYW5pZXMgaDMge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAudG9wLXJldmlld2VkLWNvbXBhbmllcyBoMyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgdmFyKC0tc2hhZG93cyk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICB3aWR0aDogNzVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IHtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuXG4ucmV2aWV3cyB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuYXBwLXJldmlldy1lbGVtZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBhcHAtcmV2aWV3LWVsZW1lbnQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi5mYSB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XG4gIHdpZHRoOiA3NSU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5kLWJsb2NrLm14LWF1dG8ubXQtNS50ZC1ub25lIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5kLWJsb2NrLm14LWF1dG8ubXQtNS50ZC1ub25lIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5kLWJsb2NrLm14LWF1dG8ubXQtNS50ZC1ub25lIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLm1haW4tc2VjdGlvbiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcblxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogZ2V0Rm9udFNpemUoaDEpO1xyXG4gICAgQGV4dGVuZCAudW5kZXJsaW5lQmVmb3JlO1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWNvbXBhbmllcyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHZhcigtLXNoYWRvd3MpO1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgIEBleHRlbmQgLmFuaW1hdGVkQmVmb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYXNpZGUge1xyXG4gICAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb21wYW55LWluZm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24tdG9vbGJhciB7XHJcbiAgICAgICAgICAuY29tcGFueS1pbmZvLWl0ZW0ge1xyXG4gICAgICAgICAgICBoNixcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIHtcclxuICBoMyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHZhcigtLXNoYWRvd3MpO1xyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBleHRlbmQgLmFuaW1hdGVkQmVmb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIC5jYXJkLWFzaWRlIHtcclxuICAgICAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmV2aWV3ZWQtYm9keSB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi1idW5kbGUge1xyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJldmlld3Mge1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuYXBwLXJldmlldy1lbGVtZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IDcwJTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuXHJcbi5kYXJrLWJnIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
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
        }, {
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/landing-page/landing-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/pages/landing-page/landing-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppComponentsPagesLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(auth) {
        _classCallCheck(this, LandingPageComponent);

        this.auth = auth;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          var eMail = '';
          var passWord = '';
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            registerEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](eMail, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email),
            registerPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](passWord, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
          });
        }
      }, {
        key: "onRegisterFormSubmit",
        value: function onRegisterFormSubmit() {
          var _this10 = this;

          var formValue = this.registerForm.value;
          this.auth.signUp(formValue.registerEmail, formValue.registerPassword).then(function (res) {
            _this10.ngOnDestroy();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          localStorage.setItem('firstTime', 'false');
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 21,
      vars: 11,
      consts: [[1, "flex-container", "d-sm-block", "d-lg-flex", "justify-content-between"], [1, "text-outside"], [1, "my-6", "text-italic"], [1, "d-block", "mx-auto", "btn-go", 3, "click"], [1, "form-wrapper"], [1, "form-container", "register-container"], [3, "formGroup", "ngSubmit"], [1, "register-text"], ["type", "email", "formControlName", "registerEmail", "required", "", 1, "email-input", 3, "placeholder"], ["formControlName", "registerPassword", "type", "password", "required", "", "id", "passwordInput", 3, "placeholder"], [1, "btn", 3, "disabled"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "THE SUBMARINE PROJECT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Ready to dive in?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingPageComponent_Template_button_click_7_listener() {
            return ctx.ngOnDestroy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " GO! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LandingPageComponent_Template_form_ngSubmit_11_listener() {
            return ctx.onRegisterFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Create an account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 5, "LOGIN.EMAIL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 7, "LOGIN.PASSWORD"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.registerForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 9, "LOGIN.REGISTER"), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  z-index: 10000000;\n  background-image: url(\"/assets/landing-camec.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  color: var(--font-color);\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--font-color);\n  border: 1px var(--font-color) solid;\n  border-radius: 5px;\n  box-shadow: 0 0 5px 0 var(--shadows);\n  cursor: pointer;\n  transition: 0.4s;\n}\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  background-color: #fff;\n  color: var(--primary);\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 50px;\n    margin-top: 3rem;\n  }\n}\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\nsection[_ngcontent-%COMP%]   .my-6[_ngcontent-%COMP%] {\n  font-style: italic;\n  margin: 4rem 0;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   .my-6[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n  }\n}\nsection[_ngcontent-%COMP%]   .text-outside[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nsection[_ngcontent-%COMP%]   .text-outside[_ngcontent-%COMP%]   .btn-go[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 3rem;\n  border-radius: 15px;\n  width: 150px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  section[_ngcontent-%COMP%]   .text-outside[_ngcontent-%COMP%]   .btn-go[_ngcontent-%COMP%] {\n    font-size: 26px;\n    background-color: var(--font-color);\n    color: var(--primary);\n    margin-bottom: 3rem;\n  }\n}\nsection[_ngcontent-%COMP%]   .form-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\nform[_ngcontent-%COMP%] {\n  border: solid var(--font-color) 1px;\n  padding: 3rem;\n  border-radius: 5px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  form[_ngcontent-%COMP%] {\n    display: block;\n    border-radius: 15px;\n    padding: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n}\nform[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%] {\n  margin: 1rem;\n  text-align: center;\n}\nform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  color: var(--font-color);\n  border-bottom: var(--font-color) solid;\n  padding: 1rem;\n  margin: 1rem;\n  font-size: 1.5rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 0;\n  }\n}\nform[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  border-radius: 15px;\n  width: 150px;\n  margin: auto;\n  margin-top: 1rem;\n  opacity: 1;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 10px;\n    background-color: var(--font-color);\n    color: var(--primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sYW5kaW5nLXBhZ2UvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbGFuZGluZy1wYWdlL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcbGFuZGluZy1wYWdlXFxsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFHRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBRHNFRjtBQ3BFRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURzRUo7QUNwRUU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QURzRUo7QUNuRUU7RUFDRSxlQUFBO0FEcUVKO0FER0U7RUV6RUE7SUFHSSxlQUFBO0lBQ0EsZ0JBQUE7RUR1RUo7QUFDRjtBQ3JFRTtFQUNFLGVBQUE7QUR1RUo7QURORTtFRWxFQTtJQUdJLGVBQUE7RUR5RUo7QUFDRjtBQ3ZFRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBRHlFSjtBRGZFO0VFNURBO0lBSUksY0FBQTtFRDJFSjtBQUNGO0FDekVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEMkVKO0FDMUVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUQ0RU47QUQ5QkU7RUVsREU7SUFNSSxlQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0VEOEVOO0FBQ0Y7QUMzRUU7RUFDRSxXQUFBO0FENkVKO0FDeEVBO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEMkVGO0FEbkRFO0VFL0JGO0lBU0ksY0FBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUQ2RUY7QUFDRjtBQzVFRTs7O0VBR0UsY0FBQTtBRDhFSjtBQzVFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBRDhFSjtBQzVFRTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEOEVKO0FEOUVFO0VFUEE7SUFTSSxlQUFBO0lBQ0EsYUFBQTtFRGdGSjtBQUNGO0FDOUVFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FEZ0ZKO0FENUZFO0VFTUE7SUFRSSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUNBQUE7SUFDQSxxQkFBQTtFRGtGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ2JsdWVIZWFkZXInOiAjMmMzZTUwLFxyXG4gICd3aGl0ZUdyZXknOiB3aGl0ZXNtb2tlXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgc2VjdGlvbiAuZm9ybS13cmFwcGVyLCBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQsIHNlY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sYW5kaW5nLWNhbWVjLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5zZWN0aW9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHZhcigtLWZvbnQtY29sb3IpIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCB2YXIoLS1zaGFkb3dzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuc2VjdGlvbiBidXR0b246aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHNlY3Rpb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG5zZWN0aW9uIGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIHNlY3Rpb24gaDIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuc2VjdGlvbiAubXktNiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luOiA0cmVtIDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiAubXktNiB7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gIH1cbn1cbnNlY3Rpb24gLnRleHQtb3V0c2lkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5zZWN0aW9uIC50ZXh0LW91dHNpZGUgLmJ0bi1nbyB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgc2VjdGlvbiAudGV4dC1vdXRzaWRlIC5idG4tZ28ge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxufVxuc2VjdGlvbiAuZm9ybS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmZvcm0ge1xuICBib3JkZXI6IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpIDFweDtcbiAgcGFkZGluZzogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5mb3JtIGlucHV0LFxuZm9ybSBidXR0b24sXG5mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5mb3JtIC5yZWdpc3Rlci10ZXh0IHtcbiAgbWFyZ2luOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb3JtIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1mb250LWNvbG9yKSBzb2xpZDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICBmb3JtIGlucHV0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuZm9ybSAuYnRuIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGZvcm0gLmJ0biB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbnNlY3Rpb24ge1xyXG4gIEBleHRlbmQgLmZpeGVkLWZ1bGwtaGVpZ2h0O1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB6LWluZGV4OiAxMDAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbGFuZGluZy1jYW1lYy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tZm9udC1jb2xvcikgc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgdmFyKC0tc2hhZG93cyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubXktNiB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBtYXJnaW46IDRyZW0gMDtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtb3V0c2lkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5idG4tZ28ge1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmZvcm0td3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGJvcmRlcjogc29saWQgdmFyKC0tZm9udC1jb2xvcikgMXB4O1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICBidXR0b24sXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5yZWdpc3Rlci10ZXh0IHtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1mb250LWNvbG9yKSBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.service */
    "./src/app/shared/shared.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = ["logiRegi"];

    function LoginComponent_main_0_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_div_27_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.forgotPasswordDialog(_r35);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "LOGIN.FORGOT_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r35.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "LOGIN.RESET_BTN"), " ");
      }
    }

    function LoginComponent_main_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function LoginComponent_main_0_Template_main_clickOutside_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.onRegisterFormSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.onLoginFormSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_a_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.forgetPasswordModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LoginComponent_main_0_div_27_Template, 10, 7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.triggerLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_button_click_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.triggerRegister();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_main_0_Template_i_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("delayClickOutsideInit", true)("exclude", ".fa")("clickOutsideEvents", "click,touchstart, scroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.registerForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 21, "LOGIN.REGISTER"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 23, "LOGIN.EMAIL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "LOGIN.PASSWORD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r31.registerForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 27, "LOGIN.REGISTER"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.loginForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, "LOGIN.LOGIN"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "LOGIN.EMAIL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 33, "LOGIN.PASSWORD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 35, "LOGIN.FORGOT_PASS"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.showDialog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r31.loginForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 37, "LOGIN.LOGIN"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 39, "LOGIN.LOGI_DESCRIPTION"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 41, "LOGIN.LOGIN"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 43, "LOGIN.REGI_DESCRIPTION"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 45, "LOGIN.REGISTER"), " ");
      }
    }

    var _c1 = function _c1() {
      return ["/my-account"];
    };

    function LoginComponent_section_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function LoginComponent_section_1_Template_div_clickOutside_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_i_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", ".fa")("clickOutsideEvents", "click,touchstart, scroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "LOGIN.ACC_CONTROLS"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "HEADER.MY_ACCOUNT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, "LOGIN.LOG_OUT"), " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(auth, toastrService, router, afAuth, translateService, sharedService) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.toastrService = toastrService;
        this.router = router;
        this.afAuth = afAuth;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.isLoggedIn = false;
        this.showDialog = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.translateService.get('TOASTR').subscribe(function (response) {
            _this11.toastrMessages = response;
          });
          this.initLoginForm();
          this.initRegisterForm();
          this.router.events.subscribe(function (eventChange) {
            if (eventChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this11.closeModal();
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
          var _this12 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signUp(this.registerForm.value.registerEmail, this.registerForm.value.registerPassword).then(function (response) {
            _this12.sharedService.emitLoginModalState(false);

            _this12.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this12.auth.showHTTPLoader(false);

            _this12.toastrService.error(error.message, _this12.toastrMessages.ERROR_TITLE);
          });
        }
      }, {
        key: "forgetPasswordModal",
        value: function forgetPasswordModal() {
          this.showDialog = true;
        }
      }, {
        key: "forgotPasswordDialog",
        value: function forgotPasswordDialog(form) {
          var _this13 = this;

          var email = Object.values(form.form.value)[0];
          this.auth.showHTTPLoader(true);
          this.auth.afAuth.sendPasswordResetEmail(email).then(function (res) {
            _this13.auth.showHTTPLoader(false);

            _this13.toastrService.success(_this13.toastrMessages.PASS_RESET, _this13.toastrMessages.SUCCESS_TITLE);

            _this13.showDialog = false;
          })["catch"](function (errorRes) {
            _this13.auth.showHTTPLoader(false);

            _this13.toastrService.error(errorRes.message, _this13.toastrMessages.ERROR_TITLE);
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
          var _this14 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password).then(function (response) {
            _this14.toastrService.success(_this14.toastrMessages.SUCCESFULL_LOGIN, _this14.toastrMessages.SUCCESS_TITLE);

            _this14.sharedService.emitLoginModalState(false);

            _this14.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this14.toastrService.error(error.message, _this14.toastrMessages.ERROR_TITLE);

            _this14.auth.showHTTPLoader(false);
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
          var _this15 = this;

          this.afAuth.signOut().then(function (response) {
            _this15.sharedService.emitLoginModalState(false);

            _this15.router.navigate(['/']);

            _this15.translateService.get('TOASTR').subscribe(function (res) {
              _this15.toastrService.success(res.SIGNED_OUT, res.SUCCESS_TITLE);
            });
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.sharedService.emitLoginModalState(false);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]));
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
      inputs: {
        isLoggedIn: "isLoggedIn"
      },
      decls: 2,
      vars: 2,
      consts: [["class", "henlo", 3, "delayClickOutsideInit", "exclude", "clickOutsideEvents", "clickOutside", 4, "ngIf"], [4, "ngIf"], [1, "henlo", 3, "delayClickOutsideInit", "exclude", "clickOutsideEvents", "clickOutside"], ["id", "logiRegiContainer", 1, "login-register"], ["logiRegi", ""], [1, "form-container", "register-container"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "registerEmail", "required", "", 3, "placeholder"], ["formControlName", "registerPassword", "type", "password", "required", "", "id", "passwordInput", 3, "placeholder"], [1, "btn", "btn-dark", 3, "disabled"], [1, "form-container", "login-container"], ["type", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["type", "password", "formControlName", "password", "required", "", 3, "placeholder"], [1, "reset-link", 3, "click"], ["class", "reset-password-modal", 4, "ngIf"], [1, "overlay-container"], [1, "overlay-wrapper"], [1, "overlay-panel", "overlay-login"], ["id", "login", 1, "ghost", 3, "click"], [1, "overlay-panel", "overlay-register"], ["id", "register", 1, "ghost", 3, "click"], [1, "fa", "fa-times", 3, "click"], [1, "reset-password-modal"], [3, "ngSubmit"], ["resetForm", "ngForm"], ["for", "reset-email"], ["matInput", "", "ngModel", "", "type", "email", "name", "reset-email", "required", "", "placeholder", "Your email"], ["type", "submit", "color", "accent", 1, "btn", 3, "disabled"], [1, "card", 3, "exclude", "clickOutsideEvents", "clickOutside"], [1, "card-header"], [1, "acc-header"], [1, "fa", "fa-times", "white-icon", 3, "click"], [1, "card-body"], [1, "btn", "btn-dark", "mr-2", 3, "routerLink"], [1, "btn", "btn-danger", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_main_0_Template, 48, 47, "main", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_section_1_Template, 14, 13, "section", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ng_click_outside__WEBPACK_IMPORTED_MODULE_9__["ClickOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .logged-in-controls[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .reset-password-modal[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%], .reset-password-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--register);\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: var(--font-color);\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px var(--shadows);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: var(--font-color);\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid var(--outlines);\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px var(--tertiary);\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--gradient-two);\n  background: var(--gradient-two);\n  color: var(--font-color);\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n#register[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--font-color);\n}\n#login[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--font-color);\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.reset-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.4s;\n}\n.reset-link[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  color: var(--warn) !important;\n}\n.reset-password-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3000000;\n  background-color: var(--shadows);\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--secondary);\n  background: linear-gradient(163deg, var(--secondary), var(--primary));\n  color: var(--font-color);\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: var(--font-color);\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: var(--font-color);\n    background: linear-gradient(163deg, var(--tertiary) 0%, var(--gradient-two) 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: var(--acent);\n  font-size: 36px;\n  transition: 0.4s;\n}\n.fa.fa-times[_ngcontent-%COMP%]:hover {\n  color: var(--warn);\n  transition: 0.4s;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .acc-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-times.white-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logged-in-controls[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: var(--secondary);\n  width: 250px;\n  height: 250px;\n  box-shadow: inset 0 0 5px 0 var(--shadows);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUR3RUY7QUNyRUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUR3RUY7QUNyRUE7RUFDRSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUR3RUY7QUNyRUE7RUFFRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUR1RUY7QUNwRUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUR1RUY7QUNwRUE7RUFDRSwyQ0FBQTtFQUNBLHFCQUFBO0FEdUVGO0FDcEVBO0VBQ0Usa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBRHVFRjtBQ3BFQTtFQUNFLHVCQUFBO0VBQ0EsbUNBQUE7QUR1RUY7QUNwRUE7RUFDRSx1QkFBQTtFQUNBLG1DQUFBO0FEdUVGO0FDcEVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FEdUVGO0FDcEVBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FEdUVGO0FDcEVBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRHVFRjtBQ3JFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRHdFRjtBQ3JFQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUR3RUY7QUNyRUE7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUR1RUY7QUNuRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtBRHNFRjtBQ25FQTtFQUNFLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxRUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBRHNFRjtBQ25FQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBRHFFRjtBQ2xFQTtFQUNFLFFBQUE7RUFDQSx3QkFBQTtBRHFFRjtBQ2xFQTtFQUNFLDJCQUFBO0FEcUVGO0FDbEVBO0VBQ0UsMkJBQUE7QURxRUY7QUNsRUE7RUFDRSw0QkFBQTtBRHFFRjtBQ2xFQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURxRUY7QUNsRUE7RUFDRSwwQkFBQTtBRHFFRjtBQ2xFQTtFQUNFLHdCQUFBO0FEcUVGO0FDbEVBO0VBQ0UsMEJBQUE7QURxRUY7QUNsRUE7RUFDRTtJQUNFLFNBQUE7RURxRUY7O0VDbEVBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RURxRUY7O0VDbEVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RURxRUY7O0VDbEVBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VEcUVGOztFQ2xFQTtJQUNFLFdBQUE7SUFDQSxtQ0FBQTtFRHFFRjs7RUNsRUE7SUFDRSxtQkFBQTtFRHFFRjs7RUNsRUE7SUFDRSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFRHFFRjs7RUNsRUE7SUFDRSxrQkFBQTtJQUNBLHdCQUFBO0lBQ0EsZ0ZBQUE7SUFLQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxzQ0FBQTtFRGlFRjs7RUM5REE7SUFDRSxrQkFBQTtJQUVBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RURnRUY7O0VDN0RBO0lBQ0UsVUFBQTtJQUNBLFVBQUE7SUFDQSw0QkFBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0VEZ0VGOztFQzdEQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFRGdFRjs7RUM3REE7SUFDRSxTQUFBO0lBQ0Esd0JBQUE7RURnRUY7O0VDN0RBO0lBQ0UsMkJBQUE7RURnRUY7O0VDN0RBO0lBQ0UsMkJBQUE7RURnRUY7O0VDN0RBO0lBQ0UsNEJBQUE7RURnRUY7O0VDN0RBO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFRGdFRjs7RUM3REE7SUFDRSwwQkFBQTtFRGdFRjs7RUM3REE7SUFDRSx3QkFBQTtFRGdFRjs7RUM3REE7SUFDRSwwQkFBQTtFRGdFRjtBQUNGO0FDN0RBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQrREY7QUM3REE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FEZ0VGO0FDN0RBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FEZ0VGO0FDL0RFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRGlFSjtBQy9ERTtFQUNFLGdCQUFBO0FEaUVKO0FDN0RBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBRGdFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCAubG9nZ2VkLWluLWNvbnRyb2xzLCAub3ZlcmxheS1wYW5lbCwgLnJlc2V0LXBhc3N3b3JkLW1vZGFsLCAuZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0LCAucmVzZXQtcGFzc3dvcmQtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLmxvZ2luLXJlZ2lzdGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5sb2dpbi1yZWdpc3RlciBhIHtcbiAgY29sb3I6IHZhcigtLXJlZ2lzdGVyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaGVubG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNzUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDgwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1zaGFkb3dzKTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vdXRsaW5lcyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMnB4IHZhcigtLXRlcnRpYXJ5KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmFkaWVudC10d28pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC10d28pO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHggNDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuI3JlZ2lzdGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4jbG9naW4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5yZXNldC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ucmVzZXQtbGluazpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xufVxuXG4ucmVzZXQtcGFzc3dvcmQtbW9kYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDMwMDAwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvd3MpO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBsZWZ0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXktcmVnaXN0ZXIge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ub3ZlcmxheS1sb2dpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogNTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjbG9naW5SZWdpc3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmhlbmxvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIGlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5vdmVybGF5LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgdmFyKC0tdGVydGlhcnkpIDAlLCB2YXIoLS1ncmFkaWVudC10d28pIDQyJSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIHRvcDogLTEwMCU7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLm92ZXJsYXktcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IHVuc2V0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICAgIGJvdHRvbTogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgd2lkdGg6IHVuc2V0O1xuICAgIHotaW5kZXg6IDI7XG4gIH1cblxuICAub3ZlcmxheS1yZWdpc3RlciB7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5vdmVybGF5LWxvZ2luIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB6LWluZGV4OiA1O1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xuICB9XG59XG4uZmEuZmEtdGltZXMge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIlO1xuICB0b3A6IDIlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1hY2VudCk7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmZhLmZhLXRpbWVzOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXdhcm4pO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNhcmQtaGVhZGVyIC5hY2MtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1JTtcbiAgbGVmdDogMTUlO1xufVxuLmNhcmQtaGVhZGVyIC5mYS5mYS10aW1lcy53aGl0ZS1pY29uIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmxvZ2dlZC1pbi1jb250cm9scyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IDAgdmFyKC0tc2hhZG93cyk7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIGgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3RlciBhIHtcclxuICBjb2xvcjogdmFyKC0tcmVnaXN0ZXIpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5oZW5sbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0ODBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tc2hhZG93cyk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vdXRsaW5lcyk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCB2YXIoLS10ZXJ0aWFyeSk7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JhZGllbnQtdHdvKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC10d28pO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTJweCA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4jcmVnaXN0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4ucmVzZXQtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5yZXNldC1saW5rOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzZXQtcGFzc3dvcmQtbW9kYWwge1xyXG4gIEBleHRlbmQgLmZpeGVkLWZ1bGwtaGVpZ2h0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAzMDAwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvd3MpO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxufVxyXG5cclxuLm92ZXJsYXktY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBsZWZ0OiAtMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS1wYW5lbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5LXJlZ2lzdGVyIHtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5vdmVybGF5LWxvZ2luIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgI2xvZ2luUmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmhlbmxvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250YWluZXIgaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDE2M2RlZyxcclxuICAgICAgdmFyKC0tdGVydGlhcnkpIDAlLFxyXG4gICAgICB2YXIoLS1ncmFkaWVudC10d28pIDQyJVxyXG4gICAgKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDAlO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiB1bnNldDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgYm90dG9tOiB1bnNldDtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbG9naW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXdyYXBwZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZmEuZmEtdGltZXMge1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIlO1xyXG4gIHRvcDogMiU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2VudCk7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLmZhLmZhLXRpbWVzOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0td2Fybik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLmFjYy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgfVxyXG4gIC5mYS5mYS10aW1lcy53aGl0ZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nZ2VkLWluLWNvbnRyb2xzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCB2YXIoLS1zaGFkb3dzKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuIl19 */"]
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
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: src_app_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }];
      }, {
        logiRegi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['logiRegi']
        }],
        isLoggedIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/__ivy_ngcc__/lib_esmodule/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    function MyAccountComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

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

    function MyAccountComponent_mat_option_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

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

    function MyAccountComponent_div_71_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function MyAccountComponent_div_71_Template_div_clickOutside_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.toggleAccountDel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_div_71_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.deleteAccountDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_div_71_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.toggleAccountDel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", ".btnDelete")("clickOutsideEvents", "click,touchstart, scroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "CONFIRM_DIALOG.WARNING"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "CONFIRM_DIALOG.DELETE_Q"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "CONFIRM_DIALOG.YES"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "CONFIRM_DIALOG.CANCEL"), " ");
      }
    }

    var MyAccountComponent = /*#__PURE__*/function () {
      function MyAccountComponent(reviewService, companyService, authService, toastr, translateService, af) {
        _classCallCheck(this, MyAccountComponent);

        this.reviewService = reviewService;
        this.companyService = companyService;
        this.authService = authService;
        this.toastr = toastr;
        this.translateService = translateService;
        this.af = af;
        this.companies = [];
        this.showDialog = false;
        this.delAccDialog = false;
      }

      _createClass(MyAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.translateService.get('TOASTR').subscribe(function (response) {
            _this16.toastrMessages = response;
          });
          this.authService.showHTTPLoader(true);
          this.subscription = this.companyService.getCompanies().subscribe(function (data) {
            _this16.authService.showHTTPLoader(false);

            data.map(function (e) {
              _this16.companies.push(e.payload.doc.data());
            });
          }, function (errorRes) {
            _this16.authService.showHTTPLoader(false);

            _this16.toastr.error(errorRes.message, _this16.toastrMessages.ERROR_TITLE);
          });
          this.initForms();
        } // <Create new review>

      }, {
        key: "create",
        value: function create() {
          var _this17 = this;

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
            if (!e.emailVerified) {
              _this17.toastr.error(_this17.toastrMessages.UNVERIFIED, _this17.toastrMessages.ERROR_TITLE);

              _this17.authService.showHTTPLoader(false);

              return;
            }

            review.userName = e.email;

            _this17.reviewService.postReview(review).then(function (response) {
              _this17.reviewService.upvoteReview(response.id, 0, '');

              _this17.authService.showHTTPLoader(false);

              _this17.toastr.success(_this17.toastrMessages.SUBMITTED_REVIEW, _this17.toastrMessages.SUCCESS_TITLE);
            })["catch"](function (errorRes) {
              _this17.authService.showHTTPLoader(false);

              _this17.toastr.error(errorRes.message, _this17.toastrMessages.ERROR_TITLE);
            });
          });
        } // </Create new review>

      }, {
        key: "requestVerification",
        value: function requestVerification() {
          var _this18 = this;

          if (this.accountChangesForm.value.linkedInAccount) {
            this.authService.showHTTPLoader(true);
            this.authService.getUsername().subscribe(function (e) {
              _this18.af.collection('verifications').add({
                email: e.email,
                linkedin: _this18.accountChangesForm.value.linkedInAccount
              });
            });
            this.authService.showHTTPLoader(false);
            this.toastr.success(this.toastrMessages.VERIFICATION_SENT, this.toastrMessages.THANK);
          } else {
            this.authService.showHTTPLoader(false);
            this.toastr.error(this.toastrMessages.LINKEDIN, this.toastrMessages.OOPS);
          }
        }
      }, {
        key: "changeEmail",
        value: function changeEmail() {
          var _this19 = this;

          var email = this.accountChangesForm.value.changeEmailInput;

          if (!email) {
            this.toastr.error(this.toastrMessages.NO_EMAIL, this.toastrMessages.ERROR_TITLE);
          } else {
            this.authService.afAuth.currentUser.then(function (user) {
              return user.updateEmail(email).then(function () {
                _this19.toastr.success(_this19.toastrMessages.EMAIL_CHANGED, _this19.toastrMessages.SUCCESS_TITLE);
              })["catch"](function (err) {
                _this19.toastr.error(err.message, _this19.toastrMessages.ERROR_TITLE);
              });
            });
          }
        }
      }, {
        key: "toggleDialog",
        value: function toggleDialog() {
          this.showDialog = !this.showDialog;
        }
      }, {
        key: "toggleAccountDel",
        value: function toggleAccountDel() {
          this.delAccDialog = !this.delAccDialog;
        }
      }, {
        key: "deleteAccountDialog",
        value: function deleteAccountDialog() {
          var _this20 = this;

          this.authService.afAuth.currentUser.then(function (user) {
            return user["delete"]().then(function () {
              _this20.toastr.success(_this20.toastrMessages.USER_DELETED, _this20.toastrMessages.SUCCESS_TITLE);
            })["catch"](function (err) {
              _this20.toastr.error(err.message, _this20.toastrMessages.ERROR_TITLE);
            });
          });
          this.toggleAccountDel();
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this21 = this;

          if (this.accountChangesForm.value.newPassword && this.accountChangesForm.value.newPasswordConfirm) {
            if (this.accountChangesForm.value.newPassword === this.accountChangesForm.value.newPasswordConfirm) {
              this.authService.showHTTPLoader(true);
              this.authService.getUsername().subscribe(function (e) {
                e.updatePassword(_this21.accountChangesForm.value.newPassword).then(function () {
                  _this21.authService.showHTTPLoader(false);

                  _this21.toastr.success(_this21.toastrMessages.UPDATE_PASS, _this21.toastrMessages.SUCCESS_TITLE);
                })["catch"](function (err) {
                  _this21.authService.showHTTPLoader(false);

                  _this21.toastr.error(err.message, _this21.toastrMessages.ERROR_TITLE);
                });
              });
            } else {
              this.toastr.error(this.toastrMessages.MATCHING, this.toastrMessages.ERROR_TITLE);
            }
          } else {
            this.toastr.error(this.toastrMessages.FILL_PASSWORD, this.toastrMessages.ERROR_TITLE);
          }
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
          var newPassword = '';
          var newPasswordConfirm = '';
          var companyAddedNotification = '';
          var myCompanyNotifications = '';
          var multipleCompanies = '';
          this.accountChangesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            linkedInAccount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](linkedInAccount),
            changeEmailInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](changeEmailInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](newPassword),
            newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](newPasswordConfirm),
            companyAddedNotification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](companyAddedNotification),
            myCompanyNotifications: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](myCompanyNotifications),
            multipleCompanies: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](multipleCompanies)
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return MyAccountComponent;
    }();

    MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
      return new (t || MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]));
    };

    MyAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyAccountComponent,
      selectors: [["app-my-account"]],
      decls: 72,
      vars: 51,
      consts: [[1, "body", "parent", "mt-75"], [1, "d-flex", "flex-column", "container", "div1", 3, "formGroup"], [1, "mt-4"], ["formControlName", "companyName", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "d-block", "w-100"], ["required", "", "thumbLabel", "true", "step", "1", "min", "1", "max", "10", "type", "range", "formControlName", "rating", 1, "w-100"], ["matInput", "", "required", "", "formControlName", "textExcerpt", "cols", "30", "rows", "10", 2, "resize", "none"], ["mat-raised-button", "", 3, "disabled", "click"], [1, "d-flex", "flex-column", "container", "div2", 3, "formGroup"], ["matInput", "", "formControlName", "linkedInAccount"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["matInput", "", "formControlName", "changeEmailInput"], ["matInput", "", "formControlName", "newPassword", "type", "password"], ["matInput", "", "formControlName", "newPasswordConfirm", "type", "password"], ["formControlName", "multipleCompanies", "multiple", ""], ["formControlName", "myCompanyNotifications"], ["formControlName", "companyAddedNotification"], ["mat-raised-button", "", 1, "btn", "btn-danger", "mt-4", "mb-small", "btnDelete", 3, "click"], ["class", "dialog-container", 4, "ngIf"], [3, "value"], [1, "dialog-container"], [3, "exclude", "clickOutsideEvents", "clickOutside"], ["mat-dialog-title", ""], ["mat-dialog-actions", ""], ["mat-raised-button", "", "color", "primary", 1, "mr-3", 3, "click"]],
      template: function MyAccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyAccountComponent_mat_option_7_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-slider", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_19_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_28_listener() {
            return ctx.requestVerification();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_37_listener() {
            return ctx.changeEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-form-field", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_51_listener() {
            return ctx.updatePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MyAccountComponent_mat_option_60_Template, 2, 2, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-checkbox", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_68_listener() {
            return ctx.toggleAccountDel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MyAccountComponent_div_71_Template, 16, 14, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.inputForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 21, "MY_ACCOUNT.COMPANY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 23, "MY_ACCOUNT.RATING"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, "MY_ACCOUNT.DESCRIPTION"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.inputForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 27, "MY_ACCOUNT.SUBMIT_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountChangesForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 29, "MY_ACCOUNT.LINKEDIN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, "MY_ACCOUNT.CONNECT_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 33, "MY_ACCOUNT.EMAIL"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 35, "MY_ACCOUNT.EMAIL_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 37, "MY_ACCOUNT.OLD_PASS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 39, "MY_ACCOUNT.NEW_PASS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 41, "MY_ACCOUNT.CHANGE_PASS_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 43, "MY_ACCOUNT.COMPANIES"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.companies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 45, "MY_ACCOUNT.COMPANY_REVIEWED_NOT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 47, "MY_ACCOUNT.COMPANY_ADD_NOT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 49, "MY_ACCOUNT.DELETE_ACC_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.delAccDialog);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSlider"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], ng_click_outside__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogActions"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n@media only screen and (max-width: 600px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/2/5/4;\n}\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/5/5/7;\n}\n.div3[_ngcontent-%COMP%] {\n  grid-area: 5/3/7/6;\n}\n.body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n.dialog-container[_ngcontent-%COMP%] {\n  background-color: var(--shadows);\n}\n.dialog-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: var(--font-color);\n  padding: 1rem;\n  border-radius: 15px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\np[_ngcontent-%COMP%] {\n  color: var(--outlines);\n}\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n  color: var(--outlines);\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .mb-small[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbXktYWNjb3VudC9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXG15LWFjY291bnRcXG15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUR3RUY7QURpQkU7RUU5RkY7SUFPSSxjQUFBO0VEMEVGO0FBQ0Y7QURpQkU7RUVuR0Y7SUFVSSxjQUFBO0VENEVGO0FBQ0Y7QURpQkU7RUV4R0Y7SUFhSSxjQUFBO0VEOEVGO0FBQ0Y7QUMzRUE7RUFDRSxrQkFBQTtBRDhFRjtBQzVFQTtFQUNFLGtCQUFBO0FEK0VGO0FDN0VBO0VBQ0Usa0JBQUE7QURnRkY7QUM5RUE7RUFDRSxxRUFBQTtBRGlGRjtBQzlFQTtFQUVFLGdDQUFBO0FEZ0ZGO0FDOUVFO0VBQ0UsbUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURnRko7QUM1RUE7Ozs7RUFJRSx3QkFBQTtBRCtFRjtBQzVFQTtFQUNFLHNCQUFBO0FEK0VGO0FDNUVBOztFQUVFLHNCQUFBO0FEK0VGO0FEbENFO0VFMUNGO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFRCtFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCAuZGlhbG9nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0LCAuZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4ucGFyZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XG4gIGdyaWQtcm93LWdhcDogMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBhcmVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmRpdjEge1xuICBncmlkLWFyZWE6IDEvMi81LzQ7XG59XG5cbi5kaXYyIHtcbiAgZ3JpZC1hcmVhOiAxLzUvNS83O1xufVxuXG4uZGl2MyB7XG4gIGdyaWQtYXJlYTogNS8zLzcvNjtcbn1cblxuLmJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93cyk7XG59XG4uZGlhbG9nLWNvbnRhaW5lciBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSxcbm1hdC1jaGVja2JveCB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxucCB7XG4gIGNvbG9yOiB2YXIoLS1vdXRsaW5lcyk7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tb3V0bGluZXMpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLm1iLXNtYWxsIHtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgMWZyKTtcclxuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcclxuICBncmlkLXJvdy1nYXA6IDBweDtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5kaXYxIHtcclxuICBncmlkLWFyZWE6IDEgLyAyIC8gNSAvIDQ7XHJcbn1cclxuLmRpdjIge1xyXG4gIGdyaWQtYXJlYTogMSAvIDUgLyA1IC8gNztcclxufVxyXG4uZGl2MyB7XHJcbiAgZ3JpZC1hcmVhOiA1IC8gMyAvIDcgLyA2O1xyXG59XHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIHtcclxuICBAZXh0ZW5kIC5maXhlZC1mdWxsLWhlaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkb3dzKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSxcclxubWF0LWNoZWNrYm94IHtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiB2YXIoLS1vdXRsaW5lcyk7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3VzLFxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgY29sb3I6IHZhcigtLW91dGxpbmVzKTtcclxufVxyXG5cclxuLm1iLXNtYWxsIHtcclxuICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/pages/terms-of-service/terms-of-service.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/pages/terms-of-service/terms-of-service.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TermsOfServiceComponent */

  /***/
  function srcAppComponentsPagesTermsOfServiceTermsOfServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsOfServiceComponent", function () {
      return TermsOfServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TermsOfServiceComponent = /*#__PURE__*/function () {
      function TermsOfServiceComponent() {
        _classCallCheck(this, TermsOfServiceComponent);
      }

      _createClass(TermsOfServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsOfServiceComponent;
    }();

    TermsOfServiceComponent.ɵfac = function TermsOfServiceComponent_Factory(t) {
      return new (t || TermsOfServiceComponent)();
    };

    TermsOfServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TermsOfServiceComponent,
      selectors: [["app-terms-of-service"]],
      decls: 41,
      vars: 33,
      consts: [[1, "terms-of-service-section", "mt-75"], [1, "text-center"], [1, "mx-auto", "px-3"], [1, "font-weight-bold"]],
      template: function TermsOfServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "TERMS_OF_SERVICE.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "TERMS_OF_SERVICE.COOKIE_TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, "TERMS_OF_SERVICE.COOKIE_BODY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 17, "TERMS_OF_SERVICE.HATE_SPEECH_TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 19, "TERMS_OF_SERVICE.HATE_SPEECH_BODY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 21, "TERMS_OF_SERVICE.REVIEWS_TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 23, "TERMS_OF_SERVICE.REVIEWS_BODY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 25, "TERMS_OF_SERVICE.ANON_TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 27, "TERMS_OF_SERVICE.ANON_BODY"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 29, "TERMS_OF_SERVICE.RESERVED_1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 31, "TERMS_OF_SERVICE.RESERVED_2"), " ");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .terms-of-service-section[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.terms-of-service-section[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  min-height: 100vh;\n  color: var(--font-color);\n}\n.terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.terms-of-service-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 22px;\n  margin-bottom: 0;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 90%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL3Rlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGVybXMtb2Ytc2VydmljZS9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXHRlcm1zLW9mLXNlcnZpY2VcXHRlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUNBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFFQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVqSUE7RUFDRSxvQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7QUR3RUY7QUN2RUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRHlFSjtBRGtCRTtFRS9GQTtJQU9JLGVBQUE7RUQwRUo7QUFDRjtBRFFFO0VFMUZBO0lBVUksZUFBQTtFRDRFSjtBQUNGO0FDekVFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMkVKO0FER0U7RUVqRkE7SUFLSSxVQUFBO0lBQ0EsZUFBQTtFRDZFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL3Rlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUsIC50ZXJtcy1vZi1zZXJ2aWNlLXNlY3Rpb24gaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSwgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBoMTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCwgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4udGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4udGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW46IDAgMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4udGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIG9sIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBvbCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcbi50ZXJtcy1vZi1zZXJ2aWNlLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIEBleHRlbmQgLmdyYWRpZW50LWJhY2tncm91bmQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogZ2V0Rm9udFNpemUoaDEpO1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW46IDAgMnJlbTtcclxuICAgIEBleHRlbmQgLnVuZGVybGluZUJlZm9yZTtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsOfServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terms-of-service',
          templateUrl: './terms-of-service.component.html',
          styleUrls: ['./terms-of-service.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reviews/full-list/full-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/reviews/full-list/full-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FullListComponent */

  /***/
  function srcAppComponentsReviewsFullListFullListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullListComponent", function () {
      return FullListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FullListComponent_mat_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r71 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r71);
      }
    }

    function FullListComponent_app_review_element_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-review-element", 8);
      }

      if (rf & 2) {
        var review_r72 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviewElement", review_r72);
      }
    }

    var FullListComponent = /*#__PURE__*/function () {
      function FullListComponent(reviewService) {
        _classCallCheck(this, FullListComponent);

        this.reviewService = reviewService;
        this.options = ['Rating', 'Upvotes', 'Date Posted'];
        this.listOfReviews = [];
      }

      _createClass(FullListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.reviewService.getReviews().subscribe(function (response) {
            _this22.listOfReviews = response.map(function (e) {
              return {
                data: e.payload.doc.data(),
                id: e.payload.doc.id
              };
            });
          });
        }
      }]);

      return FullListComponent;
    }();

    FullListComponent.ɵfac = function FullListComponent_Factory(t) {
      return new (t || FullListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]));
    };

    FullListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullListComponent,
      selectors: [["app-full-list"]],
      decls: 18,
      vars: 11,
      consts: [[1, "review-page", "mt-75"], [1, "review-list"], [1, "filter-field"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", ""], [1, "review-container"], ["class", "review-item", 3, "reviewElement", 4, "ngFor", "ngForOf"], [3, "value"], [1, "review-item", 3, "reviewElement"]],
      template: function FullListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FullListComponent_mat_option_12_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FullListComponent_app_review_element_17_Template, 1, 1, "app-review-element", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "REVIEWS.ALL_REVIEWS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "REVIEWS.FILTER"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "REVIEWS.GO"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_7__["ReviewElementComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nsection.review-page[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n  padding-bottom: 10px;\n}\n.review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: var(--font-color);\n  text-align: center;\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 3rem auto;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-left: 2rem;\n}\n.review-container[_ngcontent-%COMP%] {\n  margin: 2rem 10rem;\n  display: grid;\n  grid-template-columns: 80%;\n  justify-content: stretch;\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n  row-gap: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL2Z1bGwtbGlzdC9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9mdWxsLWxpc3QvZnVsbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvZnVsbC1saXN0L0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXZpZXdzXFxmdWxsLWxpc3RcXGZ1bGwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUVBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLHFFQUFBO0VBQ0Esb0JBQUE7QUR3RUY7QUNwRUU7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUR1RUo7QURnQkU7RUU3RkE7SUFTSSxlQUFBO0VEd0VKO0FBQ0Y7QURNRTtFRXhGQTtJQVlJLGVBQUE7RUQwRUo7QUFDRjtBQ3RFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBRHlFRjtBQ3hFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRDBFSjtBQ3RFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsYUFBQTtBRHlFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9mdWxsLWxpc3QvZnVsbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gICdib3gtc2hhZG93LWNvbG9yJzogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gICdwZWFjaENvbG9yJzogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICAnZ3JleURhcmsnOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgJ2JsdWVIZWFkZXInOiAjMmMzZTUwLFxyXG4gICd3aGl0ZUdyZXknOiB3aGl0ZXNtb2tlXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgJ2gxJzogNzJweCxcclxuICAnaDInOiAzNnB4LFxyXG4gICdoMyc6IDI0cHhcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlLCAucmV2aWV3LWxpc3QgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSwgLnJldmlldy1saXN0IGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbnNlY3Rpb24ucmV2aWV3LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmV2aWV3LWxpc3QgaDEge1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW46IDAgMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucmV2aWV3LWxpc3QgaDEge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3LWxpc3QgaDEge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG59XG5mb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5yZXZpZXctY29udGFpbmVyIHtcbiAgbWFyZ2luOiAycmVtIDEwcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJTtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBjb2x1bW4tZ2FwOiA1cmVtO1xuICByb3ctZ2FwOiA1cmVtO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbnNlY3Rpb24ucmV2aWV3LXBhZ2Uge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJldmlldy1saXN0IHtcclxuICBoMSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGdldEZvbnRTaXplKGgxKTtcclxuICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICBAZXh0ZW5kIC51bmRlcmxpbmVCZWZvcmU7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDNyZW0gYXV0bztcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAycmVtIDEwcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGNvbHVtbi1nYXA6IDVyZW07XHJcbiAgcm93LWdhcDogNXJlbTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-list',
          templateUrl: './full-list.component.html',
          styleUrls: ['./full-list.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]
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


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/reviews/votes-container/votes-container.component */
    "./src/app/components/reviews/votes-container/votes-container.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    function ReviewElementComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var fill_r64 = ctx.fill;
        var index_r65 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r64 === 100)("bad", index_r65 < 3);
      }
    }

    function ReviewElementComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewElementComponent_div_22_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r66.sendReport("reviewElement.id");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewElementComponent_div_22_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.openReportDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "CONFIRM_DIALOG.REPORT_Q"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "CONFIRM_DIALOG.YES"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "CONFIRM_DIALOG.CANCEL"), " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/companies/", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/reviews", a1];
    };

    var ReviewElementComponent = /*#__PURE__*/function () {
      function ReviewElementComponent(config, reviewService, toastr, translate) {
        _classCallCheck(this, ReviewElementComponent);

        this.reviewService = reviewService;
        this.toastr = toastr;
        this.translate = translate;
        this.formattedDate = '';
        this.showDialog = false;
        config.readonly = true;
      }

      _createClass(ReviewElementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formattedDate = this.reviewService.formatDate(this.reviewElement);
          this.currentRate = this.reviewElement.data.rating;
        }
      }, {
        key: "openReportDialog",
        value: function openReportDialog() {
          this.showDialog = !this.showDialog;
        }
      }, {
        key: "sendReport",
        value: function sendReport(id) {
          var _this23 = this;

          this.reviewService.reportReview(id).then(function (res) {
            _this23.translate.get('TOASTR').subscribe(function (response) {
              _this23.toastr.success(response.REPORTED, response.SUCCESS_TITLE);

              _this23.openReportDialog();
            });
          })["catch"](function (err) {
            _this23.toastr.error(err.message);

            _this23.openReportDialog();
          });
        }
      }]);

      return ReviewElementComponent;
    }();

    ReviewElementComponent.ɵfac = function ReviewElementComponent_Factory(t) {
      return new (t || ReviewElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    ReviewElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewElementComponent,
      selectors: [["app-review-element"]],
      inputs: {
        reviewElement: "reviewElement"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])],
      decls: 25,
      vars: 21,
      consts: [[1, "review-container", "my-3"], [1, "card-aside"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "text-center", "my-sm-0", "my-md-2", "font-italic"], [1, "card"], [1, "card-header"], [1, "card-title", 3, "routerLink"], [3, "rate", "rateChange"], [1, "card-body", "d-flex", "justify-content-between"], [1, "supporting-flex"], ["id", "textTruncate", 1, "card-text", "text-truncate"], ["mat-raised-button", "", 3, "routerLink"], ["mat-raised-button", "", "color", "warn", 1, "ml-3", 3, "click"], ["id", "report-dialog", 4, "ngIf"], [1, "votes-container"], [3, "id", "username"], [1, "star"], ["id", "report-dialog"], ["mat-dialog-title", ""], ["mat-dialog-actions", "", 1, "btn-group", "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "warn", 1, "mr-3", 3, "click"], ["mat-raised-button", "", 3, "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewElementComponent_Template_button_click_19_listener() {
            return ctx.openReportDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReviewElementComponent_div_22_Template, 13, 9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-votes-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.reviewElement.data.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.reviewElement.data.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.formattedDate, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.reviewElement.data.companyName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reviewElement.data.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.currentRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.reviewElement.data.textExcerpt, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.reviewElement.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "HOMEPAGE.SEE_MORE_BTN"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 15, "HOMEPAGE.REPORT"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDialog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.reviewElement.id)("username", ctx.reviewElement.data.userName);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_8__["VotesContainerComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], div#report-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%], div#report-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.review-container[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  box-shadow: 5px 3px 3px 0 var(--shadows);\n  width: 100%;\n  border: 1px solid var(--primary);\n  position: relative;\n}\n@media only screen and (max-width: 600px) {\n  .review-container[_ngcontent-%COMP%] {\n    display: block;\n    height: 100%;\n  }\n}\n.card-aside[_ngcontent-%COMP%] {\n  background-color: var(--font-color);\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 100px;\n    display: block;\n    margin: auto;\n    padding: 5px;\n    height: 75px;\n  }\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n  color: var(--shadows);\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, var(--tertiary) 0%, var(--primary) 80%);\n  flex: 1;\n  border: 0;\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: var(--primary);\n}\n@media only screen and (max-width: 600px) {\n  .card-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  text-decoration: none;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n  width: 700px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\napp-votes-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\nngb-rating[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ndiv#report-dialog[_ngcontent-%COMP%] {\n  background-color: var(--shadows);\n  z-index: 100001;\n}\ndiv#report-dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: var(--font-color);\n  padding: 1rem;\n  border-radius: 15px;\n}\ndiv#report-dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: var(--reverse-font-color);\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUVBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBS0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBRG9FRjtBRGdCRTtFRTlGRjtJQUlJLGNBQUE7SUFDQSxZQUFBO0VEOEVGO0FBQ0Y7QUN2RUE7RUFDRSxtQ0FBQTtBRDBFRjtBQ3hFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEMEVOO0FERUU7RUU5RUU7SUFJSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFRDRFTjtBQUNGO0FDekVFO0VBQ0UscUJBQUE7QUQyRUo7QURWRTtFRWxFQTtJQUdJLGdCQUFBO0VENkVKO0FBQ0Y7QUN6RUE7RUFDRSwyRUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUQ0RUY7QUN6RUE7RUFDRSw2QkFBQTtBRDRFRjtBQ3pFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUtBLDBCQUFBO0FEd0VGO0FEaENFO0VFL0NGO0lBSUksY0FBQTtFRCtFRjtBQUNGO0FDNUVFO0VBSUUsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBRDJFSjtBRHJDRTtFRTVDQTtJQUVJLGVBQUE7RURtRko7QUFDRjtBQzNFQTtFQUlFLHdCQUFBO0FEMkVGO0FDOUVFO0VBQ0UsWUFBQTtBRGdGSjtBQzdFRTtFQUNFLFlBQUE7QUQrRUo7QURwREU7RUU1QkE7SUFHSSxZQUFBO0VEaUZKO0FBQ0Y7QUQxQ0U7RUUzQ0E7SUFNSSxZQUFBO0VEbUZKO0FBQ0Y7QUQxQ0U7RUVoREE7SUFTSSxZQUFBO0VEcUZKO0FBQ0Y7QUNsRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBRHFGRjtBQ25GQTtFQUNFLGFBQUE7QURzRkY7QUNuRkE7RUFFRSxnQ0FBQTtFQUVBLGVBQUE7QURvRkY7QUNuRkU7RUFLRSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGlGSjtBQ3ZGSTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBRHlGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXctZWxlbWVudC9yZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIGRpdiNyZXBvcnQtZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSwgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlLCAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0LCBkaXYjcmVwb3J0LWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4ucmV2aWV3LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDVweCAzcHggM3B4IDAgdmFyKC0tc2hhZG93cyk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5jYXJkLWFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4uY2FyZC1hc2lkZSAuaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1hc2lkZSAuaW1nLWNvbnRhaW5lciAuaW1nLWZsdWlkIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gIH1cbn1cbi5jYXJkLWFzaWRlIHAudGV4dC1jZW50ZXIubXktbWQtMi5teS1zbS0wLmZvbnQtaXRhbGljIHtcbiAgY29sb3I6IHZhcigtLXNoYWRvd3MpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1hc2lkZSBwLnRleHQtY2VudGVyLm15LW1kLTIubXktc20tMC5mb250LWl0YWxpYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsIHZhcigtLXRlcnRpYXJ5KSAwJSwgdmFyKC0tcHJpbWFyeSkgODAlKTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cblxuLmNhcmQtYm9keSB7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbi5jYXJkLWJvZHkgYnV0dG9uLnNlZS1tb3JlLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5jYXJkLWJvZHkgI3RleHRUcnVuY2F0ZSB7XG4gIHdpZHRoOiA3MDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZC1ib2R5ICN0ZXh0VHJ1bmNhdGUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FyZC1ib2R5ICN0ZXh0VHJ1bmNhdGUge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmQtYm9keSAjdGV4dFRydW5jYXRlIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cblxuYXBwLXZvdGVzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxubmdiLXJhdGluZzpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpdiNyZXBvcnQtZGlhbG9nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93cyk7XG4gIHotaW5kZXg6IDEwMDAwMTtcbn1cbmRpdiNyZXBvcnQtZGlhbG9nIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuZGl2I3JlcG9ydC1kaWFsb2cgZGl2IGg2IHtcbiAgY29sb3I6IHZhcigtLXJldmVyc2UtZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ucmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm94LXNoYWRvdzogNXB4IDNweCAzcHggMCB2YXIoLS1zaGFkb3dzKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLWFzaWRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBwLnRleHQtY2VudGVyLm15LW1kLTIubXktc20tMC5mb250LWl0YWxpYyB7XHJcbiAgICBjb2xvcjogdmFyKC0tc2hhZG93cyk7XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsIHZhcigtLXRlcnRpYXJ5KSAwJSwgdmFyKC0tcHJpbWFyeSkgODAlKTtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gIC5jYXJkLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBAZXh0ZW5kIC5hbmltYXRlZEJlZm9yZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIGJ1dHRvbi5zZWUtbW9yZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgI3RleHRUcnVuY2F0ZSB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuYXBwLXZvdGVzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxubmdiLXJhdGluZzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuZGl2I3JlcG9ydC1kaWFsb2cge1xyXG4gIEBleHRlbmQgLmZpeGVkLWZ1bGwtaGVpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvd3MpO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMDE7XHJcbiAgZGl2IHtcclxuICAgIGg2IHtcclxuICAgICAgY29sb3I6IHZhcigtLXJldmVyc2UtZm9udC1jb2xvcik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".star[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled[_ngcontent-%COMP%] {\n        color: #1e90ff;\n      }\n      .bad[_ngcontent-%COMP%] {\n        color: #deb0b0;\n      }\n      .filled.bad[_ngcontent-%COMP%] {\n        color: #ff1e1e;\n      }"]
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
        }, {
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
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
  "./src/app/components/reviews/review-full/review-full.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/reviews/review-full/review-full.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ReviewFullComponent */

  /***/
  function srcAppComponentsReviewsReviewFullReviewFullComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewFullComponent", function () {
      return ReviewFullComponent;
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


    var src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/auth.service */
    "./src/app/shared/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ReviewFullComponent = /*#__PURE__*/function () {
      function ReviewFullComponent(router, reviewService, auth, toastr) {
        _classCallCheck(this, ReviewFullComponent);

        this.router = router;
        this.reviewService = reviewService;
        this.auth = auth;
        this.toastr = toastr;
        this.currentReviewId = '';
        this.currentReviewId = this.router.url.slice(9);
      }

      _createClass(ReviewFullComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.auth.showHTTPLoader(true);
          this.reviewService.getReviewById(this.currentReviewId).subscribe(function (res) {
            _this24.auth.showHTTPLoader(false);

            if (!res.payload.data()) {
              _this24.router.navigate(['/404']);

              return;
            }

            _this24.activeReview = res.payload.data();
          }, function (errorRes) {
            _this24.auth.showHTTPLoader(false);

            _this24.toastr.error(errorRes.message);
          });
        }
      }]);

      return ReviewFullComponent;
    }();

    ReviewFullComponent.ɵfac = function ReviewFullComponent_Factory(t) {
      return new (t || ReviewFullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    ReviewFullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReviewFullComponent,
      selectors: [["app-review-full"]],
      decls: 8,
      vars: 5,
      consts: [[1, "mt-75", "gradient-background"], [3, "src", "alt"]],
      template: function ReviewFullComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.activeReview == null ? null : ctx.activeReview.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.activeReview == null ? null : ctx.activeReview.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeReview == null ? null : ctx.activeReview.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeReview == null ? null : ctx.activeReview.textExcerpt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeReview == null ? null : ctx.activeReview.rating);
        }
      },
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--font-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1mdWxsL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1mdWxsL3Jldmlldy1mdWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWZ1bGwvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1mdWxsXFxyZXZpZXctZnVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUVBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGlCQUFBO0FEd0VGO0FDdEVFO0VBQ0Usd0JBQUE7QUR3RUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWZ1bGwvcmV2aWV3LWZ1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBzZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1zZWNvbmRhcnkpLCB2YXIoLS1wcmltYXJ5KSk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuc2VjdGlvbiBwIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbnNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewFullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-review-full',
          templateUrl: './review-full.component.html',
          styleUrls: ['./review-full.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: src_app_shared_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }, {
          type: src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/reviews/votes-container/votes-container.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/reviews/votes-container/votes-container.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: VotesContainerComponent */

  /***/
  function srcAppComponentsReviewsVotesContainerVotesContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VotesContainerComponent", function () {
      return VotesContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/auth.service */
    "./src/app/shared/auth.service.ts");

    var VotesContainerComponent = /*#__PURE__*/function () {
      function VotesContainerComponent(rs, as) {
        _classCallCheck(this, VotesContainerComponent);

        this.rs = rs;
        this.as = as;
        this.upvoteList = [];
        this.downvoteList = [];
        this.upvoteBlocked = false;
        this.downvoteBlocked = false;
        this.loggedUser = '';
      }

      _createClass(VotesContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderUpvotes();
          this.renderDownvotes();
        }
      }, {
        key: "renderUpvotes",
        value: function renderUpvotes() {
          var _this25 = this;

          this.rs.getUpvotes(this.id).subscribe(function (e) {
            _this25.upvoteList = e.map(function (item) {
              return item.payload.doc.data();
            });

            _this25.as.afAuth.user.subscribe(function (user) {
              _this25.loggedUser = user === null || user === void 0 ? void 0 : user.email;

              _this25.controlButton(_this25.loggedUser);
            });
          });
        }
      }, {
        key: "renderDownvotes",
        value: function renderDownvotes() {
          var _this26 = this;

          this.rs.getDownvotes(this.id).subscribe(function (e) {
            _this26.downvoteList = e.map(function (item) {
              return item.payload.doc.data();
            });

            _this26.as.afAuth.user.subscribe(function (user) {
              _this26.loggedUser = user === null || user === void 0 ? void 0 : user.email;

              _this26.controlButton(_this26.loggedUser);
            });
          });
        }
      }, {
        key: "upvoteBtn",
        value: function upvoteBtn() {
          var _this27 = this;

          this.as.getUsername().subscribe(function (e) {
            _this27.rs.upvoteReview(_this27.id, 1, e.email);

            _this27.renderUpvotes();

            _this27.controlButton(_this27.loggedUser);
          });
        }
      }, {
        key: "downvoteBtn",
        value: function downvoteBtn() {
          var _this28 = this;

          this.as.getUsername().subscribe(function (e) {
            _this28.rs.upvoteReview(_this28.id, -1, e.email);

            _this28.renderDownvotes();

            _this28.controlButton(_this28.loggedUser);
          });
        }
      }, {
        key: "controlButton",
        value: function controlButton(mail) {
          var _this29 = this;

          this.upvoteList.forEach(function (item) {
            if (item.username === mail) {
              _this29.upvoteBlocked = true;
              _this29.downvoteBlocked = true;
            }
          });
          this.downvoteList.forEach(function (item) {
            if (item.username === mail) {
              _this29.upvoteBlocked = true;
              _this29.downvoteBlocked = true;
            }
          });
        }
      }]);

      return VotesContainerComponent;
    }();

    VotesContainerComponent.ɵfac = function VotesContainerComponent_Factory(t) {
      return new (t || VotesContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    VotesContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VotesContainerComponent,
      selectors: [["app-votes-container"]],
      inputs: {
        id: "id",
        username: "username"
      },
      decls: 4,
      vars: 3,
      consts: [["type", "button", 1, "btn", "fa", "fa-arrow-up", 3, "disabled", "click"], [1, "d-block", "text-white", "text-center", "mb-0"], ["type", "button", 1, "btn", "fa", "fa-arrow-down", 3, "disabled", "click"]],
      template: function VotesContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotesContainerComponent_Template_button_click_0_listener() {
            return ctx.upvoteBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VotesContainerComponent_Template_button_click_3_listener() {
            return ctx.downvoteBtn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.upvoteBlocked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.upvoteList.length - ctx.downvoteList.length, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.downvoteBlocked);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy92b3Rlcy1jb250YWluZXIvdm90ZXMtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VotesContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-votes-container',
          templateUrl: './votes-container.component.html',
          styleUrls: ['./votes-container.component.scss']
        }]
      }], function () {
        return [{
          type: _shared_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"]
        }, {
          type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        username: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/company/company-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/company/company-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CompanyRoutingModule */

  /***/
  function srcAppModulesCompanyCompanyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function () {
      return CompanyRoutingModule;
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


    var src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/pages/companies/companies.component */
    "./src/app/components/pages/companies/companies.component.ts");
    /* harmony import */


    var src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/pages/companies/company-full-page/company-full-page.component */
    "./src/app/components/pages/companies/company-full-page/company-full-page.component.ts");

    var routes = [{
      path: 'companies',
      data: {
        animationState: 'Companies'
      },
      children: [{
        path: '',
        component: src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_2__["CompaniesComponent"]
      }, {
        path: ':id',
        component: src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_3__["CompanyFullPageComponent"]
      }]
    }];

    var CompanyRoutingModule = function CompanyRoutingModule() {
      _classCallCheck(this, CompanyRoutingModule);
    };

    CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompanyRoutingModule
    });
    CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompanyRoutingModule_Factory(t) {
        return new (t || CompanyRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'top'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'top'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/company/company.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/company/company.module.ts ***!
    \***************************************************/

  /*! exports provided: CompanyModule */

  /***/
  function srcAppModulesCompanyCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyModule", function () {
      return CompanyModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/pages/companies/company-full-page/company-full-page.component */
    "./src/app/components/pages/companies/company-full-page/company-full-page.component.ts");
    /* harmony import */


    var src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/pages/companies/companies.component */
    "./src/app/components/pages/companies/companies.component.ts");
    /* harmony import */


    var _company_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./company-routing.module */
    "./src/app/modules/company/company-routing.module.ts");
    /* harmony import */


    var src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/component-list-item/component-list-item.component */
    "./src/app/shared/component-list-item/component-list-item.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");

    var CompanyModule = function CompanyModule() {
      _classCallCheck(this, CompanyModule);
    };

    CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CompanyModule
    });
    CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CompanyModule_Factory(t) {
        return new (t || CompanyModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]], _company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, {
        declarations: [src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_2__["CompanyFullPageComponent"], src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"], src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ComponentListItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
        exports: [_company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_2__["CompanyFullPageComponent"], src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"], src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ComponentListItemComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_2__["CompanyFullPageComponent"], src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"], src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ComponentListItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          exports: [_company_routing_module__WEBPACK_IMPORTED_MODULE_4__["CompanyRoutingModule"], src_app_components_pages_companies_company_full_page_company_full_page_component__WEBPACK_IMPORTED_MODULE_2__["CompanyFullPageComponent"], src_app_components_pages_companies_companies_component__WEBPACK_IMPORTED_MODULE_3__["CompaniesComponent"], src_app_shared_component_list_item_component_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ComponentListItemComponent"]]
        }]
      }], null, null);
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
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

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
      imports: [[_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]],
        exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]],
          exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__["MatSliderModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/review/review-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/review/review-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReviewRoutingModule */

  /***/
  function srcAppModulesReviewReviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewRoutingModule", function () {
      return ReviewRoutingModule;
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


    var src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/reviews/full-list/full-list.component */
    "./src/app/components/reviews/full-list/full-list.component.ts");
    /* harmony import */


    var src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/reviews/review-full/review-full.component */
    "./src/app/components/reviews/review-full/review-full.component.ts");

    var routes = [{
      path: 'reviews',
      children: [{
        path: '',
        component: src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_2__["FullListComponent"]
      }, {
        path: ':id',
        component: src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"]
      }]
    }];

    var ReviewRoutingModule = function ReviewRoutingModule() {
      _classCallCheck(this, ReviewRoutingModule);
    };

    ReviewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReviewRoutingModule
    });
    ReviewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReviewRoutingModule_Factory(t) {
        return new (t || ReviewRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'top'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReviewRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'top'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/review/review.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/review/review.module.ts ***!
    \*************************************************/

  /*! exports provided: ReviewModule */

  /***/
  function srcAppModulesReviewReviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReviewModule", function () {
      return ReviewModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/reviews/review-element/review-element.component */
    "./src/app/components/reviews/review-element/review-element.component.ts");
    /* harmony import */


    var src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/reviews/review-full/review-full.component */
    "./src/app/components/reviews/review-full/review-full.component.ts");
    /* harmony import */


    var src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/reviews/votes-container/votes-container.component */
    "./src/app/components/reviews/votes-container/votes-container.component.ts");
    /* harmony import */


    var src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/reviews/full-list/full-list.component */
    "./src/app/components/reviews/full-list/full-list.component.ts");
    /* harmony import */


    var _review_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./review-routing.module */
    "./src/app/modules/review/review-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");

    var ReviewModule = function ReviewModule() {
      _classCallCheck(this, ReviewModule);
    };

    ReviewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReviewModule
    });
    ReviewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReviewModule_Factory(t) {
        return new (t || ReviewModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _review_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReviewModule, {
        declarations: [src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_2__["ReviewElementComponent"], src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"], src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_4__["VotesContainerComponent"], src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_5__["FullListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _review_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        exports: [src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_2__["ReviewElementComponent"], src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"], src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_4__["VotesContainerComponent"], src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_5__["FullListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_2__["ReviewElementComponent"], src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"], src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_4__["VotesContainerComponent"], src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_5__["FullListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _review_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReviewRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
          exports: [src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_2__["ReviewElementComponent"], src_app_components_reviews_review_full_review_full_component__WEBPACK_IMPORTED_MODULE_3__["ReviewFullComponent"], src_app_components_reviews_votes_container_votes_container_component__WEBPACK_IMPORTED_MODULE_4__["VotesContainerComponent"], src_app_components_reviews_full_list_full_list_component__WEBPACK_IMPORTED_MODULE_5__["FullListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/shared/shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/shared/shared.module.ts ***!
    \*************************************************/

  /*! exports provided: HttpLoaderFactory, SharedModule */

  /***/
  function srcAppModulesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../material/material.module */
    "./src/app/modules/material/material.module.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_2__["TranslateHttpLoader"](http);
    }

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }
          })],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]]
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

    var routeTransitionAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [// Set a default  style for enter and leave
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'absolute',
      // left: 0,
      top: 0,
      width: '100%',
      opacity: 0.5 // transform: 'scale(0) translateY(100%)'

    })], {
      optional: true
    }), // Animate the new page in
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1 // transform: 'scale(1) translateY(0)'

    }))], {
      optional: true
    })])]);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/shared/auth.service.ts");

    var AuthGuardGuard = /*#__PURE__*/function () {
      function AuthGuardGuard(af, router, toastrService, translateService, authService) {
        _classCallCheck(this, AuthGuardGuard);

        this.af = af;
        this.router = router;
        this.toastrService = toastrService;
        this.translateService = translateService;
        this.authService = authService;
      }

      _createClass(AuthGuardGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this30 = this;

          return new Promise(function (resolve, reject) {
            _this30.af.onAuthStateChanged(function (user) {
              if (user) {
                resolve(true);
              } else {
                _this30.router.navigate(['/']);

                resolve(false);
              }
            });
          });
        }
      }]);

      return AuthGuardGuard;
    }();

    AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) {
      return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuardGuard,
      factory: AuthGuardGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, router, toastr, translateService, firestore) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
        this.toastr = toastr;
        this.translateService = translateService;
        this.firestore = firestore;
        this.publishEmail = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.triggerLoadingScreen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.publishAuthState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.afAuth.signInWithEmailAndPassword(email, password);

                  case 2:
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
            var _this31 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    this.router.navigate(['/']);
                    this.translateService.get('TOASTR').subscribe(function (response) {
                      _this31.toastr.success(response.SIGNED_OUT, response.SUCCESS_TITLE);
                    });

                  case 4:
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
            var _this32 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    this.sendConfirmationEmail();
                    this.translateService.get('TOASTR').subscribe(function (response) {
                      _this32.toastr.success(response.USER_CREATED, response.SUCCESS_TITLE);
                    });

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "sendConfirmationEmail",
        value: function sendConfirmationEmail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.afAuth.currentUser;

                  case 2:
                    _context4.sent.sendEmailVerification();

                    this.router.navigate(['/']);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(email) {
          var _this33 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.sendPasswordResetEmail(email).then(function () {
            _this33.showHTTPLoader(false);

            _this33.translateService.get('TOASTR').subscribe(function (response) {
              _this33.toastr.success(response.PASS_RESET, response.SUCCESS_TITLE);
            });
          })["catch"](function (err) {
            _this33.showHTTPLoader(false);

            _this33.translateService.get('TOASTR').subscribe(function (response) {
              _this33.toastr.success(err.message, response.ERROR_TITLE);
            });
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
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]));
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
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
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
      }, {
        key: "getCompanyByName",
        value: function getCompanyByName(name) {
          return this.firestore.collection('companies', function (ref) {
            return ref.where('name', '==', name);
          }).snapshotChanges();
        }
      }, {
        key: "getTopThreeCompanies",
        value: function getTopThreeCompanies() {
          return this.firestore.collection('companies', function (ref) {
            return ref.orderBy('averageReview', 'desc').limit(3);
          }).snapshotChanges();
        }
      }, {
        key: "getFeaturedCompany",
        value: function getFeaturedCompany() {
          return this.firestore.collection('companies', function (ref) {
            return ref.where('name', '==', 'Charmin');
          }).snapshotChanges();
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
  "./src/app/shared/component-list-item/component-list-item.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/component-list-item/component-list-item.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ComponentListItemComponent */

  /***/
  function srcAppSharedComponentListItemComponentListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentListItemComponent", function () {
      return ComponentListItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../review.service */
    "./src/app/shared/review.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0(a1) {
      return ["/companies/", a1];
    };

    var _c1 = function _c1(a0) {
      return [a0];
    };

    var ComponentListItemComponent = /*#__PURE__*/function () {
      function ComponentListItemComponent(translateService, reviewService) {
        _classCallCheck(this, ComponentListItemComponent);

        this.translateService = translateService;
        this.reviewService = reviewService;
        this.reviews = [];
      }

      _createClass(ComponentListItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getNumberOfReviews();
        }
      }, {
        key: "getNumberOfReviews",
        value: function getNumberOfReviews() {
          var _this34 = this;

          this.reviewService.getReviewsForCompany(this.ComponentListItem.name).subscribe(function (item) {
            item.map(function (rev) {
              _this34.reviews.push(rev.payload.doc.data());
            });
            _this34.numberOfReviews = _this34.reviews.length;
          });
        }
      }]);

      return ComponentListItemComponent;
    }();

    ComponentListItemComponent.ɵfac = function ComponentListItemComponent_Factory(t) {
      return new (t || ComponentListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]));
    };

    ComponentListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentListItemComponent,
      selectors: [["app-component-list-item"]],
      inputs: {
        ComponentListItem: "ComponentListItem"
      },
      decls: 26,
      vars: 18,
      consts: [[1, "card", "dark-bg"], [1, "card-header"], [3, "routerLink"], [1, "card-body"], [1, "card-aside"], [1, "img-wrapper"], ["alt", "BestReviewedCompany", 1, "img-fluid", 3, "src"], [1, "reviewed-body"], [1, "icon-bundle"], [1, "fa", "fa-map-marker", "mr-2"], [1, "ml-2"], [1, "fa", "fa-star", "mr-2"], [1, "fa", "fa-industry", "ml-2"], [1, "fa", "fa-pencil", "ml-2"], ["mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "td-none", 3, "routerLink"]],
      template: function ComponentListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.ComponentListItem.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ComponentListItem.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ComponentListItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ComponentListItem.location, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "HOMEPAGE.AVERAGE"), " : ", ctx.ComponentListItem.averageReview, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ComponentListItem.technology, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.numberOfReviews, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx.ComponentListItem.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 12, "HOMEPAGE.SEE_MORE_BTN"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 var(--shadows);\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto 0 1rem;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: var(--font-color);\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n  margin: auto;\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: var(--font-color);\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC1saXN0LWl0ZW0vRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50LWxpc3QtaXRlbS9jb21wb25lbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50LWxpc3QtaXRlbS9EOlxcV29ya1NwYWNlXFxTZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnQtbGlzdC1pdGVtXFxjb21wb25lbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxRUFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaElBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFJQSx3Q0FBQTtBRG9FRjtBRG1CRTtFRTlGRjtJQUtJLFVBQUE7RUQwRUY7QUFDRjtBRGNFO0VFOUZGO0lBU0ksd0JBQUE7RUQyRUY7QUFDRjtBRG1CRTtFRXhHRjtJQVlJLGlCQUFBO0VENkVGO0FBQ0Y7QURtQkU7RUU3R0Y7SUFlSSxpQkFBQTtFRCtFRjtBQUNGO0FEbUJFO0VFbEhGO0lBa0JJLGlCQUFBO0VEaUZGO0FBQ0Y7QUNoRkU7RUFDRSxnQ0FBQTtBRGtGSjtBQ2pGSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBRG1GTjtBRGZFO0VFeEVFO0lBTUksZUFBQTtFRHFGTjtBQUNGO0FES0U7RUVqR0U7SUFTSSxlQUFBO0VEdUZOO0FBQ0Y7QUNuRkU7RUFDRSxhQUFBO0FEcUZKO0FEdkJFO0VFL0RBO0lBR0ksY0FBQTtFRHVGSjtBQUNGO0FEUkU7RUVuRkE7SUFNSSxjQUFBO0VEeUZKO0FBQ0Y7QUN0RlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEd0ZWO0FEN0JFO0VFL0RNO0lBTUksWUFBQTtFRDBGVjtBQUNGO0FDckZFO0VBQ0UsT0FBQTtBRHVGSjtBRDNCRTtFRTdEQTtJQUdJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUR5Rko7QUFDRjtBRDVERTtFRTVCRTtJQUVJLGNBQUE7RUQwRk47QUFDRjtBRHZERTtFRXRDRTtJQUtJLGFBQUE7SUFDQSx1QkFBQTtFRDRGTjtBQUNGO0FEbkRFO0VFaERFO0lBU0ksYUFBQTtJQUNBLHVCQUFBO0VEOEZOO0FBQ0Y7QUQ5REU7RUUzQ0U7SUFhSSxhQUFBO0lBQ0EsdUJBQUE7RURnR047QUFDRjtBQy9GTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBRGlHUjtBRDlFRTtFRXRCSTtJQUtJLGtCQUFBO0VEbUdSO0FBQ0Y7QUQ5RUU7RUUzQkk7SUFRSSxrQkFBQTtFRHFHUjtBQUNGO0FEOUVFO0VFaENJO0lBV0ksa0JBQUE7RUR1R1I7QUFDRjtBRDlFRTtFRXJDSTtJQWNJLGVBQUE7RUR5R1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQtbGlzdC1pdGVtL2NvbXBvbmVudC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgJ2JveC1zaGFkb3ctY29sb3InOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgJ3BlYWNoQ29sb3InOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gICdncmV5RGFyayc6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICAnYmx1ZUhlYWRlcic6ICMyYzNlNTAsXHJcbiAgJ3doaXRlR3JleSc6IHdoaXRlc21va2VcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICAnaDEnOiA3MnB4LFxyXG4gICdoMic6IDM2cHgsXHJcbiAgJ2gzJzogMjRweFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSwgLmNhcmQgLmNhcmQtaGVhZGVyIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSwgLmNhcmQgLmNhcmQtaGVhZGVyIGE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSwgLmNhcmQgLmNhcmQtaGVhZGVyIGE6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kLCAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXNlY29uZGFyeSksIHZhcigtLXByaW1hcnkpKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggM3B4IDAgdmFyKC0tc2hhZG93cyk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwIDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xuICB9XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctd3JhcHBlciBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuLmNhcmQgLnJldmlld2VkLWJvZHkge1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5jYXJkIHtcclxuICBAZXh0ZW5kIC5ncmFkaWVudC1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMCB2YXIoLS1zaGFkb3dzKTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG8gMCAxcmVtO1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIH1cclxuICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICB9XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgYSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgfVxyXG4gICAgICBAZXh0ZW5kIC5hbmltYXRlZEJlZm9yZTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5jYXJkLWFzaWRlIHtcclxuICAgICAgLmltZy13cmFwcGVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yZXZpZXdlZC1ib2R5IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmljb24tYnVuZGxlIHtcclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgaDYge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-component-list-item',
          templateUrl: './component-list-item.component.html',
          styleUrls: ['./component-list-item.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }, {
          type: _review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"]
        }];
      }, {
        ComponentListItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .loader-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--font-color);\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: var(--font-color);\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: var(--font-color);\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--secondary), var(--primary));\n}\n\n\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--shadowsOpacified);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1001;\n}\n.lds-dual-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n}\n.lds-dual-ring[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: 150px;\n  height: 150px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid var(--font-color);\n  border-color: var(--font-color) transparent var(--font-color) transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL0Q6XFxXb3JrU3BhY2VcXFNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL2h0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaHR0cC1sb2FkZXIvRDpcXFdvcmtTcGFjZVxcU2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXHNoYXJlZFxcaHR0cC1sb2FkZXJcXGh0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxRUFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaklBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUR5RUY7QUNyRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEd0VGO0FDdEVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUVBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FEeUVGO0FDdkVBO0VBQ0U7SUFDRSx1QkFBQTtFRDBFRjtFQ3hFQTtJQUNFLHlCQUFBO0VEMEVGO0FBQ0Y7QUNoRkE7RUFDRTtJQUNFLHVCQUFBO0VEMEVGO0VDeEVBO0lBQ0UseUJBQUE7RUQwRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9odHRwLWxvYWRlci9odHRwLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICAnYm94LXNoYWRvdy1jb2xvcic6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICAncGVhY2hDb2xvcic6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgJ2dyZXlEYXJrJzogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gICdibHVlSGVhZGVyJzogIzJjM2U1MCxcclxuICAnd2hpdGVHcmV5Jzogd2hpdGVzbW9rZVxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gICdoMSc6IDcycHgsXHJcbiAgJ2gyJzogMzZweCxcclxuICAnaDMnOiAyNHB4XHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5sb2FkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tc2Vjb25kYXJ5KSwgdmFyKC0tcHJpbWFyeSkpO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5sb2FkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRvd3NPcGFjaWZpZWQpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmxkcy1kdWFsLXJpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmxkcy1kdWFsLXJpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA2cHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZm9udC1jb2xvcikgdHJhbnNwYXJlbnQgdmFyKC0tZm9udC1jb2xvcikgdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcbi5sb2FkZXItd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZG93c09wYWNpZmllZCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxufVxyXG5cclxuLmxkcy1kdWFsLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4ubGRzLWR1YWwtcmluZzphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDZweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWZvbnQtY29sb3IpIHRyYW5zcGFyZW50IHZhcigtLWZvbnQtY29sb3IpIHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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


    var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ReviewService = /*#__PURE__*/function () {
      function ReviewService(firestore, ts) {
        _classCallCheck(this, ReviewService);

        this.firestore = firestore;
        this.ts = ts;
      }

      _createClass(ReviewService, [{
        key: "getReviews",
        value: function getReviews() {
          return this.firestore.collection('reviews', function (revs) {
            return revs.orderBy('timeStamp', 'desc');
          }).snapshotChanges();
        }
      }, {
        key: "getReviewById",
        value: function getReviewById(id) {
          return this.firestore.collection('reviews').doc(id).snapshotChanges();
        }
      }, {
        key: "getReviewsForCompany",
        value: function getReviewsForCompany(companyName) {
          return this.firestore.collection('reviews', function (ref) {
            return ref.where('companyName', '==', companyName);
          }).snapshotChanges();
        }
      }, {
        key: "postReview",
        value: function postReview(review) {
          return this.firestore.collection('reviews').add(review);
        }
      }, {
        key: "updateReview",
        value: function updateReview(review) {}
      }, {
        key: "upvoteReview",
        value: function upvoteReview(reviewId, value, user) {
          var _this35 = this;

          this.firestore.collection("reviews/".concat(reviewId, "/upvotes")).add({
            username: user,
            upvote: value
          })["catch"](function (error) {
            _this35.ts.error(error.message, 'Error:');
          });
        }
      }, {
        key: "getUpvotes",
        value: function getUpvotes(reviewId) {
          return this.firestore.collection("reviews/".concat(reviewId, "/upvotes"), function (ref) {
            return ref.where('upvote', '==', 1);
          }).snapshotChanges();
        }
      }, {
        key: "getDownvotes",
        value: function getDownvotes(reviewId) {
          return this.firestore.collection("reviews/".concat(reviewId, "/upvotes"), function (ref) {
            return ref.where('upvote', '==', -1);
          }).snapshotChanges();
        }
      }, {
        key: "deleteReview",
        value: function deleteReview(reviewId) {
          this.firestore.doc('reviews/' + reviewId)["delete"]();
        }
      }, {
        key: "resolvePayload",
        value: function resolvePayload(e) {
          return e[0].payload.doc.data();
        }
      }, {
        key: "formatDate",
        value: function formatDate(element) {
          if (element.data) {
            element = element.data.timeStamp.toDate();
            return moment__WEBPACK_IMPORTED_MODULE_1__(element).format('DD. MM. YYYY');
          } else {
            element = element.toDate();
            return moment__WEBPACK_IMPORTED_MODULE_1__(element).format('DD. MM. YYYY');
          }
        }
      }, {
        key: "reportReview",
        value: function reportReview(id) {
          return this.firestore.collection('reviews').doc('reviews').update({
            'reviews.reportCounter': id
          });
        }
      }]);

      return ReviewService;
    }();

    ReviewService.ɵfac = function ReviewService_Factory(t) {
      return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
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
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/shared.service.ts ***!
    \******************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppSharedSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.publishLoginModalState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(SharedService, [{
        key: "emitLoginModalState",
        value: function emitLoginModalState(value) {
          this.publishLoginModalState.next(value);
        }
      }]);

      return SharedService;
    }();

    SharedService.ɵfac = function SharedService_Factory(t) {
      return new (t || SharedService)();
    };

    SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SharedService,
      factory: SharedService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/theme.service.ts":
  /*!****************************************!*\
    !*** ./src/app/theme/theme.service.ts ***!
    \****************************************/

  /*! exports provided: ThemeService */

  /***/
  function srcAppThemeThemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
      return ThemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme */
    "./src/app/theme/theme.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ThemeService = /*#__PURE__*/function () {
      function ThemeService() {
        _classCallCheck(this, ThemeService);

        this.emitCurrentActiveTheme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.getLocalStorageTheme().name);
        this.active = this.getLocalStorageTheme() ? this.getLocalStorageTheme() : _theme__WEBPACK_IMPORTED_MODULE_1__["light"];
        this.themes = [_theme__WEBPACK_IMPORTED_MODULE_1__["light"], _theme__WEBPACK_IMPORTED_MODULE_1__["dark"]];
      }

      _createClass(ThemeService, [{
        key: "getThemes",
        value: function getThemes() {
          return this.themes;
        }
      }, {
        key: "getActiveTheme",
        value: function getActiveTheme() {
          return this.active;
        }
      }, {
        key: "getLocalStorageTheme",
        value: function getLocalStorageTheme() {
          if (!localStorage.getItem('activeTheme')) {
            return _theme__WEBPACK_IMPORTED_MODULE_1__["light"];
          }

          if (localStorage.getItem('activeTheme') === 'dark') {
            return _theme__WEBPACK_IMPORTED_MODULE_1__["dark"];
          } else if (localStorage.getItem('activeTheme') === 'light') {
            return _theme__WEBPACK_IMPORTED_MODULE_1__["light"];
          }
        }
      }, {
        key: "isDarkTheme",
        value: function isDarkTheme() {
          return this.active.name === _theme__WEBPACK_IMPORTED_MODULE_1__["dark"].name;
        }
      }, {
        key: "setDarkTheme",
        value: function setDarkTheme() {
          localStorage.setItem('activeTheme', 'dark');
          this.checkCurrentActiveTheme('dark');
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_1__["dark"]);
        }
      }, {
        key: "setLightTheme",
        value: function setLightTheme() {
          localStorage.setItem('activeTheme', 'light');
          this.checkCurrentActiveTheme('light');
          this.setActiveTheme(_theme__WEBPACK_IMPORTED_MODULE_1__["light"]);
        }
      }, {
        key: "setActiveTheme",
        value: function setActiveTheme(theme) {
          var _this36 = this;

          this.active = theme;
          Object.keys(this.active.properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this36.active.properties[property]);
          });
        }
      }, {
        key: "checkCurrentActiveTheme",
        value: function checkCurrentActiveTheme(name) {
          this.emitCurrentActiveTheme.next(name);
        }
      }]);

      return ThemeService;
    }();

    ThemeService.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };

    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/theme/theme.ts":
  /*!********************************!*\
    !*** ./src/app/theme/theme.ts ***!
    \********************************/

  /*! exports provided: light, dark */

  /***/
  function srcAppThemeThemeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "light", function () {
      return light;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dark", function () {
      return dark;
    });

    var light = {
      name: 'light',
      properties: {
        '--primary': '#2c3e50',
        '--secondary': '#2d3436',
        '--tertiary': '#a489785e',
        '--accent': '#212121',
        '--warn': '#dc3545',
        '--shadows': 'rgba(0, 0, 0, 0.4)',
        '--shadowsOpacified': 'rgba(0, 0, 0, 0.8)',
        '--outlines': '#ddddddd2',
        '--font-color': 'whitesmoke',
        '--reverse-font-color': 'black',
        '--gradient-one': 'rgba(52, 88, 128, 1)',
        '--gradient-one-faded': '#516488',
        '--gradient-two': 'rgba(48, 51, 65, 1)',
        '--opacity1': 'none',
        '--opacity2': '0.4'
      }
    };
    var dark = {
      name: 'dark',
      properties: {
        '--primary': '#2c3e50',
        '--secondary': '#2d3436',
        '--tertiary': '#a489785e',
        '--accent': '#212121',
        '--warn': '#dc3545',
        '--shadows': 'rgba(0, 0, 0, 0.4)',
        '--shadowsOpacified': 'rgba(0, 0, 0, 0.8)',
        '--outlines': '#ddddddd2',
        '--font-color': 'whitesmoke',
        '--reverse-font-color': 'black',
        '--gradient-one': 'rgba(52, 88, 128, 1)',
        '--gradient-one-faded': '#516488',
        '--gradient-two': 'rgba(48, 51, 65, 1)',
        '--opacity1': '0.4',
        '--opacity2': 'none'
      }
    };
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
    /*! D:\WorkSpace\Seavus\submarine-team.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map