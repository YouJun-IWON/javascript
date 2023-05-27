const a = () => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
};
const b = () => console.log(2);

a();
b();

// 숫자 1이 먼저 나오고 2가 나오게 끔 하고 싶을 때

const c = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};

const d = (callback) => {
  setTimeout(() => {
    console.log(2);
    callback();
  }, 1000);
};

const e = () => console.log(3);

// 콜백 지옥이 만들어진다.
c(() => {
  d(() => {
    e();
  });
});

// 콜백 페턴

const getMovies = (movieName, callBack) => {
  fetch(`https://www.wefwef.com/?apikey=${movieName}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      callBack();
    });
};

// 각각 처리하는 양에 따라 결과물은 순서가 다르게 올 수 있다.

getMovies('fronzen', () => {
  console.log('겨울왕국');
});

getMovies('avengers', () => {
  console.log('어벤져스');
});

// 순서를 맞추고 싶다면 (그러나 콜백지옥 발생)

getMovies('fronzen', () => {
  console.log('겨울왕국');
  getMovies('avengers', () => {
    console.log('어벤져스');
  });
});
