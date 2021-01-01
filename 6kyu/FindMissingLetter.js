//https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i].charCodeAt());
  }
  let t;
  for (let i = 0; i < array.length; i++) {
    if (arr[i + 1] - arr[i] === 1 || arr[i + 1] - arr[i] <= 0) {
    } else if (arr[i + 1] - arr[i] === 2) {
      t = arr[i];
    }
  }
  return String.fromCharCode(t + 1);
}
