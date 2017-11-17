var app =
webpackJsonpapp([0],[
/* 0 */
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	window.InfoBox = __webpack_require__(/*! google-maps-infobox */ 5);
	var config = __webpack_require__(/*! ./module/config */ 6);

	/**
	 * @global
	 * @type {{init: Function, activateHeaderSpy: (*|exports|module.exports), activateScrollToTopSpy: (*|exports|module.exports), activateUIPanel: (*|exports|module.exports)}}
	 */
	module.exports = {
	  /**
	   * @param {Object} [options]
	   * @param {string} options[].urlPrefix - path that is appended to images,
	   */
	  initTheme: function (options) {

	    var _ = __webpack_require__(/*! lodash */ 7);
	    if (options) {
	      _.each(options, function (value, key) {
	        config[key] = value;
	      });
	    }

	    if (config.loadSvgWithAjax === true) {
	      $(document.body).prepend($('<div>').load(config.assetsPathPrefix + 'img/sprite-inline.svg'));
	    }

	    __webpack_require__(/*! jquery */ 1);
	    __webpack_require__(/*! slick-carousel/slick/slick.js */ 9);
	    __webpack_require__(/*! select2 */ 10);
	    __webpack_require__(/*! bootstrap-sass */ 11);
	    __webpack_require__(/*! ion-rangeslider */ 12);
	    __webpack_require__(/*! jquery-bonsai */ 13);
	    __webpack_require__(/*! jquery-qubit */ 15);
	    __webpack_require__(/*! ./module/parsley-bootstrap */ 17)();
	    __webpack_require__(/*! parsleyjs */ 18);
	    __webpack_require__(/*! jquery-colorbox */ 19);
	    __webpack_require__(/*! pnotify */ 20);
	    __webpack_require__(/*! google-maps-infobox */ 5);
	    __webpack_require__(/*! google-marker-clusterer-plus */ 22);
	    __webpack_require__(/*! plyr */ 23);
	    __webpack_require__(/*! photoswipe/dist/photoswipe */ 25);
	    __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ 26);
	    __webpack_require__(/*! smoothscroll-for-websites */ 27);
	    __webpack_require__(/*! bootstrap-daterangepicker */ 28);
	    __webpack_require__(/*! dragscroll */ 128);
	    __webpack_require__(/*! dropzone */ 130);

	    __webpack_require__(/*! ./module/workarounds */ 132)();
	    __webpack_require__(/*! ./module/grid-size */ 133).watch();
	    __webpack_require__(/*! ./module/ui/auth-btn */ 134)();
	    __webpack_require__(/*! ./module/ui/navbar-toggle */ 135)();
	    __webpack_require__(/*! ./module/ui/show-hide-btn */ 136)();
	    __webpack_require__(/*! ./module/ui/show-headline */ 137)();
	    __webpack_require__(/*! ./module/ui/show-form */ 138)();
	    __webpack_require__(/*! ./module/ui/comments */ 139)();
	    __webpack_require__(/*! ./module/ui/uncollapser */ 140)();
	    __webpack_require__(/*! ./module/css-class-helper */ 141).initParsleyHelper();
	    __webpack_require__(/*! ./module/data-api/datetime */ 142)();
	    __webpack_require__(/*! ./module/ui/range-input */ 143).initRangeInput();
	    __webpack_require__(/*! ./module/ui/properties-listing */ 144)();
	    __webpack_require__(/*! ./module/ui/properties-table */ 145)();
	    __webpack_require__(/*! ./module/ui/chart-current-balance */ 150)();
	    __webpack_require__(/*! ./module/data-api/ckeditor */ 153)();
	    __webpack_require__(/*! ./module/ui/tags-favorites */ 154)();
	    __webpack_require__(/*! ./module/ui/favorites */ 155)();
	    __webpack_require__(/*! ./module/ui/form-property */ 156)();
	    __webpack_require__(/*! ./module/ui/chart-profile-statistics */ 159)();
	    __webpack_require__(/*! ./module/ui/chart-property-statistics */ 160)();
	    //require('./module/ui/plan')();
	    __webpack_require__(/*! ./module/ui/map-fullscreen */ 161)();
	  },
	  activateHeaderSpy: __webpack_require__(/*! ./module/ui/header-scroll-spy */ 162),
	  activateScrollToTopSpy: __webpack_require__(/*! ./module/ui/scrollup-spy */ 163),
	  activateUIPanel: __webpack_require__(/*! ./demo/ui-panel */ 164),
	  config: config,
	  gridSize: __webpack_require__(/*! ./module/grid-size */ 133),
	  createMap: __webpack_require__(/*! ./module//map */ 165).create,
	  geolocation: __webpack_require__(/*! ./module/gmap/geolocation */ 167),
	  createGmapMarker: __webpack_require__(/*! ./module/gmap/marker */ 169),
	  createGmapInfoboxMarker: __webpack_require__(/*! ./module/gmap/infobox-marker */ 170).create,
	  createGmapClustering: __webpack_require__(/*! ./module/gmap/clusterer */ 172).create,
	  createLeafletInfoboxMarker: __webpack_require__(/*! ./module/leaflet */ 173).addInfoboxMarker,
	  notifier: __webpack_require__(/*! ./module/notifier */ 168),
	  createPhotoSwipe: __webpack_require__(/*! ./module/ui/photo-swipe */ 175).init,
	  scrollAnimation: __webpack_require__(/*! ./module/ui/scroll-animation */ 176),
	  Vivus: __webpack_require__(/*! vivus */ 180),
	  CountUp: __webpack_require__(/*! countup */ 179),
	  utils: __webpack_require__(/*! ./module/utils */ 181),
	  rangeInputInteraction: __webpack_require__(/*! ./module/ui/range-input */ 143).rangeInputInteraction
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 1 */
/*!********************************!*\
  !*** jquery (bower component) ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./dist/jquery.js */ 2);

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*****************************!*\
  !*** ./js/module/config.js ***!
  \*****************************/
/***/ function(module, exports) {

	"use strict";
	module.exports = {
	  colorTheme: 'default',
	  assetsPathPrefix: 'assets/',
	  latitude: "33.74229160384012",
	  longitude: "-117.86845207214355",
	  ajaxUrl: null
	};


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/*!***************************************!*\
  !*** jquery-bonsai (bower component) ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./jquery.bonsai.js */ 14);

/***/ },
/* 14 */,
/* 15 */
/*!**************************************!*\
  !*** jquery-qubit (bower component) ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./jquery.qubit.js */ 16);

/***/ },
/* 16 */,
/* 17 */
/*!****************************************!*\
  !*** ./js/module/parsley-bootstrap.js ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = function () {
	  window.ParsleyConfig = {
	    errorClass: 'has-error',
	    successClass: 'has-success',
	    classHandler: function (ParsleyField) {
	      return ParsleyField.$element.parents('.form-group');
	    },
	    errorsContainer: function (ParsleyField) {
	      return ParsleyField.$element.parents('.form-group');
	    },
	    errorsWrapper: '<div class="help-block">',
	    errorTemplate: '<div></div>'
	  };
	};


/***/ },
/* 18 */,
/* 19 */,
/* 20 */
/*!*********************************!*\
  !*** pnotify (bower component) ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./pnotify.core.js */ 21);

