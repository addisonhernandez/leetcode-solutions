func searchMatrix(matrix [][]int, target int) bool {
    r, c := 0, len(matrix[0]) - 1
    
    for r < len(matrix) && c >= 0 {
        if target > matrix[r][c] {
            r += 1
        } else if target < matrix[r][c] {
            c -= 1
        } else {
            return true
        }
    }
    
    return false
}