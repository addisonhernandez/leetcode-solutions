func numsSameConsecDiff(n int, k int) []int {
    nums := []int{1, 2, 3, 4, 5, 6, 7, 8, 9}
    
    for i := 1; i < n; i++ {
        nextNums := make([]int, 0, len(nums))
        
        for _, num := range nums {
            if plusK := (num % 10) + k; plusK < 10 {
                nextNums = append(nextNums, 10 * num + plusK)
            }
            if lessK := (num % 10) - k; lessK >= 0 && k != 0 {
                nextNums = append(nextNums, 10 * num + lessK)
            }
        }
        
        nums = nextNums
    }
    
    return nums
}