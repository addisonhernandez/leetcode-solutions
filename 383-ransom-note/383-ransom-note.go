func canConstruct(ransomNote string, magazine string) bool {
    magCounts := make(map[rune]int)
    
    for _, char := range magazine {
        magCounts[char] += 1
    }
    
    for _, char := range ransomNote {
        if count, exists := magCounts[char]; !exists || count == 0 {
            return false
        }
        magCounts[char] -= 1
    }
    
    return true
}