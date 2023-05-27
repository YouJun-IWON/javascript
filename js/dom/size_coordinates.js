//? window.innerWidth / window.innerHeight
// 현재 화면(Viewport)의 크기를 얻습니다.

console.log(window.innerHeight);
console.log(window.innerWidth);

//? window.scrollX / window.scrollY
// 페이지의 좌상단 기준, 현재 화면의
// 수평 혹은 수직 스크롤 위치를 얻는다.
console.log(window.scrollX, window.scrollY);

//? window.scrollTo() / E.scrollTo()
// 지정된 좌표로 대상(화면, 스크롤 요소)을 스크롤한다.
// 대상.scrollTo(x좌표, y좌표)
// 대상.scrollTo({ top: Y, left: X, behavior: 'smooth' })

setTimeout(() => {
  window.scrollTo(0, 500);
}, 1000);

setTimeout(() => {
  window.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth',
  });
}, 1000);

const parentEl = document.querySelector('.parent');
setTimeout(() => {
  parentEl.scrollTo({
    left: 0,
    top: 500,
    behavior: 'smooth',
  });
}, 1000);

//? E.clientWidth / E.clientHeight
// 테두리 선(border)을 제외한 요소의 크기를 얻는다.
// 온전히 확인될 수 있는 content만 측정한다. (스크롤바도 제외)

console.log(parentEl.clientWidth, parentEl.clientHeight);

//? E.offsetWidth / E.offsetHeight
// 테두리 선(border)을 포함한 요소의 크기를 얻는다.
// 스크롤 바도 제외된다.
console.log(parentEl.offsetWidth, parentEl.offsetHeight);

//? E.scrollLeft / E.scrollTop
// 스크롤 요소의 좌상단 기준,
// 현재 스크롤 요소의 수평 혹은 수직 스크롤 위치를 얻는다.
console.log(parentEl.scrollLeft, parentEl.scrollTop);

//? E.offsetLeft / E.offsetTop
// 페이지의 좌상단 기준, 요소의 위치를 얻는다.

console.log(parentEl.offsetLeft, parentEl.offsetTop);

//? E.getBoundingClientRect()
// border 을 포함한 요소의 크기와
// 화면(viewport)에서의 상대 위치 정보를 얻는다.
console.log(parentEl.getBoundingClientRect());
