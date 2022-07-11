/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

type depthNode struct {
    node  *TreeNode
    depth int
}

func rightSideView(root *TreeNode) []int {
    var visibleNodes []int
    
    // === BFS ===
    queue := []depthNode{}
    
    if root != nil {
        queue = append(queue, depthNode{node: root, depth: 0})
    }
    
    for len(queue) > 0 {
        node, depth := queue[0].node, queue[0].depth
        queue = queue[1:] // dequeue
        
        if depth == len(visibleNodes) {
            visibleNodes = append(visibleNodes, node.Val)
        }
        
        if node.Right != nil {
            queue = append(queue, depthNode{node.Right, depth + 1})
        }
        if node.Left != nil {
            queue = append(queue, depthNode{node.Left, depth + 1})
        }
    }
    
    return visibleNodes
}