/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
  const modulus = 10**9 + 7;
  const [a, e, i, o, u] = [0, 1, 2, 3, 4];
  
  const curr = [1, 1, 1, 1, 1];
  
  while (n-- > 1) {
    const prev = [...curr];
    curr[a] = (prev[e] + prev[i] + prev[u]) % modulus;
    curr[e] = (prev[a] + prev[i]) % modulus;
    curr[i] = (prev[e] + prev[o]) % modulus;
    curr[o] = prev[i];
    curr[u] = (prev[i] + prev[o]) % modulus;
    // console.table({prev, curr})
  }
  
  return curr.reduce((sum, val) => (sum + val) % modulus);
};
