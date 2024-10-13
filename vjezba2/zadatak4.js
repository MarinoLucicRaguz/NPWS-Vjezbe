const niz = [1, 2, 3, 4, 5];

function suma(niz) {
  //   return niz.reduce((vrijednost, value) => {
  //     return vrijednost + value;
  //   });
  let suma = 0;
  for (var broj of niz) {
    suma += broj;
  }
  return suma;
}

console.log(suma(niz));
