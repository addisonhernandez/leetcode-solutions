/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let level = [root]
  const res = []
  
  while (level.length) {
    res.push(level.map((node) => node.val))
    level = level.flatMap((node) => node.children)
  }
  
  return res
};