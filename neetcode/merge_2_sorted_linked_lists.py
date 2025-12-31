class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        return_list_dummy_start = ListNode(0, None)
        return_list_current = return_list_dummy_start

        current1 = list1
        current2 = list2
        # print(current1.val)
        while current1 and current2:
            if current1.val < current2.val:                
                return_list_current.next = current1
                current1 = current1.next
            else:
                return_list_current.next = current2
                current2 = current2.next   

            return_list_current = return_list_current.next    

        while current1: 
            return_list_current.next = current1
            current1 = current1.next
            return_list_current = return_list_current.next    
        while current2: 
            print(current2.val, 'current2 val')
            return_list_current.next = current2
            current2 = current2.next   
            return_list_current = return_list_current.next           

        return return_list_dummy_start.next
        




        
        
        