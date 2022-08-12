# function isValidBST(root: TreeNode | null, minVal: number = -Infinity, maxVal: number = Infinity): boolean {
#   return (
#     (root.val > minVal && root.val < maxVal) &&
#     (!root.left || isValidBST(root.left, minVal, root.val)) && 
#     (!root.right || isValidBST(root.right, root.val, maxVal))
#   );
# };
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode], min_val: int = -math.inf, max_val: int = math.inf) -> bool:
        return (
            root.val > min_val and root.val < max_val and
            (not root.left or self.isValidBST(root.left, min_val, root.val)) and
            (not root.right or self.isValidBST(root.right, root.val, max_val))
        )