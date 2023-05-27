//? E.dataset
// 요소의 각 `data-` 속성 값을 얻거나 지정한다.

const el = document.querySelector('.child');
const str = 'hello world';
const obj = { a: 1, b: 2 };

el.dataset.helloWorld = str;
el.dataset.object = JSON.stringify(obj);

console.log(el.dataset.helloWorld);
console.log(el.dataset.object);
console.log(JSON.parse(el.dataset.object));

//? E.tagName
// 요소의 태그 이름을 반환한다.
console.log(parentEl.tagName);

//? E.id
// 요소의 `id` 속성 값을 얻거나 지정한다.

console.log(el.id);
el.id = 'child1';
console.log(el.id);

//? E.className
// 요소의 `class` 속성 값을 얻거나 지정한다.
const el = document.querySelector('.child');
console.log(el.className);

el.className += ' child1 active';
console.log(el.className);

//? E.classList
// 요소의 'class' 속성 값을 제어한다.
// .add() : 새로운 값을 추가
// .remove() : 기존 값을 제거
// .toggle() : 값을 토글
// .contains() : 값을 확인

el.classList.add('active');
console.log(el.classList.contains('active')); // true

el.classList.remove('active');
console.log(el.classList.contains('active')); // false

el.addEventListener('click', () => {
  el.classList.toggle('active');
  console.log(el.classList.contains('active'));
});

//? E.style
// 요소의 'style' 속성(인라인 스타일)의 css 속성 값을 얻거나 지정한다.
// 인라인 스타일 반영은 기본 점수가 1000점이기 때문에 덮어쓰기 어렵다.
// 그래서 사실 별도의 파일로 css를 적용하는 것이 좋다.
const el = document.querySelector('.child');

// 개별 지정
el.style.width = '100px';
el.style.fontSize = '20px';

// 한번에 지정
Object.assign(el.style, {
  width: '100px',
  fontSize: '20px',
});

console.log(el.style);
console.log(el.style.width);
console.log(el.style.fontSize);
console.log(el.style.backgroundColor);
console.log(el.style.position);

//? window.getComputedStyle()
// 요소에 적용된 스타일 객체를 반환한다.
const styles = window.getComputedStyle(el);

console.log(styles.width);
console.log(styles.fontSize);

//? E.getAttribute() / E.setAttribute()
// 요소에서 특정 속성 값을 얻거나 지정한다.
el.setAttribute('title', 'hello world');
console.log(el.getAttribute('title'));

//? E.hasAttribute() / E.removeAttribute()
// 요소에서 특정 속성을 확인하거나 제거한다.

console.log(el.hasAttribute('class')); // true
el.removeAttribute('class');
console.log(el.hasAttribute('class')); // false
