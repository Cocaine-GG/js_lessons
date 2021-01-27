let slideIndex = 0, offset = 0
const slider = document.querySelector('.offer__slider'),
		slideControlPrev = slider.querySelector('.offer__slider-counter .offer__slider-prev'),
		slideControlNext = slider.querySelector('.offer__slider-counter .offer__slider-next'),
		sliderImages = slider.querySelectorAll('.offer__slide'),
		sliderWrapper = document.querySelector('.offer__slider-wrapper'),
		sliderField = document.querySelector('.offer__slider-inner'),
		totalSlides = slider.querySelector('#total'),
		currentSlideImg = slider.querySelector('#current'),
		width = window.getComputedStyle(sliderWrapper).width

sliderField.style.width = 100 * sliderImages.length + '%'
sliderField.style.display = 'flex'
sliderField.style.transition = '0.5s all'
sliderWrapper.style.overflow = 'hidden'

sliderImages.forEach(slide => {
	slide.style.width = width
})

slider.addEventListener('click', e => {
	//Next
	if (e.currentTarget && e.target === slideControlNext) {
		if (offset === +width.slice(0, width.length - 2) * (sliderImages.length - 1)) {
			offset = 0
		} else {
			offset += +width.slice(0, width.length - 2)
		}
		if (slideIndex === sliderImages.length - 1) {
			slideIndex = 0
		} else {
			slideIndex++
		}
	}
	//Prev
	if (e.currentTarget && e.target === slideControlPrev) {
		if (offset === 0) {
			offset = +width.slice(0, width.length - 2) * (sliderImages.length - 1)
		} else {
			offset -= +width.slice(0, width.length - 2)
		}

		if (!slideIndex) {
			slideIndex = sliderImages.length - 1
		} else {
			slideIndex--
		}
	}
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
	currentSlideImg.textContent = getZero(slideIndex + 1)

	function getZero(num) {
		return num < 10 ? `0${num}` : num
	}
}
