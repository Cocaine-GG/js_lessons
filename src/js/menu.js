class MenuCard {
	constructor(imgSrc, alt, title, desc, price, parentSelector, ...classes) {
		this.imgSrc = imgSrc
		this.alt = alt
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

new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 8.5, '.menu__field .container', 'menu__item').render()

new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню "Премиум"', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 20.4, '.menu__field .container', 'menu__item').render()

new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 15.95, '.menu__field .container', 'menu__item').render()
