/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  
  const isValid = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
  
  const offsets = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
  ];
  
  const dfs = (row, col) => {
    if (!isValid(row, col) || grid[row][col] === '0') {
      return;
    }
    grid[row][col] = '0';
    offsets.forEach(([dr, dc]) => dfs(row + dr, col + dc));
  };
  
  let count = 0;
  
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === '1') {
        count += 1;
        dfs(i, j);
      }
    });
  });
  
  return count;
};

/*
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        dr_dc = (
            (-1, 0),  # up
            (1, 0),   # down
            (0, -1),  # left
            (0, 1)    # right
        )
        
        m, n = len(grid), len(grid[0])
        
        is_valid = lambda r, c: 0 <= r < m and 0 <= c < n
        
        def dfs(row: int, col: int):
            if not is_valid(row, col) or grid[row][col] == "0": 
                return
            grid[row][col] = "0"
            for dr, dc in dr_dc:
                dfs(row + dr, col + dc)
            
        for i, row in enumerate(grid):
            for j, cell in enumerate(row):
                if cell == "1":
                    count += 1
                    dfs(i, j)
        
        return count
    */