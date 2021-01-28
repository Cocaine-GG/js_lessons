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

export default tabs
