/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let a = 0;
    let b = 1;
    
    for ( ; n > 0; n--) {
        [a, b] = [b, a + b]
    }
    
    return a
};