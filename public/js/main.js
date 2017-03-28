var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();
/******/
/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunks[chunkId][2] = promise;
/******/
/******/ 		head.appendChild(script);
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  var triggerBtn = void 0;
  var header = void 0;

  var init = function init() {
    _cacheDom();
    _bindEvents();
  };

  function _cacheDom() {
    triggerBtn = document.getElementById('navbar-toggle');
    header = document.getElementById('header');
  }

  function _bindEvents() {
    triggerBtn.addEventListener('click', _toggleNav);
  }

  function _toggleNav(e) {
    e.preventDefault();
    if (header.className === 'header') {
      header.className += ' is-nav-open';
    } else {
      header.className = 'header';
    }
  }

  return {
    init: init
  };
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Swipe 2.0
 *
 * Brad Birdsall
 * Copyright 2013, MIT License
 *
 */

function Swipe(container, options) {

  "use strict";

  // utilities

  var noop = function noop() {}; // simple no operation function
  var offloadFn = function offloadFn(fn) {
    setTimeout(fn || noop, 0);
  }; // offload a functions execution

  // check browser capabilities
  var browser = {
    addEventListener: !!window.addEventListener,
    touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
    transitions: function (temp) {
      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
      for (var i in props) {
        if (temp.style[props[i]] !== undefined) return true;
      }return false;
    }(document.createElement('swipe'))
  };

  // quit if no root element
  if (!container) return;
  var element = container.children[0];
  var slides, slidePos, width, length;
  options = options || {};
  var index = parseInt(options.startSlide, 10) || 0;
  var speed = options.speed || 300;
  options.continuous = options.continuous !== undefined ? options.continuous : true;

  function _setup() {

    // cache slides
    slides = element.children;
    length = slides.length;

    // set continuous to false if only one slide
    if (slides.length < 2) options.continuous = false;

    //special case if two slides
    if (browser.transitions && options.continuous && slides.length < 3) {
      element.appendChild(slides[0].cloneNode(true));
      element.appendChild(element.children[1].cloneNode(true));
      slides = element.children;
    }

    // create an array to store current positions of each slide
    slidePos = new Array(slides.length);

    // determine width of each slide
    width = container.getBoundingClientRect().width || container.offsetWidth;

    element.style.width = slides.length * width + 'px';

    // stack elements
    var pos = slides.length;
    while (pos--) {

      var slide = slides[pos];

      slide.style.width = width + 'px';
      slide.setAttribute('data-index', pos);

      if (browser.transitions) {
        slide.style.left = pos * -width + 'px';
        move(pos, index > pos ? -width : index < pos ? width : 0, 0);
      }
    }

    // reposition elements before and after index
    if (options.continuous && browser.transitions) {
      move(circle(index - 1), -width, 0);
      move(circle(index + 1), width, 0);
    }

    if (!browser.transitions) element.style.left = index * -width + 'px';

    container.style.visibility = 'visible';
  }

  function _prev() {

    if (options.continuous) _slide(index - 1);else if (index) _slide(index - 1);
  }

  function _next() {

    if (options.continuous) _slide(index + 1);else if (index < slides.length - 1) _slide(index + 1);
  }

  function circle(index) {

    // a simple positive modulo using slides.length
    return (slides.length + index % slides.length) % slides.length;
  }

  function _slide(to, slideSpeed) {

    // do nothing if already on requested slide
    if (index == to) return;

    if (browser.transitions) {

      var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

      // get the actual position of the slide
      if (options.continuous) {
        var natural_direction = direction;
        direction = -slidePos[circle(to)] / width;

        // if going forward but to < index, use to = slides.length + to
        // if going backward but to > index, use to = -slides.length + to
        if (direction !== natural_direction) to = -direction * slides.length + to;
      }

      var diff = Math.abs(index - to) - 1;

      // move all the slides between index and to in the right direction
      while (diff--) {
        move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
      }to = circle(to);

      move(index, width * direction, slideSpeed || speed);
      move(to, 0, slideSpeed || speed);

      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
    } else {

      to = circle(to);
      animate(index * -width, to * -width, slideSpeed || speed);
      //no fallback for a circular continuous if the browser does not accept transitions
    }

    index = to;
    offloadFn(options.callback && options.callback(index, slides[index]));
  }

  function move(index, dist, speed) {

    translate(index, dist, speed);
    slidePos[index] = dist;
  }

  function translate(index, dist, speed) {

    var slide = slides[index];
    var style = slide && slide.style;

    if (!style) return;

    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + 'ms';

    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
    style.msTransform = style.MozTransform = style.OTransform = 'translateX(' + dist + 'px)';
  }

  function animate(from, to, speed) {

    // if not an animation, just reposition
    if (!speed) {

      element.style.left = to + 'px';
      return;
    }

    var start = +new Date();

    var timer = setInterval(function () {

      var timeElap = +new Date() - start;

      if (timeElap > speed) {

        element.style.left = to + 'px';

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        clearInterval(timer);
        return;
      }

      element.style.left = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
    }, 4);
  }

  // setup auto slideshow
  var delay = options.auto || 0;
  var interval;

  function begin() {
    interval = setTimeout(_next, delay);
  }

  function _stop() {

    delay = 0;
    clearTimeout(interval);
    setTimeout(function () {
      interval = setTimeout(_next, delay);
      delay = options.auto;
    }, options.auto);
  }

  // setup initial vars
  var _start = {};
  var delta = {};
  var isScrolling;

  // setup event capturing
  var events = {

    handleEvent: function handleEvent(event) {

      switch (event.type) {
        case 'touchstart':
          this.start(event);break;
        case 'touchmove':
          this.move(event);break;
        case 'touchend':
          offloadFn(this.end(event));break;
        case 'webkitTransitionEnd':
        case 'msTransitionEnd':
        case 'oTransitionEnd':
        case 'otransitionend':
        case 'transitionend':
          offloadFn(this.transitionEnd(event));break;
        case 'resize':
          offloadFn(_setup);break;
      }

      if (options.stopPropagation) event.stopPropagation();
    },
    start: function start(event) {

      var touches = event.touches[0];

      // measure start values
      _start = {

        // get initial touch coords
        x: touches.pageX,
        y: touches.pageY,

        // store time to determine touch duration
        time: +new Date()

      };

      // used for testing first move event
      isScrolling = undefined;

      // reset delta and end measurements
      delta = {};

      // attach touchmove and touchend listeners
      element.addEventListener('touchmove', this, false);
      element.addEventListener('touchend', this, false);
    },
    move: function move(event) {

      // ensure swiping with one touch and not pinching
      if (event.touches.length > 1 || event.scale && event.scale !== 1) return;

      if (options.disableScroll) event.preventDefault();

      var touches = event.touches[0];

      // measure change in x and y
      delta = {
        x: touches.pageX - _start.x,
        y: touches.pageY - _start.y
      };

      // determine if scrolling test has run - one time test
      if (typeof isScrolling == 'undefined') {
        isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
      }

      // if user is not trying to scroll vertically
      if (!isScrolling) {

        // prevent native scrolling
        event.preventDefault();

        // stop slideshow
        _stop();

        // increase resistance if first or last slide
        if (options.continuous) {
          // we don't add resistance at the end

          translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);
        } else {

          delta.x = delta.x / (!index && delta.x > 0 // if first slide and sliding left
          || index == slides.length - 1 // or if last slide and sliding right
          && delta.x < 0 // and if sliding at all
          ? Math.abs(delta.x) / width + 1 : // determine resistance level
          1); // no resistance if false

          // translate 1:1
          translate(index - 1, delta.x + slidePos[index - 1], 0);
          translate(index, delta.x + slidePos[index], 0);
          translate(index + 1, delta.x + slidePos[index + 1], 0);
        }
      }
    },
    end: function end(event) {

      // measure duration
      var duration = +new Date() - _start.time;

      // determine if slide attempt triggers next/prev slide
      var isValidSlide = Number(duration) < 250 // if slide duration is less than 250ms
      && Math.abs(delta.x) > 20 // and if slide amt is greater than 20px
      || Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

      // determine if slide attempt is past start and end
      var isPastBounds = !index && delta.x > 0 // if first slide and slide amt is greater than 0
      || index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0

      if (options.continuous) isPastBounds = false;

      // determine direction of swipe (true:right, false:left)
      var direction = delta.x < 0;

      // if not scrolling vertically
      if (!isScrolling) {

        if (isValidSlide && !isPastBounds) {

          if (direction) {

            if (options.continuous) {
              // we need to get the next in this direction in place

              move(circle(index - 1), -width, 0);
              move(circle(index + 2), width, 0);
            } else {
              move(index - 1, -width, 0);
            }

            move(index, slidePos[index] - width, speed);
            move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
            index = circle(index + 1);
          } else {
            if (options.continuous) {
              // we need to get the next in this direction in place

              move(circle(index + 1), width, 0);
              move(circle(index - 2), -width, 0);
            } else {
              move(index + 1, width, 0);
            }

            move(index, slidePos[index] + width, speed);
            move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
            index = circle(index - 1);
          }

          options.callback && options.callback(index, slides[index]);
        } else {

          if (options.continuous) {

            move(circle(index - 1), -width, speed);
            move(index, 0, speed);
            move(circle(index + 1), width, speed);
          } else {

            move(index - 1, -width, speed);
            move(index, 0, speed);
            move(index + 1, width, speed);
          }
        }
      }

      // kill touchmove and touchend event listeners until touchstart called again
      element.removeEventListener('touchmove', events, false);
      element.removeEventListener('touchend', events, false);
    },
    transitionEnd: function transitionEnd(event) {

      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

        if (delay) begin();

        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
      }
    }

  };

  // trigger setup
  _setup();

  // start auto slideshow if applicable
  if (delay) begin();

  // add event listeners
  if (browser.addEventListener) {

    // set touchstart event on element
    if (browser.touch) element.addEventListener('touchstart', events, false);

    if (browser.transitions) {
      element.addEventListener('webkitTransitionEnd', events, false);
      element.addEventListener('msTransitionEnd', events, false);
      element.addEventListener('oTransitionEnd', events, false);
      element.addEventListener('otransitionend', events, false);
      element.addEventListener('transitionend', events, false);
    }

    // set resize event on window
    window.addEventListener('resize', events, false);
  } else {

    window.onresize = function () {
      _setup();
    }; // to play nice with old IE
  }

  // expose the Swipe API
  return {
    setup: function setup() {

      _setup();
    },
    slide: function slide(to, speed) {

      // cancel slideshow
      _stop();

      _slide(to, speed);
    },
    prev: function prev() {

      // cancel slideshow
      _stop();

      _prev();
    },
    next: function next() {

      // cancel slideshow
      _stop();

      _next();
    },
    stop: function stop() {

      // cancel slideshow
      _stop();
    },
    getPos: function getPos() {

      // return current index position
      return index;
    },
    getNumSlides: function getNumSlides() {

      // return total number of slides
      return length;
    },
    kill: function kill() {

      // cancel slideshow
      _stop();

      // reset element
      element.style.width = '';
      element.style.left = '';

      // reset slides
      var pos = slides.length;
      while (pos--) {

        var slide = slides[pos];
        slide.style.width = '';
        slide.style.left = '';

        if (browser.transitions) translate(pos, 0, 0);
      }

      // removed event listeners
      if (browser.addEventListener) {

        // remove current event listeners
        element.removeEventListener('touchstart', events, false);
        element.removeEventListener('webkitTransitionEnd', events, false);
        element.removeEventListener('msTransitionEnd', events, false);
        element.removeEventListener('oTransitionEnd', events, false);
        element.removeEventListener('otransitionend', events, false);
        element.removeEventListener('transitionend', events, false);
        window.removeEventListener('resize', events, false);
      } else {

        window.onresize = null;
      }
    }
  };
}

