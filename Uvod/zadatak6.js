const niz = [1, 2, 3, 4, 5];

function zbroji(akumulator, element) {
  return akumulator + element;
}

function mojaReduce(niz, callback) {
  let akumulator = 0;
  for (let element of niz) {
    akumulator = callback(akumulator, element);
  }

  return akumulator;
}

console.log(mojaReduce(niz, zbroji));