/***/ },
/* 21 */,
/* 22 */,
/* 23 */
/*!******************************!*\
  !*** plyr (bower component) ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/js/plyr.js */ 24);

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */
/*!*************************************************************************************************************************!*\
  !*** /home/alexei/projects/html_realtyspace/realtyspace.dev/web/app/themes/realtyspace/assets/~/moment/locale ^\.\/.*$ ***!
  \*************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 31,
		"./af.js": 31,
		"./ar": 32,
		"./ar-ma": 33,
		"./ar-ma.js": 33,
		"./ar-sa": 34,
		"./ar-sa.js": 34,
		"./ar-tn": 35,
		"./ar-tn.js": 35,
		"./ar.js": 32,
		"./az": 36,
		"./az.js": 36,
		"./be": 37,
		"./be.js": 37,
		"./bg": 38,
		"./bg.js": 38,
		"./bn": 39,
		"./bn.js": 39,
		"./bo": 40,
		"./bo.js": 40,
		"./br": 41,
		"./br.js": 41,
		"./bs": 42,
		"./bs.js": 42,
		"./ca": 43,
		"./ca.js": 43,
		"./cs": 44,
		"./cs.js": 44,
		"./cv": 45,
		"./cv.js": 45,
		"./cy": 46,
		"./cy.js": 46,
		"./da": 47,
		"./da.js": 47,
		"./de": 48,
		"./de-at": 49,
		"./de-at.js": 49,
		"./de.js": 48,
		"./dv": 50,
		"./dv.js": 50,
		"./el": 51,
		"./el.js": 51,
		"./en-au": 52,
		"./en-au.js": 52,
		"./en-ca": 53,
		"./en-ca.js": 53,
		"./en-gb": 54,
		"./en-gb.js": 54,
		"./en-ie": 55,
		"./en-ie.js": 55,
		"./en-nz": 56,
		"./en-nz.js": 56,
		"./eo": 57,
		"./eo.js": 57,
		"./es": 58,
		"./es.js": 58,
		"./et": 59,
		"./et.js": 59,
		"./eu": 60,
		"./eu.js": 60,
		"./fa": 61,
		"./fa.js": 61,
		"./fi": 62,
		"./fi.js": 62,
		"./fo": 63,
		"./fo.js": 63,
		"./fr": 64,
		"./fr-ca": 65,
		"./fr-ca.js": 65,
		"./fr-ch": 66,
		"./fr-ch.js": 66,
		"./fr.js": 64,
		"./fy": 67,
		"./fy.js": 67,
		"./gd": 68,
		"./gd.js": 68,
		"./gl": 69,
		"./gl.js": 69,
		"./he": 70,
		"./he.js": 70,
		"./hi": 71,
		"./hi.js": 71,
		"./hr": 72,
		"./hr.js": 72,
		"./hu": 73,
		"./hu.js": 73,
		"./hy-am": 74,
		"./hy-am.js": 74,
		"./id": 75,
		"./id.js": 75,
		"./is": 76,
		"./is.js": 76,
		"./it": 77,
		"./it.js": 77,
		"./ja": 78,
		"./ja.js": 78,
		"./jv": 79,
		"./jv.js": 79,
		"./ka": 80,
		"./ka.js": 80,
		"./kk": 81,
		"./kk.js": 81,
		"./km": 82,
		"./km.js": 82,
		"./ko": 83,
		"./ko.js": 83,
		"./lb": 84,
		"./lb.js": 84,
		"./lo": 85,
		"./lo.js": 85,
		"./lt": 86,
		"./lt.js": 86,
		"./lv": 87,
		"./lv.js": 87,
		"./me": 88,
		"./me.js": 88,
		"./mk": 89,
		"./mk.js": 89,
		"./ml": 90,
		"./ml.js": 90,
		"./mr": 91,
		"./mr.js": 91,
		"./ms": 92,
		"./ms-my": 93,
		"./ms-my.js": 93,
		"./ms.js": 92,
		"./my": 94,
		"./my.js": 94,
		"./nb": 95,
		"./nb.js": 95,
		"./ne": 96,
		"./ne.js": 96,
		"./nl": 97,
		"./nl.js": 97,
		"./nn": 98,
		"./nn.js": 98,
		"./pa-in": 99,
		"./pa-in.js": 99,
		"./pl": 100,
		"./pl.js": 100,
		"./pt": 101,
		"./pt-br": 102,
		"./pt-br.js": 102,
		"./pt.js": 101,
		"./ro": 103,
		"./ro.js": 103,
		"./ru": 104,
		"./ru.js": 104,
		"./se": 105,
		"./se.js": 105,
		"./si": 106,
		"./si.js": 106,
		"./sk": 107,
		"./sk.js": 107,
		"./sl": 108,
		"./sl.js": 108,
		"./sq": 109,
		"./sq.js": 109,
		"./sr": 110,
		"./sr-cyrl": 111,
		"./sr-cyrl.js": 111,
		"./sr.js": 110,
		"./sv": 112,
		"./sv.js": 112,
		"./sw": 113,
		"./sw.js": 113,
		"./ta": 114,
		"./ta.js": 114,
		"./te": 115,
		"./te.js": 115,
		"./th": 116,
		"./th.js": 116,
		"./tl-ph": 117,
		"./tl-ph.js": 117,
		"./tlh": 118,
		"./tlh.js": 118,
		"./tr": 119,
		"./tr.js": 119,
		"./tzl": 120,
		"./tzl.js": 120,
		"./tzm": 121,
		"./tzm-latn": 122,
		"./tzm-latn.js": 122,
		"./tzm.js": 121,
		"./uk": 123,
		"./uk.js": 123,
		"./uz": 124,
		"./uz.js": 124,
		"./vi": 125,
		"./vi.js": 125,
		"./zh-cn": 126,
		"./zh-cn.js": 126,
		"./zh-tw": 127,
		"./zh-tw.js": 127
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 30;


/***/ },
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/*!************************************!*\
  !*** dragscroll (bower component) ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./dragscroll.js */ 129);

