/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
	if (!root) return []
  
  const res: number[][] = []
  let level: Node[] = [root]
  
  while (level.length) {
    res.push(level.map((node) => node.val))
    level = level.flatMap((node) => node.children)
  }
  
  return res
};