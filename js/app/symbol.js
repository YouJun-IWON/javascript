// symbol
// 변경이 불가한 데이터로, 유일한 식별자를 만들어 데이터를 보호하는 용도로 사용할 수 있다.

// symbol('설명')
// '설명'은 단순 디버깅을 위한 용도일 뿐, 심볼 값과는 관계가 없다.

const sKey = Symbol('Hello');

const user = {
  key: '일반 정보',
  [sKey]: '민감한 정보',
};

console.log(user.key); // 일반 정보
console.log(user['key']); // 일반 정보
console.log(user[sKey]); // 민감한 정보
console.log(user[Symbol('Hello')]); // undefined
console.log(sKey); // Symbol(Hello) => 이 부분을 설명을 보고
console.log(typeof sKey); // symbol
