/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func addOneRow(root *TreeNode, val int, depth int) *TreeNode {
    if root == nil {
        return nil
    }
    if depth == 1 {
        return &TreeNode{ Val: val, Left: root }
    }
    if depth == 2 {
        root.Left = &TreeNode{ Val: val, Left: root.Left }
        root.Right = &TreeNode{ Val: val, Right: root.Right }
        return root
    }
    addOneRow(root.Left, val, depth - 1)
    addOneRow(root.Right, val, depth - 1)
    return root
}