const mojPromise = new Promise((resolve, reject) => {
  reject("Error");
});

function rejectPrint(poruka) {
  console.log(poruka);
}

mojPromise.catch(rejectPrint);
