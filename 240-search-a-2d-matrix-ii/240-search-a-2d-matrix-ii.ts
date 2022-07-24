function searchMatrix(matrix: number[][], target: number): boolean {
  let r = 0;
  let c = matrix[0].length - 1;
  
  while (r < matrix.length && c >= 0) {
    if (target < matrix[r][c]) {
      c -= 1;
    } else if (target > matrix[r][c]) {
      r += 1;
    } else {
      return true;
    }
  }
  
  return false;
};