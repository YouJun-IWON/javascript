const data = new Date();
console.log(date);

const d1 = new Date(2022, 11, 16, 12, 57, 30);
// 2022 년 12월 16일 12시 15분 30초

//? .getFullYear(), .setFullYear()

console.log(d2.getFullYear()); // 년도만 추출

data.setFullYear(2023); // 년도를 지정

//? .getMonth() .setMonth()
// 월을 반환 / 지정한다. (zero-based numbering)

//? .getDate() .setDate()
// '일'을 반환 / 지정한다.

//? .getHours() .setHours()
// 시간을 반환 / 지정한다.

//? .getMinutes() .setMinutes()
// 분을 반환 / 지정한다.

//? .getSeconds() / .setSeconds()
// '초'를 반환 / 지정한다.

//? .getDay()
// 날짜 인스턴스의 '요일'을 반환합니다.
// 0 : 일요일 1: 월요일 ~ 6: 토요일
const data1 = new Date();

const day = date.getDay();

console.log(day);

//? .getTime() .setTime()
// 날짜 인스턴스의 'ms' 로 변환 / 지정한다.

Date.prototype.isAfter = function (data) {
  const a = this.getTime();
  const b = date.getTime();
  return a > b;
};

const d2 = new Date('');
const d3 = new Date('');

console.log(d1.isAfter(d2)); // false
console.log(d2.isAfter(d1)); // true

// Date.now()
// '1970-01-01 00:00:00' (유닉스타임) 부터 경과한,
// 메소드가 호출될 떄의 ms가 반환된다.

const time = new Date().getTime();
console.log(Date.now());
console.log(time);
