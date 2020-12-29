//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {
  let arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (i === 0) {
      arr.push(iterable[i]);
    } else if (iterable[i] !== iterable[i - 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
};
