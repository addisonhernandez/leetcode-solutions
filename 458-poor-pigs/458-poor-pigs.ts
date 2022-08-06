function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  const rounds = Math.floor(minutesToTest / minutesToDie)
  return Math.ceil(Math.log(buckets) / Math.log1p(rounds))
};