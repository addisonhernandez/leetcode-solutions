/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function(m, n, maxMove, startRow, startColumn) {
    const cache = {};
    const modulus = (10 ** 9) + 7;
    
    const paths = (function dfs(movesLeft, row, col) {
        if (movesLeft < 0) {
            return 0;
        }
        if (row < 0 || col < 0 || row >= m || col >= n) {
            return 1;
        }
        
        const key = JSON.stringify([movesLeft, row, col]);
        
        if (!cache.hasOwnProperty(key)) {
            const val = (
                dfs(movesLeft - 1, row - 1, col) + // up
                dfs(movesLeft - 1, row + 1, col) + // down
                dfs(movesLeft - 1, row, col - 1) + // left
                dfs(movesLeft - 1, row, col + 1)   // right
            );
            cache[key] = val % modulus;
        }
        
        return cache[key];
    })(maxMove, startRow, startColumn);
    
    return paths % modulus;
};