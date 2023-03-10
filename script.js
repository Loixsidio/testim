/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberofFilms;

function start() {
     numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
     numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
     }
}

start();




const personalMovieDB = {
      count: numberofFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10  && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
  } else {
        alert('Нихуя не вышло, соре');
  }
}
// detectPersonalLevel();

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`, '');
    }
}
writeYourGenres();

function remberMyFilms() {
    for(let i =0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
  
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
              console.log('done');
        } else {
            console.log('error'); 
            i--;
        }
  }
}

// remberMyFilms();

// function showMyDB() {
//     if (personalMovieDB.privat === false)  {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB); 
    }
}
 showMyDB(personalMovieDB.privat);


// Код возьмите из предыдущего домашнего задания