/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  for (let i = 1; i < n; i++) {
    const nextNums = []

    nums.forEach((num) => {
      const leastDigit = num % 10
      if (leastDigit + k < 10) {
        nextNums.push(10 * num + leastDigit + k)
      }
      if (leastDigit >= k && k !== 0) {
        nextNums.push(10 * num + leastDigit - k)
      }
    })

    nums = nextNums
  }

  return nums
};