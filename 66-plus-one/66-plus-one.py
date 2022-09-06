class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 1
        
        for i in range(len(digits))[::-1]:
            if not carry:
                break
            carry, digits[i] = carry_add(carry, digits[i])
        
        return [1] + digits if carry else digits
    
    
def carry_add(a: int, b: int) -> Tuple[int, int]:
    sum = a + b
    carry = 1 if sum > 9 else 0
    return (carry, sum % 10)