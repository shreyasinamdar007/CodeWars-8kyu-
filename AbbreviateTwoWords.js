//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name) {
  let abr = "";
  abr += name[0].toUpperCase();
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      abr += "." + name[i + 1].toUpperCase();
    }
  }
  return abr;
}
