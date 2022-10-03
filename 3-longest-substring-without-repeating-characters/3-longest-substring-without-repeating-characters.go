func lengthOfLongestSubstring(s string) int {
    counts := make(map[byte]int)
    head := 0
    maxLen := 0
    
    for tail := 0; tail < len(s); tail++ {
        c := s[tail]
        
        counts[c] += 1
        
        for counts[c] > 1 {
            counts[s[head]] -= 1
            head += 1
        }
        maxLen = max(maxLen, tail - head + 1)
    }
    
    return maxLen
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}