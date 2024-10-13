movies = [
  { id: 1, title: "Pan's Labyrinth", score: 9 },
  { id: 37, title: "Gentelman", score: 6 },
  { id: 11, title: "Batman", score: 5 },
  { id: 44, title: "Birds of Pray", score: 1 },
];

function movieSelector(filmovi) {
  return filmovi
    .filter((film) => film.score > 5)
    .map((film) => film.title.toUpperCase());
}

console.log(movieSelector(movies));
