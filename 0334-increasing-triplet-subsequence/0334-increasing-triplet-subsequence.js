/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let low = Infinity;
    let mid = Infinity;
    
    for (const n of nums) {
        if (n <= low) {
            low = n;
        } else if (n <= mid) {
            mid = n;
        } else {
            return true;
        }
    }
    
    return false;
};