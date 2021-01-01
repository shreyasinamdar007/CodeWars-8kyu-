//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  let arr;
  if (str.includes("-")) {
    arr = str.split("-");
  } else {
    arr = str.split("_");
  }

  let t = arr[0];

  let capital = (str) => str[0].toUpperCase() + str.slice(1);

  for (let i = 1; i < arr.length; i++) {
    t += capital(arr[i]);
  }

  return t;
}
