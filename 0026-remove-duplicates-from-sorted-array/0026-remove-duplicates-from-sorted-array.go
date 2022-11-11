func removeDuplicates(nums []int) int {
    k := 1
    
    for _, n := range nums {
        if n > nums[k-1] {
            nums[k] = n
            k += 1
        }
    }
    
    return k
}