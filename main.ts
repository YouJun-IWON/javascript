import _ from 'lodash';

console.log(_.upperCase('hello-world'));
// HELLO WORLD

interface User {
  name: String;
  age: number;
}

const user: User = {
  name: 'youjun',
  age: 25,
};

console.log(user);
// {name: 'youjun', age: 25}
