import "sort"

func lengthOfLIS(nums []int) int {
    seq := []int{nums[0]}
    
    for _, n := range nums[1:] {
        if n > seq[len(seq) - 1] {
            seq = append(seq, n)
        } else {
            seq[sort.SearchInts(seq, n)] = n
        }
    }
    
    return len(seq)
}