/***/ },
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/*!**********************************!*\
  !*** ./js/module/workarounds.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Browser workarounds for providing a better experience
	 * on some browsers in certain edge cases
	 ==============================================================*/
	module.exports = function () {
	  $(function () {
	    var nua = navigator.userAgent;
	    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1);
	    if (isAndroid) {
	      $('select.form-control').removeClass('form-control search__form-control search__form-control--select').css('width', '100%')
	    }
	  });

	  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	    var msViewportStyle = document.createElement('style')
	    msViewportStyle.appendChild(
	      document.createTextNode(
	        '@-ms-viewport{width:auto!important}'
	      )
	    )
	    document.querySelector('head').appendChild(msViewportStyle)
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 133 */
/*!********************************!*\
  !*** ./js/module/grid-size.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * JS helper for improving responsive experience
	 ==============================================================*/
	var currentGridSize = null;

	exports.get = function () {
	  return currentGridSize;
	};

	exports.watch = function () {
	  var winWidth = window.innerWidth,
	    screenList = ['xs', 'sm', 'md', 'lg'],
	    $body = $('body');

	  function checkScreen(width) {
	    currentGridSize = screenList[0];

	    if (width < 767) currentGridSize = screenList[0];
	    if (width >= 767) currentGridSize = screenList[1];
	    if (width > 992) currentGridSize = screenList[2];
	    if (width > 1200) currentGridSize = screenList[3];

	    $body.removeClass(screenList.join(' '));
	    $body.addClass(currentGridSize);
	  }

	  checkScreen(winWidth);

	  $(window).resize(function () {
	    checkScreen(window.innerWidth);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 134 */
/*!**********************************!*\
  !*** ./js/module/ui/auth-btn.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  function closeMenu(event) {
	    var clickover = $(event.target);
	    var _opened = $(".navbar-collapse").hasClass("collapse in");
	    if (_opened === true && !clickover.hasClass("js-navbar-toggle")) {
	      $(".js-navbar-toggle").click();
	    }
	  }

	  function openDropdown(event, dropdown) {
	    closeMenu(event);
	    $('.auth__nav-item').removeClass('open');
	    $(dropdown).closest('li').addClass('open');
	  }

	  $(document).on('click', function () {
	    $('.js-restore-form').closest('li').removeClass('open');
	  });

	  $('.js-user-login-btn').on('click', function (event) {
	    closeMenu(event);
	    $('.auth__nav-item').removeClass('open');
	    if ($(this).hasClass('active')) {
	      $(this).removeClass('active')
	    } else {
	      $(this).addClass('active');
	      $('.js-login-form').closest('li').addClass('open');
	    }
	    return false;
	  });

	  $('.js-user-logged-btn').on('click', function (event) {
	    closeMenu(event);
	    $('.auth__nav-item').removeClass('open');
	    if ($(this).hasClass('active')) {
	      $(this).removeClass('active')
	    } else {
	      $(this).addClass('active');
	      $('.js-user-logged-in').closest('li').addClass('open');
	    }
	    return false;
	  });

	  $('.js-user-register').on('click', function (event) {
	    openDropdown(event, '.js-register-form');
	  });
	  $('.js-user-restore').on('click', function (event) {
	    openDropdown(event, '.js-restore-form');
	  });
	  $('.js-restore-form').on('click', function (event) {
	    event.stopPropagation();
	  });
	  $('.js-user-login').on('click', function (event) {
	    openDropdown(event, '.js-login-form');
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 135 */
/*!***************************************!*\
  !*** ./js/module/ui/navbar-toggle.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";

	module.exports = function () {
	  /**
	   * Display language bar in responsive mode
	   */

	  var $navBar = $('#navbar-collapse-1'),
	    $siteWrap = $('.js-site-wrap'),
	    $navbarRow = $('.js-navbar-row'),
	    $navbarToggle = $('.js-navbar-toggle'),
	    $header = $('.header'),
	    $navBarClone;

	  var gridSize = __webpack_require__(/*! ../grid-size */ 133);

	  var xDown = null;
	  var yDown = null;

	  function handleTouchStart(evt) {
	    xDown = evt.touches[0].clientX;
	    yDown = evt.touches[0].clientY;
	  }

	  function handleTouchMove(evt) {
	    if (!xDown || !yDown || !evt) {
	      return;
	    }

	    var xUp = evt.touches[0].clientX;
	    var yUp = evt.touches[0].clientY;

	    var xDiff = xDown - xUp;
	    var yDiff = yDown - yUp;

	    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
	      if (xDiff > 0) {
	        /* left swipe */
	      } else {
	        /* right swipe */
	        if ($siteWrap.hasClass('site-wrap--move')) {
	          requestAnimationFrame(function () {
	            $siteWrap.removeClass('site-wrap--move');
	            $navbarToggle.removeClass('collapsed');
	            $header.removeClass('header--mob-opened');
	          });
	        }
	      }
	    } else {
	      if (yDiff > 0) {
	        /* up swipe */
	      } else {
	        /* down swipe */
	      }
	    }
	    /* reset values */
	    xDown = null;
	    yDown = null;
	  }

	  function moveMenu (mobile) {
	    $navBarClone = $navBar.detach();
	    if(mobile) {
	      $siteWrap.before($navBarClone);
	      $navBarClone.addClass('navbar__wrap--init');
	    } else {
	      $navbarRow.append($navBarClone);
	      $navBarClone.removeClass('navbar__wrap--init');
	      $siteWrap.removeClass('site-wrap--move');
	      $navbarToggle.removeClass('js-navbar-toggle');
	    }
	  }

	  function initMenu () {
	    if (gridSize.get() === 'xs') {
	      document.addEventListener('touchstart', handleTouchStart, false);
	      document.addEventListener('touchmove', handleTouchMove, false);
	      handleTouchMove();
	      moveMenu(true);
	    } else {
	      // feature check direction where open dropdown menu
	      $('.js-dropdown').each(function (i, item) {
	        var $dropdown = $(item).find('.js-dropdown-menu');
	        var offsetLeft = $(item).offset().left;
	        var offsetRight = ($(window).width() - ($(item).offset().left + $(item).outerWidth()));
	        if (offsetLeft < $dropdown.width() ) {
	          $dropdown.removeClass('navbar__dropdown--left').removeClass('navbar__dropdown--right').addClass('navbar__dropdown--left');
	        } else if (offsetRight < $dropdown.width() ){
	          $dropdown.removeClass('navbar__dropdown--left').removeClass('navbar__dropdown--right').addClass('navbar__dropdown--right');
	        }
	      });

	      moveMenu(false);
	    }
	  }

	  $navbarToggle.on('click', function () {
	    var $this = $(this);
	    requestAnimationFrame(function () {
	      $this.toggleClass('collapsed');
	      requestAnimationFrame(function () {
	        $siteWrap.toggleClass('site-wrap--move');
	        $header.toggleClass('header--mob-opened');
	      });
	    });
	  });

	  $('.js-dropdown > a').on('click', function () {
	    var $dropdown = $(this).closest('.js-dropdown');
	    if ($dropdown.hasClass('open')) {
	      $dropdown.removeClass('open');
	    } else {
	      if (gridSize.get() === 'xs') {
	        $('html, body').scrollTop(0);
	      }
	      $dropdown.addClass('open');
	    }
	  });

	  $('.js-navbar-sublink')
	    .on('click', function () {
	      var parentItem = $(this).closest('li');
	      parentItem.addClass('open');
	    });

	  $('.js-navbar-submenu-back').on('click', function () {
	    var parentItem = $(this).closest('.js-dropdown');
	    parentItem.removeClass('open');
	  });

	  initMenu();

	  var throttledNavMove = _.throttle(initMenu, 500);
	  $(window).resize(throttledNavMove);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 136 */
/*!***************************************!*\
  !*** ./js/module/ui/show-hide-btn.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * UI Module for opening collapsed blocks on small screens
	 ==============================================================*/
	module.exports = function () {
	  var $toggleBtn = $('.js-goto-btn');

	  $toggleBtn.on('click', function () {
	    var $btn = $(this);
	    var $target = $($btn.data('goto-target'));
	    var $targetWidget = $target.closest('.js-widget');

	    var offsetTop = $targetWidget.offset().top;
	    var time = 800 + (offsetTop / 10);
	    $('html, body').animate({scrollTop: offsetTop}, time, 'linear', function () {
	      $targetWidget.addClass('widget--opened');
	    });

	  });


	  $('.sidebar .js-widget-btn, .widget--collapsing .js-widget-btn').on('click', function(){
	    var $widget = $(this).closest('.js-widget');
	    $widget.addClass('widget--opened');
	  });


	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 137 */
/*!***************************************!*\
  !*** ./js/module/ui/show-headline.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  $("[class$='__headline']").on('click', function () {
	    $(this).addClass('opened');
	  });
	};



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 138 */
/*!***********************************!*\
  !*** ./js/module/ui/show-form.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  $(".js-form-title").on('click', function () {
	    var $this = $(this),
	      $rel = $($this.data('rel')),
	      $map;
	    $rel.toggleClass('opened');
	    $this.toggleClass('active');
	    $map = $rel.find('.js-map');
	    if ($map.length) {
	      google.maps.event.trigger($map[0], 'resize');
	    }
	  });
	};



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 139 */
/*!**********************************!*\
  !*** ./js/module/ui/comments.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $form,
	    $btnReplay = $('.js-comment-reply');
	  $btnReplay.on('click', function () {
	    if (!$form) $form = $($('.js-form-comment-wrap')[0]).clone();
	    $('.js-form-comment-wrap').remove();
	    $btnReplay.show();
	    $(this)
	      .hide()
	      .closest('.js-comment-item')
	      .append($form);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 140 */
/*!*************************************!*\
  !*** ./js/module/ui/uncollapser.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/***************************************************************
	 * Code that adds supports for collapsing some blocks on
	 * small displays and replacing them with buttons, clicking
	 * which, would reveal the hidden block.
	 *
	 * This is done for saving limited screen space
	 * on small displays and improving UX.
	 ==============================================================*/

	module.exports = function () {
	  $('.js-box').on('click', '.js-unhide', function () {
	    var $btn = $(this);
	    var $target = $btn.data('target');
	    var type = $btn.data('type') || 'widget';

	    if ($target === undefined) {
	      $target = $btn.prev();
	      type = 'simple';
	      if (!$target.hasClass('js-unhide-block')) {
	        $target = $btn.closest('.js-unhide-block');
	        type = 'widget';
	      }
	    } else {
	      $target = $('.' + $target);
	    }

	    if (!$target.length) {
	      throw 'Invalid element target';
	    }

	    switch (type) {
	      case 'widget':
	        $target.addClass('opened');
	        break;

	      case 'simple':
	        $target.show();
	        break;
	    }

	    $btn.hide();
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 141 */
/*!***************************************!*\
  !*** ./js/module/css-class-helper.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {exports.initParsleyHelper = function () {
	  __webpack_require__(/*! parsleyjs */ 18);
	  $('.js-parsley').parsley();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 142 */
/*!****************************************!*\
  !*** ./js/module/data-api/datetime.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! bootstrap-daterangepicker */ 28);
	var _ = __webpack_require__(/*! lodash */ 7);

	var detectOpenDirection = function ($item) {
	  var opensDir;
	  var offsetLeft = $item.offset().left;
	  var offsetRight = ($(window).width() - ($item.offset().left + $item.outerWidth()));
	  if (offsetLeft < 600) {
	    opensDir = 'right';
	  } else if (offsetRight < 600) {
	    opensDir = 'left';
	  }
	  return opensDir;
	};

	var buildOptions  = function($item){
	  return _.defaultsDeep(
	    {
	      startDate: $item.data('start-date'),
	      endDate: $item.data('end-date'),
	      timePicker: $item.data('time-picker'),
	      singleDatePicker: $item.data('single-picker'),
	      timePicker24Hour: $item.data('24hr'),
	      locale: {
	        format: $item.data('locale-format')
	      }
	    },
	    {
	      locale: {
	        format: 'MM/DD/YYYY  h:mm A'
	      },
	      timePicker: false,
	      timePickerIncrement: 5,
	      opens: detectOpenDirection($item),
	      autoApply: false
	    }
	  );
	};

	module.exports = function () {
	  $('.js-datetimerange').each(function () {
	    var $fieldsDatetime = $(this);
	    $fieldsDatetime.daterangepicker(buildOptions($fieldsDatetime));
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 143 */
/*!*************************************!*\
  !*** ./js/module/ui/range-input.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {exports.rangeInputInteraction = function(slider) {
	  var $sliderInput = $(slider.input);
	  var $formGroup = $sliderInput.closest('.form-group');
	  var $searchInputsContainer = $formGroup.find('.js-search-inputs');
	  var $searchInputFrom = $searchInputsContainer.find('input[data-input-type="from"]');
	  var $searchInputTo = $searchInputsContainer.find('input[data-input-type="to"]');
	  if ($searchInputFrom.length) $searchInputFrom.val(slider.from);
	  if ($searchInputTo.length) $searchInputTo.val(slider.to);
	};

	exports.initRangeInput = function () {
	  $('.js-field-range').on('input', function () {
	    var $inputFieldRange = $(this);
	    var $formGroup = $inputFieldRange.closest('.form-group');
	    var $sliderInput = $formGroup.find(".js-search-range").data("ionRangeSlider");
	    var key = $inputFieldRange.data('input-type');
	    var value = $inputFieldRange.val();

	    var options = {};
	    options[key] = value;

	    // Call sliders update method
	    $sliderInput.update(options);
	  });

	  $('.js-input-mode').on('click', function () {
	    var $inputModeBtn = $(this);
	    var $formGroup = $inputModeBtn.closest('.form-group');
	    var classMode = $inputModeBtn.data('mode');
	    var mode = $inputModeBtn.data('mode') === 'input' ? 'range' : 'input';
	    $formGroup.removeClass('form-group--input').removeClass('form-group--range');
	    $formGroup.addClass('form-group--' + classMode);
	    $inputModeBtn.data('mode', mode);
	    $inputModeBtn.text(mode);
	  });

	  $('.js-input-commision').on('click', function () {
	    var $inputModeBtn = $(this);
	    var $formGroup = $inputModeBtn.closest('.form-group');
	    var $fieldRange = $formGroup.find('.js-field-range');
	    var mode = $inputModeBtn.data('mode');
	    var newMode = $inputModeBtn.data('mode') === 'rm' ? 'percent' : 'rm';
	    var $sliderInput = $formGroup.find(".js-search-range").data("ionRangeSlider");

	    var options = {};
	    if (mode === 'rm') {
	      options = {
	        min: 0,
	        max: 10000,
	        from: 0,
	        to: 10000,
	        max_postfix: '+',
	        prefix: 'RM ',
	        postfix: ''
	      }
	    } else {
	      options = {
	        min: 0,
	        max: 100,
	        from: 0,
	        to: 100,
	        max_postfix: '',
	        prefix: '',
	        postfix: '%'
	      }

	    }

	    // Call sliders update method
	    $sliderInput.update(options);

	    $inputModeBtn.data('mode', newMode);
	    $inputModeBtn.text(newMode);
	    $fieldRange.val('')
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 144 */
/*!********************************************!*\
  !*** ./js/module/ui/properties-listing.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var _ = __webpack_require__(/*! lodash */ 7);
	  var $btnMore = $('.js-properties-more');
	  if(!$btnMore.length) return;
	  var counter = 0;
	  var $list = $('.js-properties-list');


	  var insertItems = _.debounce(function () {
	    $btnMore.addClass('button--loading');
	    setTimeout(function () {
	      var $demoItems = $list.find('.listing__item:lt(10)').clone();
	      $list.append($demoItems);
	      $btnMore.removeClass('button--loading');
	      counter++;
	    }, 1500);
	  }, 150);

	  $(window).scroll(function(){
	    if( counter > 1 ) return;
	    if ($(window).scrollTop() > $btnMore.offset().top - $(window).height() - 500){
	      insertItems();
	    }
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 145 */
/*!******************************************!*\
  !*** ./js/module/ui/properties-table.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  __webpack_require__(/*! datatables.net-bs */ 146);
	  __webpack_require__(/*! datatables.net-responsive-bs */ 148);

	  var $datatableModal = $('#modal-datatable-detail');

	  $('.js-properties-table')
	    .DataTable({
	      paging: false,
	      searching: false,
	      info: false,
	      responsive: true,
	      columnDefs: [
	        { responsivePriority: 1, targets: 0 },
	        { responsivePriority: 2, targets: -1 }
	      ]
	    })
	    .on('click', 'tbody tr', function (e) {
	      if (e.target.tagName === 'A') return;
	      var row = $(this);
	      $datatableModal
	        .modal('show')
	        .on('shown.bs.modal', function (e) {
	          $datatableModal.find('.modal-body').html($(row).data('info'));
	        });
	    });

	  $('.js-property-table')
	    .DataTable({
	      paging: false,
	      searching: false,
	      info: false,
	      scrollY: 500,
	      responsive: true,
	      columnDefs: [
	        { responsivePriority: 1, targets: 0 },
	        { responsivePriority: 2, targets: -1 }
	      ]
	    })
	    .on('click', 'tbody tr', function (e) {
	      if (e.target.tagName === 'A') return;
	      var row = $(this);
	      $datatableModal
	        .modal('show')
	        .on('shown.bs.modal', function () {
	          $datatableModal.find('.modal-body').html($(row).data('info'));
	        });
	    });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */
/*!***********************************************!*\
  !*** ./js/module/ui/chart-current-balance.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function () {
	  var Chart = __webpack_require__(/*! chart.js */ 151);
	  var data = {
	    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	    datasets: [
	      {
	        label: "My First dataset",
	        fillColor: "rgba(220,220,220,0)",
	        strokeColor: "red",
	        pointColor: "red",
	        //pointStrokeColor: "#fff",
	        //pointHighlightFill: "#fff",
	        //pointHighlightStroke: "rgba(220,220,220,1)",
	        data: [65, 59, 80, 81, 56, 55]
	      }
	    ]
	  };

	  // Get the context of the canvas element we want to select
	  var viewCurrentBalance = document.getElementById("current-balance");
	  if (viewCurrentBalance) {
	    var ctx = viewCurrentBalance.getContext("2d");
	    var chartCurrentBalance = new Chart(ctx).Line(data, {
	      scaleShowGridLines: false,
	      scaleGridLineColor : "rgba(0,0,0,.05)"
	    });
	  }
	};


/***/ },
/* 151 */,
/* 152 */,
/* 153 */
/*!****************************************!*\
  !*** ./js/module/data-api/ckeditor.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {module.exports = function () {

	  $('.js-ckeditor').each(function () {
	    var nameField = $(this).attr('name');
	    CKEDITOR.replace(nameField, {
	        width: '100%',
	        height: 500,
	        filebrowserBrowseUrl: '/browser/browse.php',
	        filebrowserUploadUrl: '/uploader/upload.php'
	      }
	    );
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 154 */
/*!****************************************!*\
  !*** ./js/module/ui/tags-favorites.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	var removeEditable = function () {
	  var $tagsItem = $('.js-tags-item');
	  $tagsItem.attr('contentEditable', false);
	  $tagsItem.removeClass('editable');
	};

	var setEditable = function (el) {
	  el.className = el.className + ' editable';
	  el.setAttribute('contenteditable', true);
	  var range = document.createRange();
	  var sel = window.getSelection();
	  var end = 0;
	  if (el.childNodes && el.childNodes[0]) end = el.childNodes[0].length;
	  if (!el.childNodes.length) {
	    el.appendChild(document.createTextNode(''));
	  }
	  range.setStart(el.childNodes[0], end);
	  range.collapse(true);
	  sel.removeAllRanges();
	  sel.addRange(range);
	  el.focus();
	};

	var toggleTags = function (state) {
	  var $tagsItem = $('.js-tags-item');
	  removeEditable();
	  if(state) {
	    $tagsItem.addClass('active');
	  } else {
	    $tagsItem.removeClass('active');
	  }
	};

	module.exports = function () {
	  var $tags = $('.js-tags');
	  if (!$tags.length) return;

	  var $btnAll = $('.js-tags-all');
	  var $btnNew = $('.js-tags-new');

	  var DELAY = 200, clicks = 0, timer = null;

	  $tags
	    .on('click', function (e) {
	      var $tag;
	      if ($(e.target).hasClass('js-tags-item')) {
	        $tag = $(e.target);
	        clicks++;
	        if (clicks === 1) {
	          timer = setTimeout(function () {
	            if (!$tag.hasClass('editable')) {
	              removeEditable();
	              $tag.toggleClass('active');
	            }
	            clicks = 0;
	          }, DELAY);
	        } else {
	          clearTimeout(timer);
	          removeEditable();
	          setEditable($tag[0]);
	          clicks = 0;
	        }
	      } else {
	        removeEditable();
	      }

	    })
	    .on('dblclick', '.js-tags-item', function(e) {
	      e.preventDefault();
	    })
	    .on('keypress', function (e) {
	      var keyCode = e.keyCode;
	      if (keyCode === 13) {
	        removeEditable();
	        console.log('must save');
	        e.preventDefault();
	      }

	    });

	  $btnAll.on('click', function () {
	    $btnAll.toggleClass('active');
	    toggleTags($btnAll.hasClass('active'))
	  });

	  $btnNew
	    .on('click', function () {
	      var $btn = $(this).closest('.tags__item');
	      if ($btn.hasClass('editable')) {
	        var text = $btn.text();
	        $btn.before('<button class="tags__item js-tags-item">' + text + '</button>');
	        $btn[0].childNodes[0].nodeValue = '';
	        $btn.removeClass('editable');
	      } else {
	        setEditable($btn[0]);
	      }
	    })
	    .on('keypress', function (e) {
	      var keyCode = e.keyCode;
	      console.log(keyCode);
	      if (keyCode === 13) {
	        removeEditable();
	        console.log('must save');
	        e.preventDefault();
	      }
	    });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 155 */
/*!***********************************!*\
  !*** ./js/module/ui/favorites.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $listingSelect = $('.js-listing-select');
	  if (!$listingSelect.length) return;

	  $listingSelect.on('click', function () {
	    var $btn = $(this);
	    var $item = $btn.closest('.js-listing-item');
	    $item.toggleClass('listing__item--selected');
	    $btn.toggleClass('active');

	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 156 */
/*!***************************************!*\
  !*** ./js/module/ui/form-property.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var $form = $('.js-form-property');
	  if (!$form.length) return;


	  var Dropzone = __webpack_require__(/*! dropzone */ 130);
	  __webpack_require__(/*! html5sortable */ 157);
	  __webpack_require__(/*! cropper */ 158);
	  //require('parsleyjs');

	  //$form
	  //  .each(function () {
	  //    var $currentForm = $(this);
	  //    console.log($currentForm);
	  //    $('.js-form-property-1')
	  //      .parsley()
	  //      .on('form:success', function (formInstance) {
	  //        //app.notifier.showSuccess('You have successfully submit the form! 1');
	  //        //return false;
	  //      })
	  //      .on('form:error', function (formInstance) {
	  //        app.notifier.showError('Submited failed! Please try again. 2');
	  //
	  //        return false;
	  //      });
	  //  });

	  $('.js-location-tab').on('shown.bs.tab', function (e) {
	    var $map = $('.js-map');
	    if ($map.length) {
	      $map.each(function () {
	        var $m = $(this);
	        google.maps.event.trigger($m[0], 'resize');
	      });
	    }
	  });

	  $('.js-photos-list').sortable();

	  Dropzone.options.photosUploader = {
	    paramName: "file", // The name that will be used to transfer the file
	    maxFilesize: 2, // MB
	    thumbnailWidth: 250,
	    accept: function(file, done) {
	      console.log('accept');
	      if (file.name == "justinbieber.jpg") {
	        done("Naha, you don't.");
	      }
	      else { done(); }
	    }
	  };

	  var minContainerWidth = app.gridSize.get() === 'xs' ? $(window).width() - 150 : 500;

	  $('#photo-crop').cropper({
	    aspectRatio: 16 / 9,
	    minContainerWidth: minContainerWidth,
	    minContainerHeight: 400,
	    crop: function(e) {
	      // Output the result data for cropping image.
	      console.log(e.x);
	      console.log(e.y);
	      console.log(e.width);
	      console.log(e.height);
	      console.log(e.rotate);
	      console.log(e.scaleX);
	      console.log(e.scaleY);
	    }
	  });

	  $('.js-photos-edit').on('click', function () {
	    var link = $(this);
	    var tab = link.data('tab');
	    console.log(tab);
	    $(tab).tab('show');

	  });

	  $('.js-portfolio').select2({
	    tags: true
	  })

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 157 */,
/* 158 */,
/* 159 */
/*!**************************************************!*\
  !*** ./js/module/ui/chart-profile-statistics.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function () {
	  var Chart = __webpack_require__(/*! chart.js */ 151);
	  var data = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	      {
	        label: "My First dataset",
	        fillColor: "rgba(220,220,220,0.5)",
	        strokeColor: "rgba(220,220,220,0.8)",
	        highlightFill: "rgba(220,220,220,0.75)",
	        highlightStroke: "rgba(220,220,220,1)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	      },
	      {
	        label: "My Second dataset",
	        fillColor: "rgba(151,187,205,0.5)",
	        strokeColor: "rgba(151,187,205,0.8)",
	        highlightFill: "rgba(151,187,205,0.75)",
	        highlightStroke: "rgba(151,187,205,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	      }
	    ]
	  };

	  // Get the context of the canvas element we want to select
	  var viewCurrentBalance = document.getElementById("profile-statistics");
	  if (viewCurrentBalance) {
	    var ctx = viewCurrentBalance.getContext("2d");
	    var chartCurrentBalance = new Chart(ctx).Bar(data, {
	      barShowStroke: false
	    });
	  }
	};


/***/ },
/* 160 */
/*!***************************************************!*\
  !*** ./js/module/ui/chart-property-statistics.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	module.exports = function () {
	  var Chart = __webpack_require__(/*! chart.js */ 151);
	  var units = [
	    {
	      value: 957,
	      color:"#43a047",
	      highlight: "#43a047",
	      label: "Total sold unit"
	    },
	    {
	      value: 768,
	      color: "#a5d6a7",
	      highlight: "#a5d6a7",
	      label: "Total unsold unit"
	    }
	  ];

	  var price = [
	    {
	      value: 590,
	      color:"#1e88e5",
	      highlight: "#1e88e5",
	      label: "Total sold price"
	    },
	    {
	      value: 165,
	      color: "#90caf9",
	      highlight: "#90caf9",
	      label: "Total unsold price"
	    }
	  ];

	  // Get the context of the canvas element we want to select
	  var viewUnits = document.getElementById("property-statistics-units");
	  if (viewUnits) {
	    var ctx = viewUnits.getContext("2d");
	    new Chart(ctx).Doughnut(units, {
	      segmentShowStroke : true,
	      percentageInnerCutout : 90,
	      segmentStrokeWidth : 1,
	      animation: false
	    });
	  }

	  // Get the context of the canvas element we want to select
	  var viewPrice = document.getElementById("property-statistics-price");
	  if (viewPrice) {
	    var ctx2 = viewPrice.getContext("2d");
	    new Chart(ctx2).Doughnut(price, {
	      segmentShowStroke : true,
	      percentageInnerCutout : 90,
	      segmentStrokeWidth : 1,
	      animation: false
	    });
	  }
	};


