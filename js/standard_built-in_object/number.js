//? .toFixed()
// 숫자를 지정된 고정 소수점 표기(자릿수)까지 표현하는 문자로 반환합니다.

const num = 3.1415926535;

console.log(num.toFixed(2)); // 3.14
console.log(parseFloat(num.toFixed(2))); // 3.14 => 숫자가 된다.

// .toLocalString()
// 숫자를 현지 언어 형식의 문자로 반환합니다.

const num1 = 100000;
console.log(num1.toLocaleString()); // 100,000

// Number.isInteger()
// 숫자가 정수인지 확인한다.

const num2 = 123;
const pi = 3.14;

console.log(Number.isInteger(num2)); // true
console.log(Number.isInteger(pi)); // false

// Number.isNaN()
// 주어진 값이 'NaN'인지 확인한다.

const num3 = NaN;
const num4 = 123;
const str = 'hello';
const nul = null;

console.log(Number.isNaN(num3)); // true
console.log(Number.isNaN(num4)); // false
console.log(Number.isNaN(str)); // false
console.log(Number.isNaN(nul)); // false

//? Number.parseInt() 또는 parseInt()
// 주어진 값(숫자, 문자)을 파싱해 특정 진수(radix)의 정수로 반환한다.

const str1 = '3.141592';
const num5 = 3.141592;

console.log(parseInt(str1, 10)); // 3
console.log(parseInt(num, 10)); // 3

//? .Number.parseFloat() 또는 parseFloat()
// 주어진 값(숫자, 문자)을 파싱해 부동소수점 실수로 반환한다.

console.log(parseFloat(str1)); // 3.141592
console.log(parseFloat(num5)); // 3.141592
