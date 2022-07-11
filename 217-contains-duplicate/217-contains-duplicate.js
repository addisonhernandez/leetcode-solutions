/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const seenNums = {};
  
  for (const num of nums) {
    if (seenNums[num]) 
      return true;
    
    seenNums[num] = true;
  }
  
  return false;   
};