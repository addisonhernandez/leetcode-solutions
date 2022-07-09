/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
  /* Brute Force *
  const currIndex = arguments[2] || 0;
  
  if (currIndex >= nums.length - 1) {
    return nums[nums.length - 1];
  }
  
  let score = -Infinity;
  
  for (let jump = 1; jump <= k; jump++) {
    // this can be improved by memoizing maxResult
    score = Math.max(score, nums[currIndex] + maxResult(nums, k, currIndex + jump));
  }
  return score;
  //*/
  
  /* Bottom-Up DP: Tabulation *
  const results = Array(nums.length).fill(-Infinity);
  
  results[0] = nums[0];
  
  nums.forEach((num, i) => {
    for (let j = 1; j <= k && i - j >= 0; j++) {
      results[i] = Math.max(results[i], results[i - j] + num);
    }
  });
  
  return results.pop()
  //*/
  
  /* Using a deque - Sad JavaScript has slow shift() :( */
  const oldLast = Array.prototype.last;
  Array.prototype.last = function() { return this[this.length - 1]; }
  
  const deq = [nums.length - 1]
  
  for (let i = nums.length - 2; i >= 0; i--) {
    if (deq[0] - i > k) {
      deq.shift();
    }
    nums[i] += nums[deq[0]];
    
    while (deq.length && nums[deq.last()] <= nums[i]) {
      deq.pop();
    }
    
    deq.push(i);
  }
  
  return nums[0]
};

const memoize = function (func) {
  const cache = {};
  
  return function (...args) {
    const key = JSON.stringify(args);
    
    if (!cache.hasOwnProperty(key)) {
      cache[key] = func(...args);
    }
    
    return cache[key];
  }
}