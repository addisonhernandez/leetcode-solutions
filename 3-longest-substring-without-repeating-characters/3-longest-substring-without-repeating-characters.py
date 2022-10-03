class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        counts = defaultdict(int)
        head = tail = 0
        maxlen = 0
        
        for c in s:
            counts[c] += 1
            tail += 1
            while counts[c] > 1:
                counts[s[head]] -= 1
                head += 1
            maxlen = max(maxlen, tail - head)
        
        return maxlen