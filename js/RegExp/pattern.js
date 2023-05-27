// ^ab : 줄 시작에 있는 ab와 일치
// ab$ : 줄 끝에 있는 ab와 일치
// . : 임의의 한 문자와 일치
// a|b : a 또는 b와 일치
// ab? : b가 없거나 b와 일치

const str = `
010-1234-5678
thesecon@gmail.com
Hello world!
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
hello@naver.com
http://localhost: 1234
동해물과 백두산이 마르고 닳도록
abbcccddddeeeee
`;
console.log(str.match(/^h.../gm)); // [ 'http', 'hell', 'http' ]

console.log(str.match(/\.com/g)); // [ '.com', '.com', '.com' ]
console.log(str.match(/\.com$/g)); // null
console.log(str.match(/\.com$/gm)); // [ '.com', '.com' ]
console.log(str.match(/...\.com$/gm)); // [ 'ail.com', 'ver.com' ]

console.log(str.match(/fox|dog/g)); // [ 'fox', 'dog' ]
console.log(str.match(/fox|dog|\.com/g)); // [ '.com', '.com', 'fox', 'dog', '.com' ]

console.log(str.match(/https?/g)); // [ 'https', 'http' ]

// {3} : 3개 연속 일치
// {3, } : 3개 이상 연속 일치
// {3, 5} : 3개 이상 5개 이하 연속 일치
// + : 1회 이상 연속 일치 '{1, }'

console.log(str.match(/\d{3}/g)); // [ '010', '123', '567', '703', '123' ]
console.log(str.match(/d{3}/g)); // [ 'ddd' ]
console.log(str.match(/\d{3,9}/g)); // [ '010', '1234', '5678', '7035', '1234' ]

// [ab] : a 또는 b
// [a-z] : a부터 z 사이의 문자 구간에 일치(영어 소문자)
// [A-Z] : A부터 Z 사이의 문자 구간에 일치(영어 대문자)
// [0-9] : 0부터 9 사이의 문자 구간에 일치(숫자)
// [가-힣] : 가부터 힣 사이의 문자 구간에 일치(한글)

console.log(str.match(/[ab]/g));
// [
//     'a', 'b', 'a', 'a',
//     'b', 'a', 'a', 'a',
//     'a', 'b', 'b'
//   ]
console.log(str.match(/[a-z]{1,}/g));
// [
//     'thesecon',        'gmail',
//     'com',             'ello',
//     'world',           'https',
//     'www',             'omdbapi',
//     'com',             'apikey',
//     'c',               'c',
//     's',               'frozen',
//     'he',              'quick',
//     'brown',           'fox',
//     'jumps',           'over',
//     'the',             'lazy',
//     'dog',             'hello',
//     'naver',           'com',
//     'http',            'localhost',
//     'abbcccddddeeeee'
//   ]
console.log(str.match(/[a-zA-Z]+/g));
// [
//     'thesecon',        'gmail',
//     'com',             'Hello',
//     'world',           'https',
//     'www',             'omdbapi',
//     'com',             'apikey',
//     'c',               'c',
//     's',               'frozen',
//     'The',             'quick',
//     'brown',           'fox',
//     'jumps',           'over',
//     'the',             'lazy',
//     'dog',             'hello',
//     'naver',           'com',
//     'http',            'localhost',
//     'abbcccddddeeeee'
//   ]

// \w : 63개 문자(Word, 대소영문 52개, 숫자 10개 + _)에 일치
// \b : 63개 문자에 일치하지 않는 문자 경계
// \d : 숫자에 일치
// \s : 공백에 일치

console.log(str.match(/\b[0-9]+\b/g)); // [ '010', '1234', '5678', '1234' ]
console.log(str.match(/\s/g));
// [
//     '\n', '\n', '\n', ' ', '\n',
//     '\n', ' ',  ' ',  ' ', ' ',
//     ' ',  ' ',  ' ',  ' ', '\n',
//     '\n', ' ',  '\n', ' ', ' ',
//     ' ',  '\n', '\n'
//   ]

// (?:) : 그룹지정
// (?=) : 앞쪽 일치
// (?<=) : 뒤쪽 일치

console.log(str.match(/https?:\/\/\w+\.?/g)); // [ 'https://www.', 'http://localhost' ]
console.log(str.match(/https?:\/\/(?:\w+\.?)+\/?/g)); // [ 'https://www.omdbapi.com/', 'http://localhost' ]

console.log(str.match(/.+(?=과)/g)); // [ '동해물' ]
console.log(str.match(/(?<=과).+/g)); // [ ' 백두산이 마르고 닳도록' ]

//
console.log(str.match(/\d{3}-\d{4}-\d{4}/g)); // [ '010-1234-5678' ]
console.log(str.match(/\w+@\w+\.\w+/g)); // [ 'thesecon@gmail.com', 'hello@naver.com' ]
