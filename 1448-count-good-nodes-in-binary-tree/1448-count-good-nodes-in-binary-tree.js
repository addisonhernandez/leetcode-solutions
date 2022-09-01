/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root, max = -Infinity) {
  if (!root) {
    return 0;
  }
  
  return (root.val >= max) + 
    goodNodes(root.left, Math.max(root.val, max)) + 
    goodNodes(root.right, Math.max(root.val, max));
};