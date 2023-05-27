// console
//? .log(), .warn(), .error(), .dir()

// 콘솔에 메세지나 객체를 출력한다.

// -log : 일반 메세지
// -warn : 경고 메세지
// -error : 에러 메세지
// -dir : 속성을 볼 수 있는 객체를 출력

console.log(document.body);
console.warn(document.body);
console.error(document.body);
console.dir(document.body);

//? .count(), .countReset()
// 콘솔 메소드 호출의 누적 횟수를 출력하거나 초기화한다.

console.count('a'); // 1
console.count('a'); // 2
console.count('a'); // 3
console.countReset('a'); // 0
console.count('a'); // 1

//? .time(), .timeEnd()
// 콘솔에 타이머가 시작해서 종료되기까지의 시간(ms)을 출력한다.
console.time('반복문');
for (let i = 0; i < 10000; i += 1) {
  console.log(i);
}
console.timeEnd('반복문'); // 사이에 있는 특정 로직이 처리되는데 걸리는 시간을 알 수 있다.

//? .trace()
// 메소드 호출 스텍(Call Stack)을 추적해 출력합니다.

function a() {
  function b() {
    function c() {
      console.log('Log!');
      console.trace('Trace!');
    }
    c();
  }
  b();
}
a();

//? .clear()
// 콘솔에 기록된 메세지를 모두 삭제한다.

console.clear();

//! 서식 문자 치환
//? %s - 문자로 적용
//? %o - 객체로 적용
//? %c - CSS로 적용

const a = 'The brown fox';
const b = 3;
const c = {
  f: 'fox',
  d: 'dog',
};

console.log('%s jumps over the lazy dog %s times', a, b);
console.log('%o is Object', c);
console.log(
  '%cThe brown fox %cjumps over %cthe lazy dog',
  'color: brown; font-family: serif; font-size: 20px',
  '',
  'font-size: 18px; color: #fff; background-color: green;'
);
