const a = 7;

const double = () => {
  console.log(a * 2);
};

double();

(() => {
  console.log(a * 2); // 14
})();

(() => {})();
(function () {})();
(function () {})();
!(function () {})() + (function () {})();

((a, b) => {
  console.log(a);
  console.log(b);
})(window, document);
