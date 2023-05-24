class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super();
  }
}

class C extends B {
  constructor() {
    super();
  }
}

const a = new A();
const b = new B();
const c = new C();

console.log(a instanceof A); // true
console.log(a instanceof B); // false
console.log(a instanceof C); // false

console.log(c.constructor === A); // false
console.log(c.constructor === B); // false
console.log(c.constructor === C); // true

const fruits = ['apple', 'banana'];
console.log(fruits.constructor === Array); // true
console.log(fruits instanceof Array); // true
