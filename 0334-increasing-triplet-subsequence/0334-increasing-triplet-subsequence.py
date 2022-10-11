class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        low = mid = float('inf')
        
        for n in nums:
            if n <= low:
                low = n
            elif n <= mid:
                mid = n
            else:
                return True
        
        return False