func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    if len(nums1) > len(nums2) {
        nums1, nums2 = nums2, nums1
    }
    
    m, n := len(nums1), len(nums2)
    mid := (m + n) / 2
    
    getLsAndRs := func (cut1, cut2 int) (L1, L2, R1, R2 int) {
        inf := int(1e6) + 1
        L1, R1 = -inf, inf
        L2, R2 = -inf, inf
        
        if cut1 != 0 {
            L1 = nums1[cut1 - 1]
        }
        if cut2 != 0 {
            L2 = nums2[cut2 - 1]
        }
        if cut1 != m {
            R1 = nums1[cut1]
        }
        if cut2 != n {
            R2 = nums2[cut2]
        }
        return
    }
    
    lo := 0
    hi := m
    
    for lo <= hi {
        cut1 := (lo + hi) / 2
        cut2 := mid - cut1
        
        L1, L2, R1, R2 := getLsAndRs(cut1, cut2)
        
        if L1 > R2 {
            hi = cut1 - 1
        } else if L2 > R1 {
            lo = cut1 + 1
        } else {
            if (m + n) % 2 != 0 {
                return min(R1, R2)
            }
            return (max(L1, L2) + min(R1, R2)) / 2
        }
    }
    
    return -1.
}

func min(a, b int) float64 {
    if a < b {
        return float64(a)
    }
    return float64(b)
}

func max(a, b int) float64 {
    if a > b {
        return float64(a)
    }
    return float64(b)
}