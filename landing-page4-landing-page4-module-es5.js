function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page4-landing-page4-module"], {
  /***/
  "./src/app/landing-page4/components/about/about.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/landing-page4/components/about/about.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppLandingPage4ComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_sections_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/section-title/section-title.component */
    "./src/app/sofbox/components/sections/section-title/section-title.component.ts");
    /* harmony import */


    var _sofbox_components_card_card_style5_card_style5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/card/card-style5/card-style5.component */
    "./src/app/sofbox/components/card/card-style5/card-style5.component.ts");
    /* harmony import */


    var _sofbox_components_sections_section_style1_section_style1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/section-style1/section-style1.component */
    "./src/app/sofbox/components/sections/section-style1/section-style1.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sofbox_components_sections_section_style2_section_style2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../sofbox/components/sections/section-style2/section-style2.component */
    "./src/app/sofbox/components/sections/section-style2/section-style2.component.ts");

    function AboutComponent_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r3.text);
      }
    }

    function AboutComponent_div_57_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r4.text);
      }
    }

    function AboutComponent_div_65_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r5.text);
      }
    }

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.vcaFeatures = [{
          image: "./assets/images/services/icon3.png",
          text: "My Unit"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Vehicle"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Parking"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Agreement"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Complaint"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Soft lock"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Visitor Invite"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Family"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Tenant"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Facilities"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "E-News"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Delivery"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Notification"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "SOS"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Resident Qr"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Multiple Unit"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Complaint Chats"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Vehicle In/Out Alert"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Visitor Notification"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Family SOS Alert"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Visitor Verification"
        }, {
          image: "./assets/images/services/icon3.png",
          text: "Upcoming Visitor"
        }];
        this.vcaFeatures2 = [];
        this.vgpFeatures = [{
          image: "",
          text: "Manual checkin/out"
        }, {
          image: "",
          text: "Patrol"
        }, {
          image: "",
          text: "Checkpoints"
        }, {
          image: "",
          text: "Visitor checkin/out"
        }, {
          image: "",
          text: "Switch Guard"
        }, {
          image: "",
          text: "Guard Attendance"
        }, {
          image: "",
          text: "SOS"
        }, {
          image: "",
          text: "Report Incident"
        }, {
          image: "",
          text: "Shift Detail"
        }, {
          image: "",
          text: "Shift Detail"
        }, {
          image: "",
          text: "Start/end Shift"
        }, {
          image: "",
          text: "Self checkin/out"
        }];
        this.vvpFeatures = [{
          image: "",
          text: 'Walkin'
        }, {
          image: "",
          text: 'Visitor checkin/out'
        }, {
          image: "",
          text: 'OCR'
        }, {
          image: "",
          text: 'SOS Alarm'
        }, {
          image: "",
          text: 'Expected Visitors'
        }, {
          image: "",
          text: 'Delivery'
        }, {
          image: "",
          text: 'Epass'
        }, {
          image: "",
          text: 'Kiosk'
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.??fac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 132,
      vars: 6,
      consts: [["id", "how-it-works", 1, "overview-block-ptb", "it-works"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["title", "What is VajarApp ?", "subTitle", "With our product Vajra, we proposed a tool using information technology and communication (ICT) \n               to help local government see what has happened in the city currently. \n               Vajra app is a solution for city monitoring in a single dashboard to help summarize the current status of the city.\n               \n               Vajra App provides a complete solution for information access and control needs of one or more areas and buildings in the facility. \n               It can address the varying needs of different business units within an organization using \n               its modular design and flexibility to combine different applications for customization."], [1, "col-md-12", "col-lg-3", "m-0"], ["step", "1"], ["cardMedia", "", "src", "./assets/images/services/icon1.png", "alt", "#", 1, "img-fluid"], ["cardBody", ""], [1, "iq-tw-7", "iq-mt-25", "iq-mb-15"], ["step", "2"], ["cardMedia", "", "src", "./assets/images/services/icon2.png", "alt", "#", 1, "img-fluid"], ["step", "3"], ["cardMedia", "", "src", "./assets/images/services/icon3.png", "alt", "#", 1, "img-fluid"], ["step", "4"], ["cardBody", "", 1, "col-lg-6"], [1, "heading-title", "left", "text-left"], [1, "iq-tw-7", "iq-mb-25", "title"], ["class", "col-6 col-lg-3 col-md-3 col-sm-3 mt-3 pr-sm-0", 4, "ngFor", "ngForOf"], ["cardMedia", "", 1, "col-lg-6", "align-self-center", "pl-4"], ["src", "./assets/images/drive/01.png", "alt", "drive01", 1, "iq-works-img", "pull-right", "img-fluid"], [1, "text-center", "mt-5", "ml-4"], ["id", "software-features", 3, "small"], ["cardMedia", "", 1, "iq-software-demo"], ["src", "./assets/images/drive/05.png", "alt", "drive05", 1, "img-fluid"], ["cardBody", "", 1, "col-lg-6", "offset-lg-6", "pl-5"], [1, "my-5"], [1, "iq-mt-40", "iq-list"], [1, "iq-tw-6", "iq-mb-15"], [1, "ion-android-done-all", "iq-mr-10", "iq-font-blue", "iq-font-30"], [1, "iq-font-black"], ["cardBody", "", 1, "col-lg-6", "offset-lg-6"], [1, "col-6", "col-lg-3", "col-md-3", "col-sm-3", "mt-3", "pr-sm-0"], [1, "card", "d-flex", "flex-column", "align-items-center", "justify-content-between", "pb-0", "h-100", "rounded", "w-h-fixed", "py-3"], ["cardMedia", "", "src", "./assets/images/services/icon3.png", "alt", "#", 1, "img-icons"], [1, "m-0", "p-0", "fs-12", "iq-tw-6"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-section-title", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "app-card-style5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Vajra Community Resident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " It is one integrated solution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "app-card-style5", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Vajra Guard Patrol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Development On Progress... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "app-card-style5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Vajra Visitor Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Coming Soon... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "app-card-style5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Management Portal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Coming Soon... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "app-section-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Vajra Community Resident");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](44, AboutComponent_div_44_Template, 5, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " VajraApp is a real-time online guard tour system based on NFC, Beacon and QR-code tags use. The staff scans tags placed on locations and assets and the Monitoring Center gets informed in real-time about incidents and events. Any time a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "app-section-style2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Vajra Guard Patrol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, AboutComponent_div_57_Template, 5, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "app-section-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Vajra Visitor Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](65, AboutComponent_div_65_Template, 5, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "app-section-style2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Access Control Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Auto open barrier gate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Vehicle Inout Transaction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "AI ANPR with Display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "Vehicle Colour Detection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "Vehicle Size Detection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "Traffic Direction Detection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "app-section-style2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Mobile Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](111, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "It is a long established fact that a reader will be distracted by the readable content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](119, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](125, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.vcaFeatures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("small", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.vgpFeatures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.vvpFeatures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("small", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("small", true);
        }
      },
      directives: [_sofbox_components_sections_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_1__["SectionTitleComponent"], _sofbox_components_card_card_style5_card_style5_component__WEBPACK_IMPORTED_MODULE_2__["CardStyle5Component"], _sofbox_components_sections_section_style1_section_style1_component__WEBPACK_IMPORTED_MODULE_3__["SectionStyle1Component"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _sofbox_components_sections_section_style2_section_style2_component__WEBPACK_IMPORTED_MODULE_5__["SectionStyle2Component"]],
      styles: [".box-shadow[_ngcontent-%COMP%]{\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.10);\n}\n\n.img-icons[_ngcontent-%COMP%]{\n  width: 40px;\n  height: 40px;\n}\n\n.fs-12[_ngcontent-%COMP%]{\n  font-size: 12px !important;\n}\n\n.w-h-fixed[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 108px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlNC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1zaGFkb3d7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XG59XG5cbi5pbWctaWNvbnN7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5mcy0xMntcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi53LWgtZml4ZWR7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwOHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-about",
          templateUrl: "./about.component.html",
          styleUrls: ["./about.component.css"]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/blog/blog.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/landing-page4/components/blog/blog.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppLandingPage4ComponentsBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_card_card_style1_card_style1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/card/card-style1/card-style1.component */
    "./src/app/sofbox/components/card/card-style1/card-style1.component.ts");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.??fac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 172,
      vars: 0,
      consts: [["id", "blog", 1, "overview-block-ptb", "grey-bg", "iq-blog", "blog-section"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], ["data-autoplay", "true", "data-loop", "true", "data-nav", "true", "data-dots", "true", "data-items", "3", "data-items-laptop", "3", "data-items-tab", "2", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-margin", "30", 1, "owl-carousel"], [1, "item"], ["cardMedia", ""], [1, "media-wrapper"], ["id", "player1", "poster", "./assets/video/01.jpg", "controls", "", "preload", "none", 2, "width", "100%", "height", "100%"], ["type", "video/m4v", "src", "./assets/video/01.m4v"], ["type", "video/webm", "src", "./assets/video/01.webm"], ["type", "video/ogg", "src", "./assets/video/01.ogv"], ["cardTitle", ""], ["href", "javascript:void(0)"], [1, "iq-tw-7", "iq-mb-10"], ["cardBody", ""], ["cardFooter", ""], [1, "list-inline"], [1, "list-inline-item"], ["aria-hidden", "true", 1, "fa", "fa-user-circle"], ["aria-hidden", "true", 1, "fa", "fa-calendar"], ["aria-hidden", "true", 1, "fa", "fa-comment"], ["src", "./assets/images/blog/01.jpg", "alt", "#", 1, "img-fluid", "center-block"], [1, "iq-bolg-video"], ["src", "https://player.vimeo.com/video/176916362"], ["src", "https://www.youtube.com/embed/nrJtHemSPW4?rel=0", "allowfullscreen", ""], ["src", "./assets/images/blog/03.jpg", "alt", "#", 1, "img-fluid", "center-block"], ["id", "player2-container", 1, "players"], ["id", "player2", "preload", "none", "controls", ""], ["src", "http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3", "type", "audio/mp3"], ["src", "./assets/images/blog/02.jpg", "alt", "#", 1, "img-fluid", "center-block"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Latest Blog Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "video", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "source", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "source", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "source", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Blogpost With HTML Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Blogpost With Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Blogpost With Vimeo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "iframe", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Blogpost With Youtube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](112, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "audio", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "source", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "Blogpost With Audio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "app-card-style1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h5", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Blogpost With Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Quae laboriosam sunt consectetur, assumenda provident lorem ipsum dolor sit amet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](162, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, " Tom Herry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](166, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](167, " 12 Aug 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](169, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](170, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](171, " 5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_card_card_style1_card_style1_component__WEBPACK_IMPORTED_MODULE_1__["CardStyle1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogComponent, [{
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
  "./src/app/landing-page4/components/clients/clients.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page4/components/clients/clients.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ClientsComponent */

  /***/
  function srcAppLandingPage4ComponentsClientsClientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClientsComponent", function () {
      return ClientsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_client_carousel_client_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/client-carousel/client-carousel.component */
    "./src/app/sofbox/components/client-carousel/client-carousel.component.ts");

    var ClientsComponent = /*#__PURE__*/function () {
      function ClientsComponent() {
        _classCallCheck(this, ClientsComponent);

        this.carousalOption = {
          items: 5,
          dots: false,
          nav: true,
          autoplay: true,
          loop: true,
          navText: ['<i class="fas fa-angle-left fa-2x"></i>', '<i class="fas fa-angle-right fa-2x"></i>']
        };
        this.carousalClass = 'owl-carousel ';
        this.carousalImages = [{
          src: './assets/images/clients/01.png'
        }, {
          src: './assets/images/clients/02.png'
        }, {
          src: './assets/images/clients/03.png'
        }, {
          src: './assets/images/clients/04.png'
        }, {
          src: './assets/images/clients/05.png'
        }, {
          src: './assets/images/clients/06.png'
        }, {
          src: './assets/images/clients/07.png'
        }, {
          src: './assets/images/clients/09.png'
        }];
      }

      _createClass(ClientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ClientsComponent;
    }();

    ClientsComponent.??fac = function ClientsComponent_Factory(t) {
      return new (t || ClientsComponent)();
    };

    ClientsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ClientsComponent,
      selectors: [["app-clients"]],
      decls: 5,
      vars: 3,
      consts: [[1, "iq-our-clients", "white-bg", "iq-ptb-50"], [1, "container"], [1, "row"], [1, "col-lg-12", "col-md-12"], [3, "options", "carousalClass", "images"]],
      template: function ClientsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-client-carousel", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("options", ctx.carousalOption)("carousalClass", ctx.carousalClass)("images", ctx.carousalImages);
        }
      },
      directives: [_sofbox_components_client_carousel_client_carousel_component__WEBPACK_IMPORTED_MODULE_1__["ClientCarouselComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ClientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-clients',
          templateUrl: './clients.component.html',
          styleUrls: ['./clients.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/compare-service/compare-service.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/landing-page4/components/compare-service/compare-service.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CompareServiceComponent */

  /***/
  function srcAppLandingPage4ComponentsCompareServiceCompareServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompareServiceComponent", function () {
      return CompareServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CompareServiceComponent = /*#__PURE__*/function () {
      function CompareServiceComponent() {
        _classCallCheck(this, CompareServiceComponent);
      }

      _createClass(CompareServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CompareServiceComponent;
    }();

    CompareServiceComponent.??fac = function CompareServiceComponent_Factory(t) {
      return new (t || CompareServiceComponent)();
    };

    CompareServiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CompareServiceComponent,
      selectors: [["app-compare-service"]],
      decls: 111,
      vars: 0,
      consts: [["id", "compare-services", "data-jarallax", "{\"speed\": 0.6}", 1, "iq-compare-services", "overview-block-ptb", "iq-over", "iq-over-blue-90", "iq-parallax", 2, "background", "url('./assets/images/bg/05.jpg')"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title", "white"], [1, "title", "iq-tw-7"], [1, "iq-font-white"], [1, "col-sm-5"], [1, "iq-services-box", "text-left", "iq-font-white"], [1, "iq-icon"], ["aria-hidden", "true", 1, "ion-ios-monitor-outline"], [1, "services-content"], [1, "iq-tw-6", "iq-pb-10", "iq-font-white"], [1, "iq-progress-bar"], [1, "iq-progress-bar-text"], ["data-percent", "90"], [1, "col-sm-2", "align-self-center", "text-center"], ["data-percent", "70"], [1, "row", "iq-mt-50"], ["aria-hidden", "true", 1, "ion-ios-albums-outline"], ["data-percent", "50"], ["data-percent", "80"], ["aria-hidden", "true", 1, "ion-ios-color-wand-outline"], ["data-percent", "100"], ["data-percent", "40"]],
      template: function CompareServiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Compare Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Easy to Customize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "V/S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Easy to Customize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "70");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Multipurpose layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "V/S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Multipurpose layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "Unique Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "V/S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "h5", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Unique Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9jb21wYXJlLXNlcnZpY2UvY29tcGFyZS1zZXJ2aWNlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CompareServiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-compare-service',
          templateUrl: './compare-service.component.html',
          styleUrls: ['./compare-service.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/contact/contact.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page4/components/contact/contact.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppLandingPage4ComponentsContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/contact-form/contact-form.component */
    "./src/app/sofbox/components/contact-form/contact-form.component.ts");

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

    ContactComponent.??fac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 9,
      vars: 0,
      consts: [["id", "contact-us", 1, "footer-info", "white-bg"], [1, "container"], [1, "row", "justify-content-end"], [1, "col-md-6", "col-lg-4"], [1, "iq-get-in"], [1, "iq-tw-7", "iq-mb-20"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840108181602!2d144.95373631539215!3d-37.8172139797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1497005461921", "allowfullscreen", "", 1, "map", 2, "border", "0"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Get in Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-contact-form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "iframe", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__["ContactFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/counter/counter.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page4/components/counter/counter.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CounterComponent */

  /***/
  function srcAppLandingPage4ComponentsCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/parallax-hero-style1/parallax-hero-style1.component */
    "./src/app/sofbox/components/parallax-hero-style1/parallax-hero-style1.component.ts");
    /* harmony import */


    var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");

    var CounterComponent = /*#__PURE__*/function () {
      function CounterComponent() {
        _classCallCheck(this, CounterComponent);
      }

      _createClass(CounterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CounterComponent;
    }();

    CounterComponent.??fac = function CounterComponent_Factory(t) {
      return new (t || CounterComponent)();
    };

    CounterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CounterComponent,
      selectors: [["app-counter"]],
      decls: 54,
      vars: 12,
      consts: [["classNames", "iq-ptb-100 iq-counter-box iq-bg-over iq-over-blue-90 iq-font-white iq-parallax", "bgImage", "./assets/images/bg/02.jpg", "ids", "counter"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-6", "col-sm-12", "text-left"], [1, "counter"], ["aria-hidden", "true", 1, "ion-ios-folder-outline"], [1, "counter-date"], [1, "iq-font-white", "text-uppercase"], [1, "timer", "iq-tw-7", 3, "CountTo", "from", "duration"], [1, "col-lg-3", "col-md-6", "col-sm-12", "text-left", "r4-mt-30"], ["aria-hidden", "true", 1, "ion-ios-paper-outline"], [1, "col-lg-3", "col-md-6", "col-sm-12", "text-left", "r-mt-30"], ["aria-hidden", "true", 1, "ion-ios-person-outline"], ["aria-hidden", "true", 1, "ion-ios-star"], [1, "counter-info", "iq-mt-60", "iq-pt-60"], [1, "col-lg-6"], [1, "iq-mt-30"], ["href", "javascript:void(0)", 1, "button", "bt-black", "iq-mt-15", "iq-mb-30"], [1, "counter-info-img"], ["src", "assets/images/drive/07.png", "alt", "#", 1, "center-block"], [1, "waves-box"], ["href", "https://www.youtube.com/watch?v=kzyFmrFky7Y", 1, "iq-video", "popup-youtube"], [1, "ion-ios-play-outline"], [1, "iq-waves"], [1, "waves", "wave-1"], [1, "waves", "wave-2"], [1, "waves", "wave-3"]],
      template: function CounterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-parallax-hero-style1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "App Downloads");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "1540");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Happy Clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "2530");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Active Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "8120");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Total App Rates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "1620");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "It has survived not only five centuries, but also the leap into electronic type setting, Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 1540)("from", 0)("duration", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 2530)("from", 0)("duration", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 8120)("from", 0)("duration", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("CountTo", 1620)("from", 0)("duration", 5);
        }
      },
      directives: [_sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_1__["ParallaxHeroStyle1Component"], angular_count_to__WEBPACK_IMPORTED_MODULE_2__["CountToDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CounterComponent, [{
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
  "./src/app/landing-page4/components/faq/faq.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/landing-page4/components/faq/faq.component.ts ***!
    \***************************************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppLandingPage4ComponentsFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent.??fac = function FaqComponent_Factory(t) {
      return new (t || FaqComponent)();
    };

    FaqComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FaqComponent,
      selectors: [["app-faq"]],
      decls: 49,
      vars: 0,
      consts: [[1, "overview-block-ptb", "white-bg", "iq-asked"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], [1, "row", "align-items-center"], [1, "col-md-12", "col-lg-6"], ["src", "./assets/images/drive/10.png", "alt", "drive10", 1, "img-fluid", "center-block", 2, "z-index", "9", "position", "relative"], [1, "iq-accordion"], [1, "iq-accordion", "accordion-active"], ["href", "javascript:void(0)", 1, "accordion-title", "iq-tw-7", "iq-font-grey"], [1, "accordion-details"], [1, "col-sm-3"], ["alt", "#", "src", "./assets/images/blog/01.jpg", 1, "img-fluid"], [1, "col-sm-9"], [1, "iq-objects-asked"], [1, "iq-objects-01"], ["src", "./assets/images/drive/02.png", "alt", "drive02"], ["data-bottom", "transform:translatex(50px)", "data-top", "transform:translatex(-100px);", 1, "iq-objects-02"], ["src", "./assets/images/drive/04.png", "alt", "drive02"], [1, "iq-objects-03", "iq-fadebounce"], [1, "iq-round"]],
      template: function FaqComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Frequently Asked Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Ipsum is simply dummy the printing?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Dummy the printing and type setting?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Standard dummy since the 1500s?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "It has survived five centuries?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faq',
          templateUrl: './faq.component.html',
          styleUrls: ['./faq.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/feature/feature.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page4/components/feature/feature.component.ts ***!
    \***********************************************************************/

  /*! exports provided: FeatureComponent */

  /***/
  function srcAppLandingPage4ComponentsFeatureFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent() {
        _classCallCheck(this, FeatureComponent);
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.??fac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)();
    };

    FeatureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FeatureComponent,
      selectors: [["app-feature"]],
      decls: 51,
      vars: 0,
      consts: [["id", "features", 1, "iq-amazing-tab", "white-bg"], [1, "container"], [1, "row"], [1, "col-sm-12"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active1"], ["aria-hidden", "true", 1, "ion-monitor"], ["id", "profile-tab", "data-toggle", "tab", "href", "#profile", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], ["aria-hidden", "true", 1, "ion-ipad"], ["id", "contact-tab", "data-toggle", "tab", "href", "#contactt", "role", "tab", "aria-controls", "contactt", "aria-selected", "false", 1, "nav-link"], ["aria-hidden", "true", 1, "ion-iphone"], ["id", "myTabContent", 1, "tab-content", "iq-mt-50"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["src", "assets/images/drive/06.png", "alt", "screenshots1", 1, "img-fluid", "mx-auto", "d-block"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "iq-tw-6", "iq-mb-25"], [1, ""], [1, "iq-mt-40", "iq-list"], [1, "iq-tw-6"], [1, "ion-android-done-all", "iq-mr-10", "iq-font-blue", "iq-font-30"], [1, "iq-font-black"], ["id", "contactt", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], ["src", "assets/images/drive/06.png", "alt", "screenshots3", 1, "img-fluid", "mx-auto", "d-block"]],
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Desktop View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Tab View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Mobile View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Software Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Simply dummy text of the Lorem Ipsum is printing and type setting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9mZWF0dXJlL2ZlYXR1cmUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feature',
          templateUrl: './feature.component.html',
          styleUrls: ['./feature.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/home/home.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/landing-page4/components/home/home.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppLandingPage4ComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/parallax-hero-style1/parallax-hero-style1.component */
    "./src/app/sofbox/components/parallax-hero-style1/parallax-hero-style1.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.??fac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 29,
      vars: 0,
      consts: [["ids", "iq-home", "bgImage", "./assets/images/top-landing-wallpaper.jpg", "classNames", "iq-banner overview-block-pt iq-bg-over iq-parallax"], [1, "container-fluid"], [1, "banner-text"], [1, "row"], [1, "col-lg-6"], [1, "text-uppercase", "iq-font-white", "iq-tw-3"], [1, "iq-tw-5"], [1, "iq-font-white", "iq-pt-15", "iq-mb-40"], [1, "waves-box"], ["href", "http://www.youtube.com/watch?v=kzyFmrFky7Y", 1, "iq-video", "popup-youtube"], [1, "ion-ios-play-outline"], [1, "iq-waves"], [1, "waves", "wave-1"], [1, "waves", "wave-2"], [1, "waves", "wave-3"], [1, "waves", "wave-4"], ["src", "./assets/images/banner/01.png", "alt", "", 1, "banner-img"], [1, "banner-objects"], ["data-bottom", "transform:translatey(50px)", "data-top", "transform:translatey(-50px);", 1, "banner-objects-01"], ["src", "./assets/images/drive/03.png", "alt", "drive02"], [1, "banner-objects-02", "iq-fadebounce"], [1, "iq-round"], [1, "banner-objects-03", "iq-fadebounce"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-parallax-hero-style1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Integrated");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " security ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " solutions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Vajra is a Security management platform that provides a number of benefits to your organization");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_1__["ParallaxHeroStyle1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/pricing/pricing.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/landing-page4/components/pricing/pricing.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppLandingPage4ComponentsPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _sofbox_components_card_pricing_card_style2_pricing_card_style2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/card/pricing-card-style2/pricing-card-style2.component */
    "./src/app/sofbox/components/card/pricing-card-style2/pricing-card-style2.component.ts");

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PricingComponent;
    }();

    PricingComponent.??fac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 91,
      vars: 0,
      consts: [["id", "pricing", 1, "overview-block-ptb", "grey-bg", "iq-price-table"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], [1, "col-md-4", "col-lg-4"], [1, "iq-pricing", "text-center"], ["cardHeader", ""], [1, "iq-font-white", "iq-tw-7"], [1, "text-uppercase", "iq-tw-4", "iq-font-white"], ["cardList", ""], ["cardFooter", ""], ["href", "javascript:void(0)", 1, "button"], ["data-wow-duration", "1s", 1, "col-md-4", "col-lg-4", "wow", "flipInY", "r4-mt-30"], [1, "col-md-4", "col-lg-4", "r4-mt-30"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Affordable Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "app-pricing-card-style2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "/Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "BASIC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "100 MB Disk Space");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "2 Subdomains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "5 Email Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Webmail Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Customer Support 24/7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "app-pricing-card-style2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "29");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "/Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "STANDARD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "100 MB Disk Space");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "2 Subdomains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "5 Email Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Webmail Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Customer Support 24/7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "app-pricing-card-style2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "49");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "/Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "ADVANCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "100 MB Disk Space");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "2 Subdomains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "5 Email Accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Webmail Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Customer Support 24/7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "Purchase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_card_pricing_card_style2_pricing_card_style2_component__WEBPACK_IMPORTED_MODULE_1__["PricingCardStyle2Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PricingComponent, [{
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
  "./src/app/landing-page4/components/screen-shot/screen-shot.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/landing-page4/components/screen-shot/screen-shot.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ScreenShotComponent */

  /***/
  function srcAppLandingPage4ComponentsScreenShotScreenShotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenShotComponent", function () {
      return ScreenShotComponent;
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


    var _sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/parallax-hero-style1/parallax-hero-style1.component */
    "./src/app/sofbox/components/parallax-hero-style1/parallax-hero-style1.component.ts");

    var ScreenShotComponent = /*#__PURE__*/function () {
      function ScreenShotComponent(plugins) {
        _classCallCheck(this, ScreenShotComponent);

        this.plugins = plugins;
      }

      _createClass(ScreenShotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "swipeLeft",
        value: function swipeLeft() {}
      }, {
        key: "swipeRight",
        value: function swipeRight() {}
      }]);

      return ScreenShotComponent;
    }();

    ScreenShotComponent.??fac = function ScreenShotComponent_Factory(t) {
      return new (t || ScreenShotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"]));
    };

    ScreenShotComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ScreenShotComponent,
      selectors: [["app-screen-shot"]],
      decls: 36,
      vars: 0,
      consts: [["ids", "great-screenshots", "classNames", "overview-block-ptb iq-bg-over  iq-over-blue-80 iq-screenshots iq-parallax", "bgImage", "assets/images/bg/07.jpg"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title", "white"], [1, "title", "iq-tw-7"], [1, "iq-font-white"], [1, "row", "justify-content-center"], [1, "screenshots-slider", "popup-gallery"], [1, "slider-container"], [1, "slider-content"], [1, "slider-single"], ["href", "assets/images/screenshots/01.jpg", 1, "popup-img"], ["src", "assets/images/screenshots/01.jpg", "alt", "1", 1, "slider-single-image"], ["src", "assets/images/screenshots/02.jpg", "alt", "2", 1, "slider-single-image"], ["src", "assets/images/screenshots/03.jpg", "alt", "3", 1, "slider-single-image"], ["src", "assets/images/screenshots/04.jpg", "alt", "4", 1, "slider-single-image"], ["src", "assets/images/screenshots/05.jpg", "alt", "5", 1, "slider-single-image"], ["src", "assets/images/screenshots/06.jpg", "alt", "6", 1, "slider-single-image"], ["href", "javascript:void(0);", 1, "slider-left", 3, "click"], [1, "fa", "fa-angle-left"], ["href", "javascript:void(0);", 1, "slider-right", 3, "click"], [1, "fa", "fa-angle-right"]],
      template: function ScreenShotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-parallax-hero-style1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Great Screenshots");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScreenShotComponent_Template_a_click_32_listener() {
            return ctx.swipeLeft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScreenShotComponent_Template_a_click_34_listener() {
            return ctx.swipeRight();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_2__["ParallaxHeroStyle1Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9zY3JlZW4tc2hvdC9zY3JlZW4tc2hvdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScreenShotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-screen-shot',
          templateUrl: './screen-shot.component.html',
          styleUrls: ['./screen-shot.component.css']
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
  "./src/app/landing-page4/components/specialities/specialities.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/landing-page4/components/specialities/specialities.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SpecialitiesComponent */

  /***/
  function srcAppLandingPage4ComponentsSpecialitiesSpecialitiesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecialitiesComponent", function () {
      return SpecialitiesComponent;
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


    var _sofbox_components_card_card_style6_card_style6_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/card/card-style6/card-style6.component */
    "./src/app/sofbox/components/card/card-style6/card-style6.component.ts");

    function SpecialitiesComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-card-style6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", item_r1.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.description);
      }
    }

    var SpecialitiesComponent = /*#__PURE__*/function () {
      function SpecialitiesComponent() {
        _classCallCheck(this, SpecialitiesComponent);

        this.list = [{
          icon: 'ion-ios-monitor-outline',
          title: 'High Resolution',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-settings',
          title: 'Color Schemes',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-social-googleplus-outline',
          title: 'Google Fonts',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-heart-outline',
          title: 'Clean Codes',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-color-wand-outline',
          title: 'Responsive Design',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-checkmark-outline',
          title: 'Easy to Use',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-photos-outline',
          title: 'Perfect Showcase',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }, {
          icon: 'ion-ios-videocam-outline',
          title: 'Video Animation',
          description: 'Lorem ipsum madolor sit amet, consectetur adipisicing elit.'
        }];
      }

      _createClass(SpecialitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpecialitiesComponent;
    }();

    SpecialitiesComponent.??fac = function SpecialitiesComponent_Factory(t) {
      return new (t || SpecialitiesComponent)();
    };

    SpecialitiesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SpecialitiesComponent,
      selectors: [["app-specialities"]],
      decls: 11,
      vars: 1,
      consts: [[1, "overview-block-ptb", "grey-bg", "iq-specialities"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], ["class", "col-sm-12 col-lg-3 col-md-6 iq-mb-30", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-lg-3", "col-md-6", "iq-mb-30"], ["aria-hidden", "true", "cardMedia", "", 3, "ngClass"], ["cardBody", ""], [1, "iq-tw-7", "iq-pt-20", "iq-pb-10"]],
      template: function SpecialitiesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Sofbox Specialities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, SpecialitiesComponent_div_10_Template, 8, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _sofbox_components_card_card_style6_card_style6_component__WEBPACK_IMPORTED_MODULE_2__["CardStyle6Component"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy9zcGVjaWFsaXRpZXMvc3BlY2lhbGl0aWVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SpecialitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-specialities',
          templateUrl: './specialities.component.html',
          styleUrls: ['./specialities.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/components/team/team.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/landing-page4/components/team/team.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppLandingPage4ComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sofbox_components_card_card_style8_card_style8_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../sofbox/components/card/card-style8/card-style8.component */
    "./src/app/sofbox/components/card/card-style8/card-style8.component.ts");

    function TeamComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-card-style8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r1.subtitle);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);

        this.list = [{
          title: 'JD Adams',
          subtitle: 'Web Designer',
          image: './assets/images/team/01.jpg'
        }, {
          title: 'Rinkal Oberoi',
          subtitle: 'Web Designer',
          image: './assets/images/team/02.jpg'
        }, {
          title: 'Jason Deol',
          subtitle: 'Web Designer',
          image: './assets/images/team/03.jpg'
        }, {
          title: 'kush Jackson',
          subtitle: 'Web Designer',
          image: './assets/images/team/04.jpg'
        }];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.??fac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 11,
      vars: 1,
      consts: [["id", "team", 1, "overview-block-ptb", "white-bg"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], ["class", "col-sm-12 col-lg-3 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-lg-3", "col-md-6"], ["cardMedia", "", "alt", "#", 1, "img-fluid", "center-block", 3, "src"], ["cardHeader", ""], [1, "iq-font-black", "iq-tw-7"], [1, "team-post"], ["cardOverlay", ""], ["href", "javascript:void(0)"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook"], [1, "fab", "fa-google"], [1, "fab", "fa-github"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Meet the Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, TeamComponent_div_10_Template, 22, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _sofbox_components_card_card_style8_card_style8_component__WEBPACK_IMPORTED_MODULE_2__["CardStyle8Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy90ZWFtL3RlYW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TeamComponent, [{
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
  "./src/app/landing-page4/components/testimonial/testimonial.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/landing-page4/components/testimonial/testimonial.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TestimonialComponent */

  /***/
  function srcAppLandingPage4ComponentsTestimonialTestimonialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function () {
      return TestimonialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sofbox_components_card_card_style7_card_style7_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../sofbox/components/card/card-style7/card-style7.component */
    "./src/app/sofbox/components/card/card-style7/card-style7.component.ts");

    var TestimonialComponent = /*#__PURE__*/function () {
      function TestimonialComponent() {
        _classCallCheck(this, TestimonialComponent);
      }

      _createClass(TestimonialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialComponent;
    }();

    TestimonialComponent.??fac = function TestimonialComponent_Factory(t) {
      return new (t || TestimonialComponent)();
    };

    TestimonialComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: TestimonialComponent,
      selectors: [["app-testimonial"]],
      decls: 48,
      vars: 0,
      consts: [[1, "overview-block-ptb", "white-bg", "iq-loved-customers"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title"], [1, "title", "iq-tw-7"], ["data-autoplay", "true", "data-loop", "true", "data-nav", "true", "data-dots", "false", "data-items", "3", "data-items-laptop", "3", "data-items-tab", "2", "data-items-mobile", "1", "data-items-mobile-sm", "1", "data-margin", "30", 1, "owl-carousel"], [1, "item"], ["cardMedia", ""], ["alt", "#", "src", "./assets/images/testimonial/01.jpg", 1, "img-fluid", "rounded-circle"], ["cardHeader", ""], [1, "iq-tw-6"], [1, "sub-title"], ["cardBody", ""], ["alt", "#", "src", "./assets/images/testimonial/02.jpg", 1, "img-fluid", "rounded-circle"]],
      template: function TestimonialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Loved By Our Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "app-card-style7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Jason Adams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "CEO, Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "app-card-style7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Jenny Adams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "CEO, Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "app-card-style7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "John Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "CEO, Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_sofbox_components_card_card_style7_card_style7_component__WEBPACK_IMPORTED_MODULE_1__["CardStyle7Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvY29tcG9uZW50cy90ZXN0aW1vbmlhbC90ZXN0aW1vbmlhbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonial',
          templateUrl: './testimonial.component.html',
          styleUrls: ['./testimonial.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page4/index/index.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing-page4/index/index.component.ts ***!
    \********************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppLandingPage4IndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../assets/images/logo.png */
    "./src/assets/images/logo.png");
    /* harmony import */


    var _constants_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../constants/menu */
    "./src/constants/menu.js");
    /* harmony import */


    var _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sofbox/plugins.service */
    "./src/app/sofbox/plugins.service.ts");
    /* harmony import */


    var _sofbox_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../sofbox/components/loader/loader.component */
    "./src/app/sofbox/components/loader/loader.component.ts");
    /* harmony import */


    var _sofbox_components_partials_headers_header_style1_header_style1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../sofbox/components/partials/headers/header-style1/header-style1.component */
    "./src/app/sofbox/components/partials/headers/header-style1/header-style1.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/home/home.component */
    "./src/app/landing-page4/components/home/home.component.ts");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/about/about.component */
    "./src/app/landing-page4/components/about/about.component.ts");
    /* harmony import */


    var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/testimonial/testimonial.component */
    "./src/app/landing-page4/components/testimonial/testimonial.component.ts");
    /* harmony import */


    var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/pricing/pricing.component */
    "./src/app/landing-page4/components/pricing/pricing.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../components/team/team.component */
    "./src/app/landing-page4/components/team/team.component.ts");
    /* harmony import */


    var _components_compare_service_compare_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/compare-service/compare-service.component */
    "./src/app/landing-page4/components/compare-service/compare-service.component.ts");
    /* harmony import */


    var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../components/faq/faq.component */
    "./src/app/landing-page4/components/faq/faq.component.ts");
    /* harmony import */


    var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../components/clients/clients.component */
    "./src/app/landing-page4/components/clients/clients.component.ts");
    /* harmony import */


    var _sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../sofbox/components/parallax-hero-style1/parallax-hero-style1.component */
    "./src/app/sofbox/components/parallax-hero-style1/parallax-hero-style1.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../components/contact/contact.component */
    "./src/app/landing-page4/components/contact/contact.component.ts");
    /* harmony import */


    var _sofbox_components_partials_footers_footer_style3_footer_style3_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../sofbox/components/partials/footers/footer-style3/footer-style3.component */
    "./src/app/sofbox/components/partials/footers/footer-style3/footer-style3.component.ts");
    /* harmony import */


    var _sofbox_components_color_customizer_color_customizer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../sofbox/components/color-customizer/color-customizer.component */
    "./src/app/sofbox/components/color-customizer/color-customizer.component.ts");
    /* harmony import */


    var _sofbox_components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../sofbox/components/scroll-top/scroll-top.component */
    "./src/app/sofbox/components/scroll-top/scroll-top.component.ts"); // @ts-ignore


    var IndexComponent = /*#__PURE__*/function () {
      //public footerText = '?? 2018 Sofbox Developed by <b>iqonicthemes</b>.';
      function IndexComponent(plugins) {
        _classCallCheck(this, IndexComponent);

        this.plugins = plugins;
        this.navLogo = _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"]; // public navItems: any = [
        //   { href: '#iq-home', title: 'Home', active: true,
        //     children: true,
        //     child: subHeader
        //   },
        //   { href: '#how-it-works', title: 'About' },
        //   { href: '#software-features', title: 'Service' },
        //   /*{ href: '#great-screenshots', title: 'Screenshots' },*/
        //   { href: '#pricing', title: 'Pricing'},
        //   { href: '#team', title: 'Team' },
        //   { href: '#blog', title: 'Blog' },
        //   { href: '#contact-us', title: 'Contact' }
        // ];

        this.navItems = [{
          href: '#iq-home',
          title: 'Home'
        }, {
          href: '#how-it-works',
          title: 'About'
        }, {
          href: '#software-features',
          title: 'Solution',
          children: true,
          child: _constants_menu__WEBPACK_IMPORTED_MODULE_2__["subHeader"]
        }, {
          href: '#team',
          title: 'Support'
        }, {
          href: '#contact',
          title: 'Contact'
        }];
        this.footerText = 'Copyright ?? 2021 <a href="https://www.scorpius.com.my"target="_blank">Scorpius Solutions</a>. All rights reserved</p>';
      }

      _createClass(IndexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this; // tslint:disable-next-line:only-arrow-functions

          setTimeout(function () {
            current.plugins.index();
          }, 200);
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.??fac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]));
    };

    IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      decls: 58,
      vars: 3,
      consts: [[3, "logoImg", "navItemList", "styledLogo"], [1, "main-content"], ["classNames", "iq-ptb-100 iq-newsletter iq-bg-over iq-over-blue-90 jarallax", "bgImage", "./assets/images/bg/01.jpg"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "heading-title", "white", "iq-mb-40"], [1, "title", "iq-tw-7"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "form-inline"], ["type", "text", "name", "email", "value", "...", "autocomplete", "username email", 2, "display", "none"], [1, "form-group"], ["for", "inputPassword2", 1, "sr-only"], ["type", "password", "id", "inputPassword2", "placeholder", "Enter your email", "autocomplete", "new-password", 1, "form-control"], ["href", "javascript:void(0)", 1, "button", "bt-black", "iq-ml-25"], ["address", ""], ["phone", ""], ["mail", ""], ["links", ""], ["href", "javascript:void(0)"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook"], [1, "fab", "fa-google"], [1, "fab", "fa-github"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-header-style1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "app-testimonial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "app-pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "app-team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "app-compare-service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "app-faq");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "app-clients");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "app-parallax-hero-style1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Subscribe Our Newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "subscribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "app-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "app-footer-style3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " 71 Jalan Setia Indah U13/13N, Setia Alam Seksyen U13, 40170 Shah Alam, Selangor, Malaysia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "+060 16-637 5010 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Mon-Fri 8:00am - 8:00pm ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " info@scorpius.com.my ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "24 X 7 online support ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "ul", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "app-color-customizer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "app-scroll-top");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems)("styledLogo", false);
        }
      },
      directives: [_sofbox_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _sofbox_components_partials_headers_header_style1_header_style1_component__WEBPACK_IMPORTED_MODULE_5__["HeaderStyle1Component"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_8__["TestimonialComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_9__["PricingComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_10__["TeamComponent"], _components_compare_service_compare_service_component__WEBPACK_IMPORTED_MODULE_11__["CompareServiceComponent"], _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"], _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_13__["ClientsComponent"], _sofbox_components_parallax_hero_style1_parallax_hero_style1_component__WEBPACK_IMPORTED_MODULE_14__["ParallaxHeroStyle1Component"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _sofbox_components_partials_footers_footer_style3_footer_style3_component__WEBPACK_IMPORTED_MODULE_16__["FooterStyle3Component"], _sofbox_components_color_customizer_color_customizer_component__WEBPACK_IMPORTED_MODULE_17__["ColorCustomizerComponent"], _sofbox_components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_18__["ScrollTopComponent"]],
      styles: ["\n/* Style.css import */\n/*\n\nTemplate: Sofbox - Angular 8 Software landing page\nAuthor: iqonic.design\nVersion: 3.0\nDesign and Developed by: iqonic.design\n\n*/\n/*================================================\n[  Table of contents  ]\n================================================\n\n:: General\n:: Back to Top\n:: Loader\n:: Buttons\n:: Page Section Margin Padding\n:: Text Weight\n:: Text Color\n:: Font Size\n:: Background Color\n:: BG Effect\n:: Background Gradient\n:: Section Title\n:: Header\n:: Banner\n:: How it Works\n:: Who is Sofbox ?\n:: Software Features\n:: Great screenshots\n:: Special Features\n:: More Useful Infomation\n:: Sofbox Specialities\n:: Counter\n:: Loved By Our Customers\n:: Affordable Price\n:: Meet the Team\n:: Compare Services\n:: Frequently Asked Questions\n:: Latest Blog Post\n:: Our clients\n:: Subscribe Our Newsletter\n:: Get in Touch\n:: Footer Info\n:: Breadcrumb Inner Page\n:: Blog Page\n:: Blog - SideBar\n:: 404 Error\n:: Coming Soon\n:: jarallax\n:: TERMS OF SERVICE\n:: OWL Carousel\n:: Testimonial\n:: Pricing Table\n:: Feature\n:: Extra\n\n======================================\n[ End table content ]\n======================================*/\n/*---------------------------------------------------------------------\n                               General\n-----------------------------------------------------------------------*/\n*::-moz-selection {\n  background: #4ac4f3;\n  color: #fff;\n  text-shadow: none;\n}\n::-moz-selection {\n  background: #4ac4f3;\n  color: #fff;\n  text-shadow: none;\n}\n::selection {\n  background: #4ac4f3;\n  color: #fff;\n  text-shadow: none;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  font-size: 16px;\n  line-height: 2;\n  color: #666666;\n  overflow-x: hidden;\n}\na,\n.button {\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  color: #333333;\n}\na:focus {\n  text-decoration: none !important;\n}\na:focus,\na:hover {\n  color: #4ac4f3;\n  text-decoration: none !important;\n}\na,\n.button,\ninput {\n  outline: medium none !important;\n  color: #4ac4f3;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Raleway', sans-serif;\n  font-weight: normal;\n  color: #333333;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  line-height: 1.2;\n}\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  color: inherit;\n}\nh1 {\n  font-size: 52px;\n  font-style: normal;\n\n}\nh2 {\n  font-size: 40px;\n  font-style: normal;\n}\nh3 {\n  font-size: 36px;\n  font-style: normal;\n}\nh4 {\n  font-size: 24px;\n  font-style: normal;\n}\nh5 {\n  font-size: 20px;\n  font-style: normal;\n}\nh6 {\n  font-size: 18px;\n  font-style: normal;\n}\n.lead {\n  font-size: 16px;\n  margin: 0;\n}\nul {\n  margin: 0px;\n  padding: 0px;\n}\nli {\n  list-style: none;\n}\nhr {\n  margin: 0;\n  padding: 0px;\n  border-bottom: 1px solid #e0e0e0;\n  border-top: 0px;\n}\nlabel {\n  font-size: 15px;\n  font-weight: 400;\n  color: #aaaaaa;\n}\n.label {\n  color: #fff !important;\n  font-size: 9px !important;\n}\n.blockquote,\nblockquote {\n  border-left: 5px solid #4ac4f3;\n  font-size: 16px;\n}\n.no-padding {\n  padding: 0px !important;\n}\n.no-border {\n  border: none !important;\n}\n.container {\n  max-width: 1170px;\n}\n/*---------------------------------------------------------------------\n                               Back to Top\n-----------------------------------------------------------------------*/\n#back-to-top .top {\n  z-index: 999;\n  position: fixed;\n  margin: 0px;\n  color: #fff;\n  background: #333333;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  z-index: 999;\n  font-size: 26px;\n  width: 50px;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  border-radius: 90px;\n  transition: all .3s ease-in-out;\n}\n#back-to-top .top:hover {\n  background: #4ac4f3;\n  color: #fff;\n  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);\n}\n/*---------------------------------------------------------------------\n                                Loader\n-----------------------------------------------------------------------*/\n#loading {\n  background-color: #eee;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  margin-top: 0px;\n  top: 0px;\n  left: 0px;\n  bottom: 0px;\n  overflow: hidden !important;\n  right: 0px;\n  z-index: 999999;\n}\n#loading-center {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.loader {\n  width: 3em;\n  height: 3em;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n}\n@-webkit-keyframes rotate {\n  0% {\n    transform: rotateX(-37.5deg) rotateY(45deg);\n  }\n  50% {\n    transform: rotateX(-37.5deg) rotateY(405deg);\n  }\n  100% {\n    transform: rotateX(-37.5deg) rotateY(405deg);\n  }\n}\n@keyframes rotate {\n  0% {\n    transform: rotateX(-37.5deg) rotateY(45deg);\n  }\n  50% {\n    transform: rotateX(-37.5deg) rotateY(405deg);\n  }\n  100% {\n    transform: rotateX(-37.5deg) rotateY(405deg);\n  }\n}\n.cube,\n.cube * {\n  position: absolute;\n  width: 71px;\n  height: 71px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n.sides {\n  -webkit-animation: rotate 3s ease infinite;\n  animation: rotate 3s ease infinite;\n  -webkit-animation-delay: .8s;\n  animation-delay: .8s;\n  transform-style: preserve-3d;\n  transform: rotateX(-37.5deg) rotateY(45deg);\n}\n.cube .sides * {\n  box-sizing: border-box;\n  background-color: rgba(74, 196, 243, 0.8);\n  border: 5px solid white;\n}\n.cube .sides .top {\n  -webkit-animation: top-animation 3s ease infinite;\n  animation: top-animation 3s ease infinite;\n  -webkit-animation-delay: 0ms;\n  animation-delay: 0ms;\n  transform: rotateX(90deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes top-animation {\n  0% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n}\n@keyframes top-animation {\n  0% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(90deg) translateZ(90px);\n  }\n}\n.cube .sides .bottom {\n  -webkit-animation: bottom-animation 3s ease infinite;\n  animation: bottom-animation 3s ease infinite;\n  -webkit-animation-delay: 0ms;\n  animation-delay: 0ms;\n  transform: rotateX(-90deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes bottom-animation {\n  0% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n}\n@keyframes bottom-animation {\n  0% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateX(-90deg) translateZ(90px);\n  }\n}\n.cube .sides .front {\n  -webkit-animation: front-animation 3s ease infinite;\n  animation: front-animation 3s ease infinite;\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n  transform: rotateY(0deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes front-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n}\n@keyframes front-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(0deg) translateZ(90px);\n  }\n}\n.cube .sides .back {\n  -webkit-animation: back-animation 3s ease infinite;\n  animation: back-animation 3s ease infinite;\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n  transform: rotateY(-180deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes back-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n}\n@keyframes back-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(-180deg) translateZ(90px);\n  }\n}\n.cube .sides .left {\n  -webkit-animation: left-animation 3s ease infinite;\n  animation: left-animation 3s ease infinite;\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n  transform: rotateY(-90deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes left-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n}\n@keyframes left-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(-90deg) translateZ(90px);\n  }\n}\n.cube .sides .right {\n  -webkit-animation: right-animation 3s ease infinite;\n  animation: right-animation 3s ease infinite;\n  -webkit-animation-delay: 100ms;\n  animation-delay: 100ms;\n  transform: rotateY(90deg) translateZ(90px);\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  transform-origin: 50% 50%;\n}\n@-webkit-keyframes right-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n}\n@keyframes right-animation {\n  0% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n  20% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(35px);\n  }\n  70% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(35px);\n  }\n  90% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n  100% {\n    opacity: 1;\n    transform: rotateY(90deg) translateZ(90px);\n  }\n}\n/*----------------------------------------------------------------------\n                        Buttons\n-----------------------------------------------------------------------*/\n.button {\n  color: #fff;\n  cursor: pointer;\n  padding: 12px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  position: relative;\n  background: #4ac4f3;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n}\n.button:hover,\n.button:focus {\n  color: #ffffff;\n  background: #333333;\n}\n/* Buttons white */\n.button.bt-white {\n  color: #333;\n  background: #fff;\n}\n.button.bt-white:hover,\n.button.bt-white:focus {\n  color: #ffffff;\n  background: #4ac4f3;\n}\n/* Buttons white 2 */\n.button.bt-black {\n  color: #333;\n  background: #fff;\n}\n.button.bt-black:hover,\n.button.bt-black:focus {\n  color: #ffffff;\n  background: #333;\n}\n.button.bt-blue {\n  color: #fff;\n  background: #4ac4f3;\n}\n.button.bt-blue:hover {\n  background-color: #333;\n}\n/* Butten blue shadow */\n.button-blue-shadow {\n  color: #fff;\n  cursor: pointer;\n  padding: 12px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  position: relative;\n  background: #4ac3f3;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n  box-shadow: 0px 20px 70px -16px rgba(74, 195, 243, 1);\n}\n.button-blue-shadow:hover,\n.button-blue-shadow:focus {\n  color: #ffffff;\n  background: #333333;\n}\n/* Butten white shadow */\n.button-white-shadow {\n  color: #4ac3f3;\n  cursor: pointer;\n  padding: 12px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: none;\n  position: relative;\n  background: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n  box-shadow: 0px 20px 70px -16px rgba(74, 195, 243, 1);\n}\n.button-white-shadow:hover,\n.button-white-shadow:focus {\n  color: #ffffff;\n  background: #333333;\n}\n/* Butten Line */\n.button-line {\n  color: #4ac3f3;\n  cursor: pointer;\n  padding: 10px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: 2px solid #4ac3f3;\n  position: relative;\n  background: #ffffff;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n}\n.button-line:hover,\n.button-line:focus {\n  color: #ffffff;\n  background: #4ac3f3;\n}\n/* Butten Line white*/\n.button-line-white {\n  color: #fff;\n  cursor: pointer;\n  padding: 12px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: 2px solid #fff;\n  position: relative;\n  background: transparent;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n}\n.button-line-white:hover,\n.button-line-white:focus {\n  color: #333;\n  border: 2px solid #333;\n}\n/* Butten Line shadow */\n.button-line-shadow {\n  color: #4ac3f3;\n  cursor: pointer;\n  padding: 10px 36px;\n  font-weight: 500;\n  font-size: 16px;\n  border: 2px solid #4ac3f3;\n  position: relative;\n  background: none;\n  font-family: 'Raleway', sans-serif;\n  display: inline-block;\n  border-radius: 4px;\n  box-shadow: 0px 20px 70px -16px rgba(74, 195, 243, 1);\n}\n.button-line-shadow:hover,\n.button-line-shadow:focus {\n  color: #ffffff;\n  background: #4ac3f3;\n}\n/*---------------------------------------------------------------------\n                    Page Section Margin Padding\n---------------------------------------------------------------------*/\n/*----------------\nSection padding\n----------------*/\n.overview-block-ptb {\n  padding: 100px 0;\n}\n.overview-block-pt {\n  padding: 100px 0 0;\n}\n.overview-block-pb {\n  padding: 0 0 100px;\n}\n/*----------------\nPadding All\n----------------*/\n.iq-pall {\n  padding: 0px;\n}\n.iq-pall-10 {\n  padding: 10px;\n}\n.iq-pall-15 {\n  padding: 15px;\n}\n.iq-pall-20 {\n  padding: 20px;\n}\n.iq-pall-25 {\n  padding: 25px;\n}\n.iq-pall-30 {\n  padding: 30px;\n}\n.iq-pall-40 {\n  padding: 40px;\n}\n.iq-pall-50 {\n  padding: 50px;\n}\n.iq-pall-60 {\n  padding: 60px;\n}\n.iq-pall-70 {\n  padding: 70px;\n}\n.iq-pall-80 {\n  padding: 80px;\n}\n.iq-pall-90 {\n  padding: 90px;\n}\n.iq-pall-100 {\n  padding: 100px;\n}\n/*----------------\nPadding Top and Bottom\n----------------*/\n.iq-ptb-0 {\n  padding: 0;\n}\n.iq-ptb-10 {\n  padding: 10px 0;\n}\n.iq-ptb-15 {\n  padding: 15px 0;\n}\n.iq-ptb-20 {\n  padding: 20px 0;\n}\n.iq-ptb-25 {\n  padding: 25px 0;\n}\n.iq-ptb-30 {\n  padding: 30px 0;\n}\n.iq-ptb-40 {\n  padding: 40px 0;\n}\n.iq-ptb-50 {\n  padding: 50px 0;\n}\n.iq-ptb-60 {\n  padding: 60px 0;\n}\n.iq-ptb-70 {\n  padding: 70px 0;\n}\n.iq-ptb-80 {\n  padding: 80px 0;\n}\n.iq-ptb-90 {\n  padding: 90px 0;\n}\n.iq-ptb-100 {\n  padding: 100px 0;\n}\n/*----------------\nPadding Left and right\n----------------*/\n.iq-plr-0 {\n  padding: 0;\n}\n.iq-plr-10 {\n  padding: 0 10px;\n}\n.iq-plr-15 {\n  padding: 0 15px;\n}\n.iq-plr-20 {\n  padding: 0 20px;\n}\n.iq-plr-25 {\n  padding: 0 25px;\n}\n.iq-plr-30 {\n  padding: 0 30px;\n}\n.iq-plr-40 {\n  padding: 0 40px;\n}\n.iq-plr-50 {\n  padding: 0 50px;\n}\n.iq-plr-60 {\n  padding: 0 60px;\n}\n.iq-plr-70 {\n  padding: 0 70px;\n}\n.iq-plr-80 {\n  padding: 0 80px;\n}\n.iq-plr-90 {\n  padding: 0 90px;\n}\n.iq-plr-100 {\n  padding: 0 100px;\n}\n/*----------------\nPadding top\n----------------*/\n.iq-pt-0 {\n  padding-top: 0px;\n}\n.iq-pt-10 {\n  padding-top: 10px;\n}\n.iq-pt-15 {\n  padding-top: 15px;\n}\n.iq-pt-20 {\n  padding-top: 20px;\n}\n.iq-pt-25 {\n  padding-top: 25px;\n}\n.iq-pt-30 {\n  padding-top: 30px;\n}\n.iq-pt-40 {\n  padding-top: 40px;\n}\n.iq-pt-50 {\n  padding-top: 50px;\n}\n.iq-pt-60 {\n  padding-top: 60px;\n}\n.iq-pt-70 {\n  padding-top: 70px;\n}\n.iq-pt-80 {\n  padding-top: 80px;\n}\n.iq-pt-90 {\n  padding-top: 90px;\n}\n.iq-pt-100 {\n  padding-top: 100px;\n}\n/*----------------\nPadding Bottom\n----------------*/\n.iq-pb-0 {\n  padding-bottom: 0px;\n}\n.iq-pb-10 {\n  padding-bottom: 10px;\n}\n.iq-pb-15 {\n  padding-bottom: 15px;\n}\n.iq-pb-20 {\n  padding-bottom: 20px;\n}\n.iq-pb-25 {\n  padding-bottom: 25px;\n}\n.iq-pb-30 {\n  padding-bottom: 30px;\n}\n.iq-pb-40 {\n  padding-bottom: 40px;\n}\n.iq-pb-50 {\n  padding-bottom: 50px;\n}\n.iq-pb-60 {\n  padding-bottom: 60px;\n}\n.iq-pb-70 {\n  padding-bottom: 70px;\n}\n.iq-pb-80 {\n  padding-bottom: 80px;\n}\n.iq-pb-90 {\n  padding-bottom: 90px;\n}\n.iq-pb-100 {\n  padding-bottom: 100px;\n}\n/*----------------\nPadding Left\n----------------*/\n.iq-pl-0 {\n  padding-left: 0;\n}\n.iq-pl-10 {\n  padding-left: 10px;\n}\n.iq-pl-15 {\n  padding-left: 15px;\n}\n.iq-pl-20 {\n  padding-left: 20px;\n}\n.iq-pl-25 {\n  padding-left: 25px;\n}\n.iq-pl-30 {\n  padding-left: 30px;\n}\n.iq-pl-40 {\n  padding-left: 40px;\n}\n.iq-pl-50 {\n  padding-left: 50px;\n}\n.iq-pl-60 {\n  padding-left: 60px;\n}\n.iq-pl-70 {\n  padding-left: 70px;\n}\n.iq-pl-80 {\n  padding-left: 80px;\n}\n.iq-pl-90 {\n  padding-left: 90px;\n}\n.iq-pl-100 {\n  padding-left: 100px;\n}\n/*----------------\nPadding Right\n----------------*/\n.iq-pr-0 {\n  padding-right: 0px;\n}\n.iq-pr-10 {\n  padding-right: 10px;\n}\n.iq-pr-15 {\n  padding-right: 15px;\n}\n.iq-pr-20 {\n  padding-right: 20px;\n}\n.iq-pr-25 {\n  padding-right: 25px;\n}\n.iq-pr-30 {\n  padding-right: 30px;\n}\n.iq-pr-40 {\n  padding-right: 40px;\n}\n.iq-pr-50 {\n  padding-right: 50px;\n}\n.iq-pr-60 {\n  padding-right: 60px;\n}\n.iq-pr-70 {\n  padding-right: 70px;\n}\n.iq-pr-80 {\n  padding-right: 80px;\n}\n.iq-pr-90 {\n  padding-right: 90px;\n}\n.iq-pr-100 {\n  padding-right: 100px;\n}\n/*----------------\nMargin All\n----------------*/\n.iq-mall-0 {\n  margin: 0;\n}\n.iq-mall-10 {\n  margin: 10px;\n}\n.iq-mall-15 {\n  margin: 15px;\n}\n.iq-mall-20 {\n  margin: 20px;\n}\n.iq-mall-25 {\n  margin: 25px;\n}\n.iq-mall-30 {\n  margin: 30px;\n}\n.iq-mall-40 {\n  margin: 40px;\n}\n.iq-mall-50 {\n  margin: 50px;\n}\n.iq-mall-60 {\n  margin: 60px;\n}\n.iq-mall-70 {\n  margin: 70px;\n}\n.iq-mall-80 {\n  margin: 80px;\n}\n.iq-mall-90 {\n  margin: 90px;\n}\n.iq-mall-100 {\n  margin: 100px;\n}\n/*----------------\nMargin Top and Bottom\n----------------*/\n.iq-mtb-0 {\n  margin: 0;\n}\n.iq-mtb-10 {\n  margin: 10px 0;\n}\n.iq-mtb-15 {\n  margin: 15px 0;\n}\n.iq-mtb-20 {\n  margin: 20px 0;\n}\n.iq-mtb-25 {\n  margin: 25px 0;\n}\n.iq-mtb-30 {\n  margin: 30px 0;\n}\n.iq-mtb-40 {\n  margin: 40px 0;\n}\n.iq-mtb-50 {\n  margin: 50px 0;\n}\n.iq-mtb-60 {\n  margin: 60px 0;\n}\n.iq-mtb-70 {\n  margin: 70px 0;\n}\n.iq-mtb-80 {\n  margin: 80px 0;\n}\n.iq-mtb-90 {\n  margin: 90px 0;\n}\n.iq-mtb-100 {\n  margin: 100px 0;\n}\n/*----------------\nMargin Left and Right\n----------------*/\n.iq-mlr-0 {\n  margin: 0;\n}\n.iq-mlr-10 {\n  margin: 0 10px;\n}\n.iq-mlr-15 {\n  margin: 0 15px;\n}\n.iq-mlr-20 {\n  margin: 0 20px;\n}\n.iq-mlr-25 {\n  margin: 0 25px;\n}\n.iq-mlr-30 {\n  margin: 0 30px;\n}\n.iq-mlr-40 {\n  margin: 0 40px;\n}\n.iq-mlr-50 {\n  margin: 0 50px;\n}\n.iq-mlr-60 {\n  margin: 0 60px;\n}\n.iq-mlr-70 {\n  margin: 0 60px;\n}\n.iq-mlr-80 {\n  margin: 0 80px;\n}\n.iq-mlr-90 {\n  margin: 0 80px;\n}\n.iq-mlr-100 {\n  margin: 0 100px;\n}\n/*----------------\nMargin Top\n----------------*/\n.iq-mt-0 {\n  margin-top: 0px;\n}\n.iq-mt-5 {\n  margin-top: 5px;\n}\n.iq-mt-10 {\n  margin-top: 10px;\n}\n.iq-mt-15 {\n  margin-top: 15px;\n}\n.iq-mt-20 {\n  margin-top: 20px;\n}\n.iq-mt-25 {\n  margin-top: 25px;\n}\n.iq-mt-30 {\n  margin-top: 30px;\n}\n.iq-mt-40 {\n  margin-top: 40px;\n}\n.iq-mt-50 {\n  margin-top: 50px;\n}\n.iq-mt-60 {\n  margin-top: 60px;\n}\n.iq-mt-70 {\n  margin-top: 70px;\n}\n.iq-mt-80 {\n  margin-top: 80px;\n}\n.iq-mt-90 {\n  margin-top: 90px;\n}\n.iq-mt-100 {\n  margin-top: 100px;\n}\n/*----------------\nMargin Bottom\n----------------*/\n.iq-mb-0 {\n  margin-bottom: 0px;\n}\n.iq-mb-10 {\n  margin-bottom: 10px;\n}\n.iq-mb-15 {\n  margin-bottom: 15px;\n}\n.iq-mb-20 {\n  margin-bottom: 20px;\n}\n.iq-mb-25 {\n  margin-bottom: 25px;\n}\n.iq-mb-30 {\n  margin-bottom: 30px;\n}\n.iq-mb-40 {\n  margin-bottom: 40px;\n}\n.iq-mb-50 {\n  margin-bottom: 50px;\n}\n.iq-mb-60 {\n  margin-bottom: 60px;\n}\n.iq-mb-70 {\n  margin-bottom: 70px;\n}\n.iq-mb-80 {\n  margin-bottom: 80px;\n}\n.iq-mb-90 {\n  margin-bottom: 90px;\n}\n.iq-mb-100 {\n  margin-bottom: 100px;\n}\n/*----------------\nMargin Left\n----------------*/\n.iq-ml-0 {\n  margin-left: 0px;\n}\n.iq-ml-10 {\n  margin-left: 10px;\n}\n.iq-ml-15 {\n  margin-left: 15px;\n}\n.iq-ml-20 {\n  margin-left: 20px;\n}\n.iq-ml-25 {\n  margin-left: 25px;\n}\n.iq-ml-30 {\n  margin-left: 30px;\n}\n.iq-ml-40 {\n  margin-left: 40px;\n}\n.iq-ml-50 {\n  margin-left: 50px;\n}\n.iq-ml-60 {\n  margin-left: 60px;\n}\n.iq-ml-70 {\n  margin-left: 70px;\n}\n.iq-ml-80 {\n  margin-left: 80px;\n}\n.iq-ml-90 {\n  margin-left: 90px;\n}\n.iq-ml-100 {\n  margin-left: 100px;\n}\n/*----------------\nMargin Right\n----------------*/\n.iq-mr-0 {\n  margin-right: 0px;\n}\n.iq-mr-10 {\n  margin-right: 10px;\n}\n.iq-mr-15 {\n  margin-right: 15px;\n}\n.iq-mr-20 {\n  margin-right: 20px;\n}\n.iq-mr-25 {\n  margin-right: 25px;\n}\n.iq-mr-30 {\n  margin-right: 30px;\n}\n.iq-mr-40 {\n  margin-right: 40px;\n}\n.iq-mr-50 {\n  margin-right: 50px;\n}\n.iq-mr-60 {\n  margin-right: 60px;\n}\n.iq-mr-70 {\n  margin-right: 70px;\n}\n.iq-mr-80 {\n  margin-right: 80px;\n}\n.iq-mr-90 {\n  margin-right: 90px;\n}\n.iq-mr-100 {\n  margin-right: 100px;\n}\n/*---------------------------------------------------------------------\n                            Text Weight\n-----------------------------------------------------------------------*/\n.iq-tw-1 {\n  font-weight: 100;\n}\n.iq-tw-2 {\n  font-weight: 200;\n}\n.iq-tw-3 {\n  font-weight: 300;\n}\n.iq-tw-4 {\n  font-weight: 400;\n}\n.iq-tw-5 {\n  font-weight: 500;\n}\n.iq-tw-6 {\n  font-weight: 600;\n}\n.iq-tw-7 {\n  font-weight: 700;\n}\n.iq-tw-8 {\n  font-weight: 800;\n}\n.iq-tw-9 {\n  font-weight: 900;\n}\n/*---------------------------------------------------------------------\n                            Text Color\n-----------------------------------------------------------------------*/\n.iq-font-blue {\n  color: #4ac4f3;\n}\n.iq-font-white {\n  color: #ffffff;\n}\n.iq-font-black {\n  color: #333333;\n}\n.iq-font-light {\n  color: #666666;\n}\n/*---------------------------------------------------------------------\n                            Font Size\n-----------------------------------------------------------------------*/\n/*.iq-font-15 {\n  font-size: 15px;\n}*/\n.iq-font-20 {\n  font-size: 20px;\n}\n.iq-font-30 {\n  font-size: 30px;\n}\n/*---------------------------------------------------------------------\n                          Background Color\n-----------------------------------------------------------------------*/\n.white-bg {\n  background: #ffffff;\n}\n.grey-bg {\n  background: #f5f7fb;\n}\n.blue-bg {\n  background: #4ac4f3;\n}\n.dark-bg {\n  background: #222222;\n}\n.light-bg {\n  background: #f8f7ff;\n}\n.light-blue-bg {\n  background: #bbe5f6;\n}\n/*---------------------------------------------------------------------\n                             BG Effect\n-----------------------------------------------------------------------*/\n.iq-parallax {\n  position: relative;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  -moz-background-size: cover !important;\n  -ms-background-size: cover !important;\n  background-origin: initial;\n  background-position: center center !important;\n  background-repeat: no-repeat;\n}\n/*---------------------------------------------------------------------\n                       Background Gradient\n---------------------------------------------------------------------*/\n.iq-bg-over {\n  position: relative;\n}\n/* Background Gradient Blue */\n.iq-over-blue-10:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.1);\n}\n.iq-over-blue-20:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.2);\n}\n.iq-over-blue-30:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.3);\n}\n.iq-over-blue-40:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.4);\n}\n.iq-over-blue-50:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.5);\n}\n.iq-over-blue-60:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.6);\n}\n.iq-over-blue-70:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.7);\n}\n.iq-over-blue-80:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.8);\n}\n.iq-over-blue-85:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.85);\n}\n.iq-over-blue-90:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.9);\n}\n.iq-over-blue-95:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(74, 196, 243, 0.95);\n}\n/* Background Gradient Black */\n.iq-over-black-10:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.1);\n}\n.iq-over-black-20:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.2);\n}\n.iq-over-black-30:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.3);\n}\n.iq-over-black-40:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.4);\n}\n.iq-over-black-50:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.5);\n}\n.iq-over-black-60:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.6);\n}\n.iq-over-black-70:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.7);\n}\n.iq-over-black-80:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.8);\n}\n.iq-over-black-85:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.85);\n}\n.iq-over-black-90:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.9);\n}\n.iq-over-black-95:before {\n  content: \"\";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.95);\n}\n[class*='iq-over-']:before {\n  z-index: 0;\n}\n/* Background Gradient Black */\n.iq-over-Gradient-top {\n  background: rgba(255, 93, 177, 0);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 93, 177, 0)), color-stop(0%, rgba(255, 93, 177, 0)), color-stop(28%, rgba(204, 122, 195, 0)), color-stop(100%, rgba(74, 196, 243, 0.8)));\n  background: linear-gradient(to bottom, rgba(255, 93, 177, 0) 0%, rgba(255, 93, 177, 0) 0%, rgba(204, 122, 195, 0) 28%, rgba(74, 196, 243, 0.8) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5db1', endColorstr='#4ac4f3', GradientType=0);\n}\n/*---------------------------------------------------------------------\n                           Section Title\n-----------------------------------------------------------------------*/\n.heading-title {\n  margin-bottom: 60px;\n  text-align: center;\n}\n.heading-title .title {\n  position: relative;\n  padding-bottom: 20px;\n  margin-bottom: 25px;\n}\n.heading-title .title:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  border-radius: 4px;\n  left: 50%;\n  margin-left: -40px;\n  width: 80px;\n  height: 4px;\n  background: #4ac4f3;\n}\n.heading-title p {\n  display: block;\n  margin-bottom: 50px;\n}\n/* Section left title */\n.heading-title.left { margin-bottom: 20px; }\n.heading-title.left .title:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  border-radius: 4px;\n  left: 0;\n  margin-left: 0;\n  width: 80px;\n  height: 4px;\n  background: #4ac4f3;\n}\n/* Section title white */\n.heading-title.white .title {\n  color: #fff;\n}\n.heading-title.white .title:before {\n  background: #fff;\n}\n.iq-fadebounce {\n  -webkit-animation-name: fadebounce;\n  animation-name: fadebounce;\n  -webkit-animation-duration: 3s;\n  animation-duration: 3s;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n@-webkit-keyframes fadebounce {\n  0% {\n    transform: translateY(0);\n    opacity: 1\n  }\n  50% {\n    transform: translateY(20px);\n    opacity: 1\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1\n  }\n}\n@keyframes fadebounce {\n  0% {\n    transform: translateY(0);\n    opacity: 1\n  }\n  50% {\n    transform: translateY(20px);\n    opacity: 1\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1\n  }\n}\n/* Section title Style 2 */\n.heading-title-2 {\n  margin-bottom: 80px;\n  text-align: center;\n}\n.heading-title-2 .title {\n  position: relative;\n  padding-bottom: 0;\n  margin-bottom: 25px;\n}\n.heading-title-2 i {\n  font-size: 60px;\n  color: #4ac4f3;\n}\n/* Heading Title 2 Left */\n.heading-title-2.text-left {\n  text-align: left;\n  margin-bottom: 10px;\n}\n.heading-title-2.text-left .title {\n  position: relative;\n  padding-bottom: 20px;\n  margin-bottom: 25px;\n  padding-top: 10px;\n}\n.heading-title-2.text-left i {\n  font-size: 50px;\n  color: #4ac4f3;\n}\n/*---------------------------------------------------------------------\n                            Header\n-----------------------------------------------------------------------*/\nheader {\n  position: fixed;\n  display: inline-block;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  padding: 20px 0;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\nheader .container-fluid {\n  padding: 0 100px;\n}\nheader .navbar {\n  padding: 0;\n}\nheader .navbar .navbar-brand {\n  padding: 0;\n}\nheader .navbar .navbar-brand img {\n  height: 60px;\n  margin: 10px 0px;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\nheader .navbar .navbar-nav {\n  margin-top: 0;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\nheader .navbar .navbar-nav>li {\n  margin: 0 30px 0 0;\n  position: relative;\n}\nheader .navbar .navbar-nav>li:last-child {\n  margin-right: 0 !important;\n}\nheader .navbar .navbar-nav .nav-item a {\n  color: #ffffff;\n  padding: 10px 0;\n  font-family: 'Raleway', sans-serif;\n  font-size: 16px;\n}\nheader .navbar .navbar-nav .nav-item a:hover,\nheader .navbar .navbar-nav .nav-item a:focus,\nheader .navbar .navbar-nav .nav-item a.active,\nheader .navbar .navbar-nav .nav-item a.active:focus,\nheader .navbar .navbar-nav .nav-item a.active:hover {\n  color: #fff;\n  background: none;\n  box-shadow: none;\n}\nheader .navbar .navbar-nav .nav-item a::before {\n  background: #fff;\n  bottom: 0;\n  content: \"\";\n  height: 2px;\n  left: 0;\n  position: absolute;\n  width: 0;\n  transition: all 0.3s ease-out 0s;\n}\nheader .navbar .navbar-nav .nav-item a.active::before,\nheader .navbar .navbar-nav .nav-item:hover>a::before,\nheader .navbar .navbar-nav .nav-item>a:hover::before {\n  width: 100%;\n}\nheader .button,\nheader .button-line {\n  margin-top: 0;\n  margin-left: 40px;\n}\nheader#main-header .navbar .menu {\n  float: right;\n  margin: 0;\n  padding: 0;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\nheader#main-header .navbar .menu li .sub-menu {\n  display: none;\n  position: absolute;\n  top: 80px;\n  z-index: 1;\n  left: 0;\n  width: 200px;\n  padding: 0;\n  background: #fff;\n  margin: 0;\n  text-align: left;\n  box-shadow: 0px 5px 20px 0px rgba(51, 51, 51, 0.2);\n}\nheader#main-header .navbar .menu li .sub-menu li {\n  background: #fff;\n  border-bottom: 1px solid #eee;\n  color: #23292c;\n  font-size: 14px;\n  margin: 0;\n  display: inline-block;\n  width: 100%;\n}\nheader#main-header .navbar .menu li .sub-menu li a {\n  color: #23292c;\n  font-size: 14px;\n  padding: 15px !important;\n  line-height: 20px;\n  display: inline-block;\n  width: 100%;\n  transition: all 0s ease-in-out;\n  transition: all 0s ease-in-out;\n  -moz-transition: all 0s ease-in-out;\n  -ms-transition: all 0s ease-in-out;\n  -o-transition: all 0s ease-in-out;\n  -webkit-transition: all 0s ease-in-out;\n}\nheader#main-header .navbar .menu li .sub-menu li a.active {\n  color: var(--primary-theme-color);\n}\nheader#main-header .navbar .menu .menu-item a {\n  padding: 0;\n  line-height: 45px;\n  font-size: 16px;\n  position: relative;\n}\nheader#main-header .navbar .menu li a {\n  padding: 0;\n  line-height: normal;\n  font-size: 16px;\n}\nheader#main-header .navbar .menu li i {\n  padding-left: 5px;\n}\nheader#main-header .navbar .menu>li {\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  margin: 0 30px 0 0;\n  padding: 20px 0;\n  position: relative;\n  list-style: none;\n  float: left;\n}\n@media screen and (max-width: 3000px) and (min-width: 1023px) {\n  header#main-header .navbar .menu li:hover>.sub-menu {\n    display: block !important;\n  }\n}\nheader#main-header .navbar .menu li a {\n  padding: 0;\n  line-height: normal;\n  font-size: 16px;\n}\nheader#main-header .navbar .menu li .sub-menu li a:hover {\n  background: #fff;\n  color: var(--primary-theme-color);\n}\n/* Header sticky */\nheader.menu-sticky {\n  padding: 5px;\n  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);\n  background: rgba(74, 196, 243, 0.9);\n}\nheader.menu-sticky .navbar .navbar-brand img {\n  height: 50px;\n  margin: 10px 0;\n}\nheader.menu-sticky .navbar .menu>li {\n  padding: 10px 0 !important;\n}\nheader.menu-sticky .navbar .menu li .sub-menu {\n  top: 62px !important;\n}\n/* Header Fancy */\nheader.header-fancy .button {\n  margin-left: 30px;\n  padding: 0px 20px;\n  font-size: 28px;\n}\nheader.header-fancy .navbar .navbar-nav {\n  background: #fff;\n  border-radius: 4px;\n}\nheader.header-fancy .navbar .navbar-nav .nav-item a {\n  color: #333;\n  padding: 12px 20px;\n  font-weight: 500;\n}\nheader.header-fancy .navbar .navbar-nav>li {\n  margin: 0;\n}\nheader.header-fancy .navbar .navbar-nav .nav-item a::before {\n  display: none;\n}\nheader.header-fancy .navbar .navbar-nav .nav-item a:hover,\nheader.header-fancy .navbar .navbar-nav .nav-item a:focus,\nheader.header-fancy .navbar .navbar-nav .nav-item a.active,\nheader.header-fancy .navbar .navbar-nav .nav-item a.active:focus,\nheader.header-fancy .navbar .navbar-nav .nav-item a.active:hover {\n  color: #4ac4f3;\n  background: none;\n  box-shadow: none;\n}\n/* Header With Top Bar */\nheader.header-one {\n  position: fixed;\n  background-color: #fff;\n  display: inline-block;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  padding: 0;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\nheader.header-one .navbar .navbar-nav .nav-item a {\n  color: #333;\n  padding: 12px 20px;\n  font-weight: 500;\n}\nheader.header-one .navbar .navbar-nav>li {\n  margin: 0;\n}\nheader.header-one .navbar .navbar-nav .nav-item a::before {\n  display: none;\n}\nheader.header-one .navbar .navbar-nav .nav-item a:hover,\nheader.header-one .navbar .navbar-nav .nav-item a.active,\nheader.header-one .navbar .navbar-nav .nav-item a.active:focus,\nheader.header-one .navbar .navbar-nav .nav-item a.active:hover {\n  color: #4ac4f3;\n  background: none;\n  box-shadow: none;\n}\nheader.header-one .header-top-bar ul li {\n  display: inline-block;\n  margin: 0px 8px;\n}\nheader.header-one .header-top-bar ul li a {\n  color: #fff;\n  font-size: 14px\n}\nheader.header-one .header-top-bar ul li a:hover {\n  color: #4ac4f3;\n  font-size: 14px;\n}\n/*header.header-one .navbar { padding: 10px 0; }*/\n.header-one.menu-sticky {\n  background-color: #ffffff;\n}\n/* Header White */\nheader.header-white {\n  background: #fff;\n}\nheader.header-white .navbar .navbar-nav .nav-item a::before {\n  background: #4ac4f3;\n}\nheader.header-white .navbar .navbar-nav .nav-item a {\n  color: #333;\n}\nheader.header-white .navbar .navbar-nav .nav-item a:hover,\nheader.header-white .navbar .navbar-nav .nav-item a:focus,\nheader.header-white .navbar .navbar-nav .nav-item a.active,\nheader.header-white .navbar .navbar-nav .nav-item a.active:focus,\nheader.header-white .navbar .navbar-nav .nav-item a.active:hover {\n  color: #4ac4f3;\n  background: none;\n  box-shadow: none;\n}\n/* Header Dark */\nheader.dark .navbar .navbar-nav .nav-item a::before {\n  background: #4ac4f3;\n}\nheader.dark .navbar .navbar-nav .nav-item a {\n  color: #333;\n}\nheader.dark .navbar .navbar-nav .nav-item a:hover,\nheader.dark .navbar .navbar-nav .nav-item a:focus,\nheader.dark .navbar .navbar-nav .nav-item a.active,\nheader.dark .navbar .navbar-nav .nav-item a.active:focus,\nheader.dark .navbar .navbar-nav .nav-item a.active:hover {\n  color: #4ac4f3;\n  background: none;\n  box-shadow: none;\n}\n/* Header sticky */\nheader.dark.menu-sticky {\n  padding: 10px 0;\n  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n/*---------------------------------------------------------------------\n                            Banner\n-----------------------------------------------------------------------*/\n.iq-banner {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner .container-fluid {\n  padding: 0 90px;\n}\n.iq-banner:after {\n  content: \"\";\n  bottom: -5px;\n  left: 0;\n  width: 100%;\n  height: 84px;\n  background: url('02.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n}\n.iq-banner .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 13%;\n}\n.iq-banner .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner .banner-img {\n  width: 110%;\n}\n.iq-banner .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner .waves-box {\n  position: relative;\n}\n.iq-banner .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n@-webkit-keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n@keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n.iq-banner .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.iq-banner .banner-objects .banner-objects-01 {\n  position: absolute;\n  left: -8%;\n  bottom: -20%;\n  opacity: 0.1;\n}\n.iq-banner .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -125px;\n  left: -13%;\n  border: 15px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 250px;\n  width: 250px;\n}\n.iq-banner .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 0%;\n  right: -15%;\n  border: 30px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n/* Banner Wave One */\n.iq-banner.wave-one:after {\n  content: \"\";\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 330px;\n  background: url('14.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n}\n.iq-banner.wave-one .banner-text {\n  margin-top: 7%;\n  padding-bottom: 13%;\n}\n/* Banner 2 */\n.iq-banner-02 {\n  position: relative;\n}\n.iq-banner-02:after {\n  content: \"\";\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 78px;\n  background: url('04.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n}\n.iq-banner-02 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 13%;\n}\n.iq-banner-02 .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner-02 .banner-img {\n  margin-bottom: -80px;\n}\n.iq-banner-02 .banner-video {\n  margin-bottom: -50px;\n  width: 680px;\n  height: 383px;\n  box-shadow: 0px 5px 50px 1px rgba(102, 102, 102, 0.25);\n}\n.iq-banner-02 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.iq-banner-02 .banner-objects .banner-objects-01 {\n  position: absolute;\n  right: -0%;\n  bottom: 20%;\n  opacity: 0.2;\n}\n.iq-banner-02 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -280px;\n  left: -20%;\n  border: 30px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n.iq-banner-02 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 50%;\n  right: 25%;\n  border: 20px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 300px;\n  width: 300px;\n}\n.iq-banner-02 .banner-objects .banner-objects-04 {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  opacity: 0.2;\n}\n.iq-banner-02.no-before:after {\n  display: none;\n}\n/* Banner style 01 */\n.iq-banner-02.style-1:after {\n  display: none;\n}\n.iq-banner-02.style-1 .banner-img {\n  margin-bottom: 0;\n}\n.iq-banner-02.style-1 .banner-objects .banner-objects-01 {\n  bottom: 40%;\n  opacity: 0.6;\n}\n.iq-banner-02.style-1 .banner-objects .banner-objects-02 {\n  border: 30px solid rgba(74, 195, 243, 0.9);\n}\n.iq-banner-02.style-1 .banner-objects .banner-objects-03 {\n  border: 20px solid rgba(255, 255, 255, 0.3);\n}\n.iq-banner-02.style-1 .banner-objects .banner-objects-04 {\n  top: 20%;\n  opacity: 0.6;\n}\n/* Banner style 02 */\n.iq-banner-02.style-2:after {\n  display: none;\n}\n.iq-banner-02.style-2 .banner-img {\n  margin-bottom: 0;\n}\n/* Banner 3 */\n.iq-banner-03 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-03:after {\n  content: \"\";\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 230px;\n  background: url('06.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n}\n.iq-banner-03 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 13%;\n  margin-bottom: 5%;\n}\n.iq-banner-03 .banner-text h1 {\n  font-size: 55px;\n  line-height: normal;\n}\n.iq-banner-03 .banner-img {\n  width: 110%;\n}\n.iq-banner-03 .iq-banner-video {\n  position: relative;\n}\n.iq-banner-03 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner-03 .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner-03 .waves-box {\n  position: absolute;\n  top: 28%;\n  left: 39%;\n}\n.iq-banner-03 .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner-03 .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner-03 .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner-03 .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner-03 .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.iq-banner-03 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.iq-banner-03 .banner-objects .banner-objects-01 {\n  position: absolute;\n  left: 14%;\n  opacity: 0.4;\n}\n.iq-banner-03 .banner-objects .banner-objects-02 {\n  position: absolute;\n  margin-bottom: -125px;\n  left: -5%;\n  border: 15px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 250px;\n  width: 250px;\n}\n.iq-banner-03 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 19%;\n  right: 36%;\n  border: 20px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 250px;\n  width: 250px;\n}\n.iq-banner-03 .banner-objects .banner-objects-04 {\n  position: absolute;\n  top: 25%;\n  right: -3%;\n  opacity: 0.4;\n}\n/* Banner 4 */\n.iq-banner-04 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-04 .container-fluid {\n  padding: 0 90px;\n}\n.iq-banner-04:after {\n  content: \"\";\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 78px;\n  background: url('02.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n  z-index: 99;\n}\n.iq-banner-04 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 2%;\n}\n.iq-banner-04 .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner-04 .banner-img {\n  width: 100%;\n}\n.iq-banner-04 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner-04 .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner-04 .waves-box {\n  position: relative;\n}\n.iq-banner-04 .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner-04 .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner-04 .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner-04 .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner-04 .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.iq-banner-04 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.iq-banner-04 .banner-objects .banner-objects-01 {\n  position: absolute;\n  left: -8%;\n  bottom: -20%;\n  opacity: 0.1;\n}\n.iq-banner-04 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -125px;\n  left: -13%;\n  border: 15px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 250px;\n  width: 250px;\n}\n.iq-banner-04 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 0%;\n  right: -15%;\n  border: 30px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n/* Banner 5 */\n.iq-banner-05 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-05 .container-fluid {\n  padding: 0 90px;\n}\n.iq-banner-05 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 5%;\n}\n.iq-banner-05 .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner-05 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.iq-banner-05 .banner-objects .banner-objects-01 {\n  position: absolute;\n  right: -0%;\n  bottom: 20%;\n  opacity: 0.2;\n}\n.iq-banner-05 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -280px;\n  left: -20%;\n  border: 30px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n.iq-banner-05 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 50%;\n  right: 25%;\n  border: 20px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 300px;\n  width: 300px;\n}\n.iq-banner-05 .banner-objects .banner-objects-04 {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  opacity: 0.2;\n}\n.iq-banner-05 img {\n  width: 70%;\n}\n/* Banner 6 */\n.iq-banner-06 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-06 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 15%;\n  margin-bottom: 30px;\n}\n.iq-banner-06 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.iq-banner-06 .banner-objects .banner-objects-01 {\n  position: absolute;\n  right: -0%;\n  bottom: 20%;\n  opacity: 0.2;\n}\n.iq-banner-06 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -280px;\n  left: -20%;\n  border: 30px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n.iq-banner-06 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 19%;\n  right: 25%;\n  border: 20px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 300px;\n  width: 300px;\n}\n/* Banner 7 */\n.iq-banner-07 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-07 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 13%;\n  margin-bottom: 13%;\n}\n.iq-banner-07 .banner-img {\n  width: 100%;\n}\n.iq-banner-07 .iq-video {\n  background: #4ac4f3;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #fff;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner-07 .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner-07 .waves-box {\n  position: relative;\n}\n.iq-banner-07 .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner-07 .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(74, 196, 243, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner-07 .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner-07 .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner-07 .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n/* Banner 8 */\n.iq-banner-08 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-08 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 14%;\n  margin-bottom: 10%;\n}\n.iq-banner-08 .banner-text h1 {\n  font-size: 52px;\n  line-height: 70px;\n}\n.iq-banner-08 .banner-img {\n  width: 110%;\n}\n.iq-banner-08 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner-08 .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner-08 .waves-box {\n  position: relative;\n}\n.iq-banner-08 .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner-08 .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner-08 .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner-08 .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner-08 .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.animations {\n  display: table;\n  background: #FFFFFF;\n  width: 100%;\n  text-align: center;\n}\n.animations .animations-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.ani {\n  position: absolute;\n}\n.ani.ani-1 {\n  left: 30px;\n  top: 120px;\n  transform: scale(0.8);\n}\n.ani.ani-2 {\n  right: 25%;\n  top: 140px;\n  transform: scale(0.6);\n}\n.ani.ani-3 {\n  right: 100px;\n  bottom: 100px;\n  transform: translate(50%, 50%) scale(0.8);\n}\n.ani.ani-4 {\n  bottom: 98px;\n  left: 15%;\n}\n.ani.ani-5 {\n  left: 30px;\n  top: 70%;\n  transform: translateY(-50%);\n}\n.ani.ani-6 {\n  height: 320px;\n  width: 320px;\n  right: 0;\n  top: 0;\n}\n.ani-cube {\n  perspective: 20000px;\n  height: 100px;\n  width: 100px;\n  transform-style: preserve-3d;\n  transform: rotateX(-30deg) rotateY(40deg) rotateZ(360deg);\n  -webkit-animation: ani-cube-1 20s linear infinite;\n  animation: ani-cube-1 20s linear infinite;\n}\n.ani-cube .cube-face {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100px;\n  height: 100px;\n}\n.ani-cube .cube-face.face_front {\n  background-color: #4ac4f3;\n  transform: translate3d(0px, 0px, 50px);\n  z-index: 10;\n}\n.ani-cube .cube-face.face_right {\n  background-color: #52b8e0;\n  transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg) translate3d(0px, 0px, 50px);\n  z-index: 8;\n}\n.ani-cube .cube-face.face_left {\n  background-color: #52b8e0;\n  transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg) translate3d(0px, 0px, 50px);\n  z-index: 9;\n}\n.ani-cube .cube-face.face_top {\n  background-color: #6fd7ff;\n  transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, 50px);\n  z-index: 11;\n}\n.ani-cube .cube-face.face_bottom {\n  background-color: #6fd7ff;\n  transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, 50px);\n  z-index: 5;\n}\n.ani-cube .cube-face.face_back {\n  background-color: #4ac4f3;\n  transform: translate3d(0px, 0px, -50px);\n  z-index: 1;\n}\n.ani-cube.ani-cube-2 {\n  height: 40px;\n  transform: rotateX(143deg) rotateY(50deg) rotateZ(360deg);\n  -webkit-animation: ani-cube-2 10s linear infinite;\n  animation: ani-cube-2 10s linear infinite;\n}\n.ani-cube.ani-cube-2 .cube-face.face_front {\n  height: 40px;\n  transform: translate3d(0px, 0px, 100px);\n}\n.ani-cube.ani-cube-2 .cube-face.face_right {\n  width: 200px;\n  height: 40px;\n  transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg) translate3d(0px, 0px, 0);\n}\n.ani-cube.ani-cube-2 .cube-face.face_left {\n  width: 200px;\n  height: 40px;\n  transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg) translate3d(0px, 0px, 100px);\n}\n.ani-cube.ani-cube-2 .cube-face.face_top {\n  height: 200px;\n  transform: rotateX(90deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, 60px);\n}\n.ani-cube.ani-cube-2 .cube-face.face_bottom {\n  height: 200px;\n  transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, 0px, -100px);\n}\n.ani-cube.ani-cube-2 .cube-face.face_back {\n  height: 40px;\n  transform: translate3d(0px, 0px, -100px);\n}\n.ani-cube.ani-cube-3 {\n  transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(47deg);\n  -webkit-animation: ani-cube-3 20s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: ani-cube-3 20s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\n.ani-cube.ani-cube-3 .cube-face.face_front,\n.ani-cube.ani-cube-3 .cube-face.face_right,\n.ani-cube.ani-cube-3 .cube-face.face_left,\n.ani-cube.ani-cube-3 .cube-face.face_top,\n.ani-cube.ani-cube-3 .cube-face.face_bottom,\n.ani-cube.ani-cube-3 .cube-face.face_back {\n  border: 2px solid #4ac4f3;\n  border-radius: 2px;\n  background-color: transparent;\n  box-shadow: inset 0 0 0 2px #4ac4f3, 0 0 0 2px #4ac4f3;\n}\n.ani-hamburger {\n  height: 19px;\n  width: 30px;\n  -webkit-animation: rotate90 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: rotate90 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\n.ani-hamburger .hamburger-line {\n  position: absolute;\n  background-color: #4ac4f3;\n  height: 2px;\n  width: 100%;\n  left: 0;\n  transform-origin: center;\n}\n.ani-hamburger .hamburger-line.hamburger-line_top {\n  top: 0;\n  -webkit-animation: hamburger-line_top 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: hamburger-line_top 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\n.ani-hamburger .hamburger-line.hamburger-line_middle {\n  top: 50%;\n  -webkit-animation: hamburger-line_middle 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: hamburger-line_middle 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\n.ani-hamburger .hamburger-line.hamburger-line_bottom {\n  top: 100%;\n  -webkit-animation: hamburger-line_bottom 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: hamburger-line_bottom 4s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\n.moving-square-frame {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  top: 10px;\n  left: 10px;\n  opacity: .1;\n  border: 1px solid #000;\n}\n.ani-moving-square {\n  background: #4ac4f3;\n  height: 20px;\n  width: 20px;\n  -webkit-animation: ani-moving-square 6s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n  animation: ani-moving-square 6s cubic-bezier(0.7, 0, 0.7, 1) infinite;\n}\nsvg {\n  height: 100%;\n  width: 100%;\n}\nsvg #followPath {\n  fill: none;\n  stroke: #4ac4f3;\n  stroke-width: 8;\n  stroke-dasharray: 2870px;\n  stroke-dashoffset: 2870px;\n  -webkit-animation: drawPath 6s linear infinite;\n  animation: drawPath 6s linear infinite;\n}\nsvg #dashedPath {\n  fill: none;\n  stroke: #fff;\n  stroke-width: 14;\n  stroke-dasharray: 50px;\n}\nsvg #airplain {\n  fill: #4ac4f3;\n  transform: translate(-10px, -45px);\n}\n@-webkit-keyframes ani-cube-1 {\n  to {\n    transform: rotateX(-30deg) rotateY(40deg) rotateZ(0);\n  }\n}\n@keyframes ani-cube-1 {\n  to {\n    transform: rotateX(-30deg) rotateY(40deg) rotateZ(0);\n  }\n}\n@-webkit-keyframes ani-cube-2 {\n  to {\n    transform: rotateX(143deg) rotateY(50deg) rotateZ(0);\n  }\n}\n@keyframes ani-cube-2 {\n  to {\n    transform: rotateX(143deg) rotateY(50deg) rotateZ(0);\n  }\n}\n@-webkit-keyframes ani-cube-3 {\n  0% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(47deg);\n  }\n  5%,\n  15%,\n  25%,\n  35%,\n  45%,\n  55%,\n  65%,\n  75%,\n  85%,\n  95% {\n    transform: scale(0.8) rotateX(-63deg) rotateY(-23deg) rotateZ(47deg);\n  }\n  10%,\n  20%,\n  30%,\n  40%,\n  50%,\n  60%,\n  70%,\n  80%,\n  90% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(47deg);\n  }\n  100% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(407deg);\n  }\n}\n@keyframes ani-cube-3 {\n  0% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(47deg);\n  }\n  5%,\n  15%,\n  25%,\n  35%,\n  45%,\n  55%,\n  65%,\n  75%,\n  85%,\n  95% {\n    transform: scale(0.8) rotateX(-63deg) rotateY(-23deg) rotateZ(47deg);\n  }\n  10%,\n  20%,\n  30%,\n  40%,\n  50%,\n  60%,\n  70%,\n  80%,\n  90% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(47deg);\n  }\n  100% {\n    transform: scale(0.6) rotateX(-63deg) rotateY(13deg) rotateZ(407deg);\n  }\n}\n@-webkit-keyframes rotate90 {\n  0% {\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    transform: rotate(-90deg);\n  }\n  55%,\n  100% {\n    transform: rotate(0);\n  }\n}\n@keyframes rotate90 {\n  0% {\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    transform: rotate(-90deg);\n  }\n  55%,\n  100% {\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes hamburger-line_top {\n  0% {\n    top: 0;\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    top: 50%;\n    transform: rotate(45deg);\n  }\n  55%,\n  100% {\n    top: 0;\n    transform: rotate(0);\n  }\n}\n@keyframes hamburger-line_top {\n  0% {\n    top: 0;\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    top: 50%;\n    transform: rotate(45deg);\n  }\n  55%,\n  100% {\n    top: 0;\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes hamburger-line_middle {\n  0% {\n    opacity: 1;\n  }\n  5%,\n  50% {\n    opacity: 0;\n  }\n  55%,\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes hamburger-line_middle {\n  0% {\n    opacity: 1;\n  }\n  5%,\n  50% {\n    opacity: 0;\n  }\n  55%,\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes hamburger-line_bottom {\n  0% {\n    top: 100%;\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    top: 50%;\n    transform: rotate(-45deg);\n  }\n  55%,\n  100% {\n    top: 100%;\n    transform: rotate(0);\n  }\n}\n@keyframes hamburger-line_bottom {\n  0% {\n    top: 100%;\n    transform: rotate(0);\n  }\n  5%,\n  50% {\n    top: 50%;\n    transform: rotate(-45deg);\n  }\n  55%,\n  100% {\n    top: 100%;\n    transform: rotate(0);\n  }\n}\n@-webkit-keyframes ani-moving-square {\n  0%,\n  2.5% {\n    transform: translate(0, 0);\n  }\n  10%,\n  15% {\n    transform: translate(20px, 0);\n  }\n  22.5%,\n  27.5% {\n    transform: translate(20px, 20px);\n  }\n  35%,\n  40% {\n    transform: translate(0, 20px);\n  }\n  47.5%,\n  52.5% {\n    transform: translate(0, 0);\n  }\n  60%,\n  65% {\n    transform: translate(0, 20px);\n  }\n  72.5%,\n  77.5% {\n    transform: translate(20px, 20px);\n  }\n  85%,\n  90% {\n    transform: translate(20px, 0);\n  }\n  97.5%,\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes ani-moving-square {\n  0%,\n  2.5% {\n    transform: translate(0, 0);\n  }\n  10%,\n  15% {\n    transform: translate(20px, 0);\n  }\n  22.5%,\n  27.5% {\n    transform: translate(20px, 20px);\n  }\n  35%,\n  40% {\n    transform: translate(0, 20px);\n  }\n  47.5%,\n  52.5% {\n    transform: translate(0, 0);\n  }\n  60%,\n  65% {\n    transform: translate(0, 20px);\n  }\n  72.5%,\n  77.5% {\n    transform: translate(20px, 20px);\n  }\n  85%,\n  90% {\n    transform: translate(20px, 0);\n  }\n  97.5%,\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@-webkit-keyframes drawPath {\n  0% {\n    opacity: 1;\n    stroke-dashoffset: 2870px;\n  }\n  53% {\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  78% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes drawPath {\n  0% {\n    opacity: 1;\n    stroke-dashoffset: 2870px;\n  }\n  53% {\n    opacity: 1;\n    stroke-dashoffset: 0;\n  }\n  78% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    stroke-dashoffset: 0;\n  }\n}\n@media (max-width:1023px) {\n  .ani.ani-1 {\n    transform: scale(0.5);\n  }\n  .ani.ani-2 {\n    top: 120px;\n    transform: scale(0.3);\n  }\n  .ani.ani-5 {\n    top: 80%;\n  }\n  .ani.ani-6 {\n    max-height: 30vw;\n    max-width: 30vw;\n    max-height: 140px;\n    max-width: 140px;\n  }\n}\n/* Banner 09 */\n.iq-banner-09 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-09 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 10%;\n}\n.iq-banner-09 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.iq-banner-09 .banner-objects .banner-objects-01 {\n  position: absolute;\n  right: -0%;\n  bottom: 20%;\n  opacity: 0.2;\n}\n.iq-banner-09 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -280px;\n  left: -20%;\n  border: 30px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n.iq-banner-09 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 19%;\n  right: 25%;\n  border: 20px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 300px;\n  width: 300px;\n}\n.iq-banner-09 .form-group {\n  width: 72%;\n}\n.iq-banner-09 .form-control {\n  border-radius: 4px;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  padding-left: 25px;\n  box-shadow: none;\n  border: none;\n}\n.iq-banner-09 .banner-service {\n  background: rgb(255, 255, 255, 0.9);\n  margin: 100px 0px 50px;\n  padding: 18px 0;\n  border-radius: 5px;\n}\n.iq-banner-09 i {\n  font-size: 50px;\n  color: #4ac4f3;\n}\n.banner-service:hover,\n.banner-service:focus {\n  background: #fff;\n}\n/* Banner 10 */\n.iq-banner-10 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-10 .container-fluid {\n  padding: 0 90px;\n}\n.iq-banner-10:after {\n  content: \"\";\n  bottom: -2px;\n  left: 0;\n  width: 100%;\n  height: 330px;\n  background: url('14.png') no-repeat 0 0;\n  background-size: cover;\n  display: inline-block;\n  position: absolute;\n}\n.iq-banner-10 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 10%;\n  padding-bottom: 10%;\n}\n.iq-banner-10 .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner-10 .banner-img {\n  width: 90%;\n  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.36);\n}\n.iq-banner-10 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-banner-10 .iq-video i {\n  margin-left: 5px;\n}\n.iq-banner-10 .waves-box {\n  position: relative;\n}\n.iq-banner-10 .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -90px;\n  top: -90px;\n  z-index: 2;\n  float: right;\n}\n.iq-banner-10 .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.iq-banner-10 .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.iq-banner-10 .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.iq-banner-10 .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n@-webkit-keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n@keyframes waves {\n  0% {\n    transform: scale(0.2, 0.2);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n  50% {\n    opacity: 0.9;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";\n  }\n  100% {\n    transform: scale(0.9, 0.9);\n    opacity: 0;\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  }\n}\n.iq-banner-10 .banner-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.iq-banner-10 .banner-objects .banner-objects-01 {\n  position: absolute;\n  left: -8%;\n  bottom: -20%;\n  opacity: 0.1;\n}\n.iq-banner-10 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -125px;\n  left: -13%;\n  border: 15px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 250px;\n  width: 250px;\n}\n.iq-banner-10 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 0%;\n  right: -15%;\n  border: 30px solid rgba(255, 255, 255, 0.1);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n/* Banner 11 */\n.iq-banner-11 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-11 .container-fluid {\n  padding: 0 90px;\n}\n.iq-banner-11 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 8%;\n  margin-bottom: 100px;\n}\n.iq-banner-11 .banner-text h1 {\n  font-size: 64px;\n  line-height: normal;\n}\n.iq-banner-11 .banner-img {\n  width: 110%;\n}\n.iq-banner-11 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n/* Banner 12 */\n.iq-banner-12 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-banner-12 .banner-text {\n  z-index: 9;\n  position: relative;\n  margin-top: 13%;\n  margin-bottom: 3%;\n}\n.iq-banner-12 .banner-img {\n  max-width: 150%;\n}\n.iq-banner-12 .banner-objects .banner-objects-01 {\n  position: absolute;\n  right: -0%;\n  bottom: 20%;\n  opacity: 0.2;\n}\n.iq-banner-12 .banner-objects .banner-objects-02 {\n  position: absolute;\n  bottom: 50%;\n  margin-bottom: -280px;\n  left: -20%;\n  border: 30px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 400px;\n  width: 400px;\n}\n.iq-banner-12 .banner-objects .banner-objects-03 {\n  position: absolute;\n  top: 50%;\n  right: 25%;\n  border: 20px solid rgba(255, 255, 255, 0.2);\n  border-radius: 900px;\n  height: 300px;\n  width: 300px;\n}\n.iq-banner-12 .banner-objects .banner-objects-04 {\n  position: absolute;\n  top: 20%;\n  left: 10%;\n  opacity: 0.2;\n}\n.iq-banner-12 .banner-text .banner-phone {\n  position: absolute;\n  left: -50px;\n  bottom: -31px;\n  width: 40%;\n}\n.iq-banner-12 .banner-text .form-group .form-control {\n  border: none;\n  height: 50px;\n  margin-top: 9px;\n  border-radius: 0;\n  margin-right: 10px;\n}\n.iq-banner-12 .banner-text .form-group .form-control:focus {\n  box-shadow: none;\n  border: none;\n}\n.iq-banner-12 .banner-text .button {\n  border-radius: 0;\n  background: #333333;\n  color: #ffffff;\n}\n.iq-banner-12 .banner-text .button:hover {\n  background: #fff;\n  color: #333333;\n}\n/* Banner 13*/\n.iq-banner .banner-text .banner-phone {\n  position: absolute;\n  right: -50px;\n  bottom: -18px;\n  width: 26%;\n}\n.iq-banner .banner-text .watch-img {\n  position: absolute;\n  width: 20%;\n  top: 52%;\n  right: 85%\n}\n/* Banner 14*/\n.iq-banner-13 .banner-text {\n  margin-top: 3%\n}\n.iq-breadcrumb .banner-img {\n  max-width: 130%;\n}\n.iq-breadcrumb .banner-ani {\n  position: absolute;\n  top: 20%;\n  right: 0\n}\n/* ---- particles.js container ---- */\n#particles-js {\n  width: 100%;\n  height: 100%;\n  /* background-image: url('');*/\n  background-size: cover;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  position: absolute;\n}\n/*--------------------------------------------------------------------\n                            How it Works\n-----------------------------------------------------------------------*/\n.iq-works-box {\n  border: 1px solid #f7f7f7;\n  background: #fff;\n  padding: 30px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.02);\n  position: relative;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.iq-works-box p {\n  margin-bottom: 0;\n}\n.iq-works-box .icon-bg {\n  background: rgba(31, 76, 255, 0.1);\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n}\n.iq-works-box .icon-bg i {\n  font-size: 50px;\n  line-height: 100px;\n  color: #4ac4f3;\n}\n.iq-works-box .step {\n  font-size: 14px;\n  background: #ffffff;\n  border-radius: 100px;\n  border: 1px solid #f7f7f7;\n  color: #4ac4f3;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  position: absolute;\n  top: 30px;\n}\n.iq-works-box:hover {\n  border: solid transparent 1px;\n  box-shadow: 0 0 40px rgba(var(--primary-rgb-theme-color), .4) !important;\n}\n/* IQ Works Box No Shadow */\n.iq-works-box.no-shadow {\n  border: none;\n  box-shadow: none;\n}\n.iq-works-box.no-shadow:hover {\n  border: none;\n  box-shadow: none;\n}\n/* IQ Works Box No Shadow */\n.iq-works-box.round-icon {\n  padding: 20px 20px;\n  border: none;\n  box-shadow: none;\n}\n.iq-works-box.round-icon .icon-bg {\n  background: none;\n  height: 100px;\n  width: 100px;\n  display: inline-block;\n  border-radius: 100px;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.iq-works-box.round-icon .icon-bg i {\n  font-size: 50px;\n  line-height: 100px;\n  color: #4ac4f3;\n}\n.iq-works-box.round-icon .step {\n  font-size: 20px;\n  background: #ffffff;\n  border-radius: 100px;\n  border: 1px solid #f7f7f7;\n  color: #4ac4f3;\n  width: 38px;\n  height: 38px;\n  line-height: 38px;\n  text-align: center;\n  position: absolute;\n  top: 40px;\n}\n.iq-works-box.round-icon:hover {\n  border: none;\n  box-shadow: none;\n}\n.iq-works-box.round-icon:hover .icon-bg {\n  box-shadow: 0 0 40px rgba(74, 195, 243, 0.6);\n  -webkit-box-shadow: 0 0 40px rgba(74, 195, 243, 0.6);\n  -moz-box-shadow: 0 0 40px rgba(74, 195, 243, 0.6);\n}\n/* IQ Border Block */\n.iq-border-block {\n  border: 1px solid #f7f7f7;\n  padding: 50px 20px;\n  position: relative;\n}\n.iq-border-block .icon-bg {\n  height: 100px;\n  width: 100px;\n  border-radius: 100px;\n}\n.iq-border-block .icon-bg i {\n  font-size: 50px;\n  line-height: 100px;\n  color: #4ac4f3;\n}\n.iq-border-block .step {\n  font-size: 20px;\n  background: #ffffff;\n  border-radius: 100px;\n  border: 1px solid #f7f7f7;\n  color: #4ac4f3;\n  width: 38px;\n  height: 38px;\n  line-height: 38px;\n  text-align: center;\n  position: absolute;\n  top: 40px;\n}\n.iq-border-block {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n}\n.iq-border-block:before,\n.iq-border-block:after,\n.iq-border-block>.border-box:before,\n.iq-border-block>.border-box:after {\n  content: \"\";\n  background: #4ac4f3;\n  position: absolute;\n  transition: all 0.3s ease 0s;\n}\n.iq-border-block:before,\n.iq-border-block:after {\n  bottom: 0;\n  right: 0;\n}\n.iq-border-block:before {\n  width: 100%;\n  height: 2px;\n  transform: translateX(-100%);\n  transition-delay: 0.9s;\n}\n.iq-border-block:after {\n  width: 2px;\n  height: 100%;\n  transform: translateY(100%);\n  transition-delay: 0.6s;\n}\n.iq-border-block>.border-box:before,\n.iq-border-block>.border-box:after {\n  top: 0;\n  left: 0;\n}\n.iq-border-block>.border-box:before {\n  width: 100%;\n  height: 2px;\n  transform: translateX(100%);\n  transition-delay: 0.3s;\n}\n.iq-border-block>.border-box:after {\n  width: 2px;\n  height: 100%;\n  transform: translateY(-100%);\n  transition-delay: 0s;\n}\n.iq-border-block:hover:before,\n.iq-border-block:hover:after,\n.iq-border-block:hover>.border-box:before,\n.iq-border-block:hover>.border-box:after {\n  transform: translate(0, 0);\n}\n.iq-border-block:hover:before {\n  transition-delay: 0s;\n}\n.iq-border-block:hover:after {\n  transition-delay: 0.3s;\n}\n.iq-border-block:hover>.border-box:before {\n  transition-delay: 0.6s;\n}\n.iq-border-block:hover>.border-box:after {\n  transition-delay: 0.9s;\n}\n/*---------------------------------------------------------------------\n                            Who is Sofbox ?\n-----------------------------------------------------------------------*/\n.how-works {\n  position: relative;\n  overflow: hidden;\n}\n.iq-works-img {\n  width: 100%;\n}\n.iq-objects {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.iq-objects .iq-objects-01 {\n  position: absolute;\n  bottom: 10%;\n  left: 0;\n}\n.iq-objects .iq-objects-02 {\n  position: absolute;\n  top: 10%;\n  right: 35%;\n}\n.iq-objects .iq-objects-03 {\n  position: absolute;\n  top: 30%;\n  right: 0;\n}\n.iq-objects .iq-objects-04 {\n  position: absolute;\n  top: 0%;\n  right: -13%;\n  border: 56px solid #4ac4f3;\n  border-radius: 900px;\n  height: 600px;\n  width: 600px;\n}\n/*---------------------------------------------------------------------\n                            All four Productivity\n-----------------------------------------------------------------------*/\n.how-works {\n  position: relative;\n  overflow: hidden;\n}\n.iq-works-img {\n  width: 100%;\n}\n.iq-objectsnew {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.iq-objectsnew .iq-objects-01 {\n  position: absolute;\n  bottom: 10%;\n  left: 0;\n}\n.iq-objectsnew .iq-objects-02 {\n  position: absolute;\n  top: 10%;\n  right: 35%;\n}\n.iq-objectsnew .iq-objects-03 {\n  position: absolute;\n  top: 30%;\n  right: 0;\n}\n.iq-objectsnew .iq-objects-04 {\n  position: absolute;\n  top: 0%;\n  right: -13%;\n  border: 56px solid #4ac4f3;\n  border-radius: 900px;\n  height: 600px;\n  width: 600px;\n}\n/*---------------------------------------------------------------------\n                            Software Features\n-----------------------------------------------------------------------*/\n.software {\n  position: relative;\n}\n.iq-software-demo {\n  position: absolute;\n  top: 50px;\n  height: 100%;\n  width: 50%;\n  left: 0;\n}\n.iq-list li {\n  margin-bottom: 15px;\n  line-height: 26px;\n}\n.iq-list li i {\n  float: left;\n}\n.iq-list li span {\n  display: table-cell;\n}\n.iq-objects-software {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.iq-objects-software .iq-objects-01 {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.iq-objects-software .iq-objects-02 {\n  position: absolute;\n  bottom: 5%;\n  left: 15%;\n}\n.iq-objects-software .iq-objects-03 {\n  position: absolute;\n  top: 0%;\n  left: 10%;\n  border: 40px solid #4ac4f3;\n  border-radius: 900px;\n  height: 600px;\n  width: 600px;\n}\n/*---------------------------------------------------------------------\n                            All four Productivity\n-----------------------------------------------------------------------*/\n.software {\n  position: relative;\n}\n.iq-software-demo {\n  position: absolute;\n  top: 50px;\n  height: 100%;\n  width: 50%;\n  left: 0;\n}\n.iq-list li {\n  margin-bottom: 15px;\n  line-height: 26px;\n}\n.iq-list li i {\n  float: left;\n}\n.iq-list li span {\n  display: table-cell;\n}\n.iq-objects-softwarenew {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n.iq-objects-softwarenew .iq-objects-01 {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.iq-objects-softwarenew .iq-objects-02 {\n  position: absolute;\n  bottom: 5%;\n  left: 15%;\n}\n.iq-objects-softwarenew .iq-objects-03 {\n  position: absolute;\n  top: 0%;\n  left: 10%;\n  border: 40px solid #4ac4f3;\n  border-radius: 900px;\n  height: 600px;\n  width: 600px;\n}\n/*---------------------------------------------------------------------\n                         Great screenshots\n-----------------------------------------------------------------------*/\n.iq-screenshots {\n  overflow: hidden;\n  position: relative;\n}\n@-webkit-keyframes heartbeat {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes heartbeat {\n  0% {\n    transform: scale(0);\n  }\n  25% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n  75% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.screenshots-slider {\n  display: inline-block;\n  width: 100%;\n  min-height: 580px;\n}\n.slider-container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 780px;\n  height: 580px;\n  margin: -300px 0 0 -390px;\n}\n.slider-container .slider-content {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 100%;\n  height: 100%;\n  transform: translate(-50%, -50%);\n}\n.slider-container .slider-content .slider-single {\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transition: z-index 0ms 250ms;\n}\n.slider-container .slider-content .slider-single .slider-single-image {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);\n  transition: 500ms cubic-bezier(0.17, 0.67, 0.55, 1.43);\n  transform: scale(0);\n  opacity: 0;\n}\n.slider-container .slider-content .slider-single.preactivede .slider-single-image {\n  transform: translateX(-50%) scale(0);\n}\n.slider-container .slider-content .slider-single.preactive {\n  z-index: 1;\n}\n.slider-container .slider-content .slider-single.preactive .slider-single-image {\n  opacity: .3;\n  transform: translateX(-25%) scale(0.8);\n}\n.slider-container .slider-content .slider-single.proactive {\n  z-index: 1;\n}\n.slider-container .slider-content .slider-single.proactive .slider-single-image {\n  opacity: .3;\n  transform: translateX(25%) scale(0.8);\n}\n.slider-container .slider-content .slider-single.proactivede .slider-single-image {\n  transform: translateX(50%) scale(0);\n}\n.slider-container .slider-content .slider-single.active {\n  z-index: 2;\n}\n.slider-container .slider-content .slider-single.active .slider-single-image {\n  opacity: 1;\n  transform: translateX(0%) scale(1);\n}\n.slider-container .slider-left {\n  position: absolute;\n  z-index: 3;\n  display: block;\n  right: 115%;\n  top: 50%;\n  color: #ffffff;\n  transform: translateY(-50%);\n  padding: 20px 15px;\n  font-size: 60px;\n}\n.slider-container .slider-right {\n  position: absolute;\n  z-index: 3;\n  display: block;\n  left: 115%;\n  top: 50%;\n  color: #ffffff;\n  transform: translateY(-50%);\n  padding: 20px 15px;\n  font-size: 60px;\n}\n/* Screenshots Slider NO Shadow  */\n.no-shadow .slider-container .slider-content .slider-single .slider-single-image {\n  box-shadow: none;\n}\n.no-shadow .slider-container .slider-content .slider-single.preactive .slider-single-image {\n  opacity: 0;\n}\n.no-shadow .slider-container .slider-content .slider-single.proactive .slider-single-image {\n  opacity: 0;\n}\n/*---------------------------------------------------------------------\n                             Special Features\n-----------------------------------------------------------------------*/\n.iq-amazing-tab .nav.nav-tabs {\n  border-bottom: 1px solid #e9e9e9;\n  overflow: hidden;\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.iq-amazing-tab .nav.nav-tabs li {\n  margin-bottom: 0;\n  display: inline-block;\n  float: none;\n  width: 25%;\n  position: relative;\n}\n.iq-amazing-tab .nav-tabs>li a.active,\n.iq-amazing-tab .nav-tabs>li a.active:hover,\n.iq-amazing-tab .nav-tabs>li a.active:focus,\n.iq-amazing-tab .nav-tabs>li a.active1,\n.iq-amazing-tab .nav-tabs>li a.active1:hover,\n.iq-amazing-tab .nav-tabs>li a.active1:focus {\n  background-color: #f5f7fb !important;\n}\n.iq-amazing-tab .nav.nav-tabs li a {\n  width: 100%;\n  display: inline-block;\n  position: relative;\n  padding: 20px 40px;\n  margin-right: 0;\n  text-align: center;\n  color: #666666;\n  border: none;\n  position: relative;\n}\n.iq-amazing-tab .nav-tabs li a i {\n  font-size: 50px;\n  margin-right: 20px;\n  vertical-align: middle;\n  text-align: right;\n}\n.iq-amazing-tab .nav.nav-tabs li a span {\n  font-size: 18px;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 600;\n  line-height: 40px;\n  vertical-align: sub;\n  text-align: left;\n}\n.iq-amazing-tab .nav.nav-tabs li a:hover {\n  color: #4ac4f3;\n  background: none;\n  border: none;\n}\n.iq-amazing-tab .nav.nav-tabs li a:hover i {\n  color: #4ac4f3;\n}\n.iq-amazing-tab .nav.nav-tabs li a.active,\n.iq-amazing-tab .nav.nav-tabs li a.active:hover,\n.iq-amazing-tab .nav.nav-tabs li a.active:focus {\n  color: #333333;\n  background: none;\n  border: none;\n}\n.iq-amazing-tab .nav.nav-tabs li a.active i,\n.iq-amazing-tab .nav.nav-tabs li a.active:hover i,\n.iq-amazing-tab .nav.nav-tabs li a.active:focus i,\n.iq-amazing-tab .nav.nav-tabs li a.active1 i,\n.iq-amazing-tab .nav.nav-tabs li a.active1:hover i,\n.iq-amazing-tab .nav.nav-tabs li a.active1:focus i {\n  color: #4ac4f3;\n}\n.iq-amazing-tab .nav.nav-tabs li a:before,\n.iq-amazing-tab .nav.nav-tabs li a:hover:before,\n.iq-amazing-tab .nav.nav-tabs li a:focus:before {\n  position: absolute;\n  left: -100%;\n  bottom: -1px;\n  height: 3px;\n  width: 100%;\n  content: \"\";\n  opacity: 0;\n  background: #4ac4f3;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-amazing-tab .nav.nav-tabs li a.active:before,\n.iq-amazing-tab .nav.nav-tabs li a.active:hover:before,\n.iq-amazing-tab .nav.nav-tabs li a.active:focus:before,\n.iq-amazing-tab .nav.nav-tabs li a:hover,\n.iq-amazing-tab .nav.nav-tabs li a.active1:before,\n.iq-amazing-tab .nav.nav-tabs li a.active1:hover:before {\n  opacity: 1;\n  left: 0%;\n}\n/*---------------------------------------------------------------------\n                         More Useful Infomation\n-----------------------------------------------------------------------*/\n.info-box {\n  border: 1px solid #eee;\n  height: 140px;\n  width: 140px;\n  border-radius: 70px;\n  text-align: center;\n  display: inline-block;\n}\n.info-box .info-icon i {\n  font-size: 56px;\n}\n.info-box .info-icon {\n  border-radius: 50px;\n  box-shadow: 0px 0px 30px 5px #eee;\n  height: 100px;\n  width: 100px;\n  text-align: center;\n  margin: 20px;\n  line-height: 94px;\n}\n/*---------------------------------------------------------------------\n                       Sofbox Specialities\n-----------------------------------------------------------------------*/\n.iq-fancy-box {\n  padding: 30px;\n  overflow: hidden;\n  position: relative;\n  background: #fff;\n  border: 1px solid #f2f2f2;\n}\n.iq-fancy-box .iq-icon {\n  border-radius: 90px;\n  display: inline-block;\n  height: 86px;\n  width: 86px;\n  line-height: 86px;\n  text-align: center;\n  color: #4ac4f3;\n  background: #f4f4f4;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-fancy-box:hover .iq-icon {\n  color: #f4f4f4;\n  background: #4ac4f3;\n}\n.iq-fancy-box .iq-icon i {\n  font-size: 46px;\n}\n.iq-fancy-box .fancy-content h5 {\n  z-index: 9;\n  position: relative;\n}\n.iq-specialities { padding-bottom: calc(100px - 30px) !important; }\n/*---------------------------------------------------------------------\n                       Sofbox Specialities\n-----------------------------------------------------------------------*/\n.iq-fancy-box-new {\n  padding: 40px 15px 25px 15px;\n  overflow: hidden;\n  position: relative;\n}\n.iq-fancy-box-new .iq-icon {\n  border-radius: 90px;\n  display: inline-block;\n  height: 86px;\n  width: 86px;\n  line-height: 86px;\n  text-align: center;\n  color: #4ac4f3;\n  background: #f4f4f4;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-fancy-box-new:hover .iq-icon {\n  color: #f4f4f4;\n  background: #4ac4f3;\n}\n.iq-fancy-box-new .iq-icon i {\n  font-size: 46px;\n}\n.iq-fancy-box-new .fancy-content h5 {\n  z-index: 9;\n  position: relative;\n}\n/*---------------------------------------------------------------------\n                       Sofbox Specialities\n-----------------------------------------------------------------------*/\n.iq-fancy-box-1 {\n  padding: 30px;\n  overflow: hidden;\n  position: relative;\n}\n.iq-fancy-box-1 .iq-icon {\n  border-radius: 90px;\n  display: inline-block;\n  height: 86px;\n  width: 86px;\n  line-height: 86px;\n  text-align: center;\n  color: #4ac4f3;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-fancy-box-1:hover .iq-icon {\n  color: #333333;\n}\n.iq-fancy-box-1 .iq-icon i {\n  font-size: 46px;\n}\n.iq-fancy-box-1 .fancy-content h5 {\n  z-index: 9;\n  position: relative;\n}\n/*---------------------------------------------------------------------\n                          Counter\n-----------------------------------------------------------------------*/\n.counter {\n  position: relative;\n  min-height: 60px;\n  display: flex;\n  align-items: flex-start;\n}\n.counter i {\n  font-size: 60px;\n  line-height: 65px;\n  display: inline-block;\n  float: left;\n  margin-right: 20px;\n}\n.counter-date {\n  flex: 1;\n}\n.counter span {\n  display: inline-block;\n  width: 100%;\n  font-size: 40px;\n  margin: 0;\n  margin-bottom: 5px;\n  line-height: 40px;\n}\n.counter label {\n  font-size: 18px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 15px 0;\n  margin-bottom: 0;\n  float: left;\n}\n.counter-info {\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  display: inline-block;\n  width: 100%;\n  position: relative;\n}\n.counter-info-img {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  min-height: 200px;\n}\n.counter-info-img img {\n\n}\n.counter-info .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n  font-size: 32px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.6;\n  z-index: 9;\n  position: relative;\n}\n.counter-info .iq-video i {\n  margin-left: 7px;\n}\n.counter-info .waves-box {\n  position: absolute;\n  top: 36%;\n  left: 60%;\n}\n.counter-info .iq-waves {\n  position: absolute;\n  width: 14rem;\n  height: 14rem;\n  left: -80px;\n  top: -80px;\n  z-index: 2;\n  float: right;\n}\n.counter-info .iq-waves .waves {\n  position: absolute;\n  width: 384px;\n  width: 15rem;\n  height: 384px;\n  height: 15rem;\n  background: rgba(255, 255, 255, 0.2);\n  opacity: 0;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  border-radius: 320px;\n  background-clip: padding-box;\n  -webkit-animation: waves 3s ease-in-out infinite;\n  animation: waves 3s ease-in-out infinite;\n}\n.counter-info .iq-waves .wave-1 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.counter-info .iq-waves .wave-2 {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.counter-info .iq-waves .wave-3 {\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n/* Counter */\n.iq-counter {\n  position: relative;\n  min-height: 60px;\n  display: flex;\n  align-items: flex-start;\n}\n.iq-counter i {\n  font-size: 60px;\n  line-height: 65px;\n  display: inline-block;\n  float: left;\n  margin-right: 20px;\n}\n.counter-date {\n  flex: 1;\n}\n.iq-counter span {\n  display: inline-block;\n  width: 100%;\n  font-size: 40px;\n  margin: 0;\n  margin-bottom: 5px;\n  line-height: 40px;\n}\n.iq-counter label {\n  font-size: 14px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 15px 0;\n  margin-bottom: 0;\n  float: left;\n}\n.iq-counter-box-1 .heading-title p {\n  padding-left: 20%;\n  padding-right: 20%;\n}\n/* Counter 1 */\n.iq-counter-1 {\n  position: relative;\n  min-height: 60px;\n  display: flex;\n  align-items: flex-start;\n}\n.iq-counter-1 i {\n  font-size: 60px;\n  line-height: 65px;\n  display: inline-block;\n  float: left;\n  margin-right: 20px;\n}\n.counter-date {\n  flex: 1;\n}\n.iq-counter-1 span {\n  display: inline-block;\n  width: 100%;\n  font-size: 40px;\n  margin: 0;\n  margin-bottom: 5px;\n  line-height: 40px;\n}\n.iq-counter-1 label {\n  margin-top: 40px;\n  font-size: 14px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 15px 0;\n  margin-bottom: 0;\n  float: left;\n}\n.iq-counter-1-box-2 .heading-title p {\n  padding-left: 20%;\n  padding-right: 20%;\n}\n/*---------------------------------------------------------------------\n                          Loved By Our Customers\n-----------------------------------------------------------------------*/\n.iq-loved-customers .owl-carousel .owl-item .item {\n  padding: 0 0 5px;\n}\n.iq-client {\n  position: relative;\n  margin-top: 40px;\n  padding: 30px;\n  text-align: center;\n  border: 1px solid #f2f2f2;\n  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.06);\n}\n.iq-client:before {\n  position: absolute;\n  content: \"\";\n  bottom: -8px;\n  left: 5%;\n  width: 90%;\n  background: #4ac4f3;\n  height: 8px;\n  display: inline-block;\n  z-index: -1;\n}\n.iq-client .client-img {\n  width: 80px;\n  height: 80px;\n  display: inline-block;\n  border-radius: 90px;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, -50%);\n}\n.client-info {\n  margin-top: 30px;\n}\n.client-name:before {\n  content: \"\\f10d\";\n  font-family: \"Font Awesome 5 Free\";\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  font-size: 44px;\n  color: #f0f0f0;\n  line-height: normal;\n  font-weight: 900;\n}\n.client-name:after {\n  content: \"\\f10e\";\n  font-family: \"Font Awesome 5 Free\";\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  font-size: 44px;\n  color: #f0f0f0;\n  line-height: normal;\n  font-weight: 900;\n}\n.client-info p {\n  line-height: 28px;\n}\n/*---------------------------------------------------------------------\n                        Affordable Price\n-----------------------------------------------------------------------*/\n.iq-pricing {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  border: 1px solid #ededed;\n  background: #fff;\n}\n.iq-pricing .price-title {\n  padding: 35px 20px;\n  position: relative;\n}\n.iq-pricing .price-title:after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  background: url('09.png') no-repeat center bottom;\n  background-size: 100%;\n  height: 100%;\n  width: 100%;\n}\n.iq-pricing.pricing-02 .price-title:after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  background: url('11.png') no-repeat center bottom;\n  background-size: 100%;\n  height: 100%;\n  width: 100%;\n}\n.iq-pricing.pricing-03 .price-title:after {\n  position: absolute;\n  content: \"\";\n  left: 0;\n  bottom: 0;\n  background: url('12.png') no-repeat center bottom;\n  background-size: 100%;\n  height: 100%;\n  width: 100%;\n}\n.iq-pricing .price-title h2 {\n  font-family: 'Open Sans', sans-serif;\n  line-height: 60px;\n  font-size: 50px;\n  position: relative;\n}\n.iq-pricing .price-title h2 small {\n  font-size: 16px;\n  color: #fff;\n  vertical-align: super;\n  padding: 0 5px;\n}\n.iq-pricing .price-title h2 small:first-child {\n  font-size: 24px;\n}\n.iq-pricing .price-title span {\n  letter-spacing: 6px;\n  position: relative;\n}\n.iq-pricing ul {\n  margin: 20px 0 0;\n}\n.iq-pricing ul li {\n  line-height: 50px;\n}\n.iq-pricing .price-footer {\n  padding: 30px 0;\n  z-index: 9;\n  position: relative;\n}\n/*---------------------------------------------------------------------\n                          Meet the Team\n-----------------------------------------------------------------------*/\n.iq-team {\n  position: relative;\n  overflow: hidden;\n}\n.iq-team .iq-team-info {\n  padding: 10px 0;\n}\n.iq-team .iq-team-info span {\n  font-family: 'Raleway', sans-serif;\n}\n.iq-team .share {\n  background: none;\n  position: absolute;\n  left: -65px;\n  top: 10px;\n  width: 40px;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-team:hover .share {\n  left: 15px;\n}\n.iq-team .share ul li {\n  margin: 5px 0;\n}\n.iq-team .share ul li a {\n  color: #fff;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  background: #333;\n  color: #fff;\n  border-radius: 90px;\n  text-align: center;\n  display: inline-block;\n}\n.iq-team .share ul li a:hover {\n  background: #4ac4f3;\n}\n.iq-team .iq-team-img {\n  position: relative;\n}\n.iq-team .iq-team-img img {\n  width: 100%;\n}\n.iq-team .iq-team-img:before {\n  content: \"\";\n  bottom: 0;\n  opacity: 0;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(74, 196, 243, 0);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(74, 196, 243, 0)), color-stop(100%, rgba(74, 196, 243, 1)));\n  background: linear-gradient(to bottom, rgba(74, 196, 243, 0) 0%, rgba(74, 196, 243, 1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4ac4f3', endColorstr='#4ac4f3', GradientType=0);\n  transition: all 0.3s ease-out 0s;\n}\n.iq-team:hover .iq-team-img:before {\n  opacity: 1;\n}\n/*Team 1*/\n.iq-team-1 .team-blog {\n  border: 1px solid #f2f2f2;\n  border-bottom: 2px solid #4ac3f3;\n  border-radius: 10px;\n}\n.iq-team-1 .team-blog img {\n  display: inline;\n}\n.iq-team-1 .iq-star i {\n  font-size: 16px;\n  margin-right: 4px;\n  color: #4ac3f3;\n}\n/*---------------------------------------------------------------------\n                          Compare Services\n-----------------------------------------------------------------------*/\n.iq-services-box .iq-icon i {\n  font-size: 60px;\n  float: left;\n  margin-right: 20px;\n}\n.iq-services-box .services-content {\n  display: table-cell;\n}\n.iq-progress-bar-text {\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #4ac4f3;\n  position: relative;\n  margin-top: 50px;\n}\n.iq-progress-bar-text span {\n  float: right;\n  background: #fff;\n  border-radius: 4px;\n  text-align: center;\n  width: 40px;\n  height: 30px;\n  line-height: 30px;\n  font-weight: 600;\n  position: relative;\n  bottom: 50px;\n  right: 0;\n}\n.iq-progress-bar-text span:before {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  margin-left: -7px;\n  bottom: -7px;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 7px 7px 0 7px;\n  border-color: #ffffff transparent transparent transparent;\n}\n.iq-progress-bar {\n  background: #fff none repeat scroll 0 0;\n  box-shadow: 0 0 0;\n  height: 8px;\n  margin: 0;\n  position: relative;\n  width: 100%;\n}\n.iq-progress-bar>span {\n  background: #333 none repeat scroll 0 0;\n  display: block;\n  height: 100%;\n  width: 0;\n}\n.iq-compare-services { padding-bottom: calc(100px - 22px) !important; }\n/*---------------------------------------------------------------------\n                        Frequently Asked Questions\n-----------------------------------------------------------------------*/\n.iq-asked {\n  position: relative;\n}\n.iq-accordion {\n  z-index: 9;\n  position: relative;\n}\n.iq-accordion .accordion-title {\n  position: relative;\n  padding: 15px 50px 15px 15px;\n  font-size: 16px;\n  line-height: normal;\n  cursor: pointer;\n  background-color: #f5f7fb;\n  display: block;\n  text-align: left;\n  color: #2c3e50;\n  text-decoration: none;\n  border-radius: 4px;\n}\n.iq-accordion .accordion-title:before {\n  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  content: \"\\f3d0\";\n  font-family: \"Ionicons\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  padding: 14px 20px;\n  color: #fff;\n  font-size: 16px;\n  line-height: 24px;\n  height: 100%;\n  font-weight: normal;\n  transition: all 0.25s ease-in-out 0s;\n  background: #4ac4f3;\n}\n.iq-accordion .accordion-active .accordion-title:before {\n  content: \"\\f3d8\";\n  font-family: \"Ionicons\";\n}\n.iq-accordion .accordion-details {\n  display: none;\n  overflow: hidden;\n  text-align: left;\n  padding: 15px 15px;\n  color: #666666;\n  line-height: 24px;\n  background: #fff;\n  border: 1px solid #eeeeee;\n  border-top: none;\n  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);\n}\n.iq-accordion .iq-accordion {\n  margin-bottom: 30px;\n}\n.iq-accordion .iq-accordion:last-child {\n  margin-bottom: 0;\n}\n.iq-objects-asked {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n}\n.iq-objects-asked .iq-objects-01 {\n  position: absolute;\n  bottom: 10%;\n  left: 0;\n}\n.iq-objects-asked .iq-objects-02 {\n  position: absolute;\n  top: 37%;\n  left: 35%;\n}\n.iq-objects-asked .iq-objects-03 {\n  position: absolute;\n  top: 28%;\n  left: 13%;\n  border: 25px solid #4ac4f3;\n  border-radius: 900px;\n  height: 350px;\n  width: 350px;\n}\n/*---------------------------------------------------------------------\n                                Latest Blog Post\n-----------------------------------------------------------------------*/\n.iq-blog-box {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);\n}\n.iq-blog-box .iq-blog-image {\n  position: relative;\n}\n.iq-blog-box .iq-blog-image img {\n  width: 100%;\n}\n.iq-blog-detail {\n  padding: 20px;\n  background: #fff;\n}\n.iq-blog-detail a,\n.iq-blog-detail .blog-title a h5 {\n  color: #333;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.list-inline-item:not(:last-child) {\n  margin-right: 1rem;\n}\n.iq-blog-detail a:hover,\n.iq-blog-detail .blog-title a:hover h5 {\n  color: #4ac4f3;\n}\n.iq-blog-detail p {\n  font-size: 14px;\n }\n.iq-blog-detail a {\n  font-size: 14px;\n  font-weight: 700;\n  color: #666666;\n }\n.iq-blog-detail a.button {\n  color: #fff;\n}\n.iq-blog-detail a i {\n  color: #4ac4f3;\n}\n.iq-blog-meta {\n  margin: 15px 0 0px;\n  border-top: 1px solid #ececec;\n  padding-top: 15px;\n}\n.iq-blog-meta ul li {\n  margin: 0 15px 0 0;\n  padding: 0;\n  font-size: 16px;\n}\n.iq-blog-meta ul li:last-child {\n  margin: 0;\n}\n.blog-section {\n  padding-bottom: calc(100px - 32px) !important;\n}\n/*video vimeo and youtube*/\n.iq-bolg-video {\n  height: 0;\n  padding-bottom: 56.5%;\n  position: relative;\n  overflow: hidden;\n}\n.iq-bolg-video video,\n.iq-bolg-video embed,\n.iq-bolg-video iframe,\n.iq-bolg-video object {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  border: none;\n}\n/*blog-entry-audio*/\n.media-wrapper video {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  float: left;\n}\n.players {\n  position: absolute;\n  bottom: 15px;\n  display: inline-block;\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n}\n/*---------------------------------------------------------------------\n                          Our clients\n-----------------------------------------------------------------------*/\n.iq-our-clients {\n  border-top: 1px solid #ededed;\n}\n.iq-our-clients .owl-carousel .owl-nav {\n  margin-top: -20px;\n}\n.iq-our-new {\n  border-bottom: 1px solid #ededed;\n  border-top: 1px solid #ededed;\n}\n/* clients Box*/\n.iq-clients-box {\n  display: inline-block;\n  border-top: 1px solid #f2f2f2;\n  border-right: 1px solid #f2f2f2;\n}\n.iq-clients-box .clients .clients-brd {\n  border: 1px solid #f2f2f2;\n}\n.iq-clients-box ul li {\n  width: 33.33%;\n  border-left: 1px solid #f2f2f2;\n  border-bottom: 1px solid #f2f2f2;\n  float: left;\n  margin: 0;\n  padding: 15px 0;\n  text-align: center;\n}\n.iq-clients-box ul li.small {\n  width: 25%;\n}\n.iq-clients-box ul li:nth-child(3n) {\n  border-righ: 1px solid #f2f2f2;\n}\n/*---------------------------------------------------------------------\n                           Subscribe Our Newsletter\n-----------------------------------------------------------------------*/\n.iq-newsletter .form-group {\n  width: 72%;\n}\n.iq-newsletter .form-control {\n  border-radius: 4px;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  padding-left: 25px;\n  box-shadow: none;\n  border: none;\n}\n.iq-newsletter .form-group {\n  width: 72%;\n}\n.iq-newsletter .form-control {\n  border-radius: 4px;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  padding-left: 25px;\n  box-shadow: none;\n  border: none;\n}\n/*---------------------------------------------------------------------\n                             Get in Touch\n-----------------------------------------------------------------------*/\n.iq-footer-box .iq-icon i {\n  font-size: 26px;\n  float: left;\n  margin-right: 20px;\n  height: 60px;\n  width: 60px;\n  background: #f4f4f4;\n  text-align: center;\n  line-height: 60px;\n  color: #4ac4f3;\n  border-radius: 90px;\n}\n.iq-footer-box .footer-content {\n  display: table-cell;\n}\n.info-share {\n  margin: 30px 0 0;\n  padding: 0;\n  text-align: left;\n}\n.info-share li {\n  display: inline-block;\n  list-style: none;\n  padding: 0;\n  margin: 0px 5px;\n}\n.info-share li a {\n  display: block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  font-size: 16px;\n  color: #666;\n  background: transparent;\n  border: 1px solid #666;\n  text-align: center;\n  border-radius: 50%;\n}\n.info-share li a:hover {\n  background: #4ac4f3;\n  border-color: #4ac4f3;\n  color: #fff;\n}\n.footer-copyright {\n  border-top: 1px solid #efefef;\n}\n/*---------------------------------------------------------------------\n                           Footer Info\n-----------------------------------------------------------------------*/\n.footer-info {\n  position: relative;\n}\n.footer-info .map {\n  border: 0px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n.iq-get-in {\n  position: relative;\n  z-index: 9;\n  background: #fff;\n  padding: 30px 30px;\n  display: inline-block;\n  width: 100%;\n  margin: 30px auto;\n  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);\n}\n.contact-form .section-field {\n  position: relative;\n  width: 100%;\n  float: left;\n}\n.contact-form .section-field input {\n  position: relative;\n  width: 100%;\n  margin-bottom: 20px;\n  border-radius: 4px;\n  padding-left: 15px;\n  height: 48px;\n  line-height: 48px;\n  clear: both;\n  color: #b6b6b6;\n  border: 1px solid #e1e1e1;\n}\n.contact-form .section-field input:focus,\n.contact-form .section-field.textarea textarea:focus {\n  border: 1px solid #4ac4f3;\n  box-shadow: none;\n  outline: none;\n}\n.contact-form .section-field.textarea textarea {\n  width: 100%;\n  float: left;\n  color: #b6b6b6;\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  padding: 15px 0 0 20px;\n  resize: none;\n}\n#formmessage {\n  display: none;\n}\n#success {\n  display: none;\n  margin-top: 10px;\n}\n.contact-info {\n  position: relative;\n}\n.contact-info:before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 1px;\n  left: 15px;\n  top: 0;\n  background: #e5e5e5;\n}\n.info-share {\n  margin: 0 0;\n  padding: 0;\n  text-align: left;\n}\n.info-share li {\n  display: inline-block;\n  list-style: none;\n  padding: 0;\n  margin: 0px 5px;\n}\n.info-share li a {\n  display: block;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  font-size: 16px;\n  color: #666;\n  background: transparent;\n  border: 1px solid #666;\n  text-align: center;\n  border-radius: 50%;\n}\n.info-share li a:hover {\n  background: #4ac4f3;\n  border-color: #4ac4f3;\n  color: #fff;\n}\n/*---------------------------------------------------------------------\n                            Footer 2\n-----------------------------------------------------------------------*/\n.iq-footer {\n  background: #111111;\n}\n.iq-footer hr {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n.iq-footer.gray-footer {\n  background: #000;\n}\n/*Contact*/\n.iq-footer .iq-contact .contact-block {\n  color: #ffffff;\n  display: inline-block;\n}\n.iq-footer .iq-contact .contact-block .title {\n  font-size: 20px;\n}\n.iq-footer .iq-contact .contact-block span {\n  font-size: 20px;\n}\n.iq-footer .iq-contact .contact-block i {\n  color: #4ac4f3;\n  font-size: 40px;\n  line-height: 40px;\n  vertical-align: middle;\n  margin-right: 15px;\n  display: table;\n  float: left;\n}\n.iq-footer .iq-contact .contact-block .content {\n  display: table-cell;\n}\n/*Menu*/\n.iq-footer .footer-menu li {\n  margin: 0;\n}\n.iq-footer .footer-menu li a {\n  font-weight: 500;\n  background: rgba(255, 255, 255, 0);\n  padding: 8px 0;\n  display: block;\n  color: #ffffff;\n}\n.iq-footer .footer-menu li a:hover {\n  background: rgba(255, 255, 255, 0.2);\n  color: #4ac4f3;\n  padding: 8px 15px;\n}\n/*Popular Posts*/\n.iq-footer .iq-post li {\n  width: 100%;\n  float: left;\n  margin-top: 0px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  display: inline-block;\n  margin-bottom: 15px;\n  padding-bottom: 15px;\n}\n.iq-footer .post-blog {\n  display: table-cell;\n}\n.iq-footer .post-blog a {\n  vertical-align: top;\n  font-size: 16px;\n  color: #fff;\n}\n.iq-footer .post-blog a:hover {\n  color: #4ac4f3;\n}\n.iq-footer .post-blog .iq-date {\n  font-size: 13px;\n  display: table;\n}\n.iq-footer .post-blog i {\n  font-size: 14px;\n}\n.iq-footer .iq-post li:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.iq-footer .post-img {\n  display: table;\n  float: left;\n  margin-right: 15px;\n}\n.iq-footer .post-img img {\n  vertical-align: top;\n  height: 65px;\n  width: 65px;\n  border-radius: 2px;\n}\n.iq-footer ul {\n  margin-right: 0px;\n}\n/*Newsletter*/\n.iq-footer .input-group-addon {\n  padding: 0px;\n}\n.iq-footer .newsletter-form .input-group .form-control {\n  border: none;\n  padding: 15px 10px;\n}\n.iq-footer .newsletter-form .input-group-addon {\n  border: none;\n}\n.iq-footer .newsletter-form .button {\n  padding: 11px 20px 11px;\n  border-radius: 0px 4px 4px 0px\n}\n/*Copyright*/\n.iq-footer .iq-copyright,\n.iq-footer .iq-copyright a {\n  color: #ffffff;\n}\n.iq-footer .iq-copyright a:hover {\n  color: #4ac4f3;\n}\n.iq-footer .footer-bottom {\n  background: #000000;\n}\n/*---------------------------------------------------------------------\n                            Footer 3\n-----------------------------------------------------------------------*/\n.iq-footer3 {\n  background: #222222;\n}\n.iq-footer3 .footer-top {\n  background: #242424;\n}\n.iq-footer3 {\n  color: #fff;\n}\n.iq-footer3 hr {\n  margin: 0;\n  border-top: 0px;\n  padding: 0px;\n  border-bottom: 1px solid #323232;\n}\n.iq-footer3 .logo img {\n  width: 50px;\n}\n/*Menu*/\n.iq-footer3 .menu li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer3 .menu li a {\n  color: #fff;\n}\n.iq-footer3 .menu li a:hover {\n  color: #4ac4f3;\n}\n.iq-footer3 .office-day li {\n  margin-bottom: 10px;\n}\n.iq-footer3 .office-day li a {\n  color: #fff;\n}\n.iq-footer3 .office-day li a:hover {\n  color: #4ac4f3;\n}\n/*Link*/\n.iq-footer3 .link li a {\n  color: #fff;\n}\n.iq-footer3 .link li a:hover {\n  color: #4ac4f3;\n}\n/*Social Media*/\n.iq-footer3 .iq-media-blog li {\n  margin: 0 0 0 4px;\n}\n.iq-footer3 .iq-media-blog li a {\n  height: 45px;\n  width: 45px;\n  font-size: 18px;\n  line-height: 45px;\n  background: rgba(2, 216, 113, 1.0);\n  text-align: center;\n  color: #ffffff;\n  border-radius: 100px;\n  float: left;\n  border: 1px solid #4ac4f3;\n}\n.iq-footer3 .iq-media-blog li a:hover {\n  background: rgba(2, 216, 113, .0);\n  color: #4ac4f3;\n}\n/*footer-widget*/\n.iq-footer3 .iq-contact li {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.iq-footer3 .iq-contact i {\n  color: #4ac3f3;\n  float: left;\n  display: table-cell;\n  width: 30px;\n  line-height: 23px;\n  font-size: 32px;\n}\n.iq-footer3 .iq-contact p {\n  display: table;\n  color: #fff;\n  margin-bottom: 0px;\n  padding-left: 5px;\n}\n/*Tweeter*/\n.iq-footer3 .owl-carousel .owl-nav {\n  opacity: 1;\n  top: inherit;\n  top: 15%;\n  bottom: inherit;\n}\n.iq-footer3 .owl-carousel .owl-nav .owl-next {\n  right: 20%;\n}\n.iq-footer3 .owl-carousel .owl-nav .owl-prev {\n  left: 20%;\n}\n.iq-footer3 .owl-carousel:hover .owl-nav .owl-prev {\n  left: 20%;\n}\n.iq-footer3 .owl-carousel:hover .owl-nav .owl-next {\n  right: 20%;\n}\n.iq-footer3 .tweet-img {\n  float: left;\n  display: table;\n}\n.iq-footer3 .tweet-img img {\n  vertical-align: middle;\n  width: 70px;\n  height: 60px;\n}\n.iq-footer3 .tweet-info {\n  display: table-cell;\n  padding-left: 15px;\n}\n.iq-footer3 .tweet-info a {\n  color: #fff;\n  font-size: 14px;\n  vertical-align: top;\n}\n.iq-footer3 .tweet-info a:hover {\n  color: #4ac4f3;\n}\n.iq-footer3 .tweet-info span {\n  font-size: 12px;\n  display: table;\n  padding-top: 5px;\n}\n.iq-footer3 .tweet-info i {\n  font-size: 14px;\n  padding-right: 5px;\n}\n/*Copyright*/\n.iq-footer3 .iq-copyright {\n  text-align: right;\n}\n.iq-footer3 .iq-copyright a {\n  color: #4ac4f3;\n}\n.iq-footer3 .iq-copyright a:hover {\n  color: #ffffff;\n}\n/*build*/\n.iq-footer3 .build li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer3 .build li a {\n  color: #fff;\n}\n.iq-footer3 .build li a:hover {\n  color: #4ac4f3;\n}\n/*about*/\n.iq-footer3 .about li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer3 .about li a {\n  color: #fff;\n}\n.iq-footer3 .about li a:hover {\n  color: #4ac4f3;\n}\n/*Support*/\n.iq-footer3 .support li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer3 .support li a {\n  color: #fff;\n}\n.iq-footer3 .support li a:hover {\n  color: #4ac4f3;\n}\n/*Contact*/\n.iq-footer3 .contact li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer3 .contact li a {\n  color: #fff;\n}\n.iq-footer3 .contact li a:hover {\n  color: #4ac4f3;\n}\n/*---------------------------------------------------------------------\n                            Footer 4\n-----------------------------------------------------------------------*/\n.iq-footer4 {\n  position: relative;\n  overflow: hidden;\n}\n.iq-footer4 .container-fluid {\n  padding: 0 90px;\n}\n.iq-footer4 .iq-video {\n  background: #fff;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  font-size: 29px;\n  color: #4ac4f3;\n  float: left;\n  border-radius: 100%;\n  line-height: 2.1;\n  z-index: 9;\n  position: relative;\n}\n.iq-footer4 .iq-video i {\n  margin-left: 5px;\n}\n/*Menu*/\n.iq-footer4 .menu li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footer4 .menu li a {\n  color: #fff;\n}\n.iq-footer4 .menu li a:hover {\n  color: #000000;\n}\n/*Link*/\n.iq-footer4 .link li a {\n  color: #fff;\n}\n.iq-footer4 .link li a:hover {\n  color: #666;\n}\n/*Social Media*/\n.iq-footer4 .iq-media-blog li {\n  margin: 0 0 0 4px;\n}\n.iq-footer4 .iq-media-blog li a {\n  margin-right: 5px;\n  height: 45px;\n  width: 45px;\n  font-size: 18px;\n  line-height: 45px;\n  background: #4ac4f3;\n  text-align: center;\n  color: #ffffff;\n  border-radius: 100px;\n  float: left;\n  border: 1px solid #4ac4f3;\n}\n.iq-footer4 .iq-media-blog li a:hover {\n  background: #666;\n  color: #fff;\n}\n/*footer-widget*/\n.iq-footer4 .iq-contact li {\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 15px;\n}\n.iq-footer4 .iq-contact i {\n  color: #fff;\n  float: left;\n  display: table-cell;\n  width: 30px;\n  line-height: 23px;\n  font-size: 32px;\n}\n.iq-footer4 .iq-contact p {\n  display: table;\n  color: #fff;\n  margin-bottom: 0px;\n  padding-left: 5px;\n}\n/*Copyright*/\n.iq-footer4 .iq-copyright {\n  text-align: right;\n}\n.iq-footer4 .iq-copyright a {\n  color: #4ac4f3;\n}\n.iq-footer4 .iq-copyright a:hover {\n  color: #ffffff;\n}\n/*---------------------------------------------------------------------\n                          Breadcrumb Inner Page\n-----------------------------------------------------------------------*/\n.iq-breadcrumb {\n  margin: 0px;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.iq-breadcrumb-title .title {\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  font-size: 46px;\n}\n.iq-breadcrumb-title .title span {\n  font-family: 'Open Sans', sans-serif;\n}\n.iq-breadcrumb .breadcrumb {\n  background: rgba(255, 255, 255, 1);\n  padding: 14px 25px;\n  border-radius: 90px;\n  display: inline-block;\n  position: relative;\n  bottom: -32px;\n  margin-bottom: 0;\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);\n}\n.iq-breadcrumb .breadcrumb li a {\n  color: #2c3e50;\n}\n.iq-breadcrumb .breadcrumb li a i {\n  padding-right: 5px;\n}\n.iq-breadcrumb .breadcrumb li a:hover {\n  color: #4ac4f3;\n}\n.iq-breadcrumb .breadcrumb li {\n  color: #2c3e50;\n  font-size: 16px;\n  font-weight: 500;\n  float: left;\n}\n.iq-breadcrumb .breadcrumb li.active {\n  color: #4ac4f3;\n}\n.iq-breadcrumb .breadcrumb>li+li:before {\n  color: #2c3e50;\n}\n/*pagination-nav*/\n.pagination .page-item.active .page-link {\n  background-color: #4ac4f3;\n  border-color: #4ac4f3;\n}\n.pagination .page-link {\n  color: #4ac4f3;\n}\n.pagination .page-link:hover {\n  color: #333;\n}\n/*---------------------------------------------------------------------\n                             Blog Page\n-----------------------------------------------------------------------*/\n.iq-page-blog .iq-blog-box {\n  box-shadow: none;\n  border: 1px solid #ededed;\n}\n.iq-blog-box .iq-get-in {\n  margin-top: 0;\n  box-shadow: none;\n}\n.iq-post-author {\n  position: relative;\n  min-height: 130px;\n}\n.iq-post-author-pic {\n  float: left;\n}\n.iq-post-author a {\n  color: #fff;\n}\n.iq-post-author a:hover {\n  text-decoration: underline;\n  color: #fff;\n}\n/* Comments Box */\n.iq-comment-list li {\n  margin-top: 25px;\n  margin-bottom: 0;\n  vertical-align: top;\n  padding: 0;\n}\n.iq-comment-list .iq-comments-media {\n  padding: 15px 15px 30px;\n  border-radius: 0px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  align-items: flex-start;\n}\n.iq-comment-list li:last-child .iq-comments-media {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.iq-comment-list ul {\n  padding-left: 60px;\n}\n.iq-comment-list .iq-comments-photo {\n  padding-right: 20px;\n}\n.iq-comment-list .iq-comments-photo a img {\n  width: 80px;\n  height: auto;\n}\n.iq-comment-list .iq-comments-info {\n  position: relative;\n  flex: 1;\n}\n.iq-comment-list .iq-comments-info .title {\n  margin: 0;\n  line-height: 22px;\n}\n.iq-comment-list .iq-comment-metadata {\n  line-height: 22px;\n  margin-top: 7px;\n  margin-bottom: 10px;\n}\n.iq-comment-list .iq-comment-metadata a {\n  color: #333333;\n}\n.iq-comment-list .iq-comment-metadata i {\n  padding-right: 7px;\n  color: #4ac4f3;\n}\n.iq-comment-list .reply {\n  position: absolute;\n  line-height: 22px;\n  margin: 0;\n  padding: 2px 16px;\n  font-size: 11px;\n  right: 0;\n  top: 0;\n  font-weight: 500;\n}\n.iq-comment-list .iq-comments-media .iq-comments-info .reply {\n  color: #ffffff;\n}\n.iq-comment-list .iq-comments-info p {\n  margin-top: 5px;\n  margin-bottom: 0;\n}\n/*---------------------------------------------------------------------\n                            Blog - SideBar\n-----------------------------------------------------------------------*/\n.iq-post-sidebar {\n  height: 100%;\n}\n.iq-sidebar-widget {\n  margin-bottom: 40px;\n  padding: 20px 20px;\n  border: 1px solid #ededed;\n  border-radius: 0px;\n}\n.iq-sidebar-widget:last-child {\n  margin-bottom: 0;\n}\n.iq-sidebar-widget .iq-widget-title {\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  font-size: 24px;\n}\n/*widget-menu*/\n.iq-widget-menu {\n  position: relative;\n}\n.iq-widget-menu ul li a {\n  font-size: 14px;\n  display: block;\n  color: #2c3e50;\n  position: relative;\n}\n.iq-widget-menu i {\n  padding-top: 4px;\n  position: absolute;\n  right: 18px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\n.iq-widget-menu ul li a span {\n  padding: 5px 10px 5px 0;\n  display: block;\n  font-size: 14px;\n}\n.iq-widget-menu ul li a span:hover {\n  text-decoration: none;\n  color: #4ac4f3;\n}\n.iq-widget-menu ul li.active {\n  border-bottom: none;\n}\n.iq-widget-menu ul li.hover a {\n  color: #4ac4f3;\n}\n.iq-widget-menu ul li.hover a span {\n  background: transparent;\n  color: #4ac4f3;\n}\n.iq-widget-menu ul ul li a span {\n  color: #333333;\n}\n.iq-widget-menu ul ul li a span:hover {\n  color: #4ac4f3;\n}\n.iq-widget-menu ul ul {\n  display: none;\n  padding-left: 20px;\n}\n.iq-widget-menu ul ul a {\n  display: block;\n  color: #333333;\n  font-size: 14px;\n}\n.iq-widget-menu ul ul a:hover {\n  color: #4ac4f3;\n}\n.iq-widget-menu ul li.active i {\n  transform: rotate(90deg);\n}\n/*SideBar - Search*/\n.iq-sidebar-widget .iq-widget-search {\n  position: relative;\n}\n.iq-sidebar-widget .iq-widget-search input {\n  padding-right: 40px;\n  box-shadow: none;\n  border-radius: 90px;\n  color: #2c3e50;\n  height: 50px;\n  border: 2px solid #f2f2f2;\n  background: #ffffff;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\n.iq-sidebar-widget .iq-widget-search input:focus {\n  background: #ffffff;\n}\n.iq-sidebar-widget .iq-widget-search i {\n  position: absolute;\n  right: 8px;\n  color: #4ac4f3;\n  cursor: pointer;\n  padding: 16px 12px;\n  font-size: 18px;\n}\n.iq-sidebar-widget .iq-widget-search input:focus {\n  border-color: #4ac4f3;\n}\n/*SideBar - Posts*/\n.iq-sidebar-widget .iq-recent-post {\n  margin-top: 20px;\n}\n.iq-sidebar-widget .iq-recent-post .media-body>a {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: #2c3e50;\n}\n.iq-sidebar-widget .iq-recent-post .media-body>a:hover {\n  color: #4ac4f3;\n}\n.iq-sidebar-widget .iq-recent-post .media-body span {\n  color: #666666;\n}\n.iq-sidebar-widget .iq-recent-post .media-body span .fa {\n  color: #333333;\n  margin-right: 5px;\n}\n/*SideBar - Tags*/\n.iq-tags li {\n  padding-left: 2px;\n  display: inline-block;\n  padding-right: 2px;\n  margin: 0 0 15px;\n}\n.iq-tags li a {\n  background: transparent;\n  color: #666;\n  padding: 4px 8px;\n  border: 1px solid #666;\n  border-radius: 90px;\n  transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n}\n.iq-tags li a:hover {\n  border-color: #4ac4f3;\n  background: none;\n  color: #4ac4f3;\n}\n/* Meta - SideBar */\n.iq-widget-archives li {\n  margin: 10px 0;\n}\n.iq-widget-archives li a {\n  color: #666;\n}\n.iq-widget-archives li a i {\n  font-size: 16px;\n  margin-right: 5px;\n}\n.iq-widget-archives li a:hover {\n  margin-left: 5px;\n  color: #4ac4f3;\n}\n/*---------------------------------------------------------------------\n                            404 Error\n-----------------------------------------------------------------------*/\n.iq-error .big-text {\n  font-size: 180px;\n  font-family: 'Open Sans', sans-serif;\n  line-height: 180px;\n  color: #333333;\n}\n.iq-error h6 {\n  background-color: #4ac4f3;\n  color: #ffffff;\n  display: inline-block;\n}\n.iq-error .form-inline.iq-subscribe {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.iq-error .iq-subscribe .form-group {\n  width: 40%;\n  display: inline-block;\n}\n.iq-error .iq-subscribe .form-control {\n  border-radius: 90px;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  padding-left: 25px;\n  box-shadow: none;\n  border: none;\n  background: #f4f4f4;\n}\n/*---------------------------------------------------------------------\n                           Coming Soon\n-----------------------------------------------------------------------*/\n.iq-coming .big-text {\n  font-size: 80px;\n  font-family: 'Open Sans', sans-serif;\n  text-transform: uppercase;\n  color: #333333;\n}\n.iq-coming img {\n  width: 140px;\n}\n.iq-coming .form-inline.iq-subscribe {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n.iq-coming .iq-subscribe .form-group {\n  width: 40%;\n  display: inline-block;\n}\n.iq-coming .iq-subscribe .form-control {\n  border-radius: 90px;\n  height: 50px;\n  width: 100%;\n  display: inline-block;\n  padding-left: 25px;\n  box-shadow: none;\n  border: none;\n  background: #f4f4f4;\n}\n.iq-coming .countdown-timer {\n  border-radius: 5px;\n  margin-bottom: 20px;\n  max-width: 300px;\n  margin: 50px auto;\n}\n.iq-coming .countdown-timer h5 {\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  text-align: center;\n  padding-top: 10px;\n  text-shadow: none;\n}\n.iq-coming .countdown-timer .timer {\n  padding: 10px;\n  text-align: center;\n  padding-top: 15px;\n}\n.iq-coming .countdown-timer .timer .timer-wrapper {\n  display: inline-block;\n  width: 200px;\n  height: 50px;\n}\n.iq-coming .countdown-timer .timer .timer-wrapper .time {\n  font-size: 80px;\n  font-weight: bold;\n  color: #333;\n  margin: 0 50px;\n  float: left;\n}\n.iq-coming .countdown-timer .timer .timer-wrapper .text {\n  font-size: 20px;\n}\n#countdown {\n  list-style: none;\n  margin: 50px 0;\n  padding: 0;\n  display: block;\n  text-align: center;\n  display: inline-block;\n}\n#countdown li {\n  display: inline-block;\n}\n#countdown li span {\n  font-size: 50px;\n  font-weight: 800;\n  line-height: 80px;\n  margin: 0 30px;\n}\n#countdown li.seperator {\n  font-size: 50px;\n  line-height: 40px;\n  vertical-align: top;\n  margin-top: 15px;\n}\n#countdown li p {\n  color: #a7abb1;\n  font-size: 20px;\n}\n/*---------------------------------------------------------------------\n                           jarallax\n-----------------------------------------------------------------------*/\n.jarallax {\n  position: relative;\n  z-index: 0;\n}\n.jarallax>.jarallax-img {\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* support for plugin https://github.com/bfred-it/object-fit-images */\n  font-family: 'object-fit:cover; ';\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n/*---------------------------------------------------------------------\n                           TERMS OF SERVICE\n-----------------------------------------------------------------------*/\n.terms-of-service .btn.btn-link {\n  color: #4ac4f3;\n  text-decoration: none;\n  font-weight: 700;\n}\n.terms-of-service .btn.btn-link.collapsed {\n  color: #333;\n}\n/*---------------------------------------------------------------------\n                               OWL Carousel\n-----------------------------------------------------------------------*/\n.owl-carousel .owl-nav {\n  display: block;\n  position: absolute;\n  text-indent: inherit;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n  cursor: pointer;\n  z-index: 999;\n}\n.owl-carousel .owl-nav .owl-prev {\n  display: block;\n  position: absolute;\n  text-align: center;\n  text-indent: inherit;\n  left: -8%;\n  width: auto;\n  cursor: pointer;\n  transition: opacity 0.3s ease 0s, left 0.3s ease 0s;\n}\n.owl-carousel .owl-nav .owl-next {\n  display: block;\n  position: absolute;\n  text-align: center;\n  text-indent: inherit;\n  right: -8%;\n  width: auto;\n  cursor: pointer;\n  transition: opacity 0.3s ease 0s, right 0.3s ease 0s;\n}\n.owl-carousel .owl-nav i {\n  font-size: 24px;\n  border-radius: 50%;\n  width: 44px;\n  height: 44px;\n  line-height: 42px;\n  padding-left: 0px;\n  display: inline-block;\n  color: #fff;\n  background: #e7e7e7;\n  font-weight: normal;\n  text-align: center;\n  transition: all 0.5s ease-out 0s;\n}\n.owl-carousel .owl-nav i:hover {\n  background: #4ac4f3;\n  color: #fff;\n}\n/* Dots */\n.owl-carousel .owl-controls .owl-dot {\n  margin-top: 20px;\n  display: inline-block;\n}\n.owl-carousel .owl-dots {\n  position: relative;\n  width: 100%;\n  display: inline-block;\n  text-indent: inherit;\n  text-align: center;\n  cursor: pointer;\n}\n.owl-carousel.owl-theme .owl-dots .owl-dot span {\n  background: #333333;\n  display: inline-block;\n  border-radius: 30px;\n  margin: 0px 3px;\n  height: 10px;\n  width: 10px;\n  border: 1px solid #333333;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  cursor: pointer;\n}\n.owl-carousel.owl-theme .owl-dots .owl-dot:hover span {\n  background: #4ac4f3;\n  border: 1px solid #4ac4f3;\n}\n.owl-carousel.owl-theme .owl-dots .owl-dot.active span {\n  background: #4ac4f3;\n  border: 1px solid #4ac4f3;\n}\n/* Arrow-1 */\n.owl-carousel.arrow-1 {\n  overflow: hidden;\n}\n.owl-carousel.arrow-1 .owl-nav {\n  display: block;\n  position: absolute;\n  text-indent: inherit;\n  top: 50% !important;\n  margin-top: -20px;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  left: 0;\n  width: 100%;\n  cursor: pointer;\n}\n.owl-carousel.arrow-1 .owl-nav .owl-prev {\n  display: block;\n  position: absolute;\n  text-indent: inherit;\n  left: -44px;\n  width: auto;\n  cursor: pointer;\n  transition: opacity 0.3s ease 0s, left 0.3s ease 0s;\n}\n.owl-carousel.arrow-1 .owl-nav .owl-next {\n  display: block;\n  position: absolute;\n  text-indent: inherit;\n  right: -44px;\n  width: auto;\n  cursor: pointer;\n  transition: opacity 0.3s ease 0s, right 0.3s ease 0s;\n}\n.owl-carousel.arrow-1 .owl-nav i {\n  font-weight: normal;\n  font-size: 24px;\n  color: #fff;\n  background: rgba(34, 34, 34, 0.7);\n  padding: 0px 12px;\n  border-radius: 0;\n  transition: all 0.3s ease-out 0s;\n}\n.owl-carousel.arrow-1 .owl-nav i:hover {\n  background: #4ac4f3;\n}\n.owl-carousel.arrow-1 .owl-nav .owl-prev {\n  left: 0;\n  display: inline-grid;\n}\n.owl-carousel.arrow-1 .owl-nav .owl-next {\n  right: 0;\n  display: inline-grid;\n}\n.owl-carousel.arrow-1 .owl-stage-outer {\n  overflow: hidden;\n}\n/*---------------------------------------------------------------------\n                            Testimonial\n-----------------------------------------------------------------------*/\n.iq-testimonial .feedback .iq-avtar {\n  width: 60px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100%;\n  float: left;\n}\n.iq-testimonial .feedback .iq-avtar img {\n  border-radius: 100%;\n}\n.iq-testimonial .feedback .iq-info {\n  position: relative;\n  background: rgba(255, 255, 255, 1.0);\n  padding: 20px;\n  border-radius: 3px;\n  box-shadow: 0px 8px 30px -20px rgba(0, 0, 0, 0.5);\n}\n.iq-testimonial .feedback .iq-info:before {\n  content: \"\";\n  position: absolute;\n  z-index: 9;\n  bottom: -15px;\n  left: 05%;\n  height: 0;\n  width: 0;\n  border-top: 15px solid rgba(255, 255, 255, 1.0);\n  border-left: 15px solid transparent;\n}\n.iq-testimonial .feedback .iq-info.light {\n  background: rgba(255, 255, 255, 0.1);\n}\n.iq-testimonial .feedback .iq-info.light:before {\n  border-top: 15px solid rgba(255, 255, 255, 0.1);\n}\n.iq-testimonial .feedback .iq-info.bg-light {\n  background: #f8f8f8;\n}\n.iq-testimonial .feedback .title {\n  font-size: 18px;\n}\n.iq-testimonial .feedback .avtar-name {\n  display: table-cell;\n}\n.iq-testimonial .feedback p {\n  margin-bottom: 0px;\n}\n.iq-testimonial .feedback .iq-lead {\n  font-size: 18px;\n}\n.iq-testimonial .iq-star i {\n  margin-right: 4px;\n}\n.iq-testimonial .owl-prev,\n.iq-testimonial .owl-next {\n  float: left;\n}\n.iq-testimonial .owl-prev i,\n.iq-testimonial .owl-next i {\n  color: #ddd;\n}\n.iq-testimonial .owl-prev:hover i,\n.iq-testimonial .owl-next:hover i {\n  color: #4ac4f3;\n}\n.iq-testimonial .owl-prev .fa-angle-left:before {\n  content: \"\\f177\";\n  float: left;\n}\n.iq-testimonial .owl-next .fa-angle-right:before {\n  content: \"\\f178\";\n  float: left;\n  margin-left: 10px;\n}\n.iq-testimonial .iq-star i {\n  margin-right: 4px;\n}\n.iq-testimonial .owl-controls {\n  position: relative;\n  width: 100%;\n  position: relative;\n  top: 30px;\n}\n/* Testimonial 2 */\n.iq-testimonial2 .owl-prev,\n.iq-testimonial2 .owl-next {\n  float: left;\n}\n.iq-testimonial2 .owl-prev i,\n.iq-testimonial2 .owl-next i {\n  color: #ddd;\n}\n.iq-testimonial2 .owl-prev:hover i,\n.iq-testimonial2 .owl-next:hover i {\n  color: #4ac4f3;\n}\n.iq-testimonial2 .owl-prev .fa-angle-left:before {\n  content: \"\\f177\";\n  float: left;\n}\n.iq-testimonial2 .owl-next .fa-angle-right:before {\n  content: \"\\f178\";\n  float: left;\n  margin-left: 10px;\n}\n.iq-testimonial2 .feedback .iq-avtar {\n  width: 60px;\n  display: inline-block;\n  text-align: center;\n  border-radius: 100%;\n  float: left;\n}\n.iq-testimonial2 .feedback .iq-avtar img {\n  border-radius: 100%;\n}\n.iq-testimonial2 .feedback .iq-info {\n  position: relative;\n  background: rgba(255, 255, 255, 1.0);\n  border: 1px solid #f8f3f3;\n  padding: 20px;\n  border-radius: 3px;\n}\n.iq-testimonial2 .feedback .iq-info.brd-none {\n  border: none;\n}\n.iq-testimonial2 .feedback .iq-info.light {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n}\n.iq-testimonial2 .feedback .iq-info.light:before {\n  border-top: 15px solid rgba(255, 255, 255, 0.2);\n}\n.iq-testimonial2 .feedback .title {\n  font-size: 18px;\n}\n.iq-testimonial2 .feedback p {\n  margin-bottom: 0px;\n  font-style: italic;\n}\n.iq-testimonial2 .iq-star i {\n  margin-right: 4px;\n}\n.iq-testimonial2 .owl-controls {\n  position: relative;\n  width: 100%;\n  position: relative;\n  top: 30px;\n}\n.iq-testimonial2 .iq-brd {\n  border-radius: 10px;\n}\n.iq-testimonial2 .testi-white {\n  background: #ffffff;\n  padding: 30px 30px 100px 30px;\n}\n.iq-testimonial2 .testi-white .feedback .iq-info {\n  padding: 20px 0;\n}\n.iq-testimonial2 img {\n  left: 0;\n  right: 0;\n}\n.iq-testimonial2 .feedback {\n  padding: 0 200px;\n}\n/*---------------------------------------------------------------------\n                            Pricing Table\n-----------------------------------------------------------------------*/\n.panel {\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 15px 25px;\n  position: relative;\n  width: 100%;\n  z-index: 10;\n}\n.pricing-table {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.01), 0px 20px 31px 3px rgba(0, 0, 0, 0.01), 0px 8px 20px 7px rgba(0, 0, 0, 0.01);\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width:900px) {\n  .pricing-table {\n    flex-direction: row;\n  }\n}\n.pricing-table * {\n  text-align: center;\n  text-transform: uppercase;\n}\n.pricing-plan {\n  border-bottom: 1px solid #e1f1ff;\n  padding: 25px;\n}\n.pricing-plan:last-child {\n  border-bottom: none;\n}\n@media (min-width:900px) {\n  .pricing-plan {\n    border-bottom: none;\n    border-right: 1px solid #e1f1ff;\n    flex-basis: 100%;\n    padding: 25px 50px;\n  }\n  .pricing-plan:last-child {\n    border-right: none;\n  }\n}\n.pricing-img {\n  margin-bottom: 25px;\n  max-width: 100%;\n}\n.pricing-header {\n  color: #888;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.pricing-features {\n  color: #4ac4f3;\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin: 50px 0 25px;\n}\n.pricing-features-item {\n  border-top: 1px solid #e1f1ff;\n  font-size: 12px;\n  line-height: 1.5;\n  padding: 15px 0;\n  color: #666666;\n}\n.pricing-features-item:last-child {\n  border-bottom: 1px solid #e1f1ff;\n}\n.pricing-price {\n  color: #4ac4f3;\n  display: block;\n  font-size: 32px;\n  font-weight: 700;\n}\n.our-pricing-1 .iq-icon {\n  border-radius: 90px;\n  display: inline-block;\n  height: 86px;\n  width: 86px;\n  line-height: 86px;\n  text-align: center;\n  color: #4ac4f3;\n  background: #f4f4f4;\n  transition: all 0.5s ease-out 0s;\n  margin-bottom: 20px;\n}\n.our-pricing-1 .iq-icon i {\n  font-size: 50px;\n}\n.our-pricing-1 .iq-icon:hover {\n  color: rgb(244, 244, 244);\n  background: rgb(74, 196, 243);\n}\n/* pricing 01 */\n.iq-pricing-01 {\n  padding: 30px 20px;\n  text-align: center;\n  z-index: 1;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 0;\n  border: 1px solid #f2f2f2;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.iq-pricing-01:hover,\n.iq-pricing-01.active {\n  margin-top: -5px;\n  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #4ac4f3;\n}\n/*---------------------------------------------------------------------\n                                Feature\n-----------------------------------------------------------------------*/\n.iq-feature h6 {\n  position: relative;\n}\n.iq-feature h6::before {\n  background: #4ac4f3;\n  bottom: -15px;\n  content: \"\";\n  height: 2px;\n  position: absolute;\n  width: 50px;\n  left: 50%;\n  margin-left: -25px;\n}\n.iq-feature img {\n  width: 180px;\n  height: 180px;\n  border-radius: 100%;\n}\n.iq-feature .step-img {\n  position: relative;\n  display: inline-block;\n}\n.iq-feature .step-number {\n  background: #5bc9f4;\n  color: #ffffff;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  font-size: 18px;\n  position: absolute;\n  text-align: center;\n  line-height: 43px;\n  right: 0;\n  top: 0;\n  border: 4px solid #ffffff;\n}\n.iq-feature.stap-left:before {\n  position: absolute;\n  left: 79%;\n  top: 20%;\n  background: url('dashed-arrow1.png') no-repeat 0 0;\n  content: \"\";\n  width: 174px;\n  height: 29px;\n}\n.iq-feature.stap-right:before {\n  position: absolute;\n  left: 79%;\n  top: 25%;\n  background: url('dashed-arrow2.png') no-repeat 0 0;\n  content: \"\";\n  width: 174px;\n  height: 29px;\n}\n.get-feature .iq-text-right {\n  padding-right: 40%;\n}\n.get-feature img {\n  width: 90%;\n  margin-top: -150px;\n  margin-bottom: -40%;\n  margin-left: 10%;\n}\n/* Feature 01 */\n.iq-feature-01 {\n  display: flex;\n}\n.iq-feature-01 .icon-box {\n  color: #666;\n  font-size: 82px;\n  padding: 5px 15px;\n  margin-right: 15px;\n  background: #fff;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.iq-feature-01:hover .icon-box {\n  color: #4ac4f3;\n}\n.iq-feature-01 .feature-body {\n  flex: 1;\n}\n/*---------------------------------------------------------------------\n                                Extra\n-----------------------------------------------------------------------*/\n.iq-about {\n  position: relative;\n  margin-bottom: -103px;\n  border-radius: 10px;\n}\n.soft-about {\n  position: relative;\n}\n.soft-about .box-img1 {\n  position: absolute;\n  top: 100px;\n  width: 400px;\n  right: 180px;\n}\n.soft-about .box-img2 {\n  position: absolute;\n  right: -50px;\n  width: 250px;\n  top: -100px;\n}\n.soft-about .box-img3 {\n  position: absolute;\n  right: 580px;\n  top: -50px;\n}\n.soft-about .box-img4 {\n  position: absolute;\n  right: 580px;\n  top: 100px;\n}\n.soft-about .box-img5 {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.soft-about .box-img6 {\n  position: absolute;\n  top: 100px;\n  width: 400px;\n  right: 180px;\n}\n.about-me img {\n  width: 50%;\n}\n.box-mail img {\n  width: 94%;\n  margin-bottom: -200px;\n  margin-top: -137px;\n}\n.life-work .iq-software-demo-1 {\n  position: absolute;\n  top: 100px;\n  height: 50%;\n  width: 40%;\n  right: 0;\n}\n.life-work img {\n  box-shadow: -97px -94px 0px -48px rgba(208, 240, 252, 1);\n}\n.life-work-1 img {\n  width: 80%;\n}\n.iq-tool-feature {\n  margin-top: -100px;\n  z-index: -1;\n}\n/*************************************\nFeature 1\n**************************************/\n.iq-feature1 .iq-blog {\n  top: 0px;\n  position: relative;\n  background: #fff;\n  transition: all 0.3s ease-out 0s;\n  z-index: 1;\n  border-bottom: 2px solid rgba(2, 216, 113, 0);\n  border-radius: 6px;\n}\n.iq-feature1 {\n  padding-bottom: calc(100px - 30px) !important;\n}\n.iq-feature1 .iq-blog .content-blog {\n  display: inline-block;\n  width: 100%;\n}\n.iq-feature1 .iq-blog .content-blog p {\n  margin-bottom: 0;\n}\n.iq-feature1 .iq-blog i {\n  margin-right: 25px;\n  color: #4ac4f3;\n  font-size: 50px;\n  line-height: 30px;\n  float: left;\n  transition: all 0.3s ease-out 0s;\n}\n.iq-feature1 .iq-blog h5 {\n  display: table;\n  position: relative;\n  text-transform: none;\n  transition: all 0.3s ease-out 0s;\n  padding-top: 15px;\n}\n.iq-feature1 .iq-blog:hover,\n.iq-feature1 .iq-blog.active {\n  top: -4px;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);\n  border-bottom: 2px solid rgba(74, 196, 243, 0.9);\n}\n/*************************************\nFeature 10\n**************************************/\n.iq-feature10 .left {\n  width: 76px;\n  height: 76px;\n  float: left;\n  margin-right: 20px;\n  text-align: center;\n  border: 1px solid #f5f5f5;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n}\n.iq-feature10 .left i {\n  color: #4ac4f3;\n  font-size: 36px;\n  background: #f3f3f3;\n  display: block;\n  margin: 7px 10px 10px 7px;\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n}\n.iq-feature10 .right {\n  display: table-cell;\n  margin-top: 10px;\n  vertical-align: top;\n}\n.iq-feature10 .right p {\n  margin-top: 0px;\n  margin-bottom: 0;\n}\n.iq-feature10:hover .left,\n.iq-feature10:hover .left i {\n  border-color: #4ac4f3;\n}\n.iq-feature10:hover .left i {\n  background: #4ac4f3;\n  color: #ffffff;\n}\n.iq-feature10 .brd {\n  border-radius: 100px;\n}\n.right-side .iq-feature10 .left {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0;\n}\n.right-side .iq-feature10 .right {\n  text-align: right;\n}\n.iq-shadow {\n  border: 1px solid #f3f4f7;\n}\n.iq-shadow i {\n  font-size: 44px;\n  padding: 20px;\n  color: #4ac4f3;\n}\n.iq-shadow .iq-font-white {\n  color: #fff;\n}\n/*************************************\nTeams 2\n**************************************/\n.iq-team2 .team-content {\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  padding: 10px;\n  overflow: hidden;\n  display: inline-block;\n  box-shadow: 5px 5px 0px rgb(0, 0, 0, 0.2);\n  -webkit-box-shadow: 5px 5px 0px rgb(0, 0, 0, 0.2);\n  -moz-box-shadow: 5px 5px 0px rgb(0, 0, 0, 0.2);\n  -ms-box-shadow: 5px 5px 0px rgb(0, 0, 0, 0.2);\n  -o-box-shadow: 5px 5px 0px rgb(0, 0, 0, 0.2);\n  transition: all 0.5s ease-out 0s;\n}\n.iq-team2 .team-content img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-team2 .team-social {\n  position: relative;\n}\n.iq-team2 .team-social li {\n  display: inline-block;\n  margin-right: 10px;\n}\n.iq-team2 .team-social li:last-child {\n  margin-right: 0;\n}\n.iq-team2 .team-social li a {\n  padding: 0 5px;\n  font-size: 15px;\n  background: rgba(255, 255, 255, 1.0);\n  width: 36px;\n  height: 36px;\n  line-height: 36px;\n  border-radius: 50%;\n  display: block;\n  color: #4ac4f3;\n  border: 1px solid #ffffff;\n}\n.iq-team2 .team-social li a:hover {\n  color: #ffffff;\n  background: rgba(255, 255, 255, 0);\n}\n.iq-team2 .avtar-name a:hover {\n  color: #222222;\n}\n.iq-team-main {\n  padding-bottom: calc(100px - 30px) !important;\n}\n/*----------------------\nPricing 5\n----------------------*/\n.iq-pricing-5 {\n  padding: 30px 20px;\n  text-align: center;\n  z-index: 1;\n  position: relative;\n  border-radius: 10px;\n  margin-top: 0;\n  border: 1px solid #f2f2f2;\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.iq-pricing-5:hover,\n.iq-pricing-5.active {\n  margin-top: -10px;\n  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #4ac4f3;\n}\n.iq-pricing-main {\n  padding-bottom: calc(100px - 10px) !important;\n}\n/*---------------------------------------------------------------------\n                            Footer 3\n-----------------------------------------------------------------------*/\n.iq-footerr {\n  background: #fff;\n}\n.iq-footerr .footer-top {\n  background: #242424;\n}\n.iq-footerr {\n  color: #222222;\n}\n.iq-footerr hr {\n  margin: 0;\n  border-top: 0px;\n  padding: 0px;\n  border-bottom: 1px solid #3333;\n}\n.iq-footerr .logo img {\n  width: 50px;\n}\n/*Menu*/\n.iq-footerr .menu li {\n  display: block;\n  border-bottom: 0px;\n  margin-bottom: 10px;\n  line-height: 24px;\n  padding: 0;\n}\n.iq-footerr .menu li a {\n  color: #222222;\n}\n.iq-footerr .menu li a:hover {\n  color: #4ac4f3;\n}\n.iq-footerr .office-day li {\n  margin-bottom: 10px;\n}\n.iq-footerr .office-day li a {\n  color: #222222;\n}\n.iq-footerr .office-day li a:hover {\n  color: #4ac4f3;\n}\n/*Link*/\n.iq-footerr .link li a {\n  color: #222222;\n}\n.iq-footerr .link li a:hover {\n  color: #4ac4f3;\n}\n/*footer-widget*/\n.iq-footerr .iq-contact li {\n  font-size: 14px;\n  color: #222222;\n  margin-bottom: 15px;\n}\n.iq-footerr .iq-contact i {\n  color: #4ac3f3;\n  float: left;\n  display: table-cell;\n  width: 30px;\n  line-height: 23px;\n  font-size: 32px;\n}\n.iq-footerr .iq-contact p {\n  display: table;\n  color: #222222;\n  margin-bottom: 0px;\n  padding-left: 5px;\n}\n/*************************\nTab\n*************************/\n.iq-tab .nav-pills {\n  padding: 8px;\n  border-radius: 900px;\n}\n.iq-tab .nav-item {\n  width: 100%;\n}\n.iq-tab .nav-item a {\n  color: #f0f0f0;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 15px 10px;\n  margin-bottom: 8px;\n  border-radius: 3px;\n  position: relative;\n  border: inherit;\n}\n.iq-footerr .link li img {\n  height: 50px;\n  margin-right: 10px;\n}\n.iq-tab .nav-pills .nav-link {\n  border: none;\n  border-radius: 3px;\n  margin-right: 2px;\n}\n.iq-tab .nav-pills .nav-link.active,\n.iq-tab .nav-pills .show>.nav-link,\n.iq-tab .nav-pills .nav-link:hover {\n  background: rgba(125, 210, 243, 0.7);\n  color: #ffffff;\n}\n.iq-tab.horizontal .nav-item {\n  width: 16%;\n  text-align: center;\n  margin-right: 15px;\n}\n.iq-tab.horizontal .nav-item a {\n  padding: 15px 10px;\n  margin-bottom: 0;\n  border-radius: 10px;\n}\n.iq-tab.horizontal .nav-item a i {\n  font-size: 44px;\n  display: block;\n  margin-bottom: 10px;\n}\n.main-service-box{\n  padding-bottom: calc(100px - 30px) !important;\n}\n.service-box {\n  padding: 20px;\n  border: 1px solid transparent;\n  background: #ffffff;\n  margin-bottom: 30px;\n}\n.service-box:hover {\n  border: solid transparent 1px;\n  box-shadow: 0 0 40px rgba(var(--primary-rgb-theme-color), .3);\n  transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.media.service-box i {\n  font-size: 50px;\n  margin-right: 20px;\n  color: #4ac3f3;\n}\n.animationnew-shap {\n  position: absolute;\n  top: 0%;\n  right: 0;\n}\n.animation-shap {\n  position: absolute;\n  top: 0%;\n  left: 0;\n}\n.animation-shap {\n  position: absolute;\n  top: 0%;\n  left: 0;\n}\n.animation-shap .shap-bg,\n.animationnew-shap .shap-bg {\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  width: 515px;\n  height: 515px;\n  margin: auto;\n  position: relative;\n  background-color: #4ac4f3;\n  background-image: linear-gradient(-45deg, #4ac4f3 0%, #4ac4f3 100%);\n  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n  -webkit-animation: one-animated 5s infinite;\n          animation: one-animated 5s infinite;\n  overflow: hidden;\n}\n@-webkit-keyframes one-animated {\n  0% {\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n  }\n  25% {\n    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;\n  }\n  50% {\n    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;\n  }\n  75% {\n    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;\n  }\n}\n@keyframes one-animated {\n  0% {\n    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n  }\n  25% {\n    border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;\n  }\n  50% {\n    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;\n  }\n  75% {\n    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;\n  }\n}\n@-webkit-keyframes two-animated {\n  0% {\n    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;\n  }\n  25% {\n    border-radius: 40% 80% 30% 90% / 72% 65% 35% 28%;\n  }\n  50% {\n    border-radius: 65% 35% 45% 55% / 22% 48% 52% 78%;\n  }\n  75% {\n    border-radius: 24% 76% 10% 90% / 44% 68% 32% 56%;\n  }\n}\n@keyframes two-animated {\n  0% {\n    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;\n  }\n  25% {\n    border-radius: 40% 80% 30% 90% / 72% 65% 35% 28%;\n  }\n  50% {\n    border-radius: 65% 35% 45% 55% / 22% 48% 52% 78%;\n  }\n  75% {\n    border-radius: 24% 76% 10% 90% / 44% 68% 32% 56%;\n  }\n}\n@-webkit-keyframes three-animated {\n  0% {\n    border-radius: 12% 88% 40% 40% / 20% 15% 85% 80%;\n  }\n  25% {\n    border-radius: 72% 28% 30% 90% / 15% 46% 54% 85%;\n  }\n  50% {\n    border-radius: 12% 88% 40% 40% / 20% 15% 85% 80%;\n  }\n  75% {\n    border-radius: 18% 82% 10% 90% / 24% 68% 32% 76%;\n  }\n}\n@keyframes three-animated {\n  0% {\n    border-radius: 12% 88% 40% 40% / 20% 15% 85% 80%;\n  }\n  25% {\n    border-radius: 72% 28% 30% 90% / 15% 46% 54% 85%;\n  }\n  50% {\n    border-radius: 12% 88% 40% 40% / 20% 15% 85% 80%;\n  }\n  75% {\n    border-radius: 18% 82% 10% 90% / 24% 68% 32% 76%;\n  }\n}\n.iq-badge {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 14px;\n  font-weight: normal;\n  padding: 10px;\n  margin-bottom: 15px;\n}\n.iq-fancy-boxnew {\n  padding: 30px;\n  overflow: hidden;\n  position: relative;\n  background: #fff;\n\n}\n.iq-fancy-boxnew:hover {\n  background: #f5f7fb;\n  border-bottom: solid 4px #4ac4f3;\n  transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  -moz-transition: all 0.3s ease-in-out;\n  -ms-transition: all 0.3s ease-in-out;\n  -o-transition: all 0.3s ease-in-out;\n  -webkit-transition: all 0.3s ease-in-out;\n\n }\n.iq-fancy-boxnew .iq-icon {\n  border-radius: 90px;\n  display: inline-block;\n  height: 86px;\n  width: 86px;\n  line-height: 86px;\n  text-align: center;\n  color: #fff;\n  background: #4ac4f3;\n  transition: all 0.5s ease-out 0s;\n}\n.iq-fancy-boxnew .iq-icon i {\n  font-size: 46px;\n}\n.iq-fancy-boxnew .fancy-content h5 {\n  z-index: 9;\n  position: relative;\n}\n.iq-fancy-boxnew .fancy-content p {\n  margin-bottom: 0;\n}\n.iq-works-imgs {\n  width: 100%;\n}\n.iq-fancy-boxnew.text-center .icon-bg {\n  text-align: center;\n  display: flex;\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  width: 86px;\n  height: 86px;\n  margin: auto;\n  position: relative;\n  background-color: #4ac4f3;\n  background-image: linear-gradient(-45deg, #4ac4f3 0%, #4ac4f3 100%);\n  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;\n  box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);\n  -webkit-animation: one-animated 10s infinite;\n          animation: one-animated 10s infinite;\n  overflow: hidden;\n}\n.future-services {\n  padding: 60px 10px 0px;\n}\n.future-services .future-img {\n  margin-bottom: 15px;\n}\n.future-services h4 {\n  margin-bottom: 10px;\n}\n.services-list {\n  margin: 0 0 -120px;\n  padding: 0;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.services-list li {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  float: left;\n}\n.services-list li.one {\n  position: absolute;\n  left: 30px;\n  bottom: 0;\n}\n.services-list li.two {\n  position: absolute;\n  right: 100px;\n  bottom: 0;\n}\n.services-page .future-services {\n  padding: 30px 10px 0px;\n}\n.search-btn input[type=text] {\n  padding: 10px;\n  width: 50%;\n  font-size: 16px;\n  border-radius: 4px;\n  color: #333333;\n  border: none;\n}\n.search-btn button {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: 16px;\n  border-radius: 4px;\n  background: #333333;\n  font-size: 17px;\n  border: none;\n  cursor: pointer;\n  color: #fff;\n}\n.search-btn button:focus {\n  outline: none;\n}\n.search-btn button:hover {\n  background: #fff;\n  color: #333333;\n}\n/* Responsive css import */\n/*\n\nTemplate: Sofbox - Angular 8 Software landing page\nAuthor: iqonic.design\nVersion: 1.0\nDesign and Developed by: iqonic.design\n\nNOTE: This file contains the styling for responsive Template.\n\n*/\n/*****************\n================================================\n (  Media Queries  )\n================================================\n *******************/\n@media(min-width:1601px) {\n\t.get-feature img {\n\t\twidth: 74%;\n\t}\n\t.iq-pricing .price-title:after {\n\t\tbottom: -2px;\n\t}\n}\n@media(max-width:1399px) {\n\t.iq-banner .banner-text h1 {\n\t\tfont-size: 56px;\n\t}\n\t.counter-info-img img {\n\t\twidth: 100%;\n\t\tmargin-top: 0;\n\t}\n\t.counter-info .waves-box {\n\t\tleft: 44%;\n\t}\n\t.iq-objects .iq-objects-04,\n\t.iq-objects-software .iq-objects-03 {\n\t\tborder: 48px solid #4ac4f3;\n\t\theight: 500px;\n\t\twidth: 500px;\n\t}\n\t#software-features {\n\t\tmargin-top: 0;\n\t\t/*padding: 80px 0px;*/\n\t}\n\t.iq-objects-software .iq-objects-02 {\n\t\tbottom: 13%;\n\t}\n\t.iq-software-demo {\n\t\ttop: 80px;\n\t}\n\t.get-feature img {\n\t\twidth: 100%;\n\t\tmargin-top: -86px;\n\t\tmargin-left: 0;\n\t}\n\t.iq-breadcrumb .banner-img {\n\t\tmax-width: 120%;\n\t}\n}\n@media(max-width:1365px) {\n\t.iq-banner .banner-text h1 {\n\t\tfont-size: 50px;\n\t}\n\t.owl-carousel .owl-nav .owl-prev {\n\t\tleft: -4%;\n\t}\n\t.owl-carousel .owl-nav .owl-next {\n\t\tright: -4%;\n\t}\n\t.counter-info-img img {\n\t\twidth: 111%;\n\t\tmargin-top: 10px;\n\t}\n\t.counter-info .waves-box {\n\t\ttop: 41%;\n\t\tleft: 50%;\n\t}\n\t.soft-about .box-img3 {\n\t\tright: 500px;\n\t}\n\t.iq-works-img {\n\t\twidth: 110%;\n\t}\n\t.animation-shap .shap-bg,\n\t.animationnew-shap .shap-bg {\n\t\twidth: 400px;\n\t\theight: 400px;\n\t}\n\t.iq-breadcrumb .banner-img {\n\t\tmax-width: 110%;\n\t}\n}\n@media(max-width:1199px) {\n\t/*----------------\n\tSection padding\n\t----------------*/\n\t.overview-block-ptb {\n\t\tpadding: 80px 0;\n\t}\n\t.overview-block-pt {\n\t\tpadding: 80px 0 0;\n\t}\n\t.overview-block-pb {\n\t\tpadding: 0 0 80px;\n\t}\n\t.overview-block-pb.how-works {\n\t\tpadding: 80px 0;\n\t}\n\theader .navbar .navbar-nav>li {\n\t\tmargin: 0 20px 0 0;\n\t}\n\theader .container-fluid,\n\t.iq-banner .container-fluid,\n\t.iq-banner-04 .container-fluid {\n\t\tpadding: 0px 45px;\n\t}\n\t.iq-banner .banner-text h1 {\n\t\tfont-size: 44px;\n\t}\n\t.iq-banner .banner-text p.iq-mb-40 {\n\t\tmargin-bottom: 20px;\n\t}\n\t.iq-banner .banner-text {\n\t\tmargin-bottom: 40px;\n\t}\n\t.iq-banner .banner-img {\n\t\twidth: 116%;\n\t}\n\t.iq-banner .banner-text .banner-phone {\n\t\tright: -30px;\n\t}\n\t.iq-objects .iq-objects-01 {\n\t\topacity: 0.2;\n\t}\n\t.iq-works-img {\n\t\twidth: 100%;\n\t}\n\t.counter-info-img img {\n\t\tmargin-top: 0;\n\t\twidth: 100%;\n\t}\n\t.iq-banner .banner-img {\n\t\twidth: 100%;\n\t}\n\t.owl-carousel .owl-nav .owl-prev {\n\t\tleft: 0%;\n\t}\n\t.owl-carousel .owl-nav .owl-next {\n\t\tright: 0%;\n\t}\n\t.slider-container .slider-content {\n\t\twidth: 85%;\n\t\theight: 85%;\n\t}\n\t.slider-container .slider-left {\n\t\tright: 100%;\n\t}\n\t.slider-container .slider-right {\n\t\tleft: 100%;\n\t}\n\t.iq-software-demo {\n\t\ttop: 23%;\n\t}\n\t.iq-objects .iq-objects-04,\n\t.iq-objects-software .iq-objects-03 {\n\t\tborder: 48px solid #4ac4f3;\n\t\theight: 400px;\n\t\twidth: 400px;\n\t}\n\t.iq-objects .iq-objects-04 {\n\t\ttop: 13%;\n\t}\n\t.iq-objects-software .iq-objects-03 {\n\t\ttop: 15%;\n\t}\n\t.iq-amazing-tab .nav.nav-tabs li a {\n\t\tpadding: 20px;\n\t}\n\t.iq-objects-software .iq-objects-01 {\n\t\ttop: 16%;\n\t}\n\t.counter i {\n\t\tmargin-right: 15px;\n\t}\n\t.counter-info .waves-box {\n\t\ttop: 29%;\n\t\tleft: 43%;\n\t}\n\t.iq-newsletter .form-group {\n\t\twidth: 67%;\n\t}\n\t.info-share li {\n\t\tmargin: 0px 2px;\n\t}\n\t.container {\n\t\tmax-width: 94%;\n\t}\n\t.counter label {\n\t\tfont-size: 16px;\n\t}\n\t.counter span {\n\t\tfont-size: 36px;\n\t}\n\t.iq-footer-box .iq-icon i {\n\t\tmargin-right: 9px;\n\t}\n\t.iq-blog-meta ul li {\n\t\tfont-size: 15px;\n\t}\n\t.iq-banner-04 .banner-text h1 {\n\t\tfont-size: 46px;\n\t}\n\t.iq-banner-04 .banner-text p.iq-mb-40 {\n\t\tmargin-bottom: 20px;\n\t}\n\t.Product-works {\n\t\tpadding-bottom: 80px;\n\t}\n\t.iq-software-demo {\n\t\theight: 75%;\n\t\ttop: 26%;\n\t}\n\t.iq-more-info .row.iq-mt-30 {\n\t\tmargin: 30px 0;\n\t}\n\t.our-pricing-1 {\n\t\tpadding-top: 80px;\n\t}\n\t.iq-feature-01 .overview-block-ptb {\n\t\tpadding-top: 0;\n\t}\n\t.our-pricing {\n\t\tpadding-top: 0;\n\t}\n\t.life-work .iq-software-demo-1 {\n\t\ttop: 150px;\n\t}\n\t.life-work-1 h2 {\n\t\tmargin-top: 0;\n\t}\n\t.iq-tool-feature {\n\t\tmargin-top: -45px;\n\t}\n\t.soft-about .box-img1 {\n\t\tright: 120px;\n\t}\n\t.soft-about .box-img6 {\n\t\tright: 120px;\n\t}\n\t.soft-about .box-img3 {\n\t\tright: 350px;\n\t}\n\t.soft-about .box-img4 {\n\t\tright: 500px;\n\t\ttop: 60px;\n\t}\n\t.soft-about .box-img5 {\n\t\ttop: -40px;\n\t}\n\t.box-mail img {\n\t\twidth: 100%;\n\t\tmargin-top: -112px;\n\t}\n\t.get-feature .iq-text-right {\n\t\tpadding-right: 0;\n\t}\n\t.get-feature img {\n\t\twidth: 100%;\n\t\tmargin-top: 0;\n\t\tmargin-left: 0;\n\t}\n\t.iq-tab .nav-item a {\n\t\tfont-size: 14px;\n\t}\n\t.animation-shap .shap-bg,\n\t.animationnew-shap .shap-bg {\n\t\twidth: 300px;\n\t\theight: 300px;\n\t}\n\t.how-works {\n\t\tpadding: 80px 0;\n\t}\n\t.overview-block-pb.how-works .container-fluid h2 {\n\t\tfont-size: 30px;\n\t\tline-height: 30px;\n\t}\n\t.text-left.align-self-center h3 {\n\t\tfont-size: 28px;\n\t\tline-height: 40px;\n\t}\n\t.no-gutters .iq-shadow i {\n\t\tfont-size: 30px;\n\t}\n\t.iq-objectsnew .iq-objects-04 {\n\t\tborder: 40px solid #4ac4f3;\n\t\twidth: 400px;\n\t\theight: 400px;\n\t\ttop: 9%;\n\t}\n\t.iq-objects-softwarenew .iq-objects-03 {\n\t\tborder: 40px solid #4ac4f3;\n\t\twidth: 400px;\n\t\theight: 400px;\n\t}\n\t.iq-rmt-80 {\n\t\tmargin-top: 80px;\n\t}\n\th5 {\n\t\tfont-size: 20px;\n\t}\n\t.iq-fancy-box {\n\t\tpadding: 14px;\n\t}\n\t.iq-fancy-boxnew {\n\t\tpadding: 28px;\n\t}\n\th3 {\n\t\tfont-size: 30px;\n\t}\n\n}\n@media(max-width:992px) {\n\th2 {\n\t\tfont-size: 40px;\n\t\tline-height: 40px;\n\t}\n\theader {\n\t\tpadding: 10px 0;\n\t}\n\t.container {\n\t\tmax-width: 74%;\n\t}\n\t.navbar-light .navbar-toggler {\n\t\tborder: 1px solid #fff;\n\t\tbackground: #fff;\n\t}\n\t.iq-banner-03 .banner-text h1 {\n\t\tfont-size: 35px;\n\t}\n\t.iq-banner-03 {\n\t\tpadding-bottom: 30px;\n\t}\n\t.iq-banner-03 .banner-text p {\n\t\tmargin-bottom: 15px;\n\t}\n\t.iq-banner .banner-img {\n\t\tmargin-top: 30px;\n\t}\n\t.r-mt-30 {\n\t\tmargin-top: 30px;\n\t}\n\t.r-mt-40 {\n\t\tmargin-top: 40px;\n\t}\n\t.iq-banner-02 .banner-text h1 {\n\t\tfont-size: 54px;\n\t}\n\t.iq-works-box.no-shadow {\n\t\tpadding: 15px 20px;\n\t}\n\t.iq-banner-02 .banner-text p {\n\t\tmargin: 0 0 20px 0;\n\t\tpadding: 0;\n\t}\n\t.navbar-light .navbar-toggler span {\n\t\tcolor: #4ac4f3;\n\t}\n\t.navbar-toggler {\n\t\tpadding: 0px 10px;\n\t\tfont-size: 38px\n\t}\n\t.navbar-toggler:focus,\n\t.navbar-toggler:hover {\n\t\toutline: none;\n\t}\n\theader .navbar .navbar-nav .nav-item a::before {\n\t\tdisplay: none;\n\t}\n\theader .navbar .navbar-collapse {\n\t\tbackground: #fff;\n\t\tmargin-top: 10px;\n\t}\n\theader .navbar .navbar-nav>li {\n\t\tmargin: 0;\n\t}\n\theader .navbar .navbar-nav .nav-item a {\n\t\tpadding: 10px 15px !important;\n\t\tcolor: #333;\n\t}\n\theader#main-header .navbar .menu>li {\n\t\tpadding: 0px !important;\n\t\tmargin-right: 0px;\n\t}\n\theader .navbar .navbar-nav .nav-item a:hover,\n\theader .navbar .navbar-nav .nav-item a:focus,\n\theader .navbar .navbar-nav .nav-item a.active,\n\theader .navbar .navbar-nav .nav-item a.active:focus,\n\theader .navbar .navbar-nav .nav-item a.active:hover {\n\t\tcolor: #4ac4f3;\n\t}\n\theader .button,\n\theader .button-line {\n\t\tdisplay: none;\n\t}\n\t#main-header li i {\n\t\tfloat: none !important;\n\t\tmargin-top: 0;\n\t}\n\t.iq-objects .iq-objects-01 {\n\t\topacity: 1;\n\t}\n\t.iq-objects .iq-objects-02 {\n\t\ttop: 40%;\n\t}\n  .life-work-1 img {\n    width: 100%;\n  }\n\t.iq-objects .iq-objects-03 {\n\t\ttop: 67%;\n\t}\n\t.iq-objects .iq-objects-04 {\n\t\ttop: 48%;\n\t\tright: 0;\n\t}\n\t/*.how-works {\n\t\tpadding-top: 0px;\n\t}*/\n\t.iq-banner .iq-waves .waves {\n\t\twidth: 10rem;\n\t\theight: 10rem;\n\t}\n\t.iq-banner .iq-waves {\n\t\tleft: -50px;\n\t\ttop: -50px;\n\t}\n\t.iq-software-demo {\n\t\twidth: 100%;\n\t\ttop: 0;\n\t\tposition: inherit;\n\t\ttext-align: center;\n\t}\n\t.iq-objects-software .iq-objects-02 {\n\t\tbottom: 45%;\n\t}\n\t.iq-objects-software .iq-objects-03 {\n\t\ttop: 2%;\n\t\tleft: 50%;\n\t}\n\t.screenshots-slider {\n\t\tmin-height: 400px;\n\t}\n\t.slider-container .slider-content {\n\t\twidth: 66%;\n\t\theight: 66%;\n\t}\n\t.iq-amazing-tab .nav.nav-tabs li {\n\t\twidth: 32%;\n\t}\n\t.counter-info .waves-box {\n\t\ttop: 40%;\n\t\tleft: 47%;\n\t}\n\t/*.counter-info-img img { margin-bottom: -87px; }*/\n\t.iq-objects-asked .iq-objects-02 {\n\t\tleft: 73%;\n\t}\n\t.iq-newsletter .form-group {\n\t\twidth: 75%;\n\t}\n\t.iq-asked {\n\t\toverflow: hidden;\n\t}\n\t.heading-title p {\n\t\tpadding: 0;\n\t}\n\t.heading-title {\n\t\tmargin-bottom: 40px;\n\t}\n\t.iq-banner-03 .banner-img {\n\t\twidth: 100%;\n\t}\n\t.iq-banner-03 .waves-box {\n\t\tposition: absolute;\n\t\ttop: 23%;\n\t\tleft: 32%;\n\t}\n\t.iq-banner-04 .banner-text {\n\t\tmargin-top: 8%;\n\t}\n\t.iq-footer .footer-top {\n\t\tpadding-bottom: 40px;\n\t}\n\t.Product-works {\n\t\tpadding: 80px 0;\n\t}\n\t.iq-feature.stap-left:before {\n\t\tdisplay: none;\n\t}\n\t.iq-feature.stap-right:before,\n\t.iq-banner-06 .banner-objects,\n\t.iq-banner-02.no-before .banner-objects {\n\t\tdisplay: none;\n\t}\n\t.iq-pricing-5:hover,\n\t.iq-pricing-5.active {\n\t\tmargin: 0 5px;\n\t}\n\t.iq-testimonial2 .feedback {\n\t\tpadding: 0;\n\t}\n\t.iq-asked-1 .iq-accordion {\n\t\tmargin: 0;\n\t}\n\t.iq-counter-box-1 .heading-title p {\n\t\tpadding: 0;\n\t}\n\t.life-work .iq-software-demo-1 {\n\t\twidth: 100%;\n\t\tmargin-top: 100px;\n\t\tposition: inherit;\n\t\ttext-align: center;\n\t}\n\t.life-work-1 h2 {\n\t\tmargin-top: 50px;\n\t}\n\t.iq-tool-feature {\n\t\tmargin-top: 10px;\n\t}\n\t.iq-tool-feature h2 {\n\t\tmargin-top: 0;\n\t}\n\t.iq-tool-feature {\n\t\tpadding-bottom: 300px;\n\t}\n\t.soft-about .box-img1 {\n\t\ttop: 150px;\n\t\tright: 300px;\n\t}\n\t.soft-about .box-img6 {\n\t\ttop: 150px;\n\t\tright: 300px;\n\t}\n\t.soft-about .box-img4 {\n\t\tright: 700px;\n\t\ttop: 230px;\n\t}\n\t.soft-about .box-img3 {\n\t\tleft: 0;\n\t}\n\t.about-me p {\n\t\ttext-align: center;\n\t}\n\t.iq-banner-02.style-1 .banner-objects .banner-objects-01 img,\n\t.iq-banner-02.style-1 .banner-objects .banner-objects-04 img {\n\t\twidth: 75%;\n\t}\n\t.iq-banner-02.style-1 .banner-objects .banner-objects-02 {\n\t\twidth: 250px;\n\t\theight: 250px;\n\t\tleft: 0;\n\t}\n\t.box-mail img {\n\t\tdisplay: none\n\t}\n\t.get-feature img {\n\t\tmargin-bottom: 0;\n\t}\n\t.bg-full-features .container-fluid.no-padding {\n\t\tpadding: 0 15px !important;\n\t}\n\t.bg-full-features .d-inline-block.w-100.h-100.iq-parallax {\n\t\tdisplay: none !important;\n\t}\n\t.iq-tab.horizontal .nav-item a {\n\t\tpadding: 10px 6px;\n\t}\n\t.iq-banner-08 .banner-img {\n\t\twidth: 100%;\n\t\tmargin-top: 30px;\n\t}\n\t.pattern-dot .iq-about,\n\t.iq-counter-box.pattern-dot .iq-about img {\n\t\tmargin-bottom: 0;\n\t}\n\t.iq-r-mb-15 {\n\t\tmargin-bottom: 15px;\n\t}\n\t.iq-tab.horizontal .nav-item {\n\t\twidth: 24%;\n\t}\n\t.align-self-center h3 {\n\t\tfont-size: 27px;\n\t\tline-height: 36px;\n\t}\n\t.banner-text .justify-content-between .align-self-center h1 {\n\t\tfont-size: 36px;\n\t}\n\t.banner-text .justify-content-between .align-self-center h5 {\n\t\tfont-size: 18px;\n\t}\n\t.iq-banner .banner-text .watch-img {\n\t\tright: 82%;\n\t}\n\t.iq-breadcrumb .banner-ani {\n\t\twidth: 30%\n\t}\n\theader.new-header .navbar .navbar-nav .nav-item a {\n\t\tpadding: 10px 15px;\n\t}\n\theader.new-header .navbar .navbar-nav .nav-item a.active {\n\t\tcolor: #4ac4f3;\n\t}\n\theader#main-header .navbar .menu li .sub-menu {\n\t\tposition: relative;\n\t\ttop: 0 !important;\n\t\twidth: 100%;\n\t\tbox-shadow: none;\n\t}\n\t.iq-newsletter {\n\t\tpadding: 80px 0;\n\t}\n\t.iq-team {\n\t\tmargin-bottom: 30px;\n\t}\n\t.iq-client {\n\t\tpadding: 31px;\n\t}\n\t.iq-objects-softwarenew .iq-objects-02 {\n\t\tbottom: 32%;\n\t}\n\t.iq-badge {\n\t\tmargin-top: 30px;\n\t}\n\t.iq-asked .center-block {\n\t\tmargin-bottom: 30px;\n\t}\n\t.iq-fancy-box {\n\t\tpadding: 30px;\n\t}\n\t.service-box {\n\t\tmargin-top: 15px;\n\t}\n}\n@media(max-width:979px) {\n\t.container {\n\t\tmax-width: 94%;\n\t}\n\t.iq-objects-software .iq-objects-03 {\n\t\tleft: 46%;\n\t}\n\t.slider-container .slider-left {\n\t\tright: 87%;\n\t}\n\t.slider-container .slider-right {\n\t\tleft: 87%;\n\t}\n\t.iq-banner-04 .banner-img {\n\t\tmargin-top: 30px;\n\t}\n\t.iq-banner-06 .banner-text p {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t.soft-about .box-img1 {\n\t\ttop: 160px;\n\t\tright: 200px;\n\t}\n\t.soft-about .box-img6 {\n\t\ttop: 160px;\n\t\tright: 200px;\n\t}\n\t.soft-about .box-img4 {\n\t\ttop: 270px;\n\t\tright: 600px;\n\t}\n\t.soft-about .box-img3 {\n\t\ttop: -100px;\n\t\tleft: -30px;\n\t}\n\t.about-me img {\n\t\twidth: 40%;\n\t}\n\t.iq-banner-02.style-1 .banner-objects .banner-objects-02 {\n\t\tdisplay: none;\n\t}\n\t.iq-tab.horizontal .nav-item {\n\t\twidth: 26%;\n\t}\n\t.iq-r-mb-15 {\n\t\tmargin-bottom: 15px;\n\t}\n\t.iq-objects-softwarenew .iq-objects-02 {\n\t\tdisplay: none;\n\t}\n\t.iq-breadcrumb .banner-img {\n\t\tmax-width: 100%;\n\t}\n\t.iq-breadcrumb .banner-ani {\n\t\twidth: 24%;\n\t\tright: 14%;\n\t}\n\t.iq-objects-software .iq-objects-02 {\n\t\tbottom: 45%;\n\t}\n\t.iq-objects-asked .iq-objects-01 {\n\t\tdisplay: none;\n\t}\n\t.iq-objects-asked .iq-objects-03 {\n\t\tleft: 3%;\n\t}\n\t.button {\n\t\tpadding: 10px 36px;\n\t}\n\t .iq-banner-12 .banner-text .banner-phone {\n\t \tleft: -24px;\n\t}\n}\n@media(max-width:767px) {\n\t/*----------------\n\t\tSection padding\n\t\t----------------*/\n\t.overview-block-ptb {\n\t\tpadding: 50px 0;\n\t}\n\t.overview-block-pt {\n\t\tpadding: 50px 0 0;\n\t}\n\t.overview-block-pb {\n\t\tpadding: 0 0 50px;\n\t}\n\th2 {\n\t\tfont-size: 34px;\n\t\tline-height: 40px;\n\t}\n\th3 {\n\t\tfont-size: 30px;\n\t}\n\t.iq-box-shadow {\n\t\tpadding: 60px 20px 0;\n\t\tmargin-top: 0;\n\t}\n\t.container {\n\t\tmax-width: 100%;\n\t}\n\t.heading-title {\n\t\tmargin-bottom: 40px;\n\t}\n\t.iq-banner .banner-text h1 {\n\t\tfont-size: 38px;\n\t}\n\t.iq-objects .iq-objects-01 {\n\t\topacity: 0.2;\n\t}\n\theader .container-fluid,\n\t.iq-banner .container-fluid,\n\t.iq-banner-04 .container-fluid {\n\t\tpadding: 0px 15px;\n\t}\n\t.iq-banner-04 .banner-text {\n\t\tmargin-top: 13%;\n\t}\n\t.iq-more-info .row.iq-mt-30 .col-sm-4 {\n\t\tmargin: 15px 0;\n\t}\n\t.iq-objects .iq-objects-04,\n\t.iq-objects-software .iq-objects-03 {\n\t\tborder: 30px solid #4ac4f3;\n\t\theight: 280px;\n\t\twidth: 280px;\n\t}\n\t.iq-objects-software .iq-objects-03 {\n\t\tleft: 39%;\n\t}\n\t.slider-container .slider-content {\n\t\twidth: 40%;\n\t\theight: 40%;\n\t}\n\t.screenshots-slider {\n\t\tmin-height: 250px;\n\t}\n\t.iq-banner-03 .banner-img {\n\t\tmargin-top: 20px;\n\t}\n\t.iq-banner-03 .banner-text h1 {\n\t\tfont-size: 30px;\n\t}\n\t.r4-mt-30 {\n\t\tmargin-top: 30px;\n\t}\n\t.r4-mt-40 {\n\t\tmargin-top: 40px;\n\t}\n\t.slider-container .slider-left {\n\t\tright: 74%;\n\t}\n\t.slider-container .slider-right {\n\t\tleft: 74%;\n\t}\n\t.iq-amazing-tab .nav.nav-tabs li a span {\n\t\tdisplay: none;\n\t}\n\t#compare-services .row .col-sm-2.align-self-center h2 {\n\t\tmargin: 20px 0 30px;\n\t}\n\t.iq-newsletter .form-group {\n\t\twidth: 100%;\n\t}\n\t.iq-newsletter .form-inline {\n\t\tdisplay: inline-block;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n\t.iq-newsletter .form-inline .button {\n\t\tmargin-left: 0;\n\t}\n\t.footer-info .map {\n\t\theight: 350px;\n\t\tposition: inherit;\n\t}\n\t.info-share {\n\t\tmargin: 0px 0 0;\n\t\ttext-align: left !important;\n\t}\n\t.counter-info .waves-box {\n\t\ttop: 46%;\n\t\tleft: 43%;\n\t}\n\t.iq-banner-02 .banner-text h1 {\n\t\tfont-size: 44px;\n\t}\n\t.accordion-details .col-sm-3 img {\n\t\twidth: 100%;\n\t}\n\t.iq-amazing-tab .nav-tabs li a i {\n\t\tmargin-right: 0;\n\t}\n\t.iq-banner-02 .banner-img {\n\t\tmargin-bottom: -20px;\n\t}\n\t.iq-banner-03.overview-block-pt {\n\t\tpadding-top: 80px;\n\t}\n\t.Product-works {\n\t\tpadding: 50px 0;\n\t}\n\t.iq-footer .info-share {\n\t\tmargin: 0;\n\t}\n\t.iq-banner-05 p {\n\t\tmargin: 0;\n\t}\n\t.soft-about,\n\t.iq-banner-02.style-1 .banner-objects {\n\t\tdisplay: none;\n\t}\n\t.iq-tool-feature {\n\t\tpadding-bottom: 50px;\n\t}\n\t.footer {\n\t\ttext-align: center;\n\t}\n\t.info-share {\n\t\ttext-align: left;\n\t\tmargin-bottom: 0px;\n\t}\n\t.iq-banner-02 .banner-video {\n\t\twidth: 400px;\n\t\theight: 230px;\n\t}\n\t.iq-banner-02.style-1 .button-blue-shadow.iq-mr-30 {\n\t\tmargin-right: 0;\n\t}\n\t.iq-banner-02.style-1 .banner-img {\n\t\tmargin-top: 40px;\n\t}\n\t.iq-footer3 .col-lg-3.col-md-6.col-sm-6.iq-mtb-20 {\n\t\tmargin: 10px 0;\n\t}\n\t.iq-footer3 .link,\n\t.iq-footer3 .iq-copyright {\n\t\tdisplay: inline-block;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t}\n\t.iq-banner-08 p.iq-mb-40 {\n\t\tmargin-bottom: 0;\n\t}\n\t.dummy-from .rounded.iq-mall-20 {\n\t\tmargin: 0;\n\t\tpadding: 20px;\n\t}\n\t.iq-banner.wave-one .banner-text {\n\t\tmargin-top: 15%;\n\t}\n\t.iq-banner-11 .container-fluid {\n\t\tpadding: 20px;\n\t}\n\t.iq-banner-11 .banner-text h1 {\n\t\tfont-size: 40px;\n\t}\n\t.iq-banner-09 .form-group {\n\t\twidth: 100%;\n\t}\n\t.iq-banner-09 .form-inline .button {\n\t\tmargin-left: 0;\n\t}\n\t.iq-newsletter .form-group {\n\t\tmargin-bottom: 20px;\n\t}\n\t.iq-tab.horizontal .nav-item {\n\t\twidth: 43%;\n\t}\n\t.animation-shap .shap-bg,\n\t.animationnew-shap .shap-bg {\n\t\twidth: 250px;\n\t\theight: 250px;\n\t}\n\t.iq-objectsnew .iq-objects-04 {\n\t\tborder: 20px solid #4ac4f3;\n\t\twidth: 300px;\n\t\theight: 300px;\n\t\tright: 10%;\n\t\ttop: 0;\n\t}\n\t.iq-objects-softwarenew .iq-objects-03 {\n\t\tborder: 20px solid #4ac4f3;\n\t\twidth: 300px;\n\t\theight: 300px;\n\t}\n\t.iq-banner-12 .banner-text {\n\t\tz-index: 9;\n\t\tposition: relative;\n\t\tmargin-top: 30%;\n\t\tmargin-bottom: 3%;\n\t}\n\t.iq-banner-12 .banner-text .banner-phone {\n\t\twidth: 30%;\n\t\tleft: -9px;\n\t\tbottom: -20px;\n\t}\n\t.iq-banner-12 .banner-objects .banner-objects-02 {\n\t\tdisplay: none;\n\t}\n\t.iq-banner-12 .banner-objects .banner-objects-01 {\n\t\tdisplay: none;\n\t}\n\t.iq-banner .banner-text .banner-phone {\n\t\tright: 0px;\n\t\tbottom: -37px;\n\t}\n\t.iq-banner .banner-text .watch-img {\n\t\tright: 79%;\n\t}\n\t.iq-banner-13 .banner-text {\n\t\tmargin-top: 13%;\n\t}\n\t.iq-tw-9 {\n\t\tfont-weight: 700;\n\t}\n\t.iq-pricing .price-title:after {\n\t\tbottom: -1px;\n\t}\n\t.owl-carousel .owl-nav button i {\n\t\tdisplay: none;\n\t}\n\t.iq-footerr .iq-copyright {\n\t\tmargin-left: 0;\n\t\tmargin-top: 15px;\n\t}\n\t.iq-banner-12 .banner-img {\n\t\tmargin-top: 30px;\n\t}\n\t.iq-objects-software .iq-objects-02 {\n\t\tbottom: 58%;\n\t}\n\t.iq-objects-asked .iq-objects-03 {\n\t\ttop: 26%;\n\t\theight: 300px;\n\t\twidth: 300px;\n\t}\n}\n@media(max-width:479px) {\n\t.iq-banner .banner-text h1,\n\t.iq-banner-07 .banner-text h1,\n\t.iq-banner-08 .banner-text h1 {\n\t\tfont-size: 28px;\n\t\tline-height: normal;\n\t}\n\t.iq-banner .banner-text {\n\t\tmargin-top: 50px;\n\t}\n\t.iq-banner .banner-img,\n\t.iq-works-img {\n\t\tmargin-top: 20px;\n\t}\n\t.iq-objects-software .iq-objects-03 {\n\t\tleft: 0;\n\t}\n\t.slider-container .slider-content {\n\t\twidth: 26%;\n\t\theight: 26%;\n\t}\n\t.iq-objects,\n\t.iq-objects-asked {\n\t\tdisplay: none;\n\t}\n\t.slider-container .slider-left {\n\t\tright: 63%;\n\t}\n\t.iq-banner-02 .banner-text h1 {\n\t\tfont-size: 36px;\n\t}\n\t.slider-container .slider-right {\n\t\tleft: 63%;\n\t}\n\t.screenshots-slider {\n\t\tmin-height: 180px;\n\t}\n\t.iq-banner-04 .banner-text h1 {\n\t\tfont-size: 34px;\n\t}\n\t.counter-info .waves-box {\n\t\ttop: 22%;\n\t\tleft: 39%;\n\t}\n\t.iq-banner-05 .banner-text h1 {\n\t\tfont-size: 35px;\n\t}\n\t.iq-banner-05 p {\n\t\tpadding: 50px 0 20px 0;\n\t}\n\t.iq-counter-box .iq-about img {\n\t\tmargin-bottom: 150px;\n\t}\n\t.info-share {\n\t\ttext-align: left;\n\t\tmargin-bottom: 0;\n\t}\n\t.iq-banner-02 .banner-video {\n\t\twidth: 290px;\n\t\theight: 170px;\n\t}\n\t.button.iq-mr-20,\n\t.button-blue-shadow.iq-mr-20 {\n\t\tmargin-right: 10px;\n\t}\n\t.rbtn {\n\t\tpadding: 10px 24px;\n\t\tfont-size: 14px;\n\t}\n\t.iq-tab.horizontal .nav-item a {\n\t\tpadding: 8px 4px;\n\t\tfont-size: 12px;\n\t}\n\t.iq-tab.horizontal .nav-item {\n\t\twidth: 50%;\n\t}\n\t.iq-objectsnew .iq-objects-04 {\n\t\tborder: 20px solid #4ac4f3;\n\t\twidth: 200px;\n\t\theight: 200px;\n\t\tright: 10%;\n\t\ttop: 0;\n\t}\n\t.iq-objects-softwarenew .iq-objects-03 {\n\t\tborder: 20px solid #4ac4f3;\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n\t.iq-objectsnew .iq-objects-02 {\n\t\tdisplay: none;\n\t}\n\t.iq-objectsnew .iq-objects-03 {\n\t\tdisplay: none;\n\t}\n\t.iq-objects-softwarenew .iq-objects-01 {\n\t\tdisplay: none;\n\t}\n\t.iq-objects-softwarenew .iq-objects-02 {\n\t\tdisplay: none;\n\t}\n\t.pr-3 {\n\t\tpadding-right: 10px !important;\n\t}\n\t.iq-rpr-10 {\n\t\tpadding-right: 10px;\n\t}\n\t.animation-shap .shap-bg,\n\t.animationnew-shap .shap-bg {\n\t\theight: 175px;\n\t\twidth: 175px;\n\t}\n\t.iq-r-mb-15 {\n\t\tmargin-bottom: 15px;\n\t}\n\th2,\n\th3 {\n\t\tfont-size: 28px;\n\t}\n\t.heading-title .title {\n\t\tmargin-bottom: 15px;\n\t}\n\t.iq-banner-12 .banner-img {\n\t\twidth: 130%;\n\t}\n\t.banner-text .justify-content-between .align-self-center h1 {\n\t\tfont-size: 30px;\n\t\tline-height: 40px;\n\t}\n\t.iq-footerr .iq-copyright.iq-ml-10 {\n\t\tmargin-top: 10px;\n\t\tfont-size: 12px;\n\t}\n\t#main-header li i {\n\t\tfloat: none;\n\t}\n\t.iq-get-in .google-recaptcha iframe {\n\t\twidth: 230px !important;\n\t\toverflow: hidden;\n\t}\n\t.google-recaptcha iframe .rc-anchor-normal {\n\t\twidth: 225px;\n\t}\n\t.google-recaptcha iframe .rc-anchor-normal .rc-anchor-content {\n\t\twidth: 135px;\n\t}\n\t.google-recaptcha iframe .rc-anchor-normal .rc-anchor-checkbox-label {\n\t\twidth: 100px;\n\t}\n\t.iq-shadow i {\n\t\tpadding: 15px;\n\t}\n\t.form-group {\n\t\twidth: 100%;\n\t}\n\t.iq-objects-software .iq-objects-01,\n\t.iq-objects-software .iq-objects-02 {\n\t\tdisplay: none;\n\t}\n}\n/*Color css*/\n/*\n\nTemplate: Sofbox - Responsive Software Landing Page\nAuthor: iqonicthemes.in\nVersion: 3.0\nDesign and Developed by: iqonicthemes.in\n\nNOTE: This is main stylesheet of template, This file contains the styling for the actual Template. Please do not change anything here! write in a custom.css file if required!\n\n*/\n*::-moz-selection { background:  var(--primary-theme-color); color: var(--white-theme-color); text-shadow: none; }\n::-moz-selection { background:  var(--primary-theme-color); color: var(--white-theme-color); text-shadow: none; }\n::selection { background:  var(--primary-theme-color); color: var(--white-theme-color); text-shadow: none; }\nheader.menu-sticky.header-white { background: var(--white-theme-color); }\n.button-blue-shadow, .button-line-shadow { box-shadow: 0px 20px 70px -16px rgba(var(--primary-rgb-theme-color), 1); }\n/*---------------------------------------------------------------------\n                            Text Color\n-----------------------------------------------------------------------*/\n.iq-banner .iq-video, .iq-works-box .step, .iq-banner-04 .iq-video, .iq-border-block .step, .iq-footer .iq-contact .contact-block i, .iq-footer .post-blog, a:hover, .iq-footer .footer-menu li a:hover, .iq-footer .iq-copyright a:hover, .iq-font-blue, .iq-amazing-tab .nav.nav-tabs li a.active i, .iq-amazing-tab .nav.nav-tabs li a.active:hover i, .iq-amazing-tab .nav.nav-tabs li a.active:focus i, .iq-amazing-tab .nav.nav-tabs li a:hover, .iq-amazing-tab .nav.nav-tabs li a:hover i, .iq-fancy-box .iq-icon, .counter-info .iq-video, .iq-progress-bar-text, .iq-blog-detail a:hover, .iq-blog-detail .blog-title a:hover h5, .iq-footer-box .iq-icon i, .footer-copyright a, .iq-breadcrumb .breadcrumb li.active, .iq-breadcrumb .breadcrumb li a:hover, .pagination .page-link, .iq-sidebar-widget .iq-widget-search i, .iq-widget-menu ul li a span:hover, .iq-widget-menu ul ul li a span:hover, .iq-sidebar-widget .iq-recent-post .media-body>a:hover, .iq-tags li a:hover, .iq-widget-archives li a:hover, .iq-comment-list .iq-comment-metadata i, header.header-fancy .navbar .navbar-nav .nav-item a:hover, header.header-fancy .navbar .navbar-nav .nav-item a:focus, header.header-fancy .navbar .navbar-nav .nav-item a.active, header.header-fancy .navbar .navbar-nav .nav-item a.active:focus, header.header-fancy .navbar .navbar-nav .nav-item a.active:hover, header.header-white .navbar .navbar-nav .nav-item a:hover, header.header-white .navbar .navbar-nav .nav-item a:focus, header.header-white .navbar .navbar-nav .nav-item a.active, header.header-white .navbar .navbar-nav .nav-item a.active:focus, header.header-white .navbar .navbar-nav .nav-item a.active:hover, .iq-works-box.round-icon .icon-bg i, .terms-of-service .btn.btn-link, .iq-amazing-tab .nav.nav-tabs li a.active1 i, .iq-amazing-tab .nav.nav-tabs li a.active1:hover i, .iq-banner-03 .iq-video, .iq-fancy-box-1 .iq-icon, .our-pricing-1 .iq-icon, .pricing-price, .iq-fancy-box-1 .iq-icon, .our-pricing-1 .iq-icon, .pricing-price, .iq-fancy-box-1 .iq-icon, .our-pricing-1 .iq-icon, .pricing-price, .iq-fancy-box-1 .iq-icon, .our-pricing-1 .iq-icon, .pricing-price, header.dark .navbar .navbar-nav .nav-item a:hover, header.dark .navbar .navbar-nav .nav-item a:focus, header.dark .navbar .navbar-nav .nav-item a.active, header.dark .navbar .navbar-nav .nav-item a.active:focus, header.dark .navbar .navbar-nav .nav-item a.active:hover, .button-line, .button-line-shadow, .iq-works-box a, .iq-team-1 .iq-star i, .iq-footer3 .iq-contact i, .iq-footer3 .menu li a:hover, .iq-footer3 .link li a:hover, .iq-footer3 .iq-copyright a, .heading-title-2 i, .heading-title-2.text-left i, .iq-feature-01:hover .icon-box, .iq-banner-09 i,  .iq-footer3 .support li a:hover, .iq-footer3 .build li a:hover, .iq-footer3 .about li a:hover, .iq-footer3 .contact li a:hover,header.new-header .navbar .navbar-nav .nav-item a.active,.iq-footerr .iq-contact i,.iq-footerr .iq-copyright a,.media.service-box i,header.new-header .navbar .navbar-nav .nav-item a:hover, header.new-header .navbar .navbar-nav .nav-item a:focus, header.new-header .navbar .navbar-nav .nav-item a.active, header.new-header .navbar .navbar-nav .nav-item a.active:focus, header.new-header .navbar .navbar-nav .nav-item a.active:hover,.iq-team2 .team-social li a,.iq-feature1 .iq-blog i,.iq-shadow i,header.header-one .navbar .navbar-nav .nav-item a:hover,  header.header-one .navbar .navbar-nav .nav-item a.active, header.header-one .navbar .navbar-nav .nav-item a.active:focus, header.header-one .navbar .navbar-nav .nav-item a.active:hover,header.header-one .header-top-bar ul li a:hover,.iq-footerr .office-day li a:hover,.iq-footerr .menu li a:hover,.iq-footerr .link li a:hover,.iq-feature10 .left i, .iq-works-boxes .icons i { color: var(--primary-theme-color); }\n/*---------------------------------------------------------------------\n                          Background Color\n-----------------------------------------------------------------------*/\n.heading-title .title:before, .button, .iq-border-block:before, .iq-border-block:after, .iq-border-block > .border-box:before, .iq-border-block > .border-box:after, .iq-amazing-tab .nav.nav-tabs li a:before, .iq-amazing-tab .nav.nav-tabs li a:hover:before, .iq-amazing-tab .nav.nav-tabs li a:focus:before, .iq-fancy-box:hover .iq-icon, .iq-client:before, .owl-carousel .owl-nav i:hover, .iq-team .share ul li a:hover, .iq-accordion .accordion-title:before, .owl-carousel.owl-theme .owl-dots .owl-dot.active span, .owl-carousel.owl-theme .owl-dots .owl-dot:hover span, .owl-carousel.arrow-1 .owl-nav i:hover, .button.bt-white:hover, .button.bt-white:focus, .info-share li a:hover, .iq-error h6, .pagination .page-item.active .page-link, .blue-bg, header.header-white .navbar .navbar-nav .nav-item a::before, .iq-feature .step-number, .our-pricing-1 .iq-icon:hover, header.dark .navbar .navbar-nav .nav-item a::before, .button-line:hover, .button-line:focus, .button-blue-shadow, .button-line-shadow:hover, .button-line-shadow:focus, .iq-banner-07 .iq-video, .ani-moving-square, .ani-hamburger .hamburger-line, .iq-footer4 .iq-media-blog li a,header.new-header .navbar .navbar-nav .nav-item a::before,.animation-shap .shap-bg, .animationnew-shap .shap-bg,.iq-feature10:hover .left i, .iq-pricing.active .price-title { background: var(--primary-theme-color); }\nheader.menu-sticky, #back-to-top .top:hover,.iq-fancy-boxnew.text-center .icon-bg,.iq-tab .nav-pills .nav-link.active, .iq-tab .nav-pills .show>.nav-link, .iq-tab .nav-pills .nav-link:hover { background: rgba(var(--primary-rgb-theme-color), 0.9); }\n#great-screenshots .nav-link.active,#great-screenshots .nav-link:hover { background: rgba(125, 210, 243, 0.7) !important;color: #ffffff; }\n#great-screenshots .nav-link.active1 { background: rgba(125, 210, 243, 0.7) !important;color: #ffffff; }\n/*---------------------------------------------------------------------\n                       Background Gradient\n---------------------------------------------------------------------*/\n.iq-over-blue-10:before { background: rgba(var(--primary-rgb-theme-color), 0.1); }\n.iq-over-blue-20:before, .iq-banner-07 .iq-waves .waves { background: rgba(var(--primary-rgb-theme-color), 0.2); }\n.iq-over-blue-30:before { background: rgba(var(--primary-rgb-theme-color), 0.3); }\n.iq-over-blue-40:before { background: rgba(var(--primary-rgb-theme-color), 0.4); }\n.iq-over-blue-50:before { background: rgba(var(--primary-rgb-theme-color), 0.5); }\n.iq-over-blue-60:before { background: rgba(var(--primary-rgb-theme-color), 0.6); }\n.iq-over-blue-70:before { background: rgba(var(--primary-rgb-theme-color), 0.7); }\n.iq-over-blue-80:before { background: rgba(var(--primary-rgb-theme-color), 0.8); }\n.iq-over-blue-85:before { background: rgba(var(--primary-rgb-theme-color), 0.85); }\n.iq-over-blue-90:before { background: rgba(var(--primary-rgb-theme-color), 0.9); }\n.iq-over-blue-95:before { background: rgba(var(--primary-rgb-theme-color), 0.95); }\n.iq-works-box:hover, .iq-works-box.round-icon:hover .icon-bg {\nbox-shadow: 8px 12px 22px 0px rgba(0,0,0,0.1); }\n.iq-team .iq-team-img:before { background: rgba(var(--primary-rgb-theme-color), 0); background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(var(--primary-rgb-theme-color), 0)), color-stop(100%, rgba(var(--primary-rgb-theme-color), 1))); background: linear-gradient(to bottom, rgba(var(--primary-rgb-theme-color), 0) 0%, rgba(var(--primary-rgb-theme-color), 1) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='var(--primary-theme-color)', endColorstr='var(--primary-theme-color)', GradientType=0); }\nsvg #followPath { stroke: var(--primary-theme-color); }\nsvg #airplain { fill: var(--primary-theme-color); }\n.ani-cube .cube-face.face_top, .ani-cube .cube-face.face_bottom { background: var(--primary-theme-color); }\n.ani-cube .cube-face.face_front, .ani-cube .cube-face.face_back { background-color: var(--primary-theme-color); }\n.ani-cube .cube-face.face_right, .ani-cube .cube-face.face_left,.iq-tab .nav-pills .nav-link.active, .iq-tab .nav-pills .show>.nav-link, .iq-tab .nav-pills .nav-link:hover  { background-color: var(--primary-theme-color); }\n/* Background Gradient Black */\n.iq-over-Gradient-top { background: rgba(255, 93, 177, 0); background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255, 93, 177, 0)), color-stop(0%, rgba(255, 93, 177, 0)), color-stop(28%, rgba(204, 122, 195, 0)), color-stop(100%, rgba(var(--primary-rgb-theme-color), 0.8))); background: linear-gradient(to bottom, rgba(255, 93, 177, 0) 0%, rgba(255, 93, 177, 0) 0%, rgba(204, 122, 195, 0) 28%, rgba(var(--primary-rgb-theme-color), 0.8) 100%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff5db1', endColorstr='#4ac4f3', GradientType=0); }\n.ani-cube.ani-cube-3 .cube-face.face_front, .ani-cube.ani-cube-3 .cube-face.face_right, .ani-cube.ani-cube-3 .cube-face.face_left, .ani-cube.ani-cube-3 .cube-face.face_top, .ani-cube.ani-cube-3 .cube-face.face_bottom, .ani-cube.ani-cube-3 .cube-face.face_back { box-shadow: inset 0 0 0 2px var(--primary-theme-color), 0 0 0 2px var(--primary-theme-color); }\n/*---------------------------------------------------------------------\n                      \t\t Boder Color\n---------------------------------------------------------------------*/\n.iq-objects .iq-objects-04, .iq-objects-software .iq-objects-03, .iq-objects-asked .iq-objects-03, .owl-carousel.owl-theme .owl-dots .owl-dot.active span, .owl-carousel.owl-theme .owl-dots .owl-dot:hover span, .contact-form .section-field input:focus, .contact-form .section-field.textarea textarea:focus, .info-share li a:hover, .pagination .page-item.active .page-link, .iq-sidebar-widget .iq-widget-search input:focus, .iq-tags li a:hover, .blockquote, blockquote, .iq-pricing-01:hover, .iq-pricing-01.active, .iq-pricing-01:hover, .iq-pricing-01.active, .button-line, .iq-banner-02.style-1 .banner-objects .banner-objects-02, .button-line-shadow, .iq-team-1 .team-blog, .ani-cube.ani-cube-3 .cube-face.face_front, .ani-cube.ani-cube-3 .cube-face.face_right, .ani-cube.ani-cube-3 .cube-face.face_left, .ani-cube.ani-cube-3 .cube-face.face_top, .ani-cube.ani-cube-3 .cube-face.face_bottom, .ani-cube.ani-cube-3 .cube-face.face_back, .iq-footer4 .iq-media-blog li a,.iq-pricing-5:hover, .iq-pricing-5.active,.iq-objectsnew .iq-objects-04,.iq-objects-softwarenew .iq-objects-03,.iq-feature1 .iq-blog:hover, .iq-feature1 .iq-blog.active,.iq-feature10:hover .left, .iq-feature10:hover .left i { border-color: var(--primary-theme-color); }\n@media(max-width:992px) {\n  .navbar-light .navbar-toggler span, header .navbar .navbar-nav .nav-item a:hover, header .navbar .navbar-nav .nav-item a:focus, header .navbar .navbar-nav .nav-item a.active, header .navbar .navbar-nav .nav-item a.active:focus, header .navbar .navbar-nav .nav-item a.active:hover { color: var(--primary-theme-color); }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbG9yL3N0eWxlLmNzcyIsInNyYy9hc3NldHMvY3NzL3N0eWxlLmNzcyIsInNyYy9hc3NldHMvY3NzL3Jlc3BvbnNpdmUuY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29sb3IvY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EscUJBQXFCO0FDRHJCOzs7Ozs7O0NBT0M7QUFHRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQW1EdUM7QUFHdkM7O3dFQUV3RTtBQUV4RTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLG9DQUFvQztFQUNwQyxtQ0FBbUM7RUFDbkMsd0NBQXdDO0VBQ3hDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBOztFQUVFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7QUFFQTs7O0VBR0UsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7QUFFQTs7Ozs7O0VBTUUsa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTs7Ozs7O0VBTUUsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQTs7d0VBRXdFO0FBRXhFO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFHbkIsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUdYLCtDQUErQztBQUNqRDtBQUdBOzt3RUFFd0U7QUFFeEU7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFO0lBRUUsMkNBQTJDO0VBQzdDO0VBQ0E7SUFFRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUVFLDRDQUE0QztFQUM5QztBQUNGO0FBRUE7RUFDRTtJQUVFLDJDQUEyQztFQUM3QztFQUNBO0lBRUUsNENBQTRDO0VBQzlDO0VBQ0E7SUFFRSw0Q0FBNEM7RUFDOUM7QUFDRjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7QUFDWDtBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBRXBCLDRCQUE0QjtFQUU1QiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxpREFBaUQ7RUFDakQseUNBQXlDO0VBQ3pDLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFFcEIsMENBQTBDO0VBQzFDLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFFN0IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFViwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLFVBQVU7SUFFViwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLFVBQVU7SUFFViwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLFVBQVU7SUFFViwwQ0FBMEM7RUFDNUM7RUFDQTtJQUNFLFVBQVU7SUFFViwwQ0FBMEM7RUFDNUM7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0FBQ0Y7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCw0Q0FBNEM7RUFDNUMsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUVwQiwyQ0FBMkM7RUFDM0MscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUU3Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7QUFDRjtBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBRXRCLHlDQUF5QztFQUN6QyxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBRTdCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxVQUFVO0lBRVYseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxVQUFVO0lBRVYseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxVQUFVO0lBRVYseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxVQUFVO0lBRVYseUNBQXlDO0VBQzNDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsVUFBVTtJQUVWLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsVUFBVTtJQUVWLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsVUFBVTtJQUVWLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsVUFBVTtJQUVWLHlDQUF5QztFQUMzQztBQUNGO0FBRUE7RUFDRSxrREFBa0Q7RUFDbEQsMENBQTBDO0VBQzFDLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFFdEIsNENBQTRDO0VBQzVDLHFDQUFxQztFQUNyQyw2QkFBNkI7RUFFN0IseUJBQXlCO0FBQzNCO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFViw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLFVBQVU7SUFFViw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLFVBQVU7SUFFViw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLFVBQVU7SUFFViw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLFVBQVU7SUFFViw0Q0FBNEM7RUFDOUM7QUFDRjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsNENBQTRDO0VBQzlDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsNENBQTRDO0VBQzlDO0FBQ0Y7QUFFQTtFQUNFLGtEQUFrRDtFQUNsRCwwQ0FBMEM7RUFDMUMsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUV0QiwyQ0FBMkM7RUFDM0MscUNBQXFDO0VBQ3JDLDZCQUE2QjtFQUU3Qix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDJDQUEyQztFQUM3QztBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLFVBQVU7SUFFViwyQ0FBMkM7RUFDN0M7QUFDRjtBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBRXRCLDBDQUEwQztFQUMxQyxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBRTdCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxVQUFVO0lBRVYsMENBQTBDO0VBQzVDO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsVUFBVTtJQUVWLDBDQUEwQztFQUM1QztBQUNGO0FBR0E7O3dFQUV3RTtBQUV4RTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUdyQixrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBR0Esa0JBQWtCO0FBRWxCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFHQSxvQkFBb0I7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBR0EsdUJBQXVCO0FBRXZCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBR3JCLGtCQUFrQjtFQUdsQixxREFBcUQ7QUFDdkQ7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBR0Esd0JBQXdCO0FBRXhCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBR3JCLGtCQUFrQjtFQUdsQixxREFBcUQ7QUFDdkQ7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBR0EsZ0JBQWdCO0FBRWhCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBR3JCLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFHQSxxQkFBcUI7QUFFckI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxxQkFBcUI7RUFHckIsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUdBLHVCQUF1QjtBQUV2QjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUdyQixrQkFBa0I7RUFHbEIscURBQXFEO0FBQ3ZEO0FBRUE7O0VBRUUsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUdBOztzRUFFc0U7QUFHdEU7O2lCQUVpQjtBQUVqQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTs7aUJBRWlCO0FBRWpCO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUdBOztpQkFFaUI7QUFFakI7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBOztpQkFFaUI7QUFFakI7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBOztpQkFFaUI7QUFFakI7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFHQTs7aUJBRWlCO0FBRWpCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBR0E7O2lCQUVpQjtBQUVqQjtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFHQTs7aUJBRWlCO0FBRWpCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBR0E7O2lCQUVpQjtBQUVqQjtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUdBOztpQkFFaUI7QUFFakI7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFHQTs7aUJBRWlCO0FBRWpCO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBR0E7O2lCQUVpQjtBQUVqQjtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFHQTs7aUJBRWlCO0FBRWpCO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBR0E7O2lCQUVpQjtBQUVqQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUdBOztpQkFFaUI7QUFFakI7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFHQTs7d0VBRXdFO0FBRXhFO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUdBOzt3RUFFd0U7QUFFeEU7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBR0E7O3dFQUV3RTtBQUV4RTs7RUFFRTtBQUVGO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUdBOzt3RUFFd0U7QUFFeEU7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBR0E7O3dFQUV3RTtBQUV4RTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMseUNBQXlDO0VBQ3pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsMEJBQTBCO0VBQzFCLDZDQUE2QztFQUM3Qyw0QkFBNEI7QUFDOUI7QUFHQTs7c0VBRXNFO0FBRXRFO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBR0EsNkJBQTZCO0FBRTdCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztBQUN0QztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsV0FBVztFQUNYLG9DQUFvQztBQUN0QztBQUdBLDhCQUE4QjtBQUU5QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZ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UixpQ0FBaUMsRUFBRTtBQUMvVCIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZTQvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogU3R5bGUuY3NzIGltcG9ydCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCI7XG5cbi8qIFJlc3BvbnNpdmUgY3NzIGltcG9ydCAqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3NcIjtcblxuLypDb2xvciBjc3MqL1xuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9jc3MvY29sb3IvY29sb3Iuc2Nzc1wiO1xuIiwiLypcblxuVGVtcGxhdGU6IFNvZmJveCAtIEFuZ3VsYXIgOCBTb2Z0d2FyZSBsYW5kaW5nIHBhZ2VcbkF1dGhvcjogaXFvbmljLmRlc2lnblxuVmVyc2lvbjogMy4wXG5EZXNpZ24gYW5kIERldmVsb3BlZCBieTogaXFvbmljLmRlc2lnblxuXG4qL1xuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bICBUYWJsZSBvZiBjb250ZW50cyAgXVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbjo6IEdlbmVyYWxcbjo6IEJhY2sgdG8gVG9wXG46OiBMb2FkZXJcbjo6IEJ1dHRvbnNcbjo6IFBhZ2UgU2VjdGlvbiBNYXJnaW4gUGFkZGluZ1xuOjogVGV4dCBXZWlnaHRcbjo6IFRleHQgQ29sb3Jcbjo6IEZvbnQgU2l6ZVxuOjogQmFja2dyb3VuZCBDb2xvclxuOjogQkcgRWZmZWN0XG46OiBCYWNrZ3JvdW5kIEdyYWRpZW50XG46OiBTZWN0aW9uIFRpdGxlXG46OiBIZWFkZXJcbjo6IEJhbm5lclxuOjogSG93IGl0IFdvcmtzXG46OiBXaG8gaXMgU29mYm94ID9cbjo6IFNvZnR3YXJlIEZlYXR1cmVzXG46OiBHcmVhdCBzY3JlZW5zaG90c1xuOjogU3BlY2lhbCBGZWF0dXJlc1xuOjogTW9yZSBVc2VmdWwgSW5mb21hdGlvblxuOjogU29mYm94IFNwZWNpYWxpdGllc1xuOjogQ291bnRlclxuOjogTG92ZWQgQnkgT3VyIEN1c3RvbWVyc1xuOjogQWZmb3JkYWJsZSBQcmljZVxuOjogTWVldCB0aGUgVGVhbVxuOjogQ29tcGFyZSBTZXJ2aWNlc1xuOjogRnJlcXVlbnRseSBBc2tlZCBRdWVzdGlvbnNcbjo6IExhdGVzdCBCbG9nIFBvc3Rcbjo6IE91ciBjbGllbnRzXG46OiBTdWJzY3JpYmUgT3VyIE5ld3NsZXR0ZXJcbjo6IEdldCBpbiBUb3VjaFxuOjogRm9vdGVyIEluZm9cbjo6IEJyZWFkY3J1bWIgSW5uZXIgUGFnZVxuOjogQmxvZyBQYWdlXG46OiBCbG9nIC0gU2lkZUJhclxuOjogNDA0IEVycm9yXG46OiBDb21pbmcgU29vblxuOjogamFyYWxsYXhcbjo6IFRFUk1TIE9GIFNFUlZJQ0Vcbjo6IE9XTCBDYXJvdXNlbFxuOjogVGVzdGltb25pYWxcbjo6IFByaWNpbmcgVGFibGVcbjo6IEZlYXR1cmVcbjo6IEV4dHJhXG5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5bIEVuZCB0YWJsZSBjb250ZW50IF1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYWxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuKjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmEsXG4uYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5hOmZvY3VzLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSxcbi5idXR0b24sXG5pbnB1dCB7XG4gIG91dGxpbmU6IG1lZGl1bSBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbmgxIGEsXG5oMiBhLFxuaDMgYSxcbmg0IGEsXG5oNSBhLFxuaDYgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNTJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ociB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNhYWFhYWE7XG59XG5cbi5sYWJlbCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ibG9ja3F1b3RlLFxuYmxvY2txdW90ZSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzRhYzRmMztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExNzBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2sgdG8gVG9wXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNiYWNrLXRvLXRvcCAudG9wIHtcbiAgei1pbmRleDogOTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI1cHg7XG4gIHJpZ2h0OiAyNXB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNiYWNrLXRvLXRvcCAudG9wOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jbG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICByaWdodDogMHB4O1xuICB6LWluZGV4OiA5OTk5OTk7XG59XG5cbiNsb2FkaW5nLWNlbnRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvYWRlciB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBtYXJnaW46IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0zNy41ZGVnKSByb3RhdGVZKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDA1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDA1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMzcuNWRlZykgcm90YXRlWSg0MDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMzcuNWRlZykgcm90YXRlWSg0MDVkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0zNy41ZGVnKSByb3RhdGVZKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDA1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTM3LjVkZWcpIHJvdGF0ZVkoNDA1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMzcuNWRlZykgcm90YXRlWSg0MDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtMzcuNWRlZykgcm90YXRlWSg0MDVkZWcpO1xuICB9XG59XG5cbi5jdWJlLFxuLmN1YmUgKiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcxcHg7XG4gIGhlaWdodDogNzFweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uc2lkZXMge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDNzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGVhc2UgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAuOHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLjhzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0zNy41ZGVnKSByb3RhdGVZKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNy41ZGVnKSByb3RhdGVZKDQ1ZGVnKTtcbn1cblxuLmN1YmUgLnNpZGVzICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCAxOTYsIDI0MywgMC44KTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG59XG5cbi5jdWJlIC5zaWRlcyAudG9wIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHRvcC1hbmltYXRpb24gM3MgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB0b3AtYW5pbWF0aW9uIDNzIGVhc2UgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwbXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMG1zO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdG9wLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDcwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHRvcC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbn1cblxuLmN1YmUgLnNpZGVzIC5ib3R0b20ge1xuICAtd2Via2l0LWFuaW1hdGlvbjogYm90dG9tLWFuaW1hdGlvbiAzcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IGJvdHRvbS1hbmltYXRpb24gM3MgZWFzZSBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdHRvbS1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYm90dG9tLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbn1cblxuLmN1YmUgLnNpZGVzIC5mcm9udCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcm9udC1hbmltYXRpb24gM3MgZWFzZSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBmcm9udC1hbmltYXRpb24gM3MgZWFzZSBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMG1zO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZyb250LWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZnJvbnQtYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbn1cblxuLmN1YmUgLnNpZGVzIC5iYWNrIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJhY2stYW5pbWF0aW9uIDNzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmFjay1hbmltYXRpb24gM3MgZWFzZSBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEwMG1zO1xuICBhbmltYXRpb24tZGVsYXk6IDEwMG1zO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2stYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA3MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgfVxuICA5MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBiYWNrLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG59XG5cbi5jdWJlIC5zaWRlcyAubGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsZWZ0LWFuaW1hdGlvbiAzcyBlYXNlIGluZmluaXRlO1xuICBhbmltYXRpb246IGxlZnQtYW5pbWF0aW9uIDNzIGVhc2UgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGVmdC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbGVmdC1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgNzAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDkwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICB9XG59XG5cbi5jdWJlIC5zaWRlcyAucmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmlnaHQtYW5pbWF0aW9uIDNzIGVhc2UgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcmlnaHQtYW5pbWF0aW9uIDNzIGVhc2UgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxMDBtcztcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooOTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJpZ2h0LWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDcwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpZ2h0LWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDM1cHgpO1xuICB9XG4gIDcwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWigzNXB4KTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMzVweCk7XG4gIH1cbiAgOTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKDkwcHgpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig5MHB4KTtcbiAgfVxufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgQnV0dG9uc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweCAzNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbjpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG5cbi8qIEJ1dHRvbnMgd2hpdGUgKi9cblxuLmJ1dHRvbi5idC13aGl0ZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYnV0dG9uLmJ0LXdoaXRlOmhvdmVyLFxuLmJ1dHRvbi5idC13aGl0ZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xufVxuXG5cbi8qIEJ1dHRvbnMgd2hpdGUgMiAqL1xuXG4uYnV0dG9uLmJ0LWJsYWNrIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idXR0b24uYnQtYmxhY2s6aG92ZXIsXG4uYnV0dG9uLmJ0LWJsYWNrOmZvY3VzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5idXR0b24uYnQtYmx1ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xufVxuXG4uYnV0dG9uLmJ0LWJsdWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG5cbi8qIEJ1dHRlbiBibHVlIHNoYWRvdyAqL1xuXG4uYnV0dG9uLWJsdWUtc2hhZG93IHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweCAzNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNGFjM2YzO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSg3NCwgMTk1LCAyNDMsIDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSg3NCwgMTk1LCAyNDMsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMjBweCA3MHB4IC0xNnB4IHJnYmEoNzQsIDE5NSwgMjQzLCAxKTtcbn1cblxuLmJ1dHRvbi1ibHVlLXNoYWRvdzpob3Zlcixcbi5idXR0b24tYmx1ZS1zaGFkb3c6Zm9jdXMge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuXG4vKiBCdXR0ZW4gd2hpdGUgc2hhZG93ICovXG5cbi5idXR0b24td2hpdGUtc2hhZG93IHtcbiAgY29sb3I6ICM0YWMzZjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweCAzNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSg3NCwgMTk1LCAyNDMsIDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSg3NCwgMTk1LCAyNDMsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMjBweCA3MHB4IC0xNnB4IHJnYmEoNzQsIDE5NSwgMjQzLCAxKTtcbn1cblxuLmJ1dHRvbi13aGl0ZS1zaGFkb3c6aG92ZXIsXG4uYnV0dG9uLXdoaXRlLXNoYWRvdzpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG5cbi8qIEJ1dHRlbiBMaW5lICovXG5cbi5idXR0b24tbGluZSB7XG4gIGNvbG9yOiAjNGFjM2YzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMzZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGFjM2YzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idXR0b24tbGluZTpob3Zlcixcbi5idXR0b24tbGluZTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjNGFjM2YzO1xufVxuXG5cbi8qIEJ1dHRlbiBMaW5lIHdoaXRlKi9cblxuLmJ1dHRvbi1saW5lLXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTJweCAzNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idXR0b24tbGluZS13aGl0ZTpob3Zlcixcbi5idXR0b24tbGluZS13aGl0ZTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xufVxuXG5cbi8qIEJ1dHRlbiBMaW5lIHNoYWRvdyAqL1xuXG4uYnV0dG9uLWxpbmUtc2hhZG93IHtcbiAgY29sb3I6ICM0YWMzZjM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAzNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YWMzZjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMjBweCA3MHB4IC0xNnB4IHJnYmEoNzQsIDE5NSwgMjQzLCAxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMjBweCA3MHB4IC0xNnB4IHJnYmEoNzQsIDE5NSwgMjQzLCAxKTtcbiAgYm94LXNoYWRvdzogMHB4IDIwcHggNzBweCAtMTZweCByZ2JhKDc0LCAxOTUsIDI0MywgMSk7XG59XG5cbi5idXR0b24tbGluZS1zaGFkb3c6aG92ZXIsXG4uYnV0dG9uLWxpbmUtc2hhZG93OmZvY3VzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICM0YWMzZjM7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgUGFnZSBTZWN0aW9uIE1hcmdpbiBQYWRkaW5nXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuU2VjdGlvbiBwYWRkaW5nXG4tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm92ZXJ2aWV3LWJsb2NrLXB0YiB7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG59XG5cbi5vdmVydmlldy1ibG9jay1wdCB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMDtcbn1cblxuLm92ZXJ2aWV3LWJsb2NrLXBiIHtcbiAgcGFkZGluZzogMCAwIDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuUGFkZGluZyBBbGxcbi0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcGFsbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmlxLXBhbGwtMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaXEtcGFsbC0xNSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5pcS1wYWxsLTIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmlxLXBhbGwtMjUge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4uaXEtcGFsbC0zMCB7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5pcS1wYWxsLTQwIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmlxLXBhbGwtNTAge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uaXEtcGFsbC02MCB7XG4gIHBhZGRpbmc6IDYwcHg7XG59XG5cbi5pcS1wYWxsLTcwIHtcbiAgcGFkZGluZzogNzBweDtcbn1cblxuLmlxLXBhbGwtODAge1xuICBwYWRkaW5nOiA4MHB4O1xufVxuXG4uaXEtcGFsbC05MCB7XG4gIHBhZGRpbmc6IDkwcHg7XG59XG5cbi5pcS1wYWxsLTEwMCB7XG4gIHBhZGRpbmc6IDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuUGFkZGluZyBUb3AgYW5kIEJvdHRvbVxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1wdGItMCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1wdGItMTAge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5pcS1wdGItMTUge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbi5pcS1wdGItMjAge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5pcS1wdGItMjUge1xuICBwYWRkaW5nOiAyNXB4IDA7XG59XG5cbi5pcS1wdGItMzAge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG5cbi5pcS1wdGItNDAge1xuICBwYWRkaW5nOiA0MHB4IDA7XG59XG5cbi5pcS1wdGItNTAge1xuICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbi5pcS1wdGItNjAge1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi5pcS1wdGItNzAge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG5cbi5pcS1wdGItODAge1xuICBwYWRkaW5nOiA4MHB4IDA7XG59XG5cbi5pcS1wdGItOTAge1xuICBwYWRkaW5nOiA5MHB4IDA7XG59XG5cbi5pcS1wdGItMTAwIHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS1cblBhZGRpbmcgTGVmdCBhbmQgcmlnaHRcbi0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcGxyLTAge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXEtcGxyLTEwIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4uaXEtcGxyLTE1IHtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuXG4uaXEtcGxyLTIwIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uaXEtcGxyLTI1IHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4uaXEtcGxyLTMwIHtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4uaXEtcGxyLTQwIHtcbiAgcGFkZGluZzogMCA0MHB4O1xufVxuXG4uaXEtcGxyLTUwIHtcbiAgcGFkZGluZzogMCA1MHB4O1xufVxuXG4uaXEtcGxyLTYwIHtcbiAgcGFkZGluZzogMCA2MHB4O1xufVxuXG4uaXEtcGxyLTcwIHtcbiAgcGFkZGluZzogMCA3MHB4O1xufVxuXG4uaXEtcGxyLTgwIHtcbiAgcGFkZGluZzogMCA4MHB4O1xufVxuXG4uaXEtcGxyLTkwIHtcbiAgcGFkZGluZzogMCA5MHB4O1xufVxuXG4uaXEtcGxyLTEwMCB7XG4gIHBhZGRpbmc6IDAgMTAwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tXG5QYWRkaW5nIHRvcFxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1wdC0wIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLmlxLXB0LTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5pcS1wdC0xNSB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uaXEtcHQtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmlxLXB0LTI1IHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5pcS1wdC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uaXEtcHQtNDAge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmlxLXB0LTUwIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5pcS1wdC02MCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xufVxuXG4uaXEtcHQtNzAge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cblxuLmlxLXB0LTgwIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi5pcS1wdC05MCB7XG4gIHBhZGRpbmctdG9wOiA5MHB4O1xufVxuXG4uaXEtcHQtMTAwIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuUGFkZGluZyBCb3R0b21cbi0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcGItMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5pcS1wYi0xMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uaXEtcGItMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmlxLXBiLTIwIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5pcS1wYi0yNSB7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuXG4uaXEtcGItMzAge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmlxLXBiLTQwIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5pcS1wYi01MCB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4uaXEtcGItNjAge1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuLmlxLXBiLTcwIHtcbiAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5cbi5pcS1wYi04MCB7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xufVxuXG4uaXEtcGItOTAge1xuICBwYWRkaW5nLWJvdHRvbTogOTBweDtcbn1cblxuLmlxLXBiLTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS1cblBhZGRpbmcgTGVmdFxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1wbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uaXEtcGwtMTAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pcS1wbC0xNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLmlxLXBsLTIwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uaXEtcGwtMjUge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5pcS1wbC0zMCB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmlxLXBsLTQwIHtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuXG4uaXEtcGwtNTAge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5pcS1wbC02MCB7XG4gIHBhZGRpbmctbGVmdDogNjBweDtcbn1cblxuLmlxLXBsLTcwIHtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xufVxuXG4uaXEtcGwtODAge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5cbi5pcS1wbC05MCB7XG4gIHBhZGRpbmctbGVmdDogOTBweDtcbn1cblxuLmlxLXBsLTEwMCB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tXG5QYWRkaW5nIFJpZ2h0XG4tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLXByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5pcS1wci0xMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5pcS1wci0xNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5pcS1wci0yMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5pcS1wci0yNSB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5pcS1wci0zMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5pcS1wci00MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5pcS1wci01MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5pcS1wci02MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDYwcHg7XG59XG5cbi5pcS1wci03MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDcwcHg7XG59XG5cbi5pcS1wci04MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG59XG5cbi5pcS1wci05MCB7XG4gIHBhZGRpbmctcmlnaHQ6IDkwcHg7XG59XG5cbi5pcS1wci0xMDAge1xuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS1cbk1hcmdpbiBBbGxcbi0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtbWFsbC0wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaXEtbWFsbC0xMCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmlxLW1hbGwtMTUge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5pcS1tYWxsLTIwIHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG4uaXEtbWFsbC0yNSB7XG4gIG1hcmdpbjogMjVweDtcbn1cblxuLmlxLW1hbGwtMzAge1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5pcS1tYWxsLTQwIHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG4uaXEtbWFsbC01MCB7XG4gIG1hcmdpbjogNTBweDtcbn1cblxuLmlxLW1hbGwtNjAge1xuICBtYXJnaW46IDYwcHg7XG59XG5cbi5pcS1tYWxsLTcwIHtcbiAgbWFyZ2luOiA3MHB4O1xufVxuXG4uaXEtbWFsbC04MCB7XG4gIG1hcmdpbjogODBweDtcbn1cblxuLmlxLW1hbGwtOTAge1xuICBtYXJnaW46IDkwcHg7XG59XG5cbi5pcS1tYWxsLTEwMCB7XG4gIG1hcmdpbjogMTAwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tXG5NYXJnaW4gVG9wIGFuZCBCb3R0b21cbi0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtbXRiLTAge1xuICBtYXJnaW46IDA7XG59XG5cbi5pcS1tdGItMTAge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmlxLW10Yi0xNSB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuXG4uaXEtbXRiLTIwIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5pcS1tdGItMjUge1xuICBtYXJnaW46IDI1cHggMDtcbn1cblxuLmlxLW10Yi0zMCB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uaXEtbXRiLTQwIHtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi5pcS1tdGItNTAge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmlxLW10Yi02MCB7XG4gIG1hcmdpbjogNjBweCAwO1xufVxuXG4uaXEtbXRiLTcwIHtcbiAgbWFyZ2luOiA3MHB4IDA7XG59XG5cbi5pcS1tdGItODAge1xuICBtYXJnaW46IDgwcHggMDtcbn1cblxuLmlxLW10Yi05MCB7XG4gIG1hcmdpbjogOTBweCAwO1xufVxuXG4uaXEtbXRiLTEwMCB7XG4gIG1hcmdpbjogMTAwcHggMDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS1cbk1hcmdpbiBMZWZ0IGFuZCBSaWdodFxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1tbHItMCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlxLW1sci0xMCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uaXEtbWxyLTE1IHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5pcS1tbHItMjAge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLmlxLW1sci0yNSB7XG4gIG1hcmdpbjogMCAyNXB4O1xufVxuXG4uaXEtbWxyLTMwIHtcbiAgbWFyZ2luOiAwIDMwcHg7XG59XG5cbi5pcS1tbHItNDAge1xuICBtYXJnaW46IDAgNDBweDtcbn1cblxuLmlxLW1sci01MCB7XG4gIG1hcmdpbjogMCA1MHB4O1xufVxuXG4uaXEtbWxyLTYwIHtcbiAgbWFyZ2luOiAwIDYwcHg7XG59XG5cbi5pcS1tbHItNzAge1xuICBtYXJnaW46IDAgNjBweDtcbn1cblxuLmlxLW1sci04MCB7XG4gIG1hcmdpbjogMCA4MHB4O1xufVxuXG4uaXEtbWxyLTkwIHtcbiAgbWFyZ2luOiAwIDgwcHg7XG59XG5cbi5pcS1tbHItMTAwIHtcbiAgbWFyZ2luOiAwIDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuTWFyZ2luIFRvcFxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1tdC0wIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uaXEtbXQtNSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmlxLW10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlxLW10LTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmlxLW10LTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmlxLW10LTI1IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlxLW10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmlxLW10LTQwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmlxLW10LTUwIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmlxLW10LTYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmlxLW10LTcwIHtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cblxuLmlxLW10LTgwIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmlxLW10LTkwIHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbn1cblxuLmlxLW10LTEwMCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuTWFyZ2luIEJvdHRvbVxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1tYi0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaXEtbWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXEtbWItMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uaXEtbWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaXEtbWItMjUge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uaXEtbWItMzAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaXEtbWItNDAge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uaXEtbWItNTAge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uaXEtbWItNjAge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uaXEtbWItNzAge1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xufVxuXG4uaXEtbWItODAge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4uaXEtbWItOTAge1xuICBtYXJnaW4tYm90dG9tOiA5MHB4O1xufVxuXG4uaXEtbWItMTAwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tXG5NYXJnaW4gTGVmdFxuLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1tbC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmlxLW1sLTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pcS1tbC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaXEtbWwtMjAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmlxLW1sLTI1IHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5pcS1tbC0zMCB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4uaXEtbWwtNDAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmlxLW1sLTUwIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5pcS1tbC02MCB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uaXEtbWwtNzAge1xuICBtYXJnaW4tbGVmdDogNzBweDtcbn1cblxuLmlxLW1sLTgwIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5pcS1tbC05MCB7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xufVxuXG4uaXEtbWwtMTAwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLVxuTWFyZ2luIFJpZ2h0XG4tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLW1yLTAge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmlxLW1yLTEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaXEtbXItMTUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pcS1tci0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmlxLW1yLTI1IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uaXEtbXItMzAge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5pcS1tci00MCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLmlxLW1yLTUwIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uaXEtbXItNjAge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG59XG5cbi5pcS1tci03MCB7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmlxLW1yLTgwIHtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuXG4uaXEtbXItOTAge1xuICBtYXJnaW4tcmlnaHQ6IDkwcHg7XG59XG5cbi5pcS1tci0xMDAge1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGV4dCBXZWlnaHRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLXR3LTEge1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaXEtdHctMiB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5pcS10dy0zIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmlxLXR3LTQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXEtdHctNSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pcS10dy02IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmlxLXR3LTcge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaXEtdHctOCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5pcS10dy05IHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgQ29sb3Jcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWZvbnQtYmx1ZSB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtZm9udC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaXEtZm9udC1ibGFjayB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaXEtZm9udC1saWdodCB7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9udCBTaXplXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8qLmlxLWZvbnQtMTUge1xuICBmb250LXNpemU6IDE1cHg7XG59Ki9cblxuLmlxLWZvbnQtMjAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pcS1mb250LTMwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2tncm91bmQgQ29sb3Jcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLndoaXRlLWJnIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmdyZXktYmcge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xufVxuXG4uYmx1ZS1iZyB7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG59XG5cbi5kYXJrLWJnIHtcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cblxuLmxpZ2h0LWJnIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjdmZjtcbn1cblxuLmxpZ2h0LWJsdWUtYmcge1xuICBiYWNrZ3JvdW5kOiAjYmJlNWY2O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJHIEVmZmVjdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcGFyYWxsYXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAtbXMtYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgIEJhY2tncm91bmQgR3JhZGllbnRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1iZy1vdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qIEJhY2tncm91bmQgR3JhZGllbnQgQmx1ZSAqL1xuXG4uaXEtb3Zlci1ibHVlLTEwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTk2LCAyNDMsIDAuMSk7XG59XG5cbi5pcS1vdmVyLWJsdWUtMjA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxOTYsIDI0MywgMC4yKTtcbn1cblxuLmlxLW92ZXItYmx1ZS0zMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE5NiwgMjQzLCAwLjMpO1xufVxuXG4uaXEtb3Zlci1ibHVlLTQwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTk2LCAyNDMsIDAuNCk7XG59XG5cbi5pcS1vdmVyLWJsdWUtNTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxOTYsIDI0MywgMC41KTtcbn1cblxuLmlxLW92ZXItYmx1ZS02MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE5NiwgMjQzLCAwLjYpO1xufVxuXG4uaXEtb3Zlci1ibHVlLTcwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTk2LCAyNDMsIDAuNyk7XG59XG5cbi5pcS1vdmVyLWJsdWUtODA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxOTYsIDI0MywgMC44KTtcbn1cblxuLmlxLW92ZXItYmx1ZS04NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE5NiwgMjQzLCAwLjg1KTtcbn1cblxuLmlxLW92ZXItYmx1ZS05MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzQsIDE5NiwgMjQzLCAwLjkpO1xufVxuXG4uaXEtb3Zlci1ibHVlLTk1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTk2LCAyNDMsIDAuOTUpO1xufVxuXG5cbi8qIEJhY2tncm91bmQgR3JhZGllbnQgQmxhY2sgKi9cblxuLmlxLW92ZXItYmxhY2stMTA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5pcS1vdmVyLWJsYWNrLTIwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uaXEtb3Zlci1ibGFjay0zMDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmlxLW92ZXItYmxhY2stNDA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5pcS1vdmVyLWJsYWNrLTUwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaXEtb3Zlci1ibGFjay02MDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmlxLW92ZXItYmxhY2stNzA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5pcS1vdmVyLWJsYWNrLTgwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuXG4uaXEtb3Zlci1ibGFjay04NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG59XG5cbi5pcS1vdmVyLWJsYWNrLTkwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4uaXEtb3Zlci1ibGFjay05NTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45NSk7XG59XG5cbltjbGFzcyo9J2lxLW92ZXItJ106YmVmb3JlIHtcbiAgei1pbmRleDogMDtcbn1cblxuXG4vKiBCYWNrZ3JvdW5kIEdyYWRpZW50IEJsYWNrICovXG5cbi5pcS1vdmVyLUdyYWRpZW50LXRvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA5MywgMTc3LCAwKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyMDQsIDEyMiwgMTk1LCAwKSAyOCUsIHJnYmEoNzQsIDE5NiwgMjQzLCAwLjgpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApKSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApKSwgY29sb3Itc3RvcCgyOCUsIHJnYmEoMjA0LCAxMjIsIDE5NSwgMCkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNzQsIDE5NiwgMjQzLCAwLjgpKSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjA0LCAxMjIsIDE5NSwgMCkgMjglLCByZ2JhKDc0LCAxOTYsIDI0MywgMC44KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjA0LCAxMjIsIDE5NSwgMCkgMjglLCByZ2JhKDc0LCAxOTYsIDI0MywgMC44KSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDIwNCwgMTIyLCAxOTUsIDApIDI4JSwgcmdiYSg3NCwgMTk2LCAyNDMsIDAuOCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDIwNCwgMTIyLCAxOTUsIDApIDI4JSwgcmdiYSg3NCwgMTk2LCAyNDMsIDAuOCkgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZjVkYjEnLCBlbmRDb2xvcnN0cj0nIzRhYzRmMycsIEdyYWRpZW50VHlwZT0wKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VjdGlvbiBUaXRsZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGVhZGluZy10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRpbmctdGl0bGUgLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmhlYWRpbmctdGl0bGUgLnRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG59XG5cbi5oZWFkaW5nLXRpdGxlIHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuXG5cbi8qIFNlY3Rpb24gbGVmdCB0aXRsZSAqL1xuLmhlYWRpbmctdGl0bGUubGVmdCB7IG1hcmdpbi1ib3R0b206IDIwcHg7IH1cbi5oZWFkaW5nLXRpdGxlLmxlZnQgLnRpdGxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG59XG5cblxuXG4vKiBTZWN0aW9uIHRpdGxlIHdoaXRlICovXG5cbi5oZWFkaW5nLXRpdGxlLndoaXRlIC50aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGluZy10aXRsZS53aGl0ZSAudGl0bGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuXG5cblxuXG5cblxuXG4uaXEtZmFkZWJvdW5jZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVib3VuY2U7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVib3VuY2U7XG4gIC1tcy1hbmltYXRpb24tbmFtZTogZmFkZWJvdW5jZTtcbiAgLW8tYW5pbWF0aW9uLW5hbWU6IGZhZGVib3VuY2U7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlYm91bmNlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcbiAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgZmFkZWJvdW5jZSB7XG4gIDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDUwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlYm91bmNlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBmYWRlYm91bmNlIHtcbiAgMCUge1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDUwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgMTAwJSB7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn1cblxuQC1tcy1rZXlmcmFtZXMgZmFkZWJvdW5jZSB7XG4gIDAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgNTAlIHtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbiAgMTAwJSB7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWJvdW5jZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIG9wYWNpdHk6IDFcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMVxuICB9XG59XG5cblxuLyogU2VjdGlvbiB0aXRsZSBTdHlsZSAyICovXG5cbi5oZWFkaW5nLXRpdGxlLTIge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkaW5nLXRpdGxlLTIgLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmhlYWRpbmctdGl0bGUtMiBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuXG4vKiBIZWFkaW5nIFRpdGxlIDIgTGVmdCAqL1xuXG4uaGVhZGluZy10aXRsZS0yLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFkaW5nLXRpdGxlLTIudGV4dC1sZWZ0IC50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uaGVhZGluZy10aXRsZS0yLnRleHQtbGVmdCBpIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlYWRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyIC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDEwMHB4O1xufVxuXG5oZWFkZXIgLm5hdmJhciB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLWJyYW5kIGltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXY+bGkge1xuICBtYXJnaW46IDAgMzBweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXY+bGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6aG92ZXIsXG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpmb2N1cyxcbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZSxcbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpmb2N1cyxcbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm90dG9tOiAwO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG59XG5cbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTo6YmVmb3JlLFxuaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmhvdmVyPmE6OmJlZm9yZSxcbmhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbT5hOmhvdmVyOjpiZWZvcmUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIC5idXR0b24sXG5oZWFkZXIgLmJ1dHRvbi1saW5lIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbmhlYWRlciNtYWluLWhlYWRlciAubmF2YmFyIC5tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgLnN1Yi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMjBweCAwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA1cHggMjBweCAwcHggcmdiYSg1MSwgNTEsIDUxLCAwLjIpO1xuICBib3gtc2hhZG93OiAwcHggNXB4IDIwcHggMHB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yKTtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgLnN1Yi1tZW51IGxpIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjMjMyOTJjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgLnN1Yi1tZW51IGxpIGEge1xuICBjb2xvcjogIzIzMjkyYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1pbi1vdXQ7XG59XG5cblxuXG5oZWFkZXIjbWFpbi1oZWFkZXIgLm5hdmJhciAubWVudSBsaSAuc3ViLW1lbnUgbGkgYS5hY3RpdmUge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7XG59XG5cbmhlYWRlciNtYWluLWhlYWRlciAubmF2YmFyIC5tZW51IC5tZW51LWl0ZW0gYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgaSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5oZWFkZXIjbWFpbi1oZWFkZXIgLm5hdmJhciAubWVudT5saSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luOiAwIDMwcHggMCAwO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMDBweCkgYW5kIChtaW4td2lkdGg6IDEwMjNweCkge1xuICBoZWFkZXIjbWFpbi1oZWFkZXIgLm5hdmJhciAubWVudSBsaTpob3Zlcj4uc3ViLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuaGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnUgbGkgLnN1Yi1tZW51IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7XG59XG5cblxuLyogSGVhZGVyIHN0aWNreSAqL1xuXG5oZWFkZXIubWVudS1zdGlja3kge1xuICBwYWRkaW5nOiA1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxOTYsIDI0MywgMC45KTtcbn1cblxuaGVhZGVyLm1lbnUtc3RpY2t5IC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5oZWFkZXIubWVudS1zdGlja3kgLm5hdmJhciAubWVudT5saSB7XG4gIHBhZGRpbmc6IDEwcHggMCAhaW1wb3J0YW50O1xufVxuXG5oZWFkZXIubWVudS1zdGlja3kgLm5hdmJhciAubWVudSBsaSAuc3ViLW1lbnUge1xuICB0b3A6IDYycHggIWltcG9ydGFudDtcbn1cblxuXG4vKiBIZWFkZXIgRmFuY3kgKi9cblxuaGVhZGVyLmhlYWRlci1mYW5jeSAuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbmhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaGVhZGVyLmhlYWRlci1mYW5jeSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhIHtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaGVhZGVyLmhlYWRlci1mYW5jeSAubmF2YmFyIC5uYXZiYXItbmF2PmxpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIuaGVhZGVyLWZhbmN5IC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlcixcbmhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpmb2N1cyxcbmhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUsXG5oZWFkZXIuaGVhZGVyLWZhbmN5IC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmZvY3VzLFxuaGVhZGVyLmhlYWRlci1mYW5jeSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5cbi8qIEhlYWRlciBXaXRoIFRvcCBCYXIgKi9cblxuaGVhZGVyLmhlYWRlci1vbmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbmhlYWRlci5oZWFkZXItb25lIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEge1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oZWFkZXIuaGVhZGVyLW9uZSAubmF2YmFyIC5uYXZiYXItbmF2PmxpIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oZWFkZXIuaGVhZGVyLW9uZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oZWFkZXIuaGVhZGVyLW9uZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmhvdmVyLFxuaGVhZGVyLmhlYWRlci1vbmUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUsXG5oZWFkZXIuaGVhZGVyLW9uZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpmb2N1cyxcbmhlYWRlci5oZWFkZXItb25lIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmhlYWRlci5oZWFkZXItb25lIC5oZWFkZXItdG9wLWJhciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG5oZWFkZXIuaGVhZGVyLW9uZSAuaGVhZGVyLXRvcC1iYXIgdWwgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHhcbn1cblxuaGVhZGVyLmhlYWRlci1vbmUgLmhlYWRlci10b3AtYmFyIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5cbi8qaGVhZGVyLmhlYWRlci1vbmUgLm5hdmJhciB7IHBhZGRpbmc6IDEwcHggMDsgfSovXG5cbi5oZWFkZXItb25lLm1lbnUtc3RpY2t5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4vKiBIZWFkZXIgV2hpdGUgKi9cblxuaGVhZGVyLmhlYWRlci13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmhlYWRlci5oZWFkZXItd2hpdGUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbn1cblxuaGVhZGVyLmhlYWRlci13aGl0ZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmhlYWRlci5oZWFkZXItd2hpdGUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlcixcbmhlYWRlci5oZWFkZXItd2hpdGUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpmb2N1cyxcbmhlYWRlci5oZWFkZXItd2hpdGUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUsXG5oZWFkZXIuaGVhZGVyLXdoaXRlIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmZvY3VzLFxuaGVhZGVyLmhlYWRlci13aGl0ZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5cbi8qIEhlYWRlciBEYXJrICovXG5cbmhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG59XG5cbmhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEge1xuICBjb2xvcjogIzMzMztcbn1cblxuaGVhZGVyLmRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlcixcbmhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6Zm9jdXMsXG5oZWFkZXIuZGFyayAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZSxcbmhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmZvY3VzLFxuaGVhZGVyLmRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuXG4vKiBIZWFkZXIgc3RpY2t5ICovXG5cbmhlYWRlci5kYXJrLm1lbnUtc3RpY2t5IHtcbiAgcGFkZGluZzogMTBweCAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhbm5lclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyIC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDkwcHg7XG59XG5cbi5pcS1iYW5uZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IC01cHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDg0cHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2Jhbm5lci8wMi5wbmcnKSBuby1yZXBlYXQgMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlxLWJhbm5lciAuYmFubmVyLXRleHQge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzJTtcbn1cblxuLmlxLWJhbm5lciAuYmFubmVyLXRleHQgaDEge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5pcS1iYW5uZXIgLmJhbm5lci1pbWcge1xuICB3aWR0aDogMTEwJTtcbn1cblxuLmlxLWJhbm5lciAuaXEtdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBjb2xvcjogIzRhYzRmMztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lciAuaXEtdmlkZW8gaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pcS1iYW5uZXIgLndhdmVzLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lciAuaXEtd2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHJlbTtcbiAgaGVpZ2h0OiAxNHJlbTtcbiAgbGVmdDogLTkwcHg7XG4gIHRvcDogLTkwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlxLWJhbm5lciAuaXEtd2F2ZXMgLndhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzg0cHg7XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAzODRweDtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBvcGFjaXR5OiAwO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIGJvcmRlci1yYWRpdXM6IDMyMHB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2F2ZXMgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2F2ZXMgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5pcS1iYW5uZXIgLmlxLXdhdmVzIC53YXZlLTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5pcS1iYW5uZXIgLmlxLXdhdmVzIC53YXZlLTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5pcS1iYW5uZXIgLmlxLXdhdmVzIC53YXZlLTMge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB3YXZlcyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9OTApXCI7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdhdmVzIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjIsIDAuMik7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT05MClcIjtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45LCAwLjkpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICB9XG59XG5cbi5pcS1iYW5uZXIgLmJhbm5lci1vYmplY3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlxLWJhbm5lciAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOCU7XG4gIGJvdHRvbTogLTIwJTtcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4uaXEtYmFubmVyIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAtMTI1cHg7XG4gIGxlZnQ6IC0xMyU7XG4gIGJvcmRlcjogMTVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5pcS1iYW5uZXIgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IC0xNSU7XG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cblxuLyogQmFubmVyIFdhdmUgT25lICovXG5cbi5pcS1iYW5uZXIud2F2ZS1vbmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9iYW5uZXIvMTQucG5nJykgbm8tcmVwZWF0IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pcS1iYW5uZXIud2F2ZS1vbmUgLmJhbm5lci10ZXh0IHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIHBhZGRpbmctYm90dG9tOiAxMyU7XG59XG5cblxuLyogQmFubmVyIDIgKi9cblxuLmlxLWJhbm5lci0wMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lci0wMjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzhweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmFubmVyLzA0LnBuZycpIG5vLXJlcGVhdCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uaXEtYmFubmVyLTAyIC5iYW5uZXItdGV4dCB7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTMlO1xufVxuXG4uaXEtYmFubmVyLTAyIC5iYW5uZXItdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmlxLWJhbm5lci0wMiAuYmFubmVyLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IC04MHB4O1xufVxuXG4uaXEtYmFubmVyLTAyIC5iYW5uZXItdmlkZW8ge1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgd2lkdGg6IDY4MHB4O1xuICBoZWlnaHQ6IDM4M3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggNTBweCAxcHggcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjI1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDUwcHggMXB4IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNTBweCAxcHggcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjI1KTtcbn1cblxuLmlxLWJhbm5lci0wMiAuYmFubmVyLW9iamVjdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTAyIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMCU7XG4gIGJvdHRvbTogMjAlO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5pcS1iYW5uZXItMDIgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IC0yODBweDtcbiAgbGVmdDogLTIwJTtcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmlxLWJhbm5lci0wMiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDI1JTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmlxLWJhbm5lci0wMiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5pcS1iYW5uZXItMDIubm8tYmVmb3JlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuXG4vKiBCYW5uZXIgc3R5bGUgMDEgKi9cblxuLmlxLWJhbm5lci0wMi5zdHlsZS0xOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDEge1xuICBib3R0b206IDQwJTtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uaXEtYmFubmVyLTAyLnN0eWxlLTEgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiB7XG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2JhKDc0LCAxOTUsIDI0MywgMC45KTtcbn1cblxuLmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDMge1xuICBib3JkZXI6IDIwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uaXEtYmFubmVyLTAyLnN0eWxlLTEgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wNCB7XG4gIHRvcDogMjAlO1xuICBvcGFjaXR5OiAwLjY7XG59XG5cblxuLyogQmFubmVyIHN0eWxlIDAyICovXG5cbi5pcS1iYW5uZXItMDIuc3R5bGUtMjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pcS1iYW5uZXItMDIuc3R5bGUtMiAuYmFubmVyLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuLyogQmFubmVyIDMgKi9cblxuLmlxLWJhbm5lci0wMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLWJhbm5lci0wMzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2Jhbm5lci8wNi5wbmcnKSBuby1yZXBlYXQgMCAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmlxLWJhbm5lci0wMyAuYmFubmVyLXRleHQge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDEzJTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5pcS1iYW5uZXItMDMgLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uaXEtYmFubmVyLTAzIC5iYW5uZXItaW1nIHtcbiAgd2lkdGg6IDExMCU7XG59XG5cbi5pcS1iYW5uZXItMDMgLmlxLWJhbm5lci12aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lci0wMyAuaXEtdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBjb2xvcjogIzRhYzRmMztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lci0wMyAuaXEtdmlkZW8gaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pcS1iYW5uZXItMDMgLndhdmVzLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDM5JTtcbn1cblxuLmlxLWJhbm5lci0wMyAuaXEtd2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHJlbTtcbiAgaGVpZ2h0OiAxNHJlbTtcbiAgbGVmdDogLTkwcHg7XG4gIHRvcDogLTkwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlxLWJhbm5lci0wMyAuaXEtd2F2ZXMgLndhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzg0cHg7XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAzODRweDtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBvcGFjaXR5OiAwO1xuICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIGJvcmRlci1yYWRpdXM6IDMyMHB4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtd2Via2l0LWFuaW1hdGlvbjogd2F2ZXMgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogd2F2ZXMgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5pcS1iYW5uZXItMDMgLmlxLXdhdmVzIC53YXZlLTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5pcS1iYW5uZXItMDMgLmlxLXdhdmVzIC53YXZlLTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi5pcS1iYW5uZXItMDMgLmlxLXdhdmVzIC53YXZlLTMge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbi5pcS1iYW5uZXItMDMgLmJhbm5lci1vYmplY3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlxLWJhbm5lci0wMyAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNCU7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmlxLWJhbm5lci0wMyAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tYm90dG9tOiAtMTI1cHg7XG4gIGxlZnQ6IC01JTtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmlxLWJhbm5lci0wMyAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5JTtcbiAgcmlnaHQ6IDM2JTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmlxLWJhbm5lci0wMyAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1JTtcbiAgcmlnaHQ6IC0zJTtcbiAgb3BhY2l0eTogMC40O1xufVxuXG5cbi8qIEJhbm5lciA0ICovXG5cbi5pcS1iYW5uZXItMDQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pcS1iYW5uZXItMDQgLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDAgOTBweDtcbn1cblxuLmlxLWJhbm5lci0wNDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogLTJweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzhweDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9pbWFnZXMvYmFubmVyLzAyLnBuZycpIG5vLXJlcGVhdCAwIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmlxLWJhbm5lci0wNCAuYmFubmVyLXRleHQge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDIlO1xufVxuXG4uaXEtYmFubmVyLTA0IC5iYW5uZXItdGV4dCBoMSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmlxLWJhbm5lci0wNCAuYmFubmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXEtYmFubmVyLTA0IC5pcS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtYmFubmVyLTA0IC5pcS12aWRlbyBpIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlxLWJhbm5lci0wNCAud2F2ZXMtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtYmFubmVyLTA0IC5pcS13YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cmVtO1xuICBoZWlnaHQ6IDE0cmVtO1xuICBsZWZ0OiAtOTBweDtcbiAgdG9wOiAtOTBweDtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaXEtYmFubmVyLTA0IC5pcS13YXZlcyAud2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzODRweDtcbiAgd2lkdGg6IDE1cmVtO1xuICBoZWlnaHQ6IDM4NHB4O1xuICBoZWlnaHQ6IDE1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmlxLWJhbm5lci0wNCAuaXEtd2F2ZXMgLndhdmUtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmlxLWJhbm5lci0wNCAuaXEtd2F2ZXMgLndhdmUtMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmlxLWJhbm5lci0wNCAuaXEtd2F2ZXMgLndhdmUtMyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuLmlxLWJhbm5lci0wNCAuYmFubmVyLW9iamVjdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXEtYmFubmVyLTA0IC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC04JTtcbiAgYm90dG9tOiAtMjAlO1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbi5pcS1iYW5uZXItMDQgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IC0xMjVweDtcbiAgbGVmdDogLTEzJTtcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmlxLWJhbm5lci0wNCAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICByaWdodDogLTE1JTtcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuXG4vKiBCYW5uZXIgNSAqL1xuXG4uaXEtYmFubmVyLTA1IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTA1IC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDkwcHg7XG59XG5cbi5pcS1iYW5uZXItMDUgLmJhbm5lci10ZXh0IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmlxLWJhbm5lci0wNSAuYmFubmVyLXRleHQgaDEge1xuICBmb250LXNpemU6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5pcS1iYW5uZXItMDUgLmJhbm5lci1vYmplY3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLWJhbm5lci0wNSAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTAlO1xuICBib3R0b206IDIwJTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uaXEtYmFubmVyLTA1IC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAtMjgwcHg7XG4gIGxlZnQ6IC0yMCU7XG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5pcS1iYW5uZXItMDUgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAyNSU7XG4gIGJvcmRlcjogMjBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pcS1iYW5uZXItMDUgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIGxlZnQ6IDEwJTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uaXEtYmFubmVyLTA1IGltZyB7XG4gIHdpZHRoOiA3MCU7XG59XG5cblxuLyogQmFubmVyIDYgKi9cblxuLmlxLWJhbm5lci0wNiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLWJhbm5lci0wNiAuYmFubmVyLXRleHQge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmlxLWJhbm5lci0wNiAuYmFubmVyLW9iamVjdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTA2IC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMCU7XG4gIGJvdHRvbTogMjAlO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5pcS1iYW5uZXItMDYgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IC0yODBweDtcbiAgbGVmdDogLTIwJTtcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmlxLWJhbm5lci0wNiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5JTtcbiAgcmlnaHQ6IDI1JTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuXG4vKiBCYW5uZXIgNyAqL1xuXG4uaXEtYmFubmVyLTA3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTA3IC5iYW5uZXItdGV4dCB7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTMlO1xuICBtYXJnaW4tYm90dG9tOiAxMyU7XG59XG5cbi5pcS1iYW5uZXItMDcgLmJhbm5lci1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyLjE7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtdmlkZW8gaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pcS1iYW5uZXItMDcgLndhdmVzLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtd2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHJlbTtcbiAgaGVpZ2h0OiAxNHJlbTtcbiAgbGVmdDogLTkwcHg7XG4gIHRvcDogLTkwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtd2F2ZXMgLndhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzg0cHg7XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAzODRweDtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTk2LCAyNDMsIDAuMik7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtd2F2ZXMgLndhdmUtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtd2F2ZXMgLndhdmUtMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmlxLWJhbm5lci0wNyAuaXEtd2F2ZXMgLndhdmUtMyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuXG4vKiBCYW5uZXIgOCAqL1xuXG4uaXEtYmFubmVyLTA4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTA4IC5iYW5uZXItdGV4dCB7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTQlO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5pcS1iYW5uZXItMDggLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA1MnB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbn1cblxuLmlxLWJhbm5lci0wOCAuYmFubmVyLWltZyB7XG4gIHdpZHRoOiAxMTAlO1xufVxuXG4uaXEtYmFubmVyLTA4IC5pcS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtYmFubmVyLTA4IC5pcS12aWRlbyBpIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlxLWJhbm5lci0wOCAud2F2ZXMtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtYmFubmVyLTA4IC5pcS13YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cmVtO1xuICBoZWlnaHQ6IDE0cmVtO1xuICBsZWZ0OiAtOTBweDtcbiAgdG9wOiAtOTBweDtcbiAgei1pbmRleDogMjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaXEtYmFubmVyLTA4IC5pcS13YXZlcyAud2F2ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzODRweDtcbiAgd2lkdGg6IDE1cmVtO1xuICBoZWlnaHQ6IDM4NHB4O1xuICBoZWlnaHQ6IDE1cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIG9wYWNpdHk6IDA7XG4gIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgYm9yZGVyLXJhZGl1czogMzIwcHg7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB3YXZlcyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLmlxLWJhbm5lci0wOCAuaXEtd2F2ZXMgLndhdmUtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmlxLWJhbm5lci0wOCAuaXEtd2F2ZXMgLndhdmUtMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmlxLWJhbm5lci0wOCAuaXEtd2F2ZXMgLndhdmUtMyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbn1cblxuLmFuaW1hdGlvbnMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFuaW1hdGlvbnMgLmFuaW1hdGlvbnMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmFuaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFuaS5hbmktMSB7XG4gIGxlZnQ6IDMwcHg7XG4gIHRvcDogMTIwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG59XG5cbi5hbmkuYW5pLTIge1xuICByaWdodDogMjUlO1xuICB0b3A6IDE0MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xufVxuXG4uYW5pLmFuaS0zIHtcbiAgcmlnaHQ6IDEwMHB4O1xuICBib3R0b206IDEwMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSBzY2FsZSgwLjgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgc2NhbGUoMC44KTtcbn1cblxuLmFuaS5hbmktNCB7XG4gIGJvdHRvbTogOThweDtcbiAgbGVmdDogMTUlO1xufVxuXG4uYW5pLmFuaS01IHtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiA3MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5hbmkuYW5pLTYge1xuICBoZWlnaHQ6IDMyMHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5hbmktY3ViZSB7XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDIwMDAwcHg7XG4gIHBlcnNwZWN0aXZlOiAyMDAwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTMwZGVnKSByb3RhdGVZKDQwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtMzBkZWcpIHJvdGF0ZVkoNDBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaS1jdWJlLTEgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBhbmktY3ViZS0xIDIwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hbmktY3ViZSAuY3ViZS1mYWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA1MHB4KTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOGUwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDBkZWcpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA1MHB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZykgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xuICB6LWluZGV4OiA4O1xufVxuXG4uYW5pLWN1YmUgLmN1YmUtZmFjZS5mYWNlX2xlZnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJiOGUwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNTBweCk7XG4gIHotaW5kZXg6IDk7XG59XG5cbi5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZDdmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNTBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA1MHB4KTtcbiAgei1pbmRleDogMTE7XG59XG5cbi5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfYm90dG9tIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmZDdmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDUwcHgpO1xuICB6LWluZGV4OiA1O1xufVxuXG4uYW5pLWN1YmUgLmN1YmUtZmFjZS5mYWNlX2JhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC01MHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgLTUwcHgpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYW5pLWN1YmUuYW5pLWN1YmUtMiB7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTQzZGVnKSByb3RhdGVZKDUwZGVnKSByb3RhdGVaKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgxNDNkZWcpIHJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMzYwZGVnKTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaS1jdWJlLTIgMTBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBhbmktY3ViZS0yIDEwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5hbmktY3ViZS5hbmktY3ViZS0yIC5jdWJlLWZhY2UuZmFjZV9mcm9udCB7XG4gIGhlaWdodDogNDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAxMDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDEwMHB4KTtcbn1cblxuLmFuaS1jdWJlLmFuaS1jdWJlLTIgLmN1YmUtZmFjZS5mYWNlX3JpZ2h0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooMGRlZykgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZykgcm90YXRlWSg5MGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMCk7XG59XG5cbi5hbmktY3ViZS5hbmktY3ViZS0yIC5jdWJlLWZhY2UuZmFjZV9sZWZ0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoLTkwZGVnKSByb3RhdGVaKDBkZWcpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAxMDBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKSByb3RhdGVZKC05MGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMTAwcHgpO1xufVxuXG4uYW5pLWN1YmUuYW5pLWN1YmUtMiAuY3ViZS1mYWNlLmZhY2VfdG9wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgNjBweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCA2MHB4KTtcbn1cblxuLmFuaS1jdWJlLmFuaS1jdWJlLTIgLmN1YmUtZmFjZS5mYWNlX2JvdHRvbSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtMTAwcHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0xMDBweCk7XG59XG5cbi5hbmktY3ViZS5hbmktY3ViZS0yIC5jdWJlLWZhY2UuZmFjZV9iYWNrIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0xMDBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0xMDBweCk7XG59XG5cbi5hbmktY3ViZS5hbmktY3ViZS0zIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYW5pLWN1YmUtMyAyMHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBhbmktY3ViZS0zIDIwcyBjdWJpYy1iZXppZXIoMC43LCAwLCAwLjcsIDEpIGluZmluaXRlO1xufVxuXG4uYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfZnJvbnQsXG4uYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfcmlnaHQsXG4uYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfbGVmdCxcbi5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV90b3AsXG4uYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfYm90dG9tLFxuLmFuaS1jdWJlLmFuaS1jdWJlLTMgLmN1YmUtZmFjZS5mYWNlX2JhY2sge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNGFjNGYzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycHggIzRhYzRmMywgMCAwIDAgMnB4ICM0YWM0ZjM7XG59XG5cbi5hbmktaGFtYnVyZ2VyIHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMzBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZTkwIDRzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRlOTAgNHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbn1cblxuLmFuaS1oYW1idXJnZXIgLmhhbWJ1cmdlci1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG59XG5cbi5hbmktaGFtYnVyZ2VyIC5oYW1idXJnZXItbGluZS5oYW1idXJnZXItbGluZV90b3Age1xuICB0b3A6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoYW1idXJnZXItbGluZV90b3AgNHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBoYW1idXJnZXItbGluZV90b3AgNHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbn1cblxuLmFuaS1oYW1idXJnZXIgLmhhbWJ1cmdlci1saW5lLmhhbWJ1cmdlci1saW5lX21pZGRsZSB7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogaGFtYnVyZ2VyLWxpbmVfbWlkZGxlIDRzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMSkgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogaGFtYnVyZ2VyLWxpbmVfbWlkZGxlIDRzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMSkgaW5maW5pdGU7XG59XG5cbi5hbmktaGFtYnVyZ2VyIC5oYW1idXJnZXItbGluZS5oYW1idXJnZXItbGluZV9ib3R0b20ge1xuICB0b3A6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBoYW1idXJnZXItbGluZV9ib3R0b20gNHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBoYW1idXJnZXItbGluZV9ib3R0b20gNHMgY3ViaWMtYmV6aWVyKDAuNywgMCwgMC43LCAxKSBpbmZpbml0ZTtcbn1cblxuLm1vdmluZy1zcXVhcmUtZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgb3BhY2l0eTogLjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5hbmktbW92aW5nLXNxdWFyZSB7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbmktbW92aW5nLXNxdWFyZSA2cyBjdWJpYy1iZXppZXIoMC43LCAwLCAwLjcsIDEpIGluZmluaXRlO1xuICBhbmltYXRpb246IGFuaS1tb3Zpbmctc3F1YXJlIDZzIGN1YmljLWJlemllcigwLjcsIDAsIDAuNywgMSkgaW5maW5pdGU7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnN2ZyAjZm9sbG93UGF0aCB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzRhYzRmMztcbiAgc3Ryb2tlLXdpZHRoOiA4O1xuICBzdHJva2UtZGFzaGFycmF5OiAyODcwcHg7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAyODcwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBkcmF3UGF0aCA2cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogZHJhd1BhdGggNnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5zdmcgI2Rhc2hlZFBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNmZmY7XG4gIHN0cm9rZS13aWR0aDogMTQ7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDUwcHg7XG59XG5cbnN2ZyAjYWlycGxhaW4ge1xuICBmaWxsOiAjNGFjNGYzO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNDVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMHB4LCAtNDVweCk7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmktY3ViZS0xIHtcbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0zMGRlZykgcm90YXRlWSg0MGRlZykgcm90YXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTMwZGVnKSByb3RhdGVZKDQwZGVnKSByb3RhdGVaKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pLWN1YmUtMSB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtMzBkZWcpIHJvdGF0ZVkoNDBkZWcpIHJvdGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zMGRlZykgcm90YXRlWSg0MGRlZykgcm90YXRlWigwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW5pLWN1YmUtMiB7XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxNDNkZWcpIHJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE0M2RlZykgcm90YXRlWSg1MGRlZykgcm90YXRlWigwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaS1jdWJlLTIge1xuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTQzZGVnKSByb3RhdGVZKDUwZGVnKSByb3RhdGVaKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxNDNkZWcpIHJvdGF0ZVkoNTBkZWcpIHJvdGF0ZVooMCk7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaS1jdWJlLTMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSByb3RhdGVYKC02M2RlZykgcm90YXRlWSgxM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgNSUsXG4gIDE1JSxcbiAgMjUlLFxuICAzNSUsXG4gIDQ1JSxcbiAgNTUlLFxuICA2NSUsXG4gIDc1JSxcbiAgODUlLFxuICA5NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZVgoLTYzZGVnKSByb3RhdGVZKC0yM2RlZykgcm90YXRlWig0N2RlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZVgoLTYzZGVnKSByb3RhdGVZKC0yM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgMTAlLFxuICAyMCUsXG4gIDMwJSxcbiAgNDAlLFxuICA1MCUsXG4gIDYwJSxcbiAgNzAlLFxuICA4MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSByb3RhdGVYKC02M2RlZykgcm90YXRlWSgxM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDA3ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDA3ZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGFuaS1jdWJlLTMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSByb3RhdGVYKC02M2RlZykgcm90YXRlWSgxM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgNSUsXG4gIDE1JSxcbiAgMjUlLFxuICAzNSUsXG4gIDQ1JSxcbiAgNTUlLFxuICA2NSUsXG4gIDc1JSxcbiAgODUlLFxuICA5NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZVgoLTYzZGVnKSByb3RhdGVZKC0yM2RlZykgcm90YXRlWig0N2RlZyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpIHJvdGF0ZVgoLTYzZGVnKSByb3RhdGVZKC0yM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgMTAlLFxuICAyMCUsXG4gIDMwJSxcbiAgNDAlLFxuICA1MCUsXG4gIDYwJSxcbiAgNzAlLFxuICA4MCUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDdkZWcpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSByb3RhdGVYKC02M2RlZykgcm90YXRlWSgxM2RlZykgcm90YXRlWig0N2RlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDA3ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgcm90YXRlWCgtNjNkZWcpIHJvdGF0ZVkoMTNkZWcpIHJvdGF0ZVooNDA3ZGVnKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlOTAge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1JSxcbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgfVxuICA1NSUsXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGU5MCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUlLFxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB9XG4gIDU1JSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaGFtYnVyZ2VyLWxpbmVfdG9wIHtcbiAgMCUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUlLFxuICA1MCUge1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICA1NSUsXG4gIDEwMCUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGFtYnVyZ2VyLWxpbmVfdG9wIHtcbiAgMCUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDUlLFxuICA1MCUge1xuICAgIHRvcDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgfVxuICA1NSUsXG4gIDEwMCUge1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoYW1idXJnZXItbGluZV9taWRkbGUge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1JSxcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDU1JSxcbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhhbWJ1cmdlci1saW5lX21pZGRsZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUlLFxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgNTUlLFxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBoYW1idXJnZXItbGluZV9ib3R0b20ge1xuICAwJSB7XG4gICAgdG9wOiAxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgNSUsXG4gIDUwJSB7XG4gICAgdG9wOiA1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgNTUlLFxuICAxMDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhhbWJ1cmdlci1saW5lX2JvdHRvbSB7XG4gIDAlIHtcbiAgICB0b3A6IDEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICA1JSxcbiAgNTAlIHtcbiAgICB0b3A6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICA1NSUsXG4gIDEwMCUge1xuICAgIHRvcDogMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBhbmktbW92aW5nLXNxdWFyZSB7XG4gIDAlLFxuICAyLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDEwJSxcbiAgMTUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xuICB9XG4gIDIyLjUlLFxuICAyNy41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbiAgfVxuICAzNSUsXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyMHB4KTtcbiAgfVxuICA0Ny41JSxcbiAgNTIuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gIH1cbiAgNjAlLFxuICA2NSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XG4gIH1cbiAgNzIuNSUsXG4gIDc3LjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDIwcHgpO1xuICB9XG4gIDg1JSxcbiAgOTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgsIDApO1xuICB9XG4gIDk3LjUlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pLW1vdmluZy1zcXVhcmUge1xuICAwJSxcbiAgMi41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxuICAxMCUsXG4gIDE1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAwKTtcbiAgfVxuICAyMi41JSxcbiAgMjcuNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCwgMjBweCk7XG4gIH1cbiAgMzUlLFxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMjBweCk7XG4gIH1cbiAgNDcuNSUsXG4gIDUyLjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICB9XG4gIDYwJSxcbiAgNjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIwcHgpO1xuICB9XG4gIDcyLjUlLFxuICA3Ny41JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbiAgfVxuICA4NSUsXG4gIDkwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMHB4LCAwKTtcbiAgfVxuICA5Ny41JSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZHJhd1BhdGgge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMjg3MHB4O1xuICB9XG4gIDUzJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA3OCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRyYXdQYXRoIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4NzBweDtcbiAgfVxuICA1MyUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNzglIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTAyM3B4KSB7XG4gIC5hbmkuYW5pLTEge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgfVxuICAuYW5pLmFuaS0yIHtcbiAgICB0b3A6IDEyMHB4O1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zKTtcbiAgfVxuICAuYW5pLmFuaS01IHtcbiAgICB0b3A6IDgwJTtcbiAgfVxuICAuYW5pLmFuaS02IHtcbiAgICBtYXgtaGVpZ2h0OiAzMHZ3O1xuICAgIG1heC13aWR0aDogMzB2dztcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICB9XG59XG5cblxuLyogQmFubmVyIDA5ICovXG5cbi5pcS1iYW5uZXItMDkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pcS1iYW5uZXItMDkgLmJhbm5lci10ZXh0IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pcS1iYW5uZXItMDkgLmJhbm5lci1vYmplY3RzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLWJhbm5lci0wOSAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTAlO1xuICBib3R0b206IDIwJTtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uaXEtYmFubmVyLTA5IC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAtMjgwcHg7XG4gIGxlZnQ6IC0yMCU7XG4gIGJvcmRlcjogMzBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5pcS1iYW5uZXItMDkgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOSU7XG4gIHJpZ2h0OiAyNSU7XG4gIGJvcmRlcjogMjBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5pcS1iYW5uZXItMDkgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogNzIlO1xufVxuXG4uaXEtYmFubmVyLTA5IC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pcS1iYW5uZXItMDkgLmJhbm5lci1zZXJ2aWNlIHtcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIG1hcmdpbjogMTAwcHggMHB4IDUwcHg7XG4gIHBhZGRpbmc6IDE4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXEtYmFubmVyLTA5IGkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uYmFubmVyLXNlcnZpY2U6aG92ZXIsXG4uYmFubmVyLXNlcnZpY2U6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5cbi8qIEJhbm5lciAxMCAqL1xuXG4uaXEtYmFubmVyLTEwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTEwIC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDkwcHg7XG59XG5cbi5pcS1iYW5uZXItMTA6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9iYW5uZXIvMTQucG5nJykgbm8tcmVwZWF0IDAgMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pcS1iYW5uZXItMTAgLmJhbm5lci10ZXh0IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMCU7XG59XG5cbi5pcS1iYW5uZXItMTAgLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uaXEtYmFubmVyLTEwIC5iYW5uZXItaW1nIHtcbiAgd2lkdGg6IDkwJTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA2MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XG59XG5cbi5pcS1iYW5uZXItMTAgLmlxLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMi4xO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1iYW5uZXItMTAgLmlxLXZpZGVvIGkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaXEtYmFubmVyLTEwIC53YXZlcy1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1iYW5uZXItMTAgLmlxLXdhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRyZW07XG4gIGhlaWdodDogMTRyZW07XG4gIGxlZnQ6IC05MHB4O1xuICB0b3A6IC05MHB4O1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pcS1iYW5uZXItMTAgLmlxLXdhdmVzIC53YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM4NHB4O1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogMzg0cHg7XG4gIGhlaWdodDogMTVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBib3JkZXItcmFkaXVzOiAzMjBweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uaXEtYmFubmVyLTEwIC5pcS13YXZlcyAud2F2ZS0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG4uaXEtYmFubmVyLTEwIC5pcS13YXZlcyAud2F2ZS0yIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uaXEtYmFubmVyLTEwIC5pcS13YXZlcyAud2F2ZS0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgd2F2ZXMge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMiwgMC4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMiwgMC4yKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTkwKVwiO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjksIDAuOSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbXMtZmlsdGVyOiBcInByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShPcGFjaXR5PTApXCI7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB3YXZlcyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yLCAwLjIpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9OTApXCI7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSwgMC45KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9MClcIjtcbiAgfVxufVxuXG4uaXEtYmFubmVyLTEwIC5iYW5uZXItb2JqZWN0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pcS1iYW5uZXItMTAgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTglO1xuICBib3R0b206IC0yMCU7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLmlxLWJhbm5lci0xMCAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTEyNXB4O1xuICBsZWZ0OiAtMTMlO1xuICBib3JkZXI6IDE1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA5MDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4uaXEtYmFubmVyLTEwIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAtMTUlO1xuICBib3JkZXI6IDMwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA5MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5cbi8qIEJhbm5lciAxMSAqL1xuXG4uaXEtYmFubmVyLTExIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtYmFubmVyLTExIC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDkwcHg7XG59XG5cbi5pcS1iYW5uZXItMTEgLmJhbm5lci10ZXh0IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5pcS1iYW5uZXItMTEgLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uaXEtYmFubmVyLTExIC5iYW5uZXItaW1nIHtcbiAgd2lkdGg6IDExMCU7XG59XG5cbi5pcS1iYW5uZXItMTEgLmlxLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMi4xO1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyogQmFubmVyIDEyICovXG5cbi5pcS1iYW5uZXItMTIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pcS1iYW5uZXItMTIgLmJhbm5lci10ZXh0IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4uaXEtYmFubmVyLTEyIC5iYW5uZXItaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTAlO1xufVxuXG4uaXEtYmFubmVyLTEyIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMCU7XG4gIGJvdHRvbTogMjAlO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5pcS1iYW5uZXItMTIgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IC0yODBweDtcbiAgbGVmdDogLTIwJTtcbiAgYm9yZGVyOiAzMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmlxLWJhbm5lci0xMiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDI1JTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmlxLWJhbm5lci0xMiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTA0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMTAlO1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5pcS1iYW5uZXItMTIgLmJhbm5lci10ZXh0IC5iYW5uZXItcGhvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC01MHB4O1xuICBib3R0b206IC0zMXB4O1xuICB3aWR0aDogNDAlO1xufVxuXG4uaXEtYmFubmVyLTEyIC5iYW5uZXItdGV4dCAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaXEtYmFubmVyLTEyIC5iYW5uZXItdGV4dCAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaXEtYmFubmVyLTEyIC5iYW5uZXItdGV4dCAuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pcS1iYW5uZXItMTIgLmJhbm5lci10ZXh0IC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuXG4vKiBCYW5uZXIgMTMqL1xuXG4uaXEtYmFubmVyIC5iYW5uZXItdGV4dCAuYmFubmVyLXBob25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTUwcHg7XG4gIGJvdHRvbTogLTE4cHg7XG4gIHdpZHRoOiAyNiU7XG59XG5cbi5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IC53YXRjaC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMCU7XG4gIHRvcDogNTIlO1xuICByaWdodDogODUlXG59XG5cblxuLyogQmFubmVyIDE0Ki9cblxuLmlxLWJhbm5lci0xMyAuYmFubmVyLXRleHQge1xuICBtYXJnaW4tdG9wOiAzJVxufVxuXG4uaXEtYnJlYWRjcnVtYiAuYmFubmVyLWltZyB7XG4gIG1heC13aWR0aDogMTMwJTtcbn1cblxuLmlxLWJyZWFkY3J1bWIgLmJhbm5lci1hbmkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICByaWdodDogMFxufVxuXG5cbi8qIC0tLS0gcGFydGljbGVzLmpzIGNvbnRhaW5lciAtLS0tICovXG5cbiNwYXJ0aWNsZXMtanMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJycpOyovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSG93IGl0IFdvcmtzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS13b3Jrcy1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcS13b3Jrcy1ib3ggcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pcS13b3Jrcy1ib3ggLmljb24tYmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCA3NiwgMjU1LCAwLjEpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uaXEtd29ya3MtYm94IC5pY29uLWJnIGkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS13b3Jrcy1ib3ggLnN0ZXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBjb2xvcjogIzRhYzRmMztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwcHg7XG59XG5cbi5pcS13b3Jrcy1ib3g6aG92ZXIge1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50IDFweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgLjQpICFpbXBvcnRhbnQ7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIC40KSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgLjQpICFpbXBvcnRhbnQ7XG59XG5cblxuLyogSVEgV29ya3MgQm94IE5vIFNoYWRvdyAqL1xuXG4uaXEtd29ya3MtYm94Lm5vLXNoYWRvdyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlxLXdvcmtzLWJveC5uby1zaGFkb3c6aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cblxuLyogSVEgV29ya3MgQm94IE5vIFNoYWRvdyAqL1xuXG4uaXEtd29ya3MtYm94LnJvdW5kLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlxLXdvcmtzLWJveC5yb3VuZC1pY29uIC5pY29uLWJnIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaXEtd29ya3MtYm94LnJvdW5kLWljb24gLmljb24tYmcgaSB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXdvcmtzLWJveC5yb3VuZC1pY29uIC5zdGVwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MHB4O1xufVxuXG4uaXEtd29ya3MtYm94LnJvdW5kLWljb246aG92ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5pcS13b3Jrcy1ib3gucm91bmQtaWNvbjpob3ZlciAuaWNvbi1iZyB7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoNzQsIDE5NSwgMjQzLCAwLjYpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoNzQsIDE5NSwgMjQzLCAwLjYpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoNzQsIDE5NSwgMjQzLCAwLjYpO1xufVxuXG5cbi8qIElRIEJvcmRlciBCbG9jayAqL1xuXG4uaXEtYm9yZGVyLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZjdmNztcbiAgcGFkZGluZzogNTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1ib3JkZXItYmxvY2sgLmljb24tYmcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4uaXEtYm9yZGVyLWJsb2NrIC5pY29uLWJnIGkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1ib3JkZXItYmxvY2sgLnN0ZXAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjdmN2Y3O1xuICBjb2xvcjogIzRhYzRmMztcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogMzhweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG59XG5cbi5pcS1ib3JkZXItYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWJvcmRlci1ibG9jazpiZWZvcmUsXG4uaXEtYm9yZGVyLWJsb2NrOmFmdGVyLFxuLmlxLWJvcmRlci1ibG9jaz4uYm9yZGVyLWJveDpiZWZvcmUsXG4uaXEtYm9yZGVyLWJsb2NrPi5ib3JkZXItYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG4uaXEtYm9yZGVyLWJsb2NrOmJlZm9yZSxcbi5pcS1ib3JkZXItYmxvY2s6YWZ0ZXIge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaXEtYm9yZGVyLWJsb2NrOmJlZm9yZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC45cztcbn1cblxuLmlxLWJvcmRlci1ibG9jazphZnRlciB7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uaXEtYm9yZGVyLWJsb2NrPi5ib3JkZXItYm94OmJlZm9yZSxcbi5pcS1ib3JkZXItYmxvY2s+LmJvcmRlci1ib3g6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5pcS1ib3JkZXItYmxvY2s+LmJvcmRlci1ib3g6YmVmb3JlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5pcS1ib3JkZXItYmxvY2s+LmJvcmRlci1ib3g6YWZ0ZXIge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuXG4uaXEtYm9yZGVyLWJsb2NrOmhvdmVyOmJlZm9yZSxcbi5pcS1ib3JkZXItYmxvY2s6aG92ZXI6YWZ0ZXIsXG4uaXEtYm9yZGVyLWJsb2NrOmhvdmVyPi5ib3JkZXItYm94OmJlZm9yZSxcbi5pcS1ib3JkZXItYmxvY2s6aG92ZXI+LmJvcmRlci1ib3g6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbn1cblxuLmlxLWJvcmRlci1ibG9jazpob3ZlcjpiZWZvcmUge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbn1cblxuLmlxLWJvcmRlci1ibG9jazpob3ZlcjphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5pcS1ib3JkZXItYmxvY2s6aG92ZXI+LmJvcmRlci1ib3g6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC42cztcbn1cblxuLmlxLWJvcmRlci1ibG9jazpob3Zlcj4uYm9yZGVyLWJveDphZnRlciB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuOXM7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaG8gaXMgU29mYm94ID9cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmhvdy13b3JrcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLXdvcmtzLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXEtb2JqZWN0cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5pcS1vYmplY3RzIC5pcS1vYmplY3RzLTAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgcmlnaHQ6IDM1JTtcbn1cblxuLmlxLW9iamVjdHMgLmlxLW9iamVjdHMtMDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICByaWdodDogMDtcbn1cblxuLmlxLW9iamVjdHMgLmlxLW9iamVjdHMtMDQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAtMTMlO1xuICBib3JkZXI6IDU2cHggc29saWQgIzRhYzRmMztcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCBmb3VyIFByb2R1Y3Rpdml0eVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaG93LXdvcmtzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtd29ya3MtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1vYmplY3RzbmV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5pcS1vYmplY3RzbmV3IC5pcS1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwJTtcbiAgbGVmdDogMDtcbn1cblxuLmlxLW9iamVjdHNuZXcgLmlxLW9iamVjdHMtMDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xuICByaWdodDogMzUlO1xufVxuXG4uaXEtb2JqZWN0c25ldyAuaXEtb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uaXEtb2JqZWN0c25ldyAuaXEtb2JqZWN0cy0wNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IC0xMyU7XG4gIGJvcmRlcjogNTZweCBzb2xpZCAjNGFjNGYzO1xuICBib3JkZXItcmFkaXVzOiA5MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU29mdHdhcmUgRmVhdHVyZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNvZnR3YXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtc29mdHdhcmUtZGVtbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5pcS1saXN0IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbi5pcS1saXN0IGxpIGkge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmlxLWxpc3QgbGkgc3BhbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pcS1vYmplY3RzLXNvZnR3YXJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUlO1xuICBsZWZ0OiAxNSU7XG59XG5cbi5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAxMCU7XG4gIGJvcmRlcjogNDBweCBzb2xpZCAjNGFjNGYzO1xuICBib3JkZXItcmFkaXVzOiA5MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsIGZvdXIgUHJvZHVjdGl2aXR5XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zb2Z0d2FyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLXNvZnR3YXJlLWRlbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiAwO1xufVxuXG4uaXEtbGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4uaXEtbGlzdCBsaSBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pcS1saXN0IGxpIHNwYW4ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4uaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1JTtcbiAgbGVmdDogMTUlO1xufVxuXG4uaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMTAlO1xuICBib3JkZXI6IDQwcHggc29saWQgIzRhYzRmMztcbiAgYm9yZGVyLXJhZGl1czogOTAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgIEdyZWF0IHNjcmVlbnNob3RzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1zY3JlZW5zaG90cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQGtleWZyYW1lcyBoZWFydGJlYXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuXG4uc2NyZWVuc2hvdHMtc2xpZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTgwcHg7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNzgwcHg7XG4gIGhlaWdodDogNTgwcHg7XG4gIG1hcmdpbjogLTMwMHB4IDAgMCAtMzkwcHg7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB6LWluZGV4IDBtcyAyNTBtcztcbn1cblxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IC5zbGlkZXItc2luZ2xlIC5zbGlkZXItc2luZ2xlLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4xNywgMC42NywgMC41NSwgMS40Myk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcmVhY3RpdmVkZSAuc2xpZGVyLXNpbmdsZS1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwKTtcbn1cblxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IC5zbGlkZXItc2luZ2xlLnByZWFjdGl2ZSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcmVhY3RpdmUgLnNsaWRlci1zaW5nbGUtaW1hZ2Uge1xuICBvcGFjaXR5OiAuMztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpIHNjYWxlKDAuOCk7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcm9hY3RpdmUge1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1zaW5nbGUucHJvYWN0aXZlIC5zbGlkZXItc2luZ2xlLWltYWdlIHtcbiAgb3BhY2l0eTogLjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpIHNjYWxlKDAuOCk7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcm9hY3RpdmVkZSAuc2xpZGVyLXNpbmdsZS1pbWFnZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHNjYWxlKDApO1xufVxuXG4uc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1zaW5nbGUuYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cblxuLnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IC5zbGlkZXItc2luZ2xlLmFjdGl2ZSAuc2xpZGVyLXNpbmdsZS1pbWFnZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSkgc2NhbGUoMSk7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItbGVmdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiAxMTUlO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAxMTUlO1xuICB0b3A6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cblxuLyogU2NyZWVuc2hvdHMgU2xpZGVyIE5PIFNoYWRvdyAgKi9cblxuLm5vLXNoYWRvdyAuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWNvbnRlbnQgLnNsaWRlci1zaW5nbGUgLnNsaWRlci1zaW5nbGUtaW1hZ2Uge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubm8tc2hhZG93IC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcmVhY3RpdmUgLnNsaWRlci1zaW5nbGUtaW1hZ2Uge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubm8tc2hhZG93IC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCAuc2xpZGVyLXNpbmdsZS5wcm9hY3RpdmUgLnNsaWRlci1zaW5nbGUtaW1hZ2Uge1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNwZWNpYWwgRmVhdHVyZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG4gIHdpZHRoOiAyNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLWFtYXppbmctdGFiIC5uYXYtdGFicz5saSBhLmFjdGl2ZSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2LXRhYnM+bGkgYS5hY3RpdmU6aG92ZXIsXG4uaXEtYW1hemluZy10YWIgLm5hdi10YWJzPmxpIGEuYWN0aXZlOmZvY3VzLFxuLmlxLWFtYXppbmctdGFiIC5uYXYtdGFicz5saSBhLmFjdGl2ZTEsXG4uaXEtYW1hemluZy10YWIgLm5hdi10YWJzPmxpIGEuYWN0aXZlMTpob3Zlcixcbi5pcS1hbWF6aW5nLXRhYiAubmF2LXRhYnM+bGkgYS5hY3RpdmUxOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjdmYiAhaW1wb3J0YW50O1xufVxuXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1hbWF6aW5nLXRhYiAubmF2LXRhYnMgbGkgYSBpIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhIHNwYW4ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYTpob3ZlciBpIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlLFxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmU6aG92ZXIsXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTpmb2N1cyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlIGksXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTpob3ZlciBpLFxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmU6Zm9jdXMgaSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlMSBpLFxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmUxOmhvdmVyIGksXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTE6Zm9jdXMgaSB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhOmJlZm9yZSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGE6aG92ZXI6YmVmb3JlLFxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYTpmb2N1czpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAlO1xuICBib3R0b206IC0xcHg7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG59XG5cbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlOmJlZm9yZSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlOmhvdmVyOmJlZm9yZSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlOmZvY3VzOmJlZm9yZSxcbi5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGE6aG92ZXIsXG4uaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTE6YmVmb3JlLFxuLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmUxOmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGxlZnQ6IDAlO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBVc2VmdWwgSW5mb21hdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaW5mby1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5mby1ib3ggLmluZm8taWNvbiBpIHtcbiAgZm9udC1zaXplOiA1NnB4O1xufVxuXG4uaW5mby1ib3ggLmluZm8taWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCA1cHggI2VlZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDk0cHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgU29mYm94IFNwZWNpYWxpdGllc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtZmFuY3ktYm94IHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uaXEtZmFuY3ktYm94IC5pcS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHdpZHRoOiA4NnB4O1xuICBsaW5lLWhlaWdodDogODZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRhYzRmMztcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG59XG5cbi5pcS1mYW5jeS1ib3g6aG92ZXIgLmlxLWljb24ge1xuICBjb2xvcjogI2Y0ZjRmNDtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbn1cblxuLmlxLWZhbmN5LWJveCAuaXEtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA0NnB4O1xufVxuXG4uaXEtZmFuY3ktYm94IC5mYW5jeS1jb250ZW50IGg1IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlxLXNwZWNpYWxpdGllcyB7IHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMHB4IC0gMzBweCkgIWltcG9ydGFudDsgfVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgIFNvZmJveCBTcGVjaWFsaXRpZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWZhbmN5LWJveC1uZXcge1xuICBwYWRkaW5nOiA0MHB4IDE1cHggMjVweCAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1mYW5jeS1ib3gtbmV3IC5pcS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHdpZHRoOiA4NnB4O1xuICBsaW5lLWhlaWdodDogODZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRhYzRmMztcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG59XG5cbi5pcS1mYW5jeS1ib3gtbmV3OmhvdmVyIC5pcS1pY29uIHtcbiAgY29sb3I6ICNmNGY0ZjQ7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG59XG5cbi5pcS1mYW5jeS1ib3gtbmV3IC5pcS1pY29uIGkge1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5pcS1mYW5jeS1ib3gtbmV3IC5mYW5jeS1jb250ZW50IGg1IHtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgIFNvZmJveCBTcGVjaWFsaXRpZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWZhbmN5LWJveC0xIHtcbiAgcGFkZGluZzogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtZmFuY3ktYm94LTEgLmlxLWljb24ge1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogODZweDtcbiAgd2lkdGg6IDg2cHg7XG4gIGxpbmUtaGVpZ2h0OiA4NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbn1cblxuLmlxLWZhbmN5LWJveC0xOmhvdmVyIC5pcS1pY29uIHtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5pcS1mYW5jeS1ib3gtMSAuaXEtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA0NnB4O1xufVxuXG4uaXEtZmFuY3ktYm94LTEgLmZhbmN5LWNvbnRlbnQgaDUge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ291bnRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uY291bnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb3VudGVyIGkge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb3VudGVyLWRhdGUge1xuICBmbGV4OiAxO1xufVxuXG4uY291bnRlciBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5jb3VudGVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5jb3VudGVyLWluZm8ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb3VudGVyLWluZm8taW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uY291bnRlci1pbmZvLWltZyBpbWcge1xuXG59XG5cbi5jb3VudGVyLWluZm8gLmlxLXZpZGVvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMi42O1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb3VudGVyLWluZm8gLmlxLXZpZGVvIGkge1xuICBtYXJnaW4tbGVmdDogN3B4O1xufVxuXG4uY291bnRlci1pbmZvIC53YXZlcy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzYlO1xuICBsZWZ0OiA2MCU7XG59XG5cbi5jb3VudGVyLWluZm8gLmlxLXdhdmVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRyZW07XG4gIGhlaWdodDogMTRyZW07XG4gIGxlZnQ6IC04MHB4O1xuICB0b3A6IC04MHB4O1xuICB6LWluZGV4OiAyO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb3VudGVyLWluZm8gLmlxLXdhdmVzIC53YXZlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDM4NHB4O1xuICB3aWR0aDogMTVyZW07XG4gIGhlaWdodDogMzg0cHg7XG4gIGhlaWdodDogMTVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgb3BhY2l0eTogMDtcbiAgLW1zLWZpbHRlcjogXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEoT3BhY2l0eT0wKVwiO1xuICBib3JkZXItcmFkaXVzOiAzMjBweDtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBhbmltYXRpb246IHdhdmVzIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uY291bnRlci1pbmZvIC5pcS13YXZlcyAud2F2ZS0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG4uY291bnRlci1pbmZvIC5pcS13YXZlcyAud2F2ZS0yIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4uY291bnRlci1pbmZvIC5pcS13YXZlcyAud2F2ZS0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuXG5cbi8qIENvdW50ZXIgKi9cblxuLmlxLWNvdW50ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaXEtY291bnRlciBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY291bnRlci1kYXRlIHtcbiAgZmxleDogMTtcbn1cblxuLmlxLWNvdW50ZXIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uaXEtY291bnRlciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMCAxNXB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtY291bnRlci1ib3gtMSAuaGVhZGluZy10aXRsZSBwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcbn1cblxuXG4vKiBDb3VudGVyIDEgKi9cblxuLmlxLWNvdW50ZXItMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5pcS1jb3VudGVyLTEgaSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDY1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvdW50ZXItZGF0ZSB7XG4gIGZsZXg6IDE7XG59XG5cbi5pcS1jb3VudGVyLTEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uaXEtY291bnRlci0xIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pcS1jb3VudGVyLTEtYm94LTIgLmhlYWRpbmctdGl0bGUgcCB7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBwYWRkaW5nLXJpZ2h0OiAyMCU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgTG92ZWQgQnkgT3VyIEN1c3RvbWVyc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtbG92ZWQtY3VzdG9tZXJzIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIC5pdGVtIHtcbiAgcGFkZGluZzogMCAwIDVweDtcbn1cblxuLmlxLWNsaWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA2cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNnB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmlxLWNsaWVudDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogLThweDtcbiAgbGVmdDogNSU7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG4gIGhlaWdodDogOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaXEtY2xpZW50IC5jbGllbnQtaW1nIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNsaWVudC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNsaWVudC1uYW1lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBkXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDRweDtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jbGllbnQtbmFtZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFxmMTBlXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2xpZW50LWluZm8gcCB7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICBBZmZvcmRhYmxlIFByaWNlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1wcmljaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaXEtcHJpY2luZyAucHJpY2UtdGl0bGUge1xuICBwYWRkaW5nOiAzNXB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLXByaWNpbmcgLnByaWNlLXRpdGxlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2RyaXZlLzA5LnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1wcmljaW5nLnByaWNpbmctMDIgLnByaWNlLXRpdGxlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2RyaXZlLzExLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1wcmljaW5nLnByaWNpbmctMDMgLnByaWNlLXRpdGxlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2RyaXZlLzEyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1wcmljaW5nIC5wcmljZS10aXRsZSBoMiB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtcHJpY2luZyAucHJpY2UtdGl0bGUgaDIgc21hbGwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG4gIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uaXEtcHJpY2luZyAucHJpY2UtdGl0bGUgaDIgc21hbGw6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5pcS1wcmljaW5nIC5wcmljZS10aXRsZSBzcGFuIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtcHJpY2luZyB1bCB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG5cbi5pcS1wcmljaW5nIHVsIGxpIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5pcS1wcmljaW5nIC5wcmljZS1mb290ZXIge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHotaW5kZXg6IDk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICBNZWV0IHRoZSBUZWFtXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS10ZWFtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaXEtdGVhbSAuaXEtdGVhbS1pbmZvIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uaXEtdGVhbSAuaXEtdGVhbS1pbmZvIHNwYW4ge1xuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuXG4uaXEtdGVhbSAuc2hhcmUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC02NXB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbn1cblxuLmlxLXRlYW06aG92ZXIgLnNoYXJlIHtcbiAgbGVmdDogMTVweDtcbn1cblxuLmlxLXRlYW0gLnNoYXJlIHVsIGxpIHtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxuLmlxLXRlYW0gLnNoYXJlIHVsIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmlxLXRlYW0gLnNoYXJlIHVsIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xufVxuXG4uaXEtdGVhbSAuaXEtdGVhbS1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS10ZWFtIC5pcS10ZWFtLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLXRlYW0gLmlxLXRlYW0taW1nOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMDtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxOTYsIDI0MywgMCk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg3NCwgMTk2LCAyNDMsIDApIDAlLCByZ2JhKDc0LCAxOTYsIDI0MywgMSkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDc0LCAxOTYsIDI0MywgMCkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNzQsIDE5NiwgMjQzLCAxKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNzQsIDE5NiwgMjQzLCAwKSAwJSwgcmdiYSg3NCwgMTk2LCAyNDMsIDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDc0LCAxOTYsIDI0MywgMCkgMCUsIHJnYmEoNzQsIDE5NiwgMjQzLCAxKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoNzQsIDE5NiwgMjQzLCAwKSAwJSwgcmdiYSg3NCwgMTk2LCAyNDMsIDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDc0LCAxOTYsIDI0MywgMCkgMCUsIHJnYmEoNzQsIDE5NiwgMjQzLCAxKSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzRhYzRmMycsIGVuZENvbG9yc3RyPScjNGFjNGYzJywgR3JhZGllbnRUeXBlPTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbn1cblxuLmlxLXRlYW06aG92ZXIgLmlxLXRlYW0taW1nOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cblxuLypUZWFtIDEqL1xuXG4uaXEtdGVhbS0xIC50ZWFtLWJsb2cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzRhYzNmMztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5pcS10ZWFtLTEgLnRlYW0tYmxvZyBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5pcS10ZWFtLTEgLmlxLXN0YXIgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIGNvbG9yOiAjNGFjM2YzO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhcmUgU2VydmljZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLXNlcnZpY2VzLWJveCAuaXEtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uaXEtc2VydmljZXMtYm94IC5zZXJ2aWNlcy1jb250ZW50IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlxLXByb2dyZXNzLWJhci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzRhYzRmMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaXEtcHJvZ3Jlc3MtYmFyLXRleHQgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNTBweDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pcS1wcm9ncmVzcy1iYXItdGV4dCBzcGFuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgYm90dG9tOiAtN3B4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDdweCA3cHggMCA3cHg7XG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmlxLXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgYm94LXNoYWRvdzogMCAwIDA7XG4gIGhlaWdodDogOHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1wcm9ncmVzcy1iYXI+c3BhbiB7XG4gIGJhY2tncm91bmQ6ICMzMzMgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG59XG5cbi5pcS1jb21wYXJlLXNlcnZpY2VzIHsgcGFkZGluZy1ib3R0b206IGNhbGMoMTAwcHggLSAyMnB4KSAhaW1wb3J0YW50OyB9XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICBGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtYXNrZWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1hY2NvcmRpb24ge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweCA1MHB4IDE1cHggMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY3ZmI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzJjM2U1MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5pcS1hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZTpiZWZvcmUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb250ZW50OiBcIlxcZjNkMFwiO1xuICBmb250LWZhbWlseTogXCJJb25pY29uc1wiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0IDBzO1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xufVxuXG4uaXEtYWNjb3JkaW9uIC5hY2NvcmRpb24tYWN0aXZlIC5hY2NvcmRpb24tdGl0bGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYzZDhcIjtcbiAgZm9udC1mYW1pbHk6IFwiSW9uaWNvbnNcIjtcbn1cblxuLmlxLWFjY29yZGlvbiAuYWNjb3JkaW9uLWRldGFpbHMge1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5pcS1hY2NvcmRpb24gLmlxLWFjY29yZGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5pcS1hY2NvcmRpb24gLmlxLWFjY29yZGlvbjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlxLW9iamVjdHMtYXNrZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXEtb2JqZWN0cy1hc2tlZCAuaXEtb2JqZWN0cy0wMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5pcS1vYmplY3RzLWFza2VkIC5pcS1vYmplY3RzLTAyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM3JTtcbiAgbGVmdDogMzUlO1xufVxuXG4uaXEtb2JqZWN0cy1hc2tlZCAuaXEtb2JqZWN0cy0wMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyOCU7XG4gIGxlZnQ6IDEzJTtcbiAgYm9yZGVyOiAyNXB4IHNvbGlkICM0YWM0ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDkwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICB3aWR0aDogMzUwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF0ZXN0IEJsb2cgUG9zdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtYmxvZy1ib3gge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLmlxLWJsb2ctYm94IC5pcS1ibG9nLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtYmxvZy1ib3ggLmlxLWJsb2ctaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1ibG9nLWRldGFpbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pcS1ibG9nLWRldGFpbCBhLFxuLmlxLWJsb2ctZGV0YWlsIC5ibG9nLXRpdGxlIGEgaDUge1xuICBjb2xvcjogIzMzMztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4ubGlzdC1pbmxpbmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaXEtYmxvZy1kZXRhaWwgYTpob3Zlcixcbi5pcS1ibG9nLWRldGFpbCAuYmxvZy10aXRsZSBhOmhvdmVyIGg1IHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1ibG9nLWRldGFpbCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuIH1cblxuIC5pcS1ibG9nLWRldGFpbCBhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiB9XG5cbi5pcS1ibG9nLWRldGFpbCBhLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtYmxvZy1kZXRhaWwgYSBpIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1ibG9nLW1ldGEge1xuICBtYXJnaW46IDE1cHggMCAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmlxLWJsb2ctbWV0YSB1bCBsaSB7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaXEtYmxvZy1tZXRhIHVsIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5cbi5ibG9nLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDBweCAtIDMycHgpICFpbXBvcnRhbnQ7XG59XG5cblxuLyp2aWRlbyB2aW1lbyBhbmQgeW91dHViZSovXG5cbi5pcS1ib2xnLXZpZGVvIHtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNTYuNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmlxLWJvbGctdmlkZW8gdmlkZW8sXG4uaXEtYm9sZy12aWRlbyBlbWJlZCxcbi5pcS1ib2xnLXZpZGVvIGlmcmFtZSxcbi5pcS1ib2xnLXZpZGVvIG9iamVjdCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cblxuLypibG9nLWVudHJ5LWF1ZGlvKi9cblxuLm1lZGlhLXdyYXBwZXIgdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGxheWVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICBPdXIgY2xpZW50c1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtb3VyLWNsaWVudHMge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VkZWRlZDtcbn1cblxuLmlxLW91ci1jbGllbnRzIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmlxLW91ci1uZXcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cblxuLyogY2xpZW50cyBCb3gqL1xuXG4uaXEtY2xpZW50cy1ib3gge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG4uaXEtY2xpZW50cy1ib3ggLmNsaWVudHMgLmNsaWVudHMtYnJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbn1cblxuLmlxLWNsaWVudHMtYm94IHVsIGxpIHtcbiAgd2lkdGg6IDMzLjMzJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pcS1jbGllbnRzLWJveCB1bCBsaS5zbWFsbCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5pcS1jbGllbnRzLWJveCB1bCBsaTpudGgtY2hpbGQoM24pIHtcbiAgYm9yZGVyLXJpZ2g6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJzY3JpYmUgT3VyIE5ld3NsZXR0ZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLW5ld3NsZXR0ZXIgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogNzIlO1xufVxuXG4uaXEtbmV3c2xldHRlciAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaXEtbmV3c2xldHRlciAuZm9ybS1ncm91cCB7XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5pcS1uZXdzbGV0dGVyIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IGluIFRvdWNoXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1mb290ZXItYm94IC5pcS1pY29uIGkge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xufVxuXG4uaXEtZm9vdGVyLWJveCAuZm9vdGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5mby1zaGFyZSB7XG4gIG1hcmdpbjogMzBweCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5pbmZvLXNoYXJlIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDBweCA1cHg7XG59XG5cbi5pbmZvLXNoYXJlIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmluZm8tc2hhcmUgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG4gIGJvcmRlci1jb2xvcjogIzRhYzRmMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb290ZXItY29weXJpZ2h0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZmVmZWY7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvb3RlciBJbmZvXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5mb290ZXItaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3Rlci1pbmZvIC5tYXAge1xuICBib3JkZXI6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xufVxuXG4uaXEtZ2V0LWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbn1cblxuLmNvbnRhY3QtZm9ybSAuc2VjdGlvbi1maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY29udGFjdC1mb3JtIC5zZWN0aW9uLWZpZWxkIGlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGNsZWFyOiBib3RoO1xuICBjb2xvcjogI2I2YjZiNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbn1cblxuLmNvbnRhY3QtZm9ybSAuc2VjdGlvbi1maWVsZCBpbnB1dDpmb2N1cyxcbi5jb250YWN0LWZvcm0gLnNlY3Rpb24tZmllbGQudGV4dGFyZWEgdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGFjNGYzO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFjdC1mb3JtIC5zZWN0aW9uLWZpZWxkLnRleHRhcmVhIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI2I2YjZiNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxNXB4IDAgMCAyMHB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbiNmb3JtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNzdWNjZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhY3QtaW5mbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDFweDtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4uaW5mby1zaGFyZSB7XG4gIG1hcmdpbjogMCAwO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW5mby1zaGFyZSBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuXG4uaW5mby1zaGFyZSBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbmZvLXNoYXJlIGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGFjNGYzO1xuICBib3JkZXItY29sb3I6ICM0YWM0ZjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9vdGVyIDJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxMTExMTE7XG59XG5cbi5pcS1mb290ZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uaXEtZm9vdGVyLmdyYXktZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuXG4vKkNvbnRhY3QqL1xuXG4uaXEtZm9vdGVyIC5pcS1jb250YWN0IC5jb250YWN0LWJsb2NrIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmlxLWZvb3RlciAuaXEtY29udGFjdCAuY29udGFjdC1ibG9jayAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pcS1mb290ZXIgLmlxLWNvbnRhY3QgLmNvbnRhY3QtYmxvY2sgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmlxLWZvb3RlciAuaXEtY29udGFjdCAuY29udGFjdC1ibG9jayBpIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtZm9vdGVyIC5pcS1jb250YWN0IC5jb250YWN0LWJsb2NrIC5jb250ZW50IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuXG4vKk1lbnUqL1xuXG4uaXEtZm9vdGVyIC5mb290ZXItbWVudSBsaSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlxLWZvb3RlciAuZm9vdGVyLW1lbnUgbGkgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pcS1mb290ZXIgLmZvb3Rlci1tZW51IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuXG4vKlBvcHVsYXIgUG9zdHMqL1xuXG4uaXEtZm9vdGVyIC5pcS1wb3N0IGxpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5pcS1mb290ZXIgLnBvc3QtYmxvZyB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pcS1mb290ZXIgLnBvc3QtYmxvZyBhIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlxLWZvb3RlciAucG9zdC1ibG9nIGE6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLWZvb3RlciAucG9zdC1ibG9nIC5pcS1kYXRlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmlxLWZvb3RlciAucG9zdC1ibG9nIGkge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pcS1mb290ZXIgLmlxLXBvc3QgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaXEtZm9vdGVyIC5wb3N0LWltZyB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uaXEtZm9vdGVyIC5wb3N0LWltZyBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDY1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5pcS1mb290ZXIgdWwge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuXG4vKk5ld3NsZXR0ZXIqL1xuXG4uaXEtZm9vdGVyIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmlxLWZvb3RlciAubmV3c2xldHRlci1mb3JtIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG59XG5cbi5pcS1mb290ZXIgLm5ld3NsZXR0ZXItZm9ybSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pcS1mb290ZXIgLm5ld3NsZXR0ZXItZm9ybSAuYnV0dG9uIHtcbiAgcGFkZGluZzogMTFweCAyMHB4IDExcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0cHggNHB4IDBweFxufVxuXG5cbi8qQ29weXJpZ2h0Ki9cblxuLmlxLWZvb3RlciAuaXEtY29weXJpZ2h0LFxuLmlxLWZvb3RlciAuaXEtY29weXJpZ2h0IGEge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmlxLWZvb3RlciAuaXEtY29weXJpZ2h0IGE6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLWZvb3RlciAuZm9vdGVyLWJvdHRvbSB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb290ZXIgM1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtZm9vdGVyMyB7XG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XG59XG5cbi5pcS1mb290ZXIzIC5mb290ZXItdG9wIHtcbiAgYmFja2dyb3VuZDogIzI0MjQyNDtcbn1cblxuLmlxLWZvb3RlcjMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlxLWZvb3RlcjMgaHIge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyMzIzMjtcbn1cblxuLmlxLWZvb3RlcjMgLmxvZ28gaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cblxuLypNZW51Ki9cblxuLmlxLWZvb3RlcjMgLm1lbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlxLWZvb3RlcjMgLm1lbnUgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyMyAubWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1mb290ZXIzIC5vZmZpY2UtZGF5IGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlxLWZvb3RlcjMgLm9mZmljZS1kYXkgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyMyAub2ZmaWNlLWRheSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cblxuLypMaW5rKi9cblxuLmlxLWZvb3RlcjMgLmxpbmsgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyMyAubGluayBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cblxuLypTb2NpYWwgTWVkaWEqL1xuXG4uaXEtZm9vdGVyMyAuaXEtbWVkaWEtYmxvZyBsaSB7XG4gIG1hcmdpbjogMCAwIDAgNHB4O1xufVxuXG4uaXEtZm9vdGVyMyAuaXEtbWVkaWEtYmxvZyBsaSBhIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyLCAyMTYsIDExMywgMS4wKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGFjNGYzO1xufVxuXG4uaXEtZm9vdGVyMyAuaXEtbWVkaWEtYmxvZyBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyLCAyMTYsIDExMywgLjApO1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuXG4vKmZvb3Rlci13aWRnZXQqL1xuXG4uaXEtZm9vdGVyMyAuaXEtY29udGFjdCBsaSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5pcS1mb290ZXIzIC5pcS1jb250YWN0IGkge1xuICBjb2xvcjogIzRhYzNmMztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHdpZHRoOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4uaXEtZm9vdGVyMyAuaXEtY29udGFjdCBwIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5cbi8qVHdlZXRlciovXG5cbi5pcS1mb290ZXIzIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYge1xuICBvcGFjaXR5OiAxO1xuICB0b3A6IGluaGVyaXQ7XG4gIHRvcDogMTUlO1xuICBib3R0b206IGluaGVyaXQ7XG59XG5cbi5pcS1mb290ZXIzIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0IHtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuLmlxLWZvb3RlcjMgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYge1xuICBsZWZ0OiAyMCU7XG59XG5cbi5pcS1mb290ZXIzIC5vd2wtY2Fyb3VzZWw6aG92ZXIgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgbGVmdDogMjAlO1xufVxuXG4uaXEtZm9vdGVyMyAub3dsLWNhcm91c2VsOmhvdmVyIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG4gIHJpZ2h0OiAyMCU7XG59XG5cbi5pcS1mb290ZXIzIC50d2VldC1pbWcge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5pcS1mb290ZXIzIC50d2VldC1pbWcgaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmlxLWZvb3RlcjMgLnR3ZWV0LWluZm8ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5pcS1mb290ZXIzIC50d2VldC1pbmZvIGEge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaXEtZm9vdGVyMyAudHdlZXQtaW5mbyBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS1mb290ZXIzIC50d2VldC1pbmZvIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uaXEtZm9vdGVyMyAudHdlZXQtaW5mbyBpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLypDb3B5cmlnaHQqL1xuXG4uaXEtZm9vdGVyMyAuaXEtY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pcS1mb290ZXIzIC5pcS1jb3B5cmlnaHQgYSB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtZm9vdGVyMyAuaXEtY29weXJpZ2h0IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4vKmJ1aWxkKi9cblxuLmlxLWZvb3RlcjMgLmJ1aWxkIGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1mb290ZXIzIC5idWlsZCBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pcS1mb290ZXIzIC5idWlsZCBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cblxuLyphYm91dCovXG5cbi5pcS1mb290ZXIzIC5hYm91dCBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaXEtZm9vdGVyMyAuYWJvdXQgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyMyAuYWJvdXQgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qU3VwcG9ydCovXG5cbi5pcS1mb290ZXIzIC5zdXBwb3J0IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1mb290ZXIzIC5zdXBwb3J0IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlxLWZvb3RlcjMgLnN1cHBvcnQgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qQ29udGFjdCovXG5cbi5pcS1mb290ZXIzIC5jb250YWN0IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1mb290ZXIzIC5jb250YWN0IGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlxLWZvb3RlcjMgLmNvbnRhY3QgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9vdGVyIDRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWZvb3RlcjQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pcS1mb290ZXI0IC5jb250YWluZXItZmx1aWQge1xuICBwYWRkaW5nOiAwIDkwcHg7XG59XG5cbi5pcS1mb290ZXI0IC5pcS12aWRlbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDIuMTtcbiAgei1pbmRleDogOTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtZm9vdGVyNCAuaXEtdmlkZW8gaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cblxuLypNZW51Ki9cblxuLmlxLWZvb3RlcjQgLm1lbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmlxLWZvb3RlcjQgLm1lbnUgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyNCAubWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cblxuLypMaW5rKi9cblxuLmlxLWZvb3RlcjQgLmxpbmsgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtZm9vdGVyNCAubGluayBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cblxuLypTb2NpYWwgTWVkaWEqL1xuXG4uaXEtZm9vdGVyNCAuaXEtbWVkaWEtYmxvZyBsaSB7XG4gIG1hcmdpbjogMCAwIDAgNHB4O1xufVxuXG4uaXEtZm9vdGVyNCAuaXEtbWVkaWEtYmxvZyBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhYzRmMztcbn1cblxuLmlxLWZvb3RlcjQgLmlxLW1lZGlhLWJsb2cgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM2NjY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qZm9vdGVyLXdpZGdldCovXG5cbi5pcS1mb290ZXI0IC5pcS1jb250YWN0IGxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmlxLWZvb3RlcjQgLmlxLWNvbnRhY3QgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5pcS1mb290ZXI0IC5pcS1jb250YWN0IHAge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cblxuLypDb3B5cmlnaHQqL1xuXG4uaXEtZm9vdGVyNCAuaXEtY29weXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5pcS1mb290ZXI0IC5pcS1jb3B5cmlnaHQgYSB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtZm9vdGVyNCAuaXEtY29weXJpZ2h0IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICBCcmVhZGNydW1iIElubmVyIFBhZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWJyZWFkY3J1bWIge1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXEtYnJlYWRjcnVtYi10aXRsZSAudGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5pcS1icmVhZGNydW1iLXRpdGxlIC50aXRsZSBzcGFuIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uaXEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gIHBhZGRpbmc6IDE0cHggMjVweDtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTMycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaXEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaSBhIHtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5pcS1icmVhZGNydW1iIC5icmVhZGNydW1iIGxpIGEgaSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmlxLWJyZWFkY3J1bWIgLmJyZWFkY3J1bWIgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaSB7XG4gIGNvbG9yOiAjMmMzZTUwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaS5hY3RpdmUge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLWJyZWFkY3J1bWIgLmJyZWFkY3J1bWI+bGkrbGk6YmVmb3JlIHtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cblxuLypwYWdpbmF0aW9uLW5hdiovXG5cbi5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICBib3JkZXItY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5wYWdpbmF0aW9uIC5wYWdlLWxpbmsge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLnBhZ2luYXRpb24gLnBhZ2UtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2cgUGFnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcGFnZS1ibG9nIC5pcS1ibG9nLWJveCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi5pcS1ibG9nLWJveCAuaXEtZ2V0LWluIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlxLXBvc3QtYXV0aG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cblxuLmlxLXBvc3QtYXV0aG9yLXBpYyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtcG9zdC1hdXRob3IgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaXEtcG9zdC1hdXRob3IgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuXG4vKiBDb21tZW50cyBCb3ggKi9cblxuLmlxLWNvbW1lbnQtbGlzdCBsaSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1jb21tZW50LWxpc3QgLmlxLWNvbW1lbnRzLW1lZGlhIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaXEtY29tbWVudC1saXN0IGxpOmxhc3QtY2hpbGQgLmlxLWNvbW1lbnRzLW1lZGlhIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pcS1jb21tZW50LWxpc3QgdWwge1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5pcS1jb21tZW50LWxpc3QgLmlxLWNvbW1lbnRzLXBob3RvIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmlxLWNvbW1lbnQtbGlzdCAuaXEtY29tbWVudHMtcGhvdG8gYSBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaXEtY29tbWVudC1saXN0IC5pcS1jb21tZW50cy1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xufVxuXG4uaXEtY29tbWVudC1saXN0IC5pcS1jb21tZW50cy1pbmZvIC50aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi5pcS1jb21tZW50LWxpc3QgLmlxLWNvbW1lbnQtbWV0YWRhdGEge1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaXEtY29tbWVudC1saXN0IC5pcS1jb21tZW50LW1ldGFkYXRhIGEge1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmlxLWNvbW1lbnQtbGlzdCAuaXEtY29tbWVudC1tZXRhZGF0YSBpIHtcbiAgcGFkZGluZy1yaWdodDogN3B4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLWNvbW1lbnQtbGlzdCAucmVwbHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDJweCAxNnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pcS1jb21tZW50LWxpc3QgLmlxLWNvbW1lbnRzLW1lZGlhIC5pcS1jb21tZW50cy1pbmZvIC5yZXBseSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaXEtY29tbWVudC1saXN0IC5pcS1jb21tZW50cy1pbmZvIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIC0gU2lkZUJhclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtcG9zdC1zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaXEtc2lkZWJhci13aWRnZXQge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmlxLXNpZGViYXItd2lkZ2V0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaXEtc2lkZWJhci13aWRnZXQgLmlxLXdpZGdldC10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuLyp3aWRnZXQtbWVudSovXG5cbi5pcS13aWRnZXQtbWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIGxpIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtd2lkZ2V0LW1lbnUgaSB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uaXEtd2lkZ2V0LW1lbnUgdWwgbGkgYSBzcGFuIHtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pcS13aWRnZXQtbWVudSB1bCBsaSBhIHNwYW46aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtd2lkZ2V0LW1lbnUgdWwgbGkuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIGxpLmhvdmVyIGEge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIGxpLmhvdmVyIGEgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIHVsIGxpIGEgc3BhbiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaXEtd2lkZ2V0LW1lbnUgdWwgdWwgbGkgYSBzcGFuOmhvdmVyIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS13aWRnZXQtbWVudSB1bCB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIHVsIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIHVsIGE6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXdpZGdldC1tZW51IHVsIGxpLmFjdGl2ZSBpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG5cbi8qU2lkZUJhciAtIFNlYXJjaCovXG5cbi5pcS1zaWRlYmFyLXdpZGdldCAuaXEtd2lkZ2V0LXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlxLXNpZGViYXItd2lkZ2V0IC5pcS13aWRnZXQtc2VhcmNoIGlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgY29sb3I6ICMyYzNlNTA7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcS1zaWRlYmFyLXdpZGdldCAuaXEtd2lkZ2V0LXNlYXJjaCBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5pcS1zaWRlYmFyLXdpZGdldCAuaXEtd2lkZ2V0LXNlYXJjaCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogOHB4O1xuICBjb2xvcjogIzRhYzRmMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlxLXNpZGViYXItd2lkZ2V0IC5pcS13aWRnZXQtc2VhcmNoIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qU2lkZUJhciAtIFBvc3RzKi9cblxuLmlxLXNpZGViYXItd2lkZ2V0IC5pcS1yZWNlbnQtcG9zdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5pcS1zaWRlYmFyLXdpZGdldCAuaXEtcmVjZW50LXBvc3QgLm1lZGlhLWJvZHk+YSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uaXEtc2lkZWJhci13aWRnZXQgLmlxLXJlY2VudC1wb3N0IC5tZWRpYS1ib2R5PmE6aG92ZXIge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXNpZGViYXItd2lkZ2V0IC5pcS1yZWNlbnQtcG9zdCAubWVkaWEtYm9keSBzcGFuIHtcbiAgY29sb3I6ICM2NjY2NjY7XG59XG5cbi5pcS1zaWRlYmFyLXdpZGdldCAuaXEtcmVjZW50LXBvc3QgLm1lZGlhLWJvZHkgc3BhbiAuZmEge1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cblxuLypTaWRlQmFyIC0gVGFncyovXG5cbi5pcS10YWdzIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBtYXJnaW46IDAgMCAxNXB4O1xufVxuXG4uaXEtdGFncyBsaSBhIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNjY2O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmlxLXRhZ3MgbGkgYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzRhYzRmMztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cblxuLyogTWV0YSAtIFNpZGVCYXIgKi9cblxuLmlxLXdpZGdldC1hcmNoaXZlcyBsaSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uaXEtd2lkZ2V0LWFyY2hpdmVzIGxpIGEge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLmlxLXdpZGdldC1hcmNoaXZlcyBsaSBhIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaXEtd2lkZ2V0LWFyY2hpdmVzIGxpIGE6aG92ZXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQwNCBFcnJvclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtZXJyb3IgLmJpZy10ZXh0IHtcbiAgZm9udC1zaXplOiAxODBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMTgwcHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaXEtZXJyb3IgaDYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaXEtZXJyb3IgLmZvcm0taW5saW5lLmlxLXN1YnNjcmliZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLWVycm9yIC5pcS1zdWJzY3JpYmUgLmZvcm0tZ3JvdXAge1xuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pcS1lcnJvciAuaXEtc3Vic2NyaWJlIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb21pbmcgU29vblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtY29taW5nIC5iaWctdGV4dCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmlxLWNvbWluZyBpbWcge1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi5pcS1jb21pbmcgLmZvcm0taW5saW5lLmlxLXN1YnNjcmliZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLWNvbWluZyAuaXEtc3Vic2NyaWJlIC5mb3JtLWdyb3VwIHtcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaXEtY29taW5nIC5pcS1zdWJzY3JpYmUgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5pcS1jb21pbmcgLmNvdW50ZG93bi10aW1lciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5pcS1jb21pbmcgLmNvdW50ZG93bi10aW1lciBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLmlxLWNvbWluZyAuY291bnRkb3duLXRpbWVyIC50aW1lciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5pcS1jb21pbmcgLmNvdW50ZG93bi10aW1lciAudGltZXIgLnRpbWVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaXEtY29taW5nIC5jb3VudGRvd24tdGltZXIgLnRpbWVyIC50aW1lci13cmFwcGVyIC50aW1lIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogMCA1MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmlxLWNvbWluZyAuY291bnRkb3duLXRpbWVyIC50aW1lciAudGltZXItd3JhcHBlciAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2NvdW50ZG93biB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogNTBweCAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNjb3VudGRvd24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNjb3VudGRvd24gbGkgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogMCAzMHB4O1xufVxuXG4jY291bnRkb3duIGxpLnNlcGVyYXRvciB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbiNjb3VudGRvd24gbGkgcCB7XG4gIGNvbG9yOiAjYTdhYmIxO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGphcmFsbGF4XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5qYXJhbGxheCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbn1cblxuLmphcmFsbGF4Pi5qYXJhbGxheC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiBzdXBwb3J0IGZvciBwbHVnaW4gaHR0cHM6Ly9naXRodWIuY29tL2JmcmVkLWl0L29iamVjdC1maXQtaW1hZ2VzICovXG4gIGZvbnQtZmFtaWx5OiAnb2JqZWN0LWZpdDpjb3ZlcjsgJztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgVEVSTVMgT0YgU0VSVklDRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udGVybXMtb2Ytc2VydmljZSAuYnRuLmJ0bi1saW5rIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRlcm1zLW9mLXNlcnZpY2UgLmJ0bi5idG4tbGluay5jb2xsYXBzZWQge1xuICBjb2xvcjogIzMzMztcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9XTCBDYXJvdXNlbFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ub3dsLWNhcm91c2VsIC5vd2wtbmF2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgbGVmdDogLTglO1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1pbmRlbnQ6IGluaGVyaXQ7XG4gIHJpZ2h0OiAtOCU7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIHJpZ2h0IDAuM3MgZWFzZSAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgcmlnaHQgMC4zcyBlYXNlIDBzO1xuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIHJpZ2h0IDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIHJpZ2h0IDAuM3MgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIHJpZ2h0IDAuM3MgZWFzZSAwcztcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLW5hdiBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLW5hdiBpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgY29sb3I6ICNmZmY7XG59XG5cblxuLyogRG90cyAqL1xuXG4ub3dsLWNhcm91c2VsIC5vd2wtY29udHJvbHMgLm93bC1kb3Qge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1kb3RzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdCBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW46IDBweCAzcHg7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdDpob3ZlciBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhYzRmMztcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhYzRmMztcbn1cblxuXG4vKiBBcnJvdy0xICovXG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtaW5kZW50OiBpbmhlcml0O1xuICB0b3A6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiAub3dsLXByZXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgbGVmdDogLTQ0cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZSAwcywgbGVmdCAwLjNzIGVhc2UgMHM7XG59XG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiAub3dsLW5leHQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWluZGVudDogaW5oZXJpdDtcbiAgcmlnaHQ6IC00NHB4O1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCByaWdodCAwLjNzIGVhc2UgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMHMsIHJpZ2h0IDAuM3MgZWFzZSAwcztcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCByaWdodCAwLjNzIGVhc2UgMHM7XG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCByaWdodCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDBzLCByaWdodCAwLjNzIGVhc2UgMHM7XG59XG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiBpIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgzNCwgMzQsIDM0LCAwLjcpO1xuICBwYWRkaW5nOiAwcHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG59XG5cbi5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiBpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbn1cblxuLm93bC1jYXJvdXNlbC5hcnJvdy0xIC5vd2wtbmF2IC5vd2wtcHJldiB7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuXG4ub3dsLWNhcm91c2VsLmFycm93LTEgLm93bC1uYXYgLm93bC1uZXh0IHtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xufVxuXG4ub3dsLWNhcm91c2VsLmFycm93LTEgLm93bC1zdGFnZS1vdXRlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0aW1vbmlhbFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtdGVzdGltb25pYWwgLmZlZWRiYWNrIC5pcS1hdnRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLmZlZWRiYWNrIC5pcS1hdnRhciBpbWcge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5mZWVkYmFjayAuaXEtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xuICBwYWRkaW5nOiAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggOHB4IDMwcHggLTIwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCA4cHggMzBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMzBweCAtMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pcS10ZXN0aW1vbmlhbCAuZmVlZGJhY2sgLmlxLWluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBib3R0b206IC0xNXB4O1xuICBsZWZ0OiAwNSU7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIGJvcmRlci10b3A6IDE1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxLjApO1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5mZWVkYmFjayAuaXEtaW5mby5saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5mZWVkYmFjayAuaXEtaW5mby5saWdodDpiZWZvcmUge1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5mZWVkYmFjayAuaXEtaW5mby5iZy1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG5cbi5pcS10ZXN0aW1vbmlhbCAuZmVlZGJhY2sgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLmZlZWRiYWNrIC5hdnRhci1uYW1lIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5mZWVkYmFjayBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLmZlZWRiYWNrIC5pcS1sZWFkIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLmlxLXN0YXIgaSB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLm93bC1wcmV2LFxuLmlxLXRlc3RpbW9uaWFsIC5vd2wtbmV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtdGVzdGltb25pYWwgLm93bC1wcmV2IGksXG4uaXEtdGVzdGltb25pYWwgLm93bC1uZXh0IGkge1xuICBjb2xvcjogI2RkZDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5vd2wtcHJldjpob3ZlciBpLFxuLmlxLXRlc3RpbW9uaWFsIC5vd2wtbmV4dDpob3ZlciBpIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG59XG5cbi5pcS10ZXN0aW1vbmlhbCAub3dsLXByZXYgLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzdcIjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pcS10ZXN0aW1vbmlhbCAub3dsLW5leHQgLmZhLWFuZ2xlLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTc4XCI7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5pcS1zdGFyIGkge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsIC5vd2wtY29udHJvbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzBweDtcbn1cblxuXG4vKiBUZXN0aW1vbmlhbCAyICovXG5cbi5pcS10ZXN0aW1vbmlhbDIgLm93bC1wcmV2LFxuLmlxLXRlc3RpbW9uaWFsMiAub3dsLW5leHQge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAub3dsLXByZXYgaSxcbi5pcS10ZXN0aW1vbmlhbDIgLm93bC1uZXh0IGkge1xuICBjb2xvcjogI2RkZDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAub3dsLXByZXY6aG92ZXIgaSxcbi5pcS10ZXN0aW1vbmlhbDIgLm93bC1uZXh0OmhvdmVyIGkge1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAub3dsLXByZXYgLmZhLWFuZ2xlLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxNzdcIjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLm93bC1uZXh0IC5mYS1hbmdsZS1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE3OFwiO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLmZlZWRiYWNrIC5pcS1hdnRhciB7XG4gIHdpZHRoOiA2MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaXEtdGVzdGltb25pYWwyIC5mZWVkYmFjayAuaXEtYXZ0YXIgaW1nIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLmZlZWRiYWNrIC5pcS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOGYzZjM7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uaXEtdGVzdGltb25pYWwyIC5mZWVkYmFjayAuaXEtaW5mby5icmQtbm9uZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAuZmVlZGJhY2sgLmlxLWluZm8ubGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAuZmVlZGJhY2sgLmlxLWluZm8ubGlnaHQ6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLmZlZWRiYWNrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAuZmVlZGJhY2sgcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaXEtdGVzdGltb25pYWwyIC5pcS1zdGFyIGkge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmlxLXRlc3RpbW9uaWFsMiAub3dsLWNvbnRyb2xzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMwcHg7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLmlxLWJyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwyIC50ZXN0aS13aGl0ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDMwcHggMzBweCAxMDBweCAzMHB4O1xufVxuXG4uaXEtdGVzdGltb25pYWwyIC50ZXN0aS13aGl0ZSAuZmVlZGJhY2sgLmlxLWluZm8ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgaW1nIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5pcS10ZXN0aW1vbmlhbDIgLmZlZWRiYWNrIHtcbiAgcGFkZGluZzogMCAyMDBweDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaWNpbmcgVGFibGVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnByaWNpbmctdGFibGUge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IDIwcHggMzFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAxKSwgMHB4IDhweCAyMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDEpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo5MDBweCkge1xuICAucHJpY2luZy10YWJsZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuXG4ucHJpY2luZy10YWJsZSAqIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ucHJpY2luZy1wbGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWYxZmY7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5wcmljaW5nLXBsYW46bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjkwMHB4KSB7XG4gIC5wcmljaW5nLXBsYW4ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UxZjFmZjtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIHBhZGRpbmc6IDI1cHggNTBweDtcbiAgfVxuICAucHJpY2luZy1wbGFuOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxufVxuXG4ucHJpY2luZy1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5wcmljaW5nLWhlYWRlciB7XG4gIGNvbG9yOiAjODg4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucHJpY2luZy1mZWF0dXJlcyB7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBtYXJnaW46IDUwcHggMCAyNXB4O1xufVxuXG4ucHJpY2luZy1mZWF0dXJlcy1pdGVtIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMWYxZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLnByaWNpbmctZmVhdHVyZXMtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWYxZmY7XG59XG5cbi5wcmljaW5nLXByaWNlIHtcbiAgY29sb3I6ICM0YWM0ZjM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5vdXItcHJpY2luZy0xIC5pcS1pY29uIHtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHdpZHRoOiA4NnB4O1xuICBsaW5lLWhlaWdodDogODZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzRhYzRmMztcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5vdXItcHJpY2luZy0xIC5pcS1pY29uIGkge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5vdXItcHJpY2luZy0xIC5pcS1pY29uOmhvdmVyIHtcbiAgY29sb3I6IHJnYigyNDQsIDI0NCwgMjQ0KTtcbiAgYmFja2dyb3VuZDogcmdiKDc0LCAxOTYsIDI0Myk7XG59XG5cblxuLyogcHJpY2luZyAwMSAqL1xuXG4uaXEtcHJpY2luZy0wMSB7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMmYyZjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmlxLXByaWNpbmctMDE6aG92ZXIsXG4uaXEtcHJpY2luZy0wMS5hY3RpdmUge1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhYzRmMztcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZWF0dXJlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1mZWF0dXJlIGg2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXEtZmVhdHVyZSBoNjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgYm90dG9tOiAtMTVweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4uaXEtZmVhdHVyZSBpbWcge1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5pcS1mZWF0dXJlIC5zdGVwLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaXEtZmVhdHVyZSAuc3RlcC1udW1iZXIge1xuICBiYWNrZ3JvdW5kOiAjNWJjOWY0O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5pcS1mZWF0dXJlLnN0YXAtbGVmdDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDc5JTtcbiAgdG9wOiAyMCU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL2Fycm93L2Rhc2hlZC1hcnJvdzEucG5nJykgbm8tcmVwZWF0IDAgMDtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDE3NHB4O1xuICBoZWlnaHQ6IDI5cHg7XG59XG5cbi5pcS1mZWF0dXJlLnN0YXAtcmlnaHQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA3OSU7XG4gIHRvcDogMjUlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9hcnJvdy9kYXNoZWQtYXJyb3cyLnBuZycpIG5vLXJlcGVhdCAwIDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxNzRweDtcbiAgaGVpZ2h0OiAyOXB4O1xufVxuXG4uZ2V0LWZlYXR1cmUgLmlxLXRleHQtcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiA0MCU7XG59XG5cbi5nZXQtZmVhdHVyZSBpbWcge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IC00MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cblxuLyogRmVhdHVyZSAwMSAqL1xuXG4uaXEtZmVhdHVyZS0wMSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaXEtZmVhdHVyZS0wMSAuaWNvbi1ib3gge1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiA4MnB4O1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcS1mZWF0dXJlLTAxOmhvdmVyIC5pY29uLWJveCB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtZmVhdHVyZS0wMSAuZmVhdHVyZS1ib2R5IHtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmFcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmlxLWFib3V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAtMTAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zb2Z0LWFib3V0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc29mdC1hYm91dCAuYm94LWltZzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IDE4MHB4O1xufVxuXG4uc29mdC1hYm91dCAuYm94LWltZzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICB0b3A6IC0xMDBweDtcbn1cblxuLnNvZnQtYWJvdXQgLmJveC1pbWczIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTgwcHg7XG4gIHRvcDogLTUwcHg7XG59XG5cbi5zb2Z0LWFib3V0IC5ib3gtaW1nNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDU4MHB4O1xuICB0b3A6IDEwMHB4O1xufVxuXG4uc29mdC1hYm91dCAuYm94LWltZzUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zb2Z0LWFib3V0IC5ib3gtaW1nNiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICByaWdodDogMTgwcHg7XG59XG5cbi5hYm91dC1tZSBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuXG4uYm94LW1haWwgaW1nIHtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWJvdHRvbTogLTIwMHB4O1xuICBtYXJnaW4tdG9wOiAtMTM3cHg7XG59XG5cbi5saWZlLXdvcmsgLmlxLXNvZnR3YXJlLWRlbW8tMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA0MCU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubGlmZS13b3JrIGltZyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTk3cHggLTk0cHggMHB4IC00OHB4IHJnYmEoMjA4LCAyNDAsIDI1MiwgMSk7XG4gIC1tb3otYm94LXNoYWRvdzogLTk3cHggLTk0cHggMHB4IC00OHB4IHJnYmEoMjA4LCAyNDAsIDI1MiwgMSk7XG4gIGJveC1zaGFkb3c6IC05N3B4IC05NHB4IDBweCAtNDhweCByZ2JhKDIwOCwgMjQwLCAyNTIsIDEpO1xufVxuXG4ubGlmZS13b3JrLTEgaW1nIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmlxLXRvb2wtZmVhdHVyZSB7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgei1pbmRleDogLTE7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkZlYXR1cmUgMVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi5pcS1mZWF0dXJlMSAuaXEtYmxvZyB7XG4gIHRvcDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgyLCAyMTYsIDExMywgMCk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uaXEtZmVhdHVyZTEge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDBweCAtIDMwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5pcS1mZWF0dXJlMSAuaXEtYmxvZyAuY29udGVudC1ibG9nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLWZlYXR1cmUxIC5pcS1ibG9nIC5jb250ZW50LWJsb2cgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pcS1mZWF0dXJlMSAuaXEtYmxvZyBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzRhYzRmMztcbiAgZm9udC1zaXplOiA1MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xufVxuXG4uaXEtZmVhdHVyZTEgLmlxLWJsb2cgaDUge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uaXEtZmVhdHVyZTEgLmlxLWJsb2c6aG92ZXIsXG4uaXEtZmVhdHVyZTEgLmlxLWJsb2cuYWN0aXZlIHtcbiAgdG9wOiAtNHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoNzQsIDE5NiwgMjQzLCAwLjkpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5GZWF0dXJlIDEwXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmlxLWZlYXR1cmUxMCAubGVmdCB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDc2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcS1mZWF0dXJlMTAgLmxlZnQgaSB7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDdweCAxMHB4IDEwcHggN3B4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pcS1mZWF0dXJlMTAgLnJpZ2h0IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmlxLWZlYXR1cmUxMCAucmlnaHQgcCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlxLWZlYXR1cmUxMDpob3ZlciAubGVmdCxcbi5pcS1mZWF0dXJlMTA6aG92ZXIgLmxlZnQgaSB7XG4gIGJvcmRlci1jb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLWZlYXR1cmUxMDpob3ZlciAubGVmdCBpIHtcbiAgYmFja2dyb3VuZDogIzRhYzRmMztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5pcS1mZWF0dXJlMTAgLmJyZCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xufVxuXG4ucmlnaHQtc2lkZSAuaXEtZmVhdHVyZTEwIC5sZWZ0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4ucmlnaHQtc2lkZSAuaXEtZmVhdHVyZTEwIC5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaXEtc2hhZG93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjRmNztcbn1cblxuLmlxLXNoYWRvdyBpIHtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzRhYzRmMztcbn1cblxuLmlxLXNoYWRvdyAuaXEtZm9udC13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5UZWFtcyAyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmlxLXRlYW0yIC50ZWFtLWNvbnRlbnQge1xuICB3aWR0aDogMjIwcHg7XG4gIGhlaWdodDogMjIwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggMHB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggMHB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAtbXMtYm94LXNoYWRvdzogNXB4IDVweCAwcHggcmdiKDAsIDAsIDAsIDAuMik7XG4gIC1vLWJveC1zaGFkb3c6IDVweCA1cHggMHB4IHJnYigwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbn1cblxuLmlxLXRlYW0yIC50ZWFtLWNvbnRlbnQgaW1nIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG59XG5cbi5pcS10ZWFtMiAudGVhbS1zb2NpYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS10ZWFtMiAudGVhbS1zb2NpYWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmlxLXRlYW0yIC50ZWFtLXNvY2lhbCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uaXEtdGVhbTIgLnRlYW0tc29jaWFsIGxpIGEge1xuICBwYWRkaW5nOiAwIDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEuMCk7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNGFjNGYzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uaXEtdGVhbTIgLnRlYW0tc29jaWFsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbn1cblxuLmlxLXRlYW0yIC5hdnRhci1uYW1lIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmlxLXRlYW0tbWFpbiB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMHB4IC0gMzBweCkgIWltcG9ydGFudDtcbn1cblxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblByaWNpbmcgNVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5pcS1wcmljaW5nLTUge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaXEtcHJpY2luZy01OmhvdmVyLFxuLmlxLXByaWNpbmctNS5hY3RpdmUge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWM0ZjM7XG59XG5cbi5pcS1wcmljaW5nLW1haW4ge1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDBweCAtIDEwcHgpICFpbXBvcnRhbnQ7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb290ZXIgM1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaXEtZm9vdGVyciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5pcS1mb290ZXJyIC5mb290ZXItdG9wIHtcbiAgYmFja2dyb3VuZDogIzI0MjQyNDtcbn1cblxuLmlxLWZvb3RlcnIge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmlxLWZvb3RlcnIgaHIge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzM7XG59XG5cbi5pcS1mb290ZXJyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG5cbi8qTWVudSovXG5cbi5pcS1mb290ZXJyIC5tZW51IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5pcS1mb290ZXJyIC5tZW51IGxpIGEge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmlxLWZvb3RlcnIgLm1lbnUgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG4uaXEtZm9vdGVyciAub2ZmaWNlLWRheSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pcS1mb290ZXJyIC5vZmZpY2UtZGF5IGxpIGEge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmlxLWZvb3RlcnIgLm9mZmljZS1kYXkgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qTGluayovXG5cbi5pcS1mb290ZXJyIC5saW5rIGxpIGEge1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmlxLWZvb3RlcnIgLmxpbmsgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjNGFjNGYzO1xufVxuXG5cbi8qZm9vdGVyLXdpZGdldCovXG5cbi5pcS1mb290ZXJyIC5pcS1jb250YWN0IGxpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmlxLWZvb3RlcnIgLmlxLWNvbnRhY3QgaSB7XG4gIGNvbG9yOiAjNGFjM2YzO1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5pcS1mb290ZXJyIC5pcS1jb250YWN0IHAge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKipcblRhYlxuKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLmlxLXRhYiAubmF2LXBpbGxzIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA5MDBweDtcbn1cblxuLmlxLXRhYiAubmF2LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlxLXRhYiAubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IGluaGVyaXQ7XG59XG5cbi5pcS1mb290ZXJyIC5saW5rIGxpIGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaXEtdGFiIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG5cbi5pcS10YWIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLmlxLXRhYiAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayxcbi5pcS10YWIgLm5hdi1waWxscyAubmF2LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyNSwgMjEwLCAyNDMsIDAuNyk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaXEtdGFiLmhvcml6b250YWwgLm5hdi1pdGVtIHtcbiAgd2lkdGg6IDE2JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5pcS10YWIuaG9yaXpvbnRhbCAubmF2LWl0ZW0gYSB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmlxLXRhYi5ob3Jpem9udGFsIC5uYXYtaXRlbSBhIGkge1xuICBmb250LXNpemU6IDQ0cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW4tc2VydmljZS1ib3h7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMHB4IC0gMzBweCkgIWltcG9ydGFudDtcbn1cblxuLnNlcnZpY2UtYm94IHtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zZXJ2aWNlLWJveDpob3ZlciB7XG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQgMXB4O1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgLjMpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZWRpYS5zZXJ2aWNlLWJveCBpIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNGFjM2YzO1xufVxuXG4uYW5pbWF0aW9ubmV3LXNoYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYW5pbWF0aW9uLXNoYXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMCU7XG4gIGxlZnQ6IDA7XG59XG5cbi5hbmltYXRpb24tc2hhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgbGVmdDogMDtcbn1cblxuLmFuaW1hdGlvbi1zaGFwIC5zaGFwLWJnLFxuLmFuaW1hdGlvbm5ldy1zaGFwIC5zaGFwLWJnIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNTE1cHg7XG4gIGhlaWdodDogNTE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNGFjNGYzIDAlLCAjNGFjNGYzIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XG4gIGFuaW1hdGlvbjogb25lLWFuaW1hdGVkIDVzIGluZmluaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5Aa2V5ZnJhbWVzIG9uZS1hbmltYXRlZCB7XG4gIDAlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XG4gIH1cbiAgMjUlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1OCUgNDIlIDc1JSAyNSUgLyA3NiUgNDYlIDU0JSAyNCU7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDMzJSA2NyUgLyA1NSUgMjclIDczJSA0NSU7XG4gIH1cbiAgNzUlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMyUgNjclIDU4JSA0MiUgLyA2MyUgNjglIDMyJSAzNyU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0d28tYW5pbWF0ZWQge1xuICAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNzAlIDMwJSAzMCUgNzAlIC8gNzAlIDcwJSAzMCUgMzAlO1xuICB9XG4gIDI1JSB7XG4gICAgYm9yZGVyLXJhZGl1czogNDAlIDgwJSAzMCUgOTAlIC8gNzIlIDY1JSAzNSUgMjglO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNjUlIDM1JSA0NSUgNTUlIC8gMjIlIDQ4JSA1MiUgNzglO1xuICB9XG4gIDc1JSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjQlIDc2JSAxMCUgOTAlIC8gNDQlIDY4JSAzMiUgNTYlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGhyZWUtYW5pbWF0ZWQge1xuICAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTIlIDg4JSA0MCUgNDAlIC8gMjAlIDE1JSA4NSUgODAlO1xuICB9XG4gIDI1JSB7XG4gICAgYm9yZGVyLXJhZGl1czogNzIlIDI4JSAzMCUgOTAlIC8gMTUlIDQ2JSA1NCUgODUlO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTIlIDg4JSA0MCUgNDAlIC8gMjAlIDE1JSA4NSUgODAlO1xuICB9XG4gIDc1JSB7XG4gICAgYm9yZGVyLXJhZGl1czogMTglIDgyJSAxMCUgOTAlIC8gMjQlIDY4JSAzMiUgNzYlO1xuICB9XG59XG5cbi5pcS1iYWRnZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmlxLWZhbmN5LWJveG5ldyB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxufVxuXG4uaXEtZmFuY3ktYm94bmV3OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYjtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgNHB4ICM0YWM0ZjM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcblxuIH1cblxuLmlxLWZhbmN5LWJveG5ldyAuaXEtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA4NnB4O1xuICB3aWR0aDogODZweDtcbiAgbGluZS1oZWlnaHQ6IDg2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM0YWM0ZjM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dCAwcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0IDBzO1xufVxuXG4uaXEtZmFuY3ktYm94bmV3IC5pcS1pY29uIGkge1xuICBmb250LXNpemU6IDQ2cHg7XG59XG5cbi5pcS1mYW5jeS1ib3huZXcgLmZhbmN5LWNvbnRlbnQgaDUge1xuICB6LWluZGV4OiA5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pcS1mYW5jeS1ib3huZXcgLmZhbmN5LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pcS13b3Jrcy1pbWdzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pcS1mYW5jeS1ib3huZXcudGV4dC1jZW50ZXIgLmljb24tYmcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFjNGYzO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjNGFjNGYzIDAlLCAjNGFjNGYzIDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYW5pbWF0aW9uOiBvbmUtYW5pbWF0ZWQgMTBzIGluZmluaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnV0dXJlLXNlcnZpY2VzIHtcbiAgcGFkZGluZzogNjBweCAxMHB4IDBweDtcbn1cblxuLmZ1dHVyZS1zZXJ2aWNlcyAuZnV0dXJlLWltZyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mdXR1cmUtc2VydmljZXMgaDQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2VydmljZXMtbGlzdCB7XG4gIG1hcmdpbjogMCAwIC0xMjBweDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VydmljZXMtbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZXJ2aWNlcy1saXN0IGxpLm9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzBweDtcbiAgYm90dG9tOiAwO1xufVxuXG4uc2VydmljZXMtbGlzdCBsaS50d28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMDBweDtcbiAgYm90dG9tOiAwO1xufVxuXG4uc2VydmljZXMtcGFnZSAuZnV0dXJlLXNlcnZpY2VzIHtcbiAgcGFkZGluZzogMzBweCAxMHB4IDBweDtcbn1cblxuLnNlYXJjaC1idG4gaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2VhcmNoLWJ0biBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoLWJ0biBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VhcmNoLWJ0biBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbiIsIi8qXG5cblRlbXBsYXRlOiBTb2Zib3ggLSBBbmd1bGFyIDggU29mdHdhcmUgbGFuZGluZyBwYWdlXG5BdXRob3I6IGlxb25pYy5kZXNpZ25cblZlcnNpb246IDEuMFxuRGVzaWduIGFuZCBEZXZlbG9wZWQgYnk6IGlxb25pYy5kZXNpZ25cblxuTk9URTogVGhpcyBmaWxlIGNvbnRhaW5zIHRoZSBzdHlsaW5nIGZvciByZXNwb25zaXZlIFRlbXBsYXRlLlxuXG4qL1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKCAgTWVkaWEgUXVlcmllcyAgKVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKioqKioqKioqKioqKioqKioqKi9cblxuQG1lZGlhKG1pbi13aWR0aDoxNjAxcHgpIHtcblx0LmdldC1mZWF0dXJlIGltZyB7XG5cdFx0d2lkdGg6IDc0JTtcblx0fVxuXHQuaXEtcHJpY2luZyAucHJpY2UtdGl0bGU6YWZ0ZXIge1xuXHRcdGJvdHRvbTogLTJweDtcblx0fVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEzOTlweCkge1xuXHQuaXEtYmFubmVyIC5iYW5uZXItdGV4dCBoMSB7XG5cdFx0Zm9udC1zaXplOiA1NnB4O1xuXHR9XG5cdC5jb3VudGVyLWluZm8taW1nIGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxuXHQuY291bnRlci1pbmZvIC53YXZlcy1ib3gge1xuXHRcdGxlZnQ6IDQ0JTtcblx0fVxuXHQuaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wNCxcblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDMge1xuXHRcdGJvcmRlcjogNDhweCBzb2xpZCAjNGFjNGYzO1xuXHRcdGhlaWdodDogNTAwcHg7XG5cdFx0d2lkdGg6IDUwMHB4O1xuXHR9XG5cdCNzb2Z0d2FyZS1mZWF0dXJlcyB7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0XHQvKnBhZGRpbmc6IDgwcHggMHB4OyovXG5cdH1cblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDIge1xuXHRcdGJvdHRvbTogMTMlO1xuXHR9XG5cdC5pcS1zb2Z0d2FyZS1kZW1vIHtcblx0XHR0b3A6IDgwcHg7XG5cdH1cblx0LmdldC1mZWF0dXJlIGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogLTg2cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdH1cblx0LmlxLWJyZWFkY3J1bWIgLmJhbm5lci1pbWcge1xuXHRcdG1heC13aWR0aDogMTIwJTtcblx0fVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEzNjVweCkge1xuXHQuaXEtYmFubmVyIC5iYW5uZXItdGV4dCBoMSB7XG5cdFx0Zm9udC1zaXplOiA1MHB4O1xuXHR9XG5cdC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcblx0XHRsZWZ0OiAtNCU7XG5cdH1cblx0Lm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQge1xuXHRcdHJpZ2h0OiAtNCU7XG5cdH1cblx0LmNvdW50ZXItaW5mby1pbWcgaW1nIHtcblx0XHR3aWR0aDogMTExJTtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG5cdC5jb3VudGVyLWluZm8gLndhdmVzLWJveCB7XG5cdFx0dG9wOiA0MSU7XG5cdFx0bGVmdDogNTAlO1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nMyB7XG5cdFx0cmlnaHQ6IDUwMHB4O1xuXHR9XG5cdC5pcS13b3Jrcy1pbWcge1xuXHRcdHdpZHRoOiAxMTAlO1xuXHR9XG5cdC5hbmltYXRpb24tc2hhcCAuc2hhcC1iZyxcblx0LmFuaW1hdGlvbm5ldy1zaGFwIC5zaGFwLWJnIHtcblx0XHR3aWR0aDogNDAwcHg7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblx0fVxuXHQuaXEtYnJlYWRjcnVtYiAuYmFubmVyLWltZyB7XG5cdFx0bWF4LXdpZHRoOiAxMTAlO1xuXHR9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6MTE5OXB4KSB7XG5cdC8qLS0tLS0tLS0tLS0tLS0tLVxuXHRTZWN0aW9uIHBhZGRpbmdcblx0LS0tLS0tLS0tLS0tLS0tLSovXG5cdC5vdmVydmlldy1ibG9jay1wdGIge1xuXHRcdHBhZGRpbmc6IDgwcHggMDtcblx0fVxuXHQub3ZlcnZpZXctYmxvY2stcHQge1xuXHRcdHBhZGRpbmc6IDgwcHggMCAwO1xuXHR9XG5cdC5vdmVydmlldy1ibG9jay1wYiB7XG5cdFx0cGFkZGluZzogMCAwIDgwcHg7XG5cdH1cblx0Lm92ZXJ2aWV3LWJsb2NrLXBiLmhvdy13b3JrcyB7XG5cdFx0cGFkZGluZzogODBweCAwO1xuXHR9XG5cdGhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2PmxpIHtcblx0XHRtYXJnaW46IDAgMjBweCAwIDA7XG5cdH1cblx0aGVhZGVyIC5jb250YWluZXItZmx1aWQsXG5cdC5pcS1iYW5uZXIgLmNvbnRhaW5lci1mbHVpZCxcblx0LmlxLWJhbm5lci0wNCAuY29udGFpbmVyLWZsdWlkIHtcblx0XHRwYWRkaW5nOiAwcHggNDVweDtcblx0fVxuXHQuaXEtYmFubmVyIC5iYW5uZXItdGV4dCBoMSB7XG5cdFx0Zm9udC1zaXplOiA0NHB4O1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IHAuaXEtbWItNDAge1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblx0LmlxLWJhbm5lciAuYmFubmVyLXRleHQge1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LmlxLWJhbm5lciAuYmFubmVyLWltZyB7XG5cdFx0d2lkdGg6IDExNiU7XG5cdH1cblx0LmlxLWJhbm5lciAuYmFubmVyLXRleHQgLmJhbm5lci1waG9uZSB7XG5cdFx0cmlnaHQ6IC0zMHB4O1xuXHR9XG5cdC5pcS1vYmplY3RzIC5pcS1vYmplY3RzLTAxIHtcblx0XHRvcGFjaXR5OiAwLjI7XG5cdH1cblx0LmlxLXdvcmtzLWltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblx0LmNvdW50ZXItaW5mby1pbWcgaW1nIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci1pbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2IHtcblx0XHRsZWZ0OiAwJTtcblx0fVxuXHQub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dCB7XG5cdFx0cmlnaHQ6IDAlO1xuXHR9XG5cdC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItY29udGVudCB7XG5cdFx0d2lkdGg6IDg1JTtcblx0XHRoZWlnaHQ6IDg1JTtcblx0fVxuXHQuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWxlZnQge1xuXHRcdHJpZ2h0OiAxMDAlO1xuXHR9XG5cdC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItcmlnaHQge1xuXHRcdGxlZnQ6IDEwMCU7XG5cdH1cblx0LmlxLXNvZnR3YXJlLWRlbW8ge1xuXHRcdHRvcDogMjMlO1xuXHR9XG5cdC5pcS1vYmplY3RzIC5pcS1vYmplY3RzLTA0LFxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZSAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0Ym9yZGVyOiA0OHB4IHNvbGlkICM0YWM0ZjM7XG5cdFx0aGVpZ2h0OiA0MDBweDtcblx0XHR3aWR0aDogNDAwcHg7XG5cdH1cblx0LmlxLW9iamVjdHMgLmlxLW9iamVjdHMtMDQge1xuXHRcdHRvcDogMTMlO1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAzIHtcblx0XHR0b3A6IDE1JTtcblx0fVxuXHQuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhIHtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAxIHtcblx0XHR0b3A6IDE2JTtcblx0fVxuXHQuY291bnRlciBpIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cdH1cblx0LmNvdW50ZXItaW5mbyAud2F2ZXMtYm94IHtcblx0XHR0b3A6IDI5JTtcblx0XHRsZWZ0OiA0MyU7XG5cdH1cblx0LmlxLW5ld3NsZXR0ZXIgLmZvcm0tZ3JvdXAge1xuXHRcdHdpZHRoOiA2NyU7XG5cdH1cblx0LmluZm8tc2hhcmUgbGkge1xuXHRcdG1hcmdpbjogMHB4IDJweDtcblx0fVxuXHQuY29udGFpbmVyIHtcblx0XHRtYXgtd2lkdGg6IDk0JTtcblx0fVxuXHQuY291bnRlciBsYWJlbCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5cdC5jb3VudGVyIHNwYW4ge1xuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0fVxuXHQuaXEtZm9vdGVyLWJveCAuaXEtaWNvbiBpIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDlweDtcblx0fVxuXHQuaXEtYmxvZy1tZXRhIHVsIGxpIHtcblx0XHRmb250LXNpemU6IDE1cHg7XG5cdH1cblx0LmlxLWJhbm5lci0wNCAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogNDZweDtcblx0fVxuXHQuaXEtYmFubmVyLTA0IC5iYW5uZXItdGV4dCBwLmlxLW1iLTQwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5Qcm9kdWN0LXdvcmtzIHtcblx0XHRwYWRkaW5nLWJvdHRvbTogODBweDtcblx0fVxuXHQuaXEtc29mdHdhcmUtZGVtbyB7XG5cdFx0aGVpZ2h0OiA3NSU7XG5cdFx0dG9wOiAyNiU7XG5cdH1cblx0LmlxLW1vcmUtaW5mbyAucm93LmlxLW10LTMwIHtcblx0XHRtYXJnaW46IDMwcHggMDtcblx0fVxuXHQub3VyLXByaWNpbmctMSB7XG5cdFx0cGFkZGluZy10b3A6IDgwcHg7XG5cdH1cblx0LmlxLWZlYXR1cmUtMDEgLm92ZXJ2aWV3LWJsb2NrLXB0YiB7XG5cdFx0cGFkZGluZy10b3A6IDA7XG5cdH1cblx0Lm91ci1wcmljaW5nIHtcblx0XHRwYWRkaW5nLXRvcDogMDtcblx0fVxuXHQubGlmZS13b3JrIC5pcS1zb2Z0d2FyZS1kZW1vLTEge1xuXHRcdHRvcDogMTUwcHg7XG5cdH1cblx0LmxpZmUtd29yay0xIGgyIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG5cdC5pcS10b29sLWZlYXR1cmUge1xuXHRcdG1hcmdpbi10b3A6IC00NXB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nMSB7XG5cdFx0cmlnaHQ6IDEyMHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nNiB7XG5cdFx0cmlnaHQ6IDEyMHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nMyB7XG5cdFx0cmlnaHQ6IDM1MHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nNCB7XG5cdFx0cmlnaHQ6IDUwMHB4O1xuXHRcdHRvcDogNjBweDtcblx0fVxuXHQuc29mdC1hYm91dCAuYm94LWltZzUge1xuXHRcdHRvcDogLTQwcHg7XG5cdH1cblx0LmJveC1tYWlsIGltZyB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogLTExMnB4O1xuXHR9XG5cdC5nZXQtZmVhdHVyZSAuaXEtdGV4dC1yaWdodCB7XG5cdFx0cGFkZGluZy1yaWdodDogMDtcblx0fVxuXHQuZ2V0LWZlYXR1cmUgaW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHR9XG5cdC5pcS10YWIgLm5hdi1pdGVtIGEge1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxuXHQuYW5pbWF0aW9uLXNoYXAgLnNoYXAtYmcsXG5cdC5hbmltYXRpb25uZXctc2hhcCAuc2hhcC1iZyB7XG5cdFx0d2lkdGg6IDMwMHB4O1xuXHRcdGhlaWdodDogMzAwcHg7XG5cdH1cblx0Lmhvdy13b3JrcyB7XG5cdFx0cGFkZGluZzogODBweCAwO1xuXHR9XG5cdC5vdmVydmlldy1ibG9jay1wYi5ob3ctd29ya3MgLmNvbnRhaW5lci1mbHVpZCBoMiB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHR9XG5cdC50ZXh0LWxlZnQuYWxpZ24tc2VsZi1jZW50ZXIgaDMge1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRsaW5lLWhlaWdodDogNDBweDtcblx0fVxuXHQubm8tZ3V0dGVycyAuaXEtc2hhZG93IGkge1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXHQuaXEtb2JqZWN0c25ldyAuaXEtb2JqZWN0cy0wNCB7XG5cdFx0Ym9yZGVyOiA0MHB4IHNvbGlkICM0YWM0ZjM7XG5cdFx0d2lkdGg6IDQwMHB4O1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdFx0dG9wOiA5JTtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0Ym9yZGVyOiA0MHB4IHNvbGlkICM0YWM0ZjM7XG5cdFx0d2lkdGg6IDQwMHB4O1xuXHRcdGhlaWdodDogNDAwcHg7XG5cdH1cblx0LmlxLXJtdC04MCB7XG5cdFx0bWFyZ2luLXRvcDogODBweDtcblx0fVxuXHRoNSB7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHR9XG5cdC5pcS1mYW5jeS1ib3gge1xuXHRcdHBhZGRpbmc6IDE0cHg7XG5cdH1cblx0LmlxLWZhbmN5LWJveG5ldyB7XG5cdFx0cGFkZGluZzogMjhweDtcblx0fVxuXHRoMyB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHR9XG5cbn1cblxuQG1lZGlhKG1heC13aWR0aDo5OTJweCkge1xuXHRoMiB7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR9XG5cdGhlYWRlciB7XG5cdFx0cGFkZGluZzogMTBweCAwO1xuXHR9XG5cdC5jb250YWluZXIge1xuXHRcdG1heC13aWR0aDogNzQlO1xuXHR9XG5cdC5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cdH1cblx0LmlxLWJhbm5lci0wMyAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzVweDtcblx0fVxuXHQuaXEtYmFubmVyLTAzIHtcblx0XHRwYWRkaW5nLWJvdHRvbTogMzBweDtcblx0fVxuXHQuaXEtYmFubmVyLTAzIC5iYW5uZXItdGV4dCBwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci1pbWcge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblx0LnItbXQtMzAge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblx0LnItbXQtNDAge1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdH1cblx0LmlxLWJhbm5lci0wMiAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogNTRweDtcblx0fVxuXHQuaXEtd29ya3MtYm94Lm5vLXNoYWRvdyB7XG5cdFx0cGFkZGluZzogMTVweCAyMHB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDIgLmJhbm5lci10ZXh0IHAge1xuXHRcdG1hcmdpbjogMCAwIDIwcHggMDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyIHNwYW4ge1xuXHRcdGNvbG9yOiAjNGFjNGYzO1xuXHR9XG5cdC5uYXZiYXItdG9nZ2xlciB7XG5cdFx0cGFkZGluZzogMHB4IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAzOHB4XG5cdH1cblx0Lm5hdmJhci10b2dnbGVyOmZvY3VzLFxuXHQubmF2YmFyLXRvZ2dsZXI6aG92ZXIge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cblx0aGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6OmJlZm9yZSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHRoZWFkZXIgLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdH1cblx0aGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXY+bGkge1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXHRoZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYSB7XG5cdFx0cGFkZGluZzogMTBweCAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0Y29sb3I6ICMzMzM7XG5cdH1cblx0aGVhZGVyI21haW4taGVhZGVyIC5uYXZiYXIgLm1lbnU+bGkge1xuXHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi1yaWdodDogMHB4O1xuXHR9XG5cdGhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmhvdmVyLFxuXHRoZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpmb2N1cyxcblx0aGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlLFxuXHRoZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6Zm9jdXMsXG5cdGhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpob3ZlciB7XG5cdFx0Y29sb3I6ICM0YWM0ZjM7XG5cdH1cblx0aGVhZGVyIC5idXR0b24sXG5cdGhlYWRlciAuYnV0dG9uLWxpbmUge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0I21haW4taGVhZGVyIGxpIGkge1xuXHRcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxuXHQuaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wMSB7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQuaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0dG9wOiA0MCU7XG5cdH1cbiAgLmxpZmUtd29yay0xIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblx0LmlxLW9iamVjdHMgLmlxLW9iamVjdHMtMDMge1xuXHRcdHRvcDogNjclO1xuXHR9XG5cdC5pcS1vYmplY3RzIC5pcS1vYmplY3RzLTA0IHtcblx0XHR0b3A6IDQ4JTtcblx0XHRyaWdodDogMDtcblx0fVxuXHQvKi5ob3ctd29ya3Mge1xuXHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdH0qL1xuXHQuaXEtYmFubmVyIC5pcS13YXZlcyAud2F2ZXMge1xuXHRcdHdpZHRoOiAxMHJlbTtcblx0XHRoZWlnaHQ6IDEwcmVtO1xuXHR9XG5cdC5pcS1iYW5uZXIgLmlxLXdhdmVzIHtcblx0XHRsZWZ0OiAtNTBweDtcblx0XHR0b3A6IC01MHB4O1xuXHR9XG5cdC5pcS1zb2Z0d2FyZS1kZW1vIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0b3A6IDA7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAyIHtcblx0XHRib3R0b206IDQ1JTtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZSAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0dG9wOiAyJTtcblx0XHRsZWZ0OiA1MCU7XG5cdH1cblx0LnNjcmVlbnNob3RzLXNsaWRlciB7XG5cdFx0bWluLWhlaWdodDogNDAwcHg7XG5cdH1cblx0LnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IHtcblx0XHR3aWR0aDogNjYlO1xuXHRcdGhlaWdodDogNjYlO1xuXHR9XG5cdC5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIHtcblx0XHR3aWR0aDogMzIlO1xuXHR9XG5cdC5jb3VudGVyLWluZm8gLndhdmVzLWJveCB7XG5cdFx0dG9wOiA0MCU7XG5cdFx0bGVmdDogNDclO1xuXHR9XG5cdC8qLmNvdW50ZXItaW5mby1pbWcgaW1nIHsgbWFyZ2luLWJvdHRvbTogLTg3cHg7IH0qL1xuXHQuaXEtb2JqZWN0cy1hc2tlZCAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0bGVmdDogNzMlO1xuXHR9XG5cdC5pcS1uZXdzbGV0dGVyIC5mb3JtLWdyb3VwIHtcblx0XHR3aWR0aDogNzUlO1xuXHR9XG5cdC5pcS1hc2tlZCB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXHQuaGVhZGluZy10aXRsZSBwIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5oZWFkaW5nLXRpdGxlIHtcblx0XHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDMgLmJhbm5lci1pbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1iYW5uZXItMDMgLndhdmVzLWJveCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMjMlO1xuXHRcdGxlZnQ6IDMyJTtcblx0fVxuXHQuaXEtYmFubmVyLTA0IC5iYW5uZXItdGV4dCB7XG5cdFx0bWFyZ2luLXRvcDogOCU7XG5cdH1cblx0LmlxLWZvb3RlciAuZm9vdGVyLXRvcCB7XG5cdFx0cGFkZGluZy1ib3R0b206IDQwcHg7XG5cdH1cblx0LlByb2R1Y3Qtd29ya3Mge1xuXHRcdHBhZGRpbmc6IDgwcHggMDtcblx0fVxuXHQuaXEtZmVhdHVyZS5zdGFwLWxlZnQ6YmVmb3JlIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5pcS1mZWF0dXJlLnN0YXAtcmlnaHQ6YmVmb3JlLFxuXHQuaXEtYmFubmVyLTA2IC5iYW5uZXItb2JqZWN0cyxcblx0LmlxLWJhbm5lci0wMi5uby1iZWZvcmUgLmJhbm5lci1vYmplY3RzIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5pcS1wcmljaW5nLTU6aG92ZXIsXG5cdC5pcS1wcmljaW5nLTUuYWN0aXZlIHtcblx0XHRtYXJnaW46IDAgNXB4O1xuXHR9XG5cdC5pcS10ZXN0aW1vbmlhbDIgLmZlZWRiYWNrIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5pcS1hc2tlZC0xIC5pcS1hY2NvcmRpb24ge1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXHQuaXEtY291bnRlci1ib3gtMSAuaGVhZGluZy10aXRsZSBwIHtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cdC5saWZlLXdvcmsgLmlxLXNvZnR3YXJlLWRlbW8tMSB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWFyZ2luLXRvcDogMTAwcHg7XG5cdFx0cG9zaXRpb246IGluaGVyaXQ7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5saWZlLXdvcmstMSBoMiB7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblx0fVxuXHQuaXEtdG9vbC1mZWF0dXJlIHtcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xuXHR9XG5cdC5pcS10b29sLWZlYXR1cmUgaDIge1xuXHRcdG1hcmdpbi10b3A6IDA7XG5cdH1cblx0LmlxLXRvb2wtZmVhdHVyZSB7XG5cdFx0cGFkZGluZy1ib3R0b206IDMwMHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nMSB7XG5cdFx0dG9wOiAxNTBweDtcblx0XHRyaWdodDogMzAwcHg7XG5cdH1cblx0LnNvZnQtYWJvdXQgLmJveC1pbWc2IHtcblx0XHR0b3A6IDE1MHB4O1xuXHRcdHJpZ2h0OiAzMDBweDtcblx0fVxuXHQuc29mdC1hYm91dCAuYm94LWltZzQge1xuXHRcdHJpZ2h0OiA3MDBweDtcblx0XHR0b3A6IDIzMHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nMyB7XG5cdFx0bGVmdDogMDtcblx0fVxuXHQuYWJvdXQtbWUgcCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5pcS1iYW5uZXItMDIuc3R5bGUtMSAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIGltZyxcblx0LmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDQgaW1nIHtcblx0XHR3aWR0aDogNzUlO1xuXHR9XG5cdC5pcS1iYW5uZXItMDIuc3R5bGUtMSAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAyIHtcblx0XHR3aWR0aDogMjUwcHg7XG5cdFx0aGVpZ2h0OiAyNTBweDtcblx0XHRsZWZ0OiAwO1xuXHR9XG5cdC5ib3gtbWFpbCBpbWcge1xuXHRcdGRpc3BsYXk6IG5vbmVcblx0fVxuXHQuZ2V0LWZlYXR1cmUgaW1nIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdC5iZy1mdWxsLWZlYXR1cmVzIC5jb250YWluZXItZmx1aWQubm8tcGFkZGluZyB7XG5cdFx0cGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmJnLWZ1bGwtZmVhdHVyZXMgLmQtaW5saW5lLWJsb2NrLnctMTAwLmgtMTAwLmlxLXBhcmFsbGF4IHtcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdH1cblx0LmlxLXRhYi5ob3Jpem9udGFsIC5uYXYtaXRlbSBhIHtcblx0XHRwYWRkaW5nOiAxMHB4IDZweDtcblx0fVxuXHQuaXEtYmFubmVyLTA4IC5iYW5uZXItaW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHR9XG5cdC5wYXR0ZXJuLWRvdCAuaXEtYWJvdXQsXG5cdC5pcS1jb3VudGVyLWJveC5wYXR0ZXJuLWRvdCAuaXEtYWJvdXQgaW1nIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cdC5pcS1yLW1iLTE1IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdC5pcS10YWIuaG9yaXpvbnRhbCAubmF2LWl0ZW0ge1xuXHRcdHdpZHRoOiAyNCU7XG5cdH1cblx0LmFsaWduLXNlbGYtY2VudGVyIGgzIHtcblx0XHRmb250LXNpemU6IDI3cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdH1cblx0LmJhbm5lci10ZXh0IC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiAuYWxpZ24tc2VsZi1jZW50ZXIgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0fVxuXHQuYmFubmVyLXRleHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIC5hbGlnbi1zZWxmLWNlbnRlciBoNSB7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IC53YXRjaC1pbWcge1xuXHRcdHJpZ2h0OiA4MiU7XG5cdH1cblx0LmlxLWJyZWFkY3J1bWIgLmJhbm5lci1hbmkge1xuXHRcdHdpZHRoOiAzMCVcblx0fVxuXHRoZWFkZXIubmV3LWhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhIHtcblx0XHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdH1cblx0aGVhZGVyLm5ldy1oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUge1xuXHRcdGNvbG9yOiAjNGFjNGYzO1xuXHR9XG5cdGhlYWRlciNtYWluLWhlYWRlciAubmF2YmFyIC5tZW51IGxpIC5zdWItbWVudSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRvcDogMCAhaW1wb3J0YW50O1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGJveC1zaGFkb3c6IG5vbmU7XG5cdH1cblx0LmlxLW5ld3NsZXR0ZXIge1xuXHRcdHBhZGRpbmc6IDgwcHggMDtcblx0fVxuXHQuaXEtdGVhbSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0fVxuXHQuaXEtY2xpZW50IHtcblx0XHRwYWRkaW5nOiAzMXB4O1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlbmV3IC5pcS1vYmplY3RzLTAyIHtcblx0XHRib3R0b206IDMyJTtcblx0fVxuXHQuaXEtYmFkZ2Uge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblx0LmlxLWFza2VkIC5jZW50ZXItYmxvY2sge1xuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdH1cblx0LmlxLWZhbmN5LWJveCB7XG5cdFx0cGFkZGluZzogMzBweDtcblx0fVxuXHQuc2VydmljZS1ib3gge1xuXHRcdG1hcmdpbi10b3A6IDE1cHg7XG5cdH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDo5NzlweCkge1xuXHQuY29udGFpbmVyIHtcblx0XHRtYXgtd2lkdGg6IDk0JTtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZSAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0bGVmdDogNDYlO1xuXHR9XG5cdC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItbGVmdCB7XG5cdFx0cmlnaHQ6IDg3JTtcblx0fVxuXHQuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXJpZ2h0IHtcblx0XHRsZWZ0OiA4NyU7XG5cdH1cblx0LmlxLWJhbm5lci0wNCAuYmFubmVyLWltZyB7XG5cdFx0bWFyZ2luLXRvcDogMzBweDtcblx0fVxuXHQuaXEtYmFubmVyLTA2IC5iYW5uZXItdGV4dCBwIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXHQuc29mdC1hYm91dCAuYm94LWltZzEge1xuXHRcdHRvcDogMTYwcHg7XG5cdFx0cmlnaHQ6IDIwMHB4O1xuXHR9XG5cdC5zb2Z0LWFib3V0IC5ib3gtaW1nNiB7XG5cdFx0dG9wOiAxNjBweDtcblx0XHRyaWdodDogMjAwcHg7XG5cdH1cblx0LnNvZnQtYWJvdXQgLmJveC1pbWc0IHtcblx0XHR0b3A6IDI3MHB4O1xuXHRcdHJpZ2h0OiA2MDBweDtcblx0fVxuXHQuc29mdC1hYm91dCAuYm94LWltZzMge1xuXHRcdHRvcDogLTEwMHB4O1xuXHRcdGxlZnQ6IC0zMHB4O1xuXHR9XG5cdC5hYm91dC1tZSBpbWcge1xuXHRcdHdpZHRoOiA0MCU7XG5cdH1cblx0LmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmlxLXRhYi5ob3Jpem9udGFsIC5uYXYtaXRlbSB7XG5cdFx0d2lkdGg6IDI2JTtcblx0fVxuXHQuaXEtci1tYi0xNSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaXEtYnJlYWRjcnVtYiAuYmFubmVyLWltZyB7XG5cdFx0bWF4LXdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1icmVhZGNydW1iIC5iYW5uZXItYW5pIHtcblx0XHR3aWR0aDogMjQlO1xuXHRcdHJpZ2h0OiAxNCU7XG5cdH1cblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDIge1xuXHRcdGJvdHRvbTogNDUlO1xuXHR9XG5cdC5pcS1vYmplY3RzLWFza2VkIC5pcS1vYmplY3RzLTAxIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5pcS1vYmplY3RzLWFza2VkIC5pcS1vYmplY3RzLTAzIHtcblx0XHRsZWZ0OiAzJTtcblx0fVxuXHQuYnV0dG9uIHtcblx0XHRwYWRkaW5nOiAxMHB4IDM2cHg7XG5cdH1cblx0IC5pcS1iYW5uZXItMTIgLmJhbm5lci10ZXh0IC5iYW5uZXItcGhvbmUge1xuXHQgXHRsZWZ0OiAtMjRweDtcblx0fVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XG5cdC8qLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFNlY3Rpb24gcGFkZGluZ1xuXHRcdC0tLS0tLS0tLS0tLS0tLS0qL1xuXHQub3ZlcnZpZXctYmxvY2stcHRiIHtcblx0XHRwYWRkaW5nOiA1MHB4IDA7XG5cdH1cblx0Lm92ZXJ2aWV3LWJsb2NrLXB0IHtcblx0XHRwYWRkaW5nOiA1MHB4IDAgMDtcblx0fVxuXHQub3ZlcnZpZXctYmxvY2stcGIge1xuXHRcdHBhZGRpbmc6IDAgMCA1MHB4O1xuXHR9XG5cdGgyIHtcblx0XHRmb250LXNpemU6IDM0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdH1cblx0aDMge1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXHQuaXEtYm94LXNoYWRvdyB7XG5cdFx0cGFkZGluZzogNjBweCAyMHB4IDA7XG5cdFx0bWFyZ2luLXRvcDogMDtcblx0fVxuXHQuY29udGFpbmVyIHtcblx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cdH1cblx0LmhlYWRpbmctdGl0bGUge1xuXHRcdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdH1cblx0LmlxLWJhbm5lciAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzhweDtcblx0fVxuXHQuaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wMSB7XG5cdFx0b3BhY2l0eTogMC4yO1xuXHR9XG5cdGhlYWRlciAuY29udGFpbmVyLWZsdWlkLFxuXHQuaXEtYmFubmVyIC5jb250YWluZXItZmx1aWQsXG5cdC5pcS1iYW5uZXItMDQgLmNvbnRhaW5lci1mbHVpZCB7XG5cdFx0cGFkZGluZzogMHB4IDE1cHg7XG5cdH1cblx0LmlxLWJhbm5lci0wNCAuYmFubmVyLXRleHQge1xuXHRcdG1hcmdpbi10b3A6IDEzJTtcblx0fVxuXHQuaXEtbW9yZS1pbmZvIC5yb3cuaXEtbXQtMzAgLmNvbC1zbS00IHtcblx0XHRtYXJnaW46IDE1cHggMDtcblx0fVxuXHQuaXEtb2JqZWN0cyAuaXEtb2JqZWN0cy0wNCxcblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDMge1xuXHRcdGJvcmRlcjogMzBweCBzb2xpZCAjNGFjNGYzO1xuXHRcdGhlaWdodDogMjgwcHg7XG5cdFx0d2lkdGg6IDI4MHB4O1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAzIHtcblx0XHRsZWZ0OiAzOSU7XG5cdH1cblx0LnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IHtcblx0XHR3aWR0aDogNDAlO1xuXHRcdGhlaWdodDogNDAlO1xuXHR9XG5cdC5zY3JlZW5zaG90cy1zbGlkZXIge1xuXHRcdG1pbi1oZWlnaHQ6IDI1MHB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDMgLmJhbm5lci1pbWcge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cblx0LmlxLWJhbm5lci0wMyAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0fVxuXHQucjQtbXQtMzAge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblx0LnI0LW10LTQwIHtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHR9XG5cdC5zbGlkZXItY29udGFpbmVyIC5zbGlkZXItbGVmdCB7XG5cdFx0cmlnaHQ6IDc0JTtcblx0fVxuXHQuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXJpZ2h0IHtcblx0XHRsZWZ0OiA3NCU7XG5cdH1cblx0LmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYSBzcGFuIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdCNjb21wYXJlLXNlcnZpY2VzIC5yb3cgLmNvbC1zbS0yLmFsaWduLXNlbGYtY2VudGVyIGgyIHtcblx0XHRtYXJnaW46IDIwcHggMCAzMHB4O1xuXHR9XG5cdC5pcS1uZXdzbGV0dGVyIC5mb3JtLWdyb3VwIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuXHQuaXEtbmV3c2xldHRlciAuZm9ybS1pbmxpbmUge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblx0LmlxLW5ld3NsZXR0ZXIgLmZvcm0taW5saW5lIC5idXR0b24ge1xuXHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHR9XG5cdC5mb290ZXItaW5mbyAubWFwIHtcblx0XHRoZWlnaHQ6IDM1MHB4O1xuXHRcdHBvc2l0aW9uOiBpbmhlcml0O1xuXHR9XG5cdC5pbmZvLXNoYXJlIHtcblx0XHRtYXJnaW46IDBweCAwIDA7XG5cdFx0dGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuXHR9XG5cdC5jb3VudGVyLWluZm8gLndhdmVzLWJveCB7XG5cdFx0dG9wOiA0NiU7XG5cdFx0bGVmdDogNDMlO1xuXHR9XG5cdC5pcS1iYW5uZXItMDIgLmJhbm5lci10ZXh0IGgxIHtcblx0XHRmb250LXNpemU6IDQ0cHg7XG5cdH1cblx0LmFjY29yZGlvbi1kZXRhaWxzIC5jb2wtc20tMyBpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1hbWF6aW5nLXRhYiAubmF2LXRhYnMgbGkgYSBpIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdH1cblx0LmlxLWJhbm5lci0wMiAuYmFubmVyLWltZyB7XG5cdFx0bWFyZ2luLWJvdHRvbTogLTIwcHg7XG5cdH1cblx0LmlxLWJhbm5lci0wMy5vdmVydmlldy1ibG9jay1wdCB7XG5cdFx0cGFkZGluZy10b3A6IDgwcHg7XG5cdH1cblx0LlByb2R1Y3Qtd29ya3Mge1xuXHRcdHBhZGRpbmc6IDUwcHggMDtcblx0fVxuXHQuaXEtZm9vdGVyIC5pbmZvLXNoYXJlIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblx0LmlxLWJhbm5lci0wNSBwIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblx0LnNvZnQtYWJvdXQsXG5cdC5pcS1iYW5uZXItMDIuc3R5bGUtMSAuYmFubmVyLW9iamVjdHMge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmlxLXRvb2wtZmVhdHVyZSB7XG5cdFx0cGFkZGluZy1ib3R0b206IDUwcHg7XG5cdH1cblx0LmZvb3RlciB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5pbmZvLXNoYXJlIHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0fVxuXHQuaXEtYmFubmVyLTAyIC5iYW5uZXItdmlkZW8ge1xuXHRcdHdpZHRoOiA0MDBweDtcblx0XHRoZWlnaHQ6IDIzMHB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDIuc3R5bGUtMSAuYnV0dG9uLWJsdWUtc2hhZG93LmlxLW1yLTMwIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDA7XG5cdH1cblx0LmlxLWJhbm5lci0wMi5zdHlsZS0xIC5iYW5uZXItaW1nIHtcblx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXHR9XG5cdC5pcS1mb290ZXIzIC5jb2wtbGctMy5jb2wtbWQtNi5jb2wtc20tNi5pcS1tdGItMjAge1xuXHRcdG1hcmdpbjogMTBweCAwO1xuXHR9XG5cdC5pcS1mb290ZXIzIC5saW5rLFxuXHQuaXEtZm9vdGVyMyAuaXEtY29weXJpZ2h0IHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1iYW5uZXItMDggcC5pcS1tYi00MCB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQuZHVtbXktZnJvbSAucm91bmRlZC5pcS1tYWxsLTIwIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMjBweDtcblx0fVxuXHQuaXEtYmFubmVyLndhdmUtb25lIC5iYW5uZXItdGV4dCB7XG5cdFx0bWFyZ2luLXRvcDogMTUlO1xuXHR9XG5cdC5pcS1iYW5uZXItMTEgLmNvbnRhaW5lci1mbHVpZCB7XG5cdFx0cGFkZGluZzogMjBweDtcblx0fVxuXHQuaXEtYmFubmVyLTExIC5iYW5uZXItdGV4dCBoMSB7XG5cdFx0Zm9udC1zaXplOiA0MHB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDkgLmZvcm0tZ3JvdXAge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1iYW5uZXItMDkgLmZvcm0taW5saW5lIC5idXR0b24ge1xuXHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHR9XG5cdC5pcS1uZXdzbGV0dGVyIC5mb3JtLWdyb3VwIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHR9XG5cdC5pcS10YWIuaG9yaXpvbnRhbCAubmF2LWl0ZW0ge1xuXHRcdHdpZHRoOiA0MyU7XG5cdH1cblx0LmFuaW1hdGlvbi1zaGFwIC5zaGFwLWJnLFxuXHQuYW5pbWF0aW9ubmV3LXNoYXAgLnNoYXAtYmcge1xuXHRcdHdpZHRoOiAyNTBweDtcblx0XHRoZWlnaHQ6IDI1MHB4O1xuXHR9XG5cdC5pcS1vYmplY3RzbmV3IC5pcS1vYmplY3RzLTA0IHtcblx0XHRib3JkZXI6IDIwcHggc29saWQgIzRhYzRmMztcblx0XHR3aWR0aDogMzAwcHg7XG5cdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRyaWdodDogMTAlO1xuXHRcdHRvcDogMDtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0Ym9yZGVyOiAyMHB4IHNvbGlkICM0YWM0ZjM7XG5cdFx0d2lkdGg6IDMwMHB4O1xuXHRcdGhlaWdodDogMzAwcHg7XG5cdH1cblx0LmlxLWJhbm5lci0xMiAuYmFubmVyLXRleHQge1xuXHRcdHotaW5kZXg6IDk7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDMwJTtcblx0XHRtYXJnaW4tYm90dG9tOiAzJTtcblx0fVxuXHQuaXEtYmFubmVyLTEyIC5iYW5uZXItdGV4dCAuYmFubmVyLXBob25lIHtcblx0XHR3aWR0aDogMzAlO1xuXHRcdGxlZnQ6IC05cHg7XG5cdFx0Ym90dG9tOiAtMjBweDtcblx0fVxuXHQuaXEtYmFubmVyLTEyIC5iYW5uZXItb2JqZWN0cyAuYmFubmVyLW9iamVjdHMtMDIge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0LmlxLWJhbm5lci0xMiAuYmFubmVyLW9iamVjdHMgLmJhbm5lci1vYmplY3RzLTAxIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IC5iYW5uZXItcGhvbmUge1xuXHRcdHJpZ2h0OiAwcHg7XG5cdFx0Ym90dG9tOiAtMzdweDtcblx0fVxuXHQuaXEtYmFubmVyIC5iYW5uZXItdGV4dCAud2F0Y2gtaW1nIHtcblx0XHRyaWdodDogNzklO1xuXHR9XG5cdC5pcS1iYW5uZXItMTMgLmJhbm5lci10ZXh0IHtcblx0XHRtYXJnaW4tdG9wOiAxMyU7XG5cdH1cblx0LmlxLXR3LTkge1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdH1cblx0LmlxLXByaWNpbmcgLnByaWNlLXRpdGxlOmFmdGVyIHtcblx0XHRib3R0b206IC0xcHg7XG5cdH1cblx0Lm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24gaSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaXEtZm9vdGVyciAuaXEtY29weXJpZ2h0IHtcblx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHRtYXJnaW4tdG9wOiAxNXB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMTIgLmJhbm5lci1pbWcge1xuXHRcdG1hcmdpbi10b3A6IDMwcHg7XG5cdH1cblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDIge1xuXHRcdGJvdHRvbTogNTglO1xuXHR9XG5cdC5pcS1vYmplY3RzLWFza2VkIC5pcS1vYmplY3RzLTAzIHtcblx0XHR0b3A6IDI2JTtcblx0XHRoZWlnaHQ6IDMwMHB4O1xuXHRcdHdpZHRoOiAzMDBweDtcblx0fVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjQ3OXB4KSB7XG5cdC5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IGgxLFxuXHQuaXEtYmFubmVyLTA3IC5iYW5uZXItdGV4dCBoMSxcblx0LmlxLWJhbm5lci0wOCAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0XHRsaW5lLWhlaWdodDogbm9ybWFsO1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci10ZXh0IHtcblx0XHRtYXJnaW4tdG9wOiA1MHB4O1xuXHR9XG5cdC5pcS1iYW5uZXIgLmJhbm5lci1pbWcsXG5cdC5pcS13b3Jrcy1pbWcge1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdH1cblx0LmlxLW9iamVjdHMtc29mdHdhcmUgLmlxLW9iamVjdHMtMDMge1xuXHRcdGxlZnQ6IDA7XG5cdH1cblx0LnNsaWRlci1jb250YWluZXIgLnNsaWRlci1jb250ZW50IHtcblx0XHR3aWR0aDogMjYlO1xuXHRcdGhlaWdodDogMjYlO1xuXHR9XG5cdC5pcS1vYmplY3RzLFxuXHQuaXEtb2JqZWN0cy1hc2tlZCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLWxlZnQge1xuXHRcdHJpZ2h0OiA2MyU7XG5cdH1cblx0LmlxLWJhbm5lci0wMiAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0fVxuXHQuc2xpZGVyLWNvbnRhaW5lciAuc2xpZGVyLXJpZ2h0IHtcblx0XHRsZWZ0OiA2MyU7XG5cdH1cblx0LnNjcmVlbnNob3RzLXNsaWRlciB7XG5cdFx0bWluLWhlaWdodDogMTgwcHg7XG5cdH1cblx0LmlxLWJhbm5lci0wNCAuYmFubmVyLXRleHQgaDEge1xuXHRcdGZvbnQtc2l6ZTogMzRweDtcblx0fVxuXHQuY291bnRlci1pbmZvIC53YXZlcy1ib3gge1xuXHRcdHRvcDogMjIlO1xuXHRcdGxlZnQ6IDM5JTtcblx0fVxuXHQuaXEtYmFubmVyLTA1IC5iYW5uZXItdGV4dCBoMSB7XG5cdFx0Zm9udC1zaXplOiAzNXB4O1xuXHR9XG5cdC5pcS1iYW5uZXItMDUgcCB7XG5cdFx0cGFkZGluZzogNTBweCAwIDIwcHggMDtcblx0fVxuXHQuaXEtY291bnRlci1ib3ggLmlxLWFib3V0IGltZyB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTUwcHg7XG5cdH1cblx0LmluZm8tc2hhcmUge1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0fVxuXHQuaXEtYmFubmVyLTAyIC5iYW5uZXItdmlkZW8ge1xuXHRcdHdpZHRoOiAyOTBweDtcblx0XHRoZWlnaHQ6IDE3MHB4O1xuXHR9XG5cdC5idXR0b24uaXEtbXItMjAsXG5cdC5idXR0b24tYmx1ZS1zaGFkb3cuaXEtbXItMjAge1xuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcblx0fVxuXHQucmJ0biB7XG5cdFx0cGFkZGluZzogMTBweCAyNHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxuXHQuaXEtdGFiLmhvcml6b250YWwgLm5hdi1pdGVtIGEge1xuXHRcdHBhZGRpbmc6IDhweCA0cHg7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdC5pcS10YWIuaG9yaXpvbnRhbCAubmF2LWl0ZW0ge1xuXHRcdHdpZHRoOiA1MCU7XG5cdH1cblx0LmlxLW9iamVjdHNuZXcgLmlxLW9iamVjdHMtMDQge1xuXHRcdGJvcmRlcjogMjBweCBzb2xpZCAjNGFjNGYzO1xuXHRcdHdpZHRoOiAyMDBweDtcblx0XHRoZWlnaHQ6IDIwMHB4O1xuXHRcdHJpZ2h0OiAxMCU7XG5cdFx0dG9wOiAwO1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlbmV3IC5pcS1vYmplY3RzLTAzIHtcblx0XHRib3JkZXI6IDIwcHggc29saWQgIzRhYzRmMztcblx0XHR3aWR0aDogMjAwcHg7XG5cdFx0aGVpZ2h0OiAyMDBweDtcblx0fVxuXHQuaXEtb2JqZWN0c25ldyAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaXEtb2JqZWN0c25ldyAuaXEtb2JqZWN0cy0wMyB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMSB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZW5ldyAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXHQucHItMyB7XG5cdFx0cGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5pcS1ycHItMTAge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdH1cblx0LmFuaW1hdGlvbi1zaGFwIC5zaGFwLWJnLFxuXHQuYW5pbWF0aW9ubmV3LXNoYXAgLnNoYXAtYmcge1xuXHRcdGhlaWdodDogMTc1cHg7XG5cdFx0d2lkdGg6IDE3NXB4O1xuXHR9XG5cdC5pcS1yLW1iLTE1IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXHR9XG5cdGgyLFxuXHRoMyB7XG5cdFx0Zm9udC1zaXplOiAyOHB4O1xuXHR9XG5cdC5oZWFkaW5nLXRpdGxlIC50aXRsZSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTVweDtcblx0fVxuXHQuaXEtYmFubmVyLTEyIC5iYW5uZXItaW1nIHtcblx0XHR3aWR0aDogMTMwJTtcblx0fVxuXHQuYmFubmVyLXRleHQgLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIC5hbGlnbi1zZWxmLWNlbnRlciBoMSB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR9XG5cdC5pcS1mb290ZXJyIC5pcS1jb3B5cmlnaHQuaXEtbWwtMTAge1xuXHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHR9XG5cdCNtYWluLWhlYWRlciBsaSBpIHtcblx0XHRmbG9hdDogbm9uZTtcblx0fVxuXHQuaXEtZ2V0LWluIC5nb29nbGUtcmVjYXB0Y2hhIGlmcmFtZSB7XG5cdFx0d2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXHQuZ29vZ2xlLXJlY2FwdGNoYSBpZnJhbWUgLnJjLWFuY2hvci1ub3JtYWwge1xuXHRcdHdpZHRoOiAyMjVweDtcblx0fVxuXHQuZ29vZ2xlLXJlY2FwdGNoYSBpZnJhbWUgLnJjLWFuY2hvci1ub3JtYWwgLnJjLWFuY2hvci1jb250ZW50IHtcblx0XHR3aWR0aDogMTM1cHg7XG5cdH1cblx0Lmdvb2dsZS1yZWNhcHRjaGEgaWZyYW1lIC5yYy1hbmNob3Itbm9ybWFsIC5yYy1hbmNob3ItY2hlY2tib3gtbGFiZWwge1xuXHRcdHdpZHRoOiAxMDBweDtcblx0fVxuXHQuaXEtc2hhZG93IGkge1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cdH1cblx0LmZvcm0tZ3JvdXAge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHR9XG5cdC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAxLFxuXHQuaXEtb2JqZWN0cy1zb2Z0d2FyZSAuaXEtb2JqZWN0cy0wMiB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxufVxuIiwiLypcblxuVGVtcGxhdGU6IFNvZmJveCAtIFJlc3BvbnNpdmUgU29mdHdhcmUgTGFuZGluZyBQYWdlXG5BdXRob3I6IGlxb25pY3RoZW1lcy5pblxuVmVyc2lvbjogMy4wXG5EZXNpZ24gYW5kIERldmVsb3BlZCBieTogaXFvbmljdGhlbWVzLmluXG5cbk5PVEU6IFRoaXMgaXMgbWFpbiBzdHlsZXNoZWV0IG9mIHRlbXBsYXRlLCBUaGlzIGZpbGUgY29udGFpbnMgdGhlIHN0eWxpbmcgZm9yIHRoZSBhY3R1YWwgVGVtcGxhdGUuIFBsZWFzZSBkbyBub3QgY2hhbmdlIGFueXRoaW5nIGhlcmUhIHdyaXRlIGluIGEgY3VzdG9tLmNzcyBmaWxlIGlmIHJlcXVpcmVkIVxuXG4qL1xuXG5cbio6Oi1tb3otc2VsZWN0aW9uIHsgYmFja2dyb3VuZDogIHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpOyBjb2xvcjogdmFyKC0td2hpdGUtdGhlbWUtY29sb3IpOyB0ZXh0LXNoYWRvdzogbm9uZTsgfVxuOjotbW96LXNlbGVjdGlvbiB7IGJhY2tncm91bmQ6ICB2YXIoLS1wcmltYXJ5LXRoZW1lLWNvbG9yKTsgY29sb3I6IHZhcigtLXdoaXRlLXRoZW1lLWNvbG9yKTsgdGV4dC1zaGFkb3c6IG5vbmU7IH1cbjo6c2VsZWN0aW9uIHsgYmFja2dyb3VuZDogIHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpOyBjb2xvcjogdmFyKC0td2hpdGUtdGhlbWUtY29sb3IpOyB0ZXh0LXNoYWRvdzogbm9uZTsgfVxuXG5oZWFkZXIubWVudS1zdGlja3kuaGVhZGVyLXdoaXRlIHsgYmFja2dyb3VuZDogdmFyKC0td2hpdGUtdGhlbWUtY29sb3IpOyB9XG5cbi5idXR0b24tYmx1ZS1zaGFkb3csIC5idXR0b24tbGluZS1zaGFkb3cgeyAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDEpOyAtbW96LWJveC1zaGFkb3c6IDBweCAyMHB4IDcwcHggLTE2cHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDEpOyBib3gtc2hhZG93OiAwcHggMjBweCA3MHB4IC0xNnB4IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAxKTsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRleHQgQ29sb3Jcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5pcS1iYW5uZXIgLmlxLXZpZGVvLCAuaXEtd29ya3MtYm94IC5zdGVwLCAuaXEtYmFubmVyLTA0IC5pcS12aWRlbywgLmlxLWJvcmRlci1ibG9jayAuc3RlcCwgLmlxLWZvb3RlciAuaXEtY29udGFjdCAuY29udGFjdC1ibG9jayBpLCAuaXEtZm9vdGVyIC5wb3N0LWJsb2csIGE6aG92ZXIsIC5pcS1mb290ZXIgLmZvb3Rlci1tZW51IGxpIGE6aG92ZXIsIC5pcS1mb290ZXIgLmlxLWNvcHlyaWdodCBhOmhvdmVyLCAuaXEtZm9udC1ibHVlLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZSBpLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTpob3ZlciBpLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhLmFjdGl2ZTpmb2N1cyBpLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhOmhvdmVyLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhOmhvdmVyIGksIC5pcS1mYW5jeS1ib3ggLmlxLWljb24sIC5jb3VudGVyLWluZm8gLmlxLXZpZGVvLCAuaXEtcHJvZ3Jlc3MtYmFyLXRleHQsIC5pcS1ibG9nLWRldGFpbCBhOmhvdmVyLCAuaXEtYmxvZy1kZXRhaWwgLmJsb2ctdGl0bGUgYTpob3ZlciBoNSwgLmlxLWZvb3Rlci1ib3ggLmlxLWljb24gaSwgLmZvb3Rlci1jb3B5cmlnaHQgYSwgLmlxLWJyZWFkY3J1bWIgLmJyZWFkY3J1bWIgbGkuYWN0aXZlLCAuaXEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaSBhOmhvdmVyLCAucGFnaW5hdGlvbiAucGFnZS1saW5rLCAuaXEtc2lkZWJhci13aWRnZXQgLmlxLXdpZGdldC1zZWFyY2ggaSwgLmlxLXdpZGdldC1tZW51IHVsIGxpIGEgc3Bhbjpob3ZlciwgLmlxLXdpZGdldC1tZW51IHVsIHVsIGxpIGEgc3Bhbjpob3ZlciwgLmlxLXNpZGViYXItd2lkZ2V0IC5pcS1yZWNlbnQtcG9zdCAubWVkaWEtYm9keT5hOmhvdmVyLCAuaXEtdGFncyBsaSBhOmhvdmVyLCAuaXEtd2lkZ2V0LWFyY2hpdmVzIGxpIGE6aG92ZXIsIC5pcS1jb21tZW50LWxpc3QgLmlxLWNvbW1lbnQtbWV0YWRhdGEgaSwgaGVhZGVyLmhlYWRlci1mYW5jeSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmhvdmVyLCBoZWFkZXIuaGVhZGVyLWZhbmN5IC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6Zm9jdXMsIGhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUsIGhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6Zm9jdXMsIGhlYWRlci5oZWFkZXItZmFuY3kgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6aG92ZXIsIGhlYWRlci5oZWFkZXItd2hpdGUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlciwgaGVhZGVyLmhlYWRlci13aGl0ZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmZvY3VzLCBoZWFkZXIuaGVhZGVyLXdoaXRlIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlLCBoZWFkZXIuaGVhZGVyLXdoaXRlIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmZvY3VzLCBoZWFkZXIuaGVhZGVyLXdoaXRlIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmhvdmVyLCAuaXEtd29ya3MtYm94LnJvdW5kLWljb24gLmljb24tYmcgaSwgLnRlcm1zLW9mLXNlcnZpY2UgLmJ0bi5idG4tbGluaywgLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYS5hY3RpdmUxIGksIC5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGEuYWN0aXZlMTpob3ZlciBpLCAuaXEtYmFubmVyLTAzIC5pcS12aWRlbywgLmlxLWZhbmN5LWJveC0xIC5pcS1pY29uLCAub3VyLXByaWNpbmctMSAuaXEtaWNvbiwgLnByaWNpbmctcHJpY2UsIC5pcS1mYW5jeS1ib3gtMSAuaXEtaWNvbiwgLm91ci1wcmljaW5nLTEgLmlxLWljb24sIC5wcmljaW5nLXByaWNlLCAuaXEtZmFuY3ktYm94LTEgLmlxLWljb24sIC5vdXItcHJpY2luZy0xIC5pcS1pY29uLCAucHJpY2luZy1wcmljZSwgLmlxLWZhbmN5LWJveC0xIC5pcS1pY29uLCAub3VyLXByaWNpbmctMSAuaXEtaWNvbiwgLnByaWNpbmctcHJpY2UsIGhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6aG92ZXIsIGhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6Zm9jdXMsIGhlYWRlci5kYXJrIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlLCBoZWFkZXIuZGFyayAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpmb2N1cywgaGVhZGVyLmRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6aG92ZXIsIC5idXR0b24tbGluZSwgLmJ1dHRvbi1saW5lLXNoYWRvdywgLmlxLXdvcmtzLWJveCBhLCAuaXEtdGVhbS0xIC5pcS1zdGFyIGksIC5pcS1mb290ZXIzIC5pcS1jb250YWN0IGksIC5pcS1mb290ZXIzIC5tZW51IGxpIGE6aG92ZXIsIC5pcS1mb290ZXIzIC5saW5rIGxpIGE6aG92ZXIsIC5pcS1mb290ZXIzIC5pcS1jb3B5cmlnaHQgYSwgLmhlYWRpbmctdGl0bGUtMiBpLCAuaGVhZGluZy10aXRsZS0yLnRleHQtbGVmdCBpLCAuaXEtZmVhdHVyZS0wMTpob3ZlciAuaWNvbi1ib3gsIC5pcS1iYW5uZXItMDkgaSwgIC5pcS1mb290ZXIzIC5zdXBwb3J0IGxpIGE6aG92ZXIsIC5pcS1mb290ZXIzIC5idWlsZCBsaSBhOmhvdmVyLCAuaXEtZm9vdGVyMyAuYWJvdXQgbGkgYTpob3ZlciwgLmlxLWZvb3RlcjMgLmNvbnRhY3QgbGkgYTpob3ZlcixoZWFkZXIubmV3LWhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZSwuaXEtZm9vdGVyciAuaXEtY29udGFjdCBpLC5pcS1mb290ZXJyIC5pcS1jb3B5cmlnaHQgYSwubWVkaWEuc2VydmljZS1ib3ggaSxoZWFkZXIubmV3LWhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmhvdmVyLCBoZWFkZXIubmV3LWhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmZvY3VzLCBoZWFkZXIubmV3LWhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZSwgaGVhZGVyLm5ldy1oZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6Zm9jdXMsIGhlYWRlci5uZXctaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmhvdmVyLC5pcS10ZWFtMiAudGVhbS1zb2NpYWwgbGkgYSwuaXEtZmVhdHVyZTEgLmlxLWJsb2cgaSwuaXEtc2hhZG93IGksaGVhZGVyLmhlYWRlci1vbmUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTpob3ZlciwgIGhlYWRlci5oZWFkZXItb25lIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlLCBoZWFkZXIuaGVhZGVyLW9uZSAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpmb2N1cywgaGVhZGVyLmhlYWRlci1vbmUgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmU6aG92ZXIsaGVhZGVyLmhlYWRlci1vbmUgLmhlYWRlci10b3AtYmFyIHVsIGxpIGE6aG92ZXIsLmlxLWZvb3RlcnIgLm9mZmljZS1kYXkgbGkgYTpob3ZlciwuaXEtZm9vdGVyciAubWVudSBsaSBhOmhvdmVyLC5pcS1mb290ZXJyIC5saW5rIGxpIGE6aG92ZXIsLmlxLWZlYXR1cmUxMCAubGVmdCBpLCAuaXEtd29ya3MtYm94ZXMgLmljb25zIGkgeyBjb2xvcjogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmFja2dyb3VuZCBDb2xvclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlYWRpbmctdGl0bGUgLnRpdGxlOmJlZm9yZSwgLmJ1dHRvbiwgLmlxLWJvcmRlci1ibG9jazpiZWZvcmUsIC5pcS1ib3JkZXItYmxvY2s6YWZ0ZXIsIC5pcS1ib3JkZXItYmxvY2sgPiAuYm9yZGVyLWJveDpiZWZvcmUsIC5pcS1ib3JkZXItYmxvY2sgPiAuYm9yZGVyLWJveDphZnRlciwgLmlxLWFtYXppbmctdGFiIC5uYXYubmF2LXRhYnMgbGkgYTpiZWZvcmUsIC5pcS1hbWF6aW5nLXRhYiAubmF2Lm5hdi10YWJzIGxpIGE6aG92ZXI6YmVmb3JlLCAuaXEtYW1hemluZy10YWIgLm5hdi5uYXYtdGFicyBsaSBhOmZvY3VzOmJlZm9yZSwgLmlxLWZhbmN5LWJveDpob3ZlciAuaXEtaWNvbiwgLmlxLWNsaWVudDpiZWZvcmUsIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgaTpob3ZlciwgLmlxLXRlYW0gLnNoYXJlIHVsIGxpIGE6aG92ZXIsIC5pcS1hY2NvcmRpb24gLmFjY29yZGlvbi10aXRsZTpiZWZvcmUsIC5vd2wtY2Fyb3VzZWwub3dsLXRoZW1lIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLm93bC1jYXJvdXNlbC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90OmhvdmVyIHNwYW4sIC5vd2wtY2Fyb3VzZWwuYXJyb3ctMSAub3dsLW5hdiBpOmhvdmVyLCAuYnV0dG9uLmJ0LXdoaXRlOmhvdmVyLCAuYnV0dG9uLmJ0LXdoaXRlOmZvY3VzLCAuaW5mby1zaGFyZSBsaSBhOmhvdmVyLCAuaXEtZXJyb3IgaDYsIC5wYWdpbmF0aW9uIC5wYWdlLWl0ZW0uYWN0aXZlIC5wYWdlLWxpbmssIC5ibHVlLWJnLCBoZWFkZXIuaGVhZGVyLXdoaXRlIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6OmJlZm9yZSwgLmlxLWZlYXR1cmUgLnN0ZXAtbnVtYmVyLCAub3VyLXByaWNpbmctMSAuaXEtaWNvbjpob3ZlciwgaGVhZGVyLmRhcmsgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYTo6YmVmb3JlLCAuYnV0dG9uLWxpbmU6aG92ZXIsIC5idXR0b24tbGluZTpmb2N1cywgLmJ1dHRvbi1ibHVlLXNoYWRvdywgLmJ1dHRvbi1saW5lLXNoYWRvdzpob3ZlciwgLmJ1dHRvbi1saW5lLXNoYWRvdzpmb2N1cywgLmlxLWJhbm5lci0wNyAuaXEtdmlkZW8sIC5hbmktbW92aW5nLXNxdWFyZSwgLmFuaS1oYW1idXJnZXIgLmhhbWJ1cmdlci1saW5lLCAuaXEtZm9vdGVyNCAuaXEtbWVkaWEtYmxvZyBsaSBhLGhlYWRlci5uZXctaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6OmJlZm9yZSwuYW5pbWF0aW9uLXNoYXAgLnNoYXAtYmcsIC5hbmltYXRpb25uZXctc2hhcCAuc2hhcC1iZywuaXEtZmVhdHVyZTEwOmhvdmVyIC5sZWZ0IGksIC5pcS1wcmljaW5nLmFjdGl2ZSAucHJpY2UtdGl0bGUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LXRoZW1lLWNvbG9yKTsgfVxuXG5oZWFkZXIubWVudS1zdGlja3ksICNiYWNrLXRvLXRvcCAudG9wOmhvdmVyLC5pcS1mYW5jeS1ib3huZXcudGV4dC1jZW50ZXIgLmljb24tYmcsLmlxLXRhYiAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5pcS10YWIgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmssIC5pcS10YWIgLm5hdi1waWxscyAubmF2LWxpbms6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC45KTsgfVxuI2dyZWF0LXNjcmVlbnNob3RzIC5uYXYtbGluay5hY3RpdmUsI2dyZWF0LXNjcmVlbnNob3RzIC5uYXYtbGluazpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMTI1LCAyMTAsIDI0MywgMC43KSAhaW1wb3J0YW50O2NvbG9yOiAjZmZmZmZmOyB9XG4jZ3JlYXQtc2NyZWVuc2hvdHMgLm5hdi1saW5rLmFjdGl2ZTEgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyNSwgMjEwLCAyNDMsIDAuNykgIWltcG9ydGFudDtjb2xvcjogI2ZmZmZmZjsgfVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgICAgICAgICAgICBCYWNrZ3JvdW5kIEdyYWRpZW50XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmlxLW92ZXItYmx1ZS0xMDpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC4xKTsgfVxuLmlxLW92ZXItYmx1ZS0yMDpiZWZvcmUsIC5pcS1iYW5uZXItMDcgLmlxLXdhdmVzIC53YXZlcyB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjIpOyB9XG4uaXEtb3Zlci1ibHVlLTMwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjMpOyB9XG4uaXEtb3Zlci1ibHVlLTQwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjQpOyB9XG4uaXEtb3Zlci1ibHVlLTUwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjUpOyB9XG4uaXEtb3Zlci1ibHVlLTYwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjYpOyB9XG4uaXEtb3Zlci1ibHVlLTcwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjcpOyB9XG4uaXEtb3Zlci1ibHVlLTgwOmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjgpOyB9XG4uaXEtb3Zlci1ibHVlLTg1OmJlZm9yZSB7IGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjg1KTsgfVxuLmlxLW92ZXItYmx1ZS05MDpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC45KTsgfVxuLmlxLW92ZXItYmx1ZS05NTpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC45NSk7IH1cbi5pcS13b3Jrcy1ib3g6aG92ZXIsIC5pcS13b3Jrcy1ib3gucm91bmQtaWNvbjpob3ZlciAuaWNvbi1iZyB7IC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDEycHggMjJweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuLW1vei1ib3gtc2hhZG93OiA4cHggMTJweCAyMnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG5ib3gtc2hhZG93OiA4cHggMTJweCAyMnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7IH1cbi5pcS10ZWFtIC5pcS10ZWFtLWltZzpiZWZvcmUgeyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMCk7IGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDApIDAlLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMSkgMTAwJSk7IGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMCkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAxKSkpOyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwKSAwJSwgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDEpIDEwMCUpOyBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMCkgMCUsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAxKSAxMDAlKTsgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwKSAwJSwgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDEpIDEwMCUpOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMCkgMCUsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAxKSAxMDAlKTsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0ndmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvciknLCBlbmRDb2xvcnN0cj0ndmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvciknLCBHcmFkaWVudFR5cGU9MCk7IH1cbnN2ZyAjZm9sbG93UGF0aCB7IHN0cm9rZTogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7IH1cbnN2ZyAjYWlycGxhaW4geyBmaWxsOiB2YXIoLS1wcmltYXJ5LXRoZW1lLWNvbG9yKTsgfVxuLmFuaS1jdWJlIC5jdWJlLWZhY2UuZmFjZV90b3AsIC5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfYm90dG9tIHsgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7IH1cbi5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfZnJvbnQsIC5hbmktY3ViZSAuY3ViZS1mYWNlLmZhY2VfYmFjayB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpOyB9XG4uYW5pLWN1YmUgLmN1YmUtZmFjZS5mYWNlX3JpZ2h0LCAuYW5pLWN1YmUgLmN1YmUtZmFjZS5mYWNlX2xlZnQsLmlxLXRhYiAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsIC5pcS10YWIgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmssIC5pcS10YWIgLm5hdi1waWxscyAubmF2LWxpbms6aG92ZXIgIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7IH1cblxuLyogQmFja2dyb3VuZCBHcmFkaWVudCBCbGFjayAqL1xuLmlxLW92ZXItR3JhZGllbnQtdG9wIHsgYmFja2dyb3VuZDogcmdiYSgyNTUsIDkzLCAxNzcsIDApOyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDIwNCwgMTIyLCAxOTUsIDApIDI4JSwgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDAuOCkgMTAwJSk7IGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkpLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkpLCBjb2xvci1zdG9wKDI4JSwgcmdiYSgyMDQsIDEyMiwgMTk1LCAwKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYi10aGVtZS1jb2xvciksIDAuOCkpKTsgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyMDQsIDEyMiwgMTk1LCAwKSAyOCUsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjgpIDEwMCUpOyBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjU1LCA5MywgMTc3LCAwKSAwJSwgcmdiYSgyMDQsIDEyMiwgMTk1LCAwKSAyOCUsIHJnYmEodmFyKC0tcHJpbWFyeS1yZ2ItdGhlbWUtY29sb3IpLCAwLjgpIDEwMCUpOyBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjA0LCAxMjIsIDE5NSwgMCkgMjglLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC44KSAxMDAlKTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDkzLCAxNzcsIDApIDAlLCByZ2JhKDI1NSwgOTMsIDE3NywgMCkgMCUsIHJnYmEoMjA0LCAxMjIsIDE5NSwgMCkgMjglLCByZ2JhKHZhcigtLXByaW1hcnktcmdiLXRoZW1lLWNvbG9yKSwgMC44KSAxMDAlKTsgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmNWRiMScsIGVuZENvbG9yc3RyPScjNGFjNGYzJywgR3JhZGllbnRUeXBlPTApOyB9XG4uYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfZnJvbnQsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9yaWdodCwgLmFuaS1jdWJlLmFuaS1jdWJlLTMgLmN1YmUtZmFjZS5mYWNlX2xlZnQsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV90b3AsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9ib3R0b20sIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9iYWNrIHsgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpLCAwIDAgMCAycHggdmFyKC0tcHJpbWFyeS10aGVtZS1jb2xvcik7IH1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgICAgICAgICAgICAgICBcdFx0IEJvZGVyIENvbG9yXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmlxLW9iamVjdHMgLmlxLW9iamVjdHMtMDQsIC5pcS1vYmplY3RzLXNvZnR3YXJlIC5pcS1vYmplY3RzLTAzLCAuaXEtb2JqZWN0cy1hc2tlZCAuaXEtb2JqZWN0cy0wMywgLm93bC1jYXJvdXNlbC5vd2wtdGhlbWUgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAub3dsLWNhcm91c2VsLm93bC10aGVtZSAub3dsLWRvdHMgLm93bC1kb3Q6aG92ZXIgc3BhbiwgLmNvbnRhY3QtZm9ybSAuc2VjdGlvbi1maWVsZCBpbnB1dDpmb2N1cywgLmNvbnRhY3QtZm9ybSAuc2VjdGlvbi1maWVsZC50ZXh0YXJlYSB0ZXh0YXJlYTpmb2N1cywgLmluZm8tc2hhcmUgbGkgYTpob3ZlciwgLnBhZ2luYXRpb24gLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluaywgLmlxLXNpZGViYXItd2lkZ2V0IC5pcS13aWRnZXQtc2VhcmNoIGlucHV0OmZvY3VzLCAuaXEtdGFncyBsaSBhOmhvdmVyLCAuYmxvY2txdW90ZSwgYmxvY2txdW90ZSwgLmlxLXByaWNpbmctMDE6aG92ZXIsIC5pcS1wcmljaW5nLTAxLmFjdGl2ZSwgLmlxLXByaWNpbmctMDE6aG92ZXIsIC5pcS1wcmljaW5nLTAxLmFjdGl2ZSwgLmJ1dHRvbi1saW5lLCAuaXEtYmFubmVyLTAyLnN0eWxlLTEgLmJhbm5lci1vYmplY3RzIC5iYW5uZXItb2JqZWN0cy0wMiwgLmJ1dHRvbi1saW5lLXNoYWRvdywgLmlxLXRlYW0tMSAudGVhbS1ibG9nLCAuYW5pLWN1YmUuYW5pLWN1YmUtMyAuY3ViZS1mYWNlLmZhY2VfZnJvbnQsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9yaWdodCwgLmFuaS1jdWJlLmFuaS1jdWJlLTMgLmN1YmUtZmFjZS5mYWNlX2xlZnQsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV90b3AsIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9ib3R0b20sIC5hbmktY3ViZS5hbmktY3ViZS0zIC5jdWJlLWZhY2UuZmFjZV9iYWNrLCAuaXEtZm9vdGVyNCAuaXEtbWVkaWEtYmxvZyBsaSBhLC5pcS1wcmljaW5nLTU6aG92ZXIsIC5pcS1wcmljaW5nLTUuYWN0aXZlLC5pcS1vYmplY3RzbmV3IC5pcS1vYmplY3RzLTA0LC5pcS1vYmplY3RzLXNvZnR3YXJlbmV3IC5pcS1vYmplY3RzLTAzLC5pcS1mZWF0dXJlMSAuaXEtYmxvZzpob3ZlciwgLmlxLWZlYXR1cmUxIC5pcS1ibG9nLmFjdGl2ZSwuaXEtZmVhdHVyZTEwOmhvdmVyIC5sZWZ0LCAuaXEtZmVhdHVyZTEwOmhvdmVyIC5sZWZ0IGkgeyBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpOyB9XG5cbkBtZWRpYShtYXgtd2lkdGg6OTkycHgpIHtcbiAgLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXIgc3BhbiwgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGE6aG92ZXIsIGhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhOmZvY3VzLCBoZWFkZXIgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gYS5hY3RpdmUsIGhlYWRlciAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSBhLmFjdGl2ZTpmb2N1cywgaGVhZGVyIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIGEuYWN0aXZlOmhvdmVyIHsgY29sb3I6IHZhcigtLXByaW1hcnktdGhlbWUtY29sb3IpOyB9XG59XG4iXX0= */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexComponent, [{
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
  "./src/app/landing-page4/landing-page4.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/landing-page4/landing-page4.module.ts ***!
    \*******************************************************/

  /*! exports provided: LandingPage4Module */

  /***/
  function srcAppLandingPage4LandingPage4ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPage4Module", function () {
      return LandingPage4Module;
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


    var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index/index.component */
    "./src/app/landing-page4/index/index.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/landing-page4/components/home/home.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sofbox/sofbox.module */
    "./src/app/sofbox/sofbox.module.ts");
    /* harmony import */


    var angular_count_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-count-to */
    "./node_modules/angular-count-to/__ivy_ngcc__/modules/angular-count-to.js");
    /* harmony import */


    var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/about/about.component */
    "./src/app/landing-page4/components/about/about.component.ts");
    /* harmony import */


    var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/clients/clients.component */
    "./src/app/landing-page4/components/clients/clients.component.ts");
    /* harmony import */


    var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/contact/contact.component */
    "./src/app/landing-page4/components/contact/contact.component.ts");
    /* harmony import */


    var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/blog/blog.component */
    "./src/app/landing-page4/components/blog/blog.component.ts");
    /* harmony import */


    var _components_screen_shot_screen_shot_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/screen-shot/screen-shot.component */
    "./src/app/landing-page4/components/screen-shot/screen-shot.component.ts");
    /* harmony import */


    var _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/pricing/pricing.component */
    "./src/app/landing-page4/components/pricing/pricing.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/team/team.component */
    "./src/app/landing-page4/components/team/team.component.ts");
    /* harmony import */


    var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/testimonial/testimonial.component */
    "./src/app/landing-page4/components/testimonial/testimonial.component.ts");
    /* harmony import */


    var _components_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/specialities/specialities.component */
    "./src/app/landing-page4/components/specialities/specialities.component.ts");
    /* harmony import */


    var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/faq/faq.component */
    "./src/app/landing-page4/components/faq/faq.component.ts");
    /* harmony import */


    var _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/feature/feature.component */
    "./src/app/landing-page4/components/feature/feature.component.ts");
    /* harmony import */


    var _components_compare_service_compare_service_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/compare-service/compare-service.component */
    "./src/app/landing-page4/components/compare-service/compare-service.component.ts");
    /* harmony import */


    var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/counter/counter.component */
    "./src/app/landing-page4/components/counter/counter.component.ts");

    var routes = [{
      path: '',
      component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"],
      children: []
    }];

    var LandingPage4Module = function LandingPage4Module() {
      _classCallCheck(this, LandingPage4Module);
    };

    LandingPage4Module.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: LandingPage4Module
    });
    LandingPage4Module.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function LandingPage4Module_Factory(t) {
        return new (t || LandingPage4Module)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](LandingPage4Module, {
        declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"], _components_screen_shot_screen_shot_component__WEBPACK_IMPORTED_MODULE_11__["ScreenShotComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_14__["TestimonialComponent"], _components_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_15__["SpecialitiesComponent"], _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"], _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_17__["FeatureComponent"], _components_compare_service_compare_service_component__WEBPACK_IMPORTED_MODULE_18__["CompareServiceComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_19__["CounterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"]],
        exports: [_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LandingPage4Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"], _components_screen_shot_screen_shot_component__WEBPACK_IMPORTED_MODULE_11__["ScreenShotComponent"], _components_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__["PricingComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_13__["TeamComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_14__["TestimonialComponent"], _components_specialities_specialities_component__WEBPACK_IMPORTED_MODULE_15__["SpecialitiesComponent"], _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"], _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_17__["FeatureComponent"], _components_compare_service_compare_service_component__WEBPACK_IMPORTED_MODULE_18__["CompareServiceComponent"], _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_19__["CounterComponent"]],
          exports: [_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_5__["SofboxModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_6__["CountToModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=landing-page4-landing-page4-module-es5.js.map