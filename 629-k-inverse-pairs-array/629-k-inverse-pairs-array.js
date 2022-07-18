/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const modulus = 1e9 + 7;
  const cache = Array.from(Array(2), () => Array(k + 1).fill(0));
  
  cache[0][0] = 1;
  cache[1][0] = 1;
  
  for (let elems = 1; elems <= n; elems++)
    for (let pairs = 1; pairs <= k; pairs++) {
      cache[elems % 2][pairs] = cache[(elems - 1) % 2][pairs] + cache[elems % 2][pairs - 1];
      if (pairs >= elems) {
        cache[elems % 2][pairs] -= cache[(elems - 1) % 2][pairs - elems];
      }
      cache[elems % 2][pairs] = (cache[elems % 2][pairs] + modulus) % modulus;
    }
  
  return cache[n % 2][k];
};