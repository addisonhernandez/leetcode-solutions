func solve(board [][]byte)  {
    m, n := len(board), len(board[0])
    
    var dfs func(r, c int)
    dfs = func(r, c int) {
        if r < 0 || c < 0 || r >= m || c >= n || board[r][c] != 'O' {
            return
        }
        board[r][c] = '#'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
    }
    
    // Mark the first and last col
    for i := 0; i < m; i++ {
        if board[i][0] == 'O' {
            dfs(i, 0)
        }
        if board[i][n - 1] == 'O' {
            dfs(i, n - 1)
        }
    }
    
    // Mark the first and last row
    for j := 0; j < n; j++ {
        if board[0][j] == 'O' {
            dfs(0, j)
        }
        if board[m - 1][j] == 'O' {
            dfs(m - 1, j)
        }
    }
    
    // replace any remaining Os, and restore marked #s
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if board[i][j] == '#' {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X'
            }
        }
    }
}