const niz = [17, 34, 3, 12, 23];

function funkcija(niz) {
  let n = 0;
  return function () {
    console.log(`${niz[n]} je ${n + 1}-ti element niza `);
    n++;
  };
}

const poziv = funkcija(niz);

poziv();
poziv();
poziv();
