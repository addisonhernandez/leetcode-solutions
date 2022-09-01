func pacificAtlantic(heights [][]int) (coords [][]int) {
    m, n := len(heights), len(heights[0])
  
    isValid := func (r, c int) bool {
        return r >= 0 && c >=0 && r < m && c < n
    }
 
    peaks := make([]int, m * n)
  
    var findPeak func (r, c, ocean, prevHeight int)
  
    findPeak = func (r, c, ocean, prevHeight int) {
        i := r * n + c
    
        if !isValid(r, c) || peaks[i] == ocean || peaks[i] == 3 || heights[r][c] < prevHeight {
            return
        }
    
        peaks[i] += ocean;
        if peaks[i] == 3 {
            coords = append(coords, []int{r, c})
        }

        findPeak(r - 1, c, ocean, heights[r][c])
        findPeak(r + 1, c, ocean, heights[r][c])
        findPeak(r, c - 1, ocean, heights[r][c])
        findPeak(r, c + 1, ocean, heights[r][c])
    }
  
    pacific, atlantic := 1, 2

    for r := 0; r < m; r++ {
        findPeak(r, 0, pacific, heights[r][0])
        findPeak(r, n - 1, atlantic, heights[r][n - 1])
    }
    for c := 0; c < n; c++ {
        findPeak(0, c, pacific, heights[0][c])
        findPeak(m - 1, c, atlantic, heights[m - 1][c])
    }

    return
}