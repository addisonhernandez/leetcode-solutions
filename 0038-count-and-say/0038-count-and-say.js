/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let res = '1'

  for (let i = 1; i < n; i++) {
    res = [...group(res)].join('')
  }

  return res
}

/**
 * @generator
 * @param {string} s
 * @yield {string}
 */
const group = function* (s) {
  let i = 0

  while (i < s.length) {
    let c = s[i]
    let count = 0

    while (c === s[i]) {
      count += 1
      i += 1
    }

    yield '' + count + c
  }
}