//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i];
    obj[n] = obj[n] ? obj[n] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      return Number(key);
    }
  }
}
