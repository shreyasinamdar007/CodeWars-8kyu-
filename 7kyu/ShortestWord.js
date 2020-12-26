//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  let str = s.split(" ");
  let sstr = str.sort((a, b) => a.length - b.length);
  return sstr[0].length;
}
