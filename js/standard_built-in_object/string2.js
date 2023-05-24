//? .replace()
// 대상 문자에서 패턴과 일치하는 부분을 교체한 새로운 문자로 반환합니다.

const str = 'Hello, Hello?!';

console.log(str.replace('Hello', 'Hi')); // Hi, Hello?!
console.log(str.replace(/Hello/g, 'Hi')); // Hi, Hi?!
console.log(str); // Hello, Hello?!

//? .slice()
// 대상 문자의 일부를 추출해 새로운 문자를 반환합니다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출합니다.

const str1 = 'Hello world!';

console.log(str1.slice(0, 5)); // Hello
console.log(str1.slice(6, -1)); //  world
console.log(str1.slice(6)); //  world!
console.log(str1); // Hello world!

//? .split()
// 대상 문자를 주어진 구분자로 나눠 배열로 반환합니다.

const str2 = 'apple, banana, cherry';

console.log(str2.split(', ')); // [ 'apple', 'banana', 'cherry' ]
console.log(str2.split(''));
// [
//     'a', 'p', 'p', 'l', 'e',
//     ',', ' ', 'b', 'a', 'n',
//     'a', 'n', 'a', ',', ' ',
//     'c', 'h', 'e', 'r', 'r',
//     'y'
//   ]

//? .toLowerCase()
// 대상 문자를 영어 소문자로 변환해 새로운 문자로 반환한다.

const str3 = 'Apple, Banana, Cherry';

console.log(str3.toLowerCase()); // apple, banana, cherry
console.log(str3); // Apple, Banana, Cherry

//? .toUpperCase()

console.log(str3.toUpperCase()); // APPLE, BANANA, CHERRY

//? .trim()
// 대상 문자의 앞뒤 공백 문자를 제거한 새로운 문자를 반환한다.

const str4 = '  youjun  ';

console.log(str4.trim()); //youjun
console.log(str4); //  youjun
