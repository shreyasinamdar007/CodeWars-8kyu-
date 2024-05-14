const arr = [[1], [2]];
const arr2 = ["1", "2"];

const arrayCheck = (value) => {
  return value.every((item) => Array.isArray(item));
};
