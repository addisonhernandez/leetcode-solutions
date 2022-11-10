from itertools import groupby


class Solution:
    def removeDuplicates(self, s: str) -> str:
        """Naive O(n^2) recursive"""
        # for i, c in enumerate(s[1:]):
        #     if c == s[i]:
        #         return self.removeDuplicates(s[:i] + s[i + 2 :])
        # return s
        
        """O(n) using a stack"""
        res = []
        
        for c in s:
            if not res or c != res[-1]:
                res.append(c)
            else:
                res.pop()
        
        return "".join(res)