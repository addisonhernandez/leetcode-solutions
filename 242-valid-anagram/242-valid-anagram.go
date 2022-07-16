func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }
    
    runeCounts := make(map[byte]int)
    
    for i := 0; i < len(s); i++ {
        runeCounts[s[i]] += 1
        runeCounts[t[i]] -= 1
    }
    
    for _, count := range runeCounts {
        if count != 0 {
            return false
        }
    }
    return true
}