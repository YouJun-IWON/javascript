const hello = () => {
  console.log('Hello'); // Hello
};
const timeout = setTimeout(hello, 2000);

// 2초 마다 실행함 => clearInterval 로 없앨 수 있음
const timeout1 = setInterval(hello, 2000);

clearTimeout(timeout); // 실행되지 않게함

setTimeout(() => {
  console.log('Hello'); // Hello
}, 2000);

// 클릭을 하면 작동될 수 있도록 한다.
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  console.log('Clear!');
  clearTimeout(timeout);
});
