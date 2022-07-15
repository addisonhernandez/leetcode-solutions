class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        inbounds = lambda i, j: 0 <= i < len(grid) and 0 <= j < len(grid[0])
        
        offsets = (
            (-1, 0), # up
            (1, 0),  # down
            (0, -1), # left
            (0, 1)   # right
        )
        
        def dfs(i: int, j: int) -> int:
            if not inbounds(i, j) or grid[i][j] == 0:
                return 0
            # mark cell visited and visit all neighboring cells
            grid[i][j] = 0
            return 1 + sum(dfs(i + di, j + dj) for di, dj in offsets)
        
        max_size = 0
        
        for i, row in enumerate(grid):
            for j, cell in enumerate(row):
                if cell:
                    max_size = max(max_size, dfs(i, j))
        
        return max_size