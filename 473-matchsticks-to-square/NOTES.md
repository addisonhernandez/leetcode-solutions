# 473. Matchsticks to Square
​
## Approach
This is a recursive backtracking approach. For each stick in `matchsticks`, attempt to place the stick on the top, bottom, left, or right side, and check if a valid square is built.
​
A valid square is found when all sides are equal to one quarter of the sum of all stick lengths.
​
### Optimizations
1. If the sum of the lengths of all matchsticks is not evenly divisible by four, there is no way to construct a square without breaking matches (which we cannot do!).
2. Since we know the target length for each side (sum of all matchstick lengths / 4), if any side grows longer than that target length we've failed to build a valid square.
3. In order to fail early and prevent trying unnecessary combinations, use the longest matchsticks first by sorting the matchstick array in descending order.
4. Use short-circuit logic wherever possible to prevent enumerating unnecessary combinations.
​
## Complexity
In the theoretical worst case, we're generating all subsets of N members (where N is the number of matchsticks in the input) and doing it four times, leaving us with exponential time complexity **O(4^N)**, though the optimization strategies prune the decision tree significantly.
​
The maximum depth of recursion occurs when all N matchsticks have been assigned, using **O(N)** extra space for recursive stack frames.