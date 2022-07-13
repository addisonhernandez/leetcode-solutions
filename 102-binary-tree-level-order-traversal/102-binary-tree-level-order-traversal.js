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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const levels = [];
  let queue = [];
  
  root && queue.push([root, 0]);
  
  while (queue.length) {
    const children = [];
    
    levels.push([])
    
    // handling an entire level at once alleviates the need for queue.shift()
    // which is an O(n) operation in JavaScript
    queue.forEach(([node, depth]) => {
      levels[depth].push(node.val);
      node.left && children.push([node.left, depth + 1]);
      node.right && children.push([node.right, depth + 1]);
    });
    
    queue = children;
  }
  
  return levels;
};