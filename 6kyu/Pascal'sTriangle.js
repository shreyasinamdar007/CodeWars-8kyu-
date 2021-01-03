//https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

function pascalsTriangle(n) {
  let arr = [];
  let t = 0;
  for (let i = 0; i < n; i++) {
    t = arr.length - i;
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        arr.push(1);
      } else {
        arr.push(arr[t + j] + arr[t + j - 1]);
      }
    }
  }
  return arr;
}
