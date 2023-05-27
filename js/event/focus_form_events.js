// focus : 요소가 포커스를 얻었을 때
// blur : 요소가 포커스를 잃었을 때
// input : 값이 변경되었을 때
// change : 상태가 변경되었을 때
// submit : 제출 버튼을 선택했을 때
// reset : 리셋 버튼을 선택했을 때

/* html */ `
<form>
    <input type="text" placeholder="ID"/>
    <input type="password" placeholder="PW"/>
    <button type="submit">제출</button>
    <button type="reset">초기화</button>
</form>
`;

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');

inputEls.forEach((el) => {
  el.addEventListener('focus', () => {
    formEl.classList.add('active');
  });
  el.addEventListener('blur', () => {
    formEl.classList.remove('active');
  });
  el.addEventListener('input', (event) => {
    console.log(event.target.value);
  });
  el.addEventListener('change', (event) => {
    // ex) tab 키를 눌러 상태가 변경되었을 때 동작한다.
    console.log(event.target.value);
  });
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault(); // submit을 하면 초기화되는 것이 default기 때문에 이 부분을 넣어줘야 한다.
  const data = {
    id: event.target[0].value, // 첫번째 input 요소
    pw: event.target[1].value, // 두번째 input 요소
  };
  console.log('제출', data);
});

//! 초기화
formEl.addEventListener('reset', (event) => {
  console.log('리셋');
});
