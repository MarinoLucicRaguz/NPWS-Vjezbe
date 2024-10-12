function zbrajanje(br1) {
  return br1 + br1;
}

function mnozenje(br1) {
  return br1 * br1;
}

function komutitativnost(vrijednost, cb1, cb2) {
  return cb2(cb1(vrijednost)) === cb1(cb2(vrijednost));
}

console.log(komutitativnost(2, zbrajanje, mnozenje));
