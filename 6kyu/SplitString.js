//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  let a;
  let t;
  if (str.length === 0) {
    return [];
  } else if (str.length % 2 === 0) {
    return str.match(/.{1,2}/g);
  } else if (str.length % 2 === 1) {
    a = str.match(/.{1,2}/g);
    t = a[a.length - 1];
    a.pop(a.length - 1);
    t = t + "_";
    a.push(t);
    return a;
  }
}

console.log(solution("1245639"));
