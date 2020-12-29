// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let oddA = [];
  let EvenA = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      EvenA.push(integers[i]);
    } else if (integers[i] % 2 === 1 || integers[i] % 2 === -1) {
      oddA.push(integers[i]);
    }
  }
  if (oddA.length === 1) {
    return oddA[0];
  } else if (EvenA.length === 1) {
    return EvenA[0];
  }
}
