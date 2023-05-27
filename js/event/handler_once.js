// 핸들러 한 번만 실행

const parentEl = document.querySelector('.parent');

parentEl.addEventListener(
  'click',
  (event) => {
    console.log('parent');
  },
  {
    once: true,
  }
);

// 기본 동작과 핸들러 실행 분리
// 웹페이지에 동작이 많아져 실행 자체를 느릴 수 있지만 사용자가 웹페이지를 조작하는 것은 부드럽게 진행된다.
parentEl.addEventListener(
  'wheel',
  () => {
    for (let i = 0; i < 10000; i++) {
      console.log(i);
    }
  },
  {
    passive: true,
  }
);
