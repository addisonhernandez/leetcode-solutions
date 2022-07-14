# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        root_val = preorder.pop(0);
        root_ind = inorder.index(root_val)
        
        left_subtree = inorder[:root_ind]
        right_subtree = inorder[root_ind + 1:]
        
        left_child = self.buildTree(preorder, left_subtree) if left_subtree else None
        right_child = self.buildTree(preorder, right_subtree) if right_subtree else None
        
        return TreeNode(root_val, left_child, right_child)