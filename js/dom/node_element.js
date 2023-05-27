// DOM (Document Object Model)

// DOM 이란 html 문서를 객체로 표현한 것으로,
// JS에서 html을 제어할 수 있게 해준다.

const element = document.querySelector('h1');
console.log(element.textContent);

// Node vs Element

// node : html 요소, 텍스트, 주석 등 모든 것을 의미
// element : html 요소를 의미

const parent = document.querySelector('.parent');

// 부모 요소의 모든 자식 노드 확인
console.log(parent.childNodes);

// 부모 요소의 모든 자식 요소 확인
console.log(parent.children);

// html node를 object로 보여줌
console.dir(parent);

class N {}
class E extends N {}

console.dir(E); // class E
console.dir(N); // class N
// 부모의 클래스 N을 확인할 수 있다.
console.dir(E.__proto__); // class N

console.dir(Element); // f Element()
console.dir(Node); // f Node()
console.dir(Element.__proto__); // f Node()
