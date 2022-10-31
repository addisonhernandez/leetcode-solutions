from collections import defaultdict
from typing import List


class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:
        diags = defaultdict(set)

        for i, row in enumerate(matrix):
            for j, num in enumerate(row):
                diags[j - i].add(num)
                if len(diags[j - i]) > 1:
                    return False

        return True