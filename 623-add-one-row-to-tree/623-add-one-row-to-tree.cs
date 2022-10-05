/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution
{
    public TreeNode AddOneRow(TreeNode root, int val, int depth)
    {
        if (root == null) {
            return null;
        }
        if (depth == 1) 
        {
            return new TreeNode(val, root);
        }
        if (depth == 2)
        {
            root.left = new TreeNode(val, root.left, null);
            root.right = new TreeNode(val, null, root.right);
            return root;
        }
        AddOneRow(root.left, val, depth - 1);
        AddOneRow(root.right, val, depth - 1);
        return root;
    }
}