/***/ },
/* 161 */
/*!****************************************!*\
  !*** ./js/module/ui/map-fullscreen.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Fullscreen map, set height
	 ==============================================================*/
	module.exports = function () {
	  var $mapCanvas = $('.js-map-canvas-fullscreen');
	  if(!$mapCanvas.length) return;
	  console.log($mapCanvas);

	  var winHeight = $(window).height(),
	    headerHeight = $('.header').height(),
	    headerNavHeight = $('#header-nav').height(),
	    map = $('.js-map'),
	    mapHeight = map.height(),
	    diff;


	  var gridSize = __webpack_require__(/*! ../grid-size */ 133).get();
	  if (gridSize !== 'lg') return;

	  diff = winHeight - headerHeight - headerNavHeight;
	  if (mapHeight < diff) {
	    map.animate({height: diff}, 1000, function () {
	      if ($mapCanvas.length) {
	        google.maps.event.trigger($mapCanvas[0], 'resize');
	      }
	    });
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 162 */
/*!*******************************************!*\
  !*** ./js/module/ui/header-scroll-spy.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Enables fixed menu
	 * Enables fixed search bar in mobile view
	 ==============================================================*/
	module.exports = function () {
	  var _ = __webpack_require__(/*! lodash */ 7);
	  var gridSize = __webpack_require__(/*! ../grid-size */ 133);
	  var $header = $('.header'),
	    $headerNav = $('#header-nav'),
	    $headerNavOffset = $('#header-nav-offset'),
	    $navbarCollapse = $('#navbar-collapse-1'),
	    setCssClass = '',
	    lgOffset = $headerNav.offset().top + 2000,
	    _cssClass = null;

	  // set height for placeholder only if the navbar has not positioned absolute
	  if (!$headerNav.hasClass('navbar--overlay')) $headerNavOffset.height($headerNav.height());

	  var setHeaderClass = function () {
	    var offsetTop = $(window).scrollTop();
	    if (offsetTop > lgOffset) {
	      setCssClass = 'header-fixed';
	    } else {
	      setCssClass = '';
	    }
	    if (gridSize.get() !== 'xs') {
	      if (setCssClass !== _cssClass) {
	        $header.removeClass('header-fixed').addClass(setCssClass);
	        $headerNav.removeClass('header-fixed').addClass(setCssClass);
	        $headerNavOffset.removeClass('header-fixed').addClass(setCssClass);
	        $navbarCollapse.removeClass('header-fixed').addClass(setCssClass);
	        _cssClass = setCssClass;
	      }

	    }
	  };

	  $(window).on('scroll', _.debounce(setHeaderClass, 10));
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 163 */
/*!**************************************!*\
  !*** ./js/module/ui/scrollup-spy.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * "Scroll to top" button
	 ==============================================================*/
	var _ = __webpack_require__(/*! lodash */ 7);
	module.exports = function () {
	  var $scrollup = $('.js-scrollup'),
	    scrollupClass = '',
	    _cssClass = null;

	  var setScrollupClass = function () {
	    var offsetTop = $(window).scrollTop();
	    if (offsetTop > 400) {
	      scrollupClass = 'scrollup-show';
	    } else {
	      scrollupClass = '';
	    }

	    if (scrollupClass !== _cssClass) {
	      $scrollup.removeClass('scrollup-show');
	      $scrollup.addClass(scrollupClass);
	      _cssClass = scrollupClass;
	    }
	  };

	  $(window).on('scroll', _.debounce(setScrollupClass, 800));
	  $scrollup.on('click', function () {
	    var offsetTop = $(window).scrollTop();
	    var time = 800 + (offsetTop / 10);
	    $('html, body').animate({scrollTop: 0}, time, 'linear');
	  });

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 164 */
/*!*****************************!*\
  !*** ./js/demo/ui-panel.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Panel useful for development, where you can
	 * enable or disable various theme features.
	 *
	 * Usually, this should be DISABLED on live website.
	 ==============================================================*/
	module.exports = function () {
	  var _ = __webpack_require__(/*! lodash */ 7);
	  var panels = ['pages', 'boxed', 'patterns', 'theme_colors', 'compact', 'sidebar', 'listing_grid', 'dropdown_effects', 'slider_effects'];
	  var options = {
	    pages: [
	      {url: 'agent_profile.html', name: 'Agent profile'},
	      {url: 'agent_profile_blog_details.html', name: 'Agent profile blog details'},
	      {url: 'agent_profile_blog_grid.html', name: 'Agent profile blog grid'},
	      {url: 'agent_profile_blog_list.html', name: 'Agent profile blog list'},
	      {url: 'agent_profile_listing_grid.html', name: 'Agent profile properties grid'},
	      {url: 'agent_profile_listing_list.html', name: 'Agent profile properties list'},
	      {url: 'agent_profile_listing_table.html', name: 'Agent profile properties table'},
	      {url: 'agent_profile_testimonials.html', name: 'Agent profile testimonials'},
	      {url: 'agents_listing_grid.html', name: 'Agent listing grid'},
	      {url: 'agents_listing_list.html', name: 'Agent listing list'},
	      {url: 'blog.html', name: 'Blog'},
	      {url: 'blog_details.html', name: 'Blog details'},
	      {url: 'blog_empty.html', name: 'Blog empty'},
	      {url: 'bootstrap.html', name: 'Bootstrap'},
	      {url: 'contacts.html', name: 'Contacts'},
	      {url: 'dashboard.html', name: 'Dashboard'},
	      {url: 'dashboard_activity.html', name: 'Dashboard activity'},
	      {url: 'dashboard_blog.html', name: 'Dashboard blog'},
	      {url: 'dashboard_blog_new.html', name: 'Dashboard blog new'},
	      {url: 'dashboard_favorites_agents.html', name: 'Dashboard favorites agents'},
	      {url: 'dashboard_favorites_listings.html', name: 'Dashboard favorites listings'},
	      {url: 'dashboard_favorites_search.html', name: 'Dashboard favorites search'},
	      {url: 'dashboard_financials.html', name: 'Dashboard financials'},
	      {url: 'dashboard_news.html', name: 'Dashboard news'},
	      {url: 'dashboard_payment.html', name: 'Dashboard payment'},
	      {url: 'dashboard_profile.html', name: 'Dashboard profile'},
	      {url: 'dashboard_property.html', name: 'Dashboard property'},
	      {url: 'dashboard_property_new.html', name: 'Dashboard property new'},
	      {url: 'dashboard_statistics.html', name: 'Dashboard statistics'},
	      {url: 'faq.html', name: 'Faq'},
	      {url: 'feature_boxed.html', name: 'Feature boxed'},
	      {url: 'feature_grid_large.html', name: 'Feature grid large'},
	      {url: 'feature_grid_small.html', name: 'Feature grid small'},
	      {url: 'feature_left_sidebar.html', name: 'Feature left sidebar'},
	      {url: 'feature_loaders.html', name: 'Feature loaders'},
	      {url: 'feature_map_leaflet.html', name: 'Feature map leaflet'},
	      {url: 'feature_typography.html', name: 'Feature typography'},
	      {url: 'feature_ui.html', name: 'Feature ui'},
	      {url: 'feature_vmap_fullscreen.html', name: 'Feature map fullscreen'},
	      {url: 'gallery.html', name: 'Gallery'},
	      {url: 'index.html', name: 'Index'},
	      {url: 'index_hmap_light.html', name: 'Index map horizontal light'},
	      {url: 'index_not_available.html', name: 'Index not available'},
	      {url: 'index_projects.html', name: 'Index projects'},
	      {url: 'index_slider.html', name: 'Index slider'},
	      {url: 'index_slider_auth.html', name: 'Index slider auth'},
	      {url: 'index_slider_search.html', name: 'Index slider search'},
	      {url: 'index_vmap_dark.html', name: 'Index map dark'},
	      {url: 'index_vmap_light.html', name: 'Index map vertical light'},
	      {url: 'my_listings.html', name: 'My listings'},
	      {url: 'my_listings_add_edit.html', name: 'My listings add'},
	      {url: 'my_profile.html', name: 'My profile'},
	      {url: 'page.html', name: 'Page'},
	      {url: 'pricing.html', name: 'Pricing'},
	      {url: 'properties_listing_empty.html', name: 'Properties listing empty'},
	      {url: 'properties_listing_grid.html', name: 'Properties listing grid'},
	      {url: 'properties_listing_list.html', name: 'Properties listing list'},
	      {url: 'properties_listing_table.html', name: 'Properties listing table'},
	      {url: 'property_details.html', name: 'Property details'},
	      {url: 'property_details_agent.html', name: 'Property details agent'},
	      {url: 'property_details_projected.html', name: 'Property details projects'},
	      {url: 'reviews.html', name: 'Reviews'},
	      {url: 'user_login.html', name: 'User login'},
	      {url: 'user_register.html', name: 'User register'},
	      {url: 'user_restore_pass.html', name: 'User restore pass'},
	      {url: 'email.html', name: 'Email'},
	      {url: 'error_403.html', name: 'Error 403'},
	      {url: 'error_404.html', name: 'Error 404'},
	      {url: 'error_500.html', name: 'Error 500'}
	    ],
	    boxed: false,
	    bg_patterns: ['brickwall', 'debut_light', 'diagonal_lines_01', 'diagonal-noise', 'dust_2X', 'groovepaper', 'little_pluses', 'p4', 'p5',
	      'retina_dust', 'ricepaper2', 'shl', 'squairy_light', 'stardust_2X', 'subtle_dots', 'subtle_dots_2X', 'white_brick_wall', 'worn_dots'],
	    theme_colors: ['default', 'blue-orange_red', 'blue_green', 'brown-dark_red', 'brown-dark_yellow', 'brown_red', 'dark_blue-dark_yellow',
	      'dark_blue-light_green', 'dark_blue-yellow', 'dark_violet-green', 'dark_violet-yellow', 'gray-red', 'green-red', 'green_blue-red',
	      'light_blue-beige', 'light_blue-cyan', 'light_cyan-red', 'light_green-dark_blue', 'light_green-violet', 'pink_yellow'],
	    header_fixed: true,
	    header_colors: [['header_color_gray', 'Condensed gray'], ['header_color_white', 'Condensed white'], ['header_color_brand', 'Brand colors']],
	    dropdown_effects: ['default', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
	    slider_effects: ['default', 'bounce', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX', 'flipInY', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp', 'slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],
	    hover_effects: ['default', 'apollo', 'honey', 'layla', 'lexi', 'lily', 'oscar', 'sarah', 'zoe'],
	    sidebar: ['left', 'right', 'hide'],
	    listing_grid: ['small', 'medium', 'big']
	  };

	  var UIpanel = (function () {
	    var widget = {},
	      $body = $('body'),
	      $uiPanel,
	      $uiPanelToogle,
	      $linkStyles = document.querySelectorAll('link');

	    widget.ui = {
	      select: function (data, type, selected) {
	        var _this = this;
	        _this.getWrapper = function (type, options) {
	          return '<select class="form-control js-uipanel-control-' + type + '"><option value="">Choose option</option>' + options + '</select>';
	        };
	        _this.getOptions = function (data) {
	          return data.map(function (item) {
	            return '<option value="' + item.value + '" ' + (selected === item.value ? 'selected' : '') + '>' + item.title + '</option>';
	          });
	        };

	        return _this.getWrapper(type, _this.getOptions(data));
	      },
	      radio: function (value, title, type) {
	        return '<div class="checkbox">' +
	          '<input id="option_' + type + '_' + title + '" type="radio" name="' + type + '" class="in-radio js-uipanel-control-' + type + '" value="' + value + '">' +
	          '<label for="option_' + type + '_' + title + '" class="in-label">' + title + '</label>' +
	          '</div>';

	      },
	      formGroup: function (label, control) {
	        return '<div class="form-group">' +
	          '<label for="" class="control-label">' + label + '</label>' +
	          control +
	          '</div>';
	      }
	    };

	    widget.panels = {
	      pages: {
	        onChange: function (e) {
	          window.location.href = window.location.href.replace(/([a-z0-9_&]*\.html#?.*)$/i, e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.pages.map(function (page) {
	            return {
	              value: page.url,
	              title: page.name
	            }
	          });

	          var url = window.location.pathname;
	          var filename = url.substring(url.lastIndexOf('/') + 1);
	          var control = widget.ui.select(data, 'pages', filename);
	          var formGroup = widget.ui.formGroup('Pages', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('pages');
	        }
	      },
	      boxed: {
	        onChange: function (e) {
	          if (e.currentTarget.value == 'true') {
	            $body.addClass('boxed');
	          } else {
	            $body.removeClass('boxed');
	          }
	        },
	        add: function () {
	          var controls = widget.ui.radio(false, 'No', 'boxed');
	          controls += widget.ui.radio(true, 'Yes', 'boxed');
	          var formGroup = widget.ui.formGroup('Boxed', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('boxed');
	        }
	      },
	      patterns: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/bg-[a-zX0-9_\-&]*/, '');
	          $body.addClass('bg-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.bg_patterns.map(function (pattern) {
	            return {
	              value: pattern,
	              title: pattern
	            }
	          });

	          var control = widget.ui.select(data, 'patterns');
	          var formGroup = widget.ui.formGroup('Patterns', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('patterns');
	        }
	      },
	      theme_colors: {
	        onChange: function (e) {
	          var themeId = e.currentTarget.value;
	          if (!themeId) return;
	          var config = __webpack_require__(/*! ../module/config */ 6);
	          [].forEach.call($linkStyles, function (link) {
	            if (/\/css\/theme\-/.test(link.href)) {
	              var xhr = new XMLHttpRequest();
	              xhr.open('GET', 'assets/css/theme-' + themeId + '.css');
	              xhr.send('');
	              xhr.addEventListener("load", function(e) {
	                console.log('loaded');
	                link.href = 'assets/css/theme-' + themeId + '.css';
	                config.colorTheme = themeId;
	              }, false);
	            }
	          });
	        },
	        add: function () {
	          var data = options.theme_colors.map(function (pattern) {
	            return {
	              value: pattern,
	              title: pattern
	            }
	          });

	          var control = widget.ui.select(data, 'theme_colors');
	          var formGroup = widget.ui.formGroup('Theme colors', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('theme_colors');
	        }
	      },
	      dropdown_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/menu-[a-zA-Z]*/, '');
	          $body.addClass('menu-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.dropdown_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'dropdown_effects');
	          var formGroup = widget.ui.formGroup('Menu effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('dropdown_effects');
	        }
	      },
	      slider_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/slider\-\-[a-zA-Z]*/, '');
	          $body.addClass('slider--' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.slider_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'slider_effects');
	          var formGroup = widget.ui.formGroup('Slider effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('slider_effects');
	        }
	      },
	      hover_effects: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/hover-[a-zA-Z]*/, '');
	          $body.addClass('hover-' + e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.hover_effects.map(function (effect) {
	            return {
	              value: effect,
	              title: effect
	            }
	          });

	          var control = widget.ui.select(data, 'hover_effects');
	          var formGroup = widget.ui.formGroup('Hover effects', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('hover_effects');
	        }
	      },
	      compact: {
	        onChange: function (e) {
	          if (e.currentTarget.value == 'true') {
	            $body.addClass('compact');
	          } else {
	            $body.removeClass('compact');
	          }
	        },
	        add: function () {
	          var controls = widget.ui.radio(false, 'No', 'compact');
	          controls += widget.ui.radio(true, 'Yes', 'compact');
	          var formGroup = widget.ui.formGroup('Header compact', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('compact');

	        }
	      },
	      header_colors: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/header_color_[a-zX0-9_\-&]*/, '');
	          $body.addClass(e.currentTarget.value);
	        },
	        add: function () {
	          var data = options.header_colors.map(function (style) {
	            return {
	              value: style[0],
	              title: style[1]
	            }
	          });

	          var control = widget.ui.select(data, 'header_colors');
	          var formGroup = widget.ui.formGroup('Header style', control);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('header_colors');
	        }
	      },
	      sidebar: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/sidebar-[a-zX0-9_\-&]*/, '');
	          $body.addClass('sidebar-' + e.currentTarget.value);
	        },
	        add: function () {
	          var controls = options.sidebar.map(function (type) {
	            return widget.ui.radio(type, type, 'sidebar');
	          });

	          var formGroup = widget.ui.formGroup('Sidebar', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('sidebar');
	        }
	      },
	      listing_grid: {
	        onChange: function (e) {
	          $body[0].className = $body[0].className.replace(/listing-grid-[a-zX0-9_\-&]*/, '');
	          $body.addClass('listing-grid-' + e.currentTarget.value);
	        },
	        add: function () {
	          var controls = options.listing_grid.map(function (type) {
	            return widget.ui.radio(type, type, 'listing_grid');
	          });

	          var formGroup = widget.ui.formGroup('Listing grid', controls);
	          $uiPanel.append(formGroup);
	          widget.listeners.control('listing_grid');
	        }
	      }
	    };

	    widget.addPanels = function (_panels) {
	      _panels.forEach(function (panel) {
	        widget.panels[panel].add();
	      });
	    };

	    widget.listeners = {
	      panel: function () {
	        $uiPanel = $('.js-ui-panel');
	        $uiPanelToogle = $('.js-ui-panel-toggle');
	        $uiPanelToogle.on('click', function () {
	          if ($(this).hasClass('active')) {
	            $(this).removeClass('active');
	            $uiPanel.removeClass('opened');
	          } else {
	            $(this).addClass('active');
	            $uiPanel.addClass('opened');
	          }
	        });

	        var $uiPanelButtonScroll = $('.js-ui-panel-scroll');

	        $uiPanelButtonScroll.on('click', function () {
	          var delta = $(this).data('dir') == 'up' ? -500 : 500;
	          var offsetTop = $(window).scrollTop();
	          $('html, body').animate({scrollTop: offsetTop + delta}, 100);
	        });

	        var $uiPanelButtonNext = $('.js-ui-panel-next');

	        $uiPanelButtonNext.on('click', function () {
	          var $uiControlPages = $('.js-uipanel-control-pages');
	          var current = $uiControlPages.find('option:selected').index();
	          var $uiControlPagesNext = $uiControlPages.find('option')[current+1];
	          var url = $($uiControlPagesNext).attr('value');
	          if (url) window.location.href = window.location.href.replace(/([a-z0-9_&]*\.html#?.*)$/i, url);
	        });
	      },
	      control: function (type) {
	        $('.js-uipanel-control-' + type).on('change', function (e) {
	          widget.panels[type].onChange(e);
	        });
	      }
	    };


	    widget.init = function (_panels) {

	      $('<link>')
	        .appendTo('head')
	        .attr({type: 'text/css', rel: 'stylesheet'})
	        .attr('href', 'assets/css/ui-panel.css');

	      var htmlBlock = '<div class="ui-panel js-ui-panel">' +
	        '<button class="ui-panel__toggle js-ui-panel-toggle"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--up js-ui-panel-scroll" data-dir="up"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--down js-ui-panel-scroll" data-dir="down"></button>' +
	        '<button type="button" class="ui-panel__btn ui-panel__btn--next js-ui-panel-next"></button>' +
	        '</div>';
	      $body.append(htmlBlock);

	      widget.listeners.panel();
	      widget.addPanels(_panels);
	    };

	    return widget;
	  })();
	  setTimeout(function(){
	    UIpanel.init(panels);
	    return UIpanel;
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 165 */
/*!**************************!*\
  !*** ./js/module/map.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	exports.create = function ($mapContainer, $mobilePopupTrigger, onLoad) {
	  var mobilePopup = __webpack_require__(/*! ./mobile-popup */ 166);
	  var gridSize = __webpack_require__(/*! ./grid-size */ 133);
	  var _ = __webpack_require__(/*! lodash */ 7);

	  onLoad = onLoad || $.noop;

	  if ($mobilePopupTrigger) {
	    mobilePopup.wrapContainer($mapContainer, $mobilePopupTrigger, loadMap);
	  } else {
	    loadMap();
	  }

	  function loadMap() {

	    onLoad();
	  }

	  var initLgMap = _.debounce(function() {
	    if (gridSize.get() !== 'xs') {
	      $('.map__wrap').html($($mapContainer[0]).detach().css({
	        width: '100%',
	        height: 'auto'
	      }));

	      google.maps.event.trigger($mapContainer[0], 'resize');
	    }
	  }, 500);

	  $(window).resize(initLgMap);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 166 */
/*!***********************************!*\
  !*** ./js/module/mobile-popup.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/***************************************************************
	 * Helper for improved user experience with maps on devices
	 * with small screen.
	 *
	 * So that, when user loads the map on small-screen device, it
	 * is replaced by a button, clicking on it will open full screen
	 * popup with the map in it.
	 *
	 ==============================================================*/
	/**
	 * @param $mapContainer
	 * @param $triggerButton
	 * @param loadCallback
	 */
	exports.wrapContainer = function ($mapContainer, $triggerButton, loadCallback) {
	  var gridSize = __webpack_require__(/*! ./grid-size */ 133);
	  var $body = $('body');


	  $triggerButton.on('click', function () {
	    if (gridSize.get() == 'xs') {
	      $.colorbox({
	        html: $mapContainer,
	        onLoad: function () {
	          var winWidth = $(window).width();
	          var winHeight = window.innerHeight;
	          $mapContainer.css({
	            width: winWidth,
	            height: winHeight
	          });
	        },
	        onComplete: function () {
	          loadCallback();
	          $body.css({overflow: 'hidden'});
	        },
	        onCleanup: function () {
	          $body.css({overflow: 'auto'});
	        }
	      });
	    }
	  });

	  loadCallback();

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 167 */
/*!***************************************!*\
  !*** ./js/module/gmap/geolocation.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	/**
	 * @param {Map} map Google Map Object
	 * @param {Object} options
	 * @param {String} options.buttonTrigger
	 * @param {Function} options.onSuccess
	 */
	module.exports.activate = function (map, options) {
	  var notifier = __webpack_require__(/*! ../notifier */ 168);
	  var _ = __webpack_require__(/*! lodash */ 7);
	  options = _.defaults(options, {
	    buttonTrigger: false,
	    onSuccess: function () {
	    }
	  });

	  if (options.buttonTrigger) {
	    $(options.buttonTrigger).on('click', initialize);
	  } else {
	    google.maps.event.addDomListener(window, 'load', initialize);
	  }


	  function initialize() {
	    // Try HTML5 geolocation
	    if (navigator.geolocation) {
	      navigator.geolocation.getCurrentPosition(
	        function (position) {
	          var pos = new google.maps.LatLng(
	            position.coords.latitude,
	            position.coords.longitude
	          );
	          map.setCenter(pos);
	          options.onSuccess(pos);
	        }, function () {
	          handleNoGeolocation(true);
	        }
	      );
	    } else {
	      // Browser doesn't support Geolocation
	      handleNoGeolocation(false);
	    }
	  }

	  function handleNoGeolocation(errorFlag) {
	    if (errorFlag) {
	      notifier.showError('Error: The Geolocation service failed.');
	    } else {
	      notifier.showError('Error: Your browser doesn\'t support geolocation.');
	    }
	  }

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 168 */
/*!*******************************!*\
  !*** ./js/module/notifier.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/***************************************************************
	 * A helper for displaying notification at the top of the page
	 * Usually this is useful in AJAX requests, in order to provide
	 * a feedback to users over the request status
	 *
	 * You can use methods:
	 * - app.notifier.showError
	 * - app.notifier.showServerError
	 * - app.notifier.showSuccess
	 *
	 * Optionally you can pass a `message` as the first argument
	 * in order to provide custom text
	 *
	 * See https://github.com/sciactive/pnotify for documentation
	 ==============================================================*/
	var _ = __webpack_require__(/*! lodash */ 7);
	var PNotify = __webpack_require__(/*! pnotify */ 20);

	var conf = {
	  icon: false,
	  text: false,
	  title_escape: false,
	  addclass: "stack-bar-top",
	  cornerclass: "",
	  width: "100%",
	  stack: {"dir1": "down", "dir2": "right", "push": "top", "spacing1": 0, "spacing2": 0},
	  delay: 2000
	};

	var getTemplate = function (type, message) {
	  type = type == 'error' ? 'error' : 'valid';
	  var html = '<svg class="notify-icon"><use xlink:href="#icon-' + type + '"></use></svg>' + message;
	  return html;
	};
	exports.showError = function (message) {
	  message = message || 'An error occured, please see details below';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('error', message),
	    type: 'error'
	  }));
	};

	exports.showServerError = function (message) {
	  message = message || 'Server error occured, please contact website administrator.';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('error', message),
	    type: 'error'
	  }));
	};

	exports.showSuccess = function (message) {
	  message = message || 'An error occured, please see details below';
	  new PNotify(_.merge(conf, {
	    title: getTemplate('success', message),
	    type: 'success'
	  }));
	};

	exports.watchNotifications = function (messages) {
	  _.each(messages, function (message) {
	    if (message.type === 'error') {
	      exports.showError(message.message);
	    } else {
	      exports.showSuccess(message.message);
	    }
	  });
	};


