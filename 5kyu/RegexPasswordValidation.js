function validate(password) {
  const longEnough = /.{6,}/.test(password);
  const hasLowerCase = /[a-z]/g.test(password);
  const hasUpperCase = /[A-z]/g.test(password);
  const containsNumber = /\d/g.test(password);

  return longEnough && hasLowerCase && hasUpperCase && containsNumber;
}

function validateShort(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d){6,}/g.test(password);
}

console.log(validate("djI38D55"));
