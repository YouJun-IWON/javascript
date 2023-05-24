const user = {
  name: 'you',
  age: 85,
};

function getName({ name }) {
  return name;
}

console.log(getName(user)); // you

function getEmail({ email = '이메일이 없습니다.' }) {
  return email;
}

console.log(getEmail(user)); //이메일이 없습니다.

const fruits = ['apple', 'banana', 'cherry'];

function getSecondItem([a, b, c]) {
  return b;
}

console.log(getSecondItem(fruits)); // banana

function sum(...rest) {
  console.log(rest);
  console.log(arguments);
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// arguments => 유사 배열 => 사실은 객체 데이터이다.

// [ 1, 2 ]
// [Arguments] { '0': 1, '1': 2 }
// 3

// [ 1, 2, 3, 4 ]
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
// 10

// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// [Arguments] {
//   '0': 1,
//   '1': 2,
//   '2': 3,
//   '3': 4,
//   '4': 5,
//   '5': 6,
//   '6': 7,
//   '7': 8,
//   '8': 9,
//   '9': 10
// }
// 55
