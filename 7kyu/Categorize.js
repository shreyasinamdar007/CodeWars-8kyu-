//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    let t = data[i];
    if (t[0] >= 55 && t[1] > 7) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  }
  return arr;
}
