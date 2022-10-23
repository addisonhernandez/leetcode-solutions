from collections import Counter


class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        unique_sum = sum({*nums})
        intended_sum = len(nums) * (len(nums) + 1) // 2
        actual_sum = sum(nums)
        
        return [actual_sum - unique_sum, intended_sum - unique_sum]