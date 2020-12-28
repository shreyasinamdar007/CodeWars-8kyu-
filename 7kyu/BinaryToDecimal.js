//https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = (arr) => {
  let j = arr.length - 1;
  let bin = 0;
  for (let i = 0; i < arr.length; i++) {
    bin += arr[i] * 2 ** j;
    j--;
  }
  return bin;
};
