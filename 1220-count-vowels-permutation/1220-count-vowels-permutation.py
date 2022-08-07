class Solution:
    def countVowelPermutation(self, n: int) -> int:
        modulus = 10**9 + 7
        
        # curr = [1] * 5
        # prev = [*curr]
        curr = {c:1 for c in "aeiou"}
        
        # while n > 1:
        for _ in range(1, n):
            prev = {**curr}
            curr["a"] = prev["e"] + prev["i"] + prev["u"]
            curr["e"] = prev["a"] + prev["i"]
            curr["i"] = prev["e"] + prev["o"]
            curr["o"] = prev["i"]
            curr["u"] = prev["i"] + prev["o"]
        
        return sum(curr.values()) % modulus