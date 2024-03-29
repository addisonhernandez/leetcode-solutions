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
 * @return {string}
 */
var tree2str = function(root) {
    if (!root) {
        return ''
    }
    
    const repr = '' + root.val
    
    const left = root.left || root.right
        ? `(${tree2str(root.left)})`
        : ''
    const right = root.right
        ? `(${tree2str(root.right)})`
        : ''
    
    return repr + left + right
};