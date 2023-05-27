// SPA
const page1 = /* html */ `
<section class="page1">
    <h1>Page1</h1>
</section>
`;

const page2 = /* html */ `
<section class="page2">
    <h1>Page2</h1>
</section>
`;

const page3 = /* html */ `
<section class="page3">
    <h1>Page3</h1>
</section>
`;

const pageNotFound = /* html */ `
<section>
    <h1>404 Page Not Found!</h1>
</section>
`;
const pages = [
  { path: '#/page1', template: page1 },
  { path: '#/page2', template: page2 },
  { path: '#/page3', template: page3 },
];

const appEl = document.querySelector('#app');

const render = () => {
  console.log(history);
  const page = pages.find((page) => page.path === location.hash);
  appEl.innerHTML = page ? page.template : pageNotFound;
};
// popstate => 페이지를 이동할 때마다 반응 (history가 바뀔 때마다 뒤의 콜백함수를 실행)
window.addEventListener('popstate', render);
render();

const pagePush = (num) => {
  history.pushState(`전달할 데이터 - ${num}`, null, `#/page${num}`); // popstate를 일으키지 못한다.
  render(); // 그래서 이 부분을 추가한다.
};

const inputEl = document.querySelector('nav input');
inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pagePush(event.target.value);
  }
});
