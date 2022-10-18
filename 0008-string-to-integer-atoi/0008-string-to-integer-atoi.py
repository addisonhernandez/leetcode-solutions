class Solution:

    INT_MIN = -(1 << 31)
    INT_MAX = (1 << 31) - 1

    char_to_int = {f"{i}": i for i in range(10)}

    def myAtoi(self, s: str) -> int:
        res = 0

        i = 0
        sign = 1

        try:
            while s[i] == " ":
                i += 1

            if s[i] == "-":
                sign = -1
                i += 1
            elif s[i] == "+":
                i += 1

            while s[i] in Solution.char_to_int:
                res = 10 * res + Solution.char_to_int[s[i]]
                i += 1
        except IndexError:
            pass

        res = max(sign * res, self.INT_MIN)
        res = min(res, self.INT_MAX)

        return res
