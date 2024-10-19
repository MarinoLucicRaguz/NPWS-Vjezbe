const fakePeople = [
  { name: "Ivo", hasPets: false },
  { name: "Eva", hasPets: true },
  { name: "Marko", hasPets: true },
];

function fakeAPICall(i) {
  return new Promise((resolve, reject) => {
    if (i >= fakePeople.length) {
      reject("Invalid index! No data available for this index.");
    } else {
      const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;

      setTimeout(() => {
        resolve(fakePeople[i]);
      }, delay);
    }
  });
}

function getAllData() {
  const indexes = [0, 1, 2];
  const promises = indexes.map((index) => fakeAPICall(index));

  Promise.all(promises)
    .then((results) => {
      console.log("All data received:");
      console.log(results);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

getAllData();
