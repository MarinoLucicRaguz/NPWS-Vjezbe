const nizBrojeva = [17,34,3,12,23]

function funkcijaIteratora(niz)
{
    let index = 0;
    return {
        next: function(){
            if (index < niz.length)
                return {value: niz[index++], done: false};
            else {
                return {done: true};
            }
        }
    }
}

const iterator = funkcijaIteratora(nizBrojeva);

let result
while ((result = iterator.next()).done === false)
{
    console.log(result)
}