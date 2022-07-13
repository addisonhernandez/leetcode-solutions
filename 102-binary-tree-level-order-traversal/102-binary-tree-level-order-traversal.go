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

func levelOrder(root *TreeNode) (levels [][]int) {
    if root == nil {
        return
    }
    
    queue := []depthNode{ depthNode{ node: root, depth: 0 } }
    
    for len(queue) != 0 {
        node, depth := queue[0].node, queue[0].depth
        queue = queue[1:] // dequeue
        
        if len(levels) == depth {
            levels = append(levels, []int{})
        }
        levels[depth] = append(levels[depth], node.Val)
        
        if node.Left != nil {
            queue = append(queue, depthNode{ node.Left, depth + 1 })
        }
        if node.Right != nil {
            queue = append(queue, depthNode{ node.Right, depth + 1 })
        }
    }
    
    return
}