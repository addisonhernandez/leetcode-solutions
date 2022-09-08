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
var inorderTraversal = function(root) {
    const traversal = []
    
    const traverse = function (node) {
        node.left && traverse(node.left)
        traversal.push(node.val)
        node.right && traverse(node.right)
    }
    
    root && traverse(root)
    
    return traversal
};