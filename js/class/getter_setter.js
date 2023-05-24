// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.fullName = `${first} ${last}`;
//   }
// }

// const heropy = new User('heropy', 'park');

// console.log(heropy); // User { firstName: 'heropy', lastName: 'park' }

// heropy.firstName = 'Neo';

// console.log(heropy); // User { firstName: 'Neo', lastName: 'park', fullName: 'heropy park' }

// 위와 같은 결과가 나오기 떄문에 아래와 같이 method로 만들어서 진행해야 한다.

// class User {
//   constructor(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

//! getter, setter

// get / set 을 사용하여 함수를 속성처럼 사용할 수 있다.

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    console.log(value);
    [this.firstName, this.lastName] = value.split(' ');
  }
}

const heropy = new User('heropy', 'park');

console.log(heropy.fullName); // heropy park

heropy.firstName = 'Neo';

console.log(heropy.fullName); // Neo park

heropy.fullName = 'Neo Anderson'; // Neo Anderson

console.log(heropy); // User { firstName: 'Neo', lastName: 'Anderson' }
