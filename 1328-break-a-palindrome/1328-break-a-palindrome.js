/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const len = palindrome.length;
    
    for (let i = 0; i < (len >> 1); i++) {
        if (palindrome[i] !== 'a') {
            return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
        }
    }
    
    if (len > 1) {
        return palindrome.slice(0, -1) + 'b';
    }
    
    return '';
};