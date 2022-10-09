# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        cache = set()
        level = [root]
        
        while level:
            for node in level:
                if node.val in cache:
                    return True
                cache.add(k - node.val)
            level = [child for node in level for child in (node.left, node.right) if child is not None]
            
        return False