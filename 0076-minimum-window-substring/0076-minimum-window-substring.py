from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        n = len(t)

        t_counts = Counter(t)

        head, tail, i = 0, 0, 0

        for j, char in enumerate(s, 1):
            if t_counts[char] > 0:
                n -= 1
            t_counts[char] -= 1

            if n == 0:
                while i < j and t_counts[s[i]] < 0:
                    t_counts[s[i]] += 1
                    i += 1

                t_counts[s[i]] += 1
                n += 1

                if tail == 0 or j - i < tail - head:
                    head, tail = i, j

                i += 1

        return s[head:tail]
