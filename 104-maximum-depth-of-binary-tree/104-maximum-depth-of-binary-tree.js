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
 * @return {number}
 */
var maxDepth = function(root) {
    // return dfs(root, 0)
    return bfs(root)
};

function dfs(node, depth) {
    if (!node) {
        return depth
    }
    return Math.max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
}

function bfs(node) {
    if (!node) {
        return 0
    }
    
    let depth = 0
    let pseudoQ = [node]
    
    while (pseudoQ.length) {
        const nextQ = []
        
        pseudoQ.forEach((node) => {
            node.left && nextQ.push(node.left)
            node.right && nextQ.push(node.right)
        })
        
        depth += 1
        pseudoQ = nextQ
    }
    
    return depth
}