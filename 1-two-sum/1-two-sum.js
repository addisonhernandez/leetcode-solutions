/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const partnerIndexes = {};
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    
    if (partnerIndexes.hasOwnProperty(num)) {
      return [partnerIndexes[num], i];
    }
    
    partnerIndexes[target - num] = i;
  }
  
  return null;
};