//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(h, m, s) {
  let hours = h * 60 * 60;
  let minutes = m * 60;

  return (hours + minutes + s) * 1000;
}
