//https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

function isTriangle(a, b, c) {
  if (b + c > a && a + c > b && a + b > c) {
    return true;
  } else {
    return false;
  }
}
