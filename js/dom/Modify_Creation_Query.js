//? document.createElement()
// 메모리에만 존재하는 새로운 html 요소를 생성해 반환합니다.

const divEl = document.createElement('div');
console.log(divEl);

//? E.prepend() / E.append()
// 노드를 요소의 첫 번째 혹은 마지막 자식으로 삽입한다.

const parentEl = document.querySelector('.parent');

const el = document.createElement('div');
el.textContent = 'Hello';

parentEl.prepend(new Comment(' 주석 '));
parentEl.append(el, 'text');
parentEl.append('text');

//? E.remove()
// 요소를 제거합니다.
const el1 = document.querySelector('.child');
el1.remove();

//? E.insertAdjacentElement()
// '대상 요소'의 지정한 위치에 '새로운 요소'를 삽입한다.

/* html */ `
<!-- 'beforebegin' -->
<div class="target">
    <!-- 'afterbegin' -->
    Content!
    <!-- 'beforeend' -->
</div>
<!-- 'afterend' -->
`;

const childEl = document.querySelector('.child');
const newEl = document.createElement('span');
newEl.textContent = 'Hello~';

childEl.insertAdjacentElement('beforebegin', newEl);

//? N.insertBefore()
// '부모 노드'의 자식인 '참조 노드'의 이전 형태로 '노드'를 삽입한다.
const parentEl1 = document.querySelector('.parent');
const childEl1 = document.querySelector('.child');
const newEl = document.createElement('span');
newEl.textContent = 'Hello~';

parentEl.insertBefore(newEl, childEl);

//? N.contains()
// '주어진 노드'가 '노드'의 자신을 포함한 후손인지 확인한다.

console.log(parentEl.contains(childEl));

//? N.textContent
// 노드의 모든 텍스트를 얻거나 변경한다.

const el = document.querySelector('.child');
console.log(el.textContent);

el.textContent = '7';
console.log(el.textContent);

//? E.innerHTML
// 요소의 모든 HTML 내용을 하나의 문자로 얻거나,
// 새로운 html을 지정한다.

const el = document.querySelector('.parent');
console.log(el.innerHTML);

el.innerHTML = '<span>Hello</span>';
