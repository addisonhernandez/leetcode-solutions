class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones.sort()

        while len(stones) > 1:
            *stones, x, y = stones
            if x != y:
                bisect.insort(stones, y - x)
            
        return stones[0] if stones else 0