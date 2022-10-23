class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        n = len(nums)
        
        # # Difference of sums:
        # unique_sum = sum({*nums})
        # intended_sum = n * (n + 1) // 2
        # actual_sum = sum(nums)
        # return [actual_sum - unique_sum, intended_sum - unique_sum]
        
        # In-place marking:
        dupe = 0
        miss = 0
        
        for i, num in enumerate(nums, 1):
            nums[num % n - 1] += n
        
        for i, num in enumerate(nums, 1):
            if num <= n:
                miss = i
            elif num > 2 * n:
                dupe = i
        
        return [dupe, miss]