class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k > 1:
            return "".join(sorted(s))

        # https://en.wikipedia.org/wiki/Lexicographically_minimal_string_rotation#Booth's_Algorithm
        s += s
        n = len(s)
        f = [-1] * n  # futures skip table from KMP
        k = 0  # start index of min lexical string

        for j in range(1, n):
            i = f[j - k - 1]
            while i != -1 and s[j] != s[k + i + 1]:
                if s[j] < s[k + i + 1]:
                    k = j - i - 1
                i = f[i]
            if i == -1 and s[j] != s[k + i + 1]:
                if s[j] < s[k + i + 1]:
                    k = j
                f[j - k] = -1
            else:
                f[j - k] = i + 1

        return s[k : k + n // 2]