//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
  let count = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      count++;
    } else if (parens[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  if (count === 0) {
    return true;
  } else {
    return false;
  }
}
