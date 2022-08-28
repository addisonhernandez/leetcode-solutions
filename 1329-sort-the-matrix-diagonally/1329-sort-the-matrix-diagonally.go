func diagonalSort(mat [][]int) [][]int {
    diagonals := make(map[int][]int)
    
    m, n := len(mat), len(mat[0])
    
    for i, row := range mat {
        for j, val := range row {
            diagonals[j - i] = append(diagonals[j - i], val)
        }
    }
    
    for _, vals := range diagonals {
        sort.Ints(vals)
    }
    
    for i := 0; i < m; i++ {
        for j := 0; j < n; j++ {
            mat[i][j] = diagonals[j - i][0]
            diagonals[j - i] = diagonals[j - i][1:]
        }
    }

    return mat
}