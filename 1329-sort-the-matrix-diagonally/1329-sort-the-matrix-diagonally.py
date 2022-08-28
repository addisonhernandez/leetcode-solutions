class Solution:
    def diagonalSort(self, mat: List[List[int]]) -> List[List[int]]:
        # Build lists of diagonals
        diagonals = defaultdict(list)
        for i, row in enumerate(mat):
            for j, val in enumerate(row):
                diagonals[j - i].append(val)
        
        # Sort the diagonals
        for vals in diagonals.values():
            vals.sort(reverse=True)
        
        # re-insert diagonals into the matrix
        for i, row in enumerate(mat):
            for j, _ in enumerate(row):
                mat[i][j] = diagonals[j - i].pop()
        
        return mat