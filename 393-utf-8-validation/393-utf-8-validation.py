class Solution:
    def validUtf8(self, data: List[int]) -> bool:
        nums = iter(data)
        
        for n in nums:
            try:
                bitlength = parse_prefix(n)
                for _ in range(bitlength):
                    if not valid_byte(next(nums)):
                        return False
            except:
                return False
                    
        return True
    

def valid_byte(n: int) -> bool:
    return n >> 6 == 2


def parse_prefix(n: int) -> int:
    """
     Number of Bytes |   UTF-8 Octet Sequence (binary)
    -----------------+------------------------------------
            1        | 0xxxxxxx
            2        | 110xxxxx 10xxxxxx
            3        | 1110xxxx 10xxxxxx 10xxxxxx
            4        | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
    """
    if n >> 7 == 0:
        return 0
    if n >> 5 == 6:  # 0b110
        return 1
    if n >> 4 == 14:  # 0b1110
        return 2
    if n >> 3 == 30:  # 0b11110
        return 3
    raise ValueError