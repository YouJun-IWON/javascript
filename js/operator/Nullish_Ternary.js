const n = 0;
const num1 = n || 7;

console.log(num1); // 7

// null 과 undefined 만 skip 한다.
const num2 = n ?? 7;
console.log(num2); // 0

console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log(null ?? undefined); // undefined
console.log(null ?? 1 ?? 2); // 1

const a = 1;

if (a < 2) {
  console.log('참'); // 참
} else {
  console.log('거짓');
}

console.log(a < 2 ? '참' : '거짓'); // 참
