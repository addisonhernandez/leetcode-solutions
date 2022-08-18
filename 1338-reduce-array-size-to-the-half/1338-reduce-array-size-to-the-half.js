/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    const freqMap = {};
    
    arr.forEach((num) => {
        freqMap[num] = (freqMap[num] ?? 0) + 1;
    });
    
    const buckets = Array(arr.length + 1).fill(0);
    for (const freq of Object.values(freqMap)) {
        buckets[freq] += 1
    }
    
    const halfLen = arr.length >> 1; // integer divide by 2
    
    let removed = 0;
    let freq = arr.length;
    let result = 0;
    
    while (removed < halfLen) {
        result += 1;
        while (buckets[freq] === 0) {
            freq -= 1;
        }
        removed += freq;
        buckets[freq] -= 1;
    }
    
    return result;
};