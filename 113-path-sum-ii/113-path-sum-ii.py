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
        
        def dfs(node: TreeNode | None, path: List[int], path_sum: int):
            if node is None:
                return

            next_path = path + [node.val]
            next_sum = path_sum + node.val

            if node.left is None and node.right is None:
                if next_sum == targetSum:
                    paths.append(next_path)
                return

            dfs(node.left, next_path, next_sum)
            dfs(node.right, next_path, next_sum)
        
        dfs(root, [], 0)
        
        return paths