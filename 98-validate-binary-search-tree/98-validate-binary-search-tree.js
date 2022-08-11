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
 * @return {boolean}
 */
var isValidBST = function(root, minVal = -Infinity, maxVal = Infinity) {
  return (
    (root.val > minVal && root.val < maxVal) &&
    (!root.left || isValidBST(root.left, minVal, root.val)) && 
    (!root.right || isValidBST(root.right, root.val, maxVal))
  );
};