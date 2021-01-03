//https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  let t = words.split(" ");
  let arr = [];
  let n;
  for (let i = 0; i < t.length; i++) {
    n = t[i].match(/\d/g);
    arr[n - 1] = t[i];
  }
  return arr.join(" ");
}
