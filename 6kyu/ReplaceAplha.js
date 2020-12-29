//https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript

function alphabetPosition(text) {
  let t = text.toLowerCase();
  t = t.replace(/[^a-z]|_/g, "");
  t = t.replace(/\s/g, "");
  let s = t.split("");
  s = s.map((x) => x.charCodeAt() - 96);
  return String(s.join(" "));
}
