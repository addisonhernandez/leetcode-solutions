class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = re.sub(r"[^a-zA-Z0-9]", "", s).lower()
        
        for head, tail in zip(s, s[::-1]):
            if head != tail:
                return False
        
        return True