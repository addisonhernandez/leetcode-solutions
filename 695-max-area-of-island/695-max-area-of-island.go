func maxAreaOfIsland(grid [][]int) int {
    isInbounds := func(i, j int) bool {
        return i >= 0 && i < len(grid) && j >= 0 && j < len(grid[0])
    }
    
    var dfs func(i, j int) int
    
    dfs = func(i, j int) int {
        if !isInbounds(i, j) || grid[i][j] == 0 {
            return 0
        }
        // mark the cell as visited, then visit all neighbor cells
        grid[i][j] = 0
        return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1)
    }
    
    maxSize := 0
    for i, row := range grid {
        for j, _ := range row {
            if size := dfs(i, j); size > maxSize {
                maxSize = size
            }
        }
    }
    return maxSize
}