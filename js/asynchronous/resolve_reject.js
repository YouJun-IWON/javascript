const delayAdd = (index, cd, errorCd) => {
  setTimeout(() => {
    if (index > 10) {
      errorCd(`${index}는 10보다 클 수 없다.`);
      return;
    }
    console.log(index);
    cd(index + 1);
  }, 1000);
};

delayAdd(
  4,
  (res) => console.log(res),
  (err) => console.log(err)
);

//
const delayAdd1 = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (index > 10) {
        reject(`${index}는 10보다 클 수 없다.`);
        return;
      }
      console.log(index);
      resolve(index + 1);
    }, 1000);
  });
};

// reject와 resolve 둘 중 하나만 실행된다. 다만 다른 코드는 실행될 수 있으니 return을 잘 넣어야 한다.

delayAdd1(13)
  .then((res) => console.log(res)) // resolve로 들어감
  .catch((err) => console.error(err)) // reject로 들어감
  .finally(() => console.log('Done'));

const wrap = async () => {
  const res = await delayAdd1(7);
  console.log(res);
};
wrap();

// finally를 항상 실행됨

const wrap1 = async () => {
  try {
    const res = await delayAdd1(11);
    console.log(res);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Done');
  }
};

wrap1();
