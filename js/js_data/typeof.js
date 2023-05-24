// true
console.log(typeof 'hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');
console.log(typeof null === 'object');
console.log(typeof [] === 'object');
console.log(typeof {} === 'object');
console.log(typeof function () {} === 'function');

console.log([].constructor === Array);
console.log({}.constructor === Object);

console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null');

// error
// console.log(null.constructor === Array);

// solve
console.log(Object.prototype.toString.call(null)); // [object Null]

function checkType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
