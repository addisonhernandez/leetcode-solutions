class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:    
        corners = ((0, 0), (0, n - 1), (m - 1, 0), (m - 1, n - 1))
        
        @cache
        def dfs(moves_left: int, row: int, col: int) -> int:
            if moves_left < 0:
                return 0
            if not 0 <= row < m or not 0 <= col < n:
                return 1
            
            return (
                dfs(moves_left - 1, row - 1, col) +
                dfs(moves_left - 1, row, col - 1) +
                dfs(moves_left - 1, row + 1, col) +
                dfs(moves_left - 1, row, col + 1)
            )
        
        return dfs(maxMove, startRow, startColumn) % ((10 ** 9) + 7)