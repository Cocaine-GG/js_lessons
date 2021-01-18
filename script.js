'use strict';
let numberOfFilms

start ()

const personalMovieDB = {
  count : numberOfFilms,
  movies : {},
  actors : {},
  genres: [],
  privat : false
}

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '')
  }
}

function rememberMyFilm() {
  for (let i = 0; i < 2; i++) {
    let a = prompt(`Один из последних просмотренных фильмов?`, ''),
      b = prompt('На сколько оцените его?', '')
    a != null && a !== '' && a.length < 50 && b != null && b !== '' ? personalMovieDB.movies[a] = b :  i--
  }
}

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов')
  }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    alert('Вы классический зритель')
  }else if (personalMovieDB.count > 30) {
    alert('Вы киноман')
  }else {
    alert('Произошла ошибка')
  }
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i+1}`)
    personalMovieDB.genres.push(genre)
  }
}

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB)
  }
}
detectPersonalLevel()
rememberMyFilm()
writeYourGenres()
showMyDB()
