//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  sec = Number(seconds);
  let HH = ("0" + parseInt(seconds / 3600)).slice(-2);
  let MM = ("0" + parseInt((seconds / 60) % 60)).slice(-2);
  let SS = ("0" + (seconds % 60)).slice(-2);

  return `${HH}:${MM}:${SS}`;
}
