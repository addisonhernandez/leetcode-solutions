function makesquare(matchsticks: number[]): boolean {
  const totalStickLength = matchsticks.reduce((sum, curr) => sum + curr, 0);
  
  if (totalStickLength % 4 !== 0) {
    return false;
  }
  
  matchsticks.sort((a, b) => b - a); // sort descending in-place
  
  const target = totalStickLength / 4;
  
  return (function assignSticks(
    index: number,
    top: number,
    bot: number,
    left: number,
    right: number
  ): boolean {
    const sides = [top, bot, left, right];
    if (sides.every((side) => side === target)) {
      return true;
    }
    if (sides.some((side) => side > target)) {
      return false;
    }

    const nextStick = matchsticks[index];

    return (
      assignSticks(index + 1, top + nextStick, bot, left, right) ||
      assignSticks(index + 1, top, bot + nextStick, left, right) ||
      assignSticks(index + 1, top, bot, left + nextStick, right) ||
      assignSticks(index + 1, top, bot, left, right + nextStick)
    );
  })(0, 0, 0, 0, 0);
};