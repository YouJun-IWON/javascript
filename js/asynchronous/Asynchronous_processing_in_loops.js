const getMovies = (movieName) => {
  return new Promise((resolve) => {
    fetch(`https://www.omdapi.com/?apikey=7035c60c&s=${movieName}`)
      .then((res) => res.json())
      .then((res) => resolve(res));
  });
};

// 결과의 순서가 무작위다.
const titles = ['frozen', 'avengers', 'avatar'];

titles.forEach(async (title) => {
  const movies = await getMovies(title);
  console.log(title, movies);
});

// 배열 순서에 따라 결과의 순서가 결정된다.
const wrap = async () => {
  for (const title of titles) {
    const movies = await getMovies(title);
    console.log(title, movies);
  }
};

wrap();
