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

function goodNodes(root: TreeNode | null, pathMax: number = -Infinity): number {
  if (!root) {
    return 0;
  }
  
  return (root.val >= pathMax ? 1 : 0) +
    goodNodes(root.left, Math.max(root.val, pathMax)) +
    goodNodes(root.right, Math.max(root.val, pathMax));
};