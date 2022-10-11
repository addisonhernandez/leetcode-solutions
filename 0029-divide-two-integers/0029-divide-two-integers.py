class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if dividend == -2147483648 and divisor == -1:
            return 2147483647
        if dividend < 0:
            return -self.divide(-dividend, divisor)
        if divisor < 0:
            return -self.divide(dividend, -divisor)
        
        quotient = 0
        
        for i in range(32)[::-1]:
            if dividend >> i >= divisor:
                quotient += 1 << i
                dividend -= divisor << i
        
        return quotient