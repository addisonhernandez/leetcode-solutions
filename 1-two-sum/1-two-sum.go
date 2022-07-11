func twoSum(nums []int, target int) []int {
    partnerIndexes := map[int]int{}
    
    for i, num := range nums {
        if partner, ok := partnerIndexes[num]; ok {
            return []int{partner, i}
        }
        partnerIndexes[target - num] = i
    }
    
    return nil
}