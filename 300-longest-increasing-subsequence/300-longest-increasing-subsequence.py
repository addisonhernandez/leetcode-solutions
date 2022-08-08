class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        # O(N^2) DP
        # dp = [1] * len(nums)
        # for i, num in enumerate(nums):
        #     for j in range(i):
        #         if num > nums[j]:
        #             dp[i] = max(dp[i], dp[j] + 1)
        # return max(dp)
        
        # O(N*log(N)) binary search insertion
        seq = [nums[0]]
        
        for n in nums[1:]:
            if n > seq[-1]:
                seq.append(n)
            else:
                seq[bisect_left(seq, n)] = n
        
        return len(seq)