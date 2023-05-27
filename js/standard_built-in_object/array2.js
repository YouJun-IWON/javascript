//? .find()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환한다.

const arr = [5, 8, 130, 12, 44];
const foundItem = arr.find((item) => item > 10);

console.log(foundItem); // 130

const users = [
  { name: 'neo', age: 85 },
  {
    name: 'amy',
    age: 22,
  },
];

const foundUser = users.find((user) => user.name === 'amy');
console.log(foundUser); // { name: 'amy', age: 22 }

//? .findIndex()
// 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱스를 반환한다.

const index = arr.findIndex((item) => item > 10);
console.log(index); // 2

//? .flat()
// 대상 배열의 모든 하위 배열을 지정한 깊이까지 이어붙인 새로운 배열을 생성한다.
// 깊이의 기본값은 '1' 이다.

const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); // [ 1, 2, 3, 4 ]

const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr2.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]

//? forEach()
// 대상 배열의 길이만큼 주어진 콜백을 실행한다.
// 반복문을 종료할 필요가 없을 떄 사용 => 중간에 종료할 필요가 있을 시 for if 문 사용

const arr3 = ['a', 'b', 'c'];

arr3.forEach((item) => console.log(item));
// a
// b
// c

//? .includes()
// 대상 배열이 특정 요소를 포함하고 있는지 확인

const arr4 = [1, 2, 3];
console.log(arr.includes(7)); // false

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('Banana')); // false

console.log(users.includes({ name: 'neo', age: 85 })); // false

const neo = users[0];
console.log(users.includes(neo)); // true

//! 위와 같이 동작하는 이유
// 참조형 데이터 => 객체, 배열, 함수
// 참조형은 할당된 변수(메모리 주소)를 참조해야 한다. 그렇지 않으면 그 데이터가 다를 수 있다.
