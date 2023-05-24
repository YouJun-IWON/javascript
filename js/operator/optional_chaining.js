const user = undefined;

// 에러를 발생시키지 않고 undefined를 출력한다.
console.log(user?.name); // undefined

const userA = {
  name: 'you',
  age: 85,
  address: {
    country: 'Korea',
    city: 'Seoul',
  },
};

const userB = {
  name: 'neo',
  age: 22,
};

function getCity(user) {
  return user.address?.city || '주소 없음';
}

console.log(getCity(userA)); // Seoul
console.log(getCity(userB)); // 주소 없음
