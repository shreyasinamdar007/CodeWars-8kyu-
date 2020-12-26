//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  let xC = 0;
  let oC = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      xC++;
    } else if (str[i] === "o" || str[i] === "O") {
      oC++;
    }
  }
  if (xC === oC) {
    return true;
  } else {
    return false;
  }
}
