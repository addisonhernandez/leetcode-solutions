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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0)
    return null;
  
  const mid = nums.length >> 1; // integer divide by two
  
  return new TreeNode(
    nums[mid],
    sortedArrayToBST(nums.slice(0, mid)),
    sortedArrayToBST(nums.slice(mid + 1))
  );
};