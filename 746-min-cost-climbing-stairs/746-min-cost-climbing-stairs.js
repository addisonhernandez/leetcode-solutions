/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const costToStep = _.memoize(
    /**
     * @param {number} index
     * @returns {number}
     */
    function findCost(index) {
      if (index < 2) {
        return cost[index];
      }

      return cost[index] + Math.min(costToStep(index - 2), costToStep(index - 1));
    }
  );
  
  return Math.min(costToStep(cost.length - 2), costToStep(cost.length - 1));
};
