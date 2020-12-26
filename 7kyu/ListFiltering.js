//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      let t = l[i];
      arr.push(t);
    } else {
    }
  }
  return arr;
}
