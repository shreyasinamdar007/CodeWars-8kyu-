//https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript

function correctTail(body, tail) {
  let sub = body.substr(-1);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}
