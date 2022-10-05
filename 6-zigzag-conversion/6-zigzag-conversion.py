class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        
        rows = [[] for _ in range(numRows)]
        
        r, dr = 0, -1
        
        for c in s:
            rows[r].append(c)
            
            if r == 0 or r == numRows - 1:
                dr = -dr
            
            r += dr
        
        return ''.join(''.join(row) for row in rows)