func containsNearbyDuplicate(nums []int, k int) bool {
	seen := map[int]struct{}{}

	for i, num := range nums {
		if _, exists := seen[num]; exists {
			return true
		}
		seen[num] = struct{}{}
		if i >= k {
			delete(seen, nums[i-k])
		}
	}

	return false
}
