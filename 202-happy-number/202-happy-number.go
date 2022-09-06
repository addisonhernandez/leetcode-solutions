/* 
Happy number
- start with pos int
- replace number with sum of square of digits
- repeat until the number is 1 (where it stays), or it loops in a cycle that never reaches 1
- if we reach 1 -> The number is happy
*/

func isHappy(n int) bool {
    history := make(map[int]bool)
    
    for n > 1 {
        n = sumOfSquaredDigits(n)
        if history[n] {
            return false
        }
        history[n] = true
    }
    
    return true
}

func sumOfSquaredDigits(n int) (sum int) {
    var digit int
    for n > 0 {
        n, digit = n / 10, n % 10
        sum += digit * digit
    }
    return
}