/***/ },
/* 169 */
/*!**********************************!*\
  !*** ./js/module/gmap/marker.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 *
	 * @param {Map} map
	 * @param {LatLng} latlng
	 * @param {string} title
	 * @returns {Marker}
	 */
	var config = __webpack_require__(/*! ../config */ 6);
	var _ = __webpack_require__(/*! lodash */ 7);

	exports.create = function (map, latlng, title) {
	  return exports.createAdvanced({
	    position: latlng,
	    map: map,
	    title: title
	  });
	};

	exports.createAdvanced = function (options) {
	  options = _.defaults(options, {
	    animation: google.maps.Animation.DROP,
	    icon: {
	      url: config.assetsPathPrefix + 'img/marker/' + config.colorTheme + '.png',
	      origin: new google.maps.Point(0, 0),
	      anchor: new google.maps.Point(15, 47)
	    }
	  });
	  return new google.maps.Marker(options);
	};


/***/ },
/* 170 */
/*!******************************************!*\
  !*** ./js/module/gmap/infobox-marker.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function HashTable() {
	  var keys = [], values = [];

	  return {
	    put: function (key, value) {
	      var index = keys.indexOf(key);
	      if (index == -1) {
	        keys.push(key);
	        values.push(value);
	      }
	      else {
	        values[index] = value;
	      }
	    },
	    get: function (key) {
	      return values[keys.indexOf(key)];
	    }
	  };
	}

	var infoboxInstances = new HashTable();
	var markers = new HashTable();

	exports.create = function (map, latlng, title, infoboxHtml, infoboxTheme) {
	  var Infobox;
	  var config = __webpack_require__(/*! ../config */ 6);
	  var infoboxBuilder = __webpack_require__(/*! ./infobox */ 171);
	  var markerBuilder = __webpack_require__(/*! ./marker */ 169);

	  var marker = markerBuilder.create(map, latlng, title);
	  markers.put(marker, {content: infoboxHtml, theme: infoboxTheme});

	  Infobox = infoboxInstances.get(map);
	  if (!Infobox) {
	    Infobox = infoboxBuilder.create(infoboxHtml, infoboxTheme);
	    infoboxInstances.put(map, Infobox);
	  }

	  google.maps.event.addListener(marker, 'click', function () {
	    var infoboxData = markers.get(marker);
	    Infobox.close();
	    infoboxBuilder.setContent(Infobox, infoboxData.content, infoboxData.theme);
	    Infobox.open(map, marker);
	    Infobox.setVisible(true);
	  });

	  google.maps.event.addListener(map, 'click', function () {
	    if (Infobox) {
	      Infobox.setVisible(false);
	    }
	  });

	  return marker;
	};


