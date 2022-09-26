/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
  const parentOf = {};
  for (const char of 'abcdefghijklmnopqrstuvwxyz') {
    parentOf[char] = char;
  }
  
  const find = function (char) {
    return parentOf[char] === char ? char : find(parentOf[char]);
  }
  
  // Iterate over equations and form unions
  for (const eq of equations) {
    if (eq[1] === '=') {
      const x = eq[0];
      const y = eq[3];
      parentOf[find(x)] = find(y);
    }
  }
  
  // iterate over equations and check for conflicts
  for (const eq of equations) {
    if (eq[1] === '!') {
      const x = eq[0];
      const y = eq[3];
      if (parentOf[find(x)] === find(y)) {
        return false;
      }
    }
  }
  
  return true
};