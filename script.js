'use strict';
const personalMovieDB = {
  count : 0,
  movies : {},
  actors : {},
  genres: [],
  privat : false,
  start() {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    while (this.count == '' || this.count == null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    }
  },
  rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
      let a = prompt(`Один из последних просмотренных фильмов?`, ''),
        b = prompt('На сколько оцените его?', '')
      a != null && a !== '' && a.length < 50 && b != null && b !== '' ? this.movies[a] = b : i--
    }
  },
  detectPersonalLevel() {
    this.count < 10 ? alert('Просмотренно довольно мало фильмов') :
      this.count > 10 && this.count < 30 ? alert('Вы классический зритель') :
        this.count > 30 ? alert('Вы киноман') : alert('Произошла ошибка')
  },
  writeYourGenres() {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i+1}`)
      genre !== '' && genre != null ? this.genres.push(genre) : i--
    }
    this.genres.forEach((val,i)=>console.log(`Любимый жанр ${i+1} - это ${val}`))
  },
  showMyDB() {
    if (!this.privat) {
      console.log(this)
    }
  },
  toggleVisibleMyDB() {
    this.privat = !this.privat
    return this.privat
  }
}

personalMovieDB.start()
personalMovieDB.detectPersonalLevel()
personalMovieDB.rememberMyFilm()
personalMovieDB.writeYourGenres()
personalMovieDB.showMyDB()
