function blackjack(niz) {
  return function dealer(broj1, broj2) {
    let brojPoziva = 0;
    let n = 0;
    let total = broj1 + broj2;

    return function player() {
      if (brojPoziva === 0) {
        brojPoziva++;
        return total;
      } else if (brojPoziva === 1) {
        total += niz[n];
        brojPoziva++;

        if (total <= 21) {
          n++;
          return total;
        } else {
          return "bust!";
        }
      } else {
        if (n < niz.length) {
          total += niz[n];
          n++;

          if (total > 21) {
            return "bust";
          } else {
            return total;
          }
        } else {
          return "You are done!";
        }
      }
    };
  };
}

const niz = [2, 3, 4, 5];
const dealerFunc = blackjack(niz);

const playerFunc = dealerFunc(5, 7); // Početne karte
console.log(playerFunc()); // 12 (5 + 7)
console.log(playerFunc()); // 14 (12 + 2)
console.log(playerFunc()); // 17 (14 + 3)
console.log(playerFunc()); // 21 (17 + 4)
console.log(playerFunc()); // "bust!" (21 + 5)
console.log(playerFunc()); // "You are done!" (nakon bust stanja)
console.log(playerFunc()); // "You are done!"
