// 비동기 : 순차적으로 실행되는 것이 아님
// 일단 실행시키고 다음으로 넘어감

setTimeout;

fetch('https://www.omdbapi.com/')
  .then((res) => res.json())
  .then((res) => console.log(res));
