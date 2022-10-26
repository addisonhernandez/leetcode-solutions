func checkSubarraySum(nums []int, k int) bool {
	sum := 0
	sumIndexes := map[int]int{0: -1}

	for i, num := range nums {
		sum = (sum + num) % k

		if index, ok := sumIndexes[sum]; ok {
			if i-index >= 2 {
				return true
			}
		} else {
			sumIndexes[sum] = i
		}
	}

	return false
}