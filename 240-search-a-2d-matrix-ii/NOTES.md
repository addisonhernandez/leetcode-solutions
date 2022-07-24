## Approach
​
Start with the upper-right cell in the matrix.
​
If `target` is greater than the value in this cell, it cannot be in this row, since the row is sorted in ascending order, and this cell is the maximum value in the row.
​
if `target` is less than the value in this cell, it cannot be in this column, since the column is sorted in ascending order, and this cell is the minumum value in the column.
​
For each cell we consider, we can eliminate a row or column, or we find the `target`.
​
## Complexity Analysis
​
In the worst case, for an `m x n` matrix, we would consider all `m` rows and all `n` columns exactly once, for a time complexity of **O(m+n)**.
​
Two pointers are created to track the row and column indexes, for a space complexity of **O(1)**