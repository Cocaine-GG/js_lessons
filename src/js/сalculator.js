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
	input.addEventListener('input', e => {
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
