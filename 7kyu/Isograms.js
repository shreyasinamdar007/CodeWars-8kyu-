//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  let s = str.toLowerCase().split("");
  let ss = new Set(s);
  if (s.length === ss.size || s.length === 0) {
    return true;
  } else {
    return false;
  }
}
