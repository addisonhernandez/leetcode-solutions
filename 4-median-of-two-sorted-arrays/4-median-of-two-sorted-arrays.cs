public class Solution
{
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        if (nums1.Length > nums2.Length)
        {
            return FindMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.Length;
        int n = nums2.Length;
        int mid = (m + n) / 2;
        
        int lo = 0;
        int hi = m;
        
        while (lo <= hi)
        {
            int cut1 = (lo + hi) / 2;
            int cut2 = mid - cut1;
            
            int L1 = cut1 == 0 ? int.MinValue : nums1[cut1 - 1];
            int L2 = cut2 == 0 ? int.MinValue : nums2[cut2 - 1];
            
            int R1 = cut1 == m ? int.MaxValue : nums1[cut1];
            int R2 = cut2 == n ? int.MaxValue : nums2[cut2];
            
            if (L1 > R2) 
            {
                hi = cut1 - 1;
            } 
            else if (L2 > R1) 
            {
                lo = cut1 + 1;
            }
            else
            {
                return (
                    (m + n) % 2 == 0
                    ? (double)(Math.Max(L1, L2) + Math.Min(R1, R2)) / 2
                    : Math.Min(R1, R2));
            }
        }
        
        return -1.0;
    }
}

/*
  while (lo <= hi) {
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
*/