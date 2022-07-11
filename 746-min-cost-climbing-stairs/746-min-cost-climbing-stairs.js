/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
//   === Memoization ===
//   const costToStep = _.memoize(
//     /**
//      * @param {number} i
//      * @returns {number}
//      */
//     function (i) {
//       if (i < 2) {
//         return cost[i];
//       }
//       return cost[i] + Math.min(costToStep(i - 2), costToStep(i - 1));
//     }
//   );
//   return Math.min(costToStep(cost.length - 2), costToStep(cost.length - 1));
  
//  === Tabulation ===
  const n = cost.length
  let costToStep = Array(n).fill(0);
  
  costToStep[0] = cost[0];
  costToStep[1] = cost[1];
  
  for (let i = 2; i < n; i++) {
    costToStep[i] = cost[i] + Math.min(costToStep[i - 1], costToStep[i - 2]);
  }
  
  return Math.min(costToStep[n - 2], costToStep[n - 1]);
};
