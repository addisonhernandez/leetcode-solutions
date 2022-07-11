// Single Pass
function maxProfit(prices: number[]): number {
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