func minDifficulty(jobDifficulty []int, d int) int {
	n := len(jobDifficulty)

	if d > n {
		return -1
	}

	inf := 1000*300 + 1

	dp := make([][]int, n)
	for i := 0; i < n; i++ {
		dp[i] = make([]int, d)
		for j := 0; j < d; j++ {
			dp[i][j] = inf
		}
	}
	dp[0][0] = jobDifficulty[0]

	for i := 1; i < n; i++ {
		dp[i][0] = max(dp[i-1][0], jobDifficulty[i])

		for j := 1; j < min(i+1, d); j++ {
			rangeMax := 0

			for k := i - 1; k >= 0; k-- {
				rangeMax = max(rangeMax, jobDifficulty[k+1])

				dp[i][j] = min(dp[i][j], dp[k][j-1]+rangeMax)
			}
		}
	}

	return dp[n-1][d-1]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}