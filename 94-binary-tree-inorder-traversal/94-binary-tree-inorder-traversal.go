/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) (traversal []int) {
    if root == nil {
        return
    }
    
    traversal = append(traversal, inorderTraversal(root.Left)...)
    traversal = append(traversal, root.Val)
    traversal = append(traversal, inorderTraversal(root.Right)...)
    
    return
}