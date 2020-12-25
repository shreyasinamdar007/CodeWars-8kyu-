//https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (array === null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    let tot = 0;
    array.sort((a, b) => a - b);
    for (let i = 1; i < array.length - 1; i++) {
      tot += array[i];
    }
    return tot;
  }
}
