function maxAreaOfIsland(grid: number[][]): number {
  const isInbounds = makeBoundsChecker(grid.length, grid[0].length);
  
  const dfs = function(i: number, j: number): number {
    if (!isInbounds(i, j) || grid[i][j] === 0) {
      return 0;
    }
    // mark cell visited (set to zero) and visit neighbors
    grid[i][j] = 0;
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  }
  
  let maxSize = 0;
  
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        maxSize = Math.max(maxSize, dfs(i, j));
      }
    })
  });
  
  return maxSize
};

function makeBoundsChecker(rows: number, cols: number): Function {
  return function (i: number, j: number): boolean {
    return (i >= 0 && i < rows && j >=0 && j < cols)
  }
}