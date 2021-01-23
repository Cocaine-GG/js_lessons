const modalBtns = document.querySelectorAll('[data-modal]'),
			modalWindow = document.querySelector('.modal'),
			modalCloseBtn = modalWindow.querySelector('[data-close]')

let showModalTimer = setTimeout(openModal, 15000)

modalBtns.forEach(btn => {
	btn.addEventListener('click', openModal)
})

modalWindow.addEventListener('click', e => {
	if (e.target == modalWindow || e.target == modalCloseBtn) {
		closeModal(modalWindow)
	}
})

document.addEventListener('keydown', (e) => {
	if (e.code == 'Escape' && modalWindow.style.display != '') {
		closeModal(modalWindow)
	}
})

window.addEventListener('scroll', showModalByScroll)

function showModalByScroll() {
	if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight){
		openModal()
	}
}

function openModal() {
	modalWindow.style.display = 'block'
	modalWindow.classList.add('fade')
	document.body.style.overflow = 'hidden'
	clearInterval(showModalTimer)
	window.removeEventListener('scroll', showModalByScroll)
}

function closeModal(modal) {
	modal.style.display = ''
	modal.classList.remove('fade')
	document.body.style.overflow = 'auto'
}
