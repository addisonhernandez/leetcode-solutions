func minCost(colors string, neededTime []int) (total int) {
    maxTime := neededTime[0]
    
    for i := 1; i < len(colors); i++ {
        if colors[i] != colors[i - 1] {
            maxTime = 0
        }
        total += min(maxTime, neededTime[i])
        maxTime = max(maxTime, neededTime[i])
    }
    
    return
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}