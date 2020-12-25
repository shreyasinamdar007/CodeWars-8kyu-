//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
  let str = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      str += "0";
    } else if (x[i] >= 5) {
      str += "1";
    }
  }
  return str;
}
