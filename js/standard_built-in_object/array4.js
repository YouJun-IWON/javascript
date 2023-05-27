//? .reverse()
// 대상 배열의 순서를 반전한다.
// 대상 배열 원본이 변경된다.

const arr = ['A', 'B', 'C'];
const reversed = arr.reverse();

console.log(reversed); // [ 'C', 'B', 'A' ]
console.log(arr); // [ 'C', 'B', 'A' ]

//? .reverse()
// 대상 배열의 순서를 반전한 새로운 데이터를 반환한다.

//? .shift()
// 대상 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환한다.
// 대상 배열 원본이 변경된다.

console.log(arr.shift()); // C
console.log(arr); // [ 'B', 'A' ]

//? .slice()
// 대상 배열의 일부를 추출해 새로운 배열을 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 배열의 끝까지 추출한다.

const arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(arr1.slice(0, 3)); // [ 'a', 'b', 'c' ]
console.log(arr1.slice(4, -1)); // [ 'e', 'f' ]
console.log(arr1.slice(4)); // [ 'e', 'f', 'g' ]
console.log(arr1);
// [
//     'a', 'b', 'c',
//     'd', 'e', 'f',
//     'g'
//   ]

//? .some()
// 대상 배열의 어떤 요소라도 콜백 테스트를 통과하는지 확인한다.
const arr2 = [1, 2, 3, 4];
const isValid = arr2.some((item) => item > 3);

console.log(isValid); // true

//? sort()
// 대상 배열을 공백의 반환 값에 따라 정렬한다.
// 콜백을 제공하지 않으면, 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 정렬한다.
// 대상 배열 원본이 변경됩니다.

const numbers = [4, 17, 2, 103, 3, 1, 0];

numbers.sort();
console.log(numbers);
// [
//     0, 1, 103, 17,
//     2, 3,   4
//   ]

numbers.sort((a, b) => a - b);
console.log(numbers);
// [
//     0,  1,   2, 3,
//     4, 17, 103
//   ]

numbers.sort((a, b) => b - a);
console.log(numbers);
// [
//     103, 17, 4, 3,
//       2,  1, 0
//   ]

const users = [
  { name: 'neo', age: 85 },
  { name: 'amy', age: 22 },
  { name: 'lewis', age: 11 },
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// [
//     { name: 'lewis', age: 11 },
//     { name: 'amy', age: 22 },
//     { name: 'neo', age: 85 }
//   ]

//? .splice()
// 대상 배열에 요소를 추가하거나 삭제하거나 교체한다.
// 대상 배열 원본이 변경된다.

const arr3 = ['a', 'b', 'c'];
arr3.splice(2, 0, 'x');

console.log(arr3); // [ 'a', 'b', 'x', 'c' ]

arr3.splice(1, 1);
console.log(arr3); // [ 'a', 'x', 'c' ]

//? .unshift()
// 새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환한다.
// 대상 배열 원본이 변경된다.

const arr4 = ['a', 'b', 'c'];

console.log(arr4.unshift('x')); // 4
console.log(arr4); // [ 'x', 'a', 'b', 'c' ]

//? array.from()
// 유사 배열을 실제 벼열로 반환한다.

const arrayLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

console.log(arrayLike.constructor === Array); // false
console.log(arrayLike.constructor === Object); // true

Array.from(arrayLike).forEach((item) => console.log(item));
// a
// b
// c

//? Array.isArray()
// 배열 데이터인지 확인한다.

console.log(Array.isArray(arr)); // true
console.log(Array.isArray(arrayLike)); // false
