class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        head: List[List[int]] = []
        tail: List[List[int]] = []

        start, end = newInterval

        for i in intervals:
            if start > i[1]:
                head.append(i)
            elif end < i[0]:
                tail.append(i)
            else:
                start = min(start, i[0])
                end = max(end, i[1])

        return [*head, [start, end], *tail]
