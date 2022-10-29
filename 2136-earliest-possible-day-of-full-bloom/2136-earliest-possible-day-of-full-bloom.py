class Solution:
    def earliestFullBloom(self, plantTime: List[int], growTime: List[int]) -> int:
        res = 0

        for g_time, p_time in sorted(zip(growTime, plantTime)):
            res = max(res, g_time) + p_time

        return res
