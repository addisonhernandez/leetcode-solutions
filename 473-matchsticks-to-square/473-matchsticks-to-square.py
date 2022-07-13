class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        total_stick_length = sum(stick for stick in matchsticks)
        
        target, rem = divmod(total_stick_length, 4)
        
        if rem:
            return False
        
        matchsticks.sort(reverse=True)
        
        @cache
        def assign_sticks(index, top, bot, left, right) -> bool:
            nonlocal target
            
            if top == bot == left == right == target:
                return True
            if any(side > target for side in (top, bot, left, right)):
                return False
            
            next_stick = matchsticks[index]
            
            return (
                assign_sticks(index + 1, top + next_stick, bot, left, right) or
                assign_sticks(index + 1, top, bot + next_stick, left, right) or
                assign_sticks(index + 1, top, bot, left + next_stick, right) or
                assign_sticks(index + 1, top, bot, left, right + next_stick)
            )
        
        return assign_sticks(0, 0, 0, 0, 0)
    