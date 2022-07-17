class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {
            ")": "(",
            "]": "[",
            "}": "{",
        }
        parens = []
        
        for char in s:
            if char in pairs:
                if len(parens) == 0 or pairs[char] != parens.pop():
                    return False
            else:
                parens.append(char)
        
        return len(parens) == 0