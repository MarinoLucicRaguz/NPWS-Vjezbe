function callback() {
  console.log("izvrsena callback funkcija");
}

function after(brPon, callback) {
  let brojac = brPon;
  return function () {
    console.log(brojac);
    brojac--;
    if (brojac <= 0) return callback();
  };
}

const funkcija = after(3, callback);

funkcija();
funkcija();
funkcija();
