function containsDuplicate(nums: number[]): boolean {
  const seenNums = {};
  
  for (const num of nums) {
    if (seenNums[num]) 
      return true;
    
    seenNums[num] = true;
  }
  
  return false;
};