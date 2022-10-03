func lengthOfLongestSubstring(s string) int {
    counts := make(map[byte]int)
    head := 0
    tail := 0
    maxLen := 0
    
    for i := 0; i < len(s); i++ {
        c := s[i]
        
        counts[c] += 1
        tail += 1
        
        for counts[c] > 1 {
            counts[s[head]] -= 1
            head += 1
        }
        maxLen = max(maxLen, tail - head)
    }
    
    return maxLen
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

/*
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
*/