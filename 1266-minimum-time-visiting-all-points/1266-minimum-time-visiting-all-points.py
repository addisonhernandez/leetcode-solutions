class Solution:
    def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
        point = points.pop()
        time = 0
        
        while points:
            goal = points.pop()
            time += max(abs(goal[0] - point[0]), abs(goal[1] - point[1]))
            point = goal
        
        return time
    