class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        res: List[List[int]] = []

        i = 0
        
        # Find the insertion point.
        while i < len(intervals) and newInterval[0] > intervals[i][1]:
            res.append(intervals[i])
            i += 1

        if i == len(intervals):
            return res + [newInterval]
        
        # Build the correct new interval.
        start = min(intervals[i][0], newInterval[0])
        end = newInterval[1]
        
        while i < len(intervals) and newInterval[1] >= intervals[i][0]:
            end = max(intervals[i][1], end)
            i += 1
        res.append([start, end])
        
        # Handle leftovers.
        res.extend(intervals[i:])

        return res
