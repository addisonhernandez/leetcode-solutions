from functools import cache
from typing import FrozenSet, List


class Solution:
    def maxLength(self, arr: List[str]) -> int:
        arr = [chars for chars in arr if len(chars) == len({*chars})]

        # Memoized top-down
        @cache
        def concatenate(used_chars: FrozenSet[str], i: int) -> int:
            if i == len(arr):
                return len(used_chars)

            if used_chars.isdisjoint(arr[i]):
                return max(
                    concatenate(used_chars.union(arr[i]), i + 1),
                    concatenate(used_chars, i + 1),
                )

            return concatenate(used_chars, i + 1)

        return concatenate(frozenset(), 0)
