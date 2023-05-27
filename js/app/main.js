import youjun from './youjun.js';
import { birthKey, emailKey } from './key.js';

// 아래와 같이 볼 수는 있지만
console.log(youjun);
// 코드상으로는 볼 수 없다. 즉, symbol 데이터 조작이 불가능하다.
console.log(Object.keys(youjun)); // ['firstName', 'lastName', 'age']

// symbol을 갖고 있는 다면 조회할 수 있다.
console.log(youjun[birthKey]);
console.log(youjun[emailKey]);
