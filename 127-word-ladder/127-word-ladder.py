class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        words = set(wordList)
        q = deque([(beginWord, 1)])

        while q:
            word, depth = q.popleft()
            
            if word == endWord:
                return depth
            
            for guess in (
                ''.join((word[:i], c, word[i + 1:])) 
                for i in range(len(word)) 
                for c in ascii_lowercase
            ):
                if guess in words:
                    q.append((guess, depth + 1))
                    words.remove(guess)
        
        return 0