function price(fruit) {
  switch (fruit) {
    case 'apple':
      return 1000;
    case 'banana':
      return 1500;
    default:
      return 0;
  }
}

console.log(price('apple')); // 1000
console.log(price('banana')); // 1500
console.log(price('hello')); // 0
