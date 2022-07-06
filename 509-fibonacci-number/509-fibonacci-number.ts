function fib(n: number): number {
  let a = 0;
  let b = 1;
  
  while (n-- > 0) {
    [a, b] = [b, a + b]
  }
  
  return a
};