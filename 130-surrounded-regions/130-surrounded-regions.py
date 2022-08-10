class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """Do not return anything, modify board in-place instead."""
        m, n = len(board), len(board[0])
        offsets = (
            (-1, 0),  # up
            (1, 0),   # down
            (0, -1),  # left
            (0, 1)    # right
        )
        
        def dfs(r: int, c:int):
            if not (0 <= r < m) or not (0 <= c < n) or board[r][c] != "O":
                return
            board[r][c] = "#"
            for dr, dc in offsets:
                dfs(r + dr, c + dc)
        
        # Mark the first and last columns
        for i in range(m):
            if board[i][0] == "O":
                dfs(i, 0)
            if board[i][n - 1] == "O":
                dfs(i, n - 1)
                
        # Mark the first and last rows
        for j in range(n):
            if board[0][j] == "O":
                dfs(0, j)
            if board[m - 1][j] == "O":
                dfs(m - 1, j)
        
        # Replace remaining Os in-place, and restore marked #s
        board[:] = [["XO"[c == "#"] for c in row] for row in board]