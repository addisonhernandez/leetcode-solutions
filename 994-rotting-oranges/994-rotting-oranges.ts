function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  
  const offsets = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  function isValid(r: number, c: number): boolean {
    return r >= 0 && c >= 0 && r < m && c < n;
  }
  
  let q = [];
  let fresh = 0;
  
  grid.forEach((row, r) => {
    row.forEach((orange, c) => {
      if (orange === 2) {
        q.push([r, c]);
      } else if (orange === 1) {
        fresh += 1;
      }
    });
  });
  
  let minutes = 0;
  
  while (q.length > 0 && fresh > 0) {
    const nextQ = [];
    
    q.forEach(([r, c]) => {
      offsets.forEach(([dr, dc]) => {
        if (isValid(r + dr, c + dc) && grid[r + dr][c + dc] === 1) {
          grid[r + dr][c + dc] = 2;
          fresh -= 1;
          nextQ.push([r + dr, c + dc]);
        }
      });
    });
    
    q = nextQ;
    minutes += 1;
  }
  
  return fresh > 0 ? -1 : minutes;
};