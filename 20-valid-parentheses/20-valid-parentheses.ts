function isValid(s: string): boolean {
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const parens = [];
  
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