function* generatorrazgovora(rijeci) {
    for (const word of rijeci) {
        yield word === "generator" ? "hej" : "besmislica";
    }
}

function simulacijaRazgovora(rijeci) {
    const iterator = generatorrazgovora(rijeci);
    let intervalId = setInterval(() => {
        const result = iterator.next();
        
        if (result.done) {
            clearInterval(intervalId);
        } else {
            console.log(result.value);       
         }
    }, 3000);
}

const wordsArray = ["generator", "hello", "world", "generator", "foo"];
simulacijaRazgovora(wordsArray);
