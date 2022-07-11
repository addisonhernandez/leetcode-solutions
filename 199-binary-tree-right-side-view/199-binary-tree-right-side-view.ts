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

function rightSideView(root: TreeNode | null): number[] {
  const visibleNodes: number[] = [];
  
//  === BFS ===
//   const queue = [];
  
//   root && queue.push([root, 0]);
  
//   while (queue.length) {
//     // A real queue would have O(1) shift (dequeue),
//     // but JS Arrays have O(n) shift ¯\_(ツ)_/¯
//     const [node, depth] = queue.shift();
    
//     visibleNodes[depth] = node.val;
    
//     node.left && queue.push([node.left, depth + 1]);
//     node.right && queue.push([node.right, depth + 1]);
//   }
  
//  === DFS ===
  (function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }
    
    visibleNodes[depth] = node.val;
    
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  })(root, 0);
  
  return visibleNodes;
};