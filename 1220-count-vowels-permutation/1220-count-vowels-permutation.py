class Solution:
    def countVowelPermutation(self, n: int) -> int:
        modulus = 10**9 + 7
        
        a, e, i, o, u = 1, 1, 1, 1, 1
        
        for _ in range(1, n):
            a, e, i, o, u = (e + i + u), (a + i), (e + o), i, (i + o)
        
        return sum((a, e, i, o, u)) % modulus