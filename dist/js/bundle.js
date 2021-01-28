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
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_slider_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider.v2 */ "./src/js/modules/slider.v2.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");





// import slider from './modules/slider'



window.addEventListener('DOMContentLoaded', () => {
	const	modalTimerId = setTimeout( () => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])('.modal',modalTimerId), 60000)


	Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active')
	Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2021-02-05')
	Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]','.modal',modalTimerId)
	Object(_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])()
	Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId)
	// slider('.offer__slider')
	Object(_modules_slider_v2__WEBPACK_IMPORTED_MODULE_5__["default"])('.offer__slider','.offer__slider-wrapper','.offer__slider-inner')
	Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])()
})


/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator (){
	const result = document.querySelector('.calculating__result span')
	let sex, weight, height, age, ratio

	//set sex
	localStorage.getItem('sex')
		? sex = localStorage.getItem('sex')
		: sex = 'female'
	localStorage.setItem('sex', sex)
	//set ratio
	localStorage.getItem('ratio')
		? ratio = localStorage.getItem('ratio')
		: ratio = 1.375
	localStorage.setItem('ratio', ratio)

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector)

		elements.forEach(element=>{
			element.classList.remove(activeClass)
			if (element.getAttribute('id') === localStorage.getItem('sex')){
				element.classList.add(activeClass)
			}
			if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')){
				element.classList.add(activeClass)
			}
		})
	}
	initLocalSettings('.calculating__choose-item','calculating__choose-item_active')
	function calcTotal () {
		if(!sex || !weight || !height || !age || !ratio){
			result.textContent = '____'
			return
		}
		sex === 'female'
			? result.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
			: result.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
	}
	calcTotal()

	function getStaticInfo(parentSelector, activeClass){
		const elements = document.querySelectorAll(`${parentSelector} div`)
		elements.forEach(element=>{
			element.addEventListener('click',e=>{
				if(e.target.getAttribute('data-ratio')){
					ratio = +e.target.getAttribute('data-ratio')
					localStorage.setItem('ratio', e.target.getAttribute('data-ratio'))
				}else{
					sex = e.target.getAttribute('id')
					localStorage.setItem('sex', e.target.getAttribute('id'))
				}
				elements.forEach(el=>el.classList.remove(activeClass))
				e.target.classList.add(activeClass)
				calcTotal()
			})
		})
	}

	function getDynamicInfo(selector) {
		const input = document.querySelector(selector)
		input.addEventListener('input', () => {
			if (input.value.match(/\D/g)){
				input.style.border = '1px solid red'
			}else {
				input.style.border = 'none'
			}
			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value
					break
				case 'weight':
					weight = +input.value
					break
				case 'age':
					age = +input.value
					break
			}
			calcTotal()
		})
	}

	getStaticInfo('#gender', 'calculating__choose-item_active')
	getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active')
	getDynamicInfo('#height')
	getDynamicInfo('#weight')
	getDynamicInfo('#age')
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);


