function search(nums: number[], target: number): number {
  let head = 0
  let tail = nums.length - 1
  
  while (head <= tail) {
    const mid = (head + tail) >> 1
    
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