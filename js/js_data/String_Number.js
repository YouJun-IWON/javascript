const string1 = 'Hello';
const string2 = 'Hello';
const string3 = `Hello ${string1}`;

console.log(string3); // Hello Hello

const number = -123;

console.log(number + 1); // -122
console.log(number + undefined); // NAN
console.log(typeof (number + 1)); // -122
console.log(typeof (number + undefined)); // number

const a = 0.1;
const b = 0.2;
console.log(a + b); // 0.30000000000000004
// 부동소수점 오류 : 10진수를 2진수로 바꾸는 작업중에 무한소수가 발생됨
console.log((a + b).toFixed(1)); // 0.3 => 문자 데이터
console.log(typeof (a + b).toFixed(1)); // string
console.log(typeof Number((a + b).toFixed(1))); // number
