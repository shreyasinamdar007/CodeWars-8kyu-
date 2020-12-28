// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  if (n === 0) {
    return 0;
  } else if (n % 9 === 0) {
    return 9;
  } else {
    return n % 9;
  }
}
