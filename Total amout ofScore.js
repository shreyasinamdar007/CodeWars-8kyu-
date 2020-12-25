//https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let tot = 0;
  for (let i = 0; i < games.length; i++) {
    const [scoreA, scoreB] = games[i].split(":");
    if (scoreA > scoreB) {
      tot += 3;
    } else if (scoreA < scoreB) {
      tot += 0;
    } else {
      tot += 1;
    }
  }
  return tot;
}
