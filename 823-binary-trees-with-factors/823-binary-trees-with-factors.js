/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
  const modulus = 10**9 + 7;
  arr.sort((a, b) => a - b);
  
  const dp = {};
  arr.forEach((n) => dp[n] = 1);
  
  arr.forEach((n, i) => {
    for (let j = 0; j < i; j++) {
      const m = arr[j];
      
      if (n % m === 0 && Object.hasOwnProperty.call(dp, n / m)) {
        dp[n] += dp[m] * dp[n / m];
      }
    }
  });
  
  let sum = 0;
  for (const n in dp) {
    sum = (sum + dp[n]) % modulus;
  }
  return sum;
};

/*
modulus = 10**9 + 7
arr.sort()
dp = {n: 1 for n in arr}

for i, n in enumerate(arr):
    for m in arr[:i]:
        if n % m == 0 and n // m in dp:
            dp[n] += dp[m] * dp[n // m]

return sum(dp.values()) % modulus*/