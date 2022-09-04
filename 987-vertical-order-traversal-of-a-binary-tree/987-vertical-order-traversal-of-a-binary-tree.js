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
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  // nodes := { 
  //   col1: { 
  //     row1: [1, 2,...], 
  //     row2: [..] 
  //   }, 
  //   col2: {..} 
  // }
  const nodes = {}
  
  ;(function preOrder(node, row, col) {
    if (node.left) {
      preOrder(node.left, row + 1, col - 1)
    }
    
    if (!nodes.hasOwnProperty(col)) {
      nodes[col] = { [row]: [node.val] }
    } else if (!nodes[col].hasOwnProperty(row)) {
      nodes[col][row] = [node.val]
    } else {
      nodes[col][row].push(node.val);
    }
    
    if (node.right) {
      preOrder(node.right, row + 1, col + 1)
    }
  })(root, 0, 0)
  
  const ascending = (a, b) => a - b
  
  const res = []
  for (const col of Object.keys(nodes).sort(ascending)) {
    const vert = []
    for (const row of Object.keys(nodes[col]).sort(ascending)) {
      vert.push.apply(vert, nodes[col][row].sort(ascending))
    }
    res.push(vert)
  }
  
  return res
};
