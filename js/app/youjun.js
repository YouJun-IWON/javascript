import { birthKey, emailKey } from './key';

export default {
  firstName: 'youjun',
  lastName: 'park',
  age: 22,
  [birthKey]: new Date(1985, 11, 16, 17, 30),
  [emailKey]: ['thiehis@gmail.com'],
};
