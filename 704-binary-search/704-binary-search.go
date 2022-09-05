func search(nums []int, target int) int {
    head := 0
    tail := len(nums) - 1
    
    for head <= tail {
        mid := (head + tail) / 2
        
        if target < nums[mid] {
            tail = mid - 1
        } else if target > nums[mid] {
            head = mid + 1
        } else {
            return mid
        }
    }
    
    return -1
}