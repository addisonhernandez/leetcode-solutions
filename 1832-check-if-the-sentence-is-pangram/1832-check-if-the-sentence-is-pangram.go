func checkIfPangram(sentence string) bool {
    chars := make(map[rune]struct{})
    
    for _, c := range strings.ToLower(sentence) {
        chars[c] = struct{}{}
    }
    
    for _, c := range "abcdefghijklmnopqrstuvwxyz" {
        if _, ok := chars[c]; !ok {
            return false
        }
    }
    
    return true
}