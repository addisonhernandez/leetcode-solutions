/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
const arrayStringsAreEqual = function (word1, word2) {
  const chars1 = yieldChars(word1)
  const chars2 = yieldChars(word2)

  let c1 = chars1.next()
  let c2 = chars2.next()

  while (!c1.done && !c2.done) {
    if (c1.value != c2.value) {
      return false
    }
    c1 = chars1.next()
    c2 = chars2.next()
  }

  return c1.done && c2.done
}

/**
 * @generator
 * @param {string[]} wordlist
 * @yield {string}
 */
const yieldChars = function* (wordlist) {
  for (const word of wordlist) {
    for (const char of word) {
      yield char
    }
  }
}