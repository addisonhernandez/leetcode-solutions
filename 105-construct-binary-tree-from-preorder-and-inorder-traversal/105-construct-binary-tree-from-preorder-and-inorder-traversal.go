/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val   int
 *     Left  *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(preorder []int, inorder []int) *TreeNode {
    // preIndex is the index of the current value in preorder.
    preIndex := 0
    
    // valToIndex maps the values in inorder to their index.
    // This saves us from an O(N) search of inorder each iteration.
    valToIndex := make(map[int]int)
    for i, v := range inorder {
        valToIndex[v] = i
    }
    
    var build func(head, tail int) *TreeNode
    
    build = func(head, tail int) *TreeNode {
        if (head > tail) {
            return nil
        }
        
        rootVal := preorder[preIndex]
        rootIndex := valToIndex[rootVal]
        preIndex += 1

        return &TreeNode{
            Val:   rootVal,
            Left:  build(head, rootIndex - 1),
            Right: build(rootIndex + 1, tail),
        }
    }
    
    return build(0, len(preorder) - 1)
}