//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
  let n = 0;
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}
