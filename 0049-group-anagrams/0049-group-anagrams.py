from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)
        
        for s in strs:
            anagrams[count_sort(s)].append(s)
            
        return [*anagrams.values()]

    
def count_sort(s: str) -> Tuple[int]:
    ord_a = ord("a")
    char_counts = [0] * 26
    
    for c in s:
        char_counts[ord(c) - ord_a] += 1
        
    return *char_counts,
