function zbrajanje(br1) {
  return br1 + br1;
}

function kvadriranje(br1) {
  return br1 * br1;
}

function povecavanje(br1) {
  return br1 + 10;
}

function smanjivanje(br1) {
  return br1 / 5;
}

const niz = [zbrajanje, kvadriranje, povecavanje, smanjivanje];

function pipe(niz, vrijednost) {
  return niz.reduce((rezultat, func) => func(rezultat), vrijednost);
}

console.log(pipe(niz, 2));
