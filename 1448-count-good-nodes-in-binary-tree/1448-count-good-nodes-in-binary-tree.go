/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func goodNodes(root *TreeNode) int {
    return dfs(root, root.Val)
}

func dfs(root *TreeNode, pathMax int) int {
    if root == nil {
        return 0
    }
    
    var good int
    
    if root.Val >= pathMax {
        good = 1
        pathMax = root.Val
    }
    
    return good + dfs(root.Left, pathMax) + dfs(root.Right, pathMax)
}