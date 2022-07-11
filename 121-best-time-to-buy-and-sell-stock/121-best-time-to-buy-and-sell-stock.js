/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let profit = 0;
  
  prices.forEach(function (price) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      profit = Math.max(profit, price - minPrice);
    }
  });
  
  return profit;
};