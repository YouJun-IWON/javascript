//? .length
// 문자의 길이(숫자)를 반환한다.

const str = 'hello world';

console.log(str.length); // 1

//? .includes()
// 해당 문자에 주어진 문자가 포함되어 있는지 (boolean) 확인한다.

console.log(str.includes('hello', 0)); // true
console.log(str.includes('hello', 1)); // false

//? .indexOf()
// 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환한다.
// 일치하는 문자가 없으면 -1 을 반환

console.log(str.indexOf('world')); // 6
console.log(str.indexOf('you')); // -1

//?  .padEnd()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 끝에 붙여 새로운 문자를 반환한다.

const str1 = '1234567';
console.log(str1.padEnd(10, '0')); // 1234567000
console.log(str1); // 1234567

//? .padStart()
// 대상 문자의 길이가 지정된 길이보다 작으면,
// 주어진 문자를 지정된 길이까지 앞에 붙여 새로운 문자를 반환한다.

console.log(str1.padStart(10, '0')); // 0001234567
