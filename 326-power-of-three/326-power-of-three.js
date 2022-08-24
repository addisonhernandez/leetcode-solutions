/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const check = (n) => n === 1 || (n % 3 === 0 && check(n / 3));
    
    return n > 0 && check(n);
};