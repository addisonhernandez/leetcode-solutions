# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        lo, hi = 1, n
        
        while hi >= lo:
            mid = (hi + lo) // 2
            g = guess(mid)
            
            if g < 0:
                hi = mid - 1
            elif g > 0:
                lo = mid + 1
            else:
                return mid
        
        raise ValueError(f"Value not found in range [1..{n}]")
