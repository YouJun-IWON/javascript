const a = true;
const b = false;

if (a && b) {
  console.log('모두가 참');
}

if (a || b) {
  console.log('하나 이상이 참');
}

// &&
console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 2); // 0
console.log('a' && 'b' && 'c'); // c

// ||
console.log(false || true); // true
console.log(0 || 1); // 1
console.log(false || 0 || {}); // {}
console.log(false || [] || null); // []
console.log(function () {} || undefined || ''); // [Function (anonymous)]
console.log(false || 0 || NaN); // NaN
