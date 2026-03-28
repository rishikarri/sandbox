# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        sentinel = ListNode(0, head)
        slow = sentinel 
        fast = sentinel

        
        # get fast n steps ahead of slow
        for i in range(0, n):
            fast = fast.next
        
        # print('slow.val', slow.val)
        # print('fast.val', fast.val)

        while fast.next:
            slow = slow.next
            fast = fast.next
        
        # print('slow.val2', slow.val)
        # print('fast.va2', fast.val)

        # at this point, slow is at the spot where we skip the next one

        slow.next = slow.next.next

        return sentinel.next