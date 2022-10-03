class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        total = 0
        max_time = 0
        n = len(colors)
        
        for i in range(n):
            if i > 0 and colors[i] != colors[i - 1]:
                max_time = 0
            total += min(max_time, neededTime[i])
            max_time = max(max_time, neededTime[i])
        
        return total