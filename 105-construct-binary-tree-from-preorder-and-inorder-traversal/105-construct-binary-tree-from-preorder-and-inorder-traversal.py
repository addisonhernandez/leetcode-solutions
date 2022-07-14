# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        pre_ind = 0
        
        val_to_ind = {v: i for i, v in enumerate(inorder)}
        
        def build(head: int, tail: int) -> Optional[TreeNode]:
            if head > tail:
                return None
            
            nonlocal pre_ind
            
            root_val = preorder[pre_ind]
            root_ind = val_to_ind[root_val]
            pre_ind += 1
            
            return TreeNode(
                root_val,
                build(head, root_ind - 1),
                build(root_ind + 1, tail)
            )
        
        return build(0, len(preorder) - 1)