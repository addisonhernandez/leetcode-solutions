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

function averageOfLevels(root: TreeNode | null): number[] {
  const levelSums = [];
  const levelCount = [];
  
  (function traverse(node: TreeNode, depth: number) {
    if (levelSums.length === depth) {
      levelSums.push(0);
      levelCount.push(0);
    }
    
    levelSums[depth] += node.val;
    levelCount[depth] += 1;
    
    node.left && traverse(node.left, depth + 1);
    node.right && traverse(node.right, depth + 1);
  })(root, 0);
  
  return levelSums.map((sum, i) => sum / levelCount[i]);
};