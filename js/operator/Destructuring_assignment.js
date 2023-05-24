const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); // 1 2 3

const [aa, bb, cc] = arr;

console.log(aa, bb, cc); // 1 2 3

let qq = 0;
let ww = 0;

const arr1 = [1, 2, 3];

[, , ee] = arr;
console.log(ee); // 3

const arr2 = [1, 2, 3];
const [zz, ...rest] = arr2;
console.log(a, rest); // 1 [ 2, 3 ]

//

const obj = {
  a1: 1,
  b1: 2,
  c1: 3,
  x: 7,
  y: 100,
};
// 속성이름으로 데이터를 바로 찾을 수 있다.
const { a1, b1 } = obj;
console.log(a1, b1); // 1 2

const { x = 4, a1: you, y: ten = 10 } = obj;
console.log(x, you, ten); // 7 1 100 => 만약 x 데이터가 없을 경우 4, y 데이터가 없을 경우 100
