// keydown : 키를 누를 때
// keyup : 키를 땔 때

const inputEl = document.querySelector('input');

inputEl.addEventListener('keydown', (event) => {
  console.log(event.key);
});

// 아래와 같이 구성해야 한글 입력시 2번 찍히는 현상을 막을 수 있다.
inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.isComposing) {
    console.log(event.isComposing);
    console.log(event.target.value);
  }
});
