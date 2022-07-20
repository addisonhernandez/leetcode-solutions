class Solution:
    def numMatchingSubseq(self, s: str, words: List[str]) -> int:
        word_dict = defaultdict(list)
        count = 0
        
        for w in words:
            word_dict[w[0]].append(w)
        
        for ch in s:
            if ch not in word_dict:
                continue
            for w in word_dict.pop(ch):
                if len(w) == 1:
                    count += 1
                else:
                    word_dict[w[1]].append(w[1:])
        
        return count