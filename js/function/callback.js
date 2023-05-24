const a = (callback) => {
  console.log('a');
  callback();
};

const b = () => {
  console.log('b');
};

a(b);
// a
// b

// 함수도 하나의 데이터로서 함수를 어떤 함수에 넘겨줘서 원하는 부분에서 실행하게끔 한다.
const sum = (a, b, c) => {
  setTimeout(() => {
    c(a + b);
  }, 1000);
};
sum(1, 2, (value) => {
  console.log(value);
});
// 3

const loadImage = (url, cd) => {
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cd(imgEl);
    }, 1000);
  });
};

const containerEl = document.querySelector('.container');
loadImage('url...', (imgEl) => {
  containerEl.innerHTML = '';
  containerEl.append(imgEl);
});
