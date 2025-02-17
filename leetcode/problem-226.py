from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invert_tree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # loop through and swap left and right for every node 

        
        if not root:
            return None

        # Swap left and right subtrees
        root.left, root.right = self.invert_tree(root.right), self.invert_tree(root.left) 
        return root


        
# To call the invertTree method:

# 1. Create a binary tree (example)
root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)

# 2. Call the invertTree method 
inverted_root = Solution().invert_tree(root) 