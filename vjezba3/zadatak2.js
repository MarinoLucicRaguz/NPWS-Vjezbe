const niz = [17, 34, 3, 12, 23];
function funkcijaIteratora(niz)
{
    let index = 0;
    return {
        next: function(){
            if (index < niz.length)
                return [niz[index],index++];
            else {
                return null;
            }
        }
    }
}

const iterator = funkcijaIteratora(niz);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());