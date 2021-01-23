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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modalBtns = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal'),
      modalCloseBtn = modalWindow.querySelector('[data-close]');
let showModalTimer = setTimeout(openModal, 15000);
modalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});
modalWindow.addEventListener('click', e => {
  if (e.target == modalWindow || e.target == modalCloseBtn) {
    closeModal(modalWindow);
  }
});
document.addEventListener('keydown', e => {
  if (e.code == 'Escape' && modalWindow.style.display != '') {
    closeModal(modalWindow);
  }
});
window.addEventListener('scroll', showModalByScroll);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
}

function openModal() {
  modalWindow.style.display = 'block';
  modalWindow.classList.add('fade');
  document.body.style.overflow = 'hidden';
  clearInterval(showModalTimer);
}

function closeModal(modal) {
  modal.style.display = '';
  modal.classList.remove('fade');
  document.body.style.overflow = 'auto';
}

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsWrap = document.querySelector('.tabheader');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });
  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}

tabsWrap.addEventListener('click', e => {
  const target = e.target;

  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((tab, i) => {
      if (target == tab) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
hideTabContent();
showTabContent();

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const timerDeadline = '2021-02-01';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
  return {
    total: t,
    days,
    hours,
    minutes,
    seconds
  };
}

function setTime(selector, endtime) {
  let timeInterval = setInterval(updateClock, 1000);
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  function getZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  updateClock();
}

setTime('.timer', timerDeadline);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map