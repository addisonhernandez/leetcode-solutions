# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        visibleNodes = []
        
#         # === BFS (right to left) ===
#         queue = deque();
        
#         if root:
#             queue.append((root, 0))
        
#         while queue:
#             node, depth = queue.popleft()
            
#             if depth == len(visibleNodes):
#                 visibleNodes.append(node.val)
            
#             node.right and queue.append((node.right, depth + 1))
#             node.left and queue.append((node.left, depth + 1))
        
#         # === DFS (right to left) ===
#         def dfs(node: Optional[TreeNode], depth: int):
#             if not node:
#                 return
            
#             if depth == len(visibleNodes):
#                 visibleNodes.append(node.val)
            
#             dfs(node.right, depth + 1)
#             dfs(node.left, depth + 1)
        
#         dfs(root, 0)

        # === Pythonic BFS ===
        level = []
        
        if root:
            level.append(root)
        
        while level:
            visibleNodes.append(level[-1].val)
            level = [child for node in level for child in (node.left, node.right) if child]
        
        return visibleNodes