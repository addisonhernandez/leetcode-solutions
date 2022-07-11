func maxProfit(prices []int) int {
    minPrice, profit := prices[0], 0
    
    for _, price := range prices {
        if price < minPrice {
            minPrice = price
        } else if newProfit := price - minPrice; profit < newProfit {
            profit = newProfit
        }
    }
    return profit
}