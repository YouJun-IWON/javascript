//? Object.assign()
// 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사하고 대상 객체를 반환한다.

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };
const result = Object.assign(target, source1, source2);
const result1 = {
  ...target,
  ...source1,
  ...source2,
};

console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
console.log(result); // { a: 1, b: 3, c: 5, d: 6 }
console.log(result1); // { a: 1, b: 3, c: 5, d: 6 }

//? Object.entries()
// 주어진 객체의 각 속성과 값으로 하나의 배열을 만들어 요소로 추가한 2차원 배열을 반환한다.

const user = {
  name: 'youjun',
  age: 85,
  isValid: true,
  email: 'wefwe@gmail.com',
};

console.log(Object.entries(user));
// [
//     [ 'name', 'youjun' ],
//     [ 'age', 85 ],
//     [ 'isValid', true ],
//     [ 'email', 'wefwe@gmail.com' ]
//   ]

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
// name youjun
// age 85
// isValid true
// email wefwe@gmail.com

//? Object.keys()
// 주어진 객체의 속성 이름을 나열한 배열을 반환한다.

console.log(Object.keys(user)); //[ 'name', 'age', 'isValid', 'email' ]

//? Object.values()
// 주어진 객체의 속성 값을 나열한 배열을 반환한다.
console.log(Object.values(user)); // [ 'youjun', 85, true, 'wefwe@gmail.com' ]
