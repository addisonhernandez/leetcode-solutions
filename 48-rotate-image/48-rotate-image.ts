/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length - 1;
  
  const swap = function (i: number, j: number): void {
    [
      matrix[i][j],
      matrix[j][n - i],
      matrix[n - i][n - j],
      matrix[n - j][i],
    ] = [
      matrix[n - j][i],
      matrix[i][j],
      matrix[j][n - i],
      matrix[n - i][n - j],
    ]
  };
  
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - i; j++) {
      swap(i, j);
    }
  }
};