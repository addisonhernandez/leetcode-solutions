const INT_MIN = 1 << 31
const INT_MAX = ~(1 << 31)

const charToInt = {}
for (let i = 0; i <= 9; i++) {
  charToInt[i] = i
}

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let i = 0
  let sign = 1
  let result = 0

  // Read in and ignore any leading whitespace.
  while (i < s.length && s[i] === ' ') {
    i++
  }

  // Check if the next character (if not already at the end of the string) is '-' or '+'.
  if (s[i] === '-') {
    sign = -1
    i++
  } else if (s[i] === '+') {
    i++
  }

  // Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
  while (charToInt.hasOwnProperty(s[i])) {
    result = 10 * result + charToInt[s[i]]
    i++
  }

  // If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range.
  result = Math.max(sign * result, INT_MIN)
  result = Math.min(result, INT_MAX)

  // Return the integer as the final result.
  return result
};