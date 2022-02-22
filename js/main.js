/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/graph/graph.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/graph/graph.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $jsGraphNav = $('.js-graph-nav'),
      $jsGraphSlider = $('.js-graph-slider'),
      $graphNavItem = $('.js-graph-nav-item');
  $jsGraphSlider.slick({
    fade: true,
    infinite: false,
    // asNavFor: '.js-graph-nav',
    prevArrow: $('.js-graph-prev'),
    nextArrow: $('.js-graph-next'),
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        asNavFor: '.js-graph-nav'
      }
    }, {
      breakpoint: 769,
      settings: {}
    }]
  });
  $jsGraphNav.slick({
    infinite: false,
    slidesToShow: 12,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.js-graph-slider',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 10
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 8
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    }]
  });
  var idx = $jsGraphSlider.slick('slickCurrentSlide');
  changeCurrentSlide(idx);
  $jsGraphSlider.on("beforeChange", function (event, slide, currentSlide, nextSlide) {
    changeCurrentSlide(nextSlide);
    var $width = $(window).width();
    if ($width < 769) $jsGraphNav.slick('slickGoTo', nextSlide);
  });

  function changeCurrentSlide(idx) {
    $graphNavItem.removeClass("active");
    $graphNavItem.eq(idx).addClass("active");
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $window = $(window);
  var $jsMenuItem = $('.js-menu-item'),
      $jsHeader = $('.js-header'),
      $jsSubmenu = $('.js-submenu');
  var prevmenu = null;
  var countClick = null;
  var prevSubMenu = null;
  $('html body').on('click', '.js-menu-item', function () {
    $jsSubmenu.removeClass('height');
    var submenu = $(this).attr('data-submenu');
    if (submenu === 'false') return;
    var currentmenu = $(this).attr('data-name');
    var width = $window.width();
    if (width > 1040 && prevSubMenu) prevSubMenu.fadeOut();

    if (prevmenu === currentmenu && !countClick) {
      setTimeout(function () {
        $('.js-more-menu').fadeOut();
        $jsHeader.removeClass('show');
      }, 500);
      countClick = 1;
    } else {
      $jsHeader.addClass('show');
      $(this).children('.js-submenu').addClass('height');
      $(this).children('.js-submenu').delay(300).fadeIn();
      countClick = null;
    }

    prevmenu = currentmenu;
    prevSubMenu = $(this).children('.js-submenu');
  });
  var $jsFlexMenu = $('.js-flexmenu');
  $window.on('click', function (e) {
    if (!$jsFlexMenu.is(e.target) && $jsFlexMenu.has(e.target).length === 0) {
      hideMenu();
    }
  });
  $('html body').on('click', '.js-menu-item a', function (e) {
    e.preventDefault();
    hideMenu();
    $('.js-more-menu').fadeOut();
    var href = $(this).attr('href');
    setTimeout(function () {
      location.href = href;
    }, 500);
  });

  function hideMenu() {
    var width = $window.width();
    if (width > 1040) $jsSubmenu.fadeOut();
    $jsSubmenu.children('.js-submenu').removeClass('height');
    setTimeout(function () {
      $jsHeader.removeClass('show');
    }, 500);
    prevmenu = null;
    countClick = null;
  } // Scroll Document And Fixed Header


  var fixed = false;
  $window.on('load scroll', function () {
    var $windowScorrTop = $window.scrollTop();

    if ($windowScorrTop > 400 && !fixed) {
      $jsHeader.addClass('fixed');
      fixed = true;
    }

    if ($windowScorrTop < 400 && fixed) {
      $jsHeader.css("opacity", "0");
      setTimeout(function () {
        $jsHeader.removeClass('fixed');
        $jsHeader.delay(100).animate({
          "opacity": "1"
        });
      }, 300);
      fixed = false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/history/history.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/history/history.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var $jsHistoryTop = $('.js-history-top');
  var $jsHistoryYear = $('.js-history-year');
  var params = {
    // infinite: true,
    slidesToShow: 2,
    touchMove: false,
    swipe: false,
    draggable: false // arrows: false,

  };
  $jsHistoryTop.slick(_objectSpread(_objectSpread({}, params), {}, {
    asNavFor: ".js-history-year",
    // variableWidth: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true,
        slidesToShow: 1,
        infinite: true,
        variableWidth: false,
        asNavFor: ".js-history-year-mob"
      }
    }]
  }));
  $jsHistoryYear.slick(_objectSpread(_objectSpread({}, params), {}, {
    variableWidth: true,
    asNavFor: ".js-history-top",
    prevArrow: $('.js-history-prev'),
    nextArrow: $('.js-history-next'),
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        variableWidth: false
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        variableWidth: true
      }
    }]
  }));
  $('.js-history-year-mob').slick({
    slidesToShow: 2,
    focusOnSelect: true,
    asNavFor: ".js-history-top",
    prevArrow: $('.js-mhistory-prev'),
    nextArrow: $('.js-mhistory-next'),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $window = $(window);
  var $flexMenu = $('.js-flexmenu');
  var $flexMenuContainer = $('.js-flexmenu__container');
  var $menuItems = $flexMenu.find('.js-menu-item');
  var fixedItems = $menuItems.length;
  var clonedView = [];
  var clonedMore = [];
  var newSubMenu = null;
  var width = $window.width();
  if (width > 1039 && fixedItems > 6) flexibleSetting(5, 4);
  $window.on('resize', function () {
    var width = $window.width();
    if (width > 1039 && fixedItems > 6) flexibleSetting(5, 4);
  });
  $('body').on('click', '.js-menu-btn-more', function () {
    newSubMenu.fadeToggle();
  });
  $(window).on('click', function (e) {
    if (!$('.js-menu-btn-more').is(e.target) && $('.js-menu-btn-more').has(e.target).length === 0 && !$('.js-more-menu').is(e.target) && $('.js-more-menu').has(e.target).length === 0) {
      if (newSubMenu) newSubMenu.fadeOut();
    }
  });

  function flexibleSetting(viewItem, addMoreItems) {
    for (var i = 0; i < fixedItems; i++) {
      if (i < viewItem) clonedView.push($menuItems[i]);
      if (i > addMoreItems) clonedMore.push($menuItems[i]);
    }

    var buttonMore = "\n        <button class=\"menu__more-btn js-menu-item js-menu-btn-more\">\u0415\u0449\u0451...</button>\n        ";
    newSubMenu = $('<ul class="menu__more-list js-more-menu"></ul>');
    newSubMenu.html(clonedMore);
    var template = $('<div class="menu__item menu__more"></div>');
    template.append(buttonMore);
    template.append(newSubMenu);
    $flexMenuContainer.html(clonedView);
    $flexMenuContainer.append(template);
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/peculiarities/peculiarities.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/peculiarities/peculiarities.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $peculiaritiesList = $('.js-peculiarities-list');
  var params = {
    slidesToShow: 4,
    prevArrow: $('.js-peculiarities-prev'),
    nextArrow: $('.js-peculiarities-next'),
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1281,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  $peculiaritiesList.slick(params);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/global.js":
/*!*********************************!*\
  !*** ./src/js/import/global.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  // Modal Box
  $('.js-popup-link').magnificPopup({
    src: $(this).attr('data-mfp-src'),
    type: 'inline',
    callbacks: {
      beforeOpen: function beforeOpen() {
        $('body').addClass('mfp-zoom-out-cur');
      },
      beforeClose: function beforeClose() {
        $('body').removeClass('mfp-zoom-out-cur');
      }
    }
  });
  $('.js-modal-close').on('click', function () {
    $.magnificPopup.close();
  }); // Modal Box
  // Custom Smoth Scroll animation

  $(document).on('click', '.js-anchor', function (event) {
    event.preventDefault();

    if ($(this).hasClass('navigation__nav-link')) {
      $('.navigation__nav-link').removeClass('active');
      $(this).addClass('active');
    }

    $('body').css('overflow', 'visible');
    $('html, body').stop(true, true).delay(200).animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
  }); // Slick Slider

  var $jsSlick = $('.js-slick');
  $.each($jsSlick, function (i) {
    $jsSlick.eq(i).slick({
      fade: true,
      prevArrow: $('.js-slick-prev').eq(i),
      nextArrow: $('.js-slick-next').eq(i),
      responsive: [{
        breakpoint: 1130,
        settings: {
          autoplay: true,
          autoplaySpeed: 3000
        }
      }, {
        breakpoint: 769,
        settings: {
          fade: true,
          autoplay: false,
          infinite: false,
          adaptiveHeight: true
        }
      }]
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/js/import/global.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/history/history */ "./src/blocks/modules/history/history.js");
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_history_history__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_graph_graph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/graph/graph */ "./src/blocks/modules/graph/graph.js");
/* harmony import */ var _modules_graph_graph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_graph_graph__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_peculiarities_peculiarities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/peculiarities/peculiarities */ "./src/blocks/modules/peculiarities/peculiarities.js");
/* harmony import */ var _modules_peculiarities_peculiarities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_peculiarities_peculiarities__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map