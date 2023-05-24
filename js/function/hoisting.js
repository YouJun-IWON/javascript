// Declaration
hello(); // hello => hoisting

function hello() {
  console.log('hello');
}

// Expression
hello1(); // error

const hello1 = function () {
  console.log('hello');
};
