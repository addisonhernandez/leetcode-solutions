class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # Ensure nums1 is shorter.
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1
        
        m, n = len(nums1), len(nums2)
        mid = (m + n) // 2
        
        lo = 0
        hi = m
        
        while lo <= hi:
            # Cut the shorter array, then derive the longer array cut index.
            cut1 = (lo + hi) // 2
            cut2 = mid - cut1
            
            # Values left of the cut.
            L1 = nums1[cut1 - 1] if cut1 != 0 else -inf
            L2 = nums2[cut2 - 1] if cut2 != 0 else -inf
            
            # Values right of the cut.
            R1 = nums1[cut1] if cut1 != m else inf
            R2 = nums2[cut2] if cut2 != n else inf
            
            # Binary search for the correct cut index.
            if L1 > R2:
                hi = cut1 - 1
            elif L2 > R1:
                lo = cut1 + 1
            else:
                if (m + n) % 2:
                    return min(R1, R2)
                return (max(L1, L2) + min(R1, R2)) / 2
        
        return -1