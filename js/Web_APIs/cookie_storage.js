// Cookie (쿠키)

// 도메인 단위로 저장
// 표준안 기준, 사이트당 최대 20개 및 4KB로 제한
// 영구 저장 불가능
// 시간이 지나 삭제되어야 할 때 사용

// domain: 유효 도메인 설정
// path: 유효 경로 설정
// expires: 만료 날짜 설정
// max-age: 만료 타이머 설정

// 데이터 저장이 누적된다.
document.cookie = 'a=1; domain=google.com; path=/abc'; // 도메인, 경로가 다르면 쿠키에 저장되지 않는다.
document.cookie = 'b=2';

console.log(document.cookie);

document.cookie = 'a=1; max-age=3'; // 3초가 지나면 쿠키가 삭제된다. expires에 명시된다.
document.cookie = `b=2; expires=${new Date(2023, 11, 16).toUTCString()}`; // 11 = 12월, 국제표준시 적용
document.cookie = 'c=3'; // session : 브라우저가 종료되면 삭제된다.
document.cookie = 'a=3'; // 기존의 a 값이 덮어써진다.

function getCookie(name) {
  const cookie = document.cookie
    .split('; ')
    .find((cookie) => cookie.split('=')[0] === name);
  return cookie ? cookie.split('=')[1] : null;
}

console.log(getCookie('a'));

// storage

// 도메인 단위로 저장
// 5MB 제한
// 세션 혹은 영구 저장 가능
// 만료되지 않아야 하는 데이터에 적용

// sessionStorage: 브라우저 세션이 유지되는 동안에만 데이터 저장
// localStorage: 따로 제거하지 않으면 영구적으로 데이터 저장

// .getItem(): 데이터 조회
// .setItem(): 데이터 추가
// .removeItem(): 데이터 제거
// .clear(): 스토리지 초기화

localStorage.setItem('a', 'Hello world!');
localStorage.setItem('b', JSON.stringify({ x: 1, y: 2 }));
localStorage.setItem('c', JSON.stringify(123)); // 숫자를 유지하기 위해 json.stringfy 지정

console.log(localStorage.getItem('a'));
console.log(JSON.parse(localStorage.getItem('b')));
console.log(JSON.parse(localStorage.getItem('c')));

localStorage.removeItem('a');
localStorage.clear();
