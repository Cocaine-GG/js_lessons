import {getResource} from '../services/services'

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

	getResource('http://localhost:3000/menu')
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

export default menu
