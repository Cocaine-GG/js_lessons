const tabs = document.querySelectorAll('.tabheader__item'),
	tabsContent = document.querySelectorAll('.tabcontent'),
	tabsWrap = document.querySelector('.tabheader');

function hideTabContent() {
	tabsContent.forEach(item => {
		item.classList.add('hide')
		item.classList.remove('show', 'fade')
	})
	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active')
	})
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('show', 'fade')
	tabsContent[i].classList.remove('hide')
	tabs[i].classList.add('tabheader__item_active')
}

tabsWrap.addEventListener('click', e => {
	const target = e.target
	if (target && target.classList.contains('tabheader__item')) {
		tabs.forEach((tab, i) => {
			if (target == tab) {
				hideTabContent()
				showTabContent(i)
			}
		})
	}
})

hideTabContent()
showTabContent()
