function russianRoulette(n) {
  let brojPon = 0;
  return function () {
    brojPon++;
    if (brojPon < n) return "click";
    else if (brojPon === n) {
      return "bang!";
    } else {
      return "reload to play again";
    }
  };
}

const funkcija = russianRoulette(4);

console.log(funkcija());
console.log(funkcija());
console.log(funkcija());
console.log(funkcija());
console.log(funkcija());
console.log(funkcija());
