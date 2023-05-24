const a = [1, 2, 3];

console.log(...a); // 1 2 3

const b = [4, 5, 6];

const c = a.concat(b);
console.log(c); // [ 1, 2, 3, 4, 5, 6 ]

const d = [a, b];
console.log(d); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

const e = [...a, ...b];
console.log(e); // [ 1, 2, 3, 4, 5, 6 ]

const aa = { x: 1, y: 2 };
const bb = { y: 3, z: 4 };

const cc = Object.assign({}, aa, bb);
console.log(cc); // { x: 1, y: 3, z: 4 }

const dd = { aa, bb };
console.log(dd); // { aa: { x: 1, y: 2 }, bb: { y: 3, z: 4 } }

const ee = { ...aa, ...bb };
console.log(ee); // { x: 1, y: 3, z: 4 }

function fn(x, y, z) {
  console.log(x, y, z);
}

fn(1, 2, 3); // 1 2 3

const aaa = [1, 2, 3];
fn(aaa); // [ 1, 2, 3 ] undefined undefined
fn(...aaa); // 1 2 3
