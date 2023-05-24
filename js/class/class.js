class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const youjun = new User('you', 'jun');
const neo = new User('neo', 'anderson');

console.log(youjun.getFullName()); // you jun
console.log(neo.getFullName()); // neo anderson
