let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.splice(0, 0, "(");
a.splice(4, 0, ") ");
a.splice(8, 0, "-");
a.map(String);
console.log(a.join(""));
