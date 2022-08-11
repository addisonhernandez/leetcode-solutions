class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        
        offsets = (
            (-1, 0),
            (1, 0),
            (0, -1),
            (0, 1)
        )
        
        stack = []
        fresh = minutes = 0
        
        is_valid = lambda r, c: 0 <= r < m and 0 <= c < n
        
        for i, row in enumerate(grid):
            for j, orange in enumerate(row):
                if orange == 2:
                    stack.append((i, j))  # (depth, row, col)
                elif orange == 1:
                    fresh += 1
        
        print(f"{grid=}\n{stack=}\n")
        while stack and fresh > 0:
            temp = []
            while stack:
                r, c = stack.pop()
                for dr, dc in offsets:
                    if is_valid(r + dr, c + dc) and grid[r + dr][c + dc] == 1:
                        grid[r + dr][c + dc] = 2
                        fresh -= 1
                        temp.append((r + dr, c + dc))
            minutes += 1
            stack = temp
            print(f"{minutes=}\n{grid=}\n{stack=}\n")
        
        return -1 if fresh > 0 else minutes