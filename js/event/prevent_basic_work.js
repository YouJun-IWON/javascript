// 마우스 휠의 스크롤 동작 방지
const parentEl = document.querySelector('.parent');
parentEl.addEventListener('wheel', (event) => {
  event.preventDefault(); // 해당 이벤트를 막는 것이 아닌 브라우저가 갖고 있는 기본적인 동작만 막는다.
  console.log('wheel'); // 그래서 이 부분이 정상적으로 실행된다.
});

// <a> 태그에서 페이지 이동 방지

const anchorEl = document.querySelector('a');
anchorEl.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('click');
});
