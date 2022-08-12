/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
    return checkValid(root, math.MinInt, math.MaxInt)
}

func checkValid(node *TreeNode, minVal, maxVal int) bool {
    return node.Val > minVal && node.Val < maxVal && 
        (node.Left == nil || checkValid(node.Left, minVal, node.Val)) && 
        (node.Right == nil || checkValid(node.Right, node.Val, maxVal))
}
