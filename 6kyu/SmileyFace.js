//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
  let s;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    s = arr[i];
    if (s.length === 2 || s.length === 3) {
      if (s[0] === ":" || s[0] === ";") {
        if (s[1] === "-" || s[1] === "~") {
          if (s[2] === ")" || s[2] === "D") {
            count++;
          }
        } else if (s[1] === ")" || (s[1] === "D" && s.length === 2)) {
          count++;
        }
      }
    }
  }
  return count;
}
