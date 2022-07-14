## 105. Construct Binary Tree from Preorder and Inorder Traversal
​
**`preorder`**: root -> left -> right
​
**`inorder`**: left -> root -> right
​
### Approach
​
Take the first value of `preorder` as the root of the current tree.
Locate that value in `inorder`, and split the array. Elements to the left of the root value in `inorder` will belong to the left subtree, and elements to the right belong to the right subtree.
Recursively call `buildTree` to construct the left and right subtrees.
Return a new tree with the root value, left subtree, and right subtree.
​
### Time and Space Complexity
​
This function will be recursively called once for each node, with a maximum recursion depth of N (where N is the number of elements in `preorder` or `inorder`). This gives a space complexity of **O(N)** extra space.
​
Each recursive call will shift from the head of `preorder`, and search for the root in `inorder`, both linear time operations. With a maximum recursion depth of N, and each recursive call on the order N, time complexity is on the order **O(N^2)**