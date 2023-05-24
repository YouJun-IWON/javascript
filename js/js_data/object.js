const user = new Object();

user.name = 'youjun';
user.age = 85;

console.log(user); // { name: 'youjun', age: 85 }

function User() {
  this.name = 'youjun';
  this.age = 85;
}

const user1 = new User();

console.log(user1); // User { name: 'youjun', age: 85 }

const user2 = {
  name: 'youjun',
  age: 85,
};

const key = 'name';

console.log(user2); // { name: 'youjun', age: 85 }
console.log(user2.name); // youjun
console.log(user['name']); // youjun
console.log(user[key]); // youjun

const userA = {
  name: 'you',
  age: 85,
};

const userB = {
  name: 'jun',
  age: 88,
  parent: userA,
};

console.log(userB); // { name: 'jun', age: 88, parent: { name: 'you', age: 85 } }
console.log(userB.parent.name); // you
console.log(userB['parent']['name']); // you

const users = [userA, userB];
console.log(users[0]['name']); // you