/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function forms(formSelector, modalTimerId) {

	const forms = document.querySelectorAll(formSelector)
	const message = {
		loading : 'Загрузка...',
		success : 'Спасибо! Скоро мы с вами свяжемся',
		failure : 'Что-то пошло не так...',
	}

	forms.forEach(form=>{
		bindPostData(form)
	})

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault()

			const statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			statusMessage.textContent = message.loading
			form.insertAdjacentElement('afterend', statusMessage)

			const formData = new FormData(form),
				json = JSON.stringify(Object.fromEntries(formData.entries()))

			Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests',json)
			.then(data => {
				console.log(data)
				showThankModal(message.success)
				statusMessage.remove()
			})
			 .catch(() => {
				console.log(message.failure)
				showThankModal(message.failure)
			})
			 .finally(() => form.reset())
		})
	}

	function showThankModal (message){
		const prevModalDialog = document.querySelector('.modal__dialog')
		prevModalDialog.classList.add('hide')

		Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal',modalTimerId)

		const thankModal = document.createElement('div')
		thankModal.classList.add('modal__dialog')
		thankModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
	`
		document.querySelector('.modal').append(thankModal)
		setTimeout(()=>{
			thankModal.remove()
			prevModalDialog.classList.add('show')
			prevModalDialog.classList.remove('hide')
			Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal')
		},4000)
	}
}

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function menu() {
	class MenuCard {

		constructor(img, altimg, title, desc, price, parentSelector, ...classes) {
			this.imgSrc = img
			this.alt = altimg
			this.title = title
			this.desc = desc
			this.price = price
			this.parent = document.querySelector(parentSelector)
			this.classes = classes
			this.transfer = 27
			this.changeToUAH()
		}

		changeToUAH() {
			this.price = Math.floor(this.price * this.transfer)
		}

		render() {
			const element = document.createElement('div')
			if (this.classes.length === 0) {
				this.element = 'menu__item'
				element.classList.add(this.element)
			} else {
				this.classes.forEach(className => element.classList.add(className))
			}
			element.innerHTML = `
										<img src=${this.imgSrc} alt=${this.alt}>
										<h3 class="menu__item-subtitle">${this.title}</h3>
										<div class="menu__item-descr">${this.desc}</div>
										<div class="menu__item-divider"></div>
										<div class="menu__item-price">
												<div class="menu__item-cost">Цена:</div>
												<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
										</div>
		`
			this.parent.insertAdjacentElement('beforeend', element)
		}
	}

	Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu')
	.then(data => {
		data.forEach(({img, altimg, title, desc, price}) => {
			new MenuCard(img, altimg, title, desc, price, '.menu__field .container').render()
		})
	})

// Еще один вариант
/*
	getResource('http://localhost:3000/menu')
		.then(data=>createCard(data))

	function createCard(data) {
		data.forEach(({img, altimg, title, desc, price}) => {
			const parent = document.querySelector('.menu__field .container'),
						element = document.createElement('div')

			element.classList.add('menu__item')
			element.innerHTML = `
												<img src=${img} alt=${altimg}>
												<h3 class="menu__item-subtitle">${title}</h3>
												<div class="menu__item-descr">${desc}</div>
												<div class="menu__item-divider"></div>
												<div class="menu__item-price">
														<div class="menu__item-cost">Цена:</div>
														<div class="menu__item-total"><span>${price * 27}</span> грн/день</div>
												</div>`
			parent.insertAdjacentElement('beforeend', element)
		})
	}
*/

//Вариант с axios
/*
	axios.get('http://localhost:3000/menu')
		.then((res) => res.data)
		.then(data=> {
			data.forEach(({img, altimg, title, desc, price}) => {
				new MenuCard(img, altimg, title, desc, price, '.menu__field .container').render()
			})
	})
		.catch(err => console.log(err))
*/
}

/* harmony default export */ __webpack_exports__["default"] = (menu);


/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
function openModal(modalSelector,modalTimerId) {
	const modalWindow = document.querySelector(modalSelector)
	modalWindow.style.display = 'block'
	modalWindow.classList.add('fade')
	document.body.style.overflow = 'hidden'
	if (modalTimerId){
		clearInterval(modalTimerId)
	}
}

function closeModal(modalSelector) {
	const modalWindow = document.querySelector(modalSelector)
	modalWindow.style.display = ''
	modalWindow.classList.remove('fade')
	document.body.style.overflow = 'auto'
}

function modal(triggerSelector, modalSelector, modalTimerId){
	const modalBtns = document.querySelectorAll(triggerSelector),
				modalWindow = document.querySelector(modalSelector)

	modalBtns.forEach(btn => {
		btn.addEventListener('click', ()=> openModal(modalSelector,modalTimerId))
	})

	modalWindow.addEventListener('click', e => {
		if (e.target === modalWindow || e.target.classList.contains('modal__close')) {
			closeModal(modalSelector)
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.style.display !== '') {
			closeModal(modalSelector)
		}
	})

	window.addEventListener('scroll', showModalByScroll)

	function showModalByScroll() {
		if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			openModal(modalSelector,modalTimerId)
			window.removeEventListener('scroll', showModalByScroll)
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.v2.js":
/*!*************************************!*\
  !*** ./src/js/modules/slider.v2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sliderV2(sliderSelector,sliderWrapperSelector,sliderFieldSelector){
	let slideIndex = 0, offset = 0
	const slider = document.querySelector(sliderSelector),
		slideControlPrev = slider.querySelector('.offer__slider-counter .offer__slider-prev'),
		slideControlNext = slider.querySelector('.offer__slider-counter .offer__slider-next'),
		sliderImages = slider.querySelectorAll('.offer__slide'),
		sliderWrapper = document.querySelector(sliderWrapperSelector),
		sliderField = document.querySelector(sliderFieldSelector),
		totalSlides = slider.querySelector('#total'),
		currentSlideImg = slider.querySelector('#current'),
		width = window.getComputedStyle(sliderWrapper).width

	//Css style
	slider.style.position = 'relative'
	sliderField.style.width = 100 * sliderImages.length + '%'
	sliderField.style.display = 'flex'
	sliderField.style.transition = '0.5s all'
	sliderWrapper.style.overflow = 'hidden'

	const sliderDotsList = document.createElement('ol'),
		dots = []
	sliderDotsList.classList.add('carousel-indicators')
	slider.insertAdjacentElement('beforeend', sliderDotsList)


	sliderImages.forEach((slide,i) => {
		slide.style.width = width
		createSliderDot(i)
	})

	dots.forEach(dot=>{
		dot.addEventListener('click', e=>{
			slideIndex = +e.target.getAttribute('data-slide-to')
			offset = +width.slice(0, width.length - 2) * slideIndex
			sliderField.style.transform = `translateX(-${offset}px)`
		})
	})

	slider.addEventListener('click', e => {
		//Next
		if (e.currentTarget && e.target === slideControlNext) {
			//Move image
			offset === +width.slice(0, width.length - 2) * (sliderImages.length - 1)
				? offset = 0
				: offset += +width.slice(0, width.length - 2)

			//Change slide index
			slideIndex === sliderImages.length - 1? slideIndex = 0 :	slideIndex++
		}
		//Prev
		if (e.currentTarget && e.target === slideControlPrev) {
			//Move image
			offset === 0
				?	offset = +width.slice(0, width.length - 2) * (sliderImages.length - 1)
				: offset -= +width.slice(0, width.length - 2)

			//Change slide index
			!slideIndex ?	slideIndex = sliderImages.length - 1 : slideIndex--
		}
		dots.forEach(dot=>dot.style.opacity = '0.5')
		dots[slideIndex].style.opacity = '1'
		sliderField.style.transform = `translateX(-${offset}px)`
		showCurrentSlide()
	})

	showCurrentSlide()

	function showCurrentSlide() {
		if (sliderImages.length < 10) {
			totalSlides.textContent = `0${sliderImages.length}`
		} else {
			totalSlides.textContent = sliderImages.length
		}
		currentSlideImg.textContent = getZero((slideIndex+1))
		function getZero(num) {
			return num < 10 ? `0${num}` : num
		}
	}

	function createSliderDot(dotIndex) {
		const dot = document.createElement('li')
		dot.setAttribute('data-slide-to', dotIndex)
		dot.classList.add('dot')
		sliderDotsList.insertAdjacentElement('beforeend', dot)
		if (dotIndex === 0) {
			dot.style.opacity = '1'
		}
		dots.push(dot)
	}
}

/* harmony default export */ __webpack_exports__["default"] = (sliderV2);


/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsSelector,tabsContentSelector, tabsParentSelector, activeClass){
	const tabs = document.querySelectorAll(tabsSelector),
		tabsContent = document.querySelectorAll(tabsContentSelector),
		tabsWrap = document.querySelector(tabsParentSelector);

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})
		tabs.forEach(item => {
			item.classList.remove(activeClass)
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add(activeClass)
	}

	tabsWrap.addEventListener('click', e => {
		const target = e.target
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((tab, i) => {
				if (target === tab) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})

	hideTabContent()
	showTabContent()
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);


/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(selector, deadline_Y_m_d){
	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000*60*60*24)),
			hours = Math.floor((t / (1000*60*60)) % 24),
			minutes = Math.floor((t / (1000*60)) % 60),
			seconds = Math.floor((t / (1000))%60)
		return {
			total : t,
			days,
			hours,
			minutes,
			seconds
		}
	}

	function setTime(selector, endtime) {
		let timeInterval = setInterval(updateClock,1000)
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds')
		function updateClock() {
			const t = getTimeRemaining(endtime)
			days.textContent = getZero(t.days)
			hours.textContent = getZero(t.hours)
			minutes.textContent = getZero(t.minutes)
			seconds.textContent = getZero(t.seconds)
			if (t.total <= 0 ){
				clearInterval(timeInterval)
			}
		}

		function getZero(num){
			return num<10 ? `0${num}` : num
		}
		updateClock()
	}
	setTime(selector, deadline_Y_m_d)
}

/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url,data) =>{
	let res = await fetch(url,{
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: data,
	})
	return  await res.json()
}

const getResource = async (url) =>{
	const res = await fetch(url)
	if (!res.ok){
		new Error(`Could not fetch ${url}, status ${res.status} `)
	}
	return await  res.json()
}




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map