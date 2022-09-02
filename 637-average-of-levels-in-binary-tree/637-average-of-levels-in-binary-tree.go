/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfLevels(root *TreeNode) []float64 {
    levelSums := make([]int, 0, 14)
    levelCount := make([]int, 0, 14)
    
    var traverse func (node *TreeNode, depth int)
    
    traverse = func (node *TreeNode, depth int) {
        if len(levelSums) == depth {
            levelSums = append(levelSums, 0.)
            levelCount = append(levelCount, 0)
        }
        
        levelSums[depth] += node.Val
        levelCount[depth] += 1
        
        if node.Left != nil {
            traverse(node.Left, depth + 1)
        }
        if node.Right != nil {
            traverse(node.Right, depth + 1)
        }
    }
    
    traverse(root, 0)
    
    avgs := make([]float64, len(levelSums))
    
    for i, sum := range levelSums {
        avgs[i] = float64(sum) / float64(levelCount[i])
    }
    
    return avgs
}