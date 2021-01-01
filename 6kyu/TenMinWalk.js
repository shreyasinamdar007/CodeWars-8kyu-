// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let s = 0;
  let n = 0;
  let w = 0;
  let e = 0;
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "s") {
      s += 1;
    } else if (walk[i] === "n") {
      n += 1;
    } else if (walk[i] === "w") {
      w += 1;
    } else if (walk[i] === "e") {
      e += 1;
    }
  }
  if (walk.length === 10 && n - s === 0 && w - e === 0) {
    return true;
  } else {
    return false;
  }
}
