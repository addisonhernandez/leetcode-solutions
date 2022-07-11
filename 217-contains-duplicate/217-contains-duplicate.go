func containsDuplicate(nums []int) bool {
    seenNums := make(map[int]bool)
    
    for _, num := range nums {
        if seenNums[num] {
            return true
        }
        seenNums[num] = true
    }
    
    return false
}