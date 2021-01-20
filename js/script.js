'use strict'

const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против...']
}
document.querySelectorAll('.promo__adv img').forEach(el => el.remove()) // Removed ads
document.querySelector('.promo__genre').textContent = 'драма' // Changed text
document.querySelector('.promo__bg').style.backgroundImage = `url('img/bg.jpg')` // Changed background

let moviesList = document.querySelector('.promo__interactive-list')
moviesList.innerHTML = ''

movieDB.movies.sort().forEach((item, i) => { //Sort array ASC
  moviesList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${item}
          <div class="delete"></div>
        </li>
    `
})
