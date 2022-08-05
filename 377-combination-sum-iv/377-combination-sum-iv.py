class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        '''Recursion:'''
        # if target == 0:
        #     return 1
        
        # Naive recursion
        # combos = 0
        # for num in nums:
        #     if target >= num:
        #         combos += self.combinationSum4(nums, target - num)
        # return combos
        
        # Recursive comprehension
        # return sum((self.combinationSum4(nums, target - num) for num in nums if target >= num))
        
        '''Bottom-up DP:'''
        combos = [1] + [0] * target
        
        for i in range(1, target + 1):
            combos[i] = sum((combos[i - num] for num in nums if i >= num))
            
        return combos[-1]