
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        final_list = []
        def store_at_level(root, level):
            if not root:
                return
            
            if len(final_list) > level:
                final_list[level].append(root.val)
            else: 
                final_list.append([root.val])
            
            store_at_level(root.left, level + 1)
            store_at_level(root.right, level + 1)
        
        store_at_level(root, 0)

        return final_list
            

        