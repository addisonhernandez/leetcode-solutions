func convert(s string, numRows int) string {
    if numRows == 1 || numRows >= len(s) {
        return s
    }
    
    rows := make([]strings.Builder, numRows)
    
    r, dr := 0, -1
    
    for _, c := range s {
        rows[r].WriteRune(c)
        
        if r == 0 || r == numRows - 1 {
            dr = -dr
        }
        
        r += dr
    }
    
    strs := make([]string, numRows)
    for i, row := range rows {
        strs[i] = row.String()
    }
    return strings.Join(strs, "")
}