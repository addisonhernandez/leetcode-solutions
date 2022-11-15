The height of a complete binary tree of `n` nodes can be found in `O( log(n) )` time.
​
In the best case scenario, every level is completely filled, and `countNodes` is never recursively called.
​
If the final level is not completely filled, then either the left subtree or the right subtree is guaranteed to be complete. As such, recursion on that subtree will terminate without spawning additional calls, significantly speeding up this algorithm.
​
Runtime will be on the order of `O( log(n) )` for each recursive call, and we will make `O( 2 * log(n) )` such calls narrowing down the smallest correct subtree.
Overall runtime is therefore on the order of `O( log(n) * log(n) )`