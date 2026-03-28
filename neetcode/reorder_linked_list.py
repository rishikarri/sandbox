# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        # find the center

        slow = head
        fast = head


        while fast and fast.next : 
            slow = slow.next
            fast = fast.next.next
        
        print('slow.val', slow.val)
        print('fast.val:', fast.val if fast else "None (Reached the end)")
        print('head.val', head.val)

        # now create 2 lists
        list2_head = slow.next
        list1_head = head

        # sever list2 from list 1 
        slow.next = None 

        # print('list1_head.val', list1_head.val)
        # print('list2_head.val', list2_head.val)
        
        # once you have list 1 and 2
        # reverse list 2

        current =  list2_head
        temp = current
        previous = None

        while current:
            temp = current.next 
            current.next = previous 
            previous = current
            current = temp
        # previous is now the starting point of the reversed second list
        

        list2_head = previous

        # now zip list 1 and list 2 together

        current1, current2 = list1_head, list2_head
        


        # 1, 2, 3
        #    c1
        #       t1
        # 6, 5, 4
        #    c2
        #       t2
        while current2:
            # save next values of each one 
            temp1, temp2 = current1.next, current2.next

            # weave 
            current1.next = current2
            current2.next = temp1
            
            # move things forward
            current1 = temp1 
            current2 = temp2


