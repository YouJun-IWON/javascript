'../../image/Screenshot 2023-05-27 at 4.14.18 PM.png';

setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);

//2
//1

// 위와 같은 결과가 나오는 이유
// setTimeout은 web API 이기 때문에 task queue를 거쳐 event loop가 실행되게 된다.
// 이때 task queue는 js call stack이 비워져 있을 때 event loop를 실행시키는 만큼
// 바로 js call stack에서 실행될 수 있는 console.log(2)가 실행되고 console.log(1)이 실행되는 것이다.

//----------//

// function a() {
//   console.log('A');
//   function b() {
//     console.log('B');
//   }
//   b();
// }

// function c() {
//   console.log('C');
// }

// function first() {
//   a();
//   c();
// }

// function second() {
//   c();
// }

// first();
// second();

// A
// B
// C
// C

//----------//
function a() {
  console.log('A');
  function b() {
    setTimeout(() => {
      console.log('B1');
      console.log('B2');
    });
  }
  b();
}

function c() {
  console.log('C');
}

function first() {
  a();
  c();
}

function second() {
  c();
}

first();
second();

// A
// C
// C
// B1
// B2
