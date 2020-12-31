let arr = "shreyas is rada";
arr = arr.split(" ");
let ar = [];
let s;
for (let i = 0; i < arr.length; i++) {
  let s = arr[i].substr(1, arr.length) + arr[i].substr(0, 1) + "ay";
  ar.push(s);
}
console.log(ar.join(" "));
