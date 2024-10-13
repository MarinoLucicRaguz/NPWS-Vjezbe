const mojPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 1000);
});

function isprintajPoruku(poruka) {
  console.log(poruka);
}

mojPromise.then(isprintajPoruku);
