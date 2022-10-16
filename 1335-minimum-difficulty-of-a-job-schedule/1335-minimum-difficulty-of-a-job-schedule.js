/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
  const n = jobDifficulty.length

  if (d > n) {
    return -1
  }

  const dp = Array(n)
    .fill(null)
    .map(() => Array(d).fill(Infinity))

  dp[0][0] = jobDifficulty[0]

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], jobDifficulty[i])

    const jMax = Math.min(i + 1, d)
    for (let j = 1; j < jMax; j++) {
      let rangeMax = 0

      for (let k = i - 1; k >= 0; k--) {
        rangeMax = Math.max(jobDifficulty[k + 1], rangeMax)

        dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + rangeMax)
      }
    }
  }

  return dp[n - 1][d - 1]
};