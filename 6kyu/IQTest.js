//https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
  let num = numbers.split(" ");
  let ECount = 0;
  let Ocount = 0;
  let resE = "";
  let resO = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      ECount++;
      resE = i + 1;
    } else if (num[i] % 2 === 1) {
      Ocount++;
      resO = i + 1;
    }
    if (Ocount === 1 && ECount > 1) {
      return resO;
    }

    if (ECount === 1 && Ocount > 1) {
      return resE;
    }
  }
}
