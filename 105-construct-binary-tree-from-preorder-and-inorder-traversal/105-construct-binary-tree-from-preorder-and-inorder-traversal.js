/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  
  const rootValue = preorder.shift();
  const inorderRootIndex = inorder.indexOf(rootValue);
  
  const leftSubTree = inorder.slice(0, inorderRootIndex);
  const rightSubTree = inorder.slice(inorderRootIndex + 1);
  
  const leftChild = leftSubTree.length > 0 
    ? buildTree(preorder, leftSubTree)
    : null;
  const rightChild = rightSubTree.length > 0
    ? buildTree(preorder, rightSubTree)
    : null;
  
  return new TreeNode(rootValue, leftChild, rightChild);
};