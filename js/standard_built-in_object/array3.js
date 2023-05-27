//? .join()
// 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다.

const arr = ['apple', 'banana', 'cherry'];

console.log(arr.join()); // apple,banana,cherry
console.log(arr.join(', ')); // apple, banana, cherry
console.log(arr.join('/')); // apple/banana/cherry

//? .map()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환한다.

const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((item) => item * 2);

console.log(newNumbers); // [ 2, 4, 6, 8 ]

const users = [
  { name: 'neo', age: 85 },
  { name: 'amy', age: 22 },
  { name: 'lewis', age: 11 },
];

const newUsers = users.map((user) => {
  return {
    ...user,
    isValid: true,
    email: null,
  };
});

console.log(newUsers);
// [
//     { name: 'neo', age: 85, isValid: true, email: null },
//     { name: 'amy', age: 22, isValid: true, email: null },
//     { name: 'lewis', age: 11, isValid: true, email: null }
//   ]

//? .pop()
// 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
// 대상 배열 원본이 변경된다.

const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.pop()); // cherry
console.log(fruits); // [ 'apple', 'banana' ]

//? .push()
// 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
// 대상 배열 원본이 변경된다.

const newLength = fruits.push('orange');
console.log(newLength); // 3
console.log(fruits); // [ 'apple', 'banana', 'orange' ]

//? .reduce()
// 대상 배열의 길이만큼 주어진 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다.
// 각 콜백의 반환 값은 다음 콜백으로 전달된다.
// 0은 초기값

const numbers1 = [1, 2, 3];

const sum = numbers1.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum); // 6

const totalAge = users.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(totalAge); // 118

const namesArray = users.reduce((acc, cur) => {
  acc.push(cur.name);
  return acc;
}, []);
const names = namesArray.join(', ');
console.log(namesArray); // [ 'neo', 'amy', 'lewis' ]
console.log(names); // neo, amy, lewis
