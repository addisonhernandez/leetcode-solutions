function minCost(colors: string, neededTime: number[]): number {
  let total = 0
  let maxTime = neededTime[0]
  
  for (let i = 1; i < colors.length; i++) {
    if (colors[i] != colors[i - 1]) {
      maxTime = 0
    }
    total += Math.min(maxTime, neededTime[i])
    maxTime = Math.max(maxTime, neededTime[i])
  }
  
  return total
};