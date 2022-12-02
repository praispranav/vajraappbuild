function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio5columns-portfolio5columns-module"], {
  /***/
  "./src/app/portfolio/portfolio5columns/portfolio5columns.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/portfolio/portfolio5columns/portfolio5columns.component.ts ***!
    \****************************************************************************/

  /*! exports provided: Portfolio5columnsComponent */

  /***/
  function srcAppPortfolioPortfolio5columnsPortfolio5columnsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portfolio5columnsComponent", function () {
      return Portfolio5columnsComponent;
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


    var _sofbox_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../sofbox/components/loader/loader.component */
    "./src/app/sofbox/components/loader/loader.component.ts");
    /* harmony import */


    var _sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component */
    "./src/app/sofbox/components/partials/headers/v-two-header-style1/v-two-header-style1.component.ts");
    /* harmony import */


    var _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component */
    "./src/app/sofbox/components/banner/v-two-banner-style1/v-two-banner-style1.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_portfolio_box_v_two_portfolio_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../sofbox/components/v-two-portfolio-box/v-two-portfolio-box.component */
    "./src/app/sofbox/components/v-two-portfolio-box/v-two-portfolio-box.component.ts");
    /* harmony import */


    var _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component */
    "./src/app/sofbox/components/partials/footers/v-two-footer-style2/v-two-footer-style2.component.ts");
    /* harmony import */


    var _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component */
    "./src/app/sofbox/components/v-two-testimonial-carousel/v-two-testimonial-carousel.component.ts"); // @ts-ignore
    // @ts-ignore


    var Portfolio5columnsComponent = /*#__PURE__*/function () {
      function Portfolio5columnsComponent(plugins) {
        _classCallCheck(this, Portfolio5columnsComponent);

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
          _is_active: true,
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
          is_link: true
        }];
        this.portfolioList = [{
          title: 'Dignissimos wisi cillum',
          desc: 'Print — Branding',
          image: './assets/sofbox-v2/images/home-1/16.jpg',
          "class": 'creative print-branding',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Wordpress — eCommerce',
          image: './assets/sofbox-v2/images/home-1/17.jpg',
          "class": 'creative wordpress-ecommerce',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Wordpress — eCommerce',
          image: './assets/sofbox-v2/images/home-1/18.jpg',
          "class": 'print-branding wordpress-ecommerce',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Print — Branding',
          image: './assets/sofbox-v2/images/home-1/16.jpg',
          "class": '',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Wordpress — eCommerce',
          image: './assets/sofbox-v2/images/home-1/17.jpg',
          "class": 'creative design print-branding wordpress-ecommerce',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Wordpress — eCommerce',
          image: './assets/sofbox-v2/images/home-1/18.jpg',
          "class": 'creative print-branding wordpress-ecommerce',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Design',
          image: './assets/sofbox-v2/images/home-1/16.jpg',
          "class": 'creative design',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Print — Branding',
          image: './assets/sofbox-v2/images/home-1/17.jpg',
          "class": 'print-branding',
          link: '/portfolio-details'
        }, {
          title: 'Dignissimos wisi cillum',
          desc: 'Wordpress — eCommerce',
          image: './assets/sofbox-v2/images/home-1/18.jpg',
          "class": 'wordpress-ecommerce',
          link: '/portfolio-details'
        }, {
          title: 'Stan’s Office Gateway',
          desc: 'Creative',
          image: './assets/sofbox-v2/images/home-1/18.jpg',
          "class": 'creative',
          link: '/portfolio-details'
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

      _createClass(Portfolio5columnsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Init all plugins...
          var current = this; // tslint:disable-next-line:only-arrow-functions

          setTimeout(function () {
            current.plugins.index();
          }, 200);
        }
      }]);

      return Portfolio5columnsComponent;
    }();

    Portfolio5columnsComponent.ɵfac = function Portfolio5columnsComponent_Factory(t) {
      return new (t || Portfolio5columnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sofbox_plugins_service__WEBPACK_IMPORTED_MODULE_3__["PluginsService"]));
    };

    Portfolio5columnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Portfolio5columnsComponent,
      selectors: [["app-portfolio5columns"]],
      decls: 75,
      vars: 8,
      consts: [[3, "logoImg", "navItemList"], ["title", "Portfolio 5 Columns"], ["bannerLinks", ""], [1, "breadcrumb", "main-bg"], [1, "breadcrumb-item"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-home", "mr-1"], [1, "breadcrumb-item", "active"], [1, "main-content", "overflow-hidden"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "iq-masonry-block"], [1, "isotope-filters", "isotope-tooltip"], ["data-filter", "", 1, "active"], [1, "post_no"], ["data-filter", ".creative"], ["data-filter", ".design"], ["data-filter", ".print-branding"], ["data-filter", ".wordpress-ecommerce"], [1, "iq-masonry", "iq-columns-5"], [3, "List"], [3, "footerLogo", "footerText", "footerTitle", "footerDescription"], ["menu", ""], ["href", "javascript:void(0)", 1, "text-white"], ["about_us", ""], ["testimonial", ""], [3, "testimonialList"]],
      template: function Portfolio5columnsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-v-two-header-style1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-v-two-banner-style1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Portfolio 5 Columns");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Print \u2014 Branding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wordpress \u2014 eCommerce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-v-two-portfolio-box", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "app-v-two-footer-style2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Theme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "About Sofbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Roadmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "How it Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-v-two-testimonial-carousel", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logoImg", ctx.navLogo)("navItemList", ctx.navItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("List", ctx.portfolioList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLogo", ctx.footerLogo)("footerText", ctx.footerText)("footerTitle", ctx.footerTitle)("footerDescription", ctx.footerDescription);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("testimonialList", ctx.List);
        }
      },
      directives: [_sofbox_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _sofbox_components_partials_headers_v_two_header_style1_v_two_header_style1_component__WEBPACK_IMPORTED_MODULE_5__["VTwoHeaderStyle1Component"], _sofbox_components_banner_v_two_banner_style1_v_two_banner_style1_component__WEBPACK_IMPORTED_MODULE_6__["VTwoBannerStyle1Component"], _sofbox_components_v_two_portfolio_box_v_two_portfolio_box_component__WEBPACK_IMPORTED_MODULE_7__["VTwoPortfolioBoxComponent"], _sofbox_components_partials_footers_v_two_footer_style2_v_two_footer_style2_component__WEBPACK_IMPORTED_MODULE_8__["VTwoFooterStyle2Component"], _sofbox_components_v_two_testimonial_carousel_v_two_testimonial_carousel_component__WEBPACK_IMPORTED_MODULE_9__["VTwoTestimonialCarouselComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Portfolio5columnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio5columns',
          templateUrl: './portfolio5columns.component.html',
          styleUrls: ['./portfolio5columns.component.css'],
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
  "./src/app/portfolio/portfolio5columns/portfolio5columns.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/portfolio/portfolio5columns/portfolio5columns.module.ts ***!
    \*************************************************************************/

  /*! exports provided: Portfolio5columnsModule */

  /***/
  function srcAppPortfolioPortfolio5columnsPortfolio5columnsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portfolio5columnsModule", function () {
      return Portfolio5columnsModule;
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
    /*! ../../sofbox/sofbox.module */
    "./src/app/sofbox/sofbox.module.ts");
    /* harmony import */


    var _portfolio5columns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./portfolio5columns.component */
    "./src/app/portfolio/portfolio5columns/portfolio5columns.component.ts");

    var routes = [{
      path: '',
      component: _portfolio5columns_component__WEBPACK_IMPORTED_MODULE_4__["Portfolio5columnsComponent"]
    }];

    var Portfolio5columnsModule = function Portfolio5columnsModule() {
      _classCallCheck(this, Portfolio5columnsModule);
    };

    Portfolio5columnsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: Portfolio5columnsModule
    });
    Portfolio5columnsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function Portfolio5columnsModule_Factory(t) {
        return new (t || Portfolio5columnsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Portfolio5columnsModule, {
        declarations: [_portfolio5columns_component__WEBPACK_IMPORTED_MODULE_4__["Portfolio5columnsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Portfolio5columnsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_portfolio5columns_component__WEBPACK_IMPORTED_MODULE_4__["Portfolio5columnsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _sofbox_sofbox_module__WEBPACK_IMPORTED_MODULE_3__["SofboxModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=portfolio-portfolio5columns-portfolio5columns-module-es5.js.map