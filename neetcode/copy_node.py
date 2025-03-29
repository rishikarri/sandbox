"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node: 
            return
        old_to_new = {}
        def clone(node_1):
            print(node_1.val)
            if node_1.val in old_to_new:
                return old_to_new[node_1.val]
            
            copy_node = Node(node_1.val)
            old_to_new[node_1.val] = copy_node

            for nei in node_1.neighbors:
                print('nei', nei.val)
                copy_node.neighbors.append(clone(nei))
            
            return copy_node
        
        return clone(node)

