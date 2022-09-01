# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode, path_max = -10_001) -> int:
        if not root:
            return 0
        return (root.val >= path_max) + \
            self.goodNodes(root.left, max(root.val, path_max)) + \
            self.goodNodes(root.right, max(root.val, path_max))