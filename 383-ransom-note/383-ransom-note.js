/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magCounts = {};
  
  for (const char of magazine) {
    magCounts[char] = (magCounts[char] ?? 0) + 1;
  }
  
  for (const char of ransomNote) {
    if (!magCounts.hasOwnProperty(char) || magCounts[char] === 0) {
      return false;
    }
    magCounts[char] -= 1;
  }
  
  return true;
};