/***/ },
/* 171 */
/*!***********************************!*\
  !*** ./js/module/gmap/infobox.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Creates a infobox window for google maps
	 *
	 * @param {string} content
	 * @param {string} theme - "dark" or "white"
	 * @returns {InfoBox} Infobox object
	 */

	exports.create = function (content, theme) {
	  var config = __webpack_require__(/*! ../config */ 6);
	  var infoboxBuilder = __webpack_require__(/*! google-maps-infobox */ 5);
	  theme = theme || 'white';
	  return new infoboxBuilder({
	    content: generateContent(content, theme),
	    boxStyle: {
	      background: "none",
	      opacity: 1,
	      width: "355px"
	    },
	    pixelOffset: new google.maps.Size(-17, -77),
	    closeBoxMargin: "7px 7px 2px 2px",
	    closeBoxURL: "",
	    infoBoxClearance: new google.maps.Size(1, 1),
	    visible: true,
	    pane: "floatPane",
	    enableEventPropagation: false
	  });
	};

	exports.setContent = function (Infobox, content, theme) {
	  Infobox.setContent(generateContent(content, theme));
	};

	function generateContent(content, theme) {
	  return "<div class='map__infobox map__infobox--" + theme + "'>" + content + "</div>";
	}


/***/ },
/* 172 */
/*!*************************************!*\
  !*** ./js/module/gmap/clusterer.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 *
	 * @param {Map} map
	 * @param {Marker[]} markers - Array of markers
	 * @returns {Marker}
	 */
	exports.create = function (map, markers) {
	  var config = __webpack_require__(/*! ../config */ 6);
	  var MarkerClusterer = __webpack_require__(/*! google-marker-clusterer-plus */ 22);
	  return new MarkerClusterer(map, markers, {
	    maxZoom: 11,
	    gridSize: 100,
	    styles: [{
	      url: config.assetsPathPrefix + 'img/marker/' + config.colorTheme + '.png',
	      width: 34,
	      height: 47,
	      anchorText: [-7, 18],
	      anchorIcon: [15, 47],
	      textColor: '#fff',
	      textSize: 10
	    }]
	  });
	};


