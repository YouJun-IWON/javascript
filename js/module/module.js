// module 이란 특정 데이터의 집합
// import(항상 최상단에 있어야 한다.) export

// 이름 내보내기
export const hello = 'hello world';
// 가져오기
import { hello } from 'path...';
// 이름 바꿔서 가져오기
import { hello as xyz } from 'path...';

// 기본 내보내기
export default 123;
// 가져오기
import number from 'path...';

// 전부 가져오기
import * as abc from './module.js';

// 동적으로 가져오기
setTimeout(() => {
  import('./module.js').then((abc) => {
    console.log(abc);
  });
}, 1000);
// 비동기적으로 가져오기
setTimeout(async () => {
  const abc = await import('./module.js');
  console.log(abc);
}, 1000);
