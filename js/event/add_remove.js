//? .addEventListener()
// 대상에 이벤트 청취를 등록한다.
// 대상에 지정한 이벤트가 발생했을 때 지정한 함수가 호출된다.

const parentEl = document.querySelector('.parent');
const childEl = document.querySelector('.child');

parentEl.addEventListener('cilck', () => {
  console.log('Parent');
});

childEl.addEventListener('cilck', () => {
  console.log('Child');
});

//? .removeEventListener()
// 대상에 등록했던 이벤트 청취를 제거한다.
// 메모리 관리를 위해 등록한 이벤트를 제거하는 과정이 필요할 수 있다.

// 제거를 할 거라면 참조할 수 있는 함수 이름으로 만드는 것이 좋다.
const handler = () => {
  console.log('Parent!');
};

parentEl.addEventListener('click', handler);
childEl.addEventListener('click', () => {
  parentEl.removeEventListener('click', handler);
});
