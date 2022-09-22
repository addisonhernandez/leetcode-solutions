func reverseWords(s string) string {
    words := strings.Split(s, " ")
    
    for i, word := range words {
        words[i] = reverse(word)
    }
    
    return strings.Join(words, " ")
}

func reverse(s string) string {
    runes := []rune(s)
    n := len(runes)
    
    for i, j := 0, n - 1; i < j; i, j = i + 1, j - 1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    
    return string(runes)
}