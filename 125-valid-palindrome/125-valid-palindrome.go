import "regexp"

func isPalindrome(s string) bool {
    re := regexp.MustCompile(`[^a-zA-Z0-9]`)
    s = re.ReplaceAllLiteralString(s, "")
    s = strings.ToLower(s)
    
    for i, j := 0, len(s) - 1; i < j; i, j = i + 1, j - 1 {
        if s[i] != s[j] {
            return false
        }
    }
    return true
}