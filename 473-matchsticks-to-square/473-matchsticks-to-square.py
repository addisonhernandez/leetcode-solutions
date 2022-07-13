class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        total = sum(matchsticks)
        
        target, rem = divmod(total, 4)
        
        if rem:
            return False
        
        matchsticks.sort(reverse=True)
        
        @cache
        def assign_sticks(index, top, bot, left, right) -> bool:
            nonlocal target
            
            sides = (top, bot, left, right)

            if all(side == target for side in sides):
                return True
            if any(side > target for side in sides):
                return False
            
            next_stick = matchsticks[index]
            
            top, bot, left, right = sorted(sides)
            
            return (
                assign_sticks(index + 1, top + next_stick, bot, left, right) or
                assign_sticks(index + 1, top, bot + next_stick, left, right) or
                assign_sticks(index + 1, top, bot, left + next_stick, right) or
                assign_sticks(index + 1, top, bot, left, right + next_stick)
            )
        
        return assign_sticks(0, 0, 0, 0, 0)
    