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
        scrollPositionRestoration: 'disabled'
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
            scrollPositionRestoration: 'disabled'
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


    var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/layout/footer/footer.component */
    "./src/app/components/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pages/login/login.component */
    "./src/app/components/pages/login/login.component.ts");
    /* harmony import */


    var _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/http-loader/http-loader.component */
    "./src/app/shared/http-loader/http-loader.component.ts");

    function AppComponent_app_login_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login", 4);
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined)("isLoggedIn", ctx_r16.passLoggedStateInfo);
      }
    }

    function AppComponent_app_http_loader_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-http-loader");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth, translateService, sharedService, themeService) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.translateService = translateService;
        this.sharedService = sharedService;
        this.themeService = themeService;
        this.title = 'TSP';
        this.pendingHttpRequest = false;
        this.shouldModalOpen = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.themeService.setActiveTheme(this.themeService.getLocalStorageTheme());
          this.subscription = this.sharedService.publishLoginModalState.subscribe(function (response) {
            _this.shouldModalOpen = response;
          });
          this.auth.afAuth.user.subscribe(function (res) {
            if (res) {
              _this.passLoggedStateInfo = true;
            } else {
              _this.passLoggedStateInfo = false;
            }
          });
          this.auth.triggerLoadingScreen.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)).subscribe(function (response) {
            _this.pendingHttpRequest = response;
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
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
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
      decls: 10,
      vars: 3,
      consts: [["main", ""], ["outlet", "outlet"], [3, "isLoggedIn", 4, "ngIf"], [4, "ngIf"], [3, "isLoggedIn"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", null, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_login_8_Template, 1, 2, "app-login", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_http_loader_9_Template, 1, 0, "app-http-loader", 3);
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldModalOpen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pendingHttpRequest);
        }
      },
      directives: [_components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterOutlet"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_13__["HttpLoaderComponent"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%], app-login[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\nfooter[_ngcontent-%COMP%] {\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);\n  position: relative;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: #f0f2f5;\n  position: relative;\n  z-index: 0;\n}\nheader[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\napp-login[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0FEd0VGO0FDckVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRHdFRjtBQ3JFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUR3RUY7QUN0RUE7RUFDRSxvQ0FBQTtFQUVBLFdBQUE7QUR3RUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIGFwcC1sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0LCBhcHAtbG9naW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG5mb290ZXIge1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMmY1O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG59XG5cbmhlYWRlciB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmFwcC1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgei1pbmRleDogMjA7XG59IiwiQGltcG9ydCAnLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuZm9vdGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgZ2V0Q29sb3IoYm94LXNoYWRvdy1jb2xvcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYyZjU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5hcHAtbG9naW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICBAZXh0ZW5kIC5maXhlZC1mdWxsLWhlaWdodDtcclxuICB6LWluZGV4OiAyMDtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuIl19 */"],
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
    "./src/app/modules/shared/shared.module.ts"); // <Firebase Imports>
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
      imports: [[_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__["MyAccountComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_20__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_21__["HttpLoaderComponent"], _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_22__["TermsOfServiceComponent"], _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_23__["FourOhFourComponent"]],
        imports: [_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _components_pages_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_18__["MyAccountComponent"], _components_pages_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_20__["AdminPanelComponent"], _shared_http_loader_http_loader_component__WEBPACK_IMPORTED_MODULE_21__["HttpLoaderComponent"], _components_pages_terms_of_service_terms_of_service_component__WEBPACK_IMPORTED_MODULE_22__["TermsOfServiceComponent"], _components_pages_four_oh_four_four_oh_four_component__WEBPACK_IMPORTED_MODULE_23__["FourOhFourComponent"]],
          imports: [_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"], _modules_company_company_module__WEBPACK_IMPORTED_MODULE_25__["CompanyModule"], _modules_review_review_module__WEBPACK_IMPORTED_MODULE_26__["ReviewModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__["AngularFireAuthModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_19__["LayoutModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_24__["ClickOutsideModule"]],
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.footer-elements[_ngcontent-%COMP%] {\n  background-color: #2d3436;\n}\n.footer-elements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1rem;\n  padding-bottom: 10px;\n  margin-bottom: 0;\n  color: whitesmoke;\n}\n.footer-elements[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: auto;\n  height: 0.5px;\n  background-color: whitesmoke;\n}\n.footer-elements[_ngcontent-%COMP%]   span.text-white[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 10px;\n}\n.footer-elements[_ngcontent-%COMP%]   span.text-white[_ngcontent-%COMP%]::before {\n  content: \"\";\n  bottom: 10%;\n  position: absolute;\n  height: 25px;\n  width: 1px;\n  background-color: whitesmoke;\n}\n.footer-elements[_ngcontent-%COMP%]   .quick-links[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  display: flex;\n  justify-content: center;\n}\n.footer-elements[_ngcontent-%COMP%]   .quick-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxREFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaElBO0VBQ0UseUJBQUE7QUR3RUY7QUN2RUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUR5RUo7QUN2RUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBRHlFSjtBQ3ZFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBRHlFSjtBQ3RFRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FEd0VKO0FDckVFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUR1RUo7QUN0RUk7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRHdFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5mb290ZXItZWxlbWVudHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xufVxuLmZvb3Rlci1lbGVtZW50cyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uZm9vdGVyLWVsZW1lbnRzIC5kaXZpZGVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmZvb3Rlci1lbGVtZW50cyBzcGFuLnRleHQtd2hpdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5mb290ZXItZWxlbWVudHMgc3Bhbi50ZXh0LXdoaXRlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4uZm9vdGVyLWVsZW1lbnRzIC5xdWljay1saW5rcyB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXItZWxlbWVudHMgLnF1aWNrLWxpbmtzIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4uZm9vdGVyLWVsZW1lbnRzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzNDM2O1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAuZGl2aWRlciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAwLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIHNwYW4udGV4dC13aGl0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuLnRleHQtd2hpdGU6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG5cclxuICAucXVpY2stbGlua3Mge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_27_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.checkMyAccount();
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
        this.loginForm = this.formBuilder.group({
          email: '',
          password: 'password'
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.themeService.emitCurrentActiveTheme.subscribe(function (res) {
            if (res === 'dark') {
              _this2.activeTheme = false;
            } else {
              _this2.activeTheme = true;
            }
          });
          this.afAuth.user.subscribe(function (res) {
            if (res) {
              _this2.activeUser = true;
            } else {
              _this2.activeUser = false;
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
      vars: 35,
      consts: [[1, "navbar", "d-flex"], [1, "navbar-brand", "mt-2", 3, "click"], ["navBrand", ""], [1, "hamburger-line", "top"], ["hamTop", ""], [1, "hamburger-line", "bottom"], ["hamBot", ""], [1, "img-logo"], ["routerLinkActive", "active", "id", "img-logo-container", 3, "routerLink"], ["subLogo", ""], ["src", "/assets/submarine.png", "alt", "submarine-logo", "id", "sub-to-home", 1, "img-fluid"], [1, "d-flex"], [1, "mr-4"], ["name", "languages", "id", "langSelect", 1, "custom-select", 2, "cursor", "pointer", 3, "value", "change"], ["langSelectEl", ""], ["value", "English", 2, "cursor", "pointer"], ["value", "Macedonian", 2, "cursor", "pointer"], ["id", "fa-fa-user", 1, "fa", "fa-user", 3, "click"], [1, "overlay", 3, "exclude", "clickOutsideEvents", "clickOutside"], ["overlay", ""], [1, "overlay-content"], ["routerLinkActive", "active", 1, "overlay-link", 3, "routerLinkActiveOptions", "routerLink", "click"], [1, "fa", "fa-home", "mr-4"], ["routerLinkActive", "active", "class", "overlay-link", 3, "routerLink", "routerLinkActiveOptions", "click", 4, "ngIf"], [1, "fa", "fa-th-large", "mr-4"], [1, "fa", "fa-info-circle", "mr-4"], [1, "fa", "fa-envelope", "mr-4"], [3, "ngModel", "ngModelChange", "change"], ["routerLinkActive", "active", 1, "overlay-link", 3, "routerLink", "routerLinkActiveOptions", "click"], [1, "fa", "fa-user", "mr-4"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-slide-toggle", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_mat_slide_toggle_ngModelChange_40_listener($event) {
            return ctx.activeTheme = $event;
          })("change", function NavbarComponent_Template_mat_slide_toggle_change_40_listener() {
            return ctx.toggleTheme();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.val);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", ".navbar-brand")("clickOutsideEvents", "click, touchstart, scroll");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "HEADER.HOME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 20, "HEADER.COMPANIES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 22, "HEADER.ABOUT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c5))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 24, "HEADER.CONTACT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.activeTheme);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ng_click_outside__WEBPACK_IMPORTED_MODULE_10__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.img-logo[_ngcontent-%COMP%] {\n  width: 75px;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.75);\n  background-color: var(--navColor);\n}\n.navbar-brand[_ngcontent-%COMP%] {\n  position: relative;\n  height: 50px;\n  z-index: 10;\n  width: 75px;\n  cursor: pointer;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 2px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  display: block;\n  transition: all ease 0.4s;\n  position: absolute;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top[_ngcontent-%COMP%] {\n  top: 18%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom[_ngcontent-%COMP%] {\n  width: 40px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.top.open[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transition: all ease 0.4s;\n  transform: rotate(45deg);\n  width: 50px;\n  top: 48%;\n}\n.navbar-brand[_ngcontent-%COMP%]   .hamburger-line.bottom.open[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n#selectLang[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.navbar-nav[_ngcontent-%COMP%] {\n  max-width: 50%;\n}\n#sub-to-home[_ngcontent-%COMP%] {\n  transform: scale(1);\n  transition: 0.4s;\n}\n#sub-to-home[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.4s;\n}\n.overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  background: linear-gradient(180deg, #345880 0%, #303341 100%);\n  overflow: hidden;\n  transition: 0.4s;\n  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.75);\n}\n.overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10%;\n  width: 300px;\n  margin: 30px auto 0 auto;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  width: 100%;\n  padding: 10px;\n  position: relative;\n  text-decoration: none;\n  font-size: 26px;\n  color: whitesmoke;\n  display: block;\n  transition: 0.45s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::before {\n  transition: 0.5s;\n  content: \"\";\n  width: 0;\n  height: 100%;\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  bottom: 0;\n  border-radius: 7px;\n  background-color: rgba(84, 102, 138, 0.9);\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 90%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 5px;\n  height: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: whitesmoke;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  height: 100%;\n  transition: ease 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:hover, .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%]:focus {\n  color: #f1f1f1;\n  transition: 0.5s;\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #f5f5f5 !important;\n  position: relative !important;\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 90%;\n  height: 100%;\n  background-color: rgba(84, 102, 138, 0.9);\n}\n.overlay[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 5px;\n  height: 100%;\n  background-color: whitesmoke;\n}\n@media screen and (max-height: 450px) {\n  .overlay[_ngcontent-%COMP%]   .overlay-link[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n#fa-fa-user[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: white;\n  cursor: pointer;\n}\n#email-login-input[_ngcontent-%COMP%], #email-login-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.sidebar-width[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  width: 90%;\n}\n@media only screen and (max-width: 600px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 50%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 35%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    width: 30%;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .sidebar-width[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n#langSelect[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: whitesmoke;\n  border: none;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxREFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaElBO0VBQ0UsV0FBQTtBRHdFRjtBQ3RFQTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsaUNBQUE7QUR5RUY7QUN2RUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQwRUY7QUN6RUU7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRDJFSjtBQ3pFRTtFQUNFLFFBQUE7QUQyRUo7QUN6RUU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtBRDJFSjtBQ3hFRTs7RUFFRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUQwRUo7QUN4RUU7RUFDRSx5QkFBQTtBRDBFSjtBQ3RFQTtFQUNFLDZCQUFBO0FEeUVGO0FDdEVBO0VBQ0UsY0FBQTtBRHlFRjtBQ3ZFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUQwRUY7QUN4RUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FEMkVGO0FDeEVBO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsNkRBQUE7RUFLQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUR1RUY7QUNyRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUR1RUo7QUNuRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRHFFSjtBQ25FRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FEcUVKO0FDbkVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBRHFFSjtBQ2xFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSw0QkFBQTtBRG9FSjtBQ2xFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QURvRUo7QUNsRUU7O0VBRUUsY0FBQTtFQUNBLGdCQUFBO0FEb0VKO0FDbEVFO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtBRG9FSjtBQ2pFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBRG1FSjtBQ2pFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBRG1FSjtBQ2hFRTtFQUNFO0lBQ0UsZUFBQTtFRGtFSjtBQUNGO0FDOURBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEaUVGO0FDOURBOztFQUVFLGlCQUFBO0FEaUVGO0FDOURBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0FEaUVGO0FEbEpFO0VFK0VGO0lBSUksa0JBQUE7SUFDQSxtQkFBQTtFRG1FRjtBQUNGO0FEOUlFO0VFcUVGO0lBUUksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RURxRUY7QUFDRjtBRGhKRTtFRWdFRjtJQWFJLFVBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEdUVGO0FBQ0Y7QURsSkU7RUUyREY7SUFrQkksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUR5RUY7QUFDRjtBRHBKRTtFRXNERjtJQXVCSSxVQUFBO0VEMkVGO0FBQ0Y7QURwSkU7RUVpREY7SUEwQkksVUFBQTtFRDZFRjtBQUNGO0FDMUVBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDZFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5vdmVybGF5IC5vdmVybGF5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2Q29sb3IpO1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogNzVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubmF2YmFyLWJyYW5kIC5oYW1idXJnZXItbGluZS50b3Age1xuICB0b3A6IDE4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbSB7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLnRvcC5vcGVuLFxuLm5hdmJhci1icmFuZCAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHdpZHRoOiA1MHB4O1xuICB0b3A6IDQ4JTtcbn1cbi5uYXZiYXItYnJhbmQgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn1cblxuI3NlbGVjdExhbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdmJhci1uYXYge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuI3N1Yi10by1ob21lIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuI3N1Yi10by1ob21lOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMzQ1ODgwIDAlLCAjMzAzMzQxIDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTAlO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbmsge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjQ1cztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6OmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxMDIsIDEzOCwgMC45KTtcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA5MCU7XG4gIHRyYW5zaXRpb246IGVhc2UgMC41cztcbn1cbi5vdmVybGF5IC5vdmVybGF5LWxpbms6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG4ub3ZlcmxheSAub3ZlcmxheS1saW5rOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xufVxuLm92ZXJsYXkgLm92ZXJsYXktbGluazpob3Zlcixcbi5vdmVybGF5IC5vdmVybGF5LWxpbms6Zm9jdXMge1xuICBjb2xvcjogI2YxZjFmMTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbi5vdmVybGF5IC5hY3RpdmUge1xuICBjb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbn1cbi5vdmVybGF5IC5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDEwMiwgMTM4LCAwLjkpO1xufVxuLm92ZXJsYXkgLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAub3ZlcmxheSAub3ZlcmxheS1saW5rIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuI2ZhLWZhLXVzZXIge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jZW1haWwtbG9naW4taW5wdXQsXG4jZW1haWwtbG9naW4taW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnNpZGViYXItd2lkdGgge1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB3aWR0aDogOTAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2lkZWJhci13aWR0aCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhci13aWR0aCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaWRlYmFyLXdpZHRoIHtcbiAgICB3aWR0aDogMzUlO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zaWRlYmFyLXdpZHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB3aWR0aDogMzAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuc2lkZWJhci13aWR0aCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLnNpZGViYXItd2lkdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbn1cblxuI2xhbmdTZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5pbWctbG9nbyB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdkNvbG9yKTtcclxufVxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAuaGFtYnVyZ2VyLWxpbmUge1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjRzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUudG9wIHtcclxuICAgIHRvcDogMTglO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdG9wOiA0OCU7XHJcbiAgfVxyXG5cclxuICAuaGFtYnVyZ2VyLWxpbmUudG9wLm9wZW4sXHJcbiAgLmhhbWJ1cmdlci1saW5lLmJvdHRvbS5vcGVuIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNHM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRvcDogNDglO1xyXG4gIH1cclxuICAuaGFtYnVyZ2VyLWxpbmUuYm90dG9tLm9wZW4ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiNzZWxlY3RMYW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIG1heC13aWR0aDogNTAlO1xyXG59XHJcbiNzdWItdG8taG9tZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcbiNzdWItdG8taG9tZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTgwZGVnLFxyXG4gICAgcmdiYSg1MiwgODgsIDEyOCwgMSkgMCUsXHJcbiAgICByZ2JhKDQ4LCA1MSwgNjUsIDEpIDEwMCVcclxuICApO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuXHJcbiAgLm92ZXJsYXktY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcclxuICAgIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxpbmsge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjQ1cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazo6YmVmb3JlIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNTQ2NjhhLCAwLjkpO1xyXG4gIH1cclxuICAub3ZlcmxheS1saW5rOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbGluazo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAub3ZlcmxheS1saW5rOmhvdmVyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGVhc2UgMC41cztcclxuICB9XHJcbiAgLm92ZXJsYXktbGluazpob3ZlcixcclxuICAub3ZlcmxheS1saW5rOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjZjFmMWYxO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzU0NjY4YSwgMC45KTtcclxuICB9XHJcbiAgLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAub3ZlcmxheS1saW5rIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2ZhLWZhLXVzZXIge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jZW1haWwtbG9naW4taW5wdXQsXHJcbiNlbWFpbC1sb2dpbi1pbnB1dCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXdpZHRoIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICB9XHJcbiAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICBAaW5jbHVkZSBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG59XHJcblxyXG4jbGFuZ1NlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG4iXX0= */"]
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.about-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #fafafa;\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  color: whitesmoke;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .about-page[_ngcontent-%COMP%] {\n    padding-top: 25px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 2rem;\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  position: relative;\n  padding: 1rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  .about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .title.page-title[_ngcontent-%COMP%] {\n    font-size: 72px;\n  }\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  height: 50vh;\n  border-radius: 25px;\n  background-image: url(\"https://images.unsplash.com/photo-1530053969600-caed2596d242?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80\");\n  background-position: top;\n  background-attachment: fixed;\n  background-blend-mode: saturation;\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);\n}\n.about-page[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWJvdXQvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFJQSxpQkFBQTtBRHFFRjtBRHVCRTtFRW5HRjtJQUtJLGlCQUFBO0VEMkVGO0FBQ0Y7QUN6RUU7RUFDRSxhQUFBO0FEMkVKO0FDMUVJO0VBQ0Usa0JBQUE7QUQ0RU47QUMxRUk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUQ0RU47QUMxRUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRDRFTjtBREdFO0VFbEZFO0lBTUksZUFBQTtFRDZFTjtBQUNGO0FEUEU7RUU3RUU7SUFTSSxlQUFBO0VEK0VOO0FBQ0Y7QURrQkU7RUUzR0U7SUFZSSxlQUFBO0VEaUZOO0FBQ0Y7QUMvRUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0pBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7QURpRk47QUMvRU07RUFDRSxVQUFBO0FEaUZSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLmltZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUsIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUsIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uYWJvdXQtcGFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFib3V0LXBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICB9XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDNyZW07XG59XG4uYWJvdXQtcGFnZSAuaW50cm8tc2VjdGlvbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMnJlbTtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC50aXRsZS5wYWdlLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLnRpdGxlLnBhZ2UtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgfVxufVxuLmFib3V0LXBhZ2UgLmludHJvLXNlY3Rpb24gLmltZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTMwMDUzOTY5NjAwLWNhZWQyNTk2ZDI0Mj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTI2NyZxPTgwXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogc2F0dXJhdGlvbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5hYm91dC1wYWdlIC5pbnRyby1zZWN0aW9uIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICB3aWR0aDogNTAlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5hYm91dC1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbiAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICB9XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgLmludHJvLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlLnBhZ2UtdGl0bGUge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIEBleHRlbmQgLnVuZGVybGluZUJlZm9yZTtcclxuICAgICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MzAwNTM5Njk2MDAtY2FlZDI1OTZkMjQyP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xMjY3JnE9ODAnKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IHNhdHVyYXRpb247XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggMCBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICAgICAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gICAgICAuaW1nLWZsdWlkIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
      styles: [".parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(14, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n\n.admin-metrics[_ngcontent-%COMP%] {\n  grid-area: 1/1/5/15;\n}\n\n.admin-user-management[_ngcontent-%COMP%] {\n  grid-area: 6/1/14/5;\n}\n\n.admin-review-management[_ngcontent-%COMP%] {\n  grid-area: 6/6/14/10;\n}\n\n.admin-company-management[_ngcontent-%COMP%] {\n  grid-area: 6/11/14/15;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGFkbWluLXBhbmVsXFxhZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hZG1pbi1wYW5lbC9hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxvQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvYWRtaW4tcGFuZWwvYWRtaW4tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE0LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xyXG4gIGdyaWQtcm93LWdhcDogMHB4O1xyXG59XHJcblxyXG4uYWRtaW4tbWV0cmljcyB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDUgLyAxNTtcclxufVxyXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcclxuICBncmlkLWFyZWE6IDYgLyAxIC8gMTQgLyA1O1xyXG59XHJcbi5hZG1pbi1yZXZpZXctbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gNiAvIDE0IC8gMTA7XHJcbn1cclxuLmFkbWluLWNvbXBhbnktbWFuYWdlbWVudCB7XHJcbiAgZ3JpZC1hcmVhOiA2IC8gMTEgLyAxNCAvIDE1O1xyXG59XHJcbiIsIi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbn1cblxuLmFkbWluLW1ldHJpY3Mge1xuICBncmlkLWFyZWE6IDEvMS81LzE1O1xufVxuXG4uYWRtaW4tdXNlci1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzEvMTQvNTtcbn1cblxuLmFkbWluLXJldmlldy1tYW5hZ2VtZW50IHtcbiAgZ3JpZC1hcmVhOiA2LzYvMTQvMTA7XG59XG5cbi5hZG1pbi1jb21wYW55LW1hbmFnZW1lbnQge1xuICBncmlkLWFyZWE6IDYvMTEvMTQvMTU7XG59Il19 */"]
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
        var component_r47 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ComponentListItem", component_r47);
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
          var _this3 = this;

          this.auth.showHTTPLoader(true);
          this.companyService.getCompanies().subscribe(function (item) {
            _this3.auth.showHTTPLoader(false);

            item.forEach(function (element) {
              _this3.companyList.push(element.payload.doc.data());
            });
            _this3.companyList = _this3.companyList.filter(function (v, i, a) {
              return a.findIndex(function (t) {
                return t.name === v.name;
              }) === i;
            });
          }, function (errorRes) {
            _this3.translate.get('TOASTR').subscribe(function (res) {
              _this3.toastr.error(errorRes.message, res.ERROR_TITLE);
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .company-page[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.company-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  color: whitesmoke;\n}\n.company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .company-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 30% 30%;\n  justify-content: space-around;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .companies-wrapper[_ngcontent-%COMP%]   app-component-list-item[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcY29tcGFuaWVzXFxjb21wYW5pZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FEdUVGO0FDdEVFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUR3RUo7QURtQkU7RUUvRkE7SUFPSSxlQUFBO0VEeUVKO0FBQ0Y7QURTRTtFRTFGQTtJQVVJLGVBQUE7RUQyRUo7QUFDRjtBQ3pFRTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FEMkVKO0FESUU7RUVsRkE7SUFLSSxjQUFBO0VENkVKO0FBQ0Y7QUM1RUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRDhFTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29tcGFuaWVzL2NvbXBhbmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSwgLmNvbXBhbnktcGFnZSBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlLCAuY29tcGFueS1wYWdlIGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQsIC5jb21wYW55LXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4uY29tcGFueS1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmNvbXBhbnktcGFnZSBoMSB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgcGFkZGluZzogM3JlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgbWFyZ2luOiAwIDJyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbXBhbnktcGFnZSBoMSB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb21wYW55LXBhZ2UgaDEge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuLmNvbXBhbnktcGFnZSAuY29tcGFuaWVzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29tcGFueS1wYWdlIC5jb21wYW5pZXMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jb21wYW55LXBhZ2UgLmNvbXBhbmllcy13cmFwcGVyIGFwcC1jb21wb25lbnQtbGlzdC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzLy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5jb21wYW55LXBhZ2Uge1xyXG4gIEBleHRlbmQgLmdyYWRpZW50LWJhY2tncm91bmQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IGdldENvbG9yKHdoaXRlR3JleSk7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiBnZXRGb250U2l6ZShoMSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgQGV4dGVuZCAudW5kZXJsaW5lQmVmb3JlO1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbXBhbmllcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBhcHAtY29tcG9uZW50LWxpc3QtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
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

    var CompanyFullPageComponent = /*#__PURE__*/function () {
      function CompanyFullPageComponent(companyService, router, auth, toastr) {
        _classCallCheck(this, CompanyFullPageComponent);

        this.companyService = companyService;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.currentCompany = {};
        this.currentCompanyName = '';
        this.currentCompanyName = router.url.slice(11);
      }

      _createClass(CompanyFullPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.auth.showHTTPLoader(true);
          this.companyService.getCompanyByName(this.currentCompanyName).subscribe(function (res) {
            _this4.auth.showHTTPLoader(false);

            if (res.length < 1) {
              _this4.router.navigate(['/404']);

              return;
            }

            res.forEach(function (element) {
              console.log(element.payload.doc.data());
              _this4.currentCompany = element.payload.doc.data();
            });
          }, function (errorRes) {
            _this4.auth.showHTTPLoader(false);

            _this4.toastr.error(errorRes.message);
          });
        }
      }]);

      return CompanyFullPageComponent;
    }();

    CompanyFullPageComponent.ɵfac = function CompanyFullPageComponent_Factory(t) {
      return new (t || CompanyFullPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    CompanyFullPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CompanyFullPageComponent,
      selectors: [["app-company-full-page"]],
      decls: 8,
      vars: 5,
      consts: [[1, "gradient-background", "mt-75"], [3, "src", "alt"]],
      template: function CompanyFullPageComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentCompany == null ? null : ctx.currentCompany.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.currentCompany == null ? null : ctx.currentCompany.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCompany == null ? null : ctx.currentCompany.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCompany == null ? null : ctx.currentCompany.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCompany == null ? null : ctx.currentCompany.technology);
        }
      },
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvY29tcGFueS1mdWxsLXBhZ2UvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW55LWZ1bGwtcGFnZS9jb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb21wYW5pZXMvY29tcGFueS1mdWxsLXBhZ2UvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxjb21wYW5pZXNcXGNvbXBhbnktZnVsbC1wYWdlXFxjb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscURBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGlCQUFBO0FEd0VGO0FDdEVFO0VBQ0UsaUJBQUE7QUR3RUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2NvbXBhbmllcy9jb21wYW55LWZ1bGwtcGFnZS9jb21wYW55LWZ1bGwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuc2VjdGlvbiBwIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG4gIHAge1xyXG4gICAgY29sb3I6IGdldENvbG9yKHdoaXRlR3JleSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
          var _this5 = this;

          this.contactService.postComment(comment).then(function (response) {
            _this5.authService.showHTTPLoader(false);

            _this5.toastrService.success('Thank You!');
          })["catch"](function (errorRes) {
            _this5.authService.showHTTPLoader(false);

            _this5.toastrService.error(errorRes.message, 'Error.');
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.contact-page-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  padding: 8% 0;\n  min-height: 100vh;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .contact-page-wrapper[_ngcontent-%COMP%] {\n    padding: 75px 1rem 15px 1rem;\n  }\n}\n.main-contact[_ngcontent-%COMP%] {\n  height: 450px;\n  max-width: 900px;\n  margin: auto;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n  background-color: white;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  width: 65%;\n  float: left;\n}\n.fa[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 85%;\n  margin: auto;\n}\n.contact-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 30px;\n  font-size: 30px;\n  color: #343a40;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0 17px 0;\n  padding: 10px 30px;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n}\n.contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .contact-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n}\n.btn.btn-dark[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n  float: right;\n  width: 35%;\n  height: 450px;\n  background: linear-gradient(163deg, #444a50 0%, #343a40 42%);\n}\n.contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  color: #dddddd;\n  padding: 30px;\n}\n.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-bottom: 60px;\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 14px;\n}\n@media only screen and (max-width: 600px) {\n  .main-contact[_ngcontent-%COMP%] {\n    height: unset;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n    width: 100%;\n    float: unset;\n  }\n\n  .main-contact[_ngcontent-%COMP%]   .contact-address[_ngcontent-%COMP%] {\n    float: unset;\n    width: 100%;\n    height: auto;\n  }\n\n  .contact-address[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 23px;\n    text-align: center;\n  }\n\n  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: unset;\n  }\n\n  .submit-btn[_ngcontent-%COMP%] {\n    width: 150px;\n    display: block;\n    margin: 0 auto 1rem auto;\n  }\n}\ninput.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvY29udGFjdC9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxxREFBQTtFQUNBLGFBQUE7RUFJQSxpQkFBQTtBRHFFRjtBRHdCRTtFRW5HRjtJQUlJLDRCQUFBO0VEMkVGO0FBQ0Y7QUN2RUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx1QkFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FEMEVGO0FDdkVBO0VBQ0UsZUFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FEMEVGO0FDdkVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUQwRUY7QUN2RUE7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQwRUY7QUN2RUE7O0VBRUUscUNBQUE7RUFDQSxxQkFBQTtBRDBFRjtBQ3ZFQTtFQUVFLGVBQUE7QUQwRUY7QUM1RUE7RUFFRSxlQUFBO0FEMEVGO0FDNUVBO0VBRUUsZUFBQTtBRDBFRjtBQzVFQTs7RUFFRSxlQUFBO0FEMEVGO0FDdkVBO0VBQ0UsWUFBQTtBRDBFRjtBQ3ZFQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUVBLDREQUFBO0FEeUVGO0FDdEVBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUR5RUY7QUN0RUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUR5RUY7QUN0RUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUR5RUY7QUN0RUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RUR5RUY7O0VDdEVBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUR5RUY7O0VDdEVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VEeUVGOztFQ3RFQTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFRHlFRjs7RUN0RUE7SUFDRSxhQUFBO0VEeUVGOztFQ3RFQTtJQUNFLGNBQUE7RUR5RUY7O0VDdEVBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7SUFDQSx3QkFBQTtFRHlFRjtBQUNGO0FDdEVBOztFQUVFLHFCQUFBO0FEd0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbi5jb250YWN0LXBhZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xuICBwYWRkaW5nOiA4JSAwO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29udGFjdC1wYWdlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDc1cHggMXJlbSAxNXB4IDFyZW07XG4gIH1cbn1cblxuLm1haW4tY29udGFjdCB7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yODgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1haW4tY29udGFjdCAuY29udGFjdC1mb3JtIHtcbiAgd2lkdGg6IDY1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mYSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFjdC1mb3JtIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQsXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogNXB4IDAgMTdweCAwO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZGQyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDpmb2N1cyxcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjYTQ4OTc4NWU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcbi5jb250YWN0LWZvcm0gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5idG4uYnRuLWRhcmsge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDM1JTtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzQ0NGE1MCAwJSwgIzM0M2E0MCA0MiUpO1xufVxuXG4uY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcbiAgY29sb3I6ICNkZGRkZGQ7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmNvbnRlbnQgcCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1haW4tY29udGFjdCB7XG4gICAgaGVpZ2h0OiB1bnNldDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IHVuc2V0O1xuICB9XG5cbiAgLm1haW4tY29udGFjdCAuY29udGFjdC1hZGRyZXNzIHtcbiAgICBmbG9hdDogdW5zZXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLmNvbnRhY3QtYWRkcmVzcyAuY29udGVudCB7XG4gICAgcGFkZGluZzogMjNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuY29udGVudCBoMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jb250ZW50IHAge1xuICAgIHBhZGRpbmc6IHVuc2V0O1xuICB9XG5cbiAgLnN1Ym1pdC1idG4ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtIGF1dG87XG4gIH1cbn1cbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcbnRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4uY29udGFjdC1wYWdlLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG4gIHBhZGRpbmc6IDglIDA7XHJcbiAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICBwYWRkaW5nOiA3NXB4IDFyZW0gMTVweCAxcmVtO1xyXG4gIH1cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1haW4tY29udGFjdCB7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtZm9ybSB7XHJcbiAgd2lkdGg6IDY1JTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZhIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogIzM0M2E0MDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0LFxyXG4uY29udGFjdC1mb3JtIGZvcm0gdGV4dGFyZWEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiA1cHggMCAxN3B4IDA7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGRkMjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBpbnB1dDpmb2N1cyxcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAycHggI2E0ODk3ODVlO1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcclxuLmNvbnRhY3QtZm9ybSBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuLmJ0bi1kYXJrIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhY3QgLmNvbnRhY3QtYWRkcmVzcyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICAvLyBiYWNrZ3JvdW5kOiAoIzJkMzQzNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzQ0NGE1MCAwJSwgIzM0M2E0MCA0MiUpO1xyXG59XHJcblxyXG4uY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcclxuICBjb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IGgxIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHAge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYWluLWNvbnRhY3Qge1xyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogdW5zZXQ7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250YWN0IC5jb250YWN0LWFkZHJlc3Mge1xyXG4gICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1hZGRyZXNzIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCBoMSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQgcCB7XHJcbiAgICBwYWRkaW5nOiB1bnNldDtcclxuICB9XHJcblxyXG4gIC5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbSBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkLFxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4iXX0= */"]
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
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n}\nsection[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\nsection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9mb3VyLW9oLWZvdXIvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BhZ2VzL2ZvdXItb2gtZm91ci9mb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZm91ci1vaC1mb3VyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwYWdlc1xcZm91ci1vaC1mb3VyXFxmb3VyLW9oLWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVqSUE7RUFDRSxxREFBQTtFQUVBLGlCQUFBO0FEd0VGO0FDdkVFO0VBQ0UsZUFBQTtBRHlFSjtBQ3ZFRTs7RUFFRSxpQkFBQTtBRHlFSjtBQ3ZFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBRHlFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvZm91ci1vaC1mb3VyL2ZvdXItb2gtZm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLm10LTYge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xufVxuXG4ubXQtNzUge1xuICBwYWRkaW5nLXRvcDogNzVweDtcbn1cblxuLnVuZGVybGluZUJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbnNlY3Rpb24gaDEge1xuICBmb250LXNpemU6IDcycHg7XG59XG5zZWN0aW9uIGgxLFxuc2VjdGlvbiBoNiB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuc2VjdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTUwcHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gIH1cclxuICBoMSxcclxuICBoNiB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, company_r3 == null ? null : company_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](company_r3 == null ? null : company_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", company_r3 == null ? null : company_r3.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", company_r3 == null ? null : company_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", company_r3 == null ? null : company_r3.location, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 8, "HOMEPAGE.AVERAGE"), ": 5 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, company_r3 == null ? null : company_r3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 10, "HOMEPAGE.SEE_MORE_BTN"));
      }
    }

    function HomeComponent_app_review_element_16_Template(rf, ctx) {
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
          var _this6 = this;

          this.auth.showHTTPLoader(true);
          this.companiesService.getFeaturedCompany().subscribe(function (res) {
            res.forEach(function (element) {
              _this6.auth.showHTTPLoader(false);

              _this6.featuredCompany = element.payload.doc.data();
            }, function (catchErr) {
              _this6.auth.showHTTPLoader(false);

              _this6.toastr.error(catchErr.message);
            });
          });
          this.companiesService.getTopThreeCompanies().subscribe(function (res) {
            res.forEach(function (element) {
              _this6.topThreeCompanies.push(element.payload.doc.data());
            });

            _this6.auth.showHTTPLoader(false);
          }, function (catchErr) {
            _this6.auth.showHTTPLoader(false);

            _this6.toastr.error(catchErr.message);
          });
          this.reviewService.getReviews().subscribe(function (data) {
            _this6.auth.showHTTPLoader(false);

            _this6.reviewList = data.map(function (e) {
              return {
                data: e.payload.doc.data(),
                id: e.payload.doc.id
              };
            });
            _this6.listOfReviews = _this6.reviewList;
          }, function (errorRes) {
            _this6.toastr.error(errorRes.message, 'Error.');

            _this6.auth.showHTTPLoader(false);
          });
        }
      }, {
        key: "checkIfLoggedIn",
        value: function checkIfLoggedIn() {
          var _this7 = this;

          this.afAuth.onAuthStateChanged(function (user) {
            if (user) {
              _this7.loggedIn = true;
            } else {
              _this7.loggedIn = false;
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
      decls: 17,
      vars: 12,
      consts: [[1, "d-flex", "justify-content-between", "dark-bg", "mt-75"], [1, "main-section", "w-100"], [1, "hero-companies", "my-5"], [1, "featured-companies-h"], ["class", "card dark-bg", 4, "ngIf"], [1, "top-reviewed-companies", "mt-6"], [1, "text-center", "text-white", "my-5", "underlineBefore", "p-2"], [1, "reviewed-companies-container"], ["class", "card mr-3 dark-bg", 4, "ngFor", "ngForOf"], [1, "text-center", "text-white", "mt-5", "mb-3", "underlineBefore", "p-2"], ["class", "my-3", 3, "reviewElement", 4, "ngFor", "ngForOf"], [1, "card", "dark-bg"], [1, "card-header"], [3, "routerLink"], [1, "card-body"], [1, "card-aside"], [1, "img-fluid"], [3, "src", "alt"], [1, "company-info"], [1, "icon-toolbar", "d-sm-block", "d-xl-flex", "justify-content-center", "py-2", "mb-3"], [1, "company-info-item"], ["aria-hidden", "true", 1, "fa", "fa-industry"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], [1, "card-text", "text-white", "mt-2", "text-sm-start", "text-xl-center"], ["mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "w-50", "td-none", 3, "routerLink"], [1, "card", "mr-3", "dark-bg"], [1, "reviewed-body"], [1, "icon-bundle"], [1, "fa", "fa-map-marker", "mr-2"], [1, "ml-2"], [1, "fa", "fa-star", "mr-2"], ["mat-raised-button", "", "color", "primary", 1, "d-block", "mx-auto", "mt-5", "td-none", 3, "routerLink"], [1, "my-3", 3, "reviewElement"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 20, 16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HomeComponent_app_review_element_16_Template, 1, 1, "app-review-element", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topThreeCompanies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "HOMEPAGE.REVIEWS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfReviews);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], src_app_components_reviews_review_element_review_element_component__WEBPACK_IMPORTED_MODULE_11__["ReviewElementComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before, .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.main-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 72px;\n  color: whitesmoke;\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 54px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .main-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 66px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.hero-companies[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 75px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    margin: auto;\n    display: block;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 175px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 2rem;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n.hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  font-size: 20px;\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 5px;\n  }\n  .hero-companies[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .company-info[_ngcontent-%COMP%]   .icon-toolbar[_ngcontent-%COMP%]   .company-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n}\n.top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n@media only screen and (max-width: 600px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .top-reviewed-companies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 75px;\n  display: block;\n  margin: auto;\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: whitesmoke;\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .reviewed-companies-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\napp-review-element[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 70%;\n}\n@media only screen and (max-width: 600px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  app-review-element[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n.dark-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n.fa[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n@media only screen and (max-width: 600px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .fa[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n.d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n  width: 75%;\n}\n@media only screen and (max-width: 600px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .d-block.mx-auto.mt-5.td-none[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxnQkFBQTtBRHdFRjtBQ3JFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtBRHNFSjtBRGVFO0VFMUZBO0lBT0ksZUFBQTtFRHdFSjtBQUNGO0FEb0JFO0VFcEdBO0lBVUksZUFBQTtFRDBFSjtBQUNGO0FEb0JFO0VFekdBO0lBY0ksZUFBQTtFRDJFSjtBQUNGO0FEb0JFO0VFOUdBO0lBa0JJLGVBQUE7RUQ0RUo7QUFDRjtBRG9CRTtFRW5IQTtJQXNCSSxlQUFBO0VENkVKO0FBQ0Y7QUN6RUE7RUFDRSxVQUFBO0FENEVGO0FDM0VFO0VBQ0UsbUJBQUE7QUQ2RUo7QUMzRUU7RUFDRSw0Q0FBQTtBRDZFSjtBQzVFSTtFQUNFLHlCQUFBO0FEOEVOO0FDN0VNO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUQrRVI7QUMzRUk7RUFDRSxhQUFBO0FENkVOO0FEL0JFO0VFL0NFO0lBR0ksY0FBQTtFRCtFTjtBQUNGO0FEaEJFO0VFbkVFO0lBTUksY0FBQTtFRGlGTjtBQUNGO0FDOUVVO0VBQ0UsWUFBQTtBRGdGWjtBRDVDRTtFRXJDUTtJQUdJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFRGtGWjtBQUNGO0FEekNFO0VFL0NRO0lBUUksWUFBQTtFRG9GWjtBQUNGO0FEcENFO0VFekRRO0lBV0ksWUFBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VEc0ZaO0FBQ0Y7QUR0Q0U7RUU5RFE7SUFnQkksWUFBQTtFRHdGWjtBQUNGO0FDcEZNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FEc0ZSO0FEeEVFO0VFaEJJO0lBSUksaUJBQUE7RUR3RlI7QUFDRjtBRG5FRTtFRTFCSTtJQU9JLGlCQUFBO0VEMEZSO0FBQ0Y7QURuRUU7RUUvQkk7SUFXSSxpQkFBQTtFRDJGUjtBQUNGO0FEbkVFO0VFcENJO0lBZUksaUJBQUE7RUQ0RlI7QUFDRjtBRG5FRTtFRXpDSTtJQW1CSSxpQkFBQTtFRDZGUjtBQUNGO0FDMUZZOztFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBRDRGZDtBRHRHRTtFRU9VOztJQUtJLGVBQUE7RUQrRmQ7QUFDRjtBRDVHRTtFRU1RO0lBVUksbUJBQUE7RURnR1o7QUFDRjtBRHZHRTtFRUpRO0lBYUksbUJBQUE7RURrR1o7QUFDRjtBRHZHRTtFRVRRO0lBZ0JJLG1CQUFBO0VEb0daO0FBQ0Y7QURsR0U7RUVBWTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFRHFHZDtFQ25HWTtJQUNFLGlCQUFBO0VEcUdkO0FBQ0Y7QUMzRkU7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FEOEZKO0FEeklFO0VFeUNBO0lBSUksZUFBQTtFRGdHSjtBQUNGO0FEMUhFO0VFcUJBO0lBT0ksZUFBQTtFRGtHSjtBQUNGO0FDOUZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FEaUdGO0FEeEpFO0VFcURGO0lBSUksY0FBQTtFRG1HRjtBQUNGO0FEbkpFO0VFMkNGO0lBUUksY0FBQTtFRG9HRjtBQUNGO0FEbkpFO0VFc0NGO0lBWUksY0FBQTtFRHFHRjtBQUNGO0FEbkpFO0VFaUNGO0lBZ0JJLGNBQUE7RURzR0Y7QUFDRjtBQ3BHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QURzR0o7QURqTEU7RUV3RUE7SUFLSSxpQkFBQTtFRHdHSjtBQUNGO0FENUtFO0VFOERBO0lBUUksaUJBQUE7RUQwR0o7QUFDRjtBRDVLRTtFRXlEQTtJQVdJLGlCQUFBO0VENEdKO0FBQ0Y7QUQ1S0U7RUVvREE7SUFjSSxpQkFBQTtFRDhHSjtBQUNGO0FDN0dJO0VBQ0UseUJBQUE7QUQrR047QUM5R007RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURnSFI7QUQ5TUU7RUUwRkk7SUFNSSxlQUFBO0VEa0hSO0FBQ0Y7QUQxTEU7RUVpRUk7SUFTSSxlQUFBO0VEb0hSO0FBQ0Y7QUNoSEk7RUFDRSxhQUFBO0FEa0hOO0FEbE1FO0VFK0VFO0lBR0ksY0FBQTtFRG9ITjtBQUNGO0FDakhVO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEbUhaO0FEdE5FO0VFZ0dRO0lBS0ksWUFBQTtFRHFIWjtBQUNGO0FDaEhJO0VBQ0UsT0FBQTtBRGtITjtBRHBORTtFRWlHRTtJQUdJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RURvSE47QUFDRjtBRHJQRTtFRWtJSTtJQUVJLGFBQUE7SUFDQSx1QkFBQTtFRHFIUjtBQUNGO0FEalBFO0VFd0hJO0lBTUksYUFBQTtJQUNBLHVCQUFBO0VEdUhSO0FBQ0Y7QUQ3T0U7RUU4R0k7SUFVSSxhQUFBO0lBQ0EsdUJBQUE7RUR5SFI7QUFDRjtBRHhQRTtFRW1ISTtJQWNJLGFBQUE7SUFDQSx1QkFBQTtFRDJIUjtBQUNGO0FDMUhRO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FENEhWO0FEeFFFO0VFeUlNO0lBS0ksa0JBQUE7RUQ4SFY7QUFDRjtBRHhRRTtFRW9JTTtJQVFJLGtCQUFBO0VEZ0lWO0FBQ0Y7QUR4UUU7RUUrSE07SUFXSSxrQkFBQTtFRGtJVjtBQUNGO0FEeFFFO0VFMEhNO0lBY0ksZUFBQTtFRG9JVjtBQUNGO0FDN0hBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QURnSUY7QUQzU0U7RUV5S0Y7SUFJSSxVQUFBO0VEa0lGO0FBQ0Y7QUR0U0U7RUUrSkY7SUFRSSxVQUFBO0VEbUlGO0FBQ0Y7QUR0U0U7RUUwSkY7SUFZSSxVQUFBO0VEb0lGO0FBQ0Y7QUNqSUE7RUFDRSxxREFBQTtBRG9JRjtBQ2pJQTtFQUNFLGtCQUFBO0FEb0lGO0FEbFVFO0VFNkxGO0lBR0ksZUFBQTtFRHNJRjtBQUNGO0FEN1RFO0VFbUxGO0lBTUksZUFBQTtFRHdJRjtBQUNGO0FEN1RFO0VFOEtGO0lBVUksZUFBQTtFRHlJRjtBQUNGO0FEN1RFO0VFeUtGO0lBY0ksZUFBQTtFRDBJRjtBQUNGO0FEN1RFO0VFb0tGO0lBa0JJLGVBQUE7RUQySUY7QUFDRjtBQ3hJQTtFQUNFLFVBQUE7QUQySUY7QUQvVkU7RUVtTkY7SUFHSSwwQkFBQTtJQUFBLHVCQUFBO0lBQUEsa0JBQUE7RUQ2SUY7QUFDRjtBRDFWRTtFRXlNRjtJQU1JLFVBQUE7RUQrSUY7QUFDRjtBRDFWRTtFRW9NRjtJQVNJLFVBQUE7RURpSkY7QUFDRjtBRDFWRTtFRStMRjtJQVlJLFVBQUE7RURtSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gIFwiYm94LXNoYWRvdy1jb2xvclwiOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgXCJwZWFjaENvbG9yXCI6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgXCJncmV5RGFya1wiOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgXCJibHVlSGVhZGVyXCI6ICMyYzNlNTAsXHJcbiAgXCJ3aGl0ZUdyZXlcIjogd2hpdGVzbW9rZSxcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICBcImgxXCI6IDcycHgsXHJcbiAgXCJoMlwiOiAzNnB4LFxyXG4gIFwiaDNcIjogMjRweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCAubWFpbi1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSwgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtaGVhZGVyIGEsIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhOjpiZWZvcmUsIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIgYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUsIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciBhOmhvdmVyOjpiZWZvcmUsIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIgYTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUsIC5tYWluLXNlY3Rpb24gaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSwgLm1haW4tc2VjdGlvbiBoMTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLm1haW4tc2VjdGlvbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1zZWN0aW9uIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbi1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDU0cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1haW4tc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAubWFpbi1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDY2cHg7XG4gIH1cbn1cblxuLmhlcm8tY29tcGFuaWVzIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5oZXJvLWNvbXBhbmllcyBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQge1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWhlYWRlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy1mbHVpZCBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cbi5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0gaDYsXG4uaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGkge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2LFxuLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWNvbXBhbmllcyAuY2FyZCAuY2FyZC1ib2R5IC5jb21wYW55LWluZm8gLmljb24tdG9vbGJhciAuY29tcGFueS1pbmZvLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuaGVyby1jb21wYW5pZXMgLmNhcmQgLmNhcmQtYm9keSAuY29tcGFueS1pbmZvIC5pY29uLXRvb2xiYXIgLmNvbXBhbnktaW5mby1pdGVtIGg2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cbiAgLmhlcm8tY29tcGFuaWVzIC5jYXJkIC5jYXJkLWJvZHkgLmNvbXBhbnktaW5mbyAuaWNvbi10b29sYmFyIC5jb21wYW55LWluZm8taXRlbSBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxufVxuXG4udG9wLXJldmlld2VkLWNvbXBhbmllcyBoMyB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAudG9wLXJldmlld2VkLWNvbXBhbmllcyBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIGgzIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cblxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIH1cbn1cbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctZmx1aWQgaW1nIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLmNhcmQtYm9keSAuY2FyZC1hc2lkZSAuaW1nLWZsdWlkIGltZyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG59XG4ucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSB7XG4gIGZsZXg6IDE7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLnJldmlld2VkLWNvbXBhbmllcy1jb250YWluZXIgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIGg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmV2aWV3ZWQtY29tcGFuaWVzLWNvbnRhaW5lciAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuXG5hcHAtcmV2aWV3LWVsZW1lbnQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIGFwcC1yZXZpZXctZWxlbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGFwcC1yZXZpZXctZWxlbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIGFwcC1yZXZpZXctZWxlbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxufVxuXG4uZGFyay1iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG4uZmEge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5mYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZmEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmZhIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xuICB3aWR0aDogNzUlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZC1ibG9jay5teC1hdXRvLm10LTUudGQtbm9uZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5tYWluLXNlY3Rpb24ge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGV4dGVuZCAuZmxleC1jb2x1bW4tY2VudGVyO1xyXG5cclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGdldEZvbnRTaXplKGgxKTtcclxuICAgIEBleHRlbmQgLnVuZGVybGluZUJlZm9yZTtcclxuICAgIGNvbG9yOiBnZXRDb2xvcih3aGl0ZUdyZXkpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWNvbXBhbmllcyB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3IoYmx1ZUhlYWRlcik7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgICAgQGV4dGVuZCAuYW5pbWF0ZWRCZWZvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC1hc2lkZSB7XHJcbiAgICAgICAgLmltZy1mbHVpZCB7XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTc1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNvbXBhbnktaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLXRvb2xiYXIge1xyXG4gICAgICAgICAgLmNvbXBhbnktaW5mby1pdGVtIHtcclxuICAgICAgICAgICAgaDYsXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b3AtcmV2aWV3ZWQtY29tcGFuaWVzIHtcclxuICBoMyB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXdlZC1jb21wYW5pZXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3IoYmx1ZUhlYWRlcik7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGV4dGVuZCAuYW5pbWF0ZWRCZWZvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtYXNpZGUge1xyXG4gICAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZXZpZXdlZC1ib2R5IHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5pY29uLWJ1bmRsZSB7XHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmFwcC1yZXZpZXctZWxlbWVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGFyay1iZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgZ2V0Q29sb3IoYmx1ZUhlYWRlcikpO1xyXG59XHJcblxyXG4uZmEge1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBAaW5jbHVkZSBzbWFsbFBob25lTWl4aW4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmQtYmxvY2subXgtYXV0by5tdC01LnRkLW5vbmUge1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23, 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_div_27_Template_form_ngSubmit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.forgotPasswordDialog(_r31);
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
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "LOGIN.FORGOT_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r31.form.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "LOGIN.RESET_BTN"), " ");
      }
    }

    function LoginComponent_main_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function LoginComponent_main_0_Template_main_clickOutside_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_main_0_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.onRegisterFormSubmit();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.onLoginFormSubmit();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.forgetPasswordModal();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.triggerLogin();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.triggerRegister();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("delayClickOutsideInit", true)("exclude", ".fa")("clickOutsideEvents", "click,touchstart, scroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r27.registerForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 21, "LOGIN.REGISTER"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 23, "LOGIN.EMAIL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "LOGIN.PASSWORD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r27.registerForm.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 27, "LOGIN.REGISTER"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r27.loginForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, "LOGIN.LOGIN"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 31, "LOGIN.EMAIL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 33, "LOGIN.PASSWORD"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 35, "LOGIN.FORGOT_PASS"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.showDialog);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r27.loginForm.valid);

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
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function LoginComponent_section_1_Template_div_clickOutside_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.closeModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_section_1_Template_i_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.closeModal();
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.logOut();
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
          var _this8 = this;

          this.translateService.get('TOASTR').subscribe(function (response) {
            _this8.toastrMessages = response;
          });
          this.initLoginForm();
          this.initRegisterForm();
          this.router.events.subscribe(function (eventChange) {
            if (eventChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this8.closeModal();
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
          var _this9 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signUp(this.registerForm.value.registerEmail, this.registerForm.value.registerPassword).then(function (response) {
            _this9.sharedService.emitLoginModalState(false);

            _this9.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this9.auth.showHTTPLoader(false);

            _this9.toastrService.error(error.message, _this9.toastrMessages.ERROR_TITLE);
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
          var _this10 = this;

          var email = Object.values(form.form.value)[0];
          this.auth.showHTTPLoader(true);
          this.auth.afAuth.sendPasswordResetEmail(email).then(function (res) {
            _this10.auth.showHTTPLoader(false);

            _this10.toastrService.success(_this10.toastrMessages.PASS_RESET, _this10.toastrMessages.SUCCESS_TITLE);

            _this10.showDialog = false;
          })["catch"](function (errorRes) {
            _this10.auth.showHTTPLoader(false);

            _this10.toastrService.error(errorRes.message, _this10.toastrMessages.ERROR_TITLE);
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
          var _this11 = this;

          this.auth.showHTTPLoader(true);
          this.auth.signIn(this.loginForm.value.email, this.loginForm.value.password).then(function (response) {
            _this11.toastrService.success(_this11.toastrMessages.SUCCESFULL_LOGIN, _this11.toastrMessages.SUCCESS_TITLE);

            _this11.sharedService.emitLoginModalState(false);

            _this11.auth.showHTTPLoader(false);
          })["catch"](function (error) {
            _this11.toastrService.error(error.message, _this11.toastrMessages.ERROR_TITLE);

            _this11.auth.showHTTPLoader(false);
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
          var _this12 = this;

          this.afAuth.signOut().then(function (response) {
            _this12.sharedService.emitLoginModalState(false);

            _this12.router.navigate(['/']);

            _this12.translateService.get('TOASTR').subscribe(function (res) {
              _this12.toastrService.success(res.SIGNED_OUT, res.SUCCESS_TITLE);
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .logged-in-controls[_ngcontent-%COMP%], .overlay-panel[_ngcontent-%COMP%], .reset-password-modal[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%], .reset-password-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.login-register[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 30px;\n  font-size: 30px;\n}\n.login-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.henlo[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n  overflow: hidden;\n  width: 750px;\n  max-width: 100%;\n  min-height: 480px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.288);\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 0 40px;\n  height: 100%;\n  text-align: center;\n  background: white;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  padding: 10px 30px;\n  margin-bottom: 17px;\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid #ddddddd2;\n  font-size: 14px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 1px 2px #a489785e;\n  transition: 0.2s ease;\n}\n.login-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #343a40e0;\n  background: #343a40e0;\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\n#register[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n#login[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid whitesmoke;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.login-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.register-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.reset-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.4s;\n}\n.reset-link[_ngcontent-%COMP%]:hover {\n  transition: 0.4s;\n  color: #dc3545 !important;\n}\n.reset-password-modal[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3000000;\n  background-color: rgba(0, 0, 0, 0.288);\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  background: #343a40e0;\n  background: linear-gradient(163deg, #2d3436, #2c3e50);\n  color: white;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  text-align: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-register[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n@media only screen and (max-width: 700px) {\n  #loginRegister[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .henlo[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n  }\n\n  .login-register[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 50%;\n  }\n\n  .form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n  }\n\n  .form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .overlay-container[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 100%;\n    height: 50%;\n    overflow: hidden;\n    z-index: 100;\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    color: #fff;\n    background: #343a40e0;\n    background: linear-gradient(163deg, #666666 0%, #343a40 42%);\n    width: 100%;\n    height: 200%;\n    top: -100%;\n    left: unset;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .overlay-panel[_ngcontent-%COMP%] {\n    position: absolute;\n    text-align: center;\n    left: 0;\n    top: unset;\n    width: 100%;\n    height: 50%;\n    transform: translateY(0);\n    transition: transform 0.6s ease-in-out;\n  }\n\n  .register-container[_ngcontent-%COMP%] {\n    opacity: 0;\n    z-index: 1;\n    transform: translateY(-100%);\n    bottom: unset;\n    width: unset;\n  }\n\n  .login-container[_ngcontent-%COMP%] {\n    left: unset;\n    width: unset;\n    z-index: 2;\n  }\n\n  .overlay-register[_ngcontent-%COMP%] {\n    bottom: 0;\n    transform: translateY(0);\n  }\n\n  .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(-20%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .login-container[_ngcontent-%COMP%] {\n    transform: translateY(100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n    transform: translateY(-100%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .register-container[_ngcontent-%COMP%] {\n    transform: translateY(0);\n    opacity: 1;\n    z-index: 5;\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-wrapper[_ngcontent-%COMP%] {\n    transform: translateY(50%);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-login[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n\n  .login-register.panel-active[_ngcontent-%COMP%]   .overlay-register[_ngcontent-%COMP%] {\n    transform: translateY(20%);\n  }\n}\n.fa.fa-times[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 2%;\n  top: 2%;\n  cursor: pointer;\n  color: #1c1c1d;\n  font-size: 36px;\n  transition: 0.4s;\n}\n.fa.fa-times[_ngcontent-%COMP%]:hover {\n  color: #dc3545;\n  transition: 0.4s;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.card-header[_ngcontent-%COMP%]   .acc-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  left: 15%;\n}\n.card-header[_ngcontent-%COMP%]   .fa.fa-times.white-icon[_ngcontent-%COMP%] {\n  position: static;\n}\n.logged-in-controls[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 10px;\n  background-color: #2d3436;\n  width: 250px;\n  height: 250px;\n  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbG9naW4vRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBhZ2VzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUR3RUY7QUNyRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRHdFRjtBQ3JFQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtBRHdFRjtBQ3JFQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRHVFRjtBQ3BFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRHVFRjtBQ3BFQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7QUR1RUY7QUNwRUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUR1RUY7QUNwRUE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FEdUVGO0FDcEVBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtBRHVFRjtBQ3BFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBRHVFRjtBQ3BFQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBRHVFRjtBQ3BFQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUR1RUY7QUNyRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUR3RUY7QUNyRUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FEd0VGO0FDckVBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FEdUVGO0FDbkVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QURzRUY7QUNuRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBRHNFRjtBQ25FQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBRHFFRjtBQ2xFQTtFQUNFLFFBQUE7RUFDQSx3QkFBQTtBRHFFRjtBQ2xFQTtFQUNFLDJCQUFBO0FEcUVGO0FDbEVBO0VBQ0UsMkJBQUE7QURxRUY7QUNsRUE7RUFDRSw0QkFBQTtBRHFFRjtBQ2xFQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QURxRUY7QUNsRUE7RUFDRSwwQkFBQTtBRHFFRjtBQ2xFQTtFQUNFLHdCQUFBO0FEcUVGO0FDbEVBO0VBQ0UsMEJBQUE7QURxRUY7QUNsRUE7RUFDRTtJQUNFLFNBQUE7RURxRUY7O0VDbEVBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RURxRUY7O0VDbEVBO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7RURxRUY7O0VDbEVBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0VEcUVGOztFQ2xFQTtJQUNFLFdBQUE7SUFDQSx1QkFBQTtFRHFFRjs7RUNsRUE7SUFDRSxtQkFBQTtFRHFFRjs7RUNsRUE7SUFDRSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxzQ0FBQTtFRHFFRjs7RUNsRUE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLDREQUFBO0lBS0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLHdCQUFBO0lBQ0Esc0NBQUE7RURpRUY7O0VDOURBO0lBQ0Usa0JBQUE7SUFFQSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtJQUNBLHNDQUFBO0VEZ0VGOztFQzdEQTtJQUNFLFVBQUE7SUFDQSxVQUFBO0lBQ0EsNEJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFRGdFRjs7RUM3REE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RURnRUY7O0VDN0RBO0lBQ0UsU0FBQTtJQUNBLHdCQUFBO0VEZ0VGOztFQzdEQTtJQUNFLDJCQUFBO0VEZ0VGOztFQzdEQTtJQUNFLDJCQUFBO0VEZ0VGOztFQzdEQTtJQUNFLDRCQUFBO0VEZ0VGOztFQzdEQTtJQUNFLHdCQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7RURnRUY7O0VDN0RBO0lBQ0UsMEJBQUE7RURnRUY7O0VDN0RBO0lBQ0Usd0JBQUE7RURnRUY7O0VDN0RBO0lBQ0UsMEJBQUE7RURnRUY7QUFDRjtBQzdEQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQrREY7QUM3REE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QURnRUY7QUM3REE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QURnRUY7QUMvREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEaUVKO0FDL0RFO0VBQ0UsZ0JBQUE7QURpRUo7QUM3REE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhDQUFBO0FEZ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLmxvZ2dlZC1pbi1jb250cm9scywgLm92ZXJsYXktcGFuZWwsIC5yZXNldC1wYXNzd29yZC1tb2RhbCwgLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCwgLnJlc2V0LXBhc3N3b3JkLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLmxvZ2luLXJlZ2lzdGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5sb2dpbi1yZWdpc3RlciBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLmhlbmxvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDc1MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQ4MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZGQyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjYTQ4OTc4NWU7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyIGJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MGUwO1xuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTJweCA0NXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gODBtcyBlYXNlLWluO1xufVxuXG4jcmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGVzbW9rZTtcbn1cblxuI2xvZ2luIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4ubG9naW4tY29udGFpbmVyIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgei1pbmRleDogMjtcbn1cblxuLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5yZXNldC1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ucmVzZXQtbGluazpob3ZlciB7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNldC1wYXNzd29yZC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI4OCk7XG59XG5cbi5vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm92ZXJsYXktd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTYzZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBsZWZ0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXktcmVnaXN0ZXIge1xuICByaWdodDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ub3ZlcmxheS1sb2dpbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xufVxuXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogNTtcbn1cblxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktcmVnaXN0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAjbG9naW5SZWdpc3RlciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmhlbmxvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuXG4gIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTAlO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIGZvcm0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmZvcm0tY29udGFpbmVyIGlucHV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5vdmVybGF5LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzY2NjY2NiAwJSwgIzM0M2E0MCA0MiUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwJTtcbiAgICB0b3A6IC0xMDAlO1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbiAgfVxuXG4gIC5vdmVybGF5LXBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiB1bnNldDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIH1cblxuICAucmVnaXN0ZXItY29udGFpbmVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBib3R0b206IHVuc2V0O1xuICAgIHdpZHRoOiB1bnNldDtcbiAgfVxuXG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHdpZHRoOiB1bnNldDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLm92ZXJsYXktcmVnaXN0ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICAub3ZlcmxheS1sb2dpbiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICB9XG5cbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogNTtcbiAgfVxuXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktd3JhcHBlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LWxvZ2luIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cblxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5vdmVybGF5LXJlZ2lzdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcbiAgfVxufVxuLmZhLmZhLXRpbWVzIHtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyJTtcbiAgdG9wOiAyJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzFjMWMxZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uZmEuZmEtdGltZXM6aG92ZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXJkLWhlYWRlciAuYWNjLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbn1cbi5jYXJkLWhlYWRlciAuZmEuZmEtdGltZXMud2hpdGUtaWNvbiB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG59XG5cbi5sb2dnZWQtaW4tY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyIGEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbn1cclxuXHJcbi5oZW5sbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDc1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0ODBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkZDI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDJweCAjYTQ4OTc4NWU7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIgYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2E0MGUwO1xyXG4gIGJhY2tncm91bmQ6ICMzNDNhNDBlMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEycHggNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuI3JlZ2lzdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4jbG9naW4ge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5sb2dpbi1jb250YWluZXIge1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY29udGFpbmVyIHtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5yZXNldC1saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLnJlc2V0LWxpbms6aG92ZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc2V0LXBhc3N3b3JkLW1vZGFsIHtcclxuICBAZXh0ZW5kIC5maXhlZC1mdWxsLWhlaWdodDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjg4KTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbn1cclxuXHJcbi5vdmVybGF5LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbi5vdmVybGF5LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjMzQzYTQwZTA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxlZnQ6IC0xMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMjAwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5vdmVybGF5LXBhbmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA0MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm92ZXJsYXktcmVnaXN0ZXIge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm92ZXJsYXktbG9naW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAubG9naW4tY29udGFpbmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG59XHJcblxyXG4ubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAjbG9naW5SZWdpc3RlciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuaGVubG8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udGFpbmVyIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzM0M2E0MGUwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAxNjNkZWcsXHJcbiAgICAgIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSkgMCUsXHJcbiAgICAgIHJnYmEoNTIsIDU4LCA2NCwgMSkgNDIlXHJcbiAgICApO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICB0b3A6IC0xMDAlO1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICBib3R0b206IHVuc2V0O1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBsZWZ0OiB1bnNldDtcclxuICAgIHdpZHRoOiB1bnNldDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheS1sb2dpbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XHJcbiAgfVxyXG5cclxuICAubG9naW4tcmVnaXN0ZXIucGFuZWwtYWN0aXZlIC5sb2dpbi1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogNTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktd3JhcHBlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dpbi1yZWdpc3Rlci5wYW5lbC1hY3RpdmUgLm92ZXJsYXktbG9naW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLXJlZ2lzdGVyLnBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yZWdpc3RlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5mYS5mYS10aW1lcyB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMiU7XHJcbiAgdG9wOiAyJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxYzFjMWQ7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuLmZhLmZhLXRpbWVzOmhvdmVyIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAuYWNjLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGxlZnQ6IDE1JTtcclxuICB9XHJcbiAgLmZhLmZhLXRpbWVzLndoaXRlLWljb24ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcbn1cclxuXHJcbi5sb2dnZWQtaW4tY29udHJvbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDM0MzY7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxufVxyXG4iXX0= */"]
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
          var _this13 = this;

          this.translateService.get('TOASTR').subscribe(function (response) {
            _this13.toastrMessages = response;
          });
          this.authService.showHTTPLoader(true);
          this.subscription = this.companyService.getCompanies().subscribe(function (data) {
            _this13.authService.showHTTPLoader(false);

            data.map(function (e) {
              _this13.companies.push(e.payload.doc.data());
            });
          }, function (errorRes) {
            _this13.authService.showHTTPLoader(false);

            _this13.toastr.error(errorRes.message, _this13.toastrMessages.ERROR_TITLE);
          });
          this.initForms();
        } // <Create new review>

      }, {
        key: "create",
        value: function create() {
          var _this14 = this;

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
              _this14.toastr.error(_this14.toastrMessages.UNVERIFIED, _this14.toastrMessages.ERROR_TITLE);

              _this14.authService.showHTTPLoader(false);

              return;
            }

            review.userName = e.email;

            _this14.reviewService.postReview(review).then(function (response) {
              _this14.reviewService.upvoteReview(response.id, 0, '');

              _this14.authService.showHTTPLoader(false);

              _this14.toastr.success(_this14.toastrMessages.SUBMITTED_REVIEW, _this14.toastrMessages.SUCCESS_TITLE);
            })["catch"](function (errorRes) {
              _this14.authService.showHTTPLoader(false);

              _this14.toastr.error(errorRes.message, _this14.toastrMessages.ERROR_TITLE);
            });
          });
        } // </Create new review>

      }, {
        key: "requestVerification",
        value: function requestVerification() {
          var _this15 = this;

          if (this.accountChangesForm.value.linkedInAccount) {
            this.authService.showHTTPLoader(true);
            this.authService.getUsername().subscribe(function (e) {
              _this15.af.collection('verifications').add({
                email: e.email,
                linkedin: _this15.accountChangesForm.value.linkedInAccount
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
          var _this16 = this;

          var email = this.accountChangesForm.value.changeEmailInput;

          if (!email) {
            this.toastr.error(this.toastrMessages.NO_EMAIL, this.toastrMessages.ERROR_TITLE);
          } else {
            this.authService.afAuth.currentUser.then(function (user) {
              return user.updateEmail(email).then(function () {
                _this16.toastr.success(_this16.toastrMessages.EMAIL_CHANGED, _this16.toastrMessages.SUCCESS_TITLE);
              })["catch"](function (err) {
                _this16.toastr.error(err.message, _this16.toastrMessages.ERROR_TITLE);
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
          var _this17 = this;

          this.authService.afAuth.currentUser.then(function (user) {
            return user["delete"]().then(function () {
              _this17.toastr.success(_this17.toastrMessages.USER_DELETED, _this17.toastrMessages.SUCCESS_TITLE);
            })["catch"](function (err) {
              _this17.toastr.error(err.message, _this17.toastrMessages.ERROR_TITLE);
            });
          });
          this.toggleAccountDel();
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this18 = this;

          if (this.accountChangesForm.value.newPassword && this.accountChangesForm.value.newPasswordConfirm) {
            if (this.accountChangesForm.value.newPassword === this.accountChangesForm.value.newPasswordConfirm) {
              this.authService.showHTTPLoader(true);
              this.authService.getUsername().subscribe(function (e) {
                e.updatePassword(_this18.accountChangesForm.value.newPassword).then(function () {
                  _this18.authService.showHTTPLoader(false);

                  _this18.toastr.success(_this18.toastrMessages.UPDATE_PASS, _this18.toastrMessages.SUCCESS_TITLE);
                })["catch"](function (err) {
                  _this18.authService.showHTTPLoader(false);

                  _this18.toastr.error(err.message, _this18.toastrMessages.ERROR_TITLE);
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%], .dialog-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  grid-template-rows: repeat(6, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n@media only screen and (max-width: 600px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .parent[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.div1[_ngcontent-%COMP%] {\n  grid-area: 1/2/5/4;\n}\n.div2[_ngcontent-%COMP%] {\n  grid-area: 1/5/5/7;\n}\n.div3[_ngcontent-%COMP%] {\n  grid-area: 5/3/7/6;\n}\n.body[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n.dialog-container[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n.dialog-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 1rem;\n  border-radius: 15px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], mat-checkbox[_ngcontent-%COMP%] {\n  color: #ecf0f1;\n}\np[_ngcontent-%COMP%] {\n  color: #abb0b0;\n}\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n  color: #ecf0f1;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .mb-small[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvbXktYWNjb3VudC9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXG15LWFjY291bnRcXG15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVoSUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUR3RUY7QURpQkU7RUU5RkY7SUFPSSxjQUFBO0VEMEVGO0FBQ0Y7QURpQkU7RUVuR0Y7SUFVSSxjQUFBO0VENEVGO0FBQ0Y7QURpQkU7RUV4R0Y7SUFhSSxjQUFBO0VEOEVGO0FBQ0Y7QUMzRUE7RUFDRSxrQkFBQTtBRDhFRjtBQzVFQTtFQUNFLGtCQUFBO0FEK0VGO0FDN0VBO0VBQ0Usa0JBQUE7QURnRkY7QUM5RUE7RUFDRSxxREFBQTtBRGlGRjtBQzlFQTtFQUVFLG9DQUFBO0FEZ0ZGO0FDOUVFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QURnRko7QUM1RUE7Ozs7RUFJRSxjQUFBO0FEK0VGO0FDNUVBO0VBQ0UsY0FBQTtBRCtFRjtBQzVFQTs7RUFFRSxjQUFBO0FEK0VGO0FEbENFO0VFMUNGO0lBRUksZ0JBQUE7SUFDQSxtQkFBQTtFRCtFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQsIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLnBhcmVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xuICBncmlkLXJvdy1nYXA6IDBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBhcmVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucGFyZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXJlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5kaXYxIHtcbiAgZ3JpZC1hcmVhOiAxLzIvNS80O1xufVxuXG4uZGl2MiB7XG4gIGdyaWQtYXJlYTogMS81LzUvNztcbn1cblxuLmRpdjMge1xuICBncmlkLWFyZWE6IDUvMy83LzY7XG59XG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuLmRpYWxvZy1jb250YWluZXIgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSxcbm1hdC1jaGVja2JveCB7XG4gIGNvbG9yOiAjZWNmMGYxO1xufVxuXG5wIHtcbiAgY29sb3I6ICNhYmIwYjA7XG59XG5cbnRleHRhcmVhOmZvY3VzLFxuaW5wdXQ6Zm9jdXMge1xuICBjb2xvcjogI2VjZjBmMTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYi1zbWFsbCB7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLnBhcmVudCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDYsIDFmcik7XHJcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAwcHg7XHJcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2MSB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDUgLyA0O1xyXG59XHJcbi5kaXYyIHtcclxuICBncmlkLWFyZWE6IDEgLyA1IC8gNSAvIDc7XHJcbn1cclxuLmRpdjMge1xyXG4gIGdyaWQtYXJlYTogNSAvIDMgLyA3IC8gNjtcclxufVxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIHtcclxuICBAZXh0ZW5kIC5maXhlZC1mdWxsLWhlaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnZXRDb2xvcihib3gtc2hhZG93LWNvbG9yKTtcclxuICBAZXh0ZW5kIC5mbGV4LWNvbHVtbi1jZW50ZXI7XHJcbiAgZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhLFxyXG5tYXQtY2hlY2tib3gge1xyXG4gIGNvbG9yOiAjZWNmMGYxO1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogI2FiYjBiMDtcclxufVxyXG5cclxudGV4dGFyZWE6Zm9jdXMsXHJcbmlucHV0OmZvY3VzIHtcclxuICBjb2xvcjogI2VjZjBmMTtcclxufVxyXG5cclxuLm1iLXNtYWxsIHtcclxuICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .terms-of-service-section[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.terms-of-service-section[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  min-height: 100vh;\n  color: whitesmoke;\n}\n.terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.terms-of-service-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 22px;\n  margin-bottom: 0;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .terms-of-service-section[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    width: 90%;\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL3Rlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZXMvdGVybXMtb2Ytc2VydmljZS9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZXNcXHRlcm1zLW9mLXNlcnZpY2VcXHRlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGlCQUFBO0FDckJGO0FEd0JBO0VBQ0Usa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNyQkY7QUR1QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSxxQkFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFEQUFBO0FDcEJGO0FEdUJBLDJCQUFBO0FBRUEsc0JBQUE7QUFxQ0EseUJBQUE7QUVqSUE7RUFDRSxvQkFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7QUR3RUY7QUN2RUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBRHlFSjtBRGtCRTtFRS9GQTtJQU9JLGVBQUE7RUQwRUo7QUFDRjtBRFFFO0VFMUZBO0lBVUksZUFBQTtFRDRFSjtBQUNGO0FDekVFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEMkVKO0FER0U7RUVqRkE7SUFLSSxVQUFBO0lBQ0EsZUFBQTtFRDZFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlcy90ZXJtcy1vZi1zZXJ2aWNlL3Rlcm1zLW9mLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUsIC50ZXJtcy1vZi1zZXJ2aWNlLXNlY3Rpb24gaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSwgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBoMTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRkLW5vbmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5ncmFkaWVudC1iYWNrZ3JvdW5kLCAudGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4udGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIGgxIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBwYWRkaW5nOiAzcmVtIDA7XG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICBtYXJnaW46IDAgMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG4udGVybXMtb2Ytc2VydmljZS1zZWN0aW9uIG9sIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRlcm1zLW9mLXNlcnZpY2Utc2VjdGlvbiBvbCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzc19leHRlbmRhYmxlcy9pbmRleCc7XHJcbi50ZXJtcy1vZi1zZXJ2aWNlLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIEBleHRlbmQgLmdyYWRpZW50LWJhY2tncm91bmQ7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgY29sb3I6IGdldENvbG9yKHdoaXRlR3JleSk7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiBnZXRGb250U2l6ZShoMSk7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIG1hcmdpbjogMCAycmVtO1xyXG4gICAgQGV4dGVuZCAudW5kZXJsaW5lQmVmb3JlO1xyXG4gICAgQGluY2x1ZGUgbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDZweDtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9sIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
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
        var option_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r57);
      }
    }

    function FullListComponent_app_review_element_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-review-element", 8);
      }

      if (rf & 2) {
        var review_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviewElement", review_r58);
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
          var _this19 = this;

          this.reviewService.getReviews().subscribe(function (response) {
            _this19.listOfReviews = response.map(function (e) {
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
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%], .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before, .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\nsection.review-page[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n  padding-bottom: 10px;\n}\n.review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  text-align: center;\n  font-size: 72px;\n  padding: 3rem 0;\n  padding-bottom: 1rem;\n  margin: 0 2rem;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 46px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .review-list[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\nform[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 3rem auto;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-left: 2rem;\n}\n.review-container[_ngcontent-%COMP%] {\n  margin: 2rem 10rem;\n  display: grid;\n  grid-template-columns: 80%;\n  justify-content: stretch;\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n  row-gap: 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL2Z1bGwtbGlzdC9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFzc2V0c1xcc2Nzc19leHRlbmRhYmxlc1xcX2luZGV4LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9mdWxsLWxpc3QvZnVsbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvZnVsbC1saXN0L0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZXZpZXdzXFxmdWxsLWxpc3RcXGZ1bGwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscURBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLHFEQUFBO0VBQ0Esb0JBQUE7QUR3RUY7QUNwRUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUR1RUo7QURnQkU7RUU3RkE7SUFTSSxlQUFBO0VEd0VKO0FBQ0Y7QURNRTtFRXhGQTtJQVlJLGVBQUE7RUQwRUo7QUFDRjtBQ3RFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBRHlFRjtBQ3hFRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBRDBFSjtBQ3RFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsYUFBQTtBRHlFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9mdWxsLWxpc3QvZnVsbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gIFwiYm94LXNoYWRvdy1jb2xvclwiOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgXCJwZWFjaENvbG9yXCI6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgXCJncmV5RGFya1wiOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgXCJibHVlSGVhZGVyXCI6ICMyYzNlNTAsXHJcbiAgXCJ3aGl0ZUdyZXlcIjogd2hpdGVzbW9rZSxcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICBcImgxXCI6IDcycHgsXHJcbiAgXCJoMlwiOiAzNnB4LFxyXG4gIFwiaDNcIjogMjRweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlLCAucmV2aWV3LWxpc3QgaDEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSwgLnJldmlldy1saXN0IGgxOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG5zZWN0aW9uLnJldmlldy1wYWdlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ucmV2aWV3LWxpc3QgaDEge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIHBhZGRpbmc6IDNyZW0gMDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbjogMCAycmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZXZpZXctbGlzdCBoMSB7XG4gICAgZm9udC1zaXplOiA0NnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5yZXZpZXctbGlzdCBoMSB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDNyZW0gYXV0bztcbn1cbmZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuLnJldmlldy1jb250YWluZXIge1xuICBtYXJnaW46IDJyZW0gMTByZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGNvbHVtbi1nYXA6IDVyZW07XG4gIHJvdy1nYXA6IDVyZW07XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuc2VjdGlvbi5yZXZpZXctcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5yZXZpZXctbGlzdCB7XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IGdldENvbG9yKHdoaXRlR3JleSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IGdldEZvbnRTaXplKGgxKTtcclxuICAgIHBhZGRpbmc6IDNyZW0gMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICBAZXh0ZW5kIC51bmRlcmxpbmVCZWZvcmU7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDNyZW0gYXV0bztcclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAycmVtIDEwcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xyXG4gIGNvbHVtbi1nYXA6IDVyZW07XHJcbiAgcm93LWdhcDogNXJlbTtcclxufVxyXG4iXX0= */"]
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
        var fill_r50 = ctx.fill;
        var index_r51 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", fill_r50 === 100)("bad", index_r51 < 3);
      }
    }

    function ReviewElementComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.sendReport("reviewElement.id");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewElementComponent_div_22_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.openReportDialog();
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
          var _this20 = this;

          this.translate.get('TOASTR').subscribe(function (res) {
            _this20.toastr.success(res.REPORTED, res.SUCCESS_TITLE);

            _this20.openReportDialog();
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
      styles: [".flex-column-center[_ngcontent-%COMP%], div#report-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%], div#report-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.review-container[_ngcontent-%COMP%] {\n  height: 200px;\n  display: flex;\n  box-shadow: 5px 3px 3px 0 rgba(0, 0, 0, 0.4);\n  width: 100%;\n  border: 1px solid #2c3e50;\n  position: relative;\n}\n@media only screen and (max-width: 600px) {\n  .review-container[_ngcontent-%COMP%] {\n    display: block;\n    height: 100%;\n  }\n}\n.card-aside[_ngcontent-%COMP%] {\n  background-color: #dfe6e9;\n}\n.card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n  width: 150px;\n  padding: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 100px;\n    display: block;\n    margin: auto;\n    padding: 5px;\n    height: 75px;\n  }\n}\n.card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.4);\n}\n@media only screen and (max-width: 600px) {\n  .card-aside[_ngcontent-%COMP%]   p.text-center.my-md-2.my-sm-0.font-italic[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: linear-gradient(163deg, #444a50 0%, #2c3e50 80%);\n  flex: 1;\n  border: 0;\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%]:first-child {\n  border-radius: 0px !important;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background: #2c3e50;\n}\n@media only screen and (max-width: 600px) {\n  .card-header[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 0;\n  text-decoration: none;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n.card-body[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n.card-body[_ngcontent-%COMP%]   button.see-more-btn[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n  width: 700px;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card-body[_ngcontent-%COMP%]   #textTruncate[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n}\napp-votes-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 15%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\nngb-rating[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ndiv#report-dialog[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 100001;\n}\ndiv#report-dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding: 1rem;\n  border-radius: 15px;\n}\ndiv#report-dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWVsZW1lbnQvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1lbGVtZW50XFxyZXZpZXctZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscURBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBS0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRG9FRjtBRGdCRTtFRTlGRjtJQUlJLGNBQUE7SUFDQSxZQUFBO0VEOEVGO0FBQ0Y7QUN2RUE7RUFDRSx5QkFBQTtBRDBFRjtBQ3hFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEMEVOO0FERUU7RUU5RUU7SUFJSSxZQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtFRDRFTjtBQUNGO0FDekVFO0VBQ0UseUJBQUE7QUQyRUo7QURWRTtFRWxFQTtJQUdJLGdCQUFBO0VENkVKO0FBQ0Y7QUN6RUE7RUFDRSw0REFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7QUQ0RUY7QUN6RUE7RUFDRSw2QkFBQTtBRDRFRjtBQ3pFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUtBLG1CQUFBO0FEd0VGO0FEaENFO0VFL0NGO0lBSUksY0FBQTtFRCtFRjtBQUNGO0FDNUVFO0VBSUUsZUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBRDJFSjtBRHJDRTtFRTVDQTtJQUVJLGVBQUE7RURtRko7QUFDRjtBQzNFQTtFQUlFLGlCQUFBO0FEMkVGO0FDOUVFO0VBQ0UsWUFBQTtBRGdGSjtBQzdFRTtFQUNFLFlBQUE7QUQrRUo7QURwREU7RUU1QkE7SUFHSSxZQUFBO0VEaUZKO0FBQ0Y7QUQxQ0U7RUUzQ0E7SUFNSSxZQUFBO0VEbUZKO0FBQ0Y7QUQxQ0U7RUVoREE7SUFTSSxZQUFBO0VEcUZKO0FBQ0Y7QUNsRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBRHFGRjtBQ25GQTtFQUNFLGFBQUE7QURzRkY7QUNuRkE7RUFFRSxvQ0FBQTtFQUVBLGVBQUE7QURvRkY7QUNuRkU7RUFLRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGlGSjtBQ3ZGSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FEeUZOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1lbGVtZW50L3Jldmlldy1lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yczogKFxyXG4gIFwiYm94LXNoYWRvdy1jb2xvclwiOiByZ2JhKDAsIDAsIDAsIDAuNCksXHJcbiAgXCJwZWFjaENvbG9yXCI6IHJnYmEoMjEyLCAxMTMsIDExMywgMSksXHJcbiAgXCJncmV5RGFya1wiOiByZ2JhKDAsIDAsIDAsIDAuNyksXHJcbiAgXCJibHVlSGVhZGVyXCI6ICMyYzNlNTAsXHJcbiAgXCJ3aGl0ZUdyZXlcIjogd2hpdGVzbW9rZSxcclxuKTtcclxuXHJcbiRmb250U2l6ZXM6IChcclxuICBcImgxXCI6IDcycHgsXHJcbiAgXCJoMlwiOiAzNnB4LFxyXG4gIFwiaDNcIjogMjRweCxcclxuKTtcclxuXHJcbkBmdW5jdGlvbiBnZXRDb2xvcigkY29sb3JOYW1lKSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRjb2xvcnMsICRjb2xvck5hbWUpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gZ2V0Rm9udFNpemUoJGZvbnQpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGZvbnRTaXplcywgJGZvbnQpO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cclxuLmZsZXgtY29sdW1uLWNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLm10LTYge1xyXG4gIG1hcmdpbi10b3A6IDZyZW07XHJcbn1cclxuXHJcbi5tdC03NSB7XHJcbiAgcGFkZGluZy10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbi5maXhlZC1mdWxsLWhlaWdodCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50ZC1ub25lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5ncmFkaWVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xyXG5cclxuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBzbWFsbFBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbWVkaXVtUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjVweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHRhYmxldE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIEV4dHJhTGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cclxuIiwiLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXG4uZmxleC1jb2x1bW4tY2VudGVyLCBkaXYjcmVwb3J0LWRpYWxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmFuaW1hdGVkQmVmb3JlOmhvdmVyOjpiZWZvcmUsIC5jYXJkLWhlYWRlciAuY2FyZC10aXRsZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCwgZGl2I3JlcG9ydC1kaWFsb2cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4ucmV2aWV3LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaGFkb3c6IDVweCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzJjM2U1MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAucmV2aWV3LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi5jYXJkLWFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTZlOTtcbn1cbi5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICB3aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWFzaWRlIC5pbWctY29udGFpbmVyIC5pbWctZmx1aWQge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgfVxufVxuLmNhcmQtYXNpZGUgcC50ZXh0LWNlbnRlci5teS1tZC0yLm15LXNtLTAuZm9udC1pdGFsaWMge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1hc2lkZSBwLnRleHQtY2VudGVyLm15LW1kLTIubXktc20tMC5mb250LWl0YWxpYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjNkZWcsICM0NDRhNTAgMCUsICMyYzNlNTAgODAlKTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmNhcmQtaGVhZGVyIC5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZC1oZWFkZXIgLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgfVxufVxuXG4uY2FyZC1ib2R5IHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4uY2FyZC1ib2R5IGJ1dHRvbi5zZWUtbW9yZS1idG4ge1xuICB3aWR0aDogMTAwcHg7XG59XG4uY2FyZC1ib2R5ICN0ZXh0VHJ1bmNhdGUge1xuICB3aWR0aDogNzAwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQtYm9keSAjdGV4dFRydW5jYXRlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQtYm9keSAjdGV4dFRydW5jYXRlIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5jYXJkLWJvZHkgI3RleHRUcnVuY2F0ZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5cbmFwcC12b3Rlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMTUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbm5nYi1yYXRpbmc6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5kaXYjcmVwb3J0LWRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgei1pbmRleDogMTAwMDAxO1xufVxuZGl2I3JlcG9ydC1kaWFsb2cgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbmRpdiNyZXBvcnQtZGlhbG9nIGRpdiBoNiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbi5yZXZpZXctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBib3gtc2hhZG93OiA1cHggM3B4IDNweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdldENvbG9yKGJsdWVIZWFkZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQtYXNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmU2ZTk7XHJcbiAgLmltZy1jb250YWluZXIge1xyXG4gICAgLmltZy1mbHVpZCB7XHJcbiAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgQGluY2x1ZGUgc21hbGxQaG9uZU1peGluIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcC50ZXh0LWNlbnRlci5teS1tZC0yLm15LXNtLTAuZm9udC1pdGFsaWMge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzQ0NGE1MCAwJSwgIzJjM2U1MCA4MCUpO1xyXG4gIGZsZXg6IDE7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2M2RlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgfVxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgQGV4dGVuZCAuYW5pbWF0ZWRCZWZvcmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBidXR0b24uc2VlLW1vcmUtYnRuIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICB9XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgI3RleHRUcnVuY2F0ZSB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpdW1QaG9uZU1peGluIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgQGluY2x1ZGUgc21hbGxEZXNrdG9wTWl4aW4ge1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuYXBwLXZvdGVzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxubmdiLXJhdGluZzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuZGl2I3JlcG9ydC1kaWFsb2cge1xyXG4gIEBleHRlbmQgLmZpeGVkLWZ1bGwtaGVpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAwMDE7XHJcbiAgZGl2IHtcclxuICAgIGg2IHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */", ".star[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        color: #b0c4de;\n      }\n      .filled[_ngcontent-%COMP%] {\n        color: #1e90ff;\n      }\n      .bad[_ngcontent-%COMP%] {\n        color: #deb0b0;\n      }\n      .filled.bad[_ngcontent-%COMP%] {\n        color: #ff1e1e;\n      }"]
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
          var _this21 = this;

          this.auth.showHTTPLoader(true);
          this.reviewService.getReviewById(this.currentReviewId).subscribe(function (res) {
            _this21.auth.showHTTPLoader(false);

            if (!res.payload.data()) {
              _this21.router.navigate(['/404']);

              return;
            }

            _this21.activeReview = res.payload.data();
          }, function (errorRes) {
            _this21.auth.showHTTPLoader(false);

            _this21.toastr.error(errorRes.message);
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
      styles: [".flex-column-center[_ngcontent-%COMP%], section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\nsection[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\nsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1mdWxsL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlldy1mdWxsL3Jldmlldy1mdWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWZ1bGwvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJldmlld3NcXHJldmlldy1mdWxsXFxyZXZpZXctZnVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkEsdUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsaUJBQUE7QUNyQkY7QUR3QkE7RUFDRSxrQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ3JCRjtBRHVCQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3BCRjtBRHVCQTtFQUNFLHFCQUFBO0FDcEJGO0FEdUJBO0VBQ0UscURBQUE7QUNwQkY7QUR1QkEsMkJBQUE7QUFFQSxzQkFBQTtBQXFDQSx5QkFBQTtBRWhJQTtFQUNFLGlCQUFBO0FEd0VGO0FDdEVFO0VBQ0UsaUJBQUE7QUR3RUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jldmlld3MvcmV2aWV3LWZ1bGwvcmV2aWV3LWZ1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5tdC02IHtcbiAgbWFyZ2luLXRvcDogNnJlbTtcbn1cblxuLm10LTc1IHtcbiAgcGFkZGluZy10b3A6IDc1cHg7XG59XG5cbi51bmRlcmxpbmVCZWZvcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5maXhlZC1mdWxsLWhlaWdodCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZC1ub25lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xufVxuXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xuLypSZXNwb25zaXZlIE1peGlucyBFTkQgKi9cbnNlY3Rpb24ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbnNlY3Rpb24gcCB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuXHJcbnNlY3Rpb24ge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxuICBwIHtcclxuICAgIGNvbG9yOiBnZXRDb2xvcih3aGl0ZUdyZXkpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
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
          var _this22 = this;

          this.rs.getUpvotes(this.id).subscribe(function (e) {
            _this22.upvoteList = e.map(function (item) {
              return item.payload.doc.data();
            });

            _this22.as.afAuth.user.subscribe(function (user) {
              _this22.loggedUser = user === null || user === void 0 ? void 0 : user.email;

              _this22.controlButton(_this22.loggedUser);
            });
          });
        }
      }, {
        key: "renderDownvotes",
        value: function renderDownvotes() {
          var _this23 = this;

          this.rs.getDownvotes(this.id).subscribe(function (e) {
            _this23.downvoteList = e.map(function (item) {
              return item.payload.doc.data();
            });

            _this23.as.afAuth.user.subscribe(function (user) {
              _this23.loggedUser = user === null || user === void 0 ? void 0 : user.email;

              _this23.controlButton(_this23.loggedUser);
            });
          });
        }
      }, {
        key: "upvoteBtn",
        value: function upvoteBtn() {
          var _this24 = this;

          this.as.getUsername().subscribe(function (e) {
            _this24.rs.upvoteReview(_this24.id, 1, e.email);

            _this24.renderUpvotes();

            _this24.controlButton(_this24.loggedUser);
          });
        }
      }, {
        key: "downvoteBtn",
        value: function downvoteBtn() {
          var _this25 = this;

          this.as.getUsername().subscribe(function (e) {
            _this25.rs.upvoteReview(_this25.id, -1, e.email);

            _this25.renderDownvotes();

            _this25.controlButton(_this25.loggedUser);
          });
        }
      }, {
        key: "controlButton",
        value: function controlButton(mail) {
          var _this26 = this;

          this.upvoteList.forEach(function (item) {
            if (item.username === mail) {
              _this26.upvoteBlocked = true;
              _this26.downvoteBlocked = true;
            }
          });
          this.downvoteList.forEach(function (item) {
            if (item.username === mail) {
              _this26.upvoteBlocked = true;
              _this26.downvoteBlocked = true;
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
        scrollPositionRestoration: 'disabled'
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
            scrollPositionRestoration: 'disabled'
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
        scrollPositionRestoration: 'disabled'
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
            scrollPositionRestoration: 'disabled'
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
          var _this27 = this;

          return new Promise(function (resolve, reject) {
            _this27.af.onAuthStateChanged(function (user) {
              if (user) {
                resolve(true);
              } else {
                _this27.router.navigate(['/']);

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
            var _this28 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.afAuth.signOut();

                  case 2:
                    this.router.navigate(['/']);
                    this.translateService.get('TOASTR').subscribe(function (response) {
                      _this28.toastr.success(response.SIGNED_OUT, response.SUCCESS_TITLE);
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
            var _this29 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.afAuth.createUserWithEmailAndPassword(email, password);

                  case 2:
                    this.sendConfirmationEmail();
                    this.translateService.get('TOASTR').subscribe(function (response) {
                      _this29.toastr.success(response.USER_CREATED, response.SUCCESS_TITLE);
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
          var _this30 = this;

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.sendPasswordResetEmail(email).then(function () {
            _this30.showHTTPLoader(false);

            _this30.translateService.get('TOASTR').subscribe(function (response) {
              _this30.toastr.success(response.PASS_RESET, response.SUCCESS_TITLE);
            });
          })["catch"](function (err) {
            _this30.showHTTPLoader(false);

            _this30.translateService.get('TOASTR').subscribe(function (response) {
              _this30.toastr.success(err.message, response.ERROR_TITLE);
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
            return ref.orderBy('name', 'desc').limit(3);
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
          var _this31 = this;

          this.reviewService.getReviewsForCompany(this.ComponentListItem.name).subscribe(function (item) {
            item.map(function (rev) {
              _this31.reviews.push(rev.payload.doc.data());
            });
            _this31.numberOfReviews = _this31.reviews.length;
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
      vars: 17,
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.ComponentListItem.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ComponentListItem.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.ComponentListItem.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ComponentListItem.location, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, "HOMEPAGE.AVERAGE"), " 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ComponentListItem.technology, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.numberOfReviews, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.ComponentListItem.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, "HOMEPAGE.SEE_MORE_BTN"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: [".flex-column-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before, .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before, .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%], .card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  width: 100%;\n  box-shadow: 2px 3px 3px 0 rgba(0, 0, 0, 0.4);\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto 0 1rem;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #2c3e50;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 32px;\n  color: whitesmoke;\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media only screen and (min-width: 325px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  display: block;\n  margin: auto;\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .card-aside[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n}\n.card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n}\n.card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1rem;\n  color: whitesmoke;\n}\n@media only screen and (min-width: 600px) and (max-width: 768px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 992px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n}\n@media only screen and (min-width: 1200px) and (max-width: 1440px) {\n  .card[_ngcontent-%COMP%]   .reviewed-body[_ngcontent-%COMP%]   .icon-bundle[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC1saXN0LWl0ZW0vRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhc3NldHNcXHNjc3NfZXh0ZW5kYWJsZXNcXF9pbmRleC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50LWxpc3QtaXRlbS9jb21wb25lbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50LWxpc3QtaXRlbS9EOlxcd29ya3NwYWNlXFxzZWF2dXNcXHN1Ym1hcmluZS10ZWFtLmdpdGh1Yi5pby9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnQtbGlzdC1pdGVtXFxjb21wb25lbnQtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxREFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaElBO0VBRUUsWUFBQTtFQUNBLFdBQUE7RUFJQSw0Q0FBQTtBRG9FRjtBRG1CRTtFRTlGRjtJQUtJLFVBQUE7RUQwRUY7QUFDRjtBRGNFO0VFOUZGO0lBU0ksd0JBQUE7RUQyRUY7QUFDRjtBRG1CRTtFRXhHRjtJQVlJLGlCQUFBO0VENkVGO0FBQ0Y7QURtQkU7RUU3R0Y7SUFlSSxpQkFBQTtFRCtFRjtBQUNGO0FEbUJFO0VFbEhGO0lBa0JJLGlCQUFBO0VEaUZGO0FBQ0Y7QUNoRkU7RUFDRSx5QkFBQTtBRGtGSjtBQ2pGSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRG1GTjtBRGZFO0VFeEVFO0lBTUksZUFBQTtFRHFGTjtBQUNGO0FES0U7RUVqR0U7SUFTSSxlQUFBO0VEdUZOO0FBQ0Y7QUNuRkU7RUFDRSxhQUFBO0FEcUZKO0FEdkJFO0VFL0RBO0lBR0ksY0FBQTtFRHVGSjtBQUNGO0FEUkU7RUVuRkE7SUFNSSxjQUFBO0VEeUZKO0FBQ0Y7QUN0RlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEd0ZWO0FEN0JFO0VFL0RNO0lBTUksWUFBQTtFRDBGVjtBQUNGO0FDckZFO0VBQ0UsT0FBQTtBRHVGSjtBRDNCRTtFRTdEQTtJQUdJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7RUR5Rko7QUFDRjtBRDVERTtFRTVCRTtJQUVJLGNBQUE7RUQwRk47QUFDRjtBRHZERTtFRXRDRTtJQUtJLGFBQUE7SUFDQSx1QkFBQTtFRDRGTjtBQUNGO0FEbkRFO0VFaERFO0lBU0ksYUFBQTtJQUNBLHVCQUFBO0VEOEZOO0FBQ0Y7QUQ5REU7RUUzQ0U7SUFhSSxhQUFBO0lBQ0EsdUJBQUE7RURnR047QUFDRjtBQy9GTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGlHUjtBRDlFRTtFRXRCSTtJQUtJLGtCQUFBO0VEbUdSO0FBQ0Y7QUQ5RUU7RUUzQkk7SUFRSSxrQkFBQTtFRHFHUjtBQUNGO0FEOUVFO0VFaENJO0lBV0ksa0JBQUE7RUR1R1I7QUFDRjtBRDlFRTtFRXJDSTtJQWNJLGVBQUE7RUR5R1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnQtbGlzdC1pdGVtL2NvbXBvbmVudC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JzOiAoXHJcbiAgXCJib3gtc2hhZG93LWNvbG9yXCI6IHJnYmEoMCwgMCwgMCwgMC40KSxcclxuICBcInBlYWNoQ29sb3JcIjogcmdiYSgyMTIsIDExMywgMTEzLCAxKSxcclxuICBcImdyZXlEYXJrXCI6IHJnYmEoMCwgMCwgMCwgMC43KSxcclxuICBcImJsdWVIZWFkZXJcIjogIzJjM2U1MCxcclxuICBcIndoaXRlR3JleVwiOiB3aGl0ZXNtb2tlLFxyXG4pO1xyXG5cclxuJGZvbnRTaXplczogKFxyXG4gIFwiaDFcIjogNzJweCxcclxuICBcImgyXCI6IDM2cHgsXHJcbiAgXCJoM1wiOiAyNHB4LFxyXG4pO1xyXG5cclxuQGZ1bmN0aW9uIGdldENvbG9yKCRjb2xvck5hbWUpIHtcclxuICBAcmV0dXJuIG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yTmFtZSk7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBnZXRGb250U2l6ZSgkZm9udCkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkZm9udFNpemVzLCAkZm9udCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xyXG4uZmxleC1jb2x1bW4tY2VudGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFuaW1hdGVkQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4ubXQtNiB7XHJcbiAgbWFyZ2luLXRvcDogNnJlbTtcclxufVxyXG5cclxuLm10LTc1IHtcclxuICBwYWRkaW5nLXRvcDogNzVweDtcclxufVxyXG5cclxuLnVuZGVybGluZUJlZm9yZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuLmZpeGVkLWZ1bGwtaGVpZ2h0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRkLW5vbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmdyYWRpZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyZDM0MzYsICMyYzNlNTApO1xyXG59XHJcblxyXG4vKiBFeHRlbmRhYmxlIGNsYXNzZXMgZW5kICovXHJcblxyXG4vKiBSZXNwb25zaXZlIE1peGlucyAqL1xyXG5cclxuQG1peGluIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBtZWRpdW1QaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyNXB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gbGFyZ2VQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gdGFibGV0TWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBzbWFsbERlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5AbWl4aW4gRXh0cmFMYXJnZURlc2t0b3BNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xyXG4iLCIvKiBFeHRlbmRhYmxlIGNsYXNzZXMgKi9cbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFuaW1hdGVkQmVmb3JlLCAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUsIC5jYXJkIC5jYXJkLWhlYWRlciBhOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSwgLmNhcmQgLmNhcmQtaGVhZGVyIGE6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQsIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XG59XG5cbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXG4vKlJlc3BvbnNpdmUgTWl4aW5zIEVORCAqL1xuLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmQge1xuICAgIG1hcmdpbjogMXJlbSBhdXRvIDAgMXJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2FyZCB7XG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gIH1cbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG59XG4uY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuY2FyZCAuY2FyZC1oZWFkZXIgYSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG4uY2FyZCAuY2FyZC1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmQgLmNhcmQtYm9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5jYXJkIC5jYXJkLWJvZHkgLmNhcmQtYXNpZGUgLmltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY2FyZCAuY2FyZC1ib2R5IC5jYXJkLWFzaWRlIC5pbWctd3JhcHBlciBpbWcge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgfVxufVxuLmNhcmQgLnJldmlld2VkLWJvZHkge1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4uY2FyZCAucmV2aWV3ZWQtYm9keSAuaWNvbi1idW5kbGUgaDYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIGg2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNhcmQgLnJldmlld2VkLWJvZHkgLmljb24tYnVuZGxlIGg2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5jYXJkIC5yZXZpZXdlZC1ib2R5IC5pY29uLWJ1bmRsZSBoNiB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3NfZXh0ZW5kYWJsZXMvaW5kZXgnO1xyXG5cclxuLmNhcmQge1xyXG4gIEBleHRlbmQgLmdyYWRpZW50LWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuICBib3gtc2hhZG93OiAycHggM3B4IDNweCAwIGdldENvbG9yKGJveC1zaGFkb3ctY29sb3IpO1xyXG4gIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0byAwIDFyZW07XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGxhcmdlUGhvbmVNaXhpbiB7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICB9XHJcbiAgQGluY2x1ZGUgdGFibGV0TWl4aW4ge1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgfVxyXG4gIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2V0Q29sb3IoYmx1ZUhlYWRlcik7XHJcbiAgICBhIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIH1cclxuICAgICAgQGV4dGVuZCAuYW5pbWF0ZWRCZWZvcmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIEBpbmNsdWRlIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIGxhcmdlRGVza3RvcE1peGluIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1hc2lkZSB7XHJcbiAgICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAucmV2aWV3ZWQtYm9keSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pY29uLWJ1bmRsZSB7XHJcbiAgICAgIEBpbmNsdWRlIHNtYWxsUGhvbmVNaXhpbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbGFyZ2VQaG9uZU1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIHRhYmxldE1peGluIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGg2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICBAaW5jbHVkZSBsYXJnZVBob25lTWl4aW4ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSB0YWJsZXRNaXhpbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIHNtYWxsRGVza3RvcE1peGluIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbGFyZ2VEZXNrdG9wTWl4aW4ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
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
      styles: [".flex-column-center[_ngcontent-%COMP%], .loader-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.animatedBefore[_ngcontent-%COMP%] {\n  position: relative;\n  color: whitesmoke;\n  padding: 5px;\n}\n.animatedBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: whitesmoke;\n  transition: 0.4s;\n}\n.animatedBefore[_ngcontent-%COMP%]:hover::before {\n  content: \"\";\n  width: 100%;\n  transition: 0.4s;\n}\n.mt-6[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n}\n.mt-75[_ngcontent-%COMP%] {\n  padding-top: 75px;\n}\n.underlineBefore[_ngcontent-%COMP%] {\n  position: relative;\n}\n.underlineBefore[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 2px;\n  background-color: whitesmoke;\n}\n.fixed-full-height[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n}\n.td-none[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.gradient-background[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #2d3436, #2c3e50);\n}\n\n\n\n.loader-wrapper[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1001;\n}\n.lds-dual-ring[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n}\n.lds-dual-ring[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  width: 150px;\n  height: 150px;\n  margin: 8px;\n  border-radius: 50%;\n  border: 6px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: lds-dual-ring 1.2s linear infinite;\n          animation: lds-dual-ring 1.2s linear infinite;\n}\n@-webkit-keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL0Q6XFx3b3Jrc3BhY2VcXHNlYXZ1c1xcc3VibWFyaW5lLXRlYW0uZ2l0aHViLmlvL3NyY1xcYXNzZXRzXFxzY3NzX2V4dGVuZGFibGVzXFxfaW5kZXguc2NzcyIsInNyYy9hcHAvc2hhcmVkL2h0dHAtbG9hZGVyL2h0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaHR0cC1sb2FkZXIvRDpcXHdvcmtzcGFjZVxcc2VhdnVzXFxzdWJtYXJpbmUtdGVhbS5naXRodWIuaW8vc3JjXFxhcHBcXHNoYXJlZFxcaHR0cC1sb2FkZXJcXGh0dHAtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQSx1QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDckJGO0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxpQkFBQTtBQ3JCRjtBRHdCQTtFQUNFLGtCQUFBO0FDckJGO0FEd0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDckJGO0FEdUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0UscUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxxREFBQTtBQ3BCRjtBRHVCQSwyQkFBQTtBQUVBLHNCQUFBO0FBcUNBLHlCQUFBO0FFaklBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUR5RUY7QUNyRUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEd0VGO0FDdEVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtVQUFBLDZDQUFBO0FEeUVGO0FDdkVBO0VBQ0U7SUFDRSx1QkFBQTtFRDBFRjtFQ3hFQTtJQUNFLHlCQUFBO0VEMEVGO0FBQ0Y7QUNoRkE7RUFDRTtJQUNFLHVCQUFBO0VEMEVGO0VDeEVBO0lBQ0UseUJBQUE7RUQwRUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9odHRwLWxvYWRlci9odHRwLWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvcnM6IChcclxuICBcImJveC1zaGFkb3ctY29sb3JcIjogcmdiYSgwLCAwLCAwLCAwLjQpLFxyXG4gIFwicGVhY2hDb2xvclwiOiByZ2JhKDIxMiwgMTEzLCAxMTMsIDEpLFxyXG4gIFwiZ3JleURhcmtcIjogcmdiYSgwLCAwLCAwLCAwLjcpLFxyXG4gIFwiYmx1ZUhlYWRlclwiOiAjMmMzZTUwLFxyXG4gIFwid2hpdGVHcmV5XCI6IHdoaXRlc21va2UsXHJcbik7XHJcblxyXG4kZm9udFNpemVzOiAoXHJcbiAgXCJoMVwiOiA3MnB4LFxyXG4gIFwiaDJcIjogMzZweCxcclxuICBcImgzXCI6IDI0cHgsXHJcbik7XHJcblxyXG5AZnVuY3Rpb24gZ2V0Q29sb3IoJGNvbG9yTmFtZSkge1xyXG4gIEByZXR1cm4gbWFwLWdldCgkY29sb3JzLCAkY29sb3JOYW1lKTtcclxufVxyXG5cclxuQGZ1bmN0aW9uIGdldEZvbnRTaXplKCRmb250KSB7XHJcbiAgQHJldHVybiBtYXAtZ2V0KCRmb250U2l6ZXMsICRmb250KTtcclxufVxyXG5cclxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzICovXHJcbi5mbGV4LWNvbHVtbi1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRCZWZvcmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5hbmltYXRlZEJlZm9yZTpob3Zlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5tdC02IHtcclxuICBtYXJnaW4tdG9wOiA2cmVtO1xyXG59XHJcblxyXG4ubXQtNzUge1xyXG4gIHBhZGRpbmctdG9wOiA3NXB4O1xyXG59XHJcblxyXG4udW5kZXJsaW5lQmVmb3JlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVCZWZvcmU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGQtbm9uZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZ3JhZGllbnQtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJkMzQzNiwgIzJjM2U1MCk7XHJcbn1cclxuXHJcbi8qIEV4dGVuZGFibGUgY2xhc3NlcyBlbmQgKi9cclxuXHJcbi8qIFJlc3BvbnNpdmUgTWl4aW5zICovXHJcblxyXG5AbWl4aW4gc21hbGxQaG9uZU1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIG1lZGl1bVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzI1cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBsYXJnZVBob25lTWl4aW4ge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiB0YWJsZXRNaXhpbiB7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIHNtYWxsRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuQG1peGluIGxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbkBtaXhpbiBFeHRyYUxhcmdlRGVza3RvcE1peGluIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXHJcbiIsIi8qIEV4dGVuZGFibGUgY2xhc3NlcyAqL1xuLmZsZXgtY29sdW1uLWNlbnRlciwgLmxvYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZEJlZm9yZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmFuaW1hdGVkQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uYW5pbWF0ZWRCZWZvcmU6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4ubXQtNiB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG59XG5cbi5tdC03NSB7XG4gIHBhZGRpbmctdG9wOiA3NXB4O1xufVxuXG4udW5kZXJsaW5lQmVmb3JlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udW5kZXJsaW5lQmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4uZml4ZWQtZnVsbC1oZWlnaHQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGQtbm9uZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmdyYWRpZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmQzNDM2LCAjMmMzZTUwKTtcbn1cblxuLyogRXh0ZW5kYWJsZSBjbGFzc2VzIGVuZCAqL1xuLyogUmVzcG9uc2l2ZSBNaXhpbnMgKi9cbi8qUmVzcG9uc2l2ZSBNaXhpbnMgRU5EICovXG4ubG9hZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4ubGRzLWR1YWwtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4ubGRzLWR1YWwtcmluZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgYW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzX2V4dGVuZGFibGVzL2luZGV4JztcclxuLmxvYWRlci13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIEBleHRlbmQgLmZsZXgtY29sdW1uLWNlbnRlcjtcclxufVxyXG5cclxuLmxkcy1kdWFsLXJpbmcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4ubGRzLWR1YWwtcmluZzphZnRlciB7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xyXG4gIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
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
          var _this32 = this;

          this.firestore.collection("reviews/".concat(reviewId, "/upvotes")).add({
            username: user,
            upvote: value
          })["catch"](function (error) {
            _this32.ts.error(error.message, 'Error:');
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
          element = element.data.timeStamp.toDate();
          return moment__WEBPACK_IMPORTED_MODULE_1__(element).format('DD. MM. YYYY');
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
          var _this33 = this;

          this.active = theme;
          Object.keys(this.active.properties).forEach(function (property) {
            document.documentElement.style.setProperty(property, _this33.active.properties[property]);
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
        '--navColor': '#2c3e50'
      }
    };
    var dark = {
      name: 'dark',
      properties: {
        '--navColor': 'white'
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
    /*! D:\workspace\seavus\submarine-team.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map