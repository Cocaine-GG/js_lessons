import {closeModal, openModal} from './modal'
import {postData} from '../services/services'

function forms(formSelector, modalTimerId) {

	const forms = document.querySelectorAll(formSelector)
	const message = {
		loading : 'Загрузка...',
		success : 'Спасибо! Скоро мы с вами свяжемся',
		failure : 'Что-то пошло не так...',
	}

	forms.forEach(form=>{
		bindPostData(form)
	})

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault()

			const statusMessage = document.createElement('div')
			statusMessage.classList.add('status')
			statusMessage.textContent = message.loading
			form.insertAdjacentElement('afterend', statusMessage)

			const formData = new FormData(form),
				json = JSON.stringify(Object.fromEntries(formData.entries()))

			postData('http://localhost:3000/requests',json)
			.then(data => {
				console.log(data)
				showThankModal(message.success)
				statusMessage.remove()
			})
			 .catch(() => {
				console.log(message.failure)
				showThankModal(message.failure)
			})
			 .finally(() => form.reset())
		})
	}

	function showThankModal (message){
		const prevModalDialog = document.querySelector('.modal__dialog')
		prevModalDialog.classList.add('hide')

		openModal('.modal',modalTimerId)

		const thankModal = document.createElement('div')
		thankModal.classList.add('modal__dialog')
		thankModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
	`
		document.querySelector('.modal').append(thankModal)
		setTimeout(()=>{
			thankModal.remove()
			prevModalDialog.classList.add('show')
			prevModalDialog.classList.remove('hide')
			closeModal('.modal')
		},4000)
	}
}

export default forms
