import "sort"

func largestPerimeter(nums []int) int {
    // sort.Slice(nums, func(i, j int) bool { return nums[j] < nums[i] })
    sort.Ints(nums)
    
    // for i := 0; i < len(nums) - 2; i++ {
    for i := len(nums) - 1; i > 1; i-- {
        if nums[i] < nums[i-1] + nums[i-2] {
            return nums[i] + nums[i-1] + nums[i-2]
        }
    }
    
    return 0
}