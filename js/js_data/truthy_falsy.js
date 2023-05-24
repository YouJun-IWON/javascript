if (0) {
  console.log('참');
}

if ('0') {
  console.log('참'); // 참
}

// 거짓
//  1) false
//  2) 0
//  3) null
//  4) undefined
//  5) NaN
//  6) ''
//  7) 0n

const fruits = ['apple', 'banana'];

if (fruits) {
  console.log('아이템이 들어있음'); // 아이템이 들어있음
}

const fruits1 = [];

if (fruits1.length) {
  console.log('아이템이 들어있음');
}
