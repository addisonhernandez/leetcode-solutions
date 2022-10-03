function lengthOfLongestSubstring(s: string): number {
  const counts = {};
  let head = 0;
  let tail = 0;
  let maxLen = 0;
  
  for (const c of s) {
    counts[c] = (counts[c] ?? 0) + 1;
    tail += 1;
    
    while (counts[c] > 1) {
      counts[s[head]] -= 1;
      head += 1;
    }
    
    maxLen = Math.max(maxLen, tail - head);
  }
  
  return maxLen;
};