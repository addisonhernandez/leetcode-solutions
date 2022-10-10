func breakPalindrome(palindrome string) string {
    n := len(palindrome)
    
    for i := 0; i < n / 2; i++ {
        if string(palindrome[i]) != "a" {
            return palindrome[:i] + "a" + palindrome[i + 1:]
        }
    }
    
    if n > 1 {
        return strings.TrimSuffix(palindrome, "a") + "b"
    }
    
    return ""
}