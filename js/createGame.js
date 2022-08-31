function createGame(e) {
  for (let i = 1; i <= input.value; i++) {
    if (i <= input.value) {
      arr.push(i);
      arr.push(i);
    }
  };

  shuffle(arr); //вызов функции shuffle. перемешивает карточки

  for (i = 0; i < arr.length; i++) {
    newCard(arr[i]);
  };
}
