function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }
  
  const m = nums1.length
  const n = nums2.length
  const mid = (m + n) >> 1 // integer divide by two
  
  let lo = 0
  let hi = m
  
  while (lo <= hi) {
    const cut1 = (lo + hi) >> 1
    const cut2 = mid - cut1
    
    const L1 = (cut1 == 0) ? -Infinity : nums1[cut1 - 1]
    const L2 = (cut2 == 0) ? -Infinity : nums2[cut2 - 1]
    
    const R1 = (cut1 == m) ? Infinity : nums1[cut1]
    const R2 = (cut2 == n) ? Infinity : nums2[cut2]
    
    if (L1 > R2) {
      hi = cut1 - 1
    } else if (L2 > R1) {
      lo = cut1 + 1
    } else {
      return ((m + n) % 2 === 0)
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.min(R1, R2)
    }
  }
  
  return -1;
};