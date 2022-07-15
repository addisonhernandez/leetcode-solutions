/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const isInbounds = function (i, j) {
    return i >= 0 && j >= 0 && i < grid.length && j < grid[0].length;
  }
  
  const dfs = function (i, j) {
    if (!isInbounds(i, j) || grid[i][j] === 0) {
      return 0;
    }
    // mark the cell visited (set to zero) and visit all neighbors
    grid[i][j] = 0;
    return 1 + dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  }
  
  let maxSize = 0;
  
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 1) {
        maxSize = Math.max(maxSize, dfs(i, j));
      }
    })
  });
  
  return maxSize;
};