// const fruits = ['apple', 'banana', 'cherry']

const fruits = new Array('apple', 'banana', 'cherry');

console.log(fruits); // [ 'apple', 'banana', 'cherry' ]
console.log(fruits.length); // 3
console.log(fruits.includes('banana')); // true

Array.prototype.you = function () {
  console.log(this);
};

fruits.you(); // [ 'apple', 'banana', 'cherry' ]

const arr = [];
arr.you(); // []

// const youjun = {
//   firstName: 'you',
//   lastName: 'jun',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const neo = {
//   firstName: 'Neo',
//   lastName: 'Anderson',
// };

// console.log(youjun.getFullName()); // you jun
// console.log(youjun.getFullName.call(neo)); // Neo Anderson

// 반드시 첫 글자가 대문자여야 한다.
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// 화살표 함수는 쓰면 안된다.
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const heropy = new User('Heropy', 'Park');

console.log(heropy); // User { firstName: 'Heropy', lastName: 'Park' }
console.log(heropy.getFullName()); // Heropy Park
