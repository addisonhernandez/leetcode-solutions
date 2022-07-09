func maxResult(nums []int, k int) int {
    var deq []int
    deq = append(deq, len(nums) - 1)
    
    for i := len(nums) - 2; i >= 0; i-- {
        if deq[0] - i > k {
            deq = deq[1:]
        }
        
        nums[i] += nums[deq[0]]
        
        for len(deq) > 0 && nums[deq[len(deq) - 1]] <= nums[i] {
            deq = deq[:len(deq) - 1]
        }
        
        deq = append(deq, i)
    }
    
    return nums[0]
}