//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  if (s.length % 2 === 0) {
    let v = s.length / 2;
    return String(s[v - 1] + s[v]);
  } else if (s.length % 2 === 1) {
    let t = Math.floor(s.length / 2);
    return String(s[t]);
  } else {
    return String[s[0]];
  }
}

console.log(getMiddle("Shreyas"));
