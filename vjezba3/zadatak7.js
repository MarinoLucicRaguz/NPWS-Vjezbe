function spojiRijec(rijec) {
    const jumpRijec = "jumps";
    return `${rijec} ${jumpRijec}`;
}

async function ispisirecenicu(rijec) {
    const recenica = await new Promise((resolve) => {
        setTimeout(() => {
            const result = spojiRijec(rijec);
            resolve(result);
        }, 3000);
    });
    console.log(recenica);
}

const rijec = "The cat";
ispisirecenicu(rijec); 