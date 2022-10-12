func reverse(x int) int {
    if x < 0 {
        return -reverse(-x)
    }
    max, min := (1 << 31) - 1, -(1 << 31)
    
    rev := 0
    
    for x > 0 {
        rev = (10 * rev) + (x % 10)
        if rev > max || rev < min {
            return 0
        }
        x /= 10
    }
    
    return rev
}