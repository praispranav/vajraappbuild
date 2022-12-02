function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"], {
  /***/
  "./src/app/contact-us/components/contact-info/contact-info.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/contact-us/components/contact-info/contact-info.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ContactInfoComponent */

  /***/
  function srcAppContactUsComponentsContactInfoContactInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function () {
      return ContactInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactInfoComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-palette style-three wow fadeInUp text-left ", list_r1.hoverClass, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](list_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);
      }
    }

    var ContactInfoComponent = /*#__PURE__*/function () {
      function ContactInfoComponent() {
        _classCallCheck(this, ContactInfoComponent);

        this.List = [{
          title: 'Address',
          desc: '1234 North Avenue Luke Lane, IN 360001',
          icon: 'flaticon flaticon-location',
          hoverClass: 'purple-hover'
        }, {
          title: 'Phone',
          desc: '+0123 456 789',
          icon: 'flaticon flaticon-phone-call',
          hoverClass: 'org-hover'
        }, {
          title: 'Mail',
          desc: 'support@sofbox.com',
          icon: 'flaticon flaticon-send-mail',
          hoverClass: 'green-hover'
        }];
      }

      _createClass(ContactInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactInfoComponent;
    }();

    ContactInfoComponent.ɵfac = function ContactInfoComponent_Factory(t) {
      return new (t || ContactInfoComponent)();
    };

    ContactInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactInfoComponent,
      selectors: [["app-contact-info"]],
      decls: 4,
      vars: 1,
      consts: [[1, "container"], [1, "row", "justify-content-center"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], ["data-wow-delay", "0.4s"], [1, "media"], [1, "circle-style"], [1, "circle-icon"], ["aria-hidden", "true"], [1, "media-body"], [1, "color-text", "mb-2"], [1, "mb-0"]],
      template: function ContactInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactInfoComponent_div_3_Template, 11, 8, "div", 2);

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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29tcG9uZW50cy9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-info',
          templateUrl: './contact-info.component.html',
          styleUrls: ['./contact-info.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-us/components/contact-map/contact-map.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/contact-us/components/contact-map/contact-map.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ContactMapComponent */

  /***/
  function srcAppContactUsComponentsContactMapContactMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactMapComponent", function () {
      return ContactMapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactMapComponent = /*#__PURE__*/function () {
      function ContactMapComponent() {
        _classCallCheck(this, ContactMapComponent);
      }

      _createClass(ContactMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactMapComponent;
    }();

    ContactMapComponent.ɵfac = function ContactMapComponent_Factory(t) {
      return new (t || ContactMapComponent)();
    };

    ContactMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactMapComponent,
      selectors: [["app-contact-map"]],
      decls: 21,
      vars: 0,
      consts: [[1, "pt-0"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051", "width", "600", "height", "530", "frameborder", "0", "allowfullscreen", "", 2, "border", "0"], [1, "mb-4"], [1, "row"], ["type", "text", "id", "inputName", "placeholder", "Your Name", 1, "form-control"], ["type", "Email", "id", "inputEmail", "placeholder", "Your Email", 1, "form-control"], [1, "col-lg-12"], ["type", "text", "id", "inputSubject", "placeholder", "Your Subject", 1, "form-control"], ["id", "exampleFormControlTextarea1", "rows", "7", "placeholder", "Your Message", 1, "form-control"], ["href", "", 1, "button"]],
      template: function ContactMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get in Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29tcG9uZW50cy9jb250YWN0LW1hcC9jb250YWN0LW1hcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-map',
          templateUrl: './contact-map.component.html',
          styleUrls: ['./contact-map.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-us/contact-us.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/contact-us/contact-us.module.ts ***!
    \*************************************************/

  /*! exports provided: ContactUsModule */

  /***/
  function srcAppContactUsContactUsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsModule", function () {
      return ContactUsModule;
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


    var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sofbox/sofbox.module */
    "./src/app/sofbox/sofbox.module.ts");
    /* harmony import */


    var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/contact-us/index/index.component.ts");
    /* harmony import */


    var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/contact-info/contact-info.component */
    "./src/app/contact-us/components/contact-info/contact-info.component.ts");
    /* harmony import */


    var _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact-map/contact-map.component */
    "./src/app/contact-us/components/contact-map/contact-map.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"]
    }];

    var ContactUsModule = function ContactUsModule() {
      _classCallCheck(this, ContactUsModule);
    };

    ContactUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContactUsModule
    });
    ContactUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContactUsModule_Factory(t) {
        return new (t || ContactUsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactUsModule, {
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__["ContactInfoComponent"], _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__["ContactMapComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__["ContactInfoComponent"], _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__["ContactMapComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact-us/index/index.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/contact-us/index/index.component.ts ***!
    \*****************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppContactUsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component */
    "./src/app/sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component.ts");
    /* harmony import */


    var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/contact-info/contact-info.component */
    "./src/app/contact-us/components/contact-info/contact-info.component.ts");
    /* harmony import */


    var _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/contact-map/contact-map.component */
    "./src/app/contact-us/components/contact-map/contact-map.component.ts");
    /* harmony import */


    var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */
    "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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
          href: '/saas-six',
          title: 'Home',
          is_link: true
        }, {
          href: '#',
          title: 'Pages',
          is_link: false,
          _is_active: false,
          children: true,
          child: [{
            href: '/about-us',
            title: 'About Us'
          }, {
            href: '/services',
            title: 'Serivces'
          }, {
            href: '/pricing',
            title: 'Pricing'
          }, {
            href: '/careers',
            title: 'Careers'
          }, {
            href: '/faq',
            title: 'FAQ'
          }, {
            href: '/team',
            title: 'Team'
          }]
        }, {
          href: '#',
          title: 'Portfolio',
          is_link: false,
          _is_active: false,
          children: true,
          child: [{
            href: '/portfolio-2-column',
            title: 'Portfolio 2 Columns'
          }, {
            href: '/portfolio-3-column',
            title: 'Portfolio 3 Columns'
          }, {
            href: '/portfolio-4-column',
            title: 'Portfolio 4 Columns'
          }, {
            href: '/portfolio-5-column',
            title: 'Portfolio 5 Columns'
          }, {
            href: '/portfolio-no-space',
            title: 'Portfolio No Space'
          }, {
            href: '/portfolio-details',
            title: 'Portfolio Details'
          }]
        }, {
          href: '#',
          title: 'Blog',
          is_link: false,
          _is_active: false,
          children: true,
          child: [{
            href: '/blog',
            title: 'Blog'
          }, {
            href: '/blog-details',
            title: 'Blog Details'
          }, {
            href: '/one-column-blog',
            title: 'One Column Blog'
          }, {
            href: '/two-column-blog',
            title: 'Two Column Blog'
          }, {
            href: '/three-column-blog',
            title: 'Three Column Blog'
          }, {
            href: '/left-sidebar-grid',
            title: 'Left Sidebar Grid'
          }, {
            href: '/right-sidebar-grid',
            title: 'Right Sidebar Grid'
          }]
        }, {
          href: '/contact-us',
          title: 'Contact Us',
          is_link: true,
          _is_active: true
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
      decls: 56,
      vars: 7,
      consts: [["id", "loading"], ["id", "loading-center"], ["src", "./assets/sofbox-v2/images/loader.gif", "alt", "loader"], [3, "logoImg", "navItemList"], ["button", "", 1, "button-btn", "list-inline-item"], ["aria-label", "breadcrumb"], [1, "blue-btn", "button"], ["href", "#"], ["title", "Contact US"], ["bannerLinks", ""], [1, "breadcrumb", "main-bg"], [1, "breadcrumb-item"], ["aria-hidden", "true", 1, "fa", "fa-home", "mr-1"], [1, "breadcrumb-item", "active"], [1, "main-content"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""], [3, "testimonialList"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-v-two-header-style1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-v-two-banner-style1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ol", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact US");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-contact-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-contact-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-v-two-footer-style2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "How it Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "app-v-two-testimonial-carousel", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
        }
      },
      directives: [_sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_4__["VTwoHeaderStyle1Component"], _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_5__["VTwoBannerStyle1Component"], _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_6__["ContactInfoComponent"], _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_7__["ContactMapComponent"], _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_8__["VTwoFooterStyle2Component"], _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_9__["VTwoTestimonialCarouselComponent"]],
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
//# sourceMappingURL=contact-us-contact-us-module-es5.js.map