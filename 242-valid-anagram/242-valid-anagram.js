/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  
  const charCounts = {};
  
  for (let i = 0; i < s.length; i++) {
    charCounts[s[i]] = (charCounts[s[i]] ?? 0) + 1;
    charCounts[t[i]] = (charCounts[t[i]] ?? 0) - 1;
  }
  
  return Object.values(charCounts).every((count) => count === 0);
};