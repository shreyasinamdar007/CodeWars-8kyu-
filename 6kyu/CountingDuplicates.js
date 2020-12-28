//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let o = {};
  let count = 0;
  for (let i of text) {
    i = i.toLowerCase();
    if (!o[i]) {
      o[i] = 1;
    } else {
      o[i]++;
    }
  }
  for (let i in o) {
    if (o[i] > 1) {
      count++;
    }
  }
  return count;
}
