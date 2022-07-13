func makesquare(matchsticks []int) bool {
    var total int
    
    for _, stick := range matchsticks {
        total += stick
    }
    
    if total % 4 != 0 {
        return false
    }
    
    target := total / 4
    
    sort.Slice(matchsticks, func(i, j int) bool {
        return matchsticks[i] > matchsticks[j]
    })
    
    var assignSticks func(index, top, bot, left, right int) bool
    
    assignSticks = func(index, top, bot, left, right int) bool {
        if top == target && bot == target && left == target && right == target {
            return true
        }
        if top > target || bot > target || left > target || right > target {
            return false
        }
        
        nextStick := matchsticks[index]
        return assignSticks(index + 1, top + nextStick, bot, left, right) ||
            assignSticks(index + 1, top, bot + nextStick, left, right) ||
            assignSticks(index + 1, top, bot, left + nextStick, right) ||
            assignSticks(index + 1, top, bot, left, right + nextStick)
    }
    
    return assignSticks(0, 0, 0, 0, 0)
}