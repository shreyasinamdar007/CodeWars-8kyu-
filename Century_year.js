//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

function century(year) {
  let cen = Math.floor(year / 100);
  let dec = year % 100;

  if (dec >= 1 && dec <= 99) return cen + 1;
  else return cen;
}
