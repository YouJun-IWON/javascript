// 이벤트 위임
// 비슷한 패턴에서 여러 요소에서 이벤트를 핸들링해야 하는 경우,
// 단일 조상 요소에서 제어하는 이벤트 위임 패턴을 사용할 수 있다.

const parentEl = document.querySelector('.parent');
const childEls = document.querySelectorAll('.child');

// 모든 대상에 이벤트 등록!
childEls.forEach((el) => {
  el.addEventListener('click', (event) => {
    console.log(event.target.textContent);
  });
});

// 조상 요소에 이벤트 위임
// 위와 같은 효과를 가질 수 있다.
parentEl.addEventListener('click', (event) => {
  const childEl = event.target.closest('.child');
  if (childEl) {
    console.log(childEl.textContent);
  }
});
