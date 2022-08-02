func kthSmallest(matrix [][]int, k int) int {
    n := len(matrix)
    nSquared := len(matrix) * len(matrix)
    flatMatrix := make([]int, 0, nSquared)
    
    for i := 0; i < n; i++ {
        flatMatrix = append(flatMatrix, matrix[i]...)
    }
    
    sort.Ints(flatMatrix)
    
    return flatMatrix[k - 1]
}