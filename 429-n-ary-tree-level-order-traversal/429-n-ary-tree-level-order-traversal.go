/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func levelOrder(root *Node) [][]int {
    var res [][]int
    
    if root == nil {
        return res
    }
    
    level := []*Node{ root }
    
    for len(level) > 0 {
        size := len(level)
        var vals []int
        
        for _, node := range level {
            vals = append(vals, node.Val)
            level = append(level, node.Children...)
        }
        
        res = append(res, vals)
        level = level[size:]
    }
    
    return res
}