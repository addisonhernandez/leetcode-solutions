/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const head = [];
  const tail = [];
  
  let start = newInterval[0];
  let end = newInterval[1];
  
  intervals.forEach(function (i) {
    if (start > i[1]) {
      head.push(i);
    } else if (end < i[0]) {
      tail.push(i);
    } else {
      start = Math.min(start, i[0]);
      end = Math.max(end, i[1]);
    }
  });
  
  return Array.prototype.concat.call(head, [[start, end]], tail);
};