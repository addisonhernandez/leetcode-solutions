from collections import deque
from typing import Deque, List, Set, Tuple

Step = Tuple[int, int, int]


class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])

        # If we can remove a tile from each row & col, take the shortest path
        if k > m - 1 + n - 1:
            return m - 1 + n - 1

        is_valid = lambda r, c: 0 <= r < m and 0 <= c < n
        offsets = ((-1, 0), (1, 0), (0, -1), (0, 1))

        deck: Deque[Step] = deque([(0, 0, k)])
        steps: Set[Step] = {(0, 0, k)}
        steps_taken = 0

        while deck:
            for _ in range(len(deck)):
                r, c, dels = deck.popleft()

                # If we reach the bottom right square
                if r == m - 1 and c == n - 1:
                    return steps_taken

                for dr, dc in offsets:
                    next_r, next_c = r + dr, c + dc
                    if not is_valid(next_r, next_c):
                        continue

                    next_dels = dels - grid[next_r][next_c]
                    next_step = (next_r, next_c, next_dels)

                    if next_dels >= 0 and next_step not in steps:
                        deck.append(next_step)
                        steps.add(next_step)

            steps_taken += 1

        return -1
