//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
  let t = n
    .toString()
    .split("")
    .reverse()
    .map((x) => +x);
  return t;
}
