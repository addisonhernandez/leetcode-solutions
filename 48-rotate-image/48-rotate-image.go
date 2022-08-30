func rotate(matrix [][]int)  {
    n := len(matrix) - 1
    
    swap := func (i, j int) {
        matrix[i][j], matrix[j][n - i], matrix[n - i][n - j], matrix[n - j][i] = matrix[n - j][i], matrix[i][j], matrix[j][n - i], matrix[n - i][n - j]
    }
    
    for i := 0; i < n; i++ {
        for j := i; j < n - i; j++ {
            swap(i, j)
        }
    }
}
