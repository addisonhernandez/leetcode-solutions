/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
  let total = 0;
  let maxTime = 0;
  
  neededTime.forEach(function (time, i) {
    if (i > 0 && colors[i] !== colors[i - 1]) {
      maxTime = 0;
    }
    total += Math.min(maxTime, time);
    maxTime = Math.max(maxTime, time);
  });
  
  return total;
};