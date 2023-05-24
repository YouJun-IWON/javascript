let i = 0;

const a = () => {
  console.log('a');
  i += 1;
  if (i < 4) {
    a();
  }
};
a();

// a
// a
// a
// a

const userA = { name: 'A', parent: null };
const userB = { name: 'B', parent: userA };
const userC = { name: 'C', parent: userB };
const userD = { name: 'D', parent: userC };

const getRootUser = (user) => {
  if (user.parent) {
    return getRootUser(user.parent);
  }
  return user;
};

console.log(getRootUser(userD)); // { name: 'A', parent: null }
