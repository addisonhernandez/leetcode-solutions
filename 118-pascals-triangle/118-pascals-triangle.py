class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        def generate_row(row: int) -> List[int]:
            res = [1]
            
            for i in range(1, row + 1):
                res.append(res[-1] * (row + 1 - i) // i)
            
            return res
        
        return [generate_row(r) for r in range(numRows)]