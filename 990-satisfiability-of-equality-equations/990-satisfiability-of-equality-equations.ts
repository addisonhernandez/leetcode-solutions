function equationsPossible(equations: string[]): boolean {
  const parentOf = {}
  for (const char of "abcdefghijklmnopqrstuvwxyz") {
    parentOf[char] = char
  }
  
  const find = function (char: string): string {
    if (parentOf[char] === char) {
      return char
    }
    parentOf[char] = find(parentOf[char])
    return parentOf[char]
  }
  
  // Iterate over equations and form unions
  const neqIndexes = []
  equations.forEach((eq, i) => {
    if (eq[1] === '=') {
      parentOf[find(eq[0])] = find(eq[3])
    } else {
      neqIndexes.push(i)
    }
  })
  
  // check for conflicts
  for (const i of neqIndexes) {
    const eq = equations[i]
    if (parentOf[find(eq[0])] === find(eq[3])) {
      return false
    }
  }
  
  return true
};