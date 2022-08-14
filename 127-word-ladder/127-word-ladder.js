/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  const words = new Set(wordList);
  let wordQueue = [beginWord];
  let depth = 1;
  
  while (wordQueue.length > 0) {
    const nextQueue = [];
    
    for (const word of wordQueue) {
      if (word === endWord) {
        return depth;
      }
      for (let i = 0; i < word.length; i++) {
        for (const c of alphabet) {
          const guess = buildGuess(word, i, c);
          
          if (words.has(guess)) {
            nextQueue.push(guess);
            words.delete(guess);
          }
        }
      }
    }
    
    depth += 1;
    wordQueue = nextQueue;
  }
  
  return 0;
};

const buildGuess = (word, i, c) => word.slice(0, i) + c + word.slice(i + 1);