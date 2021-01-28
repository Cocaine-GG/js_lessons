function openModal(modalSelector,modalTimerId) {
	const modalWindow = document.querySelector(modalSelector)
	modalWindow.style.display = 'block'
	modalWindow.classList.add('fade')
	document.body.style.overflow = 'hidden'
	if (modalTimerId){
		clearInterval(modalTimerId)
	}
}

function closeModal(modalSelector) {
	const modalWindow = document.querySelector(modalSelector)
	modalWindow.style.display = ''
	modalWindow.classList.remove('fade')
	document.body.style.overflow = 'auto'
}

function modal(triggerSelector, modalSelector, modalTimerId){
	const modalBtns = document.querySelectorAll(triggerSelector),
				modalWindow = document.querySelector(modalSelector)

	modalBtns.forEach(btn => {
		btn.addEventListener('click', ()=> openModal(modalSelector,modalTimerId))
	})

	modalWindow.addEventListener('click', e => {
		if (e.target === modalWindow || e.target.classList.contains('modal__close')) {
			closeModal(modalSelector)
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.style.display !== '') {
			closeModal(modalSelector)
		}
	})

	window.addEventListener('scroll', showModalByScroll)

	function showModalByScroll() {
		if (window.pageYOffset+document.documentElement.clientHeight >= document.documentElement.scrollHeight){
			openModal(modalSelector,modalTimerId)
			window.removeEventListener('scroll', showModalByScroll)
		}
	}
}

export default modal
export {openModal, closeModal}
