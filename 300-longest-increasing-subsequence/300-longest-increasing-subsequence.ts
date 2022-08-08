function lengthOfLIS(nums: number[]): number {
  const seq = [nums.shift()];
  
  nums.forEach((n) => {
    if (n > seq[seq.length - 1]) {
      seq.push(n);
    } else {
      seq[binarySearch(seq, n)] = n;
    }
  });
  
  return seq.length;
};

function binarySearch(arr: number[], val: number): number {
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