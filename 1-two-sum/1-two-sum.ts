/* Using a hashmap:
 *  iterate over `nums`
 *  if current num is in the map return map[num] and current index
 *  for each num, store in the hashmap ~> key: target - num | val: current index
 */
function twoSum(nums: number[], target: number): number[] {
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