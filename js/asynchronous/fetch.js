// fetch(주소, 옵션)
// 네트워크를 통해 리소스의 요청 및 응답을 처리할 수 있다.
// Promise 인스턴스를 반환한다.

console.log(fetch('https://www.omdapi.com/?apikey=7035c60c&s=avengers'));
//   .then((res) => console.log(res.json()));

const res = await fetch('https://www.omdapi.com/?apikey=7035c60c&s=avengers');

const wrap = async () => {
  const res = await fetch('https://www.omdapi.com/?apikey=7035c60c&s=avengers');
  const json = await res.json();
  console.log(json);
};

wrap();

// defalut 값은 get 이다.
fetch('https://www.omdapi.com/?apikey=7035c60c&s=avengers', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'youjun',
    age: 85,
  }),
});

fetch('https://www.omdapi.com/?apikey=7035c60c&s=avengers', {
  method: 'POST',
});
