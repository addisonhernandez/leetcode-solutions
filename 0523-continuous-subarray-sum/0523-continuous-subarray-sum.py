class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        _sum = 0
        sum_indexes = {0: -1}

        for i, num in enumerate(nums):
            _sum = (_sum + num) % k

            if _sum in sum_indexes:
                if i - sum_indexes[_sum] >= 2:
                    return True
            else:
                sum_indexes[_sum] = i

        return False