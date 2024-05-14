function isNarcissistic(n) {
  const length = String(n).length;

  const sum = String(n)
    .split("")
    .reduce((acc, item) => (acc += Number(item) ** length), 0);

  return sum === n;
}

console.log(isNarcissistic(1634));
