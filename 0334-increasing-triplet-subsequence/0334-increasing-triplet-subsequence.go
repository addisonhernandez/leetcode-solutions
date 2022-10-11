func increasingTriplet(nums []int) bool {
    low := 1 << 31;
    mid := 1 << 31;
    
    for _, n := range nums {
        if n <= low {
            low = n
        } else if n <= mid {
            mid = n
        } else {
            return true
        }
    }
    
    return false
}