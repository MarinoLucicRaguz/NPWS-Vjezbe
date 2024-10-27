function* generatorfunkcija(string) {
    const words = string.split(' ');
    for (const word of words) {
        yield word;
    }
}

const recenica = "Ovo je primjer generator funkcije";
const iterator = generatorfunkcija(recenica);

let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
