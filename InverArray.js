//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  return array.map((x) => {
    if (x > 0) {
      return -x;
    } else if (x < 0) {
      return -x;
    } else {
      return 0;
    }
  });
}
