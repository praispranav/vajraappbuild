function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-software-payment-software-module"], {
  /***/
  "./src/app/payment-software/components/about/about.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/payment-software/components/about/about.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPaymentSoftwareComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/plugins.service */
    "./src/app/sofbox/plugins.service.ts");
    /* harmony import */


    var _sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/v-two-section-title/v-two-section-title.component */
    "./src/app/sofbox/components/sections/v-two-section-title/v-two-section-title.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
      function AboutComponent(plugins) {
        _classCallCheck(this, AboutComponent);

        this.plugins = plugins;
        this.titleSectionProp = {
          title: 'Why you chose our Payment?',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          "class": 'text-left'
        };
        this.List = [{
          title: 'Secure Payment',
          image: './assets/sofbox-v2/images/home-2/202.png',
          description: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Payment Overview',
          image: './assets/sofbox-v2/images/home-2/203.png',
          description: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Get Discount',
          image: './assets/sofbox-v2/images/home-2/204.png',
          description: 'There are many variations of passages of Lorem Ipsum available.'
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var current = this;
          current.plugins.scrollme();
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]));
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 28,
      vars: 2,
      consts: [["id", "iq-about", 1, "pb-0"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-4"], [3, "titleSectionProp"], [1, "text-left"], [1, "iq-list", "wow", "fadeInUp"], [1, "fa", "fa-check"], ["href", "#", 1, "button", "mt-5", "button-icon"], [1, "btn-effect"], [1, "scrollme", "text-center"], ["data-when", "enter", "data-from", "0.65", "data-to", "0.15", "data-opacity", "1", "data-translatex", "00", "data-translatey", "-600", "data-easing", "linear", "data-rotatez", "-25", 1, "animateme"], ["src", "./assets/sofbox-v2/images/home-2/201.png", "alt", "image", 1, "img-fluid", "scrollme-img"], ["class", "fancy-icon mb-5 wow fadeInUp  text-left", 4, "ngFor", "ngForOf"], [1, "fancy-icon", "mb-5", "wow", "fadeInUp", "text-left"], [1, "media"], [1, "fancy-img"], ["alt", "fancybox", 3, "src"], [1, "media-body"], [1, "mt-0"], [1, "mb-0"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Boost SEO ranking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Visual Reviews");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AboutComponent_div_27_Template, 9, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_2__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIn0= */"]
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
        return [{
          type: _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment-software/components/counter/counter.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/payment-software/components/counter/counter.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppPaymentSoftwareComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    function CounterComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("CountTo", list_r1.value)("from", 0)("duration", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.cost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
      }
    }

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);

        this.titleSectionProp = {
          title: 'Join our global community and get access',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          "class": 'text-left',
          titleClass: 'text-white',
          descClass: 'text-white'
        };
        this.counterList = [{
          title: 'Customers',
          value: '40',
          cost: 'M'
        }, {
          title: 'Transactions',
          value: '150',
          cost: 'M'
        }, {
          title: 'Total value',
          value: '50',
          cost: 'B',
          price: ''
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
      decls: 19,
      vars: 2,
      consts: [[1, "main-bg", "overflow-hidden"], [1, "container"], [1, "row"], [1, "col-lg-6"], [3, "titleSectionProp"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "mobile-effect"], ["data-wow-delay", "0.4s", 1, "img-one", "wow", "fadeInRight"], ["src", "./assets/sofbox-v2/images/home-2/211.png", "alt", "image1"], ["data-wow-delay", "0.6s", 1, "img-two", "wow", "fadeInRight"], ["src", "./assets/sofbox-v2/images/home-2/212.png", "alt", "image2"], ["data-wow-delay", "0.8s", 1, "img-three", "wow", "fadeInRight"], ["src", "./assets/sofbox-v2/images/home-2/213.png", "alt", "image3"], ["data-wow-delay", "1s", 1, "img-four", "wow", "fadeInRight"], ["src", "./assets/sofbox-v2/images/home-2/212.png", "alt", "image4"], ["data-wow-delay", "1.2s", 1, "img-five", "wow", "fadeInRight"], ["src", "./assets/sofbox-v2/images/home-2/211.png", "alt", "image5"], [1, "col-lg-4"], [1, "iq-timer", "counter-vertical"], [1, "timer-details"], [1, "border-effect"], [1, "title-saas"], [1, "timer", 3, "CountTo", "from", "duration"], [1, "total-cust"], ["aria-hidden", "true", 1, "ion-android-add"], [1, "mb-lg-0", "mb-4"]],
      template: function CounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CounterComponent_div_6_Template, 12, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counterList);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_count_to__WEBPACK_IMPORTED_MODULE_3__["CountToDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */"]
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
  "./src/app/payment-software/components/features/features.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/payment-software/components/features/features.component.ts ***!
    \****************************************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppPaymentSoftwareComponentsFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    function FeaturesComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("box-effect shadow-effect wow fadeInUp text-center feature-box-effect ", i_r2 == 0 ? "selected" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);
      }
    }

    var FeaturesComponent = /*#__PURE__*/function () {
      function FeaturesComponent() {
        _classCallCheck(this, FeaturesComponent);

        this.titleSectionProp = {
          title: 'What Sofbox can do for you?',
          description: 'If you are planning on developing a product landing'
        };
        this.List = [{
          title: 'Virtual Card',
          image: './assets/sofbox-v2/images/home-2/203.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Receivable & Payables',
          image: './assets/sofbox-v2/images/home-2/202.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Buyer Protection',
          image: './assets/sofbox-v2/images/home-2/204.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Auto Sync & Backup',
          image: './assets/sofbox-v2/images/home-2/207.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Easy Process',
          image: './assets/sofbox-v2/images/home-2/208.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
        }, {
          title: 'Refund Policy',
          image: './assets/sofbox-v2/images/home-2/209.png',
          desc: 'There are many variations of passages of Lorem Ipsum available.'
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
      decls: 10,
      vars: 2,
      consts: [["id", "iq-feature", 1, "pt-0", "overflow-hidden"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], [1, "row", "position-relative"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "layer_wrap", "iq-objects", "style-one", "right-top"], [1, "iq-objects-01"], ["src", "./assets/sofbox-v2/images/home-2/210.png", "alt", "drive02"], [1, "col-lg-4"], ["data-wow-delay", "0.6s"], [1, "icon-box"], [1, "img-effect", "mb-4"], ["alt", "fancybox", 3, "src"], [1, "mb-2"], [1, "mb-0"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeaturesComponent_div_6_Template, 9, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy9mZWF0dXJlcy9mZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */"]
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
  "./src/app/payment-software/components/services/services.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/payment-software/components/services/services.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppPaymentSoftwareComponentsServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
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

    function ServicesComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("sox-services ", list_r1.hoverClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flaticon ", list_r1.icon, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
      }
    }

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);

        this.titleSectionProp = {
          title: 'Save Your Time & See How It works any platform',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
          "class": 'text-left'
        };
        this.List = [{
          title: 'Make Account',
          icon: 'flaticon-accounting',
          hoverClass: 'purple-hover'
        }, {
          title: 'Select Recipient',
          icon: 'flaticon-reward',
          hoverClass: 'org-hover'
        }, {
          title: 'Send Money',
          icon: 'flaticon-investment',
          hoverClass: 'green-hover'
        }];
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 17,
      vars: 2,
      consts: [[1, "bg-img-two"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "card-img-effect"], ["data-wow-delay", "0.2s", 1, "main-img", "wow", "fadeIn"], ["src", "./assets/sofbox-v2/images/home-2/205.png", "alt", "image1"], ["data-wow-delay", "0.4s", 1, "sub-img", "wow", "rotate-effect-two"], ["src", "./assets/sofbox-v2/images/home-2/206.png", "alt", "image2"], [3, "titleSectionProp"], [1, "row"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "d-block", "text-left", "mt-5"], ["href", "#", 1, "button", "gradient-btn", "button-icon"], [1, "btn-effect"], [1, "col-lg-4"], [1, "sox-icon"], ["aria-hidden", "true"], [1, "text-hover"], [1, "service-number"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-v-two-section-title", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServicesComponent_div_12_Template, 9, 8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sign up now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment-software/components/slider2/slider2.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/payment-software/components/slider2/slider2.component.ts ***!
    \**************************************************************************/

  /*! exports provided: Slider2Component */

  /***/
  function srcAppPaymentSoftwareComponentsSlider2Slider2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Slider2Component", function () {
      return Slider2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Slider2Component = /*#__PURE__*/function () {
      function Slider2Component() {
        _classCallCheck(this, Slider2Component);
      }

      _createClass(Slider2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Slider2Component;
    }();

    Slider2Component.ɵfac = function Slider2Component_Factory(t) {
      return new (t || Slider2Component)();
    };

    Slider2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Slider2Component,
      selectors: [["app-slider2"]],
      decls: 50,
      vars: 0,
      consts: [[1, "rs-p-wp-fix"], [1, "banner-overlap"], ["id", "rev_slider_2_1_wrapper", "data-alias", "sofbox-2", "data-source", "gallery", 2, "background", "transparent", "padding", "0", "margin", "0px auto", "margin-top", "0", "margin-bottom", "0"], ["id", "rev_slider_2_1", "data-version", "6.1.3", 2, "display", "none"], ["data-key", "rs-3", "id", "iq-home", "data-title", "Slide", "data-anim", "ei:d;eo:d;s:1000;r:0;t:fade;sl:0;"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/bg-04.png", "alt", "img", "title", "bg-04.png", "width", "1600", "height", "600", "data-bg", "p:center bottom;", "data-parallax", "off", "data-no-retina", "", 1, "rev-slidebg"], ["id", "slider-3-slide-3-layer-0", "data-type", "text", "data-color", "#1e1e1e", "data-rsp_ch", "on", "data-xy", "x:c;y:m;yo:-100px,-177px,-72px,-36px;", "data-text", "w:normal;s:45,45,40,26;l:60,60,50,36;a:center;", "data-frame_0", "y:100%;", "data-frame_0_mask", "u:t;", "data-frame_1", "st:510;sp:1200;sR:510;", "data-frame_1_mask", "u:t;", "data-frame_999", "o:0;st:w;sR:7290;", 1, "now-font", 2, "z-index", "9", "font-family", "Poppins"], ["id", "slider-3-slide-3-layer-2", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:31px,31px,65px,34px;yo:399px,399px,285px,307px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:166px,166px,85px,52px;h:166px,166px,85px,52px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "sp:1000;", "data-frame_999", "o:0;st:w;sR:8000;", "data-tloop", "u:true;", "data-loop_999", "rZ:360;sp:18000;", 2, "z-index", "13", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/10-1.png", "alt", "img", "width", "209", "height", "209", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-3", "data-type", "text", "data-color", "#8e989f", "data-rsp_ch", "on", "data-xy", "x:c;xo:0,0,-9px,0;y:m;yo:0px,-75px,48px,35px;", "data-text", "w:normal;s:16,16,18,12;l:28,28,30,26;a:center;", "data-frame_0", "y:100%;", "data-frame_0_mask", "u:t;", "data-frame_1", "st:710;sp:1200;sR:710;", "data-frame_1_mask", "u:t;", "data-frame_999", "o:0;st:w;sR:7090;", 2, "z-index", "8", "font-family", "var(--body-font-family)"], ["id", "slider-3-slide-3-layer-5", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:962px,962px,496px,279px;yo:422px,422px,304px,314px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:117px,117px,86px,53px;h:117px,117px,86px,53px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "sp:1000;", "data-frame_999", "o:0;st:w;sR:8000;", "data-tloop", "u:true;", "data-loop_999", "rZ:360;sp:18000;", 2, "z-index", "11", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-6", "data-type", "image", "data-rsp_ch", "on", "data-xy", "x:c;xo:259px,259px,149px,67px;yo:447px,447px,323px,325px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:169px,169px,105px,64px;h:89px,89px,55px,33px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2190;sp:1000;sR:2190;", "data-frame_999", "o:0;st:w;sR:5810;", 1, "rs-pxl-3", 2, "z-index", "14", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/12.png", "alt", "img", "width", "183", "height", "96", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-7", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:1275px,1275px,661px,406px;yo:367px,367px,283px,311px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:177px,177px,91px,56px;h:177px,177px,91px,56px;", "data-frame_999", "o:0;st:w;sR:8700;", "data-tloop", "u:true;", "data-loop_999", "rZ:360;sp:18000;", 2, "z-index", "12", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-8", "data-type", "image", "data-rsp_ch", "on", "data-xy", "x:r;xo:74px,74px,46px,26px;y:m;yo:140px,140px,128px,135px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:118px,118px,50px,30px;h:213px,213px,90px,55px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2020;sp:1000;sR:2020;", "data-frame_999", "o:0;st:w;sR:5980;", 1, "rs-pxl-5", 2, "z-index", "15", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/13-2.png", "alt", "img", "width", "117", "height", "211", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-9", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:336px,336px,257px,158px;yo:406px,406px,298px,318px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:112px,112px,57px,44px;h:112px,112px,57px,44px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "sp:1000;", "data-frame_999", "o:0;st:w;sR:8000;", "data-tloop", "u:true;", "data-loop_999", "rZ:360;sp:18000;", 2, "z-index", "10", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-10", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:6px,6px,52px,25px;yo:434px,434px,300px,315px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:207px,207px,107px,69px;h:115px,115px,59px,38px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:1970;sp:1000;sR:1970;", "data-frame_999", "o:0;st:w;sR:6030;", 2, "z-index", "16", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/11-1.png", "alt", "img", "width", "243", "height", "135", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-11", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:17px,17px,8px,424px;yo:171px,171px,88px,103px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:55px,55px,28px,17px;h:52px,52px,26px,16px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2920;sp:1000;sR:2920;", "data-frame_999", "o:0;st:w;sR:5080;", 2, "z-index", "19", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/14-1.png", "alt", "img", "width", "85", "height", "81", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-12", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:1254px,1254px,706px,12px;yo:71px,71px,160px,259px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:55px,55px,61px,37px;h:52px,52px,58px,35px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2640;sp:1000;sR:2640;", "data-frame_999", "o:0;st:w;sR:5360;", 2, "z-index", "20", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-13", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:55px,55px,23px,37px;yo:75px,75px,202px,71px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:15px,15px,7px,4px;h:15px,15px,7px,4px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2540;sp:1000;sR:2540;", "data-frame_999", "o:0;st:w;sR:5460;", "data-loop_0", "y:-40px;", "data-loop_999", "y:40px;sp:3000;e:Sine.easeInOut;yym:t;", 2, "z-index", "22", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/17-1.png", "alt", "img", "width", "15", "height", "15", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-14", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:234px,234px,59px,57px;yo:187px,187px,122px,88px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:20px,20px,9px,5px;h:20px,20px,9px,5px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2600;sp:1000;sR:2600;", "data-frame_999", "o:0;st:w;sR:5400;", "data-tloop", "u:true;", "data-loop_0", "y:-100px;", "data-loop_999", "y:100px;sp:6000;e:Sine.easeInOut;yym:t;", 2, "z-index", "23", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/16-1.png", "alt", "img", "width", "20", "height", "20", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-15", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:320px,320px,39px,24px;yo:46px,46px,161px,99px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:40px,40px,20px,12px;h:40px,40px,20px,12px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2520;sp:1000;sR:2520;", "data-frame_999", "o:0;st:w;sR:5480;", 2, "z-index", "24", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/19-1.png", "alt", "img", "width", "40", "height", "40", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-16", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:1260px,1260px,731px,451px;yo:319px,319px,235px,144px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:15px,15px,7px,4px;h:15px,15px,7px,4px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2590;sp:1000;sR:2590;", "data-frame_999", "o:0;st:w;sR:5410;", "data-loop_0", "y:-40px;", "data-loop_999", "y:40px;sp:5000;e:Sine.easeInOut;yym:t;", 2, "z-index", "21", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-17", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:1425px,1425px,738px,455px;yo:215px,215px,110px,67px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:40px,40px,20px,12px;h:40px,40px,20px,12px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2260;sp:1000;sR:2260;", "data-frame_999", "o:0;st:8900;sR:5640;", 2, "z-index", "25", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/18-1.png", "alt", "img", "width", "40", "height", "40", "data-no-retina", ""], ["id", "slider-3-slide-3-layer-18", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:838px,838px,681px,431px;yo:400px,269px,112px,251px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:48px,48px,24px,14px;h:46px,46px,23px,14px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2830;sp:1000;sR:2830;", "data-frame_999", "o:0;st:w;sR:5170;", 2, "z-index", "18", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-19", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:324px,324px,95px,84px;yo:252px,252px,145px,82px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:85px,85px,44px,27px;h:81px,81px,41px,25px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2640;sp:1000;sR:2640;", "data-frame_999", "o:0;st:w;sR:5360;", 2, "z-index", "17", "font-family", "Roboto"], ["id", "slider-3-slide-3-layer-20", "data-type", "image", "data-rsp_ch", "on", "data-xy", "xo:336px,336px,249px,155px;yo:415px,415px,299px,315px;", "data-text", "w:normal;s:20,20,9,5;l:0,0,12,7;", "data-dim", "w:105px,105px,73px,45px;h:82px,82px,57px,35px;", "data-frame_0", "sX:0.9;sY:0.9;", "data-frame_1", "st:2290;sp:1000;sR:2290;", "data-frame_999", "o:0;st:w;sR:5710;", 1, "rs-pxl-3", 2, "z-index", "26", "font-family", "Roboto"], ["src", "./assets/sofbox-v2/revslider/assets/index-2/20-1.png", "alt", "img", "width", "167", "height", "131", "data-no-retina", ""], [1, "rs-bottom", 2, "visibility", "hidden !important"]],
      template: function Slider2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rs-module-wrap", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "rs-module", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "rs-slides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rs-slide", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "rs-layer", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Easiest Way to Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Transaction. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "rs-layer", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "rs-layer", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "There are many variations of passages of Lorem Ipsum available, but the");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " majority have suffered alteration in some form. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "rs-layer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "rs-layer", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "rs-layer", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "rs-layer", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "rs-layer", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "rs-layer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "rs-layer", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "rs-layer", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "rs-layer", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "rs-layer", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "rs-layer", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "rs-layer", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "rs-layer", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "rs-layer", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "rs-layer", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "rs-layer", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "rs-progress", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy9zbGlkZXIyL3NsaWRlcjIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Slider2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider2',
          templateUrl: './slider2.component.html',
          styleUrls: ['./slider2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment-software/components/slider2/slider2.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/payment-software/components/slider2/slider2.module.ts ***!
    \***********************************************************************/

  /*! exports provided: Slider2Module */

  /***/
  function srcAppPaymentSoftwareComponentsSlider2Slider2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Slider2Module", function () {
      return Slider2Module;
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


    var _slider2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./slider2.component */
    "./src/app/payment-software/components/slider2/slider2.component.ts");

    var Slider2Module = function Slider2Module() {
      _classCallCheck(this, Slider2Module);
    };

    Slider2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Slider2Module
    });
    Slider2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Slider2Module_Factory(t) {
        return new (t || Slider2Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Slider2Module, {
        declarations: [_slider2_component__WEBPACK_IMPORTED_MODULE_2__["Slider2Component"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_slider2_component__WEBPACK_IMPORTED_MODULE_2__["Slider2Component"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Slider2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_slider2_component__WEBPACK_IMPORTED_MODULE_2__["Slider2Component"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_slider2_component__WEBPACK_IMPORTED_MODULE_2__["Slider2Component"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment-software/components/team/team.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/payment-software/components/team/team.component.ts ***!
    \********************************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppPaymentSoftwareComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
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

    function TeamComponent_li_6_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](link_r3.icon);
      }
    }

    function TeamComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TeamComponent_li_6_li_11_Template, 3, 3, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", list_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r1.links);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);

        this.titleSectionProp = {
          title: 'What Sofbox can do for you?',
          description: 'If you are planning on developing a product landing'
        };
        this.List = [{
          name: 'Sal Monella',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/214.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Rick O\'Shea',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/215.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Brock Lee',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/216.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Paige Turner',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/217.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Gail Forcewind',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/218.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Paul Molive',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/219.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }, {
          name: 'Anna Sthesia',
          title: 'Business Advisor',
          image: './assets/sofbox-v2/images/home-2/220.jpeg',
          links: [{
            icon: 'fa fa-facebook-f'
          }, {
            icon: 'fa fa-twitter'
          }, {
            icon: 'fa fa-instagram'
          }]
        }];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 7,
      vars: 2,
      consts: [["id", "iq-team"], [1, "container"], [1, "row"], [1, "col-lg-12"], [3, "titleSectionProp"], [1, "our-new-team"], [4, "ngFor", "ngForOf"], [1, "team-blog"], [1, "team-images"], ["alt", "#0", 1, "img-fluid", 3, "src"], [1, "team-description", "mb-3", "text-center"], [1, "text-white"], [1, "team-social"], ["href", "#"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-v-two-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamComponent_li_6_Template, 12, 4, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("titleSectionProp", ctx.titleSectionProp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
        }
      },
      directives: [_sofbox_components_sections_v_two_section_title_v_two_section_title_component__WEBPACK_IMPORTED_MODULE_1__["VTwoSectionTitleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnQtc29mdHdhcmUvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/payment-software/index/index.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/payment-software/index/index.component.ts ***!
    \***********************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppPaymentSoftwareIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _components_slider2_slider2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/slider2/slider2.component */
    "./src/app/payment-software/components/slider2/slider2.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/about/about.component */
    "./src/app/payment-software/components/about/about.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/services/services.component */
    "./src/app/payment-software/components/services/services.component.ts");
    /* harmony import */


    var _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/features/features.component */
    "./src/app/payment-software/components/features/features.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/counter/counter.component */
    "./src/app/payment-software/components/counter/counter.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/team/team.component */
    "./src/app/payment-software/components/team/team.component.ts");
    /* harmony import */


    var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */
    "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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
          href: '#iq-team',
          title: 'Team'
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
      decls: 47,
      vars: 7,
      consts: [["id", "loading"], ["id", "loading-center"], ["src", "./assets/sofbox-v2/images/loader.gif", "alt", "loader"], [3, "logoImg", "navItemList"], [1, "main-content", "overflow"], [1, "mt-0", "mb-0", "pt-0", "pb-0", "pt-lg-5", "pb-lg-5", "mt-lg-5", "mb-lg-5"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""], [3, "testimonialList"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-v-two-header-style1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-slider2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-counter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-v-two-footer-style2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "About Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "How it Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-v-two-testimonial-carousel", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
        }
      },
      directives: [_sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_4__["VTwoHeaderStyle1Component"], _components_slider2_slider2_component__WEBPACK_IMPORTED_MODULE_5__["Slider2Component"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"], _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_11__["VTwoFooterStyle2Component"], _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_12__["VTwoTestimonialCarouselComponent"]],
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

  },

  /***/
  "./src/app/payment-software/payment-software.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/payment-software/payment-software.module.ts ***!
    \*************************************************************/

  /*! exports provided: PaymentSoftwareModule */

  /***/
  function srcAppPaymentSoftwarePaymentSoftwareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentSoftwareModule", function () {
      return PaymentSoftwareModule;
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


    var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sofbox/sofbox.module */
    "./src/app/sofbox/sofbox.module.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/payment-software/index/index.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/payment-software/components/about/about.component.ts");
    /* harmony import */


    var _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/services/services.component */
    "./src/app/payment-software/components/services/services.component.ts");
    /* harmony import */


    var _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/features/features.component */
    "./src/app/payment-software/components/features/features.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/payment-software/components/counter/counter.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/team/team.component */
    "./src/app/payment-software/components/team/team.component.ts");
    /* harmony import */


    var _components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/slider2/slider2.module */
    "./src/app/payment-software/components/slider2/slider2.module.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
    }];

    var PaymentSoftwareModule = function PaymentSoftwareModule() {
      _classCallCheck(this, PaymentSoftwareModule);
    };

    PaymentSoftwareModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaymentSoftwareModule
    });
    PaymentSoftwareModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaymentSoftwareModule_Factory(t) {
        return new (t || PaymentSoftwareModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_11__["Slider2Module"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaymentSoftwareModule, {
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_11__["Slider2Module"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSoftwareModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"], _components_features_features_component__WEBPACK_IMPORTED_MODULE_8__["FeaturesComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_9__["CounterComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_4__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToModule"], _components_slider2_slider2_module__WEBPACK_IMPORTED_MODULE_11__["Slider2Module"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=payment-software-payment-software-module-es5.js.map