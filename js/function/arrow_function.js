const sum = (a, b) => {
  return a + b;
};
// 위 아래가 같다.
const sum1 = (a, b) => a + b;

const a = (x) => {};

const b = (x, y) => {};

const c = (x) => x * x;

const d = (x) => {
  console.log(x * x);
  return x * x;
};

const g = () => {
  return { a: 1 };
};
const h = () => {
  {
    a: 1;
  }
};

const i = () => {
  return [1, 2, 3];
};
const j = () => [1, 2, 3];
