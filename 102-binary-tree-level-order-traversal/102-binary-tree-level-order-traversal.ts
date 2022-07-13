/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const levels = [];
  let queue = [];
  
  root && queue.push([root, 0]);
  
  while (queue.length) {
    // handling an entire level at once alleviates the need for queue.shift()
    // which is an O(n) operation in JS/TS
    const children = [];
    
    levels.push([])
    
    queue.forEach(([node, depth]) => {
      levels[depth].push(node.val);
      node.left && children.push([node.left, depth + 1]);
      node.right && children.push([node.right, depth + 1]);
    });
    
    queue = children;
  }
  
  return levels;
};