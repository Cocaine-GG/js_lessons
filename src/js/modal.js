const modalBtns = document.querySelectorAll('[data-modal]'),
			modalWindow = document.querySelector('.modal')
			showModalTimer = setTimeout(openModal, 60000)

modalBtns.forEach(btn => {
	btn.addEventListener('click', openModal)
})

modalWindow.addEventListener('click', e => {
	if (e.target == modalWindow || e.target.classList.contains('modal__close')) {
		closeModal()
	}
})

document.addEventListener('keydown', (e) => {
	if (e.code == 'Escape' && modalWindow.style.display != '') {
		closeModal()
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

function closeModal() {
	modalWindow.style.display = ''
	modalWindow.classList.remove('fade')
	document.body.style.overflow = 'auto'
}

//Form JS

const forms = document.querySelectorAll('form'),
	URL = 'server.php'
const message = {
	loading : 'Загрузка...',
	success : 'Спасибо! Скоро мы с вами свяжемся',
	failure : 'Что-то пошло не так...',
}

forms.forEach(form=>{
	postData(form)
})


function postData (form){
	form.addEventListener('submit', (e)=>{
		e.preventDefault()

		const statusMessage = document.createElement('div')
		statusMessage.classList.add('status')
		statusMessage.textContent = message.loading
		form.insertAdjacentElement('afterend', statusMessage)

		const request = new XMLHttpRequest()

		request.open('POST',URL)
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8')

		const formData = new FormData(form), obj = {}
		formData.forEach((value, key)=>{
			obj[key] = value
		})
		const json = JSON.stringify(obj)

		request.send(json)
		request.addEventListener('load',()=>{
			if (request.status === 200){
				console.log(request.response)
				showThankModal(message.success)
				form.reset()
				statusMessage.remove()
			}else {
				console.log(message.failure)
				showThankModal(message.failure)
			}
		})
	})
}

function showThankModal (message){
	const prevModalDialog = document.querySelector('.modal__dialog')
	prevModalDialog.classList.add('hide')

	openModal()

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
		closeModal(modalWindow)
	},4000)
}
