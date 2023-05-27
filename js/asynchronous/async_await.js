const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const b = () => console.log(2);

//a().then(() => b());

const wrap = async () => {
  await a();
  b();
};
wrap();

const getMovies = (movieName) => {
  return new Promise((resolve) => {
    fetch(`https://www.wefwef.com/?apikey=${movieName}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        resolve();
      });
  });
};

// await 는 promise instance를 반환하는 함수에만 적용할 수 있다.
const wrap1 = async () => {
  await getMovies('frozen');
  console.log('겨울왕국');
  await getMovies('avengers');
  console.log('어벤져스');
  await getMovies('avatar');
  console.log('아바타');
};

wrap1();
