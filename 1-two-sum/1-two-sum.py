class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        partner_indexes = {}
        
        for i, num in enumerate(nums):
            if num in partner_indexes:
                return [partner_indexes[num], i]
            
            partner_indexes[target - num] = i
        
        return None