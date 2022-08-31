//массив Фишера-Йетса
function shuffle(array) {
  let a, temp;
  for (let i = array.length - 1; i > 0; i--) {
    a = Math.floor(Math.random() * (i + 1));
    temp = array[a];
    array[a] = array[i];
    array[i] = temp;
  }
  return;
}
