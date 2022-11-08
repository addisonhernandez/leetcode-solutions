class Solution:
    uppercase_dist = ord("a") - ord("A")

    def makeGood(self, s: str) -> str:
        for i, char in enumerate(s[:-1], 1):
            if char_dist(char, s[i]) == self.uppercase_dist:
                return self.makeGood(s[: i - 1] + s[i + 1 :])

        return s


def char_dist(a: str, b: str) -> int:
    return abs(ord(a) - ord(b))