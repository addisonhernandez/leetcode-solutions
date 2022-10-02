function insert(intervals: number[][], newInterval: number[]): number[][] {
  const head: number[][] = []
  const tail: number[][] = []
  
  let [start, end] = newInterval
  
  intervals.forEach((i) => {
    if (start > i[1]) {
      head.push(i)
    } else if (end < i[0]) {
      tail.push(i)
    } else {
      start = Math.min(start, i[0])
      end = Math.max(end, i[1])
    }
  });
  
  return [...head, [start, end], ...tail]
};