// 이벤트 전파(버블) 방지

parentEl.addEventListener('click', (event) => {
  event.stopPropagation();
});

// 이벤트 순서 고정 (상위의 이벤트가 먼저 작동될 수 있도록 한다. capture 가 걸려 있는 상위 옵션부터 시작하게 된다.)
document.window.addEventListener('click', (event) => {
  console.log('window');
});
document.body.addEventListener(
  'click',
  (event) => {
    console.log('body');
  },
  { capture: true }
); // body가 먼저 동작하게 된다.
document.parentEl.addEventListener(
  'click',
  (event) => {
    console.log('parent');
  },
  { capture: true }
); // body를 눌렀을 때 body 다음으로 parent 가 실행되고 child window 가 실행된다.
document.childEl.addEventListener(
  'click',
  (event) => {
    console.log('child');
  },
  { capture: true }
);

// 밑의 코드에서 child를 클릭했을 경우

document.window.addEventListener(
  'click',
  (event) => {
    console.log('window');
  },
  { capture: true }
);
document.body.addEventListener(
  'click',
  (event) => {
    console.log('body');
    event.stopPropagation();
  },
  { capture: true }
); // window => body 끝
document.parentEl.addEventListener(
  'click',
  (event) => {
    console.log('parent');
  },
  { capture: true }
);
document.childEl.addEventListener(
  'click',
  (event) => {
    console.log('child');
  },
  { capture: true }
);

// capture의 다른 용도
parentEl.addEventListener('click', handler, {
  capture: true,
});

parentEl.removeEventListener('click', handler); // 위 코드의 capture 로 인해 remove가 작동되지 않는다.
// 작동되게 하려면
parentEl.removeEventListener('click', handler, {
  capture: true,
});
