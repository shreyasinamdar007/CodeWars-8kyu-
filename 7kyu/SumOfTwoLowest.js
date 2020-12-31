//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  let sum = numbers.sort((a, b) => a - b);
  return sum[0] + sum[1];
}
