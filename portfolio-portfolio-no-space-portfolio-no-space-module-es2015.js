(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-no-space-portfolio-no-space-module"],{

/***/ "./src/app/portfolio/portfolio-no-space/portfolio-no-space.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-no-space/portfolio-no-space.component.ts ***!
  \******************************************************************************/
/*! exports provided: PortfolioNoSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioNoSpaceComponent", function() { return PortfolioNoSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_sofbox_v2_images_logo_color_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/sofbox-v2/images/logo-color.png */ "./src/assets/sofbox-v2/images/logo-color.png");
/* harmony import */ var _assets_sofbox_v2_images_home_2_logo_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/sofbox-v2/images/home-2/logo-white.png */ "./src/assets/sofbox-v2/images/home-2/logo-white.png");
/* harmony import */ var _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sofbox/plugins.service */ "./src/app/sofbox/plugins.service.ts");
/* harmony import */ var _sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component */ "./src/app/sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component.ts");
/* harmony import */ var _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component */ "./src/app/sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component.ts");
/* harmony import */ var _sofbox_components_v_two_portfolio_box_v_two_portfolio_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sofbox/components/v-two-portfolio-box/v-two-portfolio-box.component */ "./src/app/sofbox/components/v-two-portfolio-box/v-two-portfolio-box.component.ts");
/* harmony import */ var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */ "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
/* harmony import */ var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component */ "./src/app/sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component.ts");

// @ts-ignore

// @ts-ignore








