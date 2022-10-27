from collections import Counter


class Solution:
    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
        img1_indexes = [(i, j) for i, row in enumerate(img1) for j, pixel in enumerate(row) if pixel]
        img2_indexes = [(i, j) for i, row in enumerate(img2) for j, pixel in enumerate(row) if pixel]
        
        overlaps = Counter((i1 - i2, j1 - j2) for i1, j1 in img1_indexes for i2, j2 in img2_indexes)
        
        if not overlaps:
            return 0
        
        largest_overlap = overlaps.most_common(1)[0][1]
        return largest_overlap
