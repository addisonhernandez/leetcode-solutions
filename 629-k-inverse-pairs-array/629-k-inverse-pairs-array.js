/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kInversePairs = function(n, k) {
  const modulus = 1e9 + 7;
  const cache = Array.from(Array(n + 1), () => Array(k + 1).fill(0));
  
  cache[0][0] = 1;
  for (let elems = 1; elems <= n; elems++) {
    cache[elems][0] = 1;
    for (let pairs = 1; pairs <= k; pairs++) {
      cache[elems][pairs] = cache[elems - 1][pairs] + cache[elems][pairs - 1];
      if (pairs >= elems) {
        cache[elems][pairs] -= cache[elems - 1][pairs - elems];
      }
      cache[elems][pairs] = (cache[elems][pairs] + modulus) % modulus
    }
  }
  
  return cache[n][k];
};