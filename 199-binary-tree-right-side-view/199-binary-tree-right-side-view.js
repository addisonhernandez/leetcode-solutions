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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const visibleNodes = [];
  const queue = [];
  
  root && queue.push([root, 0]);
  
  while (queue.length) {
    const [node, depth] = queue.shift();
    
    visibleNodes[depth] = node.val;
    
    node.left && queue.push([node.left, depth + 1]);
    node.right && queue.push([node.right, depth + 1]);
  }
  
  return visibleNodes;
};