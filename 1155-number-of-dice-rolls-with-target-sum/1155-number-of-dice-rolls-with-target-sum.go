func numRollsToTarget(n int, k int, target int) int {
    modulus := int(1e9) + 7
    
    dp := make([][]int, n + 1)
    for i, _ := range dp {
        dp[i] = make([]int, target + 1)
    }
    dp[0][0] = 1
    
    for i := 1; i <= n; i++ {
        for j := 1; j <= target; j++ {
            for roll := 1; roll <= k; roll++ {
                if roll <= j {
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - roll]) % modulus
                }
            }
        }
    }
    
    return dp[n][target]
}