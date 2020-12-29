//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      count1 += 1;
    }
    if (peopleInLine[i] === 50) {
      count1 -= 1;
      count2 += 1;
    }
    if (peopleInLine[i] === 100) {
      if (count2 === 0 && count1 >= 3) {
        count1 -= 3;
      } else {
        count1 -= 1;
        count2 -= 1;
      }
    }
    if (count1 < 0 || count2 < 0) {
      return "NO";
    }
  }
  return "YES";
}
