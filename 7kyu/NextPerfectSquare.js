//https://www.codewars.com/kata/599f403119afacf9f1000051/train/javascript

function nextPerfectSquare(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    let t = Math.sqrt(n);
    t = Math.floor(t);
    t = t + 1;
    return t ** 2;
  }
}
