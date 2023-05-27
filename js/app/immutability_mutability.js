// 불변성 & 가변성

// immutability 는 생성된 데이터가 메모리에서 변경되지 않고
// mutability 는 생성된 데이터가 메모리에서 변경될 수 있음을 의미한다.

// javascrpit 원시형은 불변성을, 참조형은 가변성을 갖고 있다.

// 원시형
let a = 1;
let b = a;

b = 2;

console.log(a); // 1
console.log(b); // 2

// 참조형 => 저장된 메모리 주소가 서로를 참조하고 있기 때문에 계속해서 변화된다.
let c = { x: 1 };
let d = c;

d.x = 2;

console.log(c); // { x: 2 }
console.log(d); // { x: 2 }

c.x = 7;

console.log(c); // { x: 7 }
console.log(d); // { x: 7 }
console.log(c === d); // true

let e = { x: 1 };
let f = { x: 1 };

f.x = 2;

console.log(e); // { x: 1 }
console.log(f); // { x: 2 }

console.log(1 === 1); // true
console.log({} === {}); // false

// 배열도 참조형

let g = [1, 2, 3];
let h = g;

h[0] = 4;

console.log(g); // [ 4, 2, 3 ]
console.log(h); // [ 4, 2, 3 ]
