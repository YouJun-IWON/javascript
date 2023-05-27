// Mouse & Pointer Events

// click
// dbclick : 더블 클릭
// mousedown : 버튼을 누를 때
// mouseup : 버튼을 뗄 때
// mouseenter : 포인터가 요소 위로 들어갈 때
// mouseleave : 포인터가 요소 밖으로 나올 때
// mousemove : 포인터가 움직일 때
// contextmenu : 우클릭 했을 때
// whell : 휠 버튼이 회전할 때

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

childEl.addEventListener('click', () => {
  childEl.classList.toggle('active');
});

childEl.addEventListener('dbclick', () => {
  childEl.classList.toggle('active');
});

//!
childEl.addEventListener('mousedown', () => {
  childEl.classList.add('active');
});

childEl.addEventListener('mouseup', () => {
  childEl.classList.remove('active');
});

//!
childEl.addEventListener('mouseenter', () => {
  childEl.classList.add('active');
});

childEl.addEventListener('mouseleave', () => {
  childEl.classList.remove('active');
});

//! 마우스 위치 추적
childEl.addEventListener('mousemove', (event) => {
  console.log(event.offsetX, event.offsetY);
});

//! 마우스 우클릭
childEl.addEventListener('contextmenu', (event) => {
  event.preventDefault(); // 우클릭시 나타나는 이벤트를 없앤다.
  console.log(event);
});

//! 스크롤을 올리면 delta Y가 음수 반대는 양수
childEl.addEventListener('wheel', (event) => {
  console.log(event);
});
