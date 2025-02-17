from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right




class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        if not root: 
            return []
        
        return_list = [] 

        def traverse_in_order(tree_node):
            if tree_node.left: 
                traverse_in_order(tree_node.left)
                
            
            return_list.append(tree_node.val)
            if tree_node.right: 
                traverse_in_order(tree_node.right)
        
        traverse_in_order(root)

        return return_list
            
             


        