class Solution:
    def numSplits(self, s: str) -> int:
        left = Counter()
        right = Counter(s)
        
        splits = 0
        
        for c in s:
            right[c] -= 1
            left[c] += 1
            
            if right[c] == 0:
                del right[c]
            
            if len(left) == len(right):
                splits += 1
        
        return splits