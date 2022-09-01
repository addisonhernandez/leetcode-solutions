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
var goodNodes = function(root) {
  let numGoods = 0;
  
  (function dfs(node, pathMax) {
    if (!node) {
      return;
    }
    
    if (node.val >= pathMax) {
      numGoods += 1;
      pathMax = node.val;
    }
    
    dfs(node.left, pathMax);
    dfs(node.right, pathMax);
  })(root, root.val);
  
  return numGoods;
};