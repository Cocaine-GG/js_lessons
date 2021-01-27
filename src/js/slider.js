// let slideIndex = 0
// const slider = document.querySelector('.offer__slider'),
// 			slideControlPrev = slider.querySelector('.offer__slider-counter .offer__slider-prev'),
// 			slideControlNext = slider.querySelector('.offer__slider-counter .offer__slider-next'),
// 			sliderImages = slider.querySelectorAll('.offer__slide')
//
//
// slider.addEventListener('click', e => {
// 	if (e.currentTarget && e.target === slideControlNext) slideIndex++
// 	if (e.currentTarget && e.target === slideControlPrev) slideIndex--
// 	showSlide()
// })
//
// showSlide()
//
// function showSlide() {
// 	if (slideIndex < 0) {
// 		slideIndex = sliderImages.length - 1
// 	} else if (slideIndex > sliderImages.length - 1) {
// 		slideIndex = 0
// 	}
// 	sliderImages.forEach((img, i) => {
// 		if (i === slideIndex) {
// 			img.classList.add('show', 'fade')
// 			img.classList.remove('hide')
// 		} else {
// 			img.classList.add('hide')
// 			img.classList.remove('show', 'fade')
// 		}
// 	})
// 	slider.querySelector('#current').textContent = getZero(slideIndex + 1)
// 	slider.querySelector('#total').textContent = getZero(sliderImages.length)
//
// 	function getZero(num){
// 		return num<10 ? `0${num}` : num
// 	}
// }
