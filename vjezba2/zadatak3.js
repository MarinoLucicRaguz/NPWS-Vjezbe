const niz = [17, 34, 3, 12, 23];

function numSelectString(nizBrojeva) {
  return nizBrojeva
    .filter((broj) => broj % 2 != 0)
    .sort((a, b) => a - b)
    .reduce((string, value, arr) => {
      if (arr === 0) {
        return `${value}`;
      } else {
        return `${string},${value}`;
      }
    });
}

console.log(numSelectString(niz));
