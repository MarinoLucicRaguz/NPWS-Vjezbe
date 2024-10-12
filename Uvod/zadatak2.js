let niz = [true, false, true, true, false, false, true, false];

function isTrue(element) {
  return element === true;
}

function prioritiziraj(niz, callback) {
  let noviNiz = [];
  for (let element of niz) {
    callback(element) ? noviNiz.unshift(element) : noviNiz.push(element);
  }

  return noviNiz;
}

console.log(prioritiziraj(niz, isTrue));
