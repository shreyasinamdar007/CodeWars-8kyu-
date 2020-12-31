// https://www.codewars.com/kata/59859f435f5d18ede7000050/train/javascript

function wordToBin(str) {
  let array = str.split("");
  let t = [];
  let f;
  let s;
  for (let i = 0; i < array.length; i++) {
    f = array[i].charCodeAt();
    f = f.toString(2);
    t.push(f);
  }

  let arr = [];
  for (let i = 0; i < t.length; i++) {
    s = "0" + t[i];
    arr.push(s);
  }
  return arr;
}
