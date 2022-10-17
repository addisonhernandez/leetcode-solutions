/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const chars = {};
    
    for (const c of sentence.toUpperCase()) {
        chars[c] = true;
    }
    
    return [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].every((c) => chars[c])
};