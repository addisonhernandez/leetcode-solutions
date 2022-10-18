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

  // Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
  if (s[i] === '-') {
    sign = -1
    i++
  } else if (s[i] === '+') {
    i++
  }

  // Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
  // Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
  while (charToInt.hasOwnProperty(s[i])) {
    result = 10 * result + charToInt[s[i]]
    i++
  }

  // If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -2^31 should be clamped to -2^31, and integers greater than 231 - 1 should be clamped to 231 - 1.
  result = Math.max(sign * result, INT_MIN)
  result = Math.min(result, INT_MAX)

  // Return the integer as the final result.
  return result
};