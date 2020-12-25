//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

function findNeedle(haystack) {
  let count;
  for (let i = 0; i < haystack.length; i++) {
    count = i;
    if (haystack[i] === "needle") {
      return `found the needle at position ${count}`;
    }
  }
}
