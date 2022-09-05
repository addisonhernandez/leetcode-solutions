/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let head = 0
  let tail = nums.length - 1
  
  while (head <= tail) {
    const mid = (head + tail) >> 1 // integer divide by two
    
    if (target < nums[mid]) {
      tail = mid - 1
    } else if (target > nums[mid]) {
      head = mid + 1
    } else {
      return mid
    }
  }
  
  return -1
};