/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const intervalNums = new Set()
  for (let i = 0; i < k && i < nums.length; i++) {
    if (intervalNums.has(nums[i])) {
      return true
    }
    intervalNums.add(nums[i])
  }

  for (let i = k; i < nums.length; i++) {
    if (intervalNums.has(nums[i])) {
      return true
    }
    intervalNums.add(nums[i])
    intervalNums.delete(nums[i - k])
  }

  return false
}

/*
create a set to track nums

add the first k nums to the set
  if a collision happens -> return true
  
iterate over nums[k] to the end
  remove num[i - k]
  add the num at current index i
  collision? -> true

return false
*/