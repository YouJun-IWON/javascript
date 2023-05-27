const getMovies = (movieName) => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.omdapi.com/?apikey=7035c60c&s=${movieName}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.Response === 'False') {
          reject(json.Error);
        }
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

let loading = true;

getMovies('avengers')
  .then((movies) => console.log('영화목록:', movies))
  .catch((error) => console.log('에러 발생:', error))
  .finally(() => (loading = false));

// async/await
const wrap = async () => {
  try {
    const movies = await getMovies('avengers');
    console.log('영화 목록:', movies);
  } catch (error) {
    (error) => console.log('에러 발생:', error);
  } finally {
    loading = false;
  }
};

wrap();
