## Method:
​
Find the midpoint, and make that value the root.
​
Take the elements to the left of the midpoint and recursively build a BST, setting the root to node.left
​
Take the elements to the right of the midpoint and recursively build a BST, setting the root to node.right
​
Return the root node