'use strict'
const movieDB = {
	movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...']
}
let moviesList = document.querySelector('.promo__interactive-list'),
  adv = document.querySelectorAll('.promo__adv img'),
  genre = document.querySelector('.promo__genre'),
  bgImg = document.querySelector('.promo__bg'),
  addMovieInput = document.querySelector('.adding__input'),
  addMovieBtn = document.querySelector('button'),
  checkedMovie = document.querySelector('input[type=checkbox]')

const removeAdv = (el) => { // Removed ads
  el.forEach(el => el.remove())
}
const makeChanges = (genre, bg) => { // Changed text
  genre.textContent = 'драма'
  bg.style.backgroundImage = `url('img/bg.jpg')`
}

removeAdv(adv)
makeChanges(genre,bgImg)
renderMovieList(movieDB.movies, moviesList)

addMovieBtn.addEventListener('click', function (e) {
	e.preventDefault()
	addNewMovie(addMovieInput.value)
	renderMovieList(movieDB.movies,moviesList)
	addMovieInput.value = ''
})

function renderMovieList(movies,parent) {
  parent.innerHTML = ''
  movies = movies.map(el=>el.toUpperCase()).sort() //Sort array ASC
  movies.forEach((item, i) => {
    parent.innerHTML += `
      <li class="promo__interactive-item" data-movieid="${i}">${i + 1}. ${item.toUpperCase()}
        <div class="delete"></div>
      </li>
    `})
  document.querySelectorAll('.promo__interactive-item .delete').forEach((btn,i) => {
    btn.addEventListener('click', function (){
      btn.parentElement.remove()
      movies.splice(i,1)
      renderMovieList(movies,parent)
    })
  })
}

function addNewMovie(el) {
	if (el != null && el !== '') {
	  if (el.length > 21){
      el = el.split('').splice(0, 21).join('') + '...'
    }
    if (checkedMovie.checked) {
      console.log('Добавляем любимый фильм')
    }
		movieDB.movies.push(el)
	}
}
