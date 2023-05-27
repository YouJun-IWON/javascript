// memory leak
// 더 이상 필요하지 않은 데이터가 해제되지 못하고 메모리를 계속 차지하는 현상

//! 불필요한 전역 변수 사용
window.hello = 'Hello world';

//! 분리된 노드 참조
const btn = document.querySelector('button');
const parent = document.querySelector('.parent');

btn.addEventListener('click', () => {
  console.log(parent); // 삭제되더라도 이 부분이 계속 작동된다. 메모리 주소를 삭제하지는 않았기 때문
  parent.remove();
});

//? 해결방법
const btn1 = document.querySelector('button');
const parent1 = document.querySelector('.parent');

btn.addEventListener('click', () => {
  const parent1 = document.querySelector('.parent');
  console.log(parent1);
  parent1 && parent1.remove(); // error 발생을 없앤다.
});

//! 해제하지 않은 타이머
let a = 0;
setInterval(() => {
  a += 1;
}, 100);

setTimeout(() => {
  console.log(a);
}, 1000);

//? 해결방법
let c = 0;
const interValid = setInterval(() => {
  c += 1;
}, 100);

setTimeout(() => {
  console.log(c);
  clearInterval(interValid);
}, 1000);

//! 잘못된 클로저 사용
const getFn = () => {
  let a = 0;
  return (name) => {
    // a += 1;
    // console.log(a);
    return `Hello ${name}~`;
  };
};

const fn = getFn();
// a의 값이 계속해서 증가한다. a의 값이 필요가 없는데 계속 존재하게 된다.
console.log(fn('youjun'));
console.log(fn('you'));
console.log(fn('jun'));
