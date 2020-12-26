//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  let st = "";
  let s = str.split("");
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u" ||
      s[i] === "A" ||
      s[i] === "E" ||
      s[i] === "I" ||
      s[i] === "O" ||
      s[i] === "U"
    ) {
      s[i] = "";
    } else {
      st += s[i];
    }
  }
  return st;
}
