from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        #  we know that postorder has the root at the end 
        if not inorder or not postorder: 
            return None 

        # inorder goes left, root, right
        # postorder goes left, right, root

        root_val = postorder[len(postorder) - 1]
        root_idx = inorder.index(root_val) # we use inorder to find out how long the left is 
        root = TreeNode(root_val)

        postorder_left = postorder[:root_idx]
        postorder_right = postorder[root_idx: len(postorder) - 1]
        inorder_left = inorder[:root_idx]
        inorder_right = inorder[root_idx + 1:]

        root.left = self.buildTree(inorder_left, postorder_left)
        root.right = self.buildTree(inorder_right, postorder_right)

        return root 

        
        
pre_order = [3,9,20,15,7]
in_order = [9,3,15,20,7]


built_tree = Solution().buildTree(pre_order, in_order)


# a = [2, 4, 3, 9]

# b = a[1:3]

# print(a.index(4), 'index')

# print(b)