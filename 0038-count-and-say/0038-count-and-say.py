from itertools import groupby


class Solution:
    def countAndSay(self, n: int) -> str:
        count_and_say = "1"

        for _ in range(n - 1):
            count_and_say = "".join(
                f"{len((*grp,))}{key}" for key, grp in groupby(count_and_say)
            )

        return count_and_say