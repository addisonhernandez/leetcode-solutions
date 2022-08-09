class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        modulus = 10**9 + 7
        arr.sort()
        dp = {n: 1 for n in arr}
        
        for i, n in enumerate(arr):
            for m in arr[:i]:
                if n % m == 0 and n // m in dp:
                    dp[n] += dp[m] * dp[n // m]
        
        return sum(dp.values()) % modulus