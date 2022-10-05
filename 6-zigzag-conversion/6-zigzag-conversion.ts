function convert(s: string, numRows: number): string {
    if (numRows === 1) {
        return s
    }
    const rows = Array(numRows).fill("")

    let r = 0   // row index for next char
    let dr = 1  // dr: 1 -> increment, -1 -> decrement
    
    for (const c of s) {
        rows[r] += c
        
        if (r === 0) {
            dr = 1
        } else if (r === numRows - 1) {
            dr = -1
        }
        
        r += dr
    }
    
    return rows.join('')
};