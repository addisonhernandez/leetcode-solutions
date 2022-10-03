/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var counts = {};
  var head = 0;
  var tail = 0;
  var maxLen = 0;
  
  var c, i;
  
  for (i = 0; i < s.length; i++) {
    c = s[i];
    
    counts[c] = (counts[c] || 0) + 1;
    tail += 1;
    
    while (counts[c] > 1) {
      counts[s[head]] -= 1;
      head += 1;
    }
    
    maxLen = Math.max(maxLen, tail - head);
  }
  
  return maxLen;
};