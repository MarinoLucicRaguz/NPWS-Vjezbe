let niz = [true, false, true, true, false, false, true, false];

const isTrue = (element) => {
  return element === true;
};

function vecina(niz, callbackFunction) {
  var truecount = 0;
  var falsecount = 0;

  for (var element of niz) {
    let value = callbackFunction(element);
    value ? truecount++ : falsecount++;
  }

  return truecount > falsecount;
}

console.log(vecina(niz, isTrue));
