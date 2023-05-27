//? .length
// 배열의 길이(숫자)를 반환한다.

const arr = ['a', 'b', 'c'];

console.log(arr.length); // 3

//? .at()
// 대상 배열을 인덱싱한다.

console.log(arr[0]); // a
console.log(arr.at(0)); // a
console.log(arr.at(-1)); // c

//? .concat()
// 대상 배열과 주어진 배열을 병합해 새로운 배열을 반환한다.

const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log(arr3); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(arr4); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//? .every()
// 대상 배열의 모든 요소가 콜백 테스트에서 참을 반환하는지 확인한다.

const arr5 = [1, 2, 3, 4];
const isValid = arr5.every((item) => item < 5);

console.log(isValid); // true

//? .filter()
// 주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환한다.

const numbers = [1, 20, 7, 9, 104, 0, 58];
const filteredNumbers = numbers.filter((number) => number < 30);

console.log(filteredNumbers); // [ 1, 20, 7, 9, 0 ]

const users = [
  { name: 'neo', age: 85 },
  { name: 'amy', age: 22 },
];

const adults = users.filter((user) => user.age >= 19);
console.log(adults); // [ { name: 'neo', age: 85 }, { name: 'amy', age: 22 } ]