if (window.jQuery || window.Zepto) {
  (function ($) {
    $.fn.Swipe = function (params) {
      return this.each(function () {
        $(this).data('Swipe', new Swipe($(this)[0], params));
      });
    };
  })(window.jQuery || window.Zepto);
}

exports.default = Swipe;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navigation = __webpack_require__(0);

var _navigation2 = _interopRequireDefault(_navigation);

var _slider = __webpack_require__(7);

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_slider2.default.init();
_navigation2.default.init();

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navigation = __webpack_require__(0);

var _navigation2 = _interopRequireDefault(_navigation);

var _swipe = __webpack_require__(1);

var _swipe2 = _interopRequireDefault(_swipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slider = void 0;
var nextBtn = void 0;
var prevBtn = void 0;
var navItems = void 0;
var navItemsLength = void 0;

function _cacheDom() {
  nextBtn = document.getElementById('next');
  prevBtn = document.getElementById('prev');
  navItems = document.querySelectorAll('.slider__pagination__item');
  navItemsLength = navItems.length;
}

function _bindEvents() {
  nextBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return;
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.next();
      setTimeout(function () {
        el.removeAttribute('disabled');
      }, 2000);
    }
  });

  prevBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return;
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.prev();
      setTimeout(function () {
        el.removeAttribute('disabled');
      }, 2000);
    }
  });

  for (var i = 0; i < navItemsLength; i++) {
    navItems[i].addEventListener('click', function (event) {
      var el = event.currentTarget;
      event.preventDefault();

      if (el.className !== 'slider__pagination__item is-active') {
        slider.slide(el.getAttribute('data-idx'), 400);
      }
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
      prevBtn.click();
    } else if (event.keyCode === 39) {
      nextBtn.click();
    }
  });
}

