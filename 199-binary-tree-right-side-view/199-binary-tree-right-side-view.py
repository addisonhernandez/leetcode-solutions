# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        visibleNodes = []
        
        # === BFS (right to left) ===
        queue = deque();
        
        if root:
            queue.append((root, 0))
        
        while queue:
            node, depth = queue.popleft()
            
            if depth == len(visibleNodes):
                visibleNodes.append(node.val)
            
            node.right and queue.append((node.right, depth + 1))
            node.left and queue.append((node.left, depth + 1))
        
        return visibleNodes