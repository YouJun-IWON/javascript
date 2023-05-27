const a = (callback) => {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 1000);
};

const b = () => console.log(2);

a(() => {
  b();
});

// promise

const c = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  });
};

const d = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  });
};

const e = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
      resolve();
    }, 1000);
  });
};

//
c()
  .then(() => {
    return d();
  })
  .then(() => {
    return e();
  });

//
c()
  .then(() => d())
  .then(() => e());

//
c().then(d).then(e);

const getMovies = (movieName) => {
  return new Promise((resolve) => {
    fetch(`https://www.wefwef.com/?apikey=${movieName}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        resolve();
      });
  });
};

getMovies('frozen')
  .then(() => {
    console.log('겨울왕국');
    return getMovies('avengers');
  })
  .then(() => {
    console.log('어벤져스');
    return getMovies('avatar');
  })
  .then(() => {
    console.log('avatar');
  });
