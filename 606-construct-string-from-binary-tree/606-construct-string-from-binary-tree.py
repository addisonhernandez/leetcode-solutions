# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        node_parts = [f"{root.val}"]
        
        if root.left is not None:
            node_parts.append(f"({self.tree2str(root.left)})")
            
        if root.right is not None:
            if root.left is None:
                node_parts.append("()")
            node_parts.append(f"({self.tree2str(root.right)})")
            
        return ''.join(node_parts)