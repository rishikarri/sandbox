from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder or not inorder:
            return None
        
        # preorder goes root, left, right
        # inorder goes left, root, right 
        root_val = preorder[0]
        root_idx = inorder.index(root_val)
        root = TreeNode(root_val)

        preorder_left = preorder[1:root_idx + 1]
        preorder_right = preorder[root_idx + 1:]
        inorder_left = inorder[:root_idx]
        inorder_right = inorder[root_idx + 1:]

        root.left = self.buildTree(preorder_left, inorder_left)
        root.right = self.buildTree(preorder_right, inorder_right)

        return root

        
        
pre_order = [3,9,20,15,7]
in_order = [9,3,15,20,7]


built_tree = Solution().buildTree(pre_order, in_order)


# a = [2, 4, 3, 9]

# b = a[1:3]

# print(a.index(4), 'index')

# print(b)