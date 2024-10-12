const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function metodazafilter(element) {
  return element % 2 == 0;
}

function filter(niz, cb) {
  let noviNiz = [];
  for (var element in niz) {
    if (cb(element)) noviNiz.push(element);
  }

  return noviNiz;
}

console.log(filter(niz, metodazafilter));
