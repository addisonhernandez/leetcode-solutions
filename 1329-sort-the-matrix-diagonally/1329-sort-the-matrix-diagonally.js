/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    // build arrays of diagonal values
    const diagonals = {};
    mat.forEach((row, i) => {
        row.forEach((val, j) => {
            if (!diagonals.hasOwnProperty(j - i)) {
                diagonals[j - i] = [val];
            } else {
                diagonals[j - i].push(val);
            }
        });
    });
    
    // sort each diagonal
    for (const k in diagonals) {
        diagonals[k].sort((a, b) => b - a); // sort descending
    }
    
    // replace entries of `mat` with sorted diagonals
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            mat[i][j] = diagonals[j - i].pop();
        }
    }
    
    return mat;
};