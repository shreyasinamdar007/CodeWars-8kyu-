let array = ["a", "b", "c", "e", "f"];
let arr = [];
for (let i = 0; i < array.length; i++) {
  arr.push(array[i].charCodeAt());
}

console.log(arr);

let n;
let t;
let i = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] - arr[i] === 1 || arr[i + 1] - arr[i] <= 0) {
  } else if (arr[i + 1] - arr[i] === 2) {
    t = arr[i];
  }
}

console.log(String.fromCharCode(t + 1));

// for (let i = 0; i < arr.length; i++) {
//   n = arr[i];
//   if (arr[i] + 1 === arr[i + 1]) {
//   } else if (arr[i] + 1 !== arr[i + 1]) {
//     t = arr[i];
//   }
// }
// console.log(String.fromCharCode(t - 3));
