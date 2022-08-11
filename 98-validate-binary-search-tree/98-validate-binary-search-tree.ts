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

function isValidBST(root: TreeNode | null, minVal: number = -Infinity, maxVal: number = Infinity): boolean {
  return (
    (root.val > minVal && root.val < maxVal) &&
    (!root.left || isValidBST(root.left, minVal, root.val)) && 
    (!root.right || isValidBST(root.right, root.val, maxVal))
  );
};