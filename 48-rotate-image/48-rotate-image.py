class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m = len(matrix) - 1
        
        def swap(i: int, j: int):
            a, b, c, d = matrix[i][j], matrix[j][m - i], matrix[m - i][m - j], matrix[m - j][i]
            matrix[i][j], matrix[j][m - i], matrix[m - i][m - j], matrix[m - j][i] = d, a, b, c
        
        for i in range(m):
            for j in range(i, m - i):
                swap(i, j)
