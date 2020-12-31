// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  let s = str.split(" ");
  let arr = [];
  let t;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!" || s[i] === "?") {
      t = s[i];
      arr.push(t);
    } else {
      t = s[i].substr(1, s[i].length) + s[i].substr(0, 1) + "ay";
      arr.push(t);
    }
  }
  return arr.join(" ");
}
