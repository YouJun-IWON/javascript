// 이벤트 객체는 대상에서 발생한 이벤트 정보를 담고 있다.

const parentEl = document.querySelector('.parent');

parentEl.addEventListener('click', (event) => {
  console.log(event.target, event.currentTarget); // (선택한) 이벤트의 타켓, 이벤트가 등록된 타켓
  console.log(event); // 발생한 이벤트에 대한 정보를 알 수 있다.
});

parentEl.addEventListener('wheel', (event) => {
  console.log(event);
});

const inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', (event) => {
  console.log(event.key); // 어떤 키를 입력했는지 알 수 있다.
});
