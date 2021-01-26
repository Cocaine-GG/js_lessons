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

const forms = document.querySelectorAll('form')
const message = {
	loading : 'Загрузка...',
	success : 'Спасибо! Скоро мы с вами свяжемся',
	failure : 'Что-то пошло не так...',
}

forms.forEach(form=>{
	bindPostData(form)
})

const postData = async (url,data) =>{
	let res = await fetch(url,{
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: data,
	})

	return  await res.json()
}

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