function _render() {
  slider = (0, _swipe2.default)(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 2000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    callback: function callback(index, elem) {
      if (document.querySelector('.slider__pagination__item.is-active')) {
        document.querySelector('.slider__pagination__item.is-active').className = 'slider__pagination__item';
      }
      navItems[index].className += ' is-active';
    },
    transitionEnd: function transitionEnd(index, elem) {}
  });
}

exports.default = function () {
  function init() {
    _cacheDom();
    _bindEvents();
    _render();
  }

  return {
    init: init
  };
}();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNWI1ZGVhMWE5NjRiN2VlMTlmZiIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vZnJvbnRlbmQvanMvc3dpcGUuanMiLCJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2pzL3NsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpXG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHRpZihleGVjdXRlTW9kdWxlcykge1xuIFx0XHRcdGZvcihpPTA7IGkgPCBleGVjdXRlTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBleGVjdXRlTW9kdWxlc1tpXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiBcdFx0Ly8gYW4gUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMl07XG4gXHRcdH1cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0fVxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykgY2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcblxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzJdID0gcHJvbWlzZTtcblxuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjViNWRlYTFhOTY0YjdlZTE5ZmYiLCJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXG4gIGxldCB0cmlnZ2VyQnRuO1xuICBsZXQgaGVhZGVyO1xuXG4gIGxldCBpbml0ID0gKCkgPT4ge1xuICAgIF9jYWNoZURvbSgpO1xuICAgIF9iaW5kRXZlbnRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfY2FjaGVEb20oKSB7XG4gICAgdHJpZ2dlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXItdG9nZ2xlJyk7XG4gICAgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2JpbmRFdmVudHMoKSB7XG4gICAgdHJpZ2dlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90b2dnbGVOYXYpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvZ2dsZU5hdihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChoZWFkZXIuY2xhc3NOYW1lID09PSAnaGVhZGVyJykge1xuICAgICAgaGVhZGVyLmNsYXNzTmFtZSArPSAnIGlzLW5hdi1vcGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICBpbml0OiBpbml0XG4gIH1cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2pzL25hdmlnYXRpb24uanMiLCIvKlxuICogU3dpcGUgMi4wXG4gKlxuICogQnJhZCBCaXJkc2FsbFxuICogQ29weXJpZ2h0IDIwMTMsIE1JVCBMaWNlbnNlXG4gKlxuICovXG5cbmZ1bmN0aW9uIFN3aXBlKGNvbnRhaW5lciwgb3B0aW9ucykge1xuXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIHV0aWxpdGllc1xuICB2YXIgbm9vcCA9IGZ1bmN0aW9uKCkge307IC8vIHNpbXBsZSBubyBvcGVyYXRpb24gZnVuY3Rpb25cbiAgdmFyIG9mZmxvYWRGbiA9IGZ1bmN0aW9uKGZuKSB7IHNldFRpbWVvdXQoZm4gfHwgbm9vcCwgMCkgfTsgLy8gb2ZmbG9hZCBhIGZ1bmN0aW9ucyBleGVjdXRpb25cblxuICAvLyBjaGVjayBicm93c2VyIGNhcGFiaWxpdGllc1xuICB2YXIgYnJvd3NlciA9IHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiAhIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyLFxuICAgIHRvdWNoOiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB8fCB3aW5kb3cuRG9jdW1lbnRUb3VjaCAmJiBkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gsXG4gICAgdHJhbnNpdGlvbnM6IChmdW5jdGlvbih0ZW1wKSB7XG4gICAgICB2YXIgcHJvcHMgPSBbJ3RyYW5zaXRpb25Qcm9wZXJ0eScsICdXZWJraXRUcmFuc2l0aW9uJywgJ01velRyYW5zaXRpb24nLCAnT1RyYW5zaXRpb24nLCAnbXNUcmFuc2l0aW9uJ107XG4gICAgICBmb3IgKCB2YXIgaSBpbiBwcm9wcyApIGlmICh0ZW1wLnN0eWxlWyBwcm9wc1tpXSBdICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N3aXBlJykpXG4gIH07XG5cbiAgLy8gcXVpdCBpZiBubyByb290IGVsZW1lbnRcbiAgaWYgKCFjb250YWluZXIpIHJldHVybjtcbiAgdmFyIGVsZW1lbnQgPSBjb250YWluZXIuY2hpbGRyZW5bMF07XG4gIHZhciBzbGlkZXMsIHNsaWRlUG9zLCB3aWR0aCwgbGVuZ3RoO1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGluZGV4ID0gcGFyc2VJbnQob3B0aW9ucy5zdGFydFNsaWRlLCAxMCkgfHwgMDtcbiAgdmFyIHNwZWVkID0gb3B0aW9ucy5zcGVlZCB8fCAzMDA7XG4gIG9wdGlvbnMuY29udGludW91cyA9IG9wdGlvbnMuY29udGludW91cyAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jb250aW51b3VzIDogdHJ1ZTtcblxuICBmdW5jdGlvbiBzZXR1cCgpIHtcblxuICAgIC8vIGNhY2hlIHNsaWRlc1xuICAgIHNsaWRlcyA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgbGVuZ3RoID0gc2xpZGVzLmxlbmd0aDtcblxuICAgIC8vIHNldCBjb250aW51b3VzIHRvIGZhbHNlIGlmIG9ubHkgb25lIHNsaWRlXG4gICAgaWYgKHNsaWRlcy5sZW5ndGggPCAyKSBvcHRpb25zLmNvbnRpbnVvdXMgPSBmYWxzZTtcblxuICAgIC8vc3BlY2lhbCBjYXNlIGlmIHR3byBzbGlkZXNcbiAgICBpZiAoYnJvd3Nlci50cmFuc2l0aW9ucyAmJiBvcHRpb25zLmNvbnRpbnVvdXMgJiYgc2xpZGVzLmxlbmd0aCA8IDMpIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQuY2hpbGRyZW5bMV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIHNsaWRlcyA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IHRvIHN0b3JlIGN1cnJlbnQgcG9zaXRpb25zIG9mIGVhY2ggc2xpZGVcbiAgICBzbGlkZVBvcyA9IG5ldyBBcnJheShzbGlkZXMubGVuZ3RoKTtcblxuICAgIC8vIGRldGVybWluZSB3aWR0aCBvZiBlYWNoIHNsaWRlXG4gICAgd2lkdGggPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgY29udGFpbmVyLm9mZnNldFdpZHRoO1xuXG4gICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IChzbGlkZXMubGVuZ3RoICogd2lkdGgpICsgJ3B4JztcblxuICAgIC8vIHN0YWNrIGVsZW1lbnRzXG4gICAgdmFyIHBvcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgd2hpbGUocG9zLS0pIHtcblxuICAgICAgdmFyIHNsaWRlID0gc2xpZGVzW3Bvc107XG5cbiAgICAgIHNsaWRlLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgc2xpZGUuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgcG9zKTtcblxuICAgICAgaWYgKGJyb3dzZXIudHJhbnNpdGlvbnMpIHtcbiAgICAgICAgc2xpZGUuc3R5bGUubGVmdCA9IChwb3MgKiAtd2lkdGgpICsgJ3B4JztcbiAgICAgICAgbW92ZShwb3MsIGluZGV4ID4gcG9zID8gLXdpZHRoIDogKGluZGV4IDwgcG9zID8gd2lkdGggOiAwKSwgMCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyByZXBvc2l0aW9uIGVsZW1lbnRzIGJlZm9yZSBhbmQgYWZ0ZXIgaW5kZXhcbiAgICBpZiAob3B0aW9ucy5jb250aW51b3VzICYmIGJyb3dzZXIudHJhbnNpdGlvbnMpIHtcbiAgICAgIG1vdmUoY2lyY2xlKGluZGV4LTEpLCAtd2lkdGgsIDApO1xuICAgICAgbW92ZShjaXJjbGUoaW5kZXgrMSksIHdpZHRoLCAwKTtcbiAgICB9XG5cbiAgICBpZiAoIWJyb3dzZXIudHJhbnNpdGlvbnMpIGVsZW1lbnQuc3R5bGUubGVmdCA9IChpbmRleCAqIC13aWR0aCkgKyAncHgnO1xuXG4gICAgY29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXYoKSB7XG5cbiAgICBpZiAob3B0aW9ucy5jb250aW51b3VzKSBzbGlkZShpbmRleC0xKTtcbiAgICBlbHNlIGlmIChpbmRleCkgc2xpZGUoaW5kZXgtMSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG5cbiAgICBpZiAob3B0aW9ucy5jb250aW51b3VzKSBzbGlkZShpbmRleCsxKTtcbiAgICBlbHNlIGlmIChpbmRleCA8IHNsaWRlcy5sZW5ndGggLSAxKSBzbGlkZShpbmRleCsxKTtcblxuICB9XG5cbiAgZnVuY3Rpb24gY2lyY2xlKGluZGV4KSB7XG5cbiAgICAvLyBhIHNpbXBsZSBwb3NpdGl2ZSBtb2R1bG8gdXNpbmcgc2xpZGVzLmxlbmd0aFxuICAgIHJldHVybiAoc2xpZGVzLmxlbmd0aCArIChpbmRleCAlIHNsaWRlcy5sZW5ndGgpKSAlIHNsaWRlcy5sZW5ndGg7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHNsaWRlKHRvLCBzbGlkZVNwZWVkKSB7XG5cbiAgICAvLyBkbyBub3RoaW5nIGlmIGFscmVhZHkgb24gcmVxdWVzdGVkIHNsaWRlXG4gICAgaWYgKGluZGV4ID09IHRvKSByZXR1cm47XG5cbiAgICBpZiAoYnJvd3Nlci50cmFuc2l0aW9ucykge1xuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gTWF0aC5hYnMoaW5kZXgtdG8pIC8gKGluZGV4LXRvKTsgLy8gMTogYmFja3dhcmQsIC0xOiBmb3J3YXJkXG5cbiAgICAgIC8vIGdldCB0aGUgYWN0dWFsIHBvc2l0aW9uIG9mIHRoZSBzbGlkZVxuICAgICAgaWYgKG9wdGlvbnMuY29udGludW91cykge1xuICAgICAgICB2YXIgbmF0dXJhbF9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIGRpcmVjdGlvbiA9IC1zbGlkZVBvc1tjaXJjbGUodG8pXSAvIHdpZHRoO1xuXG4gICAgICAgIC8vIGlmIGdvaW5nIGZvcndhcmQgYnV0IHRvIDwgaW5kZXgsIHVzZSB0byA9IHNsaWRlcy5sZW5ndGggKyB0b1xuICAgICAgICAvLyBpZiBnb2luZyBiYWNrd2FyZCBidXQgdG8gPiBpbmRleCwgdXNlIHRvID0gLXNsaWRlcy5sZW5ndGggKyB0b1xuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSBuYXR1cmFsX2RpcmVjdGlvbikgdG8gPSAgLWRpcmVjdGlvbiAqIHNsaWRlcy5sZW5ndGggKyB0bztcblxuICAgICAgfVxuXG4gICAgICB2YXIgZGlmZiA9IE1hdGguYWJzKGluZGV4LXRvKSAtIDE7XG5cbiAgICAgIC8vIG1vdmUgYWxsIHRoZSBzbGlkZXMgYmV0d2VlbiBpbmRleCBhbmQgdG8gaW4gdGhlIHJpZ2h0IGRpcmVjdGlvblxuICAgICAgd2hpbGUgKGRpZmYtLSkgbW92ZSggY2lyY2xlKCh0byA+IGluZGV4ID8gdG8gOiBpbmRleCkgLSBkaWZmIC0gMSksIHdpZHRoICogZGlyZWN0aW9uLCAwKTtcblxuICAgICAgdG8gPSBjaXJjbGUodG8pO1xuXG4gICAgICBtb3ZlKGluZGV4LCB3aWR0aCAqIGRpcmVjdGlvbiwgc2xpZGVTcGVlZCB8fCBzcGVlZCk7XG4gICAgICBtb3ZlKHRvLCAwLCBzbGlkZVNwZWVkIHx8IHNwZWVkKTtcblxuICAgICAgaWYgKG9wdGlvbnMuY29udGludW91cykgbW92ZShjaXJjbGUodG8gLSBkaXJlY3Rpb24pLCAtKHdpZHRoICogZGlyZWN0aW9uKSwgMCk7IC8vIHdlIG5lZWQgdG8gZ2V0IHRoZSBuZXh0IGluIHBsYWNlXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0byA9IGNpcmNsZSh0byk7XG4gICAgICBhbmltYXRlKGluZGV4ICogLXdpZHRoLCB0byAqIC13aWR0aCwgc2xpZGVTcGVlZCB8fCBzcGVlZCk7XG4gICAgICAvL25vIGZhbGxiYWNrIGZvciBhIGNpcmN1bGFyIGNvbnRpbnVvdXMgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3QgYWNjZXB0IHRyYW5zaXRpb25zXG4gICAgfVxuXG4gICAgaW5kZXggPSB0bztcbiAgICBvZmZsb2FkRm4ob3B0aW9ucy5jYWxsYmFjayAmJiBvcHRpb25zLmNhbGxiYWNrKGluZGV4LCBzbGlkZXNbaW5kZXhdKSk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3ZlKGluZGV4LCBkaXN0LCBzcGVlZCkge1xuXG4gICAgdHJhbnNsYXRlKGluZGV4LCBkaXN0LCBzcGVlZCk7XG4gICAgc2xpZGVQb3NbaW5kZXhdID0gZGlzdDtcblxuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKGluZGV4LCBkaXN0LCBzcGVlZCkge1xuXG4gICAgdmFyIHNsaWRlID0gc2xpZGVzW2luZGV4XTtcbiAgICB2YXIgc3R5bGUgPSBzbGlkZSAmJiBzbGlkZS5zdHlsZTtcblxuICAgIGlmICghc3R5bGUpIHJldHVybjtcblxuICAgIHN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgIHN0eWxlLk1velRyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgICAgICBzdHlsZS5tc1RyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgICAgICAgICAgc3R5bGUuT1RyYW5zaXRpb25EdXJhdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHNwZWVkICsgJ21zJztcblxuICAgIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoJyArIGRpc3QgKyAncHgsMCknICsgJ3RyYW5zbGF0ZVooMCknO1xuICAgIHN0eWxlLm1zVHJhbnNmb3JtID1cbiAgICAgICAgc3R5bGUuTW96VHJhbnNmb3JtID1cbiAgICAgICAgICAgIHN0eWxlLk9UcmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgZGlzdCArICdweCknO1xuXG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlKGZyb20sIHRvLCBzcGVlZCkge1xuXG4gICAgLy8gaWYgbm90IGFuIGFuaW1hdGlvbiwganVzdCByZXBvc2l0aW9uXG4gICAgaWYgKCFzcGVlZCkge1xuXG4gICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSB0byArICdweCc7XG4gICAgICByZXR1cm47XG5cbiAgICB9XG5cbiAgICB2YXIgc3RhcnQgPSArbmV3IERhdGU7XG5cbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHRpbWVFbGFwID0gK25ldyBEYXRlIC0gc3RhcnQ7XG5cbiAgICAgIGlmICh0aW1lRWxhcCA+IHNwZWVkKSB7XG5cbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gdG8gKyAncHgnO1xuXG4gICAgICAgIGlmIChkZWxheSkgYmVnaW4oKTtcblxuICAgICAgICBvcHRpb25zLnRyYW5zaXRpb25FbmQgJiYgb3B0aW9ucy50cmFuc2l0aW9uRW5kLmNhbGwoZXZlbnQsIGluZGV4LCBzbGlkZXNbaW5kZXhdKTtcblxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICgoICh0byAtIGZyb20pICogKE1hdGguZmxvb3IoKHRpbWVFbGFwIC8gc3BlZWQpICogMTAwKSAvIDEwMCkgKSArIGZyb20pICsgJ3B4JztcblxuICAgIH0sIDQpO1xuXG4gIH1cblxuICAvLyBzZXR1cCBhdXRvIHNsaWRlc2hvd1xuICB2YXIgZGVsYXkgPSBvcHRpb25zLmF1dG8gfHwgMDtcbiAgdmFyIGludGVydmFsO1xuXG4gIGZ1bmN0aW9uIGJlZ2luKCkge1xuICAgIGludGVydmFsID0gc2V0VGltZW91dChuZXh0LCBkZWxheSk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG5cbiAgICBkZWxheSA9IDA7XG4gICAgY2xlYXJUaW1lb3V0KGludGVydmFsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGludGVydmFsID0gc2V0VGltZW91dChuZXh0LCBkZWxheSk7XG4gICAgICBkZWxheSA9IG9wdGlvbnMuYXV0bztcbiAgICB9LCBvcHRpb25zLmF1dG8pXG5cbiAgfVxuXG5cbiAgLy8gc2V0dXAgaW5pdGlhbCB2YXJzXG4gIHZhciBzdGFydCA9IHt9O1xuICB2YXIgZGVsdGEgPSB7fTtcbiAgdmFyIGlzU2Nyb2xsaW5nO1xuXG4gIC8vIHNldHVwIGV2ZW50IGNhcHR1cmluZ1xuICB2YXIgZXZlbnRzID0ge1xuXG4gICAgaGFuZGxlRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICBjYXNlICd0b3VjaHN0YXJ0JzogdGhpcy5zdGFydChldmVudCk7IGJyZWFrO1xuICAgICAgICBjYXNlICd0b3VjaG1vdmUnOiB0aGlzLm1vdmUoZXZlbnQpOyBicmVhaztcbiAgICAgICAgY2FzZSAndG91Y2hlbmQnOiBvZmZsb2FkRm4odGhpcy5lbmQoZXZlbnQpKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3dlYmtpdFRyYW5zaXRpb25FbmQnOlxuICAgICAgICBjYXNlICdtc1RyYW5zaXRpb25FbmQnOlxuICAgICAgICBjYXNlICdvVHJhbnNpdGlvbkVuZCc6XG4gICAgICAgIGNhc2UgJ290cmFuc2l0aW9uZW5kJzpcbiAgICAgICAgY2FzZSAndHJhbnNpdGlvbmVuZCc6IG9mZmxvYWRGbih0aGlzLnRyYW5zaXRpb25FbmQoZXZlbnQpKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jlc2l6ZSc6IG9mZmxvYWRGbihzZXR1cCk7IGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgfSxcbiAgICBzdGFydDogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzWzBdO1xuXG4gICAgICAvLyBtZWFzdXJlIHN0YXJ0IHZhbHVlc1xuICAgICAgc3RhcnQgPSB7XG5cbiAgICAgICAgLy8gZ2V0IGluaXRpYWwgdG91Y2ggY29vcmRzXG4gICAgICAgIHg6IHRvdWNoZXMucGFnZVgsXG4gICAgICAgIHk6IHRvdWNoZXMucGFnZVksXG5cbiAgICAgICAgLy8gc3RvcmUgdGltZSB0byBkZXRlcm1pbmUgdG91Y2ggZHVyYXRpb25cbiAgICAgICAgdGltZTogK25ldyBEYXRlXG5cbiAgICAgIH07XG5cbiAgICAgIC8vIHVzZWQgZm9yIHRlc3RpbmcgZmlyc3QgbW92ZSBldmVudFxuICAgICAgaXNTY3JvbGxpbmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIHJlc2V0IGRlbHRhIGFuZCBlbmQgbWVhc3VyZW1lbnRzXG4gICAgICBkZWx0YSA9IHt9O1xuXG4gICAgICAvLyBhdHRhY2ggdG91Y2htb3ZlIGFuZCB0b3VjaGVuZCBsaXN0ZW5lcnNcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcywgZmFsc2UpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMsIGZhbHNlKTtcblxuICAgIH0sXG4gICAgbW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgLy8gZW5zdXJlIHN3aXBpbmcgd2l0aCBvbmUgdG91Y2ggYW5kIG5vdCBwaW5jaGluZ1xuICAgICAgaWYgKCBldmVudC50b3VjaGVzLmxlbmd0aCA+IDEgfHwgZXZlbnQuc2NhbGUgJiYgZXZlbnQuc2NhbGUgIT09IDEpIHJldHVyblxuXG4gICAgICBpZiAob3B0aW9ucy5kaXNhYmxlU2Nyb2xsKSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXNbMF07XG5cbiAgICAgIC8vIG1lYXN1cmUgY2hhbmdlIGluIHggYW5kIHlcbiAgICAgIGRlbHRhID0ge1xuICAgICAgICB4OiB0b3VjaGVzLnBhZ2VYIC0gc3RhcnQueCxcbiAgICAgICAgeTogdG91Y2hlcy5wYWdlWSAtIHN0YXJ0LnlcbiAgICAgIH1cblxuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHNjcm9sbGluZyB0ZXN0IGhhcyBydW4gLSBvbmUgdGltZSB0ZXN0XG4gICAgICBpZiAoIHR5cGVvZiBpc1Njcm9sbGluZyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpc1Njcm9sbGluZyA9ICEhKCBpc1Njcm9sbGluZyB8fCBNYXRoLmFicyhkZWx0YS54KSA8IE1hdGguYWJzKGRlbHRhLnkpICk7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHVzZXIgaXMgbm90IHRyeWluZyB0byBzY3JvbGwgdmVydGljYWxseVxuICAgICAgaWYgKCFpc1Njcm9sbGluZykge1xuXG4gICAgICAgIC8vIHByZXZlbnQgbmF0aXZlIHNjcm9sbGluZ1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHN0b3Agc2xpZGVzaG93XG4gICAgICAgIHN0b3AoKTtcblxuICAgICAgICAvLyBpbmNyZWFzZSByZXNpc3RhbmNlIGlmIGZpcnN0IG9yIGxhc3Qgc2xpZGVcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGludW91cykgeyAvLyB3ZSBkb24ndCBhZGQgcmVzaXN0YW5jZSBhdCB0aGUgZW5kXG5cbiAgICAgICAgICB0cmFuc2xhdGUoY2lyY2xlKGluZGV4LTEpLCBkZWx0YS54ICsgc2xpZGVQb3NbY2lyY2xlKGluZGV4LTEpXSwgMCk7XG4gICAgICAgICAgdHJhbnNsYXRlKGluZGV4LCBkZWx0YS54ICsgc2xpZGVQb3NbaW5kZXhdLCAwKTtcbiAgICAgICAgICB0cmFuc2xhdGUoY2lyY2xlKGluZGV4KzEpLCBkZWx0YS54ICsgc2xpZGVQb3NbY2lyY2xlKGluZGV4KzEpXSwgMCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGRlbHRhLnggPVxuICAgICAgICAgICAgICBkZWx0YS54IC9cbiAgICAgICAgICAgICAgKCAoIWluZGV4ICYmIGRlbHRhLnggPiAwICAgICAgICAgICAgICAgLy8gaWYgZmlyc3Qgc2xpZGUgYW5kIHNsaWRpbmcgbGVmdFxuICAgICAgICAgICAgICAgICAgfHwgaW5kZXggPT0gc2xpZGVzLmxlbmd0aCAtIDEgICAgICAgIC8vIG9yIGlmIGxhc3Qgc2xpZGUgYW5kIHNsaWRpbmcgcmlnaHRcbiAgICAgICAgICAgICAgICAgICYmIGRlbHRhLnggPCAwICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaWYgc2xpZGluZyBhdCBhbGxcbiAgICAgICAgICAgICAgKSA/XG4gICAgICAgICAgICAgICAgICAoIE1hdGguYWJzKGRlbHRhLngpIC8gd2lkdGggKyAxICkgICAgICAvLyBkZXRlcm1pbmUgcmVzaXN0YW5jZSBsZXZlbFxuICAgICAgICAgICAgICAgICAgOiAxICk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm8gcmVzaXN0YW5jZSBpZiBmYWxzZVxuXG4gICAgICAgICAgLy8gdHJhbnNsYXRlIDE6MVxuICAgICAgICAgIHRyYW5zbGF0ZShpbmRleC0xLCBkZWx0YS54ICsgc2xpZGVQb3NbaW5kZXgtMV0sIDApO1xuICAgICAgICAgIHRyYW5zbGF0ZShpbmRleCwgZGVsdGEueCArIHNsaWRlUG9zW2luZGV4XSwgMCk7XG4gICAgICAgICAgdHJhbnNsYXRlKGluZGV4KzEsIGRlbHRhLnggKyBzbGlkZVBvc1tpbmRleCsxXSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfSxcbiAgICBlbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgIC8vIG1lYXN1cmUgZHVyYXRpb25cbiAgICAgIHZhciBkdXJhdGlvbiA9ICtuZXcgRGF0ZSAtIHN0YXJ0LnRpbWU7XG5cbiAgICAgIC8vIGRldGVybWluZSBpZiBzbGlkZSBhdHRlbXB0IHRyaWdnZXJzIG5leHQvcHJldiBzbGlkZVxuICAgICAgdmFyIGlzVmFsaWRTbGlkZSA9XG4gICAgICAgICAgTnVtYmVyKGR1cmF0aW9uKSA8IDI1MCAgICAgICAgICAgICAgIC8vIGlmIHNsaWRlIGR1cmF0aW9uIGlzIGxlc3MgdGhhbiAyNTBtc1xuICAgICAgICAgICYmIE1hdGguYWJzKGRlbHRhLngpID4gMjAgICAgICAgICAgICAvLyBhbmQgaWYgc2xpZGUgYW10IGlzIGdyZWF0ZXIgdGhhbiAyMHB4XG4gICAgICAgICAgfHwgTWF0aC5hYnMoZGVsdGEueCkgPiB3aWR0aC8yOyAgICAgIC8vIG9yIGlmIHNsaWRlIGFtdCBpcyBncmVhdGVyIHRoYW4gaGFsZiB0aGUgd2lkdGhcblxuICAgICAgLy8gZGV0ZXJtaW5lIGlmIHNsaWRlIGF0dGVtcHQgaXMgcGFzdCBzdGFydCBhbmQgZW5kXG4gICAgICB2YXIgaXNQYXN0Qm91bmRzID1cbiAgICAgICAgICAhaW5kZXggJiYgZGVsdGEueCA+IDAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgZmlyc3Qgc2xpZGUgYW5kIHNsaWRlIGFtdCBpcyBncmVhdGVyIHRoYW4gMFxuICAgICAgICAgIHx8IGluZGV4ID09IHNsaWRlcy5sZW5ndGggLSAxICYmIGRlbHRhLnggPCAwOyAgICAvLyBvciBpZiBsYXN0IHNsaWRlIGFuZCBzbGlkZSBhbXQgaXMgbGVzcyB0aGFuIDBcblxuICAgICAgaWYgKG9wdGlvbnMuY29udGludW91cykgaXNQYXN0Qm91bmRzID0gZmFsc2U7XG5cbiAgICAgIC8vIGRldGVybWluZSBkaXJlY3Rpb24gb2Ygc3dpcGUgKHRydWU6cmlnaHQsIGZhbHNlOmxlZnQpXG4gICAgICB2YXIgZGlyZWN0aW9uID0gZGVsdGEueCA8IDA7XG5cbiAgICAgIC8vIGlmIG5vdCBzY3JvbGxpbmcgdmVydGljYWxseVxuICAgICAgaWYgKCFpc1Njcm9sbGluZykge1xuXG4gICAgICAgIGlmIChpc1ZhbGlkU2xpZGUgJiYgIWlzUGFzdEJvdW5kcykge1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jb250aW51b3VzKSB7IC8vIHdlIG5lZWQgdG8gZ2V0IHRoZSBuZXh0IGluIHRoaXMgZGlyZWN0aW9uIGluIHBsYWNlXG5cbiAgICAgICAgICAgICAgbW92ZShjaXJjbGUoaW5kZXgtMSksIC13aWR0aCwgMCk7XG4gICAgICAgICAgICAgIG1vdmUoY2lyY2xlKGluZGV4KzIpLCB3aWR0aCwgMCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1vdmUoaW5kZXgtMSwgLXdpZHRoLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZShpbmRleCwgc2xpZGVQb3NbaW5kZXhdLXdpZHRoLCBzcGVlZCk7XG4gICAgICAgICAgICBtb3ZlKGNpcmNsZShpbmRleCsxKSwgc2xpZGVQb3NbY2lyY2xlKGluZGV4KzEpXS13aWR0aCwgc3BlZWQpO1xuICAgICAgICAgICAgaW5kZXggPSBjaXJjbGUoaW5kZXgrMSk7XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGludW91cykgeyAvLyB3ZSBuZWVkIHRvIGdldCB0aGUgbmV4dCBpbiB0aGlzIGRpcmVjdGlvbiBpbiBwbGFjZVxuXG4gICAgICAgICAgICAgIG1vdmUoY2lyY2xlKGluZGV4KzEpLCB3aWR0aCwgMCk7XG4gICAgICAgICAgICAgIG1vdmUoY2lyY2xlKGluZGV4LTIpLCAtd2lkdGgsIDApO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtb3ZlKGluZGV4KzEsIHdpZHRoLCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW92ZShpbmRleCwgc2xpZGVQb3NbaW5kZXhdK3dpZHRoLCBzcGVlZCk7XG4gICAgICAgICAgICBtb3ZlKGNpcmNsZShpbmRleC0xKSwgc2xpZGVQb3NbY2lyY2xlKGluZGV4LTEpXSt3aWR0aCwgc3BlZWQpO1xuICAgICAgICAgICAgaW5kZXggPSBjaXJjbGUoaW5kZXgtMSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrICYmIG9wdGlvbnMuY2FsbGJhY2soaW5kZXgsIHNsaWRlc1tpbmRleF0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5jb250aW51b3VzKSB7XG5cbiAgICAgICAgICAgIG1vdmUoY2lyY2xlKGluZGV4LTEpLCAtd2lkdGgsIHNwZWVkKTtcbiAgICAgICAgICAgIG1vdmUoaW5kZXgsIDAsIHNwZWVkKTtcbiAgICAgICAgICAgIG1vdmUoY2lyY2xlKGluZGV4KzEpLCB3aWR0aCwgc3BlZWQpO1xuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbW92ZShpbmRleC0xLCAtd2lkdGgsIHNwZWVkKTtcbiAgICAgICAgICAgIG1vdmUoaW5kZXgsIDAsIHNwZWVkKTtcbiAgICAgICAgICAgIG1vdmUoaW5kZXgrMSwgd2lkdGgsIHNwZWVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIC8vIGtpbGwgdG91Y2htb3ZlIGFuZCB0b3VjaGVuZCBldmVudCBsaXN0ZW5lcnMgdW50aWwgdG91Y2hzdGFydCBjYWxsZWQgYWdhaW5cbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZXZlbnRzLCBmYWxzZSlcbiAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBldmVudHMsIGZhbHNlKVxuXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICBpZiAocGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpLCAxMCkgPT0gaW5kZXgpIHtcblxuICAgICAgICBpZiAoZGVsYXkpIGJlZ2luKCk7XG5cbiAgICAgICAgb3B0aW9ucy50cmFuc2l0aW9uRW5kICYmIG9wdGlvbnMudHJhbnNpdGlvbkVuZC5jYWxsKGV2ZW50LCBpbmRleCwgc2xpZGVzW2luZGV4XSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgLy8gdHJpZ2dlciBzZXR1cFxuICBzZXR1cCgpO1xuXG4gIC8vIHN0YXJ0IGF1dG8gc2xpZGVzaG93IGlmIGFwcGxpY2FibGVcbiAgaWYgKGRlbGF5KSBiZWdpbigpO1xuXG5cbiAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyc1xuICBpZiAoYnJvd3Nlci5hZGRFdmVudExpc3RlbmVyKSB7XG5cbiAgICAvLyBzZXQgdG91Y2hzdGFydCBldmVudCBvbiBlbGVtZW50XG4gICAgaWYgKGJyb3dzZXIudG91Y2gpIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50cywgZmFsc2UpO1xuXG4gICAgaWYgKGJyb3dzZXIudHJhbnNpdGlvbnMpIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGV2ZW50cywgZmFsc2UpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtc1RyYW5zaXRpb25FbmQnLCBldmVudHMsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb1RyYW5zaXRpb25FbmQnLCBldmVudHMsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3RyYW5zaXRpb25lbmQnLCBldmVudHMsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGV2ZW50cywgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIHNldCByZXNpemUgZXZlbnQgb24gd2luZG93XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50cywgZmFsc2UpO1xuXG4gIH0gZWxzZSB7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7IHNldHVwKCkgfTsgLy8gdG8gcGxheSBuaWNlIHdpdGggb2xkIElFXG5cbiAgfVxuXG4gIC8vIGV4cG9zZSB0aGUgU3dpcGUgQVBJXG4gIHJldHVybiB7XG4gICAgc2V0dXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBzZXR1cCgpO1xuXG4gICAgfSxcbiAgICBzbGlkZTogZnVuY3Rpb24odG8sIHNwZWVkKSB7XG5cbiAgICAgIC8vIGNhbmNlbCBzbGlkZXNob3dcbiAgICAgIHN0b3AoKTtcblxuICAgICAgc2xpZGUodG8sIHNwZWVkKTtcblxuICAgIH0sXG4gICAgcHJldjogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIGNhbmNlbCBzbGlkZXNob3dcbiAgICAgIHN0b3AoKTtcblxuICAgICAgcHJldigpO1xuXG4gICAgfSxcbiAgICBuZXh0OiBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gY2FuY2VsIHNsaWRlc2hvd1xuICAgICAgc3RvcCgpO1xuXG4gICAgICBuZXh0KCk7XG5cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyBjYW5jZWwgc2xpZGVzaG93XG4gICAgICBzdG9wKCk7XG5cbiAgICB9LFxuICAgIGdldFBvczogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIHJldHVybiBjdXJyZW50IGluZGV4IHBvc2l0aW9uXG4gICAgICByZXR1cm4gaW5kZXg7XG5cbiAgICB9LFxuICAgIGdldE51bVNsaWRlczogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIHJldHVybiB0b3RhbCBudW1iZXIgb2Ygc2xpZGVzXG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH0sXG4gICAga2lsbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIGNhbmNlbCBzbGlkZXNob3dcbiAgICAgIHN0b3AoKTtcblxuICAgICAgLy8gcmVzZXQgZWxlbWVudFxuICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgICAgIC8vIHJlc2V0IHNsaWRlc1xuICAgICAgdmFyIHBvcyA9IHNsaWRlcy5sZW5ndGg7XG4gICAgICB3aGlsZShwb3MtLSkge1xuXG4gICAgICAgIHZhciBzbGlkZSA9IHNsaWRlc1twb3NdO1xuICAgICAgICBzbGlkZS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICBzbGlkZS5zdHlsZS5sZWZ0ID0gJyc7XG5cbiAgICAgICAgaWYgKGJyb3dzZXIudHJhbnNpdGlvbnMpIHRyYW5zbGF0ZShwb3MsIDAsIDApO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZWQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICBpZiAoYnJvd3Nlci5hZGRFdmVudExpc3RlbmVyKSB7XG5cbiAgICAgICAgLy8gcmVtb3ZlIGN1cnJlbnQgZXZlbnQgbGlzdGVuZXJzXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGV2ZW50cywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBldmVudHMsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtc1RyYW5zaXRpb25FbmQnLCBldmVudHMsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdvVHJhbnNpdGlvbkVuZCcsIGV2ZW50cywgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ290cmFuc2l0aW9uZW5kJywgZXZlbnRzLCBmYWxzZSk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGV2ZW50cywgZmFsc2UpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZXZlbnRzLCBmYWxzZSk7XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuXG4gICAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG51bGw7XG5cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG59XG5cblxuaWYgKCB3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0byApIHtcbiAgKGZ1bmN0aW9uKCQpIHtcbiAgICAkLmZuLlN3aXBlID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ1N3aXBlJywgbmV3IFN3aXBlKCQodGhpcylbMF0sIHBhcmFtcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSggd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG8gKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvanMvc3dpcGUuanMiLCJpbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24nO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG5cbnNsaWRlci5pbml0KCk7XG5uYXZpZ2F0aW9uLmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9tYWluLmpzIiwiaW1wb3J0IG5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uJztcbmltcG9ydCBTd2lwZSBmcm9tICcuL3N3aXBlJztcblxubGV0IHNsaWRlcjtcbmxldCBuZXh0QnRuO1xubGV0IHByZXZCdG47XG5sZXQgbmF2SXRlbXM7XG5sZXQgbmF2SXRlbXNMZW5ndGg7XG5cbmZ1bmN0aW9uIF9jYWNoZURvbSgpIHtcbiAgbmV4dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG4gIHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xuICBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3BhZ2luYXRpb25fX2l0ZW0nKTtcbiAgbmF2SXRlbXNMZW5ndGggPSBuYXZJdGVtcy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIF9iaW5kRXZlbnRzKCkge1xuICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgZWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIHNsaWRlci5uZXh0KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH0sIDIwMDApXG4gICAgfVxuXG4gIH0pO1xuXG4gIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBlbCA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgc2xpZGVyLnByZXYoKTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgfSwgMjAwMClcbiAgICB9XG4gIH0pO1xuXG4gIGZvciAobGV0IGk9MDsgaSA8IG5hdkl0ZW1zTGVuZ3RoOyBpKysgKSB7XG4gICAgbmF2SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XG4gICAgICBsZXQgZWwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGVsLmNsYXNzTmFtZSAhPT0gJ3NsaWRlcl9fcGFnaW5hdGlvbl9faXRlbSBpcy1hY3RpdmUnKSB7XG4gICAgICAgIHNsaWRlci5zbGlkZShlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWR4JyksIDQwMCk7XG4gICAgICB9XG5cbiAgICB9KVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PntcbiAgICBpZihldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgcHJldkJ0bi5jbGljaygpXG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgbmV4dEJ0bi5jbGljaygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBfcmVuZGVyKCkge1xuICBzbGlkZXIgPSBTd2lwZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyksIHtcbiAgICBzdGFydFNsaWRlOiAwLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgYXV0bzogMjAwMCxcbiAgICBjb250aW51b3VzOiB0cnVlLFxuICAgIGRpc2FibGVTY3JvbGw6IGZhbHNlLFxuICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGluZGV4LCBlbGVtKSB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fcGFnaW5hdGlvbl9faXRlbS5pcy1hY3RpdmUnKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19wYWdpbmF0aW9uX19pdGVtLmlzLWFjdGl2ZScpLmNsYXNzTmFtZSA9ICdzbGlkZXJfX3BhZ2luYXRpb25fX2l0ZW0nO1xuICAgICAgfVxuICAgICAgbmF2SXRlbXNbaW5kZXhdLmNsYXNzTmFtZSArPSAnIGlzLWFjdGl2ZSc7XG4gICAgfSxcbiAgICB0cmFuc2l0aW9uRW5kOiBmdW5jdGlvbihpbmRleCwgZWxlbSkge1xuXG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGluaXQgKCkge1xuICAgIF9jYWNoZURvbSgpO1xuICAgIF9iaW5kRXZlbnRzKCk7XG4gICAgX3JlbmRlcigpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0IDogaW5pdFxuICB9O1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9qcy9zbGlkZXIuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7QUNoQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFUQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFwTUE7QUFDQTtBQXNNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBdkZBO0FBMEZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzdqQkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OzsiLCJzb3VyY2VSb290IjoiIn0=