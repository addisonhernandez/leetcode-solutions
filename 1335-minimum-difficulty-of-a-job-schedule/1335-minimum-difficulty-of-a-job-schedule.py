class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        """Bottom-Up DP"""

        if d > len(jobDifficulty):
            return -1

        inf = 1000 * 300 + 1  # max difficulty * job length + 1

        dp = [[inf] * d for i in range(len(jobDifficulty))]
        dp[0][0] = jobDifficulty[0]

        # i: index of the last cut
        for i in range(1, len(jobDifficulty)):
            dp[i][0] = max(dp[i - 1][0], jobDifficulty[i])
            # j: remaining days
            for j in range(1, min(i + 1, d)):
                max_in_range = 0
                # k: lookback index
                for k in range(i)[::-1]:
                    max_in_range = max(jobDifficulty[k + 1], max_in_range)
                    dp[i][j] = min(dp[i][j], dp[k][j - 1] + max_in_range)

        return dp[-1][-1]
