function hello() {
  console.log('hello');
}

hello(); // hello
console.log(hello); // [Function: hello]

console.log(typeof hello()); // undefined

function getNumber() {
  return 123;
}

console.log(typeof getNumber); // function
console.log(typeof getNumber()); // number

const a = function () {
  console.log('A');
};

const b = function (c) {
  console.log(c);
  c();
};

// b(123); // 123
b(a); // [Function: a] A
