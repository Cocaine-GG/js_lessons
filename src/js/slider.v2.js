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
	if (dotIndex == 0) {
		dot.style.opacity = '1'
	}
	dots.push(dot)
}
