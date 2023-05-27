// 정규표현식 (RegExp)

// search
// replace
// extract

//* 생성자
// new RegExp('표현', '옵션')

//* 리터럴
// /표현/옵션

const str = `the the.
The wow amazing the.`;

const regexp = new RegExp('the', 'gi'); // option : 'g' 'gi'
const regexp1 = /the/gi;

console.log(str.match(regexp)); // [ 'the', 'the', 'The', 'the' ]

// 정규식.test(문자열) - 일치 여부 판단
// 문자열.match(정규식) - 일치하는 문자의 배열 반환
// 문자열.replace(정규식, 대체문자) - 일치하는 문자를 대체

const regexp2 = /fox/gi;

console.log(regexp2.test(str)); // false
console.log(str.match(regexp2)); // null
console.log(str.replace(regexp2, 'cat')); // the the The wow amazing the

// g - 모든 문자 일치(global)
// i - 영어 대소문자를 구분 않고 일치(ignore case)
// m - 여러 줄 일치(multi line), 각각의 줄을 시작과 끝으로 인식!

// \ 백슬레시 = escape character : 기호의 본래 기능에서 탈출

console.log(str.match(/the/));
console.log(str.match(/the/g)); // [ 'the', 'the', 'the' ]
console.log(str.match(/the/gi)); // [ 'the', 'the', 'The', 'the' ]
console.log(str.match(/\.$/gi)); // [ '.' ]
console.log(str.match(/\.$/gim)); // [ '.', '.' ]
