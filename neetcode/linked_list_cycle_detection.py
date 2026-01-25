# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        visited_nodes = set()

        if not head: 
            return False 
            
        current = head
        while current.next:
            visited_nodes.add(current)
            if current.next in visited_nodes:
                return True
            
            current = current.next
        
        return False 


        