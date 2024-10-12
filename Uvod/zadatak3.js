let niz = [1, 2, 3, 4, 5];

function cb(element) {
  return element % 2 == 0;
}

function grupiraj(niz, callback) {
  let rezultat = {};

  for (let element of niz) {
    key = callback(element);
    if (!rezultat[key]) rezultat[key] = [];
    rezultat[key].push(element);
  }

  return rezultat;
}

console.log(grupiraj(niz, cb));
