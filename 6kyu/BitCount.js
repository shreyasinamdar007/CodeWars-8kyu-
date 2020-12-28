// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

var countBits = function (n) {
  let bin = [];
  let count = 0;
  let i = 0;
  while (n > 0) {
    bin[i] = n % 2;
    n = Math.floor(n / 2);
    i++;
  }
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === 1) {
      count++;
    }
  }
  return count;
};
