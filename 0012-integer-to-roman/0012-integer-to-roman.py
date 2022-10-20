class Solution:

    value_symbols = (
        (1, "I"),
        (4, "IV"),
        (5, "V"),
        (9, "IX"),
        (10, "X"),
        (40, "XL"),
        (50, "L"),
        (90, "XC"),
        (100, "C"),
        (400, "CD"),
        (500, "D"),
        (900, "CM"),
        (1000, "M"),
    )

    def intToRoman(self, num: int) -> str:
        chars = []

        for val, char in Solution.value_symbols[::-1]:
            while num >= val:
                chars.append(char)
                num -= val

        return "".join(chars)