/***/ },
/* 173 */
/*!******************************!*\
  !*** ./js/module/leaflet.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(/*! leaflet */ 174);

	exports.addInfoboxMarker = function (map, latlng, title, infoboxHtml, infoboxTheme) {
	  var config = __webpack_require__(/*! ./config */ 6);
	  var propertyIcon = L.icon({
	    iconUrl: config.assetsPathPrefix + 'img/marker/' + config.colorTheme + '.png',
	    iconSize: [34, 47],
	    iconAnchor: [0, 0],
	    popupAnchor: [25, -25]
	  });
	  L.marker(latlng, {icon: propertyIcon})
	    .addTo(map)
	    .bindPopup("<div class='map__infobox map__infobox--" + infoboxTheme + "'>" + infoboxHtml + '</div>');
	};


/***/ },
/* 174 */,
/* 175 */
/*!*************************************!*\
  !*** ./js/module/ui/photo-swipe.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	function getItems(cssSelector) {
	  var $items = $(cssSelector),
	    arrItems = [];

	  $items.each(function (i, item) {
	    var size = item.getAttribute('data-size').split('x'),
	      src = item.getAttribute('href');
	    arrItems.push({
	      src: src,
	      w: parseInt(size[0]),
	      h: parseInt(size[1])
	    });
	  });

	  return arrItems;
	}

	function buildPopup() {

	  var htmlPswp =
	    '<div class="pswp js-pspw" tabindex="-1" role="dialog" aria-hidden="true">\
	      <div class="pswp__bg"></div>\
	      <div class="pswp__scroll-wrap">\
	        <div class="pswp__container">\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	          <div class="pswp__item"></div>\
	        </div>\
	        <div class="pswp__ui pswp__ui--hidden">\
	          <div class="pswp__top-bar">\
	            <div class="pswp__counter"></div>\
	            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\
	            <button class="pswp__button pswp__button--share" title="Share"></button>\
	            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>\
	            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\
	            <div class="pswp__preloader">\
	              <div class="pswp__preloader__icn">\
	                <div class="pswp__preloader__cut">\
	                  <div class="pswp__preloader__donut"></div>\
	                </div>\
	              </div>\
	            </div>\
	          </div>\
	          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">\
	            <div class="pswp__share-tooltip"></div>\
	          </div>\
	          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\
	          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\
	          <div class="pswp__caption">\
	            <div class="pswp__caption__center"></div>\
	          </div>\
	        </div>\
	      </div>\
	    </div>';

	  return $(htmlPswp).appendTo('body')[0];
	}

	var _ = __webpack_require__(/*! lodash */ 7);
	exports.init = function (cssSelector, options) {


	  // define options (if needed)
	  options = _.defaults(options, {
	    // optionName: 'option value'
	    // for example:
	    shareEl: false,
	    index: 0,
	    history: false
	  });


	  // build items array
	  var items = getItems(cssSelector);
	  var PhotoSwipe = __webpack_require__(/*! photoswipe/dist/photoswipe */ 25);
	  var PhotoSwipeUI_Default = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ 26);
	  var galleryLinks = $(cssSelector);
	  var popup = buildPopup();

	  // listen events>
	  galleryLinks.on('click', function (e) {
	    var index = $(this).data('gallery-index') ? $(this).data('gallery-index') : galleryLinks.index(this);
	    // Initializes and opens PhotoSwipe
	    var gallery = new PhotoSwipe(popup, PhotoSwipeUI_Default, items, options);
	    gallery.init();

	    gallery.listen('initialZoomInEnd', function() {
	      gallery.goTo(index);
	      $('.pswp__item').show();
	    });

	    return false;
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 176 */
/*!******************************************!*\
  !*** ./js/module/ui/scroll-animation.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	module.exports = function () {
	  var ScrollReveal = __webpack_require__(/*! scrollreveal */ 177);
	  var gridSize = __webpack_require__(/*! ../grid-size */ 133);
	  var $body = $('body');

	  var callbacks = {
	    countUp: __webpack_require__(/*! ./count-up */ 178)
	  };
	  var initReveal = function () {
	    if ($body.hasClass('scroll-animation')) {
	      if (gridSize.get() === 'lg') {
	        window.sr = new ScrollReveal({
	            enter:    'bottom',
	            move:     '8px',
	            over:     '0.6s',
	            wait:     '0s',
	            easing:   'ease',

	            scale:    { direction: 'up', power: '0' },
	            rotate:   { x: 0, y: 0, z: 0 },
	            vFactor:  0.9,
	            opacity:  0,
	            complete: function(el){
	              var animateClass = $(el).data('animate-end');
	              var animateCallback = $(el).data('animate-callback');
	              if(animateClass) $(el).addClass('animated ' + animateClass);
	              if(animateCallback) callbacks[animateCallback](el, 'scroll-reveal');
	            }
	          }
	        );
	      } else {
	        $body.removeClass('scroll-animation');
	      }
	    }

	  };

	  initReveal();

	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 177 */,
/* 178 */
/*!**********************************!*\
  !*** ./js/module/ui/count-up.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	module.exports = function (el, params) {
	  var CountUp = __webpack_require__(/*! countup */ 179);
	  if(params === 'scroll-reveal') {
	    var $counter = $(el).find('.js-count-up');
	    var $counterValueEnd = $counter.data('count-end') || 0;
	    var $counterValueStart= $counter.data('count-start') || 0;
	    var $counterValueDuration= $counter.data('count-duration') || 2;
	    var options = {
	      useEasing : true,
	      useGrouping : true,
	      separator : ' ',
	      decimal : '.',
	      prefix : '',
	      suffix : ''
	    };

	    var counterAnim = new CountUp($counter[0], $counterValueStart, $counterValueEnd, 0, $counterValueDuration, options);
	    counterAnim.start();
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },
/* 179 */,
/* 180 */,
/* 181 */
/*!****************************!*\
  !*** ./js/module/utils.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	//exports.centerElementInViewport = function (DOMElement) {
	//    require('jquery-smooth-scroll');
	//    var elementHeight,
	//        elementOffset,
	//        windowHeight,
	//        offset,
	//        $element;
	//
	//    $(window).on('DOMContentLoaded load', function () {
	//        if (!exports.isElementInViewport(DOMElement)) {
	//            $element = $(DOMElement);
	//            elementOffset = $element.offset().top;
	//            elementHeight = $element.height();
	//            windowHeight = $(window).height();
	//
	//            if (elementHeight < windowHeight) {
	//                offset = elementOffset - ((windowHeight / 2) - (elementHeight / 2));
	//            }
	//            else {
	//                offset = elementOffset;
	//            }
	//            $.smoothScroll({speed: 500}, offset);
	//        }
	//    });
	//};

	exports.isElementInViewport = function (DOMElement) {
	  var rect = DOMElement.getBoundingClientRect();
	  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

	  return (
	    (rect.left >= 0)
	    && (rect.top >= 0)
	    && ((rect.left + rect.width) <= windowWidth)
	    && ((rect.top + rect.height) <= windowHeight)
	  );
	};

	exports.focusInputOnLoad = function (inputName) {
	  var element = document.getElementsByName(inputName)[0];
	  if (element) {
	    element.focus();
	    exports.centerElementInViewport(element);
	  }
	};

	exports.setFormProcessingState = function ($form, promise, noValidator) {
	  if (noValidator === undefined) {
	    noValidator = true;
	  }

	  exports.setProcessingState($form.find(':submit'), promise, $form);
	};

	exports.setProcessingState = function ($clickableElement, promise, $secondaryElement) {
	  var $htmlHelper = false;
	  if (!$clickableElement.hasClass('button--loading') && promise.state() === 'pending') {
	    $clickableElement.addClass('button__default--reset button--loading');

	    if ($secondaryElement) {
	      $secondaryElement.wrap('<div class="loading-overlay"></div>');
	      $htmlHelper = $('<div class="loading"></div>').appendTo($secondaryElement.parent());
	    }


	    $clickableElement.on('click.blocker', function (event) {
	      if (promise.state() === 'pending') {
	        event.stopImmediatePropagation();
	        alert('please wait');
	        return false;
	      } else {
	        $clickableElement.off('click.blocker');
	      }
	    });

	    promise.always(function () {
	      $clickableElement.removeClass('button__default--reset button--loading');
	      if ($secondaryElement) {
	        $secondaryElement.unwrap();
	        $htmlHelper.remove();
	      }
	      $clickableElement.off('click.blocker');
	    });
	  }
	};

	exports.closeOutside = function ($element, eventCallback) {
	  var notH = 1,
	    $pop = $element.on('hover', function () {
	      notH ^= 1;
	    });

	  $(document).on('mousedown keydown', function (e) {
	    if (notH || e.which == 27) {
	      eventCallback();
	    }
	  });
	};

	exports.abbreviateNumber = function (number) {
	  // 2 decimal places => 100, 3 => 1000, etc
	  var decPlaces = Math.pow(10, 0);

	  // Enumerate number abbreviations
	  var abbrev = ["k", "m", "b", "t"];

	  // Go through the array backwards, so we do the largest first
	  for (var i = abbrev.length - 1; i >= 0; i--) {

	    // Convert array index to "1000", "1000000", etc
	    var size = Math.pow(10, (i + 1) * 3);

	    // If the number is bigger or equal do the abbreviation
	    if (size <= number) {
	      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
	      // This gives us nice rounding to a particular decimal place.
	      number = Math.round(number * decPlaces / size) / decPlaces;

	      // Handle special case where we round up to the next abbreviation
	      if ((number == 1000) && (i < abbrev.length - 1)) {
	        number = 1;
	        i++;
	      }

	      // Add the letter for the abbreviation
	      number += abbrev[i];

	      // We are done... stop
	      break;
	    }
	  }

	  return number;
	};

	exports.loadSvgWithAjax = function () {
	  var config = __webpack_require__(/*! ./config */ 6);
	  $(document.body).prepend($('<div>').load(config.assetsPathPrefix + 'img/sprite-inline.svg'));
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }
]);