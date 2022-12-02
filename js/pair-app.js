const form = document.querySelector('form')
const input = document.querySelector('.input');
const button = document.querySelector('.btn-start');
let cardList = document.querySelector('.card__list');
const restart = document.querySelector('.btn-restart');
let allCards;

let arr = [];
let checkArr = [];
let doneCard = [];


//определяет состояние кнопки "start" активное/неактивное
input.addEventListener('input', function () {
  if (input.value !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

//старт игры после склика по кнопке "Начать игру!"
form.addEventListener('submit', function (e) {
  e.preventDefault(); //откл автоматического обновления стр после submit

  if (allCards !== undefined) {
    arr = [];
    doneCard = [];
    for (i = 0; i < allCards.length; i++) {
      cardList.removeChild(allCards[i]);
    }
  }

  createGame(cardList); //вызов функции createGame

  restart.addEventListener('click', function () {
    arr = [];
    doneCard = [];
    for (i = 0; i < allCards.length; i++) {
      cardList.removeChild(allCards[i]);
    }
    restart.style.display = 'none';
    createGame(cardList);
  })

  //input.value = ''; //обнуление поля input
  button.disabled = true; // сброс состояния кнопки
});



