const promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => console.log("Promise has been resolved!"));

console.log("I'm not the promise!");
