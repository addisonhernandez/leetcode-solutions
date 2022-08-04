function mirrorReflection(p: number, q: number): number {
  while (p % 2 === 0 && q % 2 === 0) {
    p >>= 1
    q >>= 1
  }
  return 1 - p % 2 + q % 2
};