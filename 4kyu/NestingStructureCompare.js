// Return 'true' if and only if 'other' has the same
// nesting structure as 'this'.

// Note: You are given a function isArray(o) that returns
// whether its argument is an array.
function isArray(array) {
  return array.constructor == Array;
}

Array.prototype.sameStructureAs = function (other) {
  if (!isArray(other)) return false;
  if (this.length != other.length) return false;

  return this.every((element, i) => {
    const otherElement = other[i];
    if (isArray(element) && !element.sameStructureAs(otherElement)) {
      return false;
    } else if (!isArray(element) && isArray(otherElement)) {
      return false;
    }
    return true;
  })
};
