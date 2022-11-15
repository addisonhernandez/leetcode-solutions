# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def countNodes(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        
        left = right = root
        height = 0

        while right is not None:
            left, right = left.left, right.right
            height += 1
        
        if left is None:
            return (1 << height) - 1
        
        return 1 + self.countNodes(root.left) + self.countNodes(root.right)
        