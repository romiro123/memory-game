function newCard(number) {
  //создание карточки
  const card = document.createElement('li');
  const cardNum = document.createElement('span');

  card.classList.add('card');
  cardNum.classList.add('card__num')
  cardNum.textContent = number;

  //проверка на совпадение двух выбранных карт
  card.addEventListener('click', function (e) {


    checkArr.push(e.currentTarget);
    for (i = 0; i < checkArr.length; i++) {
      if (i <= 1) {
        card.classList.add('open');
        audio1.play()
      };
      if (i == 1) {
        if (checkArr[0].textContent == checkArr[1].textContent) {
          function clear(checkArr) {
            checkArr[0].classList.remove('open');
            checkArr[0].classList.add('done');
            doneCard.push(checkArr[0]);
            checkArr[1].classList.remove('open');
            checkArr[1].classList.add('done');
            doneCard.push(checkArr[1]);
            audio4.play()
            if (finish(arr, doneCard)) {
              conf();
              //меняем у кнопки рестарта свойство "display"
              restart.style.display = 'inline-block';
              audio3.play()
            }
          };
          setTimeout(clear, 300, checkArr);
          checkArr = [];
        } else {
          function clear(checkArr) {
            checkArr[0].classList.remove('open');
            checkArr[1].classList.remove('open');
            audio2.play()
          };
          setTimeout(clear, 500, checkArr);
          checkArr = [];
        };
      };
    };
  });

  //добавление карты и номер в карте в список <ul>
  cardList.append(card);
  card.append(cardNum);

  allCards = document.querySelectorAll('.card'); //список всех карт Nodelist
};
