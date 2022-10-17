from string import ascii_lowercase


class Solution:
    alphaset = {*ascii_lowercase}
    
    def checkIfPangram(self, sentence: str) -> bool:
        return {*sentence.lower()} == self.alphaset