class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        m, n = len(heights), len(heights[0])
        
        is_valid = lambda r, c: 0 <= r < m and 0 <= c < n
        
        offsets = (
            (-1, 0),  # up
            (1, 0),   # down
            (0, -1),  # left
            (0, 1)    # right
        )
        
        # top row | left col
        pacific = {(0, c) for c in range(n)} | {(r, 0) for r in range(m)}
        
        # bottom row | right col
        atlantic = {(m - 1, c) for c in range(n)} | {(r, n - 1) for r in range(m)}
        
        def dfs(ocean: Set):
            stack = list(ocean)
            while stack:
                r, c = stack.pop()
                for dr, dc in offsets:
                    if (
                        is_valid(r + dr, c + dc) and 
                        heights[r + dr][c + dc] >= heights[r][c] and
                        (r + dr, c + dc) not in ocean
                    ):
                        ocean.add((r + dr, c + dc))
                        stack.append((r + dr, c + dc))
        
        dfs(pacific)
        dfs(atlantic)
        
        return list(atlantic & pacific)
        