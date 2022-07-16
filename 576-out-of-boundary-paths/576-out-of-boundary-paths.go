type memoKey struct {
    moves int
    row   int
    col   int
}

func findPaths(m, n, maxMove, startRow, startColumn int) int {
    memo := make(map[memoKey]int)
    modulus := 1000000007
    
    var dfs func(movesLeft, row, col int) int
    
    dfs = func(movesLeft, row, col int) int {
        if movesLeft < 0 {
            return 0
        }
        if row < 0 || col < 0 || row >= m || col >= n {
            return 1
        }
        
        key := memoKey{movesLeft, row, col}
        
        if paths, exists := memo[key]; exists {
            return paths
        }
        
        val := 0 +
            dfs(movesLeft - 1, row - 1, col) + // up
            dfs(movesLeft - 1, row + 1, col) + // down
            dfs(movesLeft - 1, row, col - 1) + // left
            dfs(movesLeft - 1, row, col + 1)   // right
        memo[key] = val % modulus

        return memo[key]
    }
    
    return dfs(maxMove, startRow, startColumn)
}