func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
    rounds := minutesToTest / minutesToDie
    
    pigs := math.Ceil(math.Log(float64(buckets)) / math.Log1p(float64(rounds)))
    
    return int(pigs)
}