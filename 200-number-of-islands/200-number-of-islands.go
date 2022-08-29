func numIslands(grid [][]byte) int {
    islandCount := 0
    
    m, n := len(grid), len(grid[0])
    
    isValid := func (row, col int) bool {
        return row >= 0 && col >= 0 && row < m && col < n
    }
    
    var dfs func (r, c int)
    
    dfs = func (r, c int) {
        if !isValid(r, c) || grid[r][c] == '0' {
            return
        }
        grid[r][c] = '0'
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)
    }
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            if grid[i][j] == '1' {
                islandCount += 1
                dfs(i, j)
            }
        }
    }
    
    return islandCount
}
