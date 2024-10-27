
function iteratorfunkcija(string)
{
    const rijeci = string.split(' ');
    let index = 0;

    return {
        next: function() {
            if (index < rijeci.length)
                return { value: rijeci[index++], done: false};
            else{
                return { done: true};
            }
        }
    }
}

const recenica = "Ovo je test funkcije."
const iterator = iteratorfunkcija(recenica);

let result;
while ((result = iterator.next()).done === false)
{
    console.log(result.value)
}