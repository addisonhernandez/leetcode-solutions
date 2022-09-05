/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func diameterOfBinaryTree(root *TreeNode) int {
    diameter := 0
    
    var findDepth func (node *TreeNode) int
    
    findDepth = func (node *TreeNode) int {
        if node == nil {
            return 0
        }
        
        left := findDepth(node.Left)
        right := findDepth(node.Right)
        
        diameter = max(diameter, left + right)
        
        return 1 + max(left, right)
    }
    
    findDepth(root)
    
    return diameter
}

func max (a, b int) int {
    if a > b {
        return a
    }
    return b
}