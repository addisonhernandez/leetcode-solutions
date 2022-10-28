/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const anagrams = {/* string -> string[] */};
    
    strs.forEach((s) => {
        const counts = countSort(s);
        
        if (counts in anagrams) {
            anagrams[counts].push(s);
        } else {
            anagrams[counts] = [s];
        }
    });
    
    return Object.values(anagrams)
};

const countSort = function (s) {
    const ordA = 'a'.charCodeAt();
    
    const charCounts = Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        charCounts[s.charCodeAt(i) - ordA] += 1;
    }
    
    return charCounts.toString()
}