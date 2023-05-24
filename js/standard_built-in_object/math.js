//? Math.abs()
// 주어진 숫자의 절댓값을 반환한다.

console.log(Math.abs(2)); // 2
console.log(Math.abs(-2)); // 2

//? Math.ceil()
// 주어진 숫자를 올림해 정수를 반환한다.

console.log(Math.ceil(3.14)); // 4

//? Math.floor()
// 주어진 숫자를 내림해 정수를 반환한다.

console.log(Math.floor(3.14)); // 3

//? Math.max()
// 주어진 숫자 중 가장 큰 숫자를 반환한다.

console.log(Math.max(1, 22, 88)); // 88

//? Math.min()

console.log(Math.min(1, 22, 88)); // 1

//? Math.pow()

console.log(Math.pow(4, 2)); // 16
console.log(4 ** 2); // 16

//? Math.random()
// 숫자 0 이상, 1 미만의 난수를 반환한다.

console.log(Math.random()); // 0.6153861937561977

// 특정 범위의 랜덤 정수를 얻는 함수
function random(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(random()); // 4
console.log(random(11, 20)); // 13
console.log(random(101, 999)); // 173

//? Math.round()
// 주어진 숫자를 반올림해 정수를 반환한다.

const num = 3.14;
const num1 = 3.76;

console.log(Math.round(num)); // 3
console.log(Math.round(num1)); // 4
