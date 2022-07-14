/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null { 
  if (preorder.length === 0) {
    return null
  }
  
  const rootValue = preorder.shift();
  const inorderRootIndex = inorder.indexOf(rootValue);
  
  const leftSubTree = inorder.slice(0, inorderRootIndex);
  const rightSubTree = inorder.slice(inorderRootIndex + 1);
  
  const leftChild = leftSubTree.length > 0 
    ? buildTree(preorder, leftSubTree)
    : null;
  const rightChild = rightSubTree.length > 0
    ? buildTree(preorder, rightSubTree)
    : null;
  
  return new TreeNode(rootValue, leftChild, rightChild)
};