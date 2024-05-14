function correct(string) {
  const incorrectChar = ["0", "1", "5"];
  const correctChar = ["O", "I", "S"];
  const correctedString = [];

  for (let i = 0; i < string.length; i++) {
    if (incorrectChar.includes(string[i])) {
      const correctedChar = correctChar[incorrectChar.indexOf(string[i])];
      correctedString.push(correctedChar);
    } else {
      correctedString.push(string[i]);
    }
  }

  return correctedString.join("");
}

function correctString(string) {
  return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "5");
}

console.log(correctString("L0ND0N"));
console.log(correctString("DUBL1N"));
console.log(correct("5INGAP0RE"));


