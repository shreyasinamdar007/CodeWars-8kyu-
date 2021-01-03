// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  let obj = {};
  for (let i = 0; i < A.length; i++) {
    let num = A[i];
    obj[num] = obj[num] ? obj[num] + 1 : 1;
  }
  let odd = 0;
  for (let key in obj) {
    odd = obj[key] % 2 ? key : odd;
  }
  return Number(odd);
}
