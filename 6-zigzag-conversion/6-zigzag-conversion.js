/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }
    
    const rows = Array(numRows).fill('');

    let r = 0;      // row index for next char
    let dr = -1;    // dr: 1 -> increment, -1 -> decrement
    
    for (const c of s) {
        rows[r] += c;
        
        if (r === 0 || r === numRows - 1) {
            dr = -dr;
        }
        
        r += dr;
    }
    
    return rows.join('');
};