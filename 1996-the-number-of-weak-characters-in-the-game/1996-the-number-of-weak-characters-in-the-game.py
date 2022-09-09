class Solution:
    def numberOfWeakCharacters(self, properties: List[List[int]]) -> int:
        properties.sort(key = lambda pair: (-pair[0], pair[1]))
        
        weak_count = 0
        max_def = 0
        
        for _, d in properties:
            if d < max_def:
                weak_count += 1
            else:
                max_def = d
        
        return weak_count
        