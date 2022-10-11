import "sort"

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)

	n := len(nums)

	threeSum := nums[n-1] + nums[n-2] + nums[n-3]
	if threeSum < target {
		return threeSum
	}

	threeSum = nums[0] + nums[1] + nums[2]
	if threeSum > target {
		return threeSum
	}

	minDiff := 1 << 31

	for i := 0; i < n-2; i++ {
		j := i + 1
		k := n - 1

		for j < k {
			sum := nums[i] + nums[j] + nums[k]
			diff := abs(target - sum)

			if diff < minDiff {
				minDiff = diff
				threeSum = sum
			}

			if sum < target {
				j += 1
			} else if sum > target {
				k -= 1
			} else {
				return sum
			}
		}
	}

	return threeSum
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}