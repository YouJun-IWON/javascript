class Youjun {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}

const youjun = new Youjun('you', 'jun');
const lewis = {
  name: 'lewis',
  age: 85,
};

console.log(youjun); // Youjun { firstName: 'you', lastName: 'jun' }
// !console.log(User.getFullName()); // error

console.log(Youjun.isUser(youjun)); // true
// !console.log(youjun.isUser()); // error

console.log(Youjun.isUser(lewis)); // false
