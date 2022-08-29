const offsets = [
  [-1, 0],  // up
  [1, 0],   // down
  [0, -1],  // left
  [0, 1],   // right
];

function numIslands(grid: string[][]): number {
  let islandCount = 0;
  
  const m = grid.length;
  const n = grid[0].length;
  
  const isValid = function (row, col) {
    return row >= 0 && row < m && col >= 0 && col < n;
  };
  
  const dfs = function (r, c) {
    if (!isValid(r, c) || grid[r][c] === '0') {
      return;
    }
    grid[r][c] = '0';
    offsets.forEach(([dr, dc]) => dfs(r + dr, c + dc));
  };
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        islandCount += 1;
        dfs(i, j);
      }
    }
  }
  
  return islandCount;
};