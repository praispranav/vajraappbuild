(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["request-for-demo-request-for-demo-module"],{

/***/ "./src/app/request-for-demo/components/contact-info/contact-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/request-for-demo/components/contact-info/contact-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ContactInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("color-palette style-three wow fadeInUp text-left ", list_r1.hoverClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](list_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1.desc);
} }
class ContactInfoComponent {
    constructor() {
        this.List = [
            { title: 'Address', desc: 'F-2-20,Sunsuria Forum No.1 Jalan Setia Dagang Al U13/Al Seksyen U13,40170 Shah Alam Selangor, Malaysia', icon: 'flaticon flaticon-location', hoverClass: 'purple-hover' },
            { title: 'Phone', desc: '+060 16-637 5010, Mon-Fri 8:00am - 8:00pm ', icon: 'flaticon flaticon-phone-call', hoverClass: 'org-hover' },
            { title: 'Mail', desc: 'info@scorpius.com.my', icon: 'flaticon flaticon-send-mail', hoverClass: 'green-hover' }
        ];
    }
    ngOnInit() {
    }
}
ContactInfoComponent.ɵfac = function ContactInfoComponent_Factory(t) { return new (t || ContactInfoComponent)(); };
ContactInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactInfoComponent, selectors: [["app-contact-info"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "row", "justify-content-center"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], ["data-wow-delay", "0.4s"], [1, "media"], [1, "circle-style"], [1, "circle-icon"], ["aria-hidden", "true"], [1, "media-body"], [1, "color-text", "mb-2"], [1, "mb-0"]], template: function ContactInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactInfoComponent_div_3_Template, 11, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.List);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZm9yLWRlbW8vY29tcG9uZW50cy9jb250YWN0LWluZm8vY29udGFjdC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-info',
                templateUrl: './contact-info.component.html',
                styleUrls: ['./contact-info.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/request-for-demo/components/contact-map/contact-map.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/request-for-demo/components/contact-map/contact-map.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ContactMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMapComponent", function() { return ContactMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactMapComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactMapComponent.ɵfac = function ContactMapComponent_Factory(t) { return new (t || ContactMapComponent)(); };
ContactMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMapComponent, selectors: [["app-contact-map"]], decls: 22, vars: 0, consts: [[1, "pt-0"], [1, "container"], [1, "row", "align-items-center", "mt-4"], [1, "col-lg-6"], [1, "mb-4"], [1, "row"], [1, "col-lg-12"], ["type", "text", "id", "inputName", "placeholder", "Your Name", 1, "form-control"], ["type", "Email", "id", "inputEmail", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "id", "inputName", "placeholder", "Phone Number", 1, "form-control"], ["type", "text", "id", "inputSubject", "placeholder", "Organization Name", 1, "form-control"], ["id", "exampleFormControlTextarea1", "rows", "7", "placeholder", "Your Message", 1, "form-control"], ["href", "", 1, "button"]], template: function ContactMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZm9yLWRlbW8vY29tcG9uZW50cy9jb250YWN0LW1hcC9jb250YWN0LW1hcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-map',
                templateUrl: './contact-map.component.html',
                styleUrls: ['./contact-map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/request-for-demo/index/index.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/request-for-demo/index/index.component.ts ***!
  \***********************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sofbox/plugins.service */ "./src/app/sofbox/plugins.service.ts");
/* harmony import */ var _sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component */ "./src/app/sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component.ts");
/* harmony import */ var _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component */ "./src/app/sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component.ts");
/* harmony import */ var _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/contact-map/contact-map.component */ "./src/app/request-for-demo/components/contact-map/contact-map.component.ts");
/* harmony import */ var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */ "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
/* harmony import */ var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component */ "./src/app/sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component.ts");








class IndexComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.navLogo = './assets/images/vajra/icon.png';
        this.logoWhite = './assets/images/vajra/logo_white.png';
        this.footerLogo = './assets/images/vajra/logo_white.png';
        this.footerText = 'F-2-20,Sunsuria Forum No.1 Jalan Setia Dagang Al U13/Al Seksyen U13,40170 Shah Alam Selangor, Malaysia.';
        this.footerTitle = 'Ready to get started?';
        this.footerDescription = 'Manage your visitor & security on one platform.';
        this.navItems = [
            {
                href: '#iq-home', title: 'Home',
                _is_active: true
            },
            {
                href: '#', title: 'Solutions',
                is_link: false,
                _is_active: false,
                children: true,
                child: [
                    { href: '/community-app', title: 'Vajra Community App' },
                    { href: '/guard-patrol', title: 'Vajra Guard Patrol' },
                    { href: '/', title: 'Vajra Visitor Management' },
                    { href: '/', title: 'Vajra Management Portal' },
                    { href: '/access-control', title: 'Vajra Access Control' },
                ]
            },
            // { 
            //   href: '#', title: 'Portfolio',
            //   is_link: false,
            //   _is_active: false,
            //   children: true,
            //   child: [
            //     { href: '/portfolio-2-column', title: 'Portfolio 2 Columns' },
            //     { href: '/portfolio-3-column', title: 'Portfolio 3 Columns' },
            //     { href: '/portfolio-4-column', title: 'Portfolio 4 Columns' },
            //     { href: '/portfolio-5-column', title: 'Portfolio 5 Columns' },
            //     { href: '/portfolio-no-space', title: 'Portfolio No Space' },
            //     { href: '/portfolio-details', title: 'Portfolio Details' },
            //   ]
            // },
            // { href: '#', title: 'Blog',
            //   is_link: false,
            //   _is_active: false,
            //   children: true,
            //   child: [
            //     { href: '/blog', title: 'Blog' },
            //     { href: '/blog-details', title: 'Blog Details' },
            //     { href: '/one-column-blog', title: 'One Column Blog' },
            //     { href: '/two-column-blog', title: 'Two Column Blog' },
            //     { href: '/three-column-blog', title: 'Three Column Blog' },
            //     { href: '/left-sidebar-grid', title: 'Left Sidebar Grid' },
            //     { href: '/right-sidebar-grid', title: 'Right Sidebar Grid' },
            //   ]
            // },
            { href: '/contact-us', title: 'Contact Us', is_link: true }
        ];
        this.List = [
            { name: 'Suresh Rao', design: 'CEO', image: './assets/sofbox-v2/images/home-2/ceo.jpg', description: 'We Work For Your IDEAS And Believe One Day Your IDEAS Work For You....' },
        ];
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        current.plugins.revolutionSlider();
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 50, vars: 7, consts: [["id", "loading"], ["id", "loading-center"], ["src", "./assets/sofbox-v2/images/loader.gif", "alt", "loader"], [3, "logoImg", "navItemList"], ["title", "REQUEST FOR DEMO"], ["bannerLinks", ""], [1, "breadcrumb", "main-bg"], [1, "breadcrumb-item"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-home", "mr-1"], [1, "breadcrumb-item", "active"], [1, "main-content"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""], [3, "testimonialList"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-v-two-header-style1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-v-two-banner-style1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "REQUEST FOR DEMO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-v-two-footer-style2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "About Sofbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "How it Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-v-two-testimonial-carousel", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_1__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/request-for-demo/request-for-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/request-for-demo/request-for-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: RequestForDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestForDemoModule", function() { return RequestForDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sofbox/sofbox.module */ "./src/app/sofbox/sofbox.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/request-for-demo/index/index.component.ts");
/* harmony import */ var _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-info/contact-info.component */ "./src/app/request-for-demo/components/contact-info/contact-info.component.ts");
/* harmony import */ var _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact-map/contact-map.component */ "./src/app/request-for-demo/components/contact-map/contact-map.component.ts");









const routes = [
    {
        path: '',
        component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
    }
];
class RequestForDemoModule {
}
RequestForDemoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RequestForDemoModule });
RequestForDemoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RequestForDemoModule_Factory(t) { return new (t || RequestForDemoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RequestForDemoModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__["ContactInfoComponent"], _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__["ContactMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestForDemoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"], _components_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_5__["ContactInfoComponent"], _components_contact_map_contact_map_component__WEBPACK_IMPORTED_MODULE_6__["ContactMapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=request-for-demo-request-for-demo-module-es2015.js.map