// JSON (Javascript Object Notation)

// 데이터 전달을 위한 표준 포맷
// 문자, 숫자, 불린, null, 객체, 배열만 사용
// 하나의 json은 한 종류의 데이터만 가질 수 있음
// 문자는 큰 따옴표만 사용
// 후행 쉼표 사용 불가
// .json 확장자 사용

// JSON.stringfy() = 데이터를 JSON 문자로 변환한다.
// JSON.parse()  = JSON 문자를 분석해 데이터로 변환한다.

// JSON 화를 진행시키면 ""가 붙는다.

console.log(JSON.stringify('Hello world!')); // "Hello world!"

console.log(JSON.parse('"Hello world!"')); // Hello world!
