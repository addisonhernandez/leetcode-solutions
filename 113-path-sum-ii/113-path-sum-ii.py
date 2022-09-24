# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        paths = []
        
        if root is None:
            return paths
        
        def dfs(node: TreeNode, path: List[int], path_sum: int):
            if node.left is None and node.right is None:
                if path_sum + node.val == targetSum:
                    paths.append(path + [node.val])
                return
            
            if node.left is not None:
                dfs(node.left, path + [node.val], path_sum + node.val)
            if node.right is not None:
                dfs(node.right, path + [node.val], path_sum + node.val)
        
        dfs(root, [], 0)
        
        return paths