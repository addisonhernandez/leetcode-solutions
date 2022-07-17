/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  parens = [];
  
  for (const char of s) {
    if (pairs.hasOwnProperty(char)) {
      if (parens.pop() != pairs[char]) {
        return false;
      }
    } else {
      parens.push(char);
    }
  }
  
  return parens.length === 0;
};