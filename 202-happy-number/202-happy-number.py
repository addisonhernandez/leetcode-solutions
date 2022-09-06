class Solution:
    def isHappy(self, n: int) -> bool:
        history = set()
        
        while n > 1:
            n = sum_squared_digits(n)
            if n in history:
                return False
            history.add(n)
        
        return True
    
    
def sum_squared_digits(n: int) -> int:
    sum = 0
    while n > 0:
        n, digit = n // 10, n % 10
        sum += digit * digit
    return sum