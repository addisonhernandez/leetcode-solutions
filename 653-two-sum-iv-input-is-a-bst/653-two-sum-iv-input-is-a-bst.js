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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const cache = new Set();
    
    let level = [root];
    
    while (level.length > 0) {
        const nextLevel = [];
        
        for (const node of level) {
            if (cache.has(node.val)) {
                return true;
            }
            cache.add(k - node.val);
            
            node.left && nextLevel.push(node.left);
            node.right && nextLevel.push(node.right);
        }
        level = nextLevel;
    }
    return false;
};