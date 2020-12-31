//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
  let s = str.split(" ");
  let word;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    word = s[i];
    word = word.split("").reverse().join("");
    arr.push(word);
  }
  return arr.join(" ");
}
