from functools import cache


class Solution:
    def getLengthOfOptimalCompression(self, s: str, k: int) -> int:
        inf = len(s) + 1
        
        @cache
        def RLE_length(i: int, prev_char: str, run_length: int, rem: int):
            """
            Find the min length of the RLE with `rem` chars to be deleted.
            
            Start at index `i`, keeping track of the previous char, and 
            the current length of the run.
            """
            
            if rem < 0:
                return inf
            
            if i == len(s):
                return 0
            
            if s[i] == prev_char:
                incr = 1 if run_length in (1, 9, 99) else 0
                return incr + RLE_length(i + 1, s[i], run_length + 1, rem)
            else:
                keep_length = 1 + RLE_length(i + 1, s[i], 1, rem)
                dele_length = RLE_length(i + 1, prev_char, run_length, rem - 1)
                return min(keep_length, dele_length)
        
        return RLE_length(0, "", 0, k)