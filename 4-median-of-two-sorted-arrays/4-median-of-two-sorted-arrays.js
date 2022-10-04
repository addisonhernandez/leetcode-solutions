/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  
  var m = nums1.length;
  var n = nums2.length;
  
  var mid = (m + n) >> 1; // integer divide by two
  
  var lo = 0;
  var hi = m;
  
  var cut1, cut2, L1, L2, R1, R2;
  
  while (lo <= hi) {
    cut1 = (lo + hi) >> 1;
    cut2 = mid - cut1;
    
    L1 = (cut1 == 0) ? -Infinity : nums1[cut1 - 1];
    L2 = (cut2 == 0) ? -Infinity : nums2[cut2 - 1];
    
    R1 = (cut1 == m) ? Infinity : nums1[cut1];
    R2 = (cut2 == n) ? Infinity : nums2[cut2];
    
    if (L1 > R2) {
      hi = cut1 - 1;
    } else if (L2 > R1) {
      lo = cut1 + 1
    } else {
      return ((m + n) % 2 === 0)
        ? (Math.max(L1, L2) + Math.min(R1, R2)) / 2
        : Math.min(R1, R2)
    }
  }
  
  return -1
};
/*
      # Binary search for the correct cut index.
      if L1 > R2:
          hi = cut1 - 1
      elif L2 > R1:
          lo = cut1 + 1
      else:
          if (m + n) % 2:
              return min(R1, R2)
          return (max(L1, L2) + min(R1, R2)) / 2
  */