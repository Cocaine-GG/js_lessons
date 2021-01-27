const result = document.querySelector('.calculating__result span')
let sex = 'female', weight, height, age, ratio = 1.375

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
			e.target.getAttribute('data-ratio')
				? ratio = +e.target.getAttribute('data-ratio')
				: sex = e.target.getAttribute('id')

			console.log(ratio,sex)
			elements.forEach(el=>el.classList.remove(activeClass))
			e.target.classList.add(activeClass)
			calcTotal()
		})
	})
}

function getDynamicInfo(selector) {
	const input = document.querySelector(selector)
	input.addEventListener('input', e => {
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
		console.log(height, weight, age)
		calcTotal()
	})
}

getStaticInfo('#gender', 'calculating__choose-item_active')
getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active')
getDynamicInfo('#height')
getDynamicInfo('#weight')
getDynamicInfo('#age')
