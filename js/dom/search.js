//? document.getElementById()

// HTML `id` 속성 값으로 검색한 요소를 반환한다.
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다.
// 검색 결과가 없으면, null 을 반환한다.

const el = document.getElementById('child2');
console.log(el);

//? document.querySelector()

// 'css 선택자'로 검색한 요소를 하나 반환한다.
// 여러 요소가 검색되면, 가장 먼저 찾은 요소만 반환한다.
// 검색 결과가 없으면, null 을 반환한다.

const el1 = document.querySelector('.child:first-child');
console.log(el1);

//? document.querySelectorAll()

// 'css 선택자'로 검색한 요소를 NodeList로 반환한다.
// .forEach() 를 사용할 수 있다.

const nodeList = document.querySelectorAll('.child');
console.log(nodeList); // Prototype 부분에 forEach가 있다.
nodeList.forEach((el) => console.log(el.textContent));

// 배열 메소드를 쓰고 싶으면? Array.from() 으로 유사배열을 배열로 변환시켜준다.
console.log(Array.from(nodeList).reverse());

//? N.parentElement
// 노드의 부모 요소를 반환한다.
const el2 = document.querySelector('.child');
console.log(el2);

//? E.closest()
// 자신을 포함한 조상 요소 중 'CSS 선택자'와 일치하는,
// 가장 가까운 요소를 반환한다.
// 요소를 찾지 못하면, 'null'을 반환한다.
// 자시 자신을 포함한다.
const el3 = document.querySelector('.child');

console.log(el.closest('div'));
console.log(el.closest('body'));
console.log(el.closest('.hello'));

//? N.previousSibling / N.nextSibling
// 노드의 이전 형제 혹은 다음 형제 노드를 반환한다.

const el4 = document.querySelector('.child');
console.log(el.previousSibling);
console.log(el.nextSibling);

//? E.previousElementSibling / E.nextElementSibling
// 요소의 이전 형제 혹은 다음 형제 요소를 반환한다.
const el5 = document.querySelector('.child');
console.log(el5.previousElementSibling);
console.log(el5.nextElementSibling);

//? E.children
// 요소의 모든 자식 요소를 반환한다.
const el6 = document.querySelector('.parent');
console.log(el6.children);

//? E.firstElementChild / E.lastElementChild
// 요소의 첫 번째 자식 혹은 마지막 자식 요소를 반환한다.

console.log(el6.firstElementChild);
console.log(el6.lastElementChild);
