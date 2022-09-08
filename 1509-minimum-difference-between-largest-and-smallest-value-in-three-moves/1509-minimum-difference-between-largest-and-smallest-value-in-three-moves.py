class Solution:
    def minDifference(self, nums: List[int]) -> int:
        # print(nlargest(4, nums), nsmallest(4, nums))
        # print(list(zip(nlargest(4, nums), nsmallest(4, nums)[::-1])))
        return min(a - b for a, b in list(zip(nlargest(4, nums)[::-1], nsmallest(4, nums))))