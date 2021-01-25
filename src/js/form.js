// //Form JS
//
// const forms = document.querySelectorAll('form')
// const message = {
// 	loading : 'Загрузка...',
// 	success : 'Спасибо! Скоро мы с вами свяжемся',
// 	failure : 'Что-то пошло не так...',
// }
//
// forms.forEach(form=>{
// 	postData(form)
// })
//
//
// function postData(form) {
// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault()
//
// 		const statusMessage = document.createElement('div')
// 		statusMessage.classList.add('status')
// 		statusMessage.textContent = message.loading
// 		form.insertAdjacentElement('afterend', statusMessage)
//
// 		const formData = new FormData(form),
// 			obj = {}
//
// 		formData.forEach((value, key) => obj[key] = value)
//
// 		fetch('server.php', {
// 			method: 'POST',
// 			body: JSON.stringify(obj),
// 			headers: {
// 				'Content-type': 'application/json'
// 			}
// 		}).then(data=>data.json())
// 			 .then(data => {
// 			console.log(data)
// 			showThankModal(message.success)
// 			form.reset()
// 			statusMessage.remove()
// 		}).catch(() => {
// 			console.log(message.failure)
// 			showThankModal(message.failure)
// 		}).finally(() => form.reset())
// 	})
// }
//
// function showThankModal (message){
// 	const prevModalDialog = document.querySelector('.modal__dialog')
// 	prevModalDialog.classList.add('hide')
// 	openModal()
//
// 	const thankModal = document.createElement('div')
// 	thankModal.classList.add('modal__dialog')
// 	thankModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
// 	`
// 	document.querySelector('.modal').append(thankModal)
// 	setTimeout(() => {
// 		thankModal.remove()
// 		prevModalDialog.classList.add('show')
// 		prevModalDialog.classList.remove('hide')
// 		closeModal(modalWindow)
// 	}, 4000)
// }
