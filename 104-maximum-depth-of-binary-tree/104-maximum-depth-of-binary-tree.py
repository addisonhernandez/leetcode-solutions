# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def dfs(node: TreeNode | None, depth: int) -> int:
            if not node:
                return depth

            return max(dfs(node.left, depth + 1), dfs(node.right, depth + 1))
        
        return dfs(root, 0)
    
#        # BFS Solutions:   
#        if not root:
#            return 0
        
#         # BFS - nested list comprehension
#         level = [root]
#         depth = 0
        
#         while level:
#             level = [child for node in level for child in (node.left, node.right) if child is not None]
#             depth += 1
        
#         # BFS - queue
#         level = deque([root])
#         depth = 0
        
#         while level:
#             for _ in range(len(level)):
#                 node = level.popleft()
#                 if node.left:
#                     level.append(node.left)
#                 if node.right:
#                     level.append(node.right)
#             depth += 1
            
#         return depth
