function sumOfTwoLowestPositve(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}

function sumOfTwoLowestPositveNum(arr) {
  let smallest;
  let secondSmallest;

  if (arr[0] < arr[1]) {
    smallest = arr[0];
    secondSmallest = arr[1];
  } else {
    smallest = arr[1];
    secondSmallest = arr[0];
  }

  for (let i = 2; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum < smallest) {
      secondSmallest = smallest;
      smallest = currentNum;
    } else if (currentNum < secondSmallest) {
      secondSmallest = currentNum;
    }
  }

  return smallest + secondSmallest;
}

console.log(sumOfTwoLowestPositveNum([19, 5, 42, 2, 77]));
console.log(sumOfTwoLowestPositveNum([10, 343445353, 3453445, 345354535453]));
