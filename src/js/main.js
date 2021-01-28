import tabs from './modules/tabs'
import timer from './modules/timer'
import modal, {openModal} from './modules/modal'
import menu from './modules/menu'
import forms from './modules/forms'
// import slider from './modules/slider'
import sliderV2 from './modules/slider.v2'
import calculator from './modules/calculator'

window.addEventListener('DOMContentLoaded', () => {
	const	modalTimerId = setTimeout( () => openModal('.modal',modalTimerId), 60000)


	tabs('.tabheader__item', '.tabcontent', '.tabheader', 'tabheader__item_active')
	timer('.timer', '2021-02-05')
	modal('[data-modal]','.modal',modalTimerId)
	menu()
	forms('form', modalTimerId)
	// slider('.offer__slider')
	sliderV2('.offer__slider','.offer__slider-wrapper','.offer__slider-inner')
	calculator()
})
