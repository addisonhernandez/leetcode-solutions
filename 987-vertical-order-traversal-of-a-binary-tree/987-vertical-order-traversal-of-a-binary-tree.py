# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        nodes = defaultdict(lambda: defaultdict(list))
        
        def pre_order(node: TreeNode | None, row: int, col: int):
            if node.left:
                pre_order(node.left, row + 1, col - 1)
            
            nodes[col][row].append(node.val)
            
            if node.right:
                pre_order(node.right, row + 1, col + 1)
        
        pre_order(root, 0, 0)

        res = []
        for col in sorted(nodes):
            lst = []
            for row in sorted(nodes[col]):
                lst.extend(sorted(nodes[col][row]))
            res.append(lst)
            
        return res