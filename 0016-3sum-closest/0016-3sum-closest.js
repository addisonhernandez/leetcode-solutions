/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    
    let threeSum = nums[n - 1] + nums[n - 2] + nums[n - 3];
    if (threeSum < target) {
        return threeSum;
    }
    
    threeSum = nums[0] + nums[1] + nums[2];
    if (threeSum > target) {
        return threeSum;
    }
    
    let minDiff = Infinity;
    
    for (let i = 0; i < n - 2; i++) {
        let j = i + 1;
        let k = n - 1;
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            let diff = Math.abs(target - sum);
            
            if (diff < minDiff) {
                diff = minDiff;
                threeSum = sum;
            }
            
            if (sum < target) {
                j += 1;
            } else if (sum > target) {
                k -= 1;
            } else {
                return sum;
            }
        }
    }
    
    return threeSum
};
