//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num) {
  let ns = num.toString().split("");
  let t = ns.map((x) => x ** 2);
  t = t.join("");
  return Number(t);
}