class PortfolioNoSpaceComponent {
    constructor(plugins) {
        this.plugins = plugins;
        this.navLogo = _assets_sofbox_v2_images_logo_color_png__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.footerLogo = _assets_sofbox_v2_images_home_2_logo_white_png__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.footerText = 'It is a long established fact that a reader will be distracted by the readable content.';
        this.footerTitle = 'Ready to get started?';
        this.footerDescription = 'It is a long established fact that a page when looking at its layout.';
        this.navItems = [
            { href: '/saas-six', title: 'Home', is_link: true },
            {
                href: '#', title: 'Pages',
                is_link: false,
                _is_active: false,
                children: true,
                child: [
                    { href: '/about-us', title: 'About Us' },
                    { href: '/services', title: 'Serivces' },
                    { href: '/pricing', title: 'Pricing' },
                    { href: '/careers', title: 'Careers' },
                    { href: '/faq', title: 'FAQ' },
                    { href: '/team', title: 'Team' },
                ]
            },
            {
                href: '#', title: 'Portfolio',
                is_link: false,
                _is_active: true,
                children: true,
                child: [
                    { href: '/portfolio-2-column', title: 'Portfolio 2 Columns' },
                    { href: '/portfolio-3-column', title: 'Portfolio 3 Columns' },
                    { href: '/portfolio-4-column', title: 'Portfolio 4 Columns' },
                    { href: '/portfolio-5-column', title: 'Portfolio 5 Columns' },
                    { href: '/portfolio-no-space', title: 'Portfolio No Space' },
                    { href: '/portfolio-details', title: 'Portfolio Details' },
                ]
            },
            { href: '#', title: 'Blog',
                is_link: false,
                _is_active: false,
                children: true,
                child: [
                    { href: '/blog', title: 'Blog' },
                    { href: '/blog-details', title: 'Blog Details' },
                    { href: '/one-column-blog', title: 'One Column Blog' },
                    { href: '/two-column-blog', title: 'Two Column Blog' },
                    { href: '/three-column-blog', title: 'Three Column Blog' },
                    { href: '/left-sidebar-grid', title: 'Left Sidebar Grid' },
                    { href: '/right-sidebar-grid', title: 'Right Sidebar Grid' },
                ]
            },
            { href: '/contact-us', title: 'Contact Us', is_link: true }
        ];
        this.portfolioList = [
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Print — Branding',
                image: './assets/sofbox-v2/images/home-1/16.jpg',
                class: 'creative print-branding',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Wordpress — eCommerce',
                image: './assets/sofbox-v2/images/home-1/17.jpg',
                class: 'creative wordpress-ecommerce',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Wordpress — eCommerce',
                image: './assets/sofbox-v2/images/home-1/18.jpg',
                class: 'print-branding wordpress-ecommerce',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Print — Branding',
                image: './assets/sofbox-v2/images/home-1/16.jpg',
                class: '',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Wordpress — eCommerce',
                image: './assets/sofbox-v2/images/home-1/17.jpg',
                class: 'creative design print-branding wordpress-ecommerce',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Wordpress — eCommerce',
                image: './assets/sofbox-v2/images/home-1/18.jpg',
                class: 'creative print-branding wordpress-ecommerce',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Design',
                image: './assets/sofbox-v2/images/home-1/16.jpg',
                class: 'creative design',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Print — Branding',
                image: './assets/sofbox-v2/images/home-1/17.jpg',
                class: 'print-branding',
                link: '/portfolio-details'
            },
            {
                title: 'Dignissimos wisi cillum',
                desc: 'Wordpress — eCommerce',
                image: './assets/sofbox-v2/images/home-1/18.jpg',
                class: 'wordpress-ecommerce',
                link: '/portfolio-details'
            },
            {
                title: 'Stan’s Office Gateway',
                desc: 'Creative',
                image: './assets/sofbox-v2/images/home-1/18.jpg',
                class: 'creative',
                link: '/portfolio-details'
            },
        ];
        this.List = [
            { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/215.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
            { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/216.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' },
            { name: 'Walhan Bobe', design: 'CEO Sofbox', image: './assets/sofbox-v2/images/home-2/217.jpeg', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut labore et dolore Sed omnis iste ut perspiciatis.' }
        ];
    }
    ngOnInit() {
        // Init all plugins...
        const current = this;
        // tslint:disable-next-line:only-arrow-functions
        setTimeout(function () {
            current.plugins.index();
        }, 200);
    }
}
PortfolioNoSpaceComponent.ɵfac = function PortfolioNoSpaceComponent_Factory(t) { return new (t || PortfolioNoSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"])); };
PortfolioNoSpaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioNoSpaceComponent, selectors: [["app-portfolio-no-space"]], decls: 82, vars: 8, consts: [["id", "loading"], ["id", "loading-center"], ["src", "./assets/sofbox-v2/images/loader.gif", "alt", "loader"], [3, "logoImg", "navItemList"], ["button", "", 1, "button-btn", "list-inline-item"], ["aria-label", "breadcrumb"], [1, "blue-btn", "button"], ["href", "#"], ["title", "Portfolio no space"], ["bannerLinks", ""], [1, "breadcrumb", "main-bg"], [1, "breadcrumb-item"], ["aria-hidden", "true", 1, "fa", "fa-home", "mr-1"], [1, "breadcrumb-item", "active"], [1, "main-content", "overflow-hidden"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "iq-masonry-block"], [1, "isotope-filters", "isotope-tooltip"], ["data-filter", "", 1, "active"], [1, "post_no"], ["data-filter", ".creative"], ["data-filter", ".design"], ["data-filter", ".print-branding"], ["data-filter", ".wordpress-ecommerce"], [1, "iq-masonry", "iq-columns-3", "no-padding"], [3, "List"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""], [3, "testimonialList"]], template: function PortfolioNoSpaceComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Portfolio no space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Creative");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Print \u2014 Branding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Wordpress \u2014 eCommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-v-two-portfolio-box", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-v-two-footer-style2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "About Sofbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "How it Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-v-two-testimonial-carousel", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("List", ctx.portfolioList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioNoSpaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-no-space',
                templateUrl: './portfolio-no-space.component.html',
                styleUrls: ['./portfolio-no-space.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/portfolio/portfolio-no-space/portfolio-no-space.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-no-space/portfolio-no-space.module.ts ***!
  \***************************************************************************/
/*! exports provided: PortfolioNoSpaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioNoSpaceModule", function() { return PortfolioNoSpaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../sofbox/sofbox.module */ "./src/app/sofbox/sofbox.module.ts");
/* harmony import */ var _portfolio_no_space_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio-no-space.component */ "./src/app/portfolio/portfolio-no-space/portfolio-no-space.component.ts");







const routes = [
    {
        path: '',
        component: _portfolio_no_space_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioNoSpaceComponent"],
    }
];
class PortfolioNoSpaceModule {
}
PortfolioNoSpaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortfolioNoSpaceModule });
PortfolioNoSpaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortfolioNoSpaceModule_Factory(t) { return new (t || PortfolioNoSpaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioNoSpaceModule, { declarations: [_portfolio_no_space_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioNoSpaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioNoSpaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_portfolio_no_space_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioNoSpaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-no-space-portfolio-no-space-module-es2015.js.map