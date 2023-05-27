// 얕은 복사 & 깊은 복사

// 참조형은 가변성으로 인해, 데이터를 복사할 때 주의해야 한다.

// Shallow Copy = 참조형의 1차원 데이터만 복사
// Deep Copy = 참조형의 모든 차원 데이터를 복사

let a = 1;
let b = a;

b = 2;

console.log(b); // 2
console.log(a); // 1

b = 3;

console.log(b); // 3
console.log(a); // 1

// 얕은 복사
const c = { x: 1 };
const d = Object.assign({}, c);
const e = { ...c };

d.x = 2;
e.x = 3;

console.log(c); // { x: 1 }
console.log(d); // { x: 2 }
console.log(e); // { x: 3 }

// 얕은 복사는 아래와 같이 1차원만 가능하다.
const f = { x: { y: 1 } };
const g = { ...f };

g.x.y = 2;

console.log(f); // { x: { y: 2 } }
console.log(g); // { x: { y: 2 } }

// 깊은 복사 => 모든 차원을 복사
import cloneDeep from 'lodash/cloneDeep';

const h = { x: { y: 1 } };
const i = cloneDeep(h);

i.x.y = 2;

console.log(h);
console.log(i);

// array

const j = [1, 2, 3];
const k = j.concat([]);
const l = [...j];

k[0] = 4;
l[0] = 5;

console.log(j); // [1, 2, 3]
console.log(k); // [4, 2, 3]
console.log(l); // [5, 2, 3]

const m = [[1, 2], [3]];
const n = cloneDeep(m);

n[0][0] = 4;

console.log(m); // [[1, 2], [3]]
console.log(n); // [[4, 2], [3]]
