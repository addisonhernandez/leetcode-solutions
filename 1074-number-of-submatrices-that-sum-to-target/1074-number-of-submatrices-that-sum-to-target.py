class Solution:
    def numSubmatrixSumTarget(self, matrix: List[List[int]], target: int) -> int:
        res = 0
        m, n = len(matrix), len(matrix[0])
        
        # Calculate the prefix sums
        for row in matrix:
            for col in range(n - 1):
                row[col + 1] += row[col]

        # Find submatrix sums
        for col_start in range(n):
            for col_end in range(col_start, n):
                m_counts = defaultdict(int)
                cur_sum = 0
                m_counts[0] = 1
                
                for row in range(m):
                    cur_sum += matrix[row][col_end] - (matrix[row][col_start - 1] if col_start > 0 else 0)
                    res += m_counts[cur_sum - target]
                    m_counts[cur_sum] += 1
                    
        return res