func searchRange(nums []int, target int) []int {
    if len(nums) == 0 {
        return []int{-1, -1}
    }
    
    head, tail := 0, len(nums) - 1
    res := make([]int, 2)
    
    // Find the first instance of the target.
    for head < tail {
        mid := (head + tail) / 2
        if target > nums[mid] {
            head = mid + 1
        } else {
            tail = mid
        }
    }
    if nums[head] == target {
        res[0] = head
    } else {
        return []int{-1, -1}
    }
    
    // Find the last instance of the target.
    tail = len(nums) - 1
    for head < tail {
        mid := (head + tail + 1) / 2
        if target < nums[mid] {
            tail = mid - 1
        } else {
            head = mid
        }
    }
    res[1] = tail
    
    return res
}