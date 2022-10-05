# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        # if root is None:
        #     return
        
        if depth == 1:
            return TreeNode(val, root, None)
        
        # if depth == 2:
        #     root.left = TreeNode(val, root.left, None)
        #     root.right = TreeNode(val, None, root.right)
        #     return root
        
        # self.addOneRow(root.left, val, depth - 1)
        # self.addOneRow(root.right, val, depth - 1)
        # return root
        
        level = [root]
        
        for _ in range(2, depth):
            level = [child for node in level for child in (node.left, node.right) if child is not None]
        
        for node in level:
            node.left = TreeNode(val, node.left, None)
            node.right = TreeNode(val, None, node.right)
        
        return root
