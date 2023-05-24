// 일반 함수의 this는 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의
// Lexical : 함수가 동작할 수 있는 유효한 범위

// const user = {
//   firstName: 'you',
//   lastName: 'Park',
//   age: 85,
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName()); // you Park

// const user1 = {
//   firstName: 'you',
//   lastName: 'Park',
//   age: 85,
//   getFullName: () => {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.getFullName()); // error

function user() {
  this.firstName = 'neo'; // property
  this.lastName = 'anderson';
  return {
    firstName: 'you',
    lastName: 'Park',
    age: 85,
    getFullName: () => {
      // method
      return `${this.firstName} ${this.lastName}`;
    },
  };
}

// // member = property + method

const u = user();
console.log(u.getFullName()); // neo anderson

// function user() {
//     this.firstName = 'neo'; // property
//     this.lastName = 'anderson';
//     return {
//       firstName: 'you',
//       lastName: 'Park',
//       age: 85,
//       getFullName() {
//         // method
//         return `${this.firstName} ${this.lastName}`;
//       },
//     };
//   }

// const lewis = {
//   firstName: 'Lewis',
//   lastName: 'Yang',
// };

// const u = user();
// console.log(u.getFullName());
// console.log(u.getFullName.call(lewis)); // Lewis Yang

const timer = {
  title: 'TIMER',
  timeout: function () {
    console.log(this.title); // TIMER
    setTimeout(function () {
      console.log(this.title); // undefined
    }, 1000);
  },
};

timer.timeout();

const timer1 = {
  title: 'TIMER',
  timeout: function () {
    console.log(this.title); // TIMER
    setTimeout(() => {
      console.log(this.title); // TIMER
    }, 1000);
  },
};

timer1.timeout();
