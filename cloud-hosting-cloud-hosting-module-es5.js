function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloud-hosting-cloud-hosting-module"], {
  /***/
  "./src/app/cloud-hosting/cloud-hosting.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cloud-hosting/cloud-hosting.module.ts ***!
    \*******************************************************/

  /*! exports provided: CloudHostingModule */

  /***/
  function srcAppCloudHostingCloudHostingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloudHostingModule", function () {
      return CloudHostingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
    /* harmony import */


    var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sofbox/sofbox.module */
    "./src/app/sofbox/sofbox.module.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/cloud-hosting/index/index.component.ts");
    /* harmony import */


    var _components_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/slider/slider.module */
    "./src/app/cloud-hosting/components/slider/slider.module.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/cloud-hosting/components/about/about.component.ts");
    /* harmony import */


    var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/pricing/pricing.component */
    "./src/app/cloud-hosting/components/pricing/pricing.component.ts");
    /* harmony import */


    var _components_features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/features/features.component */
    "./src/app/cloud-hosting/components/features/features.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/cloud-hosting/components/map/map.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/cloud-hosting/components/counter/counter.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/cloud-hosting/components/blog/blog.component.ts");
    /* harmony import */


    var _components_service_tabs_service_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/service-tabs/service-tabs.component */
    "./src/app/cloud-hosting/components/service-tabs/service-tabs.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
    }];

    var CloudHostingModule = function CloudHostingModule() {
      _classCallCheck(this, CloudHostingModule);
    };

    CloudHostingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CloudHostingModule
    });
    CloudHostingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CloudHostingModule_Factory(t) {
        return new (t || CloudHostingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _components_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__["SliderModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_3__["CountToModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CloudHostingModule, {
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_11__["CounterComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"], _components_service_tabs_service_tabs_component__WEBPACK_IMPORTED_MODULE_13__["ServiceTabsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__["SliderModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_3__["CountToModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CloudHostingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_8__["PricingComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_11__["CounterComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"], _components_service_tabs_service_tabs_component__WEBPACK_IMPORTED_MODULE_13__["ServiceTabsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _components_slider_slider_module__WEBPACK_IMPORTED_MODULE_6__["SliderModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_3__["CountToModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/about/about.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/cloud-hosting/components/about/about.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppCloudHostingComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    function AboutComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.description);
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.List = [{
          title: 'Connect your cloud',
          image: './assets/sofbox-v2/images/home-6/600.png',
          description: 'There are many variations of passages of Lorem Ipsum available, in'
        }, {
          title: 'Choose a domain',
          image: './assets/sofbox-v2/images/home-6/602.png',
          description: 'There are many variations of passages of Lorem Ipsum available, in'
        }, {
          title: 'Add Your Content',
          image: './assets/sofbox-v2/images/home-6/613.png',
          description: 'There are many variations of passages of Lorem Ipsum available, in'
        }];
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
      decls: 4,
      vars: 1,
      consts: [["id", "iq-about"], [1, "container"], [1, "row", "pt-4", "pr-3", "pl-3", "fancy-service-list", "wow", "fadeInUp", "text-center"], ["class", "col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "fancy-service-detail"], [1, "iq-img"], ["alt", "fancy-list", 1, "fancy-list-img", 3, "src"], [1, "ion", "ion-checkmark"], [1, "mb-0"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_div_3_Template, 9, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/blog/blog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/cloud-hosting/components/blog/blog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppCloudHostingComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_posts_v_two_posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/v-two-posts/v-two-posts.component */
    "./src/app/sofbox/components/v-two-posts/v-two-posts.component.ts");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);

        this.titleSectionProp = {
          title: 'Latest Posts',
          description: 'If you are planning on developing a product landing.'
        };
        this.List = [{
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.',
          datetime: 'November 28, 2019',
          image: './assets/sofbox-v2/images/home-1/16.jpg'
        }, {
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.',
          datetime: 'November 28, 2019',
          image: './assets/sofbox-v2/images/home-1/17.jpg'
        }, {
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.',
          datetime: 'November 28, 2019',
          image: './assets/sofbox-v2/images/home-1/18.jpg'
        }, {
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.',
          datetime: 'November 28, 2019',
          image: './assets/sofbox-v2/images/home-1/19.jpg'
        }, {
          title: 'Life Lack Meaning',
          description: 'It is a long established fact that a reader will be distracted by the readable.',
          datetime: 'November 28, 2019',
          image: './assets/sofbox-v2/images/home-1/20.jpg'
        }];
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 7,
      vars: 2,
      consts: [["id", "iq-blog", 1, "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], [3, "postList"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-v-two-posts", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postList", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _sofbox_components_v_two_posts_v_two_posts_component__WEBPACK_IMPORTED_MODULE_2__["VTwoPostsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/counter/counter.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/cloud-hosting/components/counter/counter.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppCloudHostingComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
      return CounterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");

    function CounterComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", list_r1.value)("from", 0)("duration", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.cost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
      }
    }

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'Join our global community',
          description: 'If you are planning on developing a product landing'
        };
        this.List = [{
          title: 'Customers',
          value: '4',
          cost: 'M'
        }, {
          title: 'Customers',
          value: '150',
          cost: 'M'
        }, {
          title: 'Customers',
          value: '4',
          cost: 'B'
        }];
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CounterComponent;
    }();

    CounterComponent.ɵfac = function CounterComponent_Factory(t) {
      return new (t || CounterComponent)();
    };

    CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CounterComponent,
      selectors: [["app-counter"]],
      decls: 6,
      vars: 2,
      consts: [[1, "pt-0", "text-center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "iq-timer", "counter-horizontal", 2, "background", "#e0f7f2"], [1, "timer-details"], [1, "timer", 2, "color", "#000000", 3, "CountTo", "from", "duration"], [1, "total-cust", 2, "color", "#000000"], ["aria-hidden", "true", 1, "ion-android-add", 2, "color", "#000000"], [1, "border-effect"], [1, "title-saas"], [2, "color", "#000000"]],
      template: function CounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CounterComponent_div_5_Template, 12, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_count_to__WEBPACK_IMPORTED_MODULE_3__["CountToDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-counter',
          templateUrl: './counter.component.html',
          styleUrls: ['./counter.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/features/features.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/cloud-hosting/components/features/features.component.ts ***!
    \*************************************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppCloudHostingComponentsFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FeaturesComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
      }
    }

    var FeaturesComponent = /*#__PURE__*/function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'What can we help you?',
          description: 'If you are planning on developing a product landing',
          titleClass: 'text-white',
          descClass: 'text-white'
        };
        this.List = [{
          title: 'Marketing',
          image: './assets/sofbox-v2/images/home-6/606.png'
        }, {
          title: 'VPS',
          image: './assets/sofbox-v2/images/home-6/607.png'
        }, {
          title: 'Email',
          image: './assets/sofbox-v2/images/home-6/608.png'
        }, {
          title: 'SEO',
          image: './assets/sofbox-v2/images/home-6/609.png'
        }, {
          title: 'Reseller Hosting',
          image: './assets/sofbox-v2/images/home-6/606.png'
        }, {
          title: 'Web Security',
          image: './assets/sofbox-v2/images/home-6/607.png'
        }, {
          title: 'Business Hosting',
          image: './assets/sofbox-v2/images/home-6/608.png'
        }, {
          title: 'Fast Deployment',
          image: './assets/sofbox-v2/images/home-6/609.png'
        }, {
          title: 'Protect and backup',
          image: './assets/sofbox-v2/images/home-6/607.png'
        }];
      }

      _createClass(FeaturesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeaturesComponent;
    }();

    FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
      return new (t || FeaturesComponent)();
    };

    FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturesComponent,
      selectors: [["app-features"]],
      decls: 14,
      vars: 2,
      consts: [["id", "iq-feature", 1, "home-six-bg"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], [1, "sofbox-feature-circle", "wow", "zoomIn", "postion-relative"], [1, "sofbox-img"], [1, "list-inline", "mb-0"], ["class", "list-inline-item", 4, "ngFor", "ngForOf"], [1, "dot-circle"], [1, "effect-circle"], [1, "main-circle"], [1, "circle-bg"], ["src", "./assets/sofbox-v2/images/home-6/610.png", "alt", "fancy-list", 1, "fancy-list-img"], [1, "list-inline-item"], [1, "feature-info"], [1, "feature-img"], [3, "src"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FeaturesComponent_li_8_Template, 6, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-features',
          templateUrl: './features.component.html',
          styleUrls: ['./features.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/map/map.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/cloud-hosting/components/map/map.component.ts ***!
    \***************************************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppCloudHostingComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent() {
        _classCallCheck(this, MapComponent);
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)();
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["app-map"]],
      decls: 5,
      vars: 0,
      consts: [[1, "pt-0", "text-center"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["src", "./assets/sofbox-v2/images/home-6/611.png", "alt", "blogimage1", 1, "img-fluid", "center-block"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map',
          templateUrl: './map.component.html',
          styleUrls: ['./map.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/pricing/pricing.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/cloud-hosting/components/pricing/pricing.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppCloudHostingComponentsPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PricingComponent_div_2_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", service_r4.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r4.title);
      }
    }

    function PricingComponent_div_2_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.arrow_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PricingComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PricingComponent_div_2_li_14_Template, 4, 2, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Quickstart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PricingComponent_div_2_div_18_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("row align-items-center ", list_r1["class"] != undefined && list_r1["class"] ? list_r1["class"] : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fancy-list-img ", list_r1.hoverClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r1.services);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", list_r1.arrow_image);
      }
    }

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);

        this.List = [{
          title: 'Starter',
          image: './assets/sofbox-v2/images/home-6/602.png',
          arrow_image: './assets/sofbox-v2/images/home-6/603.png',
          hoverClass: 'purple-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [{
            title: 'Single Domain',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '15 GB Disk Space',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '100 GB Transfer',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '5 Email Account ',
            icon: 'ion ion-checkmark-round'
          }, {
            title: 'Free Domain Registration',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '99.9% Uptime Guarantee',
            icon: 'ion ion-checkmark-round'
          }]
        }, {
          title: 'Deluxe',
          image: './assets/sofbox-v2/images/home-6/602.png',
          arrow_image: './assets/sofbox-v2/images/home-6/605.png',
          "class": 'flex-row-reverse',
          hoverClass: 'org-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [{
            title: 'Single Domain',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '15 GB Disk Space',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '100 GB Transfer',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '5 Email Account ',
            icon: 'ion ion-checkmark-round'
          }, {
            title: 'Free Domain Registration',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '99.9% Uptime Guarantee',
            icon: 'ion ion-checkmark-round'
          }]
        }, {
          title: 'Ultimate',
          image: './assets/sofbox-v2/images/home-6/602.png',
          hoverClass: 'green-hover',
          price: '$29',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          services: [{
            title: 'Single Domain',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '15 GB Disk Space',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '100 GB Transfer',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '5 Email Account ',
            icon: 'ion ion-checkmark-round'
          }, {
            title: 'Free Domain Registration',
            icon: 'ion ion-checkmark-round'
          }, {
            title: '99.9% Uptime Guarantee',
            icon: 'ion ion-checkmark-round'
          }]
        }];
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    PricingComponent.ɵfac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 3,
      vars: 1,
      consts: [[1, "pt-0"], [1, "container"], [3, "class", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], ["alt", "img", 1, "img-fluid", 3, "src"], [1, "fancy-list-box", "wow", "fadeInUp", "text-left"], [1, "service-detail", "align-self-center"], [1, "mb-2"], [1, "text-left"], [1, "iq-list", "mb-5"], [4, "ngFor", "ngForOf"], ["href", "#", 1, "button", "blue-btn", "gradient-btn", "button-icon"], [1, "btn-effect"], ["class", "col-lg-12 text-center", 4, "ngIf"], [3, "ngClass"], [1, "col-lg-12", "text-center"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PricingComponent_div_2_Template, 19, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pricing',
          templateUrl: './pricing.component.html',
          styleUrls: ['./pricing.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/service-tabs/service-tabs.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/cloud-hosting/components/service-tabs/service-tabs.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ServiceTabsComponent */

  /***/
  function srcAppCloudHostingComponentsServiceTabsServiceTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceTabsComponent", function () {
      return ServiceTabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ServiceTabsComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceTabsComponent_li_8_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var list_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.tabActive(list_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", list_r2.active !== undefined && list_r2.active ? "active1 show" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", "#" + list_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", list_r2.active !== undefined ? true : false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r2.description);
      }
    }

    function ServiceTabsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tab-pane fade ", list_r5.active !== undefined && list_r5.active ? "active show" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", list_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ServiceTabsComponent = /*#__PURE__*/function () {
      function ServiceTabsComponent() {
        _classCallCheck(this, ServiceTabsComponent);

        this.titleSectionProp = {
          "class": 'text-center',
          title: 'What Sofbox can do for you?',
          description: 'If you are planning on developing a product landing'
        };
        this.List = [{
          title: 'Unique Design',
          id: 'tab-unique-design',
          image: './assets/sofbox-v2/images/home-6/612.jpg',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          active: true
        }, {
          title: 'Easy to Customize',
          id: 'tab-easy-to-customize',
          image: './assets/sofbox-v2/images/home-6/615.png',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }, {
          title: 'Multipurpose layout',
          id: 'tab-multipurpose-layout',
          image: './assets/sofbox-v2/images/home-6/612.jpg',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }];
      }

      _createClass(ServiceTabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tabActive",
        value: function tabActive(id) {
          // @ts-ignore
          var jquery = window.$;
          jquery('.show_content').find('.active').removeClass('active show');
          jquery('.nav-item').find('.active1').removeClass('active1');
          jquery('#' + id).addClass('active show');
        }
      }]);

      return ServiceTabsComponent;
    }();

    ServiceTabsComponent.ɵfac = function ServiceTabsComponent_Factory(t) {
      return new (t || ServiceTabsComponent)();
    };

    ServiceTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceTabsComponent,
      selectors: [["app-service-tabs"]],
      decls: 11,
      vars: 3,
      consts: [[1, "pt-0"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], [1, "row", "custom-tab", "verticaltab3", "flex-row-reverse"], [1, "col-lg-6", "col-md-12"], ["id", "pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "nav-pills", "nav-pills-style-3", "mb-5"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "show_content"], [3, "id", "class", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["data-toggle", "pill", "role", "tab", 3, "href", "click"], [1, "media"], [1, "media-body"], [1, "mb-2", "active-title"], [1, "mb-0"], [3, "id"], ["alt", "img", 1, "img-fluid", 3, "src"]],
      template: function ServiceTabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiceTabsComponent_li_8_Template, 8, 7, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceTabsComponent_div_10_Template, 2, 5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9zZXJ2aWNlLXRhYnMvc2VydmljZS10YWJzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-service-tabs',
          templateUrl: './service-tabs.component.html',
          styleUrls: ['./service-tabs.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/slider/slider.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/cloud-hosting/components/slider/slider.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppCloudHostingComponentsSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SliderComponent = /*#__PURE__*/function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 35,
      vars: 0,
      consts: [[1, "rs-p-wp-fix"], ["id", "rev_slider_6_1_wrapper", "data-alias", "sofbox-6", "data-source", "gallery", 2, "background", "transparent", "padding", "0", "margin", "0px auto", "margin-top", "0", "margin-bottom", "0"], ["id", "rev_slider_6_1", "data-version", "6.1.3", 2, "display", "none"], ["data-key", "rs-3", "id", "iq-home", "data-title", "Slide", "data-anim", "ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"], ["src", "./assets/sofbox-v2/revslider/assets/index-6/home6_rev_01.png", "alt", "img", "title", "home6_rev_01.png", "width", "1600", "height", "852", "data-bg", "f:100% 100%;", "data-no-retina", "", 1, "rev-slidebg"], ["id", "slider-3-slide-3-layer-18", "data-type", "image", "data-rsp_ch", "on", "data-xy", "x:r,r,c,c;y:b,b,m,m;yo:0,0,141px,144px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:727px,727px,316px,203px;h:531px,531px,231px,148px;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:600;sp:1000;sR:600;", "data-frame_999", "o:0;st:w;sR:7400;", 2, "z-index", "8", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-6/home6_rev_02.png", "alt", "img", "width", "727", "height", "531", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-19", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,c,c;xo:162px,162px,0,2px;y:t,t,m,m;yo:280px,280px,-190px,-135px;", "data-text", "w:normal;s:46,46,30,30;l:60,60,40,36;a:left,left,left,center;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:1000;sp:1000;sR:1000;", "data-frame_999", "o:0;st:w;sR:7000;", 1, "now-font", 2, "z-index", "9", "font-family", "var(--title-font-family)"], ["id", "slider-3-slide-3-layer-21", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:168px,168px,172px,-131px;y:t,t,t,m;yo:468px,468px,229px,10px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:1800;sp:1000;sR:1800;", "data-frame_999", "o:0;st:w;sR:6200;", 2, "z-index", "12", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-22", "data-type", "text", "data-color", "#14d9fc", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:212px,212px,221px,-128px;y:t,t,t,m;yo:469px,469px,229px,30px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2000;sp:1000;sR:2000;", "data-frame_999", "o:0;st:w;sR:6000;", 2, "z-index", "13", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-23", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:277px,277px,281px,-8px;y:t,t,t,m;yo:467px,467px,229px,8px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:2200;sp:1000;sR:2200;", "data-frame_999", "o:0;st:w;sR:5800;", 2, "z-index", "14", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-24", "data-type", "text", "data-color", "#14d9fc", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:314px,314px,319px,-8px;y:t,t,t,m;yo:469px,469px,230px,30px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:1600;sp:1000;sR:1600;", "data-frame_999", "o:0;st:w;sR:6400;", 2, "z-index", "11", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-25", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:390px,390px,377px,116px;y:t,t,t,m;yo:467px,467px,228px,6px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:2400;sp:1000;sR:2400;", "data-frame_999", "o:0;st:w;sR:5600;", 2, "z-index", "15", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-26", "data-type", "text", "data-color", "#14d9fc", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:429px,429px,419px,120px;y:t,t,t,m;yo:470px,470px,228px,27px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:2600;sp:1000;sR:2600;", "data-frame_999", "o:0;st:w;sR:5400;", 2, "z-index", "16", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-27", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:492px,492px,476px,-69px;y:t,t,t,m;yo:470px,470px,227px,10px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:2800;sp:1000;sR:2800;", "data-frame_999", "o:0;st:w;sR:5200;", 2, "z-index", "17", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-28", "data-type", "text", "data-color", "#14d9fc", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:524px,524px,513px,-69px;y:t,t,t,m;yo:471px,471px,228px,30px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:3000;sp:1000;sR:3000;", "data-frame_999", "o:0;st:w;sR:5000;", 2, "z-index", "18", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-29", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:591px,591px,569px,49px;y:t,t,t,m;yo:473px,473px,226px,8px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:3200;sp:1000;sR:3200;", "data-frame_999", "o:0;st:w;sR:4800;", 2, "z-index", "19", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-30", "data-type", "text", "data-color", "#14d9fc", "data-rsp_ch", "on", "data-xy", "x:l,l,l,c;xo:620px,620px,603px,52px;y:t,t,t,m;yo:474px,474px,226px,29px;", "data-text", "w:normal;s:16;l:25,25,26,26;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:3400;sp:1000;sR:3400;", "data-frame_999", "o:0;st:w;sR:4600;", 2, "z-index", "20", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-31", "data-type", "text", "data-rsp_ch", "on", "data-xy", "x:l,l,c,c;xo:163px,163px,0,-7px;y:t,t,m,m;yo:359px,359px,-120px,-62px;", "data-text", "w:normal;s:16,16,16,14;l:30,30,26,28;a:left,left,center,center;", "data-frame_0", "sX:0.8;sY:0.8;", "data-frame_1", "e:Power4.easeOut;st:1400;sp:1000;sR:1400;", "data-frame_999", "o:0;st:w;sR:6600;", 2, "z-index", "10", "font-family", "var(--body-font-family)"], [1, "rs-bottom", 2, "visibility", "hidden !important"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "rs-module-wrap", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rs-module", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "rs-slides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "rs-slide", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "rs-layer", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "rs-layer", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unlimited web hosting ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "rs-layer", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "rs-layer", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "$9.99 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "rs-layer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ".net ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "rs-layer", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "$9.99 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "rs-layer", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".Org ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "rs-layer", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "$9.99 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "rs-layer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".Co ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "rs-layer", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "$9.99 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "rs-layer", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ".Uk ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "rs-layer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "$9.99 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "rs-layer", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "There are many variations of passages of Lorem Ipsum available,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " but the majority have suffered alteration in some form, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "rs-progress", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkLWhvc3RpbmcvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/components/slider/slider.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/cloud-hosting/components/slider/slider.module.ts ***!
    \******************************************************************/

  /*! exports provided: SliderModule */

  /***/
  function srcAppCloudHostingComponentsSliderSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderModule", function () {
      return SliderModule;
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


    var _slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./slider.component */
    "./src/app/cloud-hosting/components/slider/slider.component.ts");

    var SliderModule = function SliderModule() {
      _classCallCheck(this, SliderModule);
    };

    SliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SliderModule
    });
    SliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SliderModule_Factory(t) {
        return new (t || SliderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SliderModule, {
        declarations: [_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_slider_component__WEBPACK_IMPORTED_MODULE_2__["SliderComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cloud-hosting/index/index.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/cloud-hosting/index/index.component.ts ***!
    \********************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppCloudHostingIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_sofbox_v2_images_logo_color_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../assets/sofbox-v2/images/logo-color.png */
    "./src/assets/sofbox-v2/images/logo-color.png");
    /* harmony import */


    var _assets_sofbox_v2_images_home_2_logo_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/sofbox-v2/images/home-2/logo-white.png */
    "./src/assets/sofbox-v2/images/home-2/logo-white.png");
    /* harmony import */


    var _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sofbox/plugins.service */
    "./src/app/sofbox/plugins.service.ts");
    /* harmony import */


    var _sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component */
    "./src/app/sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component.ts");
    /* harmony import */


    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/slider/slider.component */
    "./src/app/cloud-hosting/components/slider/slider.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/about/about.component */
    "./src/app/cloud-hosting/components/about/about.component.ts");
    /* harmony import */


    var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/pricing/pricing.component */
    "./src/app/cloud-hosting/components/pricing/pricing.component.ts");
    /* harmony import */


    var _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/features/features.component */
    "./src/app/cloud-hosting/components/features/features.component.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/map/map.component */
    "./src/app/cloud-hosting/components/map/map.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/counter/counter.component */
    "./src/app/cloud-hosting/components/counter/counter.component.ts");
    /* harmony import */


    var _components_service_tabs_service_tabs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/service-tabs/service-tabs.component */
    "./src/app/cloud-hosting/components/service-tabs/service-tabs.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_v_two_testimonial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../sofbox/components/v-two-testimonial/v-two-testimonial.component */
    "./src/app/sofbox/components/v-two-testimonial/v-two-testimonial.component.ts");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_carousel2_v_two_testimonial_carousel2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../sofbox/components/v-two-testimonial-carousel2/v-two-testimonial-carousel2.component */
    "./src/app/sofbox/components/v-two-testimonial-carousel2/v-two-testimonial-carousel2.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../components/blog/blog.component */
    "./src/app/cloud-hosting/components/blog/blog.component.ts");
    /* harmony import */


    var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */
    "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component */
    "./src/app/sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component.ts"); // @ts-ignore
    // @ts-ignore


    var IndexComponent = /*#__PURE__*/function () {
      function IndexComponent(plugins) {
        _classCallCheck(this, IndexComponent);

        this.plugins = plugins;
        this.navLogo = _assets_sofbox_v2_images_logo_color_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.footerLogo = _assets_sofbox_v2_images_home_2_logo_white_png__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.footerText = 'It is a long established fact that a reader will be distracted by the readable content.';
        this.footerTitle = 'Ready to get started?';
        this.footerDescription = 'It is a long established fact that a page when looking at its layout.';
        this.footerClass = 'blue-bg';
        this.navItems = [{
          href: '#iq-home',
          title: 'Home',
          _is_active: true
        }, {
          href: '#iq-about',
          title: 'About Us'
        }, {
          href: '#iq-feature',
          title: 'Feature'
        }, {
          href: '#iq-blog',
          title: 'Blog'
        }, {
          href: '#iq-contact',
          title: 'Contact Us'
        }];
        this.List = [{
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: './assets/sofbox-v2/images/home-2/215.jpeg',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        }, {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: './assets/sofbox-v2/images/home-2/216.jpeg',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        }, {
          name: 'Walhan Bobe',
          design: 'CEO Sofbox',
          image: './assets/sofbox-v2/images/home-2/217.jpeg',
          description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.'
        }];
        this.titleSectionProp = {
          title: 'Get tips & tricks on how to skyrocket your sales.',
          description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!'
        };
        this.testimonialSectionProp = {
          "class": 'pb-0'
        };
        this.testimonialList1 = [{
          name: 'Alex xander',
          designation: 'CEO Sofbox',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.',
          image: './assets/sofbox-v2/images/home-1/25.jpeg'
        }, {
          name: 'Julia Aann',
          designation: 'COO Sofbox',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.',
          image: './assets/sofbox-v2/images/home-1/26.jpeg'
        }, {
          name: 'Mac Znder',
          designation: 'Manager Sofbox',
          description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium vero eos et consectetur accus adip adip.',
          image: './assets/sofbox-v2/images/home-1/27.jpeg'
        }];
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this;
          current.plugins.revolutionSlider(); // tslint:disable-next-line:only-arrow-functions

          setTimeout(function () {
            current.plugins.index();
          }, 200);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.ɵfac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]));
    };

    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 71,
      vars: 11,
      consts: [["id", "loading"], ["id", "loading-center"], ["src", "./assets/sofbox-v2/images/loader.gif", "alt", "loader"], [3, "logoImg", "navItemList"], [1, "main-content"], [3, "sectionProp"], ["imageList1", "", 1, "bg-img-jump", "left"], ["data-wow-delay", "0.2s", 1, "wow", "zoomIn"], ["src", "./assets/sofbox-v2/images/home-1/21.jpeg", "alt", "image1", 1, "img-one"], ["data-wow-delay", "0.4s", 1, "wow", "zoomIn"], ["src", "./assets/sofbox-v2/images/home-1/22.jpeg", "alt", "image2", 1, "img-two"], ["data-wow-delay", "0.6s", 1, "wow", "zoomIn"], ["src", "./assets/sofbox-v2/images/home-1/23.jpeg", "alt", "image3", 1, "img-three"], ["data-wow-delay", "0.8s", 1, "wow", "zoomIn"], ["src", "./assets/sofbox-v2/images/home-1/24.jpeg", "alt", "image4", 1, "img-four"], ["testimonialTitle", ""], [3, "titleSectionProp"], ["testimonialList", ""], [3, "testimonialList"], ["imageList2", "", 1, "bg-img-jump", "right"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription", "footerClass"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-v-two-header-style1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-counter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-service-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-v-two-testimonial", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-v-two-section-title", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-v-two-testimonial-carousel2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-v-two-footer-style2", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "About Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "How it Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-v-two-testimonial-carousel", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionProp", ctx.testimonialSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.testimonialList1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription)("footerClass", ctx.footerClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
        }
      },
      directives: [_sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_4__["VTwoHeaderStyle1Component"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_10__["CounterComponent"], _components_service_tabs_service_tabs_component__WEBPACK_IMPORTED_MODULE_11__["ServiceTabsComponent"], _sofbox_components_v_two_testimonial_v_two_testimonial_component__WEBPACK_IMPORTED_MODULE_12__["VTwoTestimonialComponent"], _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_13__["VTwoSectionTitleComponent"], _sofbox_components_v_two_testimonial_carousel2_v_two_testimonial_carousel2_component__WEBPACK_IMPORTED_MODULE_14__["VTwoTestimonialCarousel2Component"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"], _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_16__["VTwoFooterStyle2Component"], _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_17__["VTwoTestimonialCarouselComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-index',
          templateUrl: './index.component.html',
          styleUrls: ['./index.component.css'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=cloud-hosting-cloud-hosting-module-es5.js.map