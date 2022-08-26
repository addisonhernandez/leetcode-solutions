class Solution:
    digitsOfPowersOfTwo = [sorted(str(1 << num)) for num in range(32)]
    
    def reorderedPowerOf2(self, n: int) -> bool:
        return sorted(str(n)) in self.digitsOfPowersOfTwo