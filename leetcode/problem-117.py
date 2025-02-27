
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root
        # keep track of level 
        # if level 1 
        # if level 2 
        # depth first traverse and put it onto level 1, level 2, level 3 

        levels = {}
        level = 0
        def traverse_and_store(node): 
            if not node: 
                return None
            nonlocal levels  # Use nonlocal to access the outer 'levels' variable
            nonlocal level
            if level not in levels:
                new_list = []
                new_list.append(node)
                levels[level] = new_list
            else: 
                levels[level].append(node)

            level += 1
            traverse_and_store(node.left)
            traverse_and_store(node.right)
            level -= 1


        traverse_and_store(root)

        # now traverse and point to the next 

        output = []
        for key in levels:
            for idx, node in enumerate(levels[key]): 
                output.append(levels[key][idx].val)
                if (idx == len(levels[key]) - 1):
                    output.append("#")

                # if there is a value to the right, add it 
                if idx < (len(levels[key]) - 1):
                    levels[key][idx].next = levels[key][idx + 1]



        return root
            
        # figure out how to solve for something to the right that's not on the immediate same level

        

        