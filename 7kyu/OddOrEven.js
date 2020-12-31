//codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {
  let sumar = array.reduce((a, b) => a + b, 0);
  if (sumar % 2 === 0) {
    return "even";
  } else if (sumar % 2 === 1 || sumar % 2 === -1) {
    return "odd";
  }
}
