func numMatchingSubseq(s string, words []string) int {
    count := 0
    for _, word := range words {
        if isSubseq(s, word) {
            count += 1
        }
    }
    return count
}

func isSubseq(s, t string) bool {
    j := 0
    for i := 0; i < len(s) && j < len(t); i++ {
        if s[i] == t[j] {
            j += 1
        }
    }
    return j == len(t)
}