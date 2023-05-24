for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
for (let i = 0; i < 10; i += 1) {
  if (i > 4) {
    break;
  }
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4

for (let i = 0; i < 10; i += 1) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// 1
// 3
// 5
// 7
// 9

const fruits = ['apple', 'banana', 'cherry'];

for (const a of fruits) {
  console.log(a);
}
// apple
// banana
// cherry

const user = {
  name: 'you',
  age: 85,
  isValid: true,
  email: 'wewe@gmail.com',
};

for (const key in user) {
  console.log(key);
  console.log(user[key]);
}
// name
// you
// age
// 85
// isValid
// true
// email
// wewe@gmail.com
// 객체 데이터는 순서를 갖지 않으므로 순서가 맞지 않을 수도 있다.
