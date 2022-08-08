/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const oldLast = Array.prototype.last;
  Array.prototype.last = lastElem;
  
  const seq = [nums.shift()];
  
  nums.forEach((n) => {
    if (n > seq.last()) {
      seq.push(n);
    } else {
      seq[binarySearch(seq, n)] = n;
    }
  });
  
  Array.prototype.last = oldLast;
  return seq.length;
};

function lastElem() {
  return this[this.length - 1]
}

/**
 * @param {number[]} arr
 * @param {number} val
 * @returns {number}
 */
function binarySearch(arr, val) {
  let head = 0;
  let tail = arr.length - 1;
  
  while (head <= tail) {
    const mid = (head + tail) >> 1; // integer divide by two
    
    if (val < arr[mid]) {
      tail = mid - 1;
    } else if (val > arr[mid]) {
      head = mid + 1;
    } else {
      return mid;
    }
  }
  
  return head;
}