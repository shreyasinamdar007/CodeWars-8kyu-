//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  let str = "";
  let s = dna.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "T") {
      str += "A";
    } else if (s[i] === "A") {
      str += "T";
    } else if (s[i] === "C") {
      str += "G";
    } else if (s[i] === "G") {
      str += "C";
    }
  }
  return